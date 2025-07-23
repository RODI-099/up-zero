"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  company?: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "김○○",
    role: "대학생",
    content: "몸캠피싱 협박을 받았을 때 upoZero 덕분에 빠르게 대응할 수 있었습니다. 전문가의 조언과 증거 수집 도움으로 경찰 신고까지 완료했어요. 정말 든든한 서비스입니다.",
    rating: 5,
    avatar: "김"
  },
  {
    id: 2,
    name: "이○○",
    role: "직장인",
    company: "IT 기업",
    content: "회사에서 upoZero의 기업용 보안 솔루션을 도입했는데, 임직원들의 보안 인식이 크게 향상되었습니다. 특히 딥페이크 탐지 기능이 매우 인상적이었어요.",
    rating: 5,
    avatar: "이"
  },
  {
    id: 3,
    name: "박○○",
    role: "학부모",
    content: "자녀가 온라인에서 이상한 사람에게 접촉을 받았을 때, upoZero 커뮤니티에서 빠른 도움을 받았습니다. 24시간 전문가 상담 서비스가 정말 유용했어요.",
    rating: 5,
    avatar: "박"
  },
  {
    id: 4,
    name: "최○○",
    role: "대학원생",
    content: "딥페이크 영상으로 인한 피해를 당했을 때, upoZero의 디지털 포렌식 서비스로 증거를 확보할 수 있었습니다. 전문적이고 신속한 대응에 감사합니다.",
    rating: 5,
    avatar: "최"
  },
  {
    id: 5,
    name: "정○○",
    role: "프리랜서",
    content: "온라인 활동이 많은 저에게 upoZero의 실시간 보안 모니터링은 필수입니다. 위험한 상황을 사전에 차단해주니까 안심하고 일할 수 있어요.",
    rating: 5,
    avatar: "정"
  },
  {
    id: 6,
    name: "한○○",
    role: "소상공인",
    content: "온라인 쇼핑몰을 운영하면서 고객 정보 보호가 중요한데, upoZero의 보안 교육 프로그램으로 직원들과 함께 보안 의식을 높일 수 있었습니다.",
    rating: 5,
    avatar: "한"
  },
  {
    id: 7,
    name: "송○○",
    role: "교사",
    content: "학생들에게 디지털 안전 교육을 할 때 upoZero의 자료를 활용하고 있습니다. 실제 사례와 예방법이 잘 정리되어 있어서 교육 효과가 뛰어나요.",
    rating: 5,
    avatar: "송"
  },
  {
    id: 8,
    name: "윤○○",
    role: "의료진",
    content: "병원에서 환자 정보 보호가 중요한데, upoZero의 기업용 솔루션으로 의료진 전체의 보안 인식을 개선할 수 있었습니다. 매우 만족스러운 서비스입니다.",
    rating: 5,
    avatar: "윤"
  }
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Minimum distance required to trigger swipe
  const minSwipeDistance = 50

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main slider container */}
      <div 
        className="overflow-hidden rounded-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${testimonials.length * 100}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="w-full flex-shrink-0 px-4"
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <Card className="bg-white border-0 shadow-lg h-full mx-auto max-w-4xl">
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-discord-blue flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-white text-base md:text-lg">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-gray-600">
                        {testimonial.role}
                        {testimonial.company && ` • ${testimonial.company}`}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all",
              index === currentIndex 
                ? "bg-discord-blue" 
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
        <div 
          className="bg-discord-blue h-1 rounded-full transition-all duration-700 ease-linear"
          style={{ 
            width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
          }}
        />
      </div>

      {/* Mobile swipe hint */}
      <div className="md:hidden text-center text-sm text-gray-500 mt-4">
        좌우로 스와이프하여 더 많은 후기를 확인하세요
      </div>
    </div>
  )
}
