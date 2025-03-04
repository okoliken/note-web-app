import Image from "next/image";
import { CardHeader, CardTitle } from "@/components/ui/card";
import NoteLogo from "../../public/logo-light.svg";
import { AuthCardHeaderProps } from ".";

export function AuthCardHeader({
  title = "Welcome to Note",
  subtitle = "Please log in to continue",
}: AuthCardHeaderProps) {
  return (
    <CardHeader className="flex flex-col items-center gap-4 px-0 pb-0 pt-4">
      <Image src={NoteLogo} alt="NoteLogo" />
      <div className="text-center">
        <CardTitle className="text-2xl font-bold mb-[0.5rem] dark:text-base-300">
          {title}
        </CardTitle>
        <p className="text-neutral-600 text-sm">{subtitle}</p>
      </div>
    </CardHeader>
  );
}
