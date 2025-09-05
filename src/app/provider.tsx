'use client'

import { HeroUIProvider } from '@heroui/react'
import React from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}
