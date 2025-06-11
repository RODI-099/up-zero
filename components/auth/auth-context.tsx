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
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchUserProfile(session.user.id)
      }
      setIsLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.id)
      
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
      console.log('Fetching user profile for:', userId)
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching user profile:', error)
        return
      }

      if (data) {
        console.log('User profile fetched:', data)
        setUser({
          id: data.id,
          email: data.email,
          name: data.name
        })
      }
    } catch (error) {
      console.error('Error in fetchUserProfile:', error)
    }
  }

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    try {
      console.log('Attempting login for:', email)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('Login error:', error)
        setIsLoading(false)
        return { success: false, error: error.message }
      }

      if (data.user) {
        console.log('Login successful:', data.user.id)
        await fetchUserProfile(data.user.id)
        setIsLoading(false)
        return { success: true }
      }
      
      setIsLoading(false)
      return { success: false, error: 'Login failed' }
    } catch (error) {
      console.error('Login exception:', error)
      setIsLoading(false)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  const signup = async (email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    try {
      console.log('Attempting signup for:', email, 'with name:', name)
      
      // First, sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: undefined // Disable email confirmation
        }
      })

      if (authError) {
        console.error('Auth signup error:', authError)
        setIsLoading(false)
        return { success: false, error: authError.message }
      }

      if (!authData.user) {
        console.error('No user returned from signup')
        setIsLoading(false)
        return { success: false, error: 'Signup failed - no user created' }
      }

      console.log('Auth signup successful, user ID:', authData.user.id)

      // Wait a moment for the auth user to be fully created
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Create user profile in our users table
      console.log('Creating user profile...')
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
        console.error('Profile creation error:', profileError)
        // If profile creation fails, we should still consider signup successful
        // since the auth user was created
        setUser({
          id: authData.user.id,
          email,
          name
        })
        setIsLoading(false)
        return { success: true }
      }

      console.log('Profile created successfully:', profileData)

      // Set user data
      setUser({
        id: authData.user.id,
        email,
        name
      })

      setIsLoading(false)
      return { success: true }
      
    } catch (error) {
      console.error('Signup exception:', error)
      setIsLoading(false)
      return { success: false, error: 'An unexpected error occurred during signup' }
    }
  }

  const logout = async () => {
    console.log('Logging out...')
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