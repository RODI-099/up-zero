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
import { useAuth } from "./auth-context"
import { Loader2, LogIn } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface LoginDialogProps {
  children: React.ReactNode
}

export function LoginDialog({ children }: LoginDialogProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, isLoading } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Login form submitted for:', email)
    
    if (!email || !password) {
      toast({
        title: "입력 오류",
        description: "이메일과 비밀번호를 모두 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    const result = await login(email, password)
    
    if (result.success) {
      toast({
        title: "로그인 성공",
        description: "환영합니다!",
      })
      setOpen(false)
      setEmail("")
      setPassword("")
    } else {
      console.error('Login failed:', result.error)
      toast({
        title: "로그인 실패",
        description: result.error || "이메일 또는 비밀번호가 올바르지 않습니다.",
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
            <LogIn className="h-5 w-5" />
            로그인
          </DialogTitle>
          <DialogDescription>
            upoZero 계정으로 로그인하세요
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  로그인 중...
                </>
              ) : (
                "로그인"
              )}
            </Button>
            <Button type="button" variant="link" className="text-sm">
              비밀번호를 잊으셨나요?
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}