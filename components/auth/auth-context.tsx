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
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey || supabaseUrl === 'https://placeholder.supabase.co' || supabaseKey === 'placeholder-key') {
      console.warn('⚠️ Supabase not configured. Authentication features will be limited.')
      setIsLoading(false)
      return
    }
    
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
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl === 'https://placeholder.supabase.co') {
      return { success: false, error: 'Database not configured. Please set up Supabase credentials.' }
    }

    setIsLoading(true)
    try {
      console.log('🔐 Attempting login for:', email)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('❌ Login error:', error)
        setIsLoading(false)
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
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl === 'https://placeholder.supabase.co') {
      return { success: false, error: 'Database not configured. Please set up Supabase credentials.' }
    }

    setIsLoading(true)
    
    try {
      console.log('🚀 SIGNUP PROCESS STARTED')
      console.log('📧 Email:', email)
      console.log('👤 Name:', name)
      console.log('🔒 Password length:', password.length)
      
      // Step 1: Check if user already exists
      console.log('1️⃣ Checking if user already exists...')
      const { data: existingUser } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .single()

      if (existingUser) {
        console.error('❌ User already exists with this email')
        setIsLoading(false)
        return { success: false, error: 'User with this email already exists' }
      }

      // Step 2: Sign up with Supabase Auth
      console.log('2️⃣ Creating auth user...')
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: undefined, // Disable email confirmation
          data: {
            name: name // Include name in metadata
          }
        }
      })

      if (authError) {
        console.error('❌ Auth signup error:', authError)
        setIsLoading(false)
        return { success: false, error: authError.message }
      }

      if (!authData.user) {
        console.error('❌ No user returned from signup')
        setIsLoading(false)
        return { success: false, error: 'Signup failed - no user created' }
      }

      console.log('✅ Auth user created successfully:', authData.user.id)
      console.log('📧 User email confirmed:', authData.user.email_confirmed_at ? 'Yes' : 'No')

      // Step 3: Wait for auth user to be fully created
      console.log('⏳ Waiting for auth user to be fully created...')
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Step 4: Create user profile in our users table
      console.log('3️⃣ Creating user profile...')
      const { data: profileData, error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id,
            email,
            name,
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