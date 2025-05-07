import { cn } from "@/lib/utils"

interface IconSunProps {
  className?: string
}

export const IconSun = ({ className }: IconSunProps) => {
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
        d="M10.045 2.5V3.64325M10.045 16.3567V17.5M17.5449 10.0001H16.4017M3.68817 10.0001H2.54492M15.3481 4.69652L14.5398 5.50491M5.55022 14.4948L4.74184 15.3032M15.3481 15.3032L14.5398 14.4948M5.55022 5.5053L4.74184 4.69692"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0451 6.50391C11.9764 6.50391 13.5413 8.06959 13.5413 10.0002C13.5413 11.9315 11.9764 13.4972 10.0451 13.4972C8.1137 13.4972 6.54883 11.9315 6.54883 10.0002C6.54883 8.06959 8.1137 6.50391 10.0451 6.50391Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
