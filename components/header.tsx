import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SketchLogoIcon } from '@radix-ui/react-icons'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export function Header() {
  return (
    <header className="sticky top-2 mx-8 rounded-lg z-50 flex items-center justify-between h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-end space-x-2">
        <a href="/" target="_blank" className={cn(buttonVariants())}>
          <SketchLogoIcon className="mr-2" />
          <span className="hidden sm:block font-semibold">THE XIRR</span>
          <span className="sm:hidden">THE XIRR</span>
        </a>
      </div>
      <div className="gap-8 sm:flex flex-row hidden">
        <a href="#Home">Home</a>
        <a href="#Offerings">Offerings</a>
        <a href="#Comparison">Comparison</a>
        <a href="#faq">FAQ</a>
      </div>
    </header>
  )
}
