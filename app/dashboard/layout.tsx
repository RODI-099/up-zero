import type React from "react"
import { ClientRouterWrapper } from "@/components/client-router-wrapper"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientRouterWrapper requireAuth={true}>{children}</ClientRouterWrapper>
}