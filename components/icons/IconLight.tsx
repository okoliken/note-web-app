import { cn } from "@/lib/utils"

interface IconLockProps {
  className?: string
}

export const IconLight =({ className }: IconLockProps)=> {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-[#2B303B] dark:text-white", className)}
    >
      <path
        d="M12.0548 3V4.3719M12.0548 19.6281V21M21.0547 12.0001H19.6828M4.42659 12.0001H3.05469M18.4185 5.63582L17.4485 6.60589M6.66105 17.3938L5.69099 18.3639M18.4185 18.3639L17.4485 17.3938M6.66105 6.60636L5.69099 5.6363"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0549 7.80469C14.3725 7.80469 16.2504 9.68351 16.2504 12.0002C16.2504 14.3178 14.3725 16.1966 12.0549 16.1966C9.73723 16.1966 7.85938 14.3178 7.85938 12.0002C7.85938 9.68351 9.73723 7.80469 12.0549 7.80469Z"
         stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
