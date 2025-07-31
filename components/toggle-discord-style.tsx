"use client"

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function ToggleDiscordStyle() {
  const router = useRouter()
  
  const switchToDiscordStyle = () => {
    router.push('/discord')
  }
  
  const switchToOriginalStyle = () => {
    router.push('/')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg flex flex-col gap-2">
      <Button 
        onClick={switchToDiscordStyle}
        className="bg-discord-blue hover:bg-discord-blue-hover text-white"
      >
        Discord Style
      </Button>
      <Button 
        onClick={switchToOriginalStyle}
        variant="outline"
      >
        Original Style
      </Button>
    </div>
  )
}
