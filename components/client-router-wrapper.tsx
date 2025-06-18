"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface ClientRouterWrapperProps {
  children: React.ReactNode
  redirectTo?: string
  requireAuth?: boolean
}

export function ClientRouterWrapper({
  children,
  redirectTo = "/auth/login",
  requireAuth = false,
}: ClientRouterWrapperProps) {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (requireAuth) {
      const userSession = document.cookie.split("; ").find((row) => row.startsWith("user_session="))

      if (!userSession) {
        router.push(redirectTo)
        return
      }
    }

    setIsReady(true)
  }, [router, redirectTo, requireAuth])

  if (requireAuth && !isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
