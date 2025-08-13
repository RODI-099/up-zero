import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/components/auth/auth-context"
import { ChatProvider } from "@/components/chat/chat-context"
import { Toaster } from "@/components/ui/toaster"
import { KakaoChannelButton } from "@/components/kakao-channel-button"
import { PhoneCallButton } from "@/components/phone-call-button"
import { ChatButton } from "@/components/chat/chat-button"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "upoZero - 디지털 안전의 새로운 기준",
  description: "몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 첨단 기술과 전문 솔루션으로 디지털 위협을 제로화합니다.",
  keywords: "몸캠피싱, 딥페이크, 디지털성범죄, 사이버보안, 개인정보보호, upoZero",
  authors: [{ name: "upoZero" }],
  creator: "upoZero",
  publisher: "upoZero",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "upoZero - 디지털 안전의 새로운 기준",
    description: "몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다.",
    url: "https://upozero.com",
    siteName: "upoZero",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "upoZero - 디지털 안전의 새로운 기준",
    description: "몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다.",
  },
  verification: {
    // Add your Naver verification code here after getting it from Naver Search Advisor
    // naver: "your-naver-verification-code",
    google: "google-site-verification-code", // Add Google verification if needed
  },
  generator: 'Next.js',
  metadataBase: new URL('https://upozero.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* Naver Blog RSS */}
        <link rel="alternate" type="application/rss+xml" title="upoZero RSS" href="/rss.xml" />
        {/* Additional meta for Naver */}
        <meta name="naver-site-verification" content="d7ed835c724b509f6e7a50bc0478711103fcb629" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Naver specific meta tags */}
        <meta property="og:locale" content="ko_KR" />
        <meta name="geo.region" content="KR" />
        <meta name="geo.country" content="Korea" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WRSPHMS');`
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17285285574"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17285285574');
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WRSPHMS"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AuthProvider>
          <ChatProvider>
            <ErrorBoundary>
              <Navigation />
              <main>{children}</main>
              <Footer />
              <KakaoChannelButton />
              <PhoneCallButton />
              <ChatButton />
              <Toaster />
            </ErrorBoundary>
          </ChatProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

