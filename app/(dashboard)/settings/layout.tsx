"use client";
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
            <Link
              className={cn(
                "flex items-center justify-between  p-2 text-sm h-9 rounded-[6px] group",
                "hover:bg-base-100 dark:hover:bg-base-800",
                pathname === "/settings" && "bg-base-100 dark:bg-base-800"
              )}
              href="/settings"
            >
              <li className="flex items-center gap-x-[11.77px]">
                <IconSun
                  className={cn(pathname === "/settings" && "!text-[#335CFF]")}
                />
                Color Theme
              </li>
              <ArrowIcon
                className={cn(
                  "hidden group-hover:block",
                  pathname === "/settings" && "block"
                )}
              />
            </Link>
            <Link
              className={cn(
                "flex items-center justify-between p-2 text-sm h-9 rounded-[6px] group",
                "hover:bg-base-100 dark:hover:bg-base-800",
                pathname === "/settings/font-theme" &&
                  "bg-base-100 dark:bg-base-800"
              )}
              href="/settings/font-theme"
            >
              <li className="flex items-center gap-x-[11.77px]">
                <IconFont
                  className={cn(
                    pathname === "/settings/font-theme" && "!text-[#335CFF]"
                  )}
                />
                Font Theme
              </li>
              <ArrowIcon
                className={cn(
                  "hidden group-hover:block",
                  pathname === "/settings/font-theme" && "block"
                )}
              />
            </Link>
            <Link
              className={cn(
                "flex items-center justify-between p-2 text-sm h-9 rounded-[6px] group",
                "hover:bg-base-100 dark:hover:bg-base-800",
                pathname === "/settings/change-password" &&
                  "bg-base-100 dark:bg-base-800"
              )}
              href="/settings/change-password"
            >
              <li className="flex items-center gap-x-[11.77px]">
                <IconLock
                  className={cn(
                    pathname === "/settings/change-password" &&
                      "!text-[#335CFF]"
                  )}
                />
                Change Password
              </li>
              <ArrowIcon
                className={cn(
                  "hidden group-hover:block",
                  pathname === "/settings/change-password" && "block"
                )}
              />
            </Link>
            <Separator className="my-2" />
            <li
              className={cn(
                "flex items-center justify-between p-2 text-sm h-9 rounded-[6px] group",
                "hover:bg-base-100 dark:hover:bg-base-800",
                "hover:bg-base-100 dark:hover:bg-base-800"
              )}
            >
              <button className="flex items-center gap-x-[11.77px]">
                <IconLogout />
                Logout
              </button>
              <ArrowIcon
                className={cn(
                  "hidden group-hover:block",
                  pathname === "/settings/change-password" && "block"
                )}
              />
            </li>
          </ul>
        </div>
      </SidePanel>
      <div className="flex-1">{children}</div>
    </div>
  );
}
