import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  icon?: React.ReactNode;
  hasSearchIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasSearchIcon, hasError, ...props }, ref) => {
    return (
      <div className="relative">
        {hasSearchIcon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search size={20} color="#717784" />
          </span>
        )}
        <input
          autoComplete="off"
          autoCorrect="false"
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg border border-stone-200 bg-transparent px-3 py-1 text-base transition-colors shadow-sm-light focus-visible:ring-2 focus-visible:ring-base-500 focus-visible:border-base-900 focus-visible:ring-offset-2 placeholder:text-sm placeholder:text-stone-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-base-600 dark:ring-0 dark:placeholder:text-base-500 dark:focus:ring-offset-0 dark:focus-visible:border-1 dark:focus-visible:ring-none",
            className,
            hasError && "ring-1 !ring-red-500 !border-red-500",
            hasSearchIcon && "pl-10"
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
