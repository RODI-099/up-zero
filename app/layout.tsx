import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Google tag (gtag.js) -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17285285574"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'AW-17285285574');
              </script>
            `,
          }}
        />
      </head>
      <body className={inter.className}>
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