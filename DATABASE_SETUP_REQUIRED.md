# Database Setup Required

## Current Issue
The login errors you're experiencing are because the Supabase database hasn't been properly set up with the required tables and policies.

## Required Action
You need to run the database migration to create the necessary tables and security policies.

### Step 1: Access Supabase Dashboard
1. Go to: https://zuplyqfhioctteilbsfy.supabase.co
2. Log in to your Supabase account

### Step 2: Run the Migration
1. Click on "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy and paste the following complete migration:

```sql
-- Create custom types
CREATE TYPE consultation_type AS ENUM ('bodycam', 'deepfake', 'general');
CREATE TYPE consultation_status AS ENUM ('pending', 'in_progress', 'completed', 'cancelled');
CREATE TYPE urgency_level AS ENUM ('emergency', 'urgent', 'normal', 'low');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  role text DEFAULT 'user',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create consultations table
CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  type consultation_type NOT NULL,
  status consultation_status DEFAULT 'pending',
  urgency urgency_level NOT NULL,
  details text NOT NULL,
  contact_info jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  author text NOT NULL,
  image_url text NOT NULL,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can create own data" ON users;
DROP POLICY IF EXISTS "Users can insert own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;

-- Create policies for users table
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create policies for consultations table
CREATE POLICY "Users can read own consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create own consultations"
  ON consultations
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own consultations"
  ON consultations
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- Create policies for case_studies table (public read access)
CREATE POLICY "Anyone can read case studies"
  ON case_studies
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_consultations_updated_at
  BEFORE UPDATE ON consultations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample case studies
INSERT INTO case_studies (title, excerpt, content, category, author, image_url) VALUES
(
  '데이팅 앱을 통한 몸캠피싱 피해 사례',
  '외로움을 이용한 데이팅 앱 몸캠피싱의 실제 피해 사례와 대응 방법을 소개합니다.',
  'A씨는 외로운 일상 속에서 누군가와 대화를 나누고 싶어 데이팅 앱을 시작했습니다. 며칠간 메시지를 주고받은 상대가 영상통화를 제안했고, 통화 도중 자연스럽게 신체 노출을 유도하더니 그 장면이 녹화되었다며 협박이 시작됐습니다. 이후 A씨는 당신 연락처에 있는 사람들에게 전부 보내겠다는 메시지를 받고 극심한 불안에 시달리며 결국 경찰과 상담기관을 찾게 되었습니다.',
  '피해 사례',
  '보안전문가',
  'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg'
),
(
  '군인 대상 몸캠피싱 협박 사례',
  '군인의 특수한 상황을 악용한 몸캠피싱 사례와 군부대 내 대응 방안을 다룹니다.',
  '휴가 중 데이팅 앱에서 알게 된 여성과 몇 차례 대화를 나눈 뒤 영상통화를 하게 됐습니다. 통화 도중 상대가 음질이 안 좋다며 특정 앱을 설치하라고 해 그대로 따랐고, 이후 예상치 못한 상황에서 신체 노출 장면이 녹화됐습니다. 곧이어 저장된 영상과 함께 군부대 상관 연락처가 포함된 명단을 보여주며 협박 메시지가 날아왔습니다.',
  '피해 사례',
  '보안전문가',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
),
(
  'SNS 친구요청을 통한 몸캠피싱 접근',
  'SNS를 통한 자연스러운 접근으로 시작된 몸캠피싱 사례를 분석합니다.',
  'A씨는 평소처럼 SNS를 둘러보던 중 낯선 사람에게 친구 요청을 받았고, 프로필 사진이 자연스러워 별 의심 없이 수락했습니다. 상대는 빠르게 친근감을 형성하며 대화를 이어갔고, 얼마 지나지 않아 영상통화를 시도했습니다. 통화 중 자연스럽게 신체 노출을 유도하더니, 이내 녹화된 영상과 함께 친구 목록을 언급하며 협박 메시지를 보내오기 시작했습니다.',
  '피해 사례',
  '보안전문가',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
),
(
  '게임 채팅을 통한 몸캠피싱 사례',
  '온라인 게임을 통해 형성된 관계를 악용한 새로운 형태의 몸캠피싱 사례입니다.',
  'A씨는 평소 즐겨하던 모바일 게임에서 자주 매칭되던 유저와 자연스럽게 친해졌고, 게임 내 채팅을 통해 카카오톡 아이디를 주고받게 됐습니다. 이후 상대는 친근한 말투로 관심을 표현하며 영상통화를 요청했고, 통화 도중 신체 노출을 유도했습니다. 곧이어 해당 장면이 녹화되었다는 메시지와 함께 친구 목록과 게임 커뮤니티에 유포하겠다는 협박이 이어졌습니다.',
  '피해 사례',
  '보안전문가',
  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
);
```

4. Click "Run" to execute the migration
5. Wait for it to complete successfully

### Step 3: Test the Application
After running the migration:

1. **First, try signing up a new user** - Don't try to log in with existing credentials
2. Go to your application and click "Sign Up"
3. Create a new account with email and password
4. After successful signup, try logging in with those same credentials

### What This Migration Does
- Creates the `users` table with proper structure
- Sets up Row Level Security (RLS) policies
- **Crucially**: Adds the `INSERT` policy that allows new users to create their profiles
- Creates consultation and case study tables
- Adds sample data

### Why This Fixes the Login Error
The "Invalid login credentials" error occurs because:
1. No users exist in the database yet, OR
2. The database tables and policies aren't set up properly

This migration ensures that when users sign up, their profiles are properly created in the database, allowing them to log in successfully.

## Important Notes
- **Always sign up first** before trying to log in
- The migration is safe to run multiple times (uses `IF NOT EXISTS`)
- After running the migration, existing users may need to sign up again if their profiles weren't created properly