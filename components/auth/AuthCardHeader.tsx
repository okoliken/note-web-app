import Image from "next/image";
import { CardHeader, CardTitle } from "@/components/ui/card";
import NoteLogo from "../../public/logo-light.svg";
import DarkNoteLogo from '../../public/logo-dark.svg'
import { AuthCardHeaderProps } from ".";
import { useTheme } from "next-themes";

export function AuthCardHeader({
  title = "Welcome to Note",
  subtitle = "Please log in to continue",
}: AuthCardHeaderProps) {
  const { resolvedTheme } = useTheme();

  return (
    <CardHeader className="flex flex-col items-center gap-4 px-0 pb-0 pt-4">
      <Image 
        src={resolvedTheme === 'dark' ? DarkNoteLogo : NoteLogo} 
        alt="NoteLogo" 
      />
      <div className="text-center">
        <CardTitle className="text-2xl font-bold mb-[0.5rem] dark:text-base-300">
          {title}
        </CardTitle>
        <p className="text-neutral-600 dark:text-base-300 text-sm">{subtitle}</p>
      </div>
    </CardHeader>
  );
}
