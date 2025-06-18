// import type React from "react"
// import { ClientRouterWrapper } from "@/components/client-router-wrapper"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return <ClientRouterWrapper requireAuth={true}>{children}</ClientRouterWrapper>
// }

import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
