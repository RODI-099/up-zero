-- Create chat_messages table for live chat functionality
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  consultation_id text NOT NULL,
  sender_id text NOT NULL,
  sender_name text NOT NULL,
  sender_type text NOT NULL CHECK (sender_type IN ('user', 'agent', 'system')),
  message text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS idx_chat_messages_consultation_id ON chat_messages(consultation_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_timestamp ON chat_messages(timestamp);

-- Enable Row Level Security
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view messages in their consultations" ON chat_messages
  FOR SELECT USING (
    consultation_id IN (
      SELECT id::text FROM consultations WHERE user_id = auth.uid()
    ) OR 
    consultation_id = auth.uid()::text OR
    consultation_id LIKE 'anonymous_%' -- Allow anonymous sessions
  );

CREATE POLICY "Users can insert messages in their consultations" ON chat_messages
  FOR INSERT WITH CHECK (
    consultation_id IN (
      SELECT id::text FROM consultations WHERE user_id = auth.uid()
    ) OR 
    consultation_id = auth.uid()::text OR
    consultation_id LIKE 'anonymous_%' -- Allow anonymous sessions
  );

-- Create chat_sessions table to track active sessions
CREATE TABLE IF NOT EXISTS chat_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  consultation_id text NOT NULL,
  user_id uuid REFERENCES users(id),
  agent_id text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'ended', 'transferred')),
  started_at timestamptz DEFAULT now(),
  ended_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS for chat_sessions
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own chat sessions" ON chat_sessions
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create chat sessions" ON chat_sessions
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- Create agents table for chat support
CREATE TABLE IF NOT EXISTS chat_agents (
  id text PRIMARY KEY,
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  status text DEFAULT 'offline' CHECK (status IN ('online', 'offline', 'busy', 'away')),
  specialization text[] DEFAULT '{}',
  max_concurrent_chats integer DEFAULT 5,
  current_chats integer DEFAULT 0,
  last_active timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Insert sample agents
INSERT INTO chat_agents (id, name, email, status, specialization) VALUES
  ('agent-001', '김보안', 'security@upozero.com', 'online', '{"bodycam", "deepfake", "general"}'),
  ('agent-002', '박전문', 'expert@upozero.com', 'online', '{"legal", "bodycam", "consultation"}'),
  ('agent-003', '이상담', 'counsel@upozero.com', 'offline', '{"deepfake", "prevention", "education"}')
ON CONFLICT (id) DO NOTHING;

-- Create function to automatically assign agents
CREATE OR REPLACE FUNCTION assign_chat_agent(consultation_type text DEFAULT 'general')
RETURNS text AS $$
DECLARE
  agent_id text;
BEGIN
  -- Find available agent with matching specialization
  SELECT id INTO agent_id
  FROM chat_agents
  WHERE status = 'online'
    AND current_chats < max_concurrent_chats
    AND (specialization @> ARRAY[consultation_type] OR 'general' = ANY(specialization))
  ORDER BY current_chats ASC, last_active DESC
  LIMIT 1;
  
  -- If no specialized agent, get any available agent
  IF agent_id IS NULL THEN
    SELECT id INTO agent_id
    FROM chat_agents
    WHERE status = 'online'
      AND current_chats < max_concurrent_chats
    ORDER BY current_chats ASC, last_active DESC
    LIMIT 1;
  END IF;
  
  -- Update agent's current chat count
  IF agent_id IS NOT NULL THEN
    UPDATE chat_agents
    SET current_chats = current_chats + 1,
        last_active = now()
    WHERE id = agent_id;
  END IF;
  
  RETURN agent_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to send automated welcome message
CREATE OR REPLACE FUNCTION send_welcome_message(session_consultation_id text, agent_name text DEFAULT '상담사')
RETURNS void AS $$
BEGIN
  INSERT INTO chat_messages (
    consultation_id,
    sender_id,
    sender_name,
    sender_type,
    message
  ) VALUES (
    session_consultation_id,
    'system',
    'upoZero 시스템',
    'system',
    '안녕하세요! upoZero 실시간 상담에 연결되었습니다. ' || agent_name || '가 곧 응답드릴 예정입니다. 어떤 도움이 필요하신지 말씀해주세요.'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
