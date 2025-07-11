import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/components/auth/auth-context"
import { Toaster } from "@/components/ui/toaster"
import { KakaoChannelButton } from "@/components/kakao-channel-button"
import { PhoneCallButton } from "@/components/phone-call-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "upoZero - 디지털 안전의 새로운 기준",
  description: "몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다.",
  generator: 'v0.dev'
}

export default function AmpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* AMP JS Library */}
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
      </head>
      <body className={inter.className}>
        {/* Google tag (gtag.js) for AMP */}
        <amp-analytics type="gtag" data-credentials="include">
          <script type="application/json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              vars: {
                gtag_id: "AW-17285285574",
                config: {
                  "AW-17285285574": {
                    groups: "default"
                  }
                }
              },
              triggers: {}
            })
          }} />
        </amp-analytics>
        
        <AuthProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <KakaoChannelButton />
          <PhoneCallButton />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}