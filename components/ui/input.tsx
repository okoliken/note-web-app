import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasError, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          autoComplete="off"
          autoCorrect="false"
          type={type}
          className={cn(
            "flex h-11 w-full rounded-md border border-stone-200 bg-transparent px-3 py-1 text-base transition-colors shadow-sm-light focus-visible:ring-2 focus-visible:ring-neutral-600 focus-visible:border-neutral-900 focus-visible:ring-offset-2  placeholder:text-sm placeholder:text-stone-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-stone-800 dark:file:text-stone-50 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300",
            className,
            hasError && "ring-1 ring-red-600 border-red-600"
          )}
          ref={ref}
          {...props}
        />
        {props.icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {props.icon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
