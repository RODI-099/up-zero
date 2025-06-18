"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

interface AuthUser {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: AuthUser | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('🔄 AuthProvider: Initializing...')
    
    // Check if we have valid Supabase credentials
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zuplyqfhioctteilbsfy.supabase.co'
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1cGx5cWZoaW9jdHRlaWxic2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MTI3MzAsImV4cCI6MjA2NTA4ODczMH0.c7c8Fk2j2s5ZvQRfAewv4gMc5CQoaT0pdfcdZ3zQxyk'
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('❌ Error getting session:', error)
      } else if (session?.user) {
        console.log('✅ Found existing session for user:', session.user.id)
        fetchUserProfile(session.user.id)
      } else {
        console.log('ℹ️ No existing session found')
      }
      setIsLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('🔄 Auth state changed:', event, session?.user?.id)
      
      if (session?.user) {
        await fetchUserProfile(session.user.id)
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log('📋 Fetching user profile for:', userId)
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('❌ Error fetching user profile:', error)
        return
      }

      if (data) {
        console.log('✅ User profile fetched:', data)
        setUser({
          id: data.id,
          email: data.email,
          name: data.name
        })
      }
    } catch (error) {
      console.error('💥 Exception in fetchUserProfile:', error)
    }
  }

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Trim whitespace from inputs
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    setIsLoading(true)
    try {
      console.log('🔐 Attempting login for:', trimmedEmail)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password: trimmedPassword,
      })

      if (error) {
        console.error('❌ Login error:', error)
        setIsLoading(false)
        
        // Provide more specific error messages
        if (error.message.includes('Invalid login credentials')) {
          return { success: false, error: '이메일 또는 비밀번호가 올바르지 않습니다. 다시 확인해주세요.' }
        } else if (error.message.includes('Email not confirmed')) {
          return { success: false, error: '이메일 인증이 필요합니다. 이메일을 확인해주세요.' }
        } else if (error.message.includes('Too many requests')) {
          return { success: false, error: '너무 많은 로그인 시도가 있었습니다. 잠시 후 다시 시도해주세요.' }
        }
        
        return { success: false, error: error.message }
      }

      if (data.user) {
        console.log('✅ Login successful:', data.user.id)
        await fetchUserProfile(data.user.id)
        setIsLoading(false)
        return { success: true }
      }
      
      setIsLoading(false)
      return { success: false, error: 'Login failed' }
    } catch (error) {
      console.error('💥 Login exception:', error)
      setIsLoading(false)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  const signup = async (email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> => {
    // Trim whitespace from inputs
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()
    const trimmedName = name.trim()

    setIsLoading(true)
    
    try {
      console.log('🚀 SIGNUP PROCESS STARTED')
      console.log('📧 Email:', trimmedEmail)
      console.log('👤 Name:', trimmedName)
      console.log('🔒 Password length:', trimmedPassword.length)
      
      // Step 1: Sign up with Supabase Auth
      console.log('1️⃣ Creating auth user...')
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: trimmedEmail,
        password: trimmedPassword,
        options: {
          emailRedirectTo: undefined, // Disable email confirmation
          data: {
            name: trimmedName // Include name in metadata
          }
        }
      })

      if (authError) {
        console.error('❌ Auth signup error:', authError)
        setIsLoading(false)
        
        // Provide more specific error messages
        if (authError.message.includes('User already registered')) {
          return { success: false, error: '이미 가입된 이메일입니다. 로그인을 시도해보세요.' }
        } else if (authError.message.includes('Password should be at least')) {
          return { success: false, error: '비밀번호는 최소 6자 이상이어야 합니다.' }
        } else if (authError.message.includes('Unable to validate email address')) {
          return { success: false, error: '유효하지 않은 이메일 주소입니다.' }
        } else if (authError.message.includes('Signup is disabled')) {
          return { success: false, error: '현재 회원가입이 비활성화되어 있습니다.' }
        }
        
        return { success: false, error: authError.message }
      }

      if (!authData.user) {
        console.error('❌ No user returned from signup')
        setIsLoading(false)
        return { success: false, error: 'Signup failed - no user created' }
      }

      console.log('✅ Auth user created successfully:', authData.user.id)
      console.log('📧 User email confirmed:', authData.user.email_confirmed_at ? 'Yes' : 'No')

      // Step 2: Create user profile in our users table
      console.log('2️⃣ Creating user profile...')
      const { data: profileData, error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id,
            email: trimmedEmail,
            name: trimmedName,
          }
        ])
        .select()
        .single()

      if (profileError) {
        console.error('❌ Profile creation error:', profileError)
        console.log('🔄 Attempting to fetch existing profile...')
        
        // Try to fetch existing profile
        const { data: existingProfile, error: fetchError } = await supabase
          .from('users')
          .select('*')
          .eq('id', authData.user.id)
          .single()

        if (fetchError) {
          console.error('❌ Failed to fetch existing profile:', fetchError)
          
          // Try to clean up the auth user if profile creation failed
          console.log('🧹 Attempting to clean up auth user...')
          await supabase.auth.signOut()
          
          setIsLoading(false)
          return { success: false, error: 'Failed to create user profile. Please try again.' }
        }

        if (existingProfile) {
          console.log('✅ Found existing profile:', existingProfile)
          setUser({
            id: existingProfile.id,
            email: existingProfile.email,
            name: existingProfile.name
          })
          setIsLoading(false)
          return { success: true }
        }
      } else {
        console.log('✅ Profile created successfully:', profileData)
        setUser({
          id: profileData.id,
          email: profileData.email,
          name: profileData.name
        })
      }

      console.log('🎉 SIGNUP PROCESS COMPLETED SUCCESSFULLY')
      setIsLoading(false)
      return { success: true }
      
    } catch (error) {
      console.error('💥 Signup exception:', error)
      setIsLoading(false)
      return { success: false, error: 'An unexpected error occurred during signup. Please try again.' }
    }
  }

  const logout = async () => {
    console.log('🚪 Logging out...')
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}