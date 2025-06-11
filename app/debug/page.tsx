import { DebugPanel } from "@/components/auth/debug-panel"

export default function DebugPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Signup Debug Center</h1>
        <p className="text-gray-600">Diagnose and fix signup issues</p>
      </div>
      <DebugPanel />
    </div>
  )
}