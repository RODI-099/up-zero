import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

// Get environment variables with fallbacks
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zuplyqfhioctteilbsfy.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1cGx5cWZoaW9jdHRlaWxic2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MTI3MzAsImV4cCI6MjA2NTA4ODczMH0.c7c8Fk2j2s5ZvQRfAewv4gMc5CQoaT0pdfcdZ3zQxyk'

console.log('🔧 Supabase client configuration:')
console.log('📍 URL:', supabaseUrl)
console.log('🔑 Anon Key:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'Missing')

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
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

// Test connection function
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.auth.getSession()
    console.log('✅ Supabase connection test successful')
    return { success: true, data, error }
  } catch (error) {
    console.error('❌ Supabase connection test failed:', error)
    return { success: false, error }
  }
}

// Types for our database tables
export interface User {
  id: string
  email: string
  name: string
  role: string
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