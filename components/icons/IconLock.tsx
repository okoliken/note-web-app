import { cn } from "@/lib/utils"

interface IconLockProps {
  className?: string
}

export const IconLock = ({ className }: IconLockProps) => {
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
        d="M13.6848 7.87318V6.08402C13.6848 3.98985 11.9865 2.29148 9.89232 2.29148C7.79815 2.28235 6.09315 3.97235 6.08398 6.06735V6.08402V7.87318"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0685 17.708H6.70102C4.95602 17.708 3.54102 16.2938 3.54102 14.548V10.9738C3.54102 9.22801 4.95602 7.81384 6.70102 7.81384H13.0685C14.8135 7.81384 16.2285 9.22801 16.2285 10.9738V14.548C16.2285 16.2938 14.8135 17.708 13.0685 17.708Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.88477 11.8356V13.6864"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
