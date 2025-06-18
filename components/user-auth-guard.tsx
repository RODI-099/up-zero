"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface UserAuthGuardProps {
  children: React.ReactNode
}

export function UserAuthGuard({ children }: UserAuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = () => {
      const userSession = document.cookie.split("; ").find((row) => row.startsWith("user_session="))
      setIsAuthenticated(!!userSession)
    }

    checkAuth()
  }, [])

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">인증 확인 중...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    // Redirect to login page
    if (typeof window !== "undefined") {
      window.location.href = "/auth/login"
    }
    return null
  }

  return <>{children}</>
}
