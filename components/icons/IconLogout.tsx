import { cn } from "@/lib/utils"

interface IconLogoutProps {
  className?: string
}

export const IconLogout = ({ className }: IconLogoutProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-[#2B303B] dark:text-white", className)}
    >
      <path
        d="M17.5006 9.99875H7.45508M17.5006 9.99875L15.0577 7.55371M17.5006 9.99875L15.0577 12.4448"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1296 6.88872V6.04237C12.1296 4.7427 11.1957 3.63316 9.92083 3.41799L5.58531 2.53739C3.97092 2.26493 2.5 3.5161 2.5 5.16177V14.8383C2.5 16.4839 3.97091 17.7351 5.5853 17.4626L9.92083 16.582C11.1957 16.3668 12.1296 15.2573 12.1296 13.9577V13.1122"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
