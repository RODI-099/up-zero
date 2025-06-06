"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">upoZero</div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>유포제로</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about/story"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">스토리</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">upoZero의 시작과 비전</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about/journey"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">걸어온길</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          회사의 성장 과정과 주요 성과
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about/location"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">오시는길</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          회사 위치 및 찾아오는 방법
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>서비스안내</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">서비스</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          제공하는 모든 서비스 소개
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/solutions"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">솔루션</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">맞춤형 보안 솔루션</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/demo"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">데모</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">실시간 데모 체험</p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/support"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    고객지원
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>홍보센터</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/pr/news"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">뉴스</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">최신 뉴스와 보도자료</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/pr/awards"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">수상&협력</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">수상 내역 및 파트너십</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/pr/brochure"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">브로슈어</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          회사 소개 자료 다운로드
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/magazine"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    매거진
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>상담문의</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/consultation/bodycam"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">몸캠피싱</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          몸캠피싱 피해 상담 및 대응
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/consultation/deepfake"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">딥페이크</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          딥페이크 관련 상담 및 솔루션
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="hidden lg:inline-flex">
            <Link href="/consultation">무료 상담</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                  홈
                </Link>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">유포제로</div>
                  <div className="ml-4 space-y-2">
                    <Link href="/about/story" className="block text-sm" onClick={() => setIsOpen(false)}>
                      스토리
                    </Link>
                    <Link href="/about/journey" className="block text-sm" onClick={() => setIsOpen(false)}>
                      걸어온길
                    </Link>
                    <Link href="/about/location" className="block text-sm" onClick={() => setIsOpen(false)}>
                      오시는길
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">서비스안내</div>
                  <div className="ml-4 space-y-2">
                    <Link href="/services" className="block text-sm" onClick={() => setIsOpen(false)}>
                      서비스
                    </Link>
                    <Link href="/services/solutions" className="block text-sm" onClick={() => setIsOpen(false)}>
                      솔루션
                    </Link>
                    <Link href="/services/demo" className="block text-sm" onClick={() => setIsOpen(false)}>
                      데모
                    </Link>
                  </div>
                </div>
                <Link href="/support" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                  고객지원
                </Link>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">홍보센터</div>
                  <div className="ml-4 space-y-2">
                    <Link href="/pr/news" className="block text-sm" onClick={() => setIsOpen(false)}>
                      뉴스
                    </Link>
                    <Link href="/pr/awards" className="block text-sm" onClick={() => setIsOpen(false)}>
                      수상&협력
                    </Link>
                    <Link href="/pr/brochure" className="block text-sm" onClick={() => setIsOpen(false)}>
                      브로슈어
                    </Link>
                  </div>
                </div>
                <Link href="/magazine" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                  매거진
                </Link>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">상담문의</div>
                  <div className="ml-4 space-y-2">
                    <Link href="/consultation/bodycam" className="block text-sm" onClick={() => setIsOpen(false)}>
                      몸캠피싱
                    </Link>
                    <Link href="/consultation/deepfake" className="block text-sm" onClick={() => setIsOpen(false)}>
                      딥페이크
                    </Link>
                  </div>
                </div>
                <Button asChild className="mt-4">
                  <Link href="/consultation" onClick={() => setIsOpen(false)}>
                    무료 상담
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
