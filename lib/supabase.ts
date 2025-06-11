import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

console.log('🔧 Supabase client configuration:')
console.log('📍 URL:', supabaseUrl)
console.log('🔑 Anon Key:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'Missing')

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
})

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