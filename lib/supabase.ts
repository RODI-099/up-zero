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
const validSupabaseUrl = isPlaceholderUrl ? 'https://placeholder.supabase.co' : supabaseUrl
const validSupabaseKey = isPlaceholderKey ? 'placeholder-key' : supabaseAnonKey

// Only show warnings if we're not using placeholder values
if (isPlaceholderUrl || isPlaceholderKey) {
  console.warn('⚠️ Using placeholder Supabase credentials. Please set up your environment variables.')
  console.warn('📝 Create a .env.local file with your Supabase credentials')
  console.warn('🔗 Get your credentials from: https://supabase.com/dashboard/project/[your-project]/settings/api')
} else {
  console.log('✅ Supabase credentials loaded successfully')
}

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

// Test connection only if we have real credentials
if (!isPlaceholderUrl && !isPlaceholderKey) {
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