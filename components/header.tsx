import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconOpenAI,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { Session } from '@/lib/types'
import { SketchLogoIcon } from '@radix-ui/react-icons'

async function UserOrLogin() {
  const session = (await auth()) as Session
  return (
    <>
      {session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} />
          </SidebarMobile>
          <SidebarToggle />
        </>
      ) : (
        <Link href="/new" rel="nofollow">
          {/* <SketchLogoIcon className="mr-2" /> */}
          <SketchLogoIcon className="size-6 mr-2 dark:hidden" />
          <SketchLogoIcon className="hidden size-6 mr-2 dark:block" />
        </Link>
      )}
      <div className="flex items-center">
        <IconSeparator className="size-6 text-muted-foreground/50" />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Button variant="link" asChild className="-ml-2">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-2 mx-8 rounded-lg z-50 flex items-center justify-between h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      {/* <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div> */}
      <div className="flex items-center justify-end space-x-2">
        <a href="/" target="_blank" className={cn(buttonVariants())}>
          <SketchLogoIcon className="mr-2" />
          <span className="hidden sm:block font-semibold">THE XIRR</span>
          <span className="sm:hidden">THE XIRR</span>
        </a>
      </div>
      <div className="gap-8 flex flex-row">
      <a href="#Home">Home</a>
        <a href="#diversify">Diversify</a>
        <a href="#Offerings">Offerings</a>
        <a href="#Comparison">Comparison</a>
        <a href="#faq">Faq</a>
      </div>
    </header>
  )
}
