"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp, Download, ArrowRight, Star, AlertTriangle, Video, Lock, MessageSquare, Hash, Menu, DownloadCloud, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const VideoChatWarningClient = dynamic(() => import("@/components/video-chat-warning").then(mod => ({ default: mod.VideoChatWarning })), {
  ssr: false
})

const TestimonialsSliderClient = dynamic(() => import("@/components/testimonials-slider").then(mod => ({ default: mod.TestimonialsSlider })), {
  ssr: false
})

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Discord-style Hero Section */}
      <section className="relative bg-discord-dark dark:bg-discord-dark overflow-hidden">
        <div className="absolute inset-0 bg-discord-pattern"></div>
        
        {/* Left decorative elements */}
        <div className="absolute left-0 bottom-0 w-full h-80 pointer-events-none">
          <Image 
            src="/images/discord-left-bg.svg" 
            alt="Decorative background" 
            width={800} 
            height={400} 
            className="absolute left-0 bottom-0"
          />
        </div>
        
        {/* Right decorative elements */}
        <div className="absolute right-0 bottom-0 w-full h-80 pointer-events-none">
          <Image 
            src="/images/discord-right-bg.svg" 
            alt="Decorative background" 
            width={800} 
            height={400} 
            className="absolute right-0 bottom-0"
          />
        </div>
        
        <div className="container mx-auto px-4 py-28 relative z-10">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              디지털 안전을 위한 새로운 기준
            </h1>
            <p className="text-lg md:text-xl text-discord-offwhite max-w-2xl mb-8">
              몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 
              첨단 기술과 전문 솔루션으로 디지털 위협을 제로화합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-discord-blue hover:bg-discord-blue-hover text-white rounded-full">
                <Link href="/consultation">무료 상담 신청</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-discord-dark-gray hover:bg-discord-dark-gray-hover text-white rounded-full"
              >
                <Link href="/services">
                  <Globe className="mr-2 h-5 w-5" />
                  서비스 둘러보기
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Discord-style App Demo */}
          <div className="relative max-w-5xl mx-auto mt-10">
            <div className="bg-discord-dark rounded-lg overflow-hidden shadow-2xl border border-discord-gray">
              {/* Discord-style App Header */}
              <div className="flex bg-discord-dark-gray border-b border-discord-separator h-12">
                <div className="flex items-center px-3 border-r border-discord-separator">
                  <Shield className="h-6 w-6 text-discord-blue" />
                </div>
                <div className="flex-1 flex items-center px-4">
                  <div className="flex items-center gap-2">
                    <Hash className="h-5 w-5 text-discord-offwhite/60" />
                    <span className="text-discord-offwhite font-medium">유포제로-보안</span>
                  </div>
                </div>
              </div>
              
              {/* Discord-style App Content */}
              <div className="flex h-[400px]">
                {/* Server list */}
                <div className="w-18 bg-discord-dark-gray flex flex-col items-center py-4 gap-2">
                  <div className="w-12 h-12 bg-discord-blue rounded-full flex items-center justify-center text-white hover:rounded-2xl transition-all">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="w-12 h-1 bg-discord-separator my-1"></div>
                  <div className="w-12 h-12 bg-discord-dark rounded-full flex items-center justify-center text-white hover:rounded-2xl transition-all">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div className="w-12 h-12 bg-discord-dark rounded-full flex items-center justify-center text-white hover:rounded-2xl transition-all">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div className="w-12 h-12 bg-discord-dark rounded-full flex items-center justify-center text-white hover:rounded-2xl transition-all">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Channel list */}
                <div className="w-60 bg-discord-gray flex flex-col border-r border-discord-separator">
                  <div className="p-4 border-b border-discord-separator">
                    <h3 className="text-white font-semibold">유포제로 보안센터</h3>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <div className="px-2 py-4">
                      <div className="px-2 text-xs font-semibold text-discord-offwhite/40 uppercase mb-1">안내</div>
                      <div className="flex items-center px-2 py-1 rounded hover:bg-discord-hover text-discord-offwhite/60 hover:text-discord-offwhite cursor-pointer">
                        <Hash className="h-5 w-5 mr-2" />
                        <span>공지사항</span>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded hover:bg-discord-hover text-discord-offwhite/60 hover:text-discord-offwhite cursor-pointer">
                        <Hash className="h-5 w-5 mr-2" />
                        <span>시작하기</span>
                      </div>
                      
                      <div className="px-2 text-xs font-semibold text-discord-offwhite/40 uppercase mt-4 mb-1">보안 서비스</div>
                      <div className="flex items-center px-2 py-1 rounded bg-discord-hover text-discord-offwhite cursor-pointer">
                        <Hash className="h-5 w-5 mr-2" />
                        <span>몸캠피싱-차단</span>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded hover:bg-discord-hover text-discord-offwhite/60 hover:text-discord-offwhite cursor-pointer">
                        <Hash className="h-5 w-5 mr-2" />
                        <span>딥페이크-탐지</span>
                      </div>
                      <div className="flex items-center px-2 py-1 rounded hover:bg-discord-hover text-discord-offwhite/60 hover:text-discord-offwhite cursor-pointer">
                        <Hash className="h-5 w-5 mr-2" />
                        <span>디지털-포렌식</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-discord-chat">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* Welcome Message */}
                    <div className="flex items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-discord-blue flex items-center justify-center mr-3">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white">upoZero 보안</span>
                          <span className="text-xs text-discord-offwhite/40">오늘 09:30</span>
                        </div>
                        <div className="text-discord-offwhite mt-1">
                          안녕하세요! upoZero 보안 서비스에 오신 것을 환영합니다. 몸캠피싱 및 딥페이크 위협으로부터 안전하게 보호해드리겠습니다.
                        </div>
                      </div>
                    </div>
                    
                    {/* System Message */}
                    <div className="bg-discord-message p-3 rounded-md border-l-4 border-yellow-500">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <span className="text-yellow-500 font-medium">보안 알림</span>
                      </div>
                      <p className="text-discord-offwhite text-sm">
                        최근 발견된 새로운 몸캠피싱 수법에 주의하세요. 모르는 사람의 영상통화 요청은 항상 주의하시기 바랍니다.
                      </p>
                    </div>
                    
                    {/* Chat Message */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        <span className="text-white font-medium">김</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white">김○○</span>
                          <span className="text-xs text-discord-offwhite/40">오늘 10:15</span>
                        </div>
                        <div className="text-discord-offwhite mt-1">
                          몸캠피싱으로 인한 피해 문의 드립니다. 지인이 피해를 당했는데 어떻게 도움을 받을 수 있을까요?
                        </div>
                      </div>
                    </div>
                    
                    {/* Bot Response */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-discord-blue flex items-center justify-center mr-3">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white">upoZero 보안</span>
                          <span className="bg-discord-blue text-white text-xs px-1 rounded">봇</span>
                          <span className="text-xs text-discord-offwhite/40">오늘 10:17</span>
                        </div>
                        <div className="text-discord-offwhite mt-1">
                          안녕하세요! 몸캠피싱 피해 상담은 아래 방법으로 가능합니다:
                        </div>
                        <div className="bg-discord-message p-3 rounded-md mt-2">
                          <p className="text-discord-offwhite text-sm mb-2">
                            1. 무료 상담 신청 (24시간 운영)
                          </p>
                          <p className="text-discord-offwhite text-sm mb-2">
                            2. 증거자료 확보 (대화 내용, 협박 메시지 등)
                          </p>
                          <p className="text-discord-offwhite text-sm mb-2">
                            3. 경찰 신고를 위한 도움 제공
                          </p>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" className="bg-discord-blue hover:bg-discord-blue-hover text-white">
                              상담 신청
                            </Button>
                            <Button size="sm" variant="outline" className="border-discord-offwhite/20 text-discord-offwhite hover:bg-discord-hover">
                              자료실
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="p-4 border-t border-discord-separator">
                    <div className="bg-discord-message rounded-md flex items-center p-2">
                      <div className="w-6 h-6 flex items-center justify-center mr-2">
                        <span className="text-discord-offwhite/40 hover:text-discord-offwhite cursor-pointer">+</span>
                      </div>
                      <input 
                        type="text" 
                        placeholder="메시지 보내기" 
                        className="bg-transparent flex-1 outline-none text-discord-offwhite"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="relative h-16">
          <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45.7C120 41.3 240 32.7 360 30.8C480 29 600 34 720 41.3C840 48.7 960 58.3 1080 60.2C1200 62 1320 55.7 1380 52.3L1440 49V101H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">디지털 위협으로부터 안전하게</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              upoZero의 혁신적인 보안 솔루션으로 다양한 디지털 위협으로부터 자유로워지세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-discord-blue"></div>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-discord-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">몸캠피싱 차단</h3>
                <p className="text-gray-600 mb-4">실시간 모니터링과 AI 분석을 통한 몸캠피싱 예방 및 대응</p>
                <Link href="/services" className="text-discord-blue font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-discord-blurple"></div>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-discord-blurple mb-4" />
                <h3 className="text-xl font-bold mb-2">딥페이크 탐지</h3>
                <p className="text-gray-600 mb-4">고도화된 딥러닝 기술로 딥페이크 콘텐츠 실시간 탐지</p>
                <Link href="/services" className="text-discord-blurple font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">디지털 포렌식</h3>
                <p className="text-gray-600 mb-4">전문 포렌식 분석을 통한 디지털 증거 수집 및 분석</p>
                <Link href="/services" className="text-green-600 font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-yellow-600"></div>
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">예방 교육</h3>
                <p className="text-gray-600 mb-4">맞춤형 보안 교육과 인식 개선 프로그램 제공</p>
                <Link href="/services" className="text-yellow-600 font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* VideoChatWarning will only render on client side */}
      <VideoChatWarningClient />

      {/* Download App Section - Discord Style */}
      <section className="py-20 bg-discord-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-discord-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">upoZero 앱으로 언제 어디서나 안전하게</h2>
              <p className="text-xl mb-8 text-discord-offwhite">
                모바일 앱을 통해 실시간 보안 알림을 받고, 언제 어디서나 몸캠피싱과 딥페이크 위협으로부터 보호받으세요.
              </p>
              
              <div className="bg-discord-message rounded-lg p-4 mb-6 border-l-4 border-discord-blue">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-discord-blue" />
                  <h3 className="font-semibold text-discord-blue">몸캠피싱 위협 감지됨</h3>
                </div>
                <p className="text-discord-offwhite mb-3">
                  "낯선 사람의 영상통화 요청이 감지되었습니다. 이 패턴은 몸캠피싱 수법과 일치합니다."
                </p>
                <div className="text-xs text-discord-offwhite/60">2분 전 • 즉시 차단됨</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-discord-blue hover:bg-discord-blue-hover text-white rounded-md">
                  <Link href="#">
                    <DownloadCloud className="mr-2 h-5 w-5" />
                    앱 다운로드
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-discord-offwhite text-discord-offwhite hover:bg-discord-hover rounded-md">
                  <Link href="/services/demo">데모 체험하기</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-discord-gray rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-discord-dark-gray p-4 border-b border-discord-separator">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-discord-blue" />
                      <span className="text-white font-medium">upoZero 보안앱</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-400">활성화됨</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 space-y-4">
                  <div className="bg-discord-message p-3 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-discord-blue" />
                        <span className="text-sm font-medium text-white">시스템 알림</span>
                      </div>
                      <span className="text-xs text-discord-offwhite/40">오늘 14:23</span>
                    </div>
                    <p className="text-sm text-discord-offwhite">
                      보안 스캔이 완료되었습니다. 위협이 발견되지 않았습니다.
                    </p>
                  </div>
                  
                  <div className="bg-discord-message p-3 rounded-md border-l-2 border-yellow-500">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-white">보안 경고</span>
                      </div>
                      <span className="text-xs text-discord-offwhite/40">오늘 15:45</span>
                    </div>
                    <p className="text-sm text-discord-offwhite mb-2">
                      미확인 사용자로부터 영상통화 요청이 감지되었습니다. 이 패턴은 몸캠피싱 공격과 유사합니다.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-discord-blue hover:bg-discord-blue-hover text-white text-xs h-7">
                        차단하기
                      </Button>
                      <Button size="sm" variant="outline" className="border-discord-offwhite/20 text-discord-offwhite hover:bg-discord-hover text-xs h-7">
                        무시하기
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-discord-message p-3 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-white">위협 차단됨</span>
                      </div>
                      <span className="text-xs text-discord-offwhite/40">방금 전</span>
                    </div>
                    <p className="text-sm text-discord-offwhite">
                      몸캠피싱 위협이 자동으로 차단되었습니다. 증거가 저장되었습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Alert */}
              <div className="absolute -top-6 -right-6 bg-discord-red text-white rounded-full px-4 py-2 shadow-lg animate-pulse z-20">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-bold">실시간 보호 중</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Discord Style */}
      <section className="py-20 bg-discord-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">디지털 위협으로부터 지금 바로 보호받으세요</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            전문가와의 무료 상담을 통해 맞춤형 보안 솔루션을 확인해보세요
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-discord-blue font-semibold px-8 py-6 rounded-full">
            <Link href="/consultation">무료 상담 신청하기</Link>
          </Button>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">고객 후기</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              upoZero를 이용하여 디지털 위협으로부터 안전을 지킨 고객들의 생생한 후기를 확인해보세요
            </p>
          </div>
          
          <TestimonialsSliderClient />
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-discord-blue mb-2">10,000+</div>
              <div className="text-gray-600">보호된 사용자</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-discord-blue mb-2">99.9%</div>
              <div className="text-gray-600">탐지 정확도</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-discord-blue mb-2">24/7</div>
              <div className="text-gray-600">실시간 모니터링</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-discord-blue mb-2">4.9★</div>
              <div className="text-gray-600">고객 만족도</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Discord-style Community Section */}
      <section className="py-20 bg-discord-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">안전한 커뮤니티에<br />함께하세요</h2>
              <p className="text-xl mb-8 text-gray-600 max-w-lg">
                upoZero 커뮤니티에 가입하여 최신 보안 정보를 공유하고, 전문가들과 소통하며 디지털 안전에 대해 함께 배워보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-discord-blue hover:bg-discord-blue-hover text-white rounded-full">
                  <Link href="#">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    커뮤니티 가입하기
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Discord-style Server Preview */}
              <div className="bg-discord-dark rounded-xl overflow-hidden shadow-xl">
                <div className="bg-discord-dark-gray p-4 flex items-center border-b border-discord-separator">
                  <div className="w-10 h-10 bg-discord-blue rounded-full flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">upoZero 커뮤니티</h3>
                    <p className="text-discord-offwhite/60 text-sm">5,000+ 회원</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-discord-message rounded-md p-3 flex items-center hover:bg-discord-hover transition-colors">
                    <Hash className="h-5 w-5 text-discord-offwhite/60 mr-3" />
                    <div>
                      <p className="text-white font-medium">공지사항</p>
                      <p className="text-discord-offwhite/60 text-sm">최신 보안 업데이트 및 중요 알림</p>
                    </div>
                  </div>
                  <div className="bg-discord-message rounded-md p-3 flex items-center hover:bg-discord-hover transition-colors">
                    <Hash className="h-5 w-5 text-discord-offwhite/60 mr-3" />
                    <div>
                      <p className="text-white font-medium">일반 채팅</p>
                      <p className="text-discord-offwhite/60 text-sm">커뮤니티 회원들과 자유롭게 대화</p>
                    </div>
                  </div>
                  <div className="bg-discord-message rounded-md p-3 flex items-center hover:bg-discord-hover transition-colors">
                    <Hash className="h-5 w-5 text-discord-offwhite/60 mr-3" />
                    <div>
                      <p className="text-white font-medium">보안 팁</p>
                      <p className="text-discord-offwhite/60 text-sm">일상에서 실천할 수 있는 보안 팁 공유</p>
                    </div>
                  </div>
                  <div className="bg-discord-message rounded-md p-3 flex items-center hover:bg-discord-hover transition-colors">
                    <Hash className="h-5 w-5 text-discord-offwhite/60 mr-3" />
                    <div>
                      <p className="text-white font-medium">도움 요청</p>
                      <p className="text-discord-offwhite/60 text-sm">긴급 상황 시 빠른 도움 요청</p>
                    </div>
                  </div>
                </div>
                <div className="bg-discord-dark-gray p-4 border-t border-discord-separator flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-medium text-sm">U</span>
                    </div>
                    <span className="text-white text-sm">유저</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-discord-gray rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5 text-discord-offwhite/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-discord-gray rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5 text-discord-offwhite/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0l-4.242 4.243m-8.486 0l4.242-4.243" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-discord-gray rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5 text-discord-offwhite/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Online Status Indicator */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full px-3 py-1 shadow-lg">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">5,213 온라인</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
