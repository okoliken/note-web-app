
"use client"
import SidePanel from "@/components/shared/SidePanel";
import { ArrowIcon } from "@/components/shared/AppSidebar";
import Link from "next/link";
import { IconFont, IconLock, IconSun, IconLogout } from "@/components/icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const pathname = usePathname();
    return (
        <div className="flex">
          <SidePanel className="border-r border-gray-200 dark:border-base-800 w-full md:w-[290px] shrink-0">
            <div className="py-5 pl-8 pr-4">
              <ul className="text-base-700 dark:text-base-200 flex flex-col gap-2">
                <li
                  className={cn(
                    "flex items-center justify-between p-2 text-sm h-9 rounded-[6px]",
                    "hover:bg-base-100 dark:hover:bg-base-800",
                    pathname === "/settings" && "bg-base-100 dark:bg-base-800"
                  )}
                >
                  <Link className="flex items-center gap-x-[11.77px]" href="/settings">
                    <IconSun />
                    Color Theme
                  </Link>
                  <ArrowIcon />
                </li>
                <li
                  className={cn(
                    "flex items-center justify-between p-2 text-sm h-9 rounded-[6px]",
                    "hover:bg-base-100 dark:hover:bg-base-800",
                    pathname === "/" && "bg-base-100 dark:bg-base-800"
                  )}
                >
                  <Link className="flex items-center gap-x-[11.77px]" href="/">
                    <IconFont />
                    Font Theme
                  </Link>
                  <ArrowIcon />
                </li>
                <li
                  className={cn(
                    "flex items-center justify-between p-2 text-sm h-9 rounded-[6px]",
                    "hover:bg-base-100 dark:hover:bg-base-800",
                    pathname === "/" && "bg-base-100 dark:bg-base-800"
                  )}
                >
                  <Link className="flex items-center gap-x-[11.77px]" href="/">
                    <IconLock />
                    Change Password
                  </Link>
                  <ArrowIcon />
                </li>
                <Separator className="my-2"/>
                <li
                  className={cn(
                    "flex items-center justify-between p-2 text-sm h-9 rounded-[6px]",
                    "hover:bg-base-100 dark:hover:bg-base-800",
                    pathname === "/" && "bg-base-100 dark:bg-base-800"
                  )}
                >
                  <Link className="flex items-center gap-x-[11.77px]" href="/">
                    <IconLogout />
                    Logout
                  </Link>
                  <ArrowIcon />
                </li>
              </ul>
            </div>
          </SidePanel>
          <div className="flex-1">
          {children}
          </div>
        </div>
      );
  }