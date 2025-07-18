// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Shield, Users, Award, TrendingUp, ArrowRight, CheckCircle, AlertTriangle, Phone, Download } from "lucide-react"
// import { MetaShieldDisplay } from "@/components/meta-shield-display"
// import Link from "next/link"
// import Image from "next/image"
// import { FraudChatDemo } from "@/components/fraud-chat-demo"
// import { Alert, AlertDescription } from "@/components/ui/alert"

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-[#404EED] text-white py-20 overflow-hidden min-h-[600px] flex items-center">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#404EED] to-[#5865F2] opacity-100"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase tracking-tight font-display">
//                 디지털 안전을
//                 <span className="block">위한 새로운 기준</span>
//               </h1>
//               <p className="text-xl mb-8 text-white/90 max-w-lg">
//                 몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 첨단 기술과 전문 솔루션으로 디지털 위협을 제로화합니다.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#5865F2] font-semibold rounded-full">
//                   <Link href="/consultation">무료 상담 신청</Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="border-white text-white hover:bg-white/20 rounded-full"
//                 >
//                   <Link href="/services">서비스 둘러보기</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">디지털 위협으로부터 안전하게</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               upoZero의 혁신적인 보안 솔루션으로 다양한 디지털 위협으로부터 자유로워지세요
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
//               <div className="h-2 bg-blue-600"></div>
//               <CardContent className="p-6">
//                 <Shield className="h-12 w-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-bold mb-2">몸캠피싱 차단</h3>
//                 <p className="text-gray-600 mb-4">실시간 모니터링과 AI 분석을 통한 몸캠피싱 예방 및 대응</p>
//                 <Link href="/services" className="text-blue-600 font-medium flex items-center">
//                   자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
//               <div className="h-2 bg-purple-600"></div>
//               <CardContent className="p-6">
//                 <Users className="h-12 w-12 text-purple-600 mb-4" />
//                 <h3 className="text-xl font-bold mb-2">딥페이크 탐지</h3>
//                 <p className="text-gray-600 mb-4">고도화된 딥러닝 기술로 딥페이크 콘텐츠 실시간 탐지</p>
//                 <Link href="/services" className="text-purple-600 font-medium flex items-center">
//                   자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
//               <div className="h-2 bg-green-600"></div>
//               <CardContent className="p-6">
//                 <Award className="h-12 w-12 text-green-600 mb-4" />
//                 <h3 className="text-xl font-bold mb-2">디지털 포렌식</h3>
//                 <p className="text-gray-600 mb-4">전문 포렌식 분석을 통한 디지털 증거 수집 및 분석</p>
//                 <Link href="/services" className="text-green-600 font-medium flex items-center">
//                   자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
//               <div className="h-2 bg-yellow-600"></div>
//               <CardContent className="p-6">
//                 <TrendingUp className="h-12 w-12 text-yellow-600 mb-4" />
//                 <h3 className="text-xl font-bold mb-2">예방 교육</h3>
//                 <p className="text-gray-600 mb-4">맞춤형 보안 교육과 인식 개선 프로그램 제공</p>
//                 <Link href="/services" className="text-yellow-600 font-medium flex items-center">
//                   자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Mobile App Section */}
//       <section className="py-20 bg-gray-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight uppercase tracking-tight">
//                 UPOZERO 앱으로 언제 어디서나 안전하게
//               </h2>
//               <p className="text-xl mb-8 text-white/90">
//                 모바일 앱을 통해 실시간 보안 알림을 받고, 언제 어디서나 몸캠피싱과 딥페이크 위협으로부터 보호받으세요.
//               </p>
              
//               <Alert className="bg-gray-800 border-red-500 mb-8">
//                 <AlertTriangle className="h-5 w-5 text-red-500" />
//                 <AlertDescription className="text-white">
//                   <div className="font-semibold mb-1">몸캠피싱 위험 감지됨</div>
//                   <div className="text-sm text-gray-300">"낯선 사람의 영상통화 요청이 감지되었습니다. 이 패턴은 몸캠피싱 수법과 일치합니다."</div>
//                   <div className="text-xs text-gray-400 mt-1">2분 전 • 즉시 차단됨</div>
//                 </AlertDescription>
//               </Alert>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full">
//                   <Link href="#">
//                     <Download className="mr-2 h-4 w-4" />
//                     앱 다운로드
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="border-white text-white hover:bg-white/20 rounded-full"
//                 >
//                   <Link href="/services">자세히 알아보기</Link>
//                 </Button>
//               </div>
//             </div>
            
//             <div className="flex justify-center">
//               <FraudChatDemo />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#5865F2] text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold mb-6">디지털 위협으로부터 지금 바로 보호받으세요</h2>
//           <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
//             전문가와의 무료 상담을 통해 맞춤형 보안 솔루션을 확인해보세요
//           </p>
//           <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#5865F2] font-semibold">
//             <Link href="/consultation">무료 상담 신청하기</Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Shield, Users, Award, TrendingUp, Download, ArrowRight, Star, AlertTriangle, Video, Lock, MessageSquare } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import dynamic from "next/dynamic"

// const VideoChatWarningClient = dynamic(() => import("@/components/video-chat-warning").then(mod => ({ default: mod.VideoChatWarning })), {
//   ssr: false
// })

// const stats = [
//   { label: "보호된 사용자", value: "10,000+" },
//   { label: "탐지 정확도", value: "99.9%" },
//   { label: "모니터링", value: "24/7" },
//   { label: "업계 경험", value: "5년" }
// ]

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Discord-style Hero Section */}
//       <section className="relative bg-[#404EED] dark:bg-[#5865F2] text-white py-20 overflow-hidden min-h-[600px] flex items-center">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#404EED] to-[#5865F2] opacity-100"></div>
//         <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg')] opacity-5 bg-cover bg-center"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase tracking-tight font-display">
//                 디지털 안전을
//                 <span className="block">위한 새로운 기준</span>
//               </h1>
//               <p className="text-xl mb-8 text-white/90 max-w-lg">
//                 몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 첨단 기술과 전문 솔루션으로 디지털 위협을 제로화합니다.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#5865F2] font-semibold rounded-full">
//                   <Link href="/consultation">무료 상담 신청</Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="border-white text-white hover:bg-white/20 rounded-full"
//                 >
//                   <Link href="/services">서비스 둘러보기</Link>
//                 </Button>
//               </div>
//             </div>
//             <div className="relative flex justify-center items-center">
//               <Image 
//                 src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6841ca4c5468891aedebb224_homepage-hero-mobile-858x803.webp"
//                 alt="Digital Security Hero Image"
//                 width={500}
//                 height={467}
//                 className="rounded-lg shadow-xl z-10"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
        
