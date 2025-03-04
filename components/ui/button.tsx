import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tracking-[-0.2px] focus:shadow-neutral-400 focus:ring-2 focus:ring-white dark:focus:ring-base-700 dark:focus:shadow-base-800 transition-all transform hover:-translate-y-0.5 ease-in duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-white hover:bg-blue-700 rounded-lg",
        destructive:
          "bg-red-500 text-stone-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-stone-50 dark:hover:bg-red-900/90",
        border:
          "border border-stone-200 bg-white hover:bg-stone-100 hover:text-stone-900 dark:border-base-600 dark:bg-transparent dark:hover:bg-base-800 dark:hover:text-base-50",
        secondary:
          "bg-neutral-100 text-neutral-600 border border-neutral-100 hover:text-neutral-950 hover:shadow-sm-light hover:bg-transparent hover:border-neutral-300 dark:bg-base-800 dark:text-base-400 dark:hover:bg-base-700 dark:border-none",
      },
      size: {
        default: "h-9 px-4 py-3 h-[2.563rem]",
        sm: "h-8 !rounded-lg px-3 text-xs",
        lg: "h-10 !rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
