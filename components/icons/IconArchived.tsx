import { cn } from "@/lib/utils"

interface IconLockProps {
  className?: string
}

export const IconArchived = ({className}: IconLockProps) => {
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
        d="M17.5 6.48513V13.5141C17.5 15.9708 15.7657 17.5 13.3113 17.5H6.68865C4.23432 17.5 2.5 15.9708 2.5 13.5133V6.48513C2.5 4.02837 4.23432 2.5 6.68865 2.5H13.3113C15.7657 2.5 17.5 4.03567 17.5 6.48513Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 11.6667L9.9985 14.1667L7.5 11.6667"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99832 14.1666V8.33331"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4447 5.83331H2.54883"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
