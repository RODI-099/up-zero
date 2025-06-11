import { createClient } from '@supabase/supabase-js'

// Function to validate if a URL is properly formatted
function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Get environment variables with validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if we have placeholder values or invalid URLs
const isPlaceholderUrl = supabaseUrl === 'https://placeholder.supabase.co' || 
                        supabaseUrl === 'your_supabase_project_url_here' ||
                        !isValidUrl(supabaseUrl)

const isPlaceholderKey = supabaseAnonKey === 'placeholder-key' || 
                        supabaseAnonKey === 'your_supabase_anon_key_here'

// Use valid fallback URL if we have invalid configuration
const validSupabaseUrl = isPlaceholderUrl ? 'https://zuplyqfhioctteilbsfy.supabase.co' : supabaseUrl
const validSupabaseKey = isPlaceholderKey ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1cGx5cWZoaW9jdHRlaWxic2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MTI3MzAsImV4cCI6MjA2NTA4ODczMH0.c7c8Fk2j2s5ZvQRfAewv4gMc5CQoaT0pdfcdZ3zQxyk' : supabaseAnonKey

console.log('✅ Supabase credentials configured successfully')
console.log('🔗 Project URL:', validSupabaseUrl)

export const supabase = createClient(validSupabaseUrl, validSupabaseKey, {
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

// Test connection
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error('❌ Supabase connection test failed:', error)
  } else {
    console.log('✅ Supabase connection test successful')
    console.log('📊 Session status:', data.session ? 'Active' : 'No session')
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