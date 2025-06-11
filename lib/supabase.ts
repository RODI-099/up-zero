import { createClient } from '@supabase/supabase-js'

// Default values to prevent crashes during development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Only show warnings if we're not using placeholder values
if (supabaseUrl === 'https://placeholder.supabase.co' || supabaseAnonKey === 'placeholder-key') {
  console.warn('⚠️ Using placeholder Supabase credentials. Please set up your environment variables.')
  console.warn('📝 Create a .env.local file with your Supabase credentials')
} else {
  console.log('✅ Supabase credentials loaded successfully')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    flowType: 'pkce'
  },
  global: {
    headers: {
      'X-Client-Info': 'upozero-web'
    }
  }
})

// Test connection only if we have real credentials
if (supabaseUrl !== 'https://placeholder.supabase.co') {
  supabase.auth.getSession().then(({ data, error }) => {
    if (error) {
      console.error('❌ Supabase connection test failed:', error)
    } else {
      console.log('✅ Supabase connection test successful')
      console.log('📊 Session status:', data.session ? 'Active' : 'No session')
    }
  })
}

// Types for our database tables
export interface User {
  id: string
  email: string
  name: string
  created_at: string
  updated_at: string
}

export interface Consultation {
  id: string
  user_id: string
  type: 'bodycam' | 'deepfake' | 'general'
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  urgency: 'emergency' | 'urgent' | 'normal' | 'low'
  details: string
  created_at: string
  updated_at: string
}

export interface CaseStudy {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  image_url: string
  published_at: string
  created_at: string
}