import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-stone-200 px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-base-950 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-base-200 text-base-950 dark:bg-base-600 dark:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
