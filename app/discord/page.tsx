"use client"

import { useState, useEffect } from 'react'
import DiscordStyle from '../page-discord'
import ToggleDiscordStyle from '@/components/toggle-discord-style'

export default function DiscordPage() {
  return (
    <>
      <DiscordStyle />
      <ToggleDiscordStyle />
    </>
  )
}
