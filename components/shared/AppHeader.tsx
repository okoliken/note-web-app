"use client";
import { Input } from "../ui/input";
import { Settings } from "lucide-react";
import Image from "next/image";
import NoteLogo from "../../public/logo-light.svg";
import DarkNoteLogo from '../../public/logo-dark.svg'
import { useTheme } from "next-themes";
import Link from "next/link";

export const AppHeader = () => {
  const { theme } = useTheme();
  return (
    <>
      <header className="h-[81px] p-[2rem] bg-base-100 dark:bg-base-800 md:dark:bg-[#0E121B] md:border-b md:dark:border-base-800 md:border-base-200 flex items-center justify-between sticky top-0 md:bg-white z-10">
        <Image
          className="block md:hidden"
          src={theme === "light" ? NoteLogo : DarkNoteLogo}
          alt="NoteLogo"
        />
        <h3 className="text-2xl font-bold leading-[28.8px] tracking-[-0.5px] hidden md:block text-base-950 dark:text-white">
          All Notes
        </h3>

        <div className="hidden md:flex items-center gap-7">
          <Input
            hasSearchIcon
            className="w-[300px]"
            placeholder="Search by title, content, or tags…"
          />
         <Link href="/settings" className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">
           <div>
             <Settings size={20} color="#717784" />
           </div>
         </Link>
        </div>
      </header>
    </>
  );
};