//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/10"></div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">디지털 위협으로부터 안전하게</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               upoZero의 혁신적인 보안 솔루션으로 다양한 디지털 위협으로부터 자유로워지세요
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
//               <div className="h-2 bg-blue-600"></div>
//               <CardContent className="p-6">
//                 <Shield className="h-12 w-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-bold mb-2">몸캠피싱 차단</h3>
//                 <p className="text-gray-600 mb-4">실시간 모니터링과 AI 분석을 통한 몸캠피싱 예방 및 대응</p>
//                 <Link href="/services" className="text-blue-600 font-medium flex items-center">
//                   자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
//               <div className="h-2 bg-purple-600"></div>
//               <CardContent className="p-6">
//                 <Users className="h-12 w-12 text-purple-600 mb-4" />
//                 <h3 className="text-xl font-bold mb-2">딥페이크 탐지</h3>
//                 <p className="text-gray-600 mb-4">고도화된 딥러닝 기술로 딥페이크 콘텐츠 실시간 탐지</p>
//                 <Link href="/services" className="text-purple-600 font-medium flex items-center">
//                   자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
//               <div className="h-2 bg-green-600"></div>
//               <CardContent className="p-6">
//                 <Award className="h-12 w-12 text-green-600 mb-4" />
//                 <h3 className="text-xl font-bold mb-2">실시간 보호</h3>
//                 <p className="text-gray-600 mb-4">24시간 모니터링과 즉시 대응으로 안전을 보장</p>
//                 <Link href="/services" className="text-green-600 font-medium flex items-center">
//                   자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
//               <div className="h-2 bg-orange-600"></div>
//               <CardContent className="p-6">
//                 <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
//                 <h3 className="text-xl font-bold mb-2">전문 상담</h3>
//                 <p className="text-gray-600 mb-4">디지털 보안 전문가의 맞춤형 컨설팅 서비스</p>
//                 <Link href="/consultation" className="text-orange-600 font-medium flex items-center">
//                   자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">신뢰할 수 있는 수치</h2>
//             <p className="text-xl text-gray-600">upoZero가 만들어가는 디지털 안전의 성과</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl md:text-5xl font-bold text-[#5865F2] mb-2">{stat.value}</div>
//                 <div className="text-lg text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Video Chat Warning Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex justify-center mb-8">
//               <div className="bg-red-100 rounded-full p-4">
//                 <AlertTriangle className="h-16 w-16 text-red-600" />
//               </div>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//               화상채팅 사기 주의보
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               온라인 화상채팅을 통한 사기가 급증하고 있습니다. 의심스러운 요청이나 금전 관련 대화 시 즉시 신고하세요.
//             </p>
//             <VideoChatWarningClient />
//           </div>
//         </div>
//       </section>

