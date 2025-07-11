import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from 'next/script'
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
        {/* Google Analytics */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5WRSPHMS');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WRSPHMS"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `
        }} />
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WRSPHMS"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `
        }} />
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