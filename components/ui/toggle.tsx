"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-between gap-2 rounded-md text-sm font-medium transition-colors bg-base-100 hover:bg-base-100 dark:hover:bg-base-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-base-950 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:dark:bg-base-800 data-[state=on]:bg-base-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:hover:bg-base-800 dark:focus-visible:ring-base-300 dark:data-[state=on]:bg-base-800 dark:data-[state=on]:text-base-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-base-200 bg-transparent shadow-sm hover:bg-base-100 hover:text-base-900 dark:border-base-800 hover:bg-base-100 dark:hover:bg-base-800 dark:hover:text-base-50",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