//       {/* Solutions Section */}
//       <section className="py-20 bg-gradient-to-br from-[#5865F2] to-[#404EED] text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">완벽한 디지털 보안 솔루션</h2>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto">
//               개인부터 기업까지, 모든 규모의 디지털 환경을 안전하게 보호합니다
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="bg-white/10 border-white/20 text-white">
//               <CardContent className="p-8">
//                 <Video className="h-12 w-12 mb-6 text-blue-300" />
//                 <h3 className="text-2xl font-bold mb-4">개인 보호</h3>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-center">
//                     <Shield className="h-5 w-5 mr-2 text-green-400" />
//                     실시간 위협 탐지
//                   </li>
//                   <li className="flex items-center">
//                     <Lock className="h-5 w-5 mr-2 text-green-400" />
//                     개인정보 보호
//                   </li>
//                   <li className="flex items-center">
//                     <MessageSquare className="h-5 w-5 mr-2 text-green-400" />
//                     24/7 상담 지원
//                   </li>
//                 </ul>
//                 <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/20">
//                   <Link href="/services">개인 서비스</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 border-white/20 text-white">
//               <CardContent className="p-8">
//                 <Users className="h-12 w-12 mb-6 text-purple-300" />
//                 <h3 className="text-2xl font-bold mb-4">기업 솔루션</h3>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-center">
//                     <Shield className="h-5 w-5 mr-2 text-green-400" />
//                     통합 보안 시스템
//                   </li>
//                   <li className="flex items-center">
//                     <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
//                     실시간 모니터링
//                   </li>
//                   <li className="flex items-center">
//                     <Award className="h-5 w-5 mr-2 text-green-400" />
//                     전담 지원팀
//                   </li>
//                 </ul>
//                 <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/20">
//                   <Link href="/services">기업 서비스</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 border-white/20 text-white">
//               <CardContent className="p-8">
//                 <Download className="h-12 w-12 mb-6 text-green-300" />
//                 <h3 className="text-2xl font-bold mb-4">맞춤 컨설팅</h3>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-center">
//                     <Star className="h-5 w-5 mr-2 text-green-400" />
//                     전문가 분석
//                   </li>
//                   <li className="flex items-center">
//                     <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
//                     맞춤형 솔루션
//                   </li>
//                   <li className="flex items-center">
//                     <Award className="h-5 w-5 mr-2 text-green-400" />
//                     지속적인 지원
//                   </li>
//                 </ul>
//                 <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/20">
//                   <Link href="/consultation">무료 상담</Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 시작하세요</h2>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               디지털 위협으로부터 안전한 세상을 함께 만들어갑니다. 전문가와 상담하고 맞춤형 솔루션을 받아보세요.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" className="bg-[#5865F2] hover:bg-[#404EED] text-white px-8">
//                 <Link href="/consultation">무료 상담 신청</Link>
//               </Button>
//               <Button asChild variant="outline" size="lg" className="border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white px-8">
//                 <Link href="/services">서비스 자세히 보기</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp, Download, ArrowRight, Star, AlertTriangle, Video, Lock, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const VideoChatWarningClient = dynamic(() => import("@/components/video-chat-warning").then(mod => ({ default: mod.VideoChatWarning })), {
  ssr: false
})

