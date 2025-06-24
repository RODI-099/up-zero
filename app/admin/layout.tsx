"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  Shield,
  Bell,
  Menu,
  LogOut,
  User,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth/auth-context"
import { supabase } from "@/lib/supabase"

const sidebarItems = [
  {
    title: "대시보드",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "사용자 관리",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "콘텐츠 관리",
    href: "/admin/content",
    icon: FileText,
  },
  {
    title: "상담 관리",
    href: "/admin/consultations",
    icon: MessageSquare,
  },
  {
    title: "보안 모니터링",
    href: "/admin/security",
    icon: Shield,
  },
  {
    title: "분석 및 통계",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "알림 관리",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "시스템 설정",
    href: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isCheckingAccess, setIsCheckingAccess] = useState(true)
  const [hasAdminAccess, setHasAdminAccess] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuth()

  useEffect(() => {
    const checkAdminAccess = async () => {
      console.log('🔐 Checking admin access...')
      
      // If auth is still loading, wait
      if (authLoading) {
        console.log('⏳ Auth still loading...')
        return
      }

      // If no user, redirect to login
      if (!user) {
        console.log('❌ No user found, redirecting to home')
        router.push('/')
        return
      }

      try {
        // Get user data from database to check role
        console.log('📋 Fetching user role for:', user.id)
        const { data: userData, error } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single()

        if (error) {
          console.error('❌ Error fetching user role:', error)
          router.push('/')
          return
        }

        console.log('👤 User role:', userData?.role)

        // Check if user has admin role
        if (userData?.role === 'admin') {
          console.log('✅ Admin access granted')
          setHasAdminAccess(true)
        } else {
          console.log('❌ Access denied - user is not admin')
          router.push('/')
          return
        }
      } catch (error) {
        console.error('💥 Error checking admin access:', error)
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
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

  const Sidebar = ({ className }: { className?: string }) => (
    <div className={cn("flex h-full flex-col bg-gray-900 text-white", className)}>
      <div className="flex h-16 items-center px-6">
        <Link href="/admin" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-blue-400">upoZero</div>
          <div className="text-sm text-gray-400">Admin</div>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white",
              )}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-medium">{user?.name}</div>
            <div className="text-xs text-gray-400">{user?.email}</div>
            <div className="text-xs text-blue-400">관리자</div>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-gray-300 border-gray-600 hover:bg-gray-800"
          onClick={() => router.push('/')}
        >
          <LogOut className="mr-2 h-4 w-4" />
          사이트로 돌아가기
        </Button>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center space-x-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
            </Sheet>
            <h1 className="text-xl font-semibold text-gray-900">
              {sidebarItems.find((item) => item.href === pathname)?.title || "관리자 대시보드"}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/">사이트 보기</Link>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}