"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "./auth-context"
import { Loader2, UserPlus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface SignupDialogProps {
  children: React.ReactNode
}

export function SignupDialog({ children }: SignupDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const { signup, isLoading } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('🚀 SIGNUP DEBUG: Form submitted')
    console.log('📝 Form data:', { 
      name: name?.trim() || 'EMPTY', 
      email: email?.trim() || 'EMPTY', 
      passwordLength: password?.length || 0,
      confirmPasswordLength: confirmPassword?.length || 0,
      agreeTerms,
      agreePrivacy
    })
    
    // Enhanced validation with detailed logging
    if (!name?.trim()) {
      console.error('❌ VALIDATION FAILED: Name is empty')
      toast({
        title: "입력 오류",
        description: "이름을 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    if (!email?.trim()) {
      console.error('❌ VALIDATION FAILED: Email is empty')
      toast({
        title: "입력 오류",
        description: "이메일을 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      console.error('❌ VALIDATION FAILED: Invalid email format')
      toast({
        title: "이메일 형식 오류",
        description: "올바른 이메일 주소를 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    if (!password) {
      console.error('❌ VALIDATION FAILED: Password is empty')
      toast({
        title: "입력 오류",
        description: "비밀번호를 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    if (!confirmPassword) {
      console.error('❌ VALIDATION FAILED: Confirm password is empty')
      toast({
        title: "입력 오류",
        description: "비밀번호 확인을 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    if (password !== confirmPassword) {
      console.error('❌ VALIDATION FAILED: Passwords do not match')
      toast({
        title: "비밀번호 불일치",
        description: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
      })
      return
    }

    if (password.length < 6) {
      console.error('❌ VALIDATION FAILED: Password too short')
      toast({
        title: "비밀번호 오류",
        description: "비밀번호는 최소 6자 이상이어야 합니다.",
        variant: "destructive",
      })
      return
    }

    if (!agreeTerms) {
      console.error('❌ VALIDATION FAILED: Terms not agreed')
      toast({
        title: "약관 동의 필요",
        description: "이용약관에 동의해주세요.",
        variant: "destructive",
      })
      return
    }

    if (!agreePrivacy) {
      console.error('❌ VALIDATION FAILED: Privacy not agreed')
      toast({
        title: "약관 동의 필요",
        description: "개인정보처리방침에 동의해주세요.",
        variant: "destructive",
      })
      return
    }

    console.log('✅ ALL VALIDATIONS PASSED - Starting signup process')

    try {
      console.log('🔄 Calling signup function...')
      const result = await signup(email.trim(), password, name.trim())
      
      console.log('📋 SIGNUP RESULT:', result)
      
      if (result.success) {
        console.log('🎉 SIGNUP SUCCESSFUL!')
        toast({
          title: "회원가입 성공",
          description: "upoZero에 오신 것을 환영합니다!",
        })
        setOpen(false)
        // Reset form
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setAgreeTerms(false)
        setAgreePrivacy(false)
      } else {
        console.error('💥 SIGNUP FAILED:', result.error)
        
        // Enhanced error handling with specific messages
        let errorMessage = result.error || "회원가입 중 오류가 발생했습니다."
        
        if (result.error?.includes('already registered')) {
          errorMessage = "이미 가입된 이메일입니다. 로그인을 시도해보세요."
        } else if (result.error?.includes('invalid email')) {
          errorMessage = "유효하지 않은 이메일 주소입니다."
        } else if (result.error?.includes('weak password')) {
          errorMessage = "비밀번호가 너무 약합니다. 더 강한 비밀번호를 사용해주세요."
        }
        
        toast({
          title: "회원가입 실패",
          description: errorMessage,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('💥 SIGNUP EXCEPTION:', error)
      toast({
        title: "회원가입 오류",
        description: "예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            회원가입
          </DialogTitle>
          <DialogDescription>
            upoZero 계정을 만들어 더 많은 서비스를 이용하세요
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름 *</Label>
            <Input
              id="name"
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => {
                console.log('📝 Name changed:', e.target.value)
                setName(e.target.value)
              }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">이메일 *</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => {
                console.log('📧 Email changed:', e.target.value)
                setEmail(e.target.value)
              }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">비밀번호 *</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="최소 6자 이상"
              value={password}
              onChange={(e) => {
                console.log('🔒 Password changed, length:', e.target.value.length)
                setPassword(e.target.value)
              }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">비밀번호 확인 *</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              value={confirmPassword}
              onChange={(e) => {
                console.log('🔒 Confirm password changed, length:', e.target.value.length)
                setConfirmPassword(e.target.value)
              }}
              required
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeTerms}
                onCheckedChange={(checked) => {
                  console.log('📋 Terms agreement changed:', checked)
                  setAgreeTerms(checked as boolean)
                }}
              />
              <Label htmlFor="terms" className="text-sm">
                이용약관에 동의합니다 *
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="privacy" 
                checked={agreePrivacy}
                onCheckedChange={(checked) => {
                  console.log('🔒 Privacy agreement changed:', checked)
                  setAgreePrivacy(checked as boolean)
                }}
              />
              <Label htmlFor="privacy" className="text-sm">
                개인정보처리방침에 동의합니다 *
              </Label>
            </div>
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                가입 중...
              </>
            ) : (
              "회원가입"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}