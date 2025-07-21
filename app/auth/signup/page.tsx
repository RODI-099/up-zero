"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User, Phone, Shield, ArrowLeft, CheckCircle } from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  const { signup, user } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && user) {
      router.push("/dashboard")
    }
  }, [mounted, user, router])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    setError("") // Clear error when user types
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("이름을 입력해주세요.")
      return false
    }
    if (!formData.email.trim()) {
      setError("이메일을 입력해주세요.")
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("올바른 이메일 형식을 입력해주세요.")
      return false
    }
    if (!formData.password) {
      setError("비밀번호를 입력해주세요.")
      return false
    }
    if (formData.password.length < 8) {
      setError("비밀번호는 8자 이상이어야 합니다.")
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.")
      return false
    }
    if (!formData.agreeTerms) {
      setError("이용약관에 동의해주세요.")
      return false
    }
    if (!formData.agreePrivacy) {
      setError("개인정보 처리방침에 동의해주세요.")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Check if user already exists in localStorage (demo purposes)
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const existingUser = users.find((u: any) => u.email === formData.email)

      if (existingUser) {
        setError("이미 등록된 이메일입니다.")
        setIsLoading(false)
        return
      }

      // Try Supabase signup first
      const signupResult = await signup(formData.email, formData.password, formData.name)
      
      if (signupResult.success) {
        // Also store in localStorage for demo compatibility
        const newUser = {
          id: Date.now().toString(),
          email: formData.email,
          password: formData.password, // In real app, this would be hashed
          name: formData.name,
          phone: formData.phone,
          agreeMarketing: formData.agreeMarketing,
          createdAt: new Date().toISOString()
        }

        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))

        setIsSuccess(true)
        
        // Set cookies for compatibility
        document.cookie = `user_session=true; path=/; max-age=86400`
        document.cookie = `user_email=${newUser.email}; path=/; max-age=86400`
        document.cookie = `user_name=${newUser.name}; path=/; max-age=86400`
        document.cookie = `user_phone=${newUser.phone}; path=/; max-age=86400`

        // Redirect after showing success message
        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      } else {
        // If Supabase fails, fall back to localStorage only
        console.log("Supabase signup failed, using localStorage only")
        
        const newUser = {
          id: Date.now().toString(),
          email: formData.email,
          password: formData.password,
          name: formData.name,
          phone: formData.phone,
          agreeMarketing: formData.agreeMarketing,
          createdAt: new Date().toISOString()
        }

        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))

        setIsSuccess(true)
        
        document.cookie = `user_session=true; path=/; max-age=86400`
        document.cookie = `user_email=${newUser.email}; path=/; max-age=86400`
        document.cookie = `user_name=${newUser.name}; path=/; max-age=86400`
        document.cookie = `user_phone=${newUser.phone}; path=/; max-age=86400`

        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      }
    } catch (error) {
      console.error("Signup error:", error)
      setError("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardContent className="p-12 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-green-600 mb-4">회원가입 완료!</h1>
            <p className="text-gray-600 mb-6">
              upoZero에 오신 것을 환영합니다. 곧 대시보드로 이동합니다.
            </p>
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            홈으로 돌아가기
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
            <CardDescription>
              upoZero 계정을 만들어 개인화된 보안 서비스를 시작하세요
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름 *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일 *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">연락처 (선택)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">비밀번호 *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="8자 이상 입력하세요"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">비밀번호 확인 *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="비밀번호를 다시 입력하세요"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                    required
                  />
                  <Label htmlFor="agreeTerms" className="text-sm leading-5">
                    <span className="text-red-500">*</span> 이용약관에 동의합니다.{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      보기
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onCheckedChange={(checked) => handleInputChange("agreePrivacy", checked as boolean)}
                    required
                  />
                  <Label htmlFor="agreePrivacy" className="text-sm leading-5">
                    <span className="text-red-500">*</span> 개인정보 처리방침에 동의합니다.{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      보기
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeMarketing"
                    checked={formData.agreeMarketing}
                    onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked as boolean)}
                  />
                  <Label htmlFor="agreeMarketing" className="text-sm leading-5">
                    마케팅 정보 수신에 동의합니다. (선택)
                  </Label>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg" 
                disabled={isLoading || !formData.agreeTerms || !formData.agreePrivacy}
              >
                {isLoading ? "계정 생성 중..." : "회원가입"}
              </Button>
            </form>

            <div className="text-center text-sm text-gray-600">
              이미 계정이 있으신가요?{" "}
              <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
                로그인
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
