import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background/60 p-8">
        <h1 className="text-lg font-semibold">Welcome to XIRR.AI</h1>
        <p className="leading-normal text-muted-foreground">
          This is an most reliable AI Bot for alternate investment supported
          from
          <ExternalLink href="https://nextjs.org">THE XIRR</ExternalLink>
        </p>
        <p className="leading-normal text-muted-foreground">
          It uses Alternate Investment AI Model built by
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            THE XIRR
          </ExternalLink>{' '}
          to combine industry knowledge of investment and the power of AI to
          provide unorganic returns for your investments. Through this AI you
          can explorer limitless opportunities of Alternative Investment.
        </p>
      </div>
    </div>
  )
}
