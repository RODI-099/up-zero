"use client"

import dynamic from 'next/dynamic'

// Dynamically import the client component with SSR disabled
const ConsultationClient = dynamic(
  () => import('./consultation-client').then(mod => mod.ConsultationClient),
  { ssr: false }
)

export default function ConsultationPage() {
  return <ConsultationClient />
}