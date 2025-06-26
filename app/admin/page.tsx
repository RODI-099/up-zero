"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/components/auth/auth-context"
import { useRouter } from "next/navigation"
import { Loader2, Eye, EyeOff, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export const dynamic = 'force-dynamic'

export default function AdminLoginPage() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!id || !password) {
      toast({
        title: "입력 오류",
        description: "ID와 비밀번호를 모두 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await login(id, password)
      
      if (result.success) {
        toast({
          title: "로그인 성공",
          description: "관리자 페이지로 이동합니다.",
        })
        router.push("/admin/dashboard")
      } else {
        toast({
          title: "로그인 실패",
          description: result.error || "ID 또는 비밀번호가 올바르지 않습니다.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "로그인 오류",
        description: "로그인 중 오류가 발생했습니다.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-wider mb-2">ADMINISTRATOR</h1>
        </div>

        {/* Login Card */}
        <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardDescription className="text-gray-300 text-base">
              로그인이 필요한 페이지 입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ID Field */}
              <div className="space-y-2">
                <Label htmlFor="id" className="text-white font-medium flex items-center gap-2">
                  <span className="text-lg">🔑</span> ID
                </Label>
                <div className="relative">
                  <Input
                    id="id"
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12 pr-12"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-300">👤</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium flex items-center gap-2">
                  <span className="text-lg">🔐</span> PASSWORD
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gray-700 hover:bg-gray-600 text-white font-medium text-lg border border-gray-600"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    로그인 중...
                  </>
                ) : (
                  "LOGIN"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer Notice */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>관리자모드는 IE9 이하의 브라우저를 지원하지 않습니다.</span>
          </div>
        </div>
      </div>
    </div>
  )
}