const stats = [
  { label: "보호된 사용자", value: "10,000+" },
  { label: "탐지 정확도", value: "99.9%" },
  { label: "모니터링", value: "24/7" },
  { label: "업계 경험", value: "5년" }
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Discord-style Hero Section */}
      <section className="relative bg-[#404EED] dark:bg-[#5865F2] text-white py-20 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#404EED] to-[#5865F2] opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase tracking-tight font-display">
                디지털 안전을
                <span className="block">위한 새로운 기준</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-lg">
                몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 첨단 기술과 전문 솔루션으로 디지털 위협을 제로화합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#5865F2] font-semibold rounded-full">
                  <Link href="/consultation">무료 상담 신청</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 rounded-full"
                >
                  <Link href="/services">서비스 둘러보기</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <Image 
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6841ca4c5468891aedebb224_homepage-hero-mobile-858x803.webp"
                alt="Digital Security Hero Image"
                width={500}
                height={467}
                className="rounded-lg shadow-xl z-10"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/10"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">디지털 위협으로부터 안전하게</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              upoZero의 혁신적인 보안 솔루션으로 다양한 디지털 위협으로부터 자유로워지세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">몸캠피싱 차단</h3>
                <p className="text-gray-600 mb-4">실시간 모니터링과 AI 분석을 통한 몸캠피싱 예방 및 대응</p>
                <Link href="/services" className="text-blue-600 font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-purple-600"></div>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">딥페이크 탐지</h3>
                <p className="text-gray-600 mb-4">고도화된 딥러닝 기술로 딥페이크 콘텐츠 실시간 탐지</p>
                <Link href="/services" className="text-purple-600 font-medium flex items-center">
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

      {/* Stats Section with Gradient Background */}
      <section className="py-20 bg-[#404EED] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">보호된 사용자</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">탐지 정확도</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">모니터링</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">5년</div>
              <div className="text-blue-100">업계 경험</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">실제 피해 사례</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              몸캠피싱과 딥페이크 피해 사례를 통해 위험성과 대응 방법을 알아보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg"
                  alt="데이팅 앱 피해 사례"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">데이팅 앱을 통한 몸캠피싱 피해 사례</h3>
                <p className="text-gray-600 mb-4">외로움을 이용한 데이팅 앱 몸캠피싱의 실제 피해 사례와 대응 방법을 소개합니다.</p>
                <Button asChild variant="outline">
                  <Link href="/magazine/case-study-1">자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="군인 대상 몸캠피싱"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">군인 대상 몸캠피싱 협박 사례</h3>
                <p className="text-gray-600 mb-4">군인의 특수한 상황을 악용한 몸캠피싱 사례와 군부대 내 대응 방안을 다룹니다.</p>
                <Button asChild variant="outline">
                  <Link href="/magazine/case-study-2">자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                  alt="딥페이크 기술 동향"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">2024년 딥페이크 기술 동향과 대응 전략</h3>
                <p className="text-gray-600 mb-4">최신 딥페이크 기술의 발전 현황과 이에 대응하는 보안 기술의 발전 방향을 분석합니다.</p>
                <Button asChild variant="outline">
                  <Link href="/magazine/featured-post">자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-[#23272A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <div className="z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">upoZero 앱으로 언제 어디서나 안전하게</h2>
              <p className="text-xl mb-8 text-gray-300">
                모바일 앱을 통해 실시간 보안 알림을 받고, 언제 어디서나 몸캠피싱과 딥페이크 위협으로부터 보호받으세요.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-4 mb-6 border-l-4 border-red-500 animate-in slide-in-from-top-5 duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <h3 className="font-semibold text-red-400">몸캠피싱 위협 감지됨</h3>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  "낯선 사람의 영상통화 요청이 감지되었습니다. 이 패턴은 몸캠피싱 수법과 일치합니다."
                </p>
                <div className="text-xs text-gray-400">2분 전 • 즉시 차단됨</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-[#5865F2] hover:bg-gray-100 font-semibold">
                  <Link href="#">
                    <Download className="mr-2 h-5 w-5" />
                    앱 다운로드
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  <Link href="/services/demo">데모 체험하기</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:ml-6 z-0 flex flex-col">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
                <div className="bg-gray-900 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-medium">upoZero 보안</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-400">활성화됨</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Phishing Message 1 */}
                    <div className="bg-gray-800 rounded-lg p-3 border-l-2 border-red-500 animate-in slide-in-from-top-5 duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-red-400" />
                          <span className="text-sm font-medium">영상통화 위협</span>
                        </div>
                        <span className="text-xs text-gray-400">오늘 14:23</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        "오랜만이에요, 지금 시간 되시면 영상통화 한번 해요. 제가 먼저 얼굴 보여드릴게요."
                      </p>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs text-yellow-400">몸캠피싱 의심 패턴</span>
                      </div>
                    </div>
                    
                    {/* Phishing Message 2 */}
                    <div className="bg-gray-800 rounded-lg p-3 border-l-2 border-red-500 animate-in slide-in-from-top-5 duration-500 delay-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-red-400" />
                          <span className="text-sm font-medium">협박 메시지</span>
                        </div>
                        <span className="text-xs text-gray-400">오늘 15:45</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        "방금 영상 다 녹화했어요. 30분 안에 500만원 보내지 않으면 가족, 친구, 직장 동료들에게 다 공유할 거예요."
                      </p>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-3 w-3 text-red-500" />
                        <span className="text-xs text-red-400">몸캠피싱 확인됨</span>
                      </div>
                    </div>

                    {/* Phishing Image Message */}
                    <div className="bg-gray-800 rounded-lg p-3 border-l-2 border-red-500 animate-in slide-in-from-top-5 duration-500 delay-500">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-red-400" />
                          <span className="text-sm font-medium">이미지 공유</span>
                        </div>
                        <span className="text-xs text-gray-400">오늘 15:30</span>
                      </div>
                      <div className="relative h-24 w-full mb-2 rounded-md overflow-hidden">
                        <Image
                          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                          alt="Phishing profile"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Lock className="h-8 w-8 text-white/70" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs text-yellow-400">의심스러운 이미지 차단됨</span>
                      </div>
                    </div>
                    
                    {/* App Response */}
                    <div className="bg-blue-900/30 rounded-lg p-3 border-l-2 border-blue-500 animate-in slide-in-from-top-5 duration-500 delay-700">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-medium">upoZero 대응</span>
                        </div>
                        <span className="text-xs text-gray-400">방금 전</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        "몸캠피싱 위협이 감지되어 자동으로 차단되었습니다. 협박 메시지와 발신자 정보가 증거로 저장되었으며, 신고 절차를 도와드리겠습니다."
                      </p>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" className="h-7 text-xs border-blue-500 text-blue-400">
                          상담사 연결
                        </Button>
                        <Button size="sm" variant="outline" className="h-7 text-xs border-blue-500 text-blue-400">
                          신고하기
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Alert */}
              <div className="absolute -top-6 -right-6 bg-red-600 text-white rounded-full px-4 py-2 shadow-lg animate-pulse z-20">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-bold">실시간 보호 중</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">고객 후기</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              upoZero 서비스를 경험한 고객들의 생생한 후기를 확인하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "몸캠피싱 피해를 당했을 때 정말 절망적이었는데, upoZero의 신속한 대응 덕분에 추가 피해 없이 해결할 수 있었습니다. 24시간 상담 서비스가 큰 도움이 되었습니다."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-semibold text-blue-600">김</span>
                  </div>
                  <div>
                    <div className="font-semibold">김○○</div>
                    <div className="text-sm text-gray-500">일반 사용자</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "딥페이크로 만들어진 가짜 영상이 퍼지고 있다는 제보를 받고 당황했는데, upoZero의 딥페이크 탐지 기술로 빠르게 확인하고 대응할 수 있었습니다. 정말 감사합니다."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="font-semibold text-purple-600">이</span>
                  </div>
                  <div>
                    <div className="font-semibold">이○○</div>
                    <div className="text-sm text-gray-500">연예인 매니저</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "우리 회사는 upoZero의 기업용 보안 솔루션을 도입한 후 임직원들의 디지털 보안 인식이 크게 향상되었습니다. 특히 예방 교육 프로그램이 매우 효과적이었습니다."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="font-semibold text-green-600">박</span>
                  </div>
                  <div>
                    <div className="font-semibold">박○○</div>
                    <div className="text-sm text-gray-500">기업 보안 담당자</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5865F2] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">디지털 위협으로부터 지금 바로 보호받으세요</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            전문가와의 무료 상담을 통해 맞춤형 보안 솔루션을 확인해보세요
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#5865F2] font-semibold">
            <Link href="/consultation">무료 상담 신청하기</Link>
          </Button>
        </div>
      </section>
      
      {/* Discord-style Community Section */}
      <section className="py-20 bg-[#F6F6F6]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">안전한 커뮤니티에<br />함께하세요</h2>
              <p className="text-xl mb-8 text-gray-600 max-w-lg">
                upoZero 커뮤니티에 가입하여 최신 보안 정보를 공유하고, 전문가들과 소통하며 디지털 안전에 대해 함께 배워보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                  <Link href="#">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    커뮤니티 가입하기
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#5865F2] rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">upoZero 커뮤니티</h3>
                    <p className="text-sm text-gray-500">5,000+ 회원</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm font-medium">📢 공지사항</p>
                    <p className="text-xs text-gray-600">최신 보안 업데이트 및 중요 알림</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm font-medium">💬 일반 채팅</p>
                    <p className="text-xs text-gray-600">커뮤니티 회원들과 자유롭게 대화</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm font-medium">🛡️ 보안 팁</p>
                    <p className="text-xs text-gray-600">일상에서 실천할 수 있는 보안 팁 공유</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm font-medium">🆘 도움 요청</p>
                    <p className="text-xs text-gray-600">긴급 상황 시 빠른 도움 요청</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}