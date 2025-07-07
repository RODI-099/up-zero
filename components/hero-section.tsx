"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              디지털 안전의 <span className="text-yellow-300">새로운 기준</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 
              첨단 AI 기술과 전문 솔루션으로 디지털 위협을 제로화합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/consultation">무료 상담 신청</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/services">서비스 둘러보기</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">디지털 보안 현황</h3>
                  <p className="text-blue-200 text-sm">실시간 위협 모니터링</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">몸캠피싱 위협</span>
                      <span className="text-red-300">+23%</span>
                    </div>
                    <div className="w-full bg-blue-900/50 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">딥페이크 탐지</span>
                      <span className="text-green-300">99.7%</span>
                    </div>
                    <div className="w-full bg-blue-900/50 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "99.7%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">보호된 사용자</span>
                      <span className="text-blue-300">10,000+</span>
                    </div>
                    <div className="w-full bg-blue-900/50 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button asChild variant="outline" size="sm" className="border-white/40 text-white hover:bg-white/10">
                    <Link href="/services/demo">데모 체험하기</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}