"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./auth-context"
import { supabase } from "@/lib/supabase"
import { Loader2 } from "lucide-react"

interface AdminGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function AdminGuard({ children, fallback }: AdminGuardProps) {
  const [isCheckingAccess, setIsCheckingAccess] = useState(true)
  const [hasAdminAccess, setHasAdminAccess] = useState(false)
  const { user, isLoading: authLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const checkAdminAccess = async () => {
      // If auth is still loading, wait
      if (authLoading) return

      // If no user, redirect to login
      if (!user) {
        router.push('/auth/login')
        return
      }

      try {
        // Get user data from database to check role
        const { data: userData, error } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single()

        if (error) {
          console.error('Error fetching user role:', error)
          router.push('/')
          return
        }

        // Check if user has admin role
        if (userData?.role === 'admin') {
          setHasAdminAccess(true)
        } else {
          router.push('/')
          return
        }
      } catch (error) {
        console.error('Error checking admin access:', error)
        router.push('/')
        return
      } finally {
        setIsCheckingAccess(false)
      }
    }

    checkAdminAccess()
  }, [user, authLoading, router])

  // Show loading while checking access
  if (authLoading || isCheckingAccess) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">관리자 권한을 확인하는 중...</p>
        </div>
      </div>
    )
  }

  // If no admin access, don't render anything (user will be redirected)
  if (!hasAdminAccess) {
    return null
  }

  return <>{children}</>
}