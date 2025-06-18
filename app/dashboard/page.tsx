"use client"

import dynamic from 'next/dynamic'

// Dynamically import the client component with SSR disabled
const DashboardClient = dynamic(
  () => import('./dashboard-client').then(mod => mod.DashboardClient),
  { ssr: false }
)

export default function DashboardPage() {
  return <DashboardClient />
}