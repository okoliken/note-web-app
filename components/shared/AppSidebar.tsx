"use client";
import { Home, Archive, Tag } from "lucide-react";
import Image from "next/image";
import NoteLogo from "../../public/logo-light.svg";
import DarkNoteLogo from "../../public/logo-dark.svg";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// Menu items.
const items = [
  {
    title: "All Notes",
    url: "/",
    icon: Home,
  },
  {
    title: "Archived Notes",
    url: "/archived",
    icon: Archive,
  },
];

const tags = [
  {
    title: "Cooking",
    url: "#",
    icon: Tag,
  },
  {
    title: "Dev",
    url: "#",
    icon: Tag,
  },
  {
    title: "Fitness",
    url: "#",
    icon: Tag,
  },
  {
    title: "Health",
    url: "#",
    icon: Tag,
  },
  {
    title: "Personal",
    url: "#",
    icon: Tag,
  },
  {
    title: "React",
    url: "#",
    icon: Tag,
  },
  {
    title: "Recipes",
    url: "#",
    icon: Tag,
  },
  {
    title: "Shopping",
    url: "#",
    icon: Tag,
  },
  {
    title: "Travel",
    url: "#",
    icon: Tag,
  },
  {
    title: "TypeScript",
    url: "#",
    icon: Tag,
  },
];

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L1 9"
        className={cn(
          "stroke-[#0E121B]",
          "dark:stroke-base-200",
          className
        )}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export function AppSidebar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  return (
    <Sidebar>
      <SidebarGroup>
        <SidebarGroupLabel>
          <Image
            src={resolvedTheme === "light" ? NoteLogo : DarkNoteLogo}
            alt="NoteLogo"
          />
        </SidebarGroupLabel>
      </SidebarGroup>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className={cn(
                    "h-10 flex items-center justify-between pr-[13px]",
                    "hover:bg-base-100/80 dark:hover:bg-base-800",
                    "transition-all duration-200 ease-in-out",
                    "transform hover:scale-[1.02]",
                    "hover:shadow-xs",
                    pathname === item.url &&
                      "bg-base-100 dark:bg-base-800 shadow-sm scale-[1.02]"
                  )}
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon
                        size={20}
                        className={cn(
                          pathname === item.url
                            ? "text-[#335CFF]"
                            : "text-[#2B303B] dark:text-base-200"
                        )}
                      />
                      <span className="text-base-950 dark:text-base-200 font-medium letter-[-2px]">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                  <ArrowIcon
                    className={cn(
                      pathname === item.url
                        ? "text-[#2B303B] dark:text-base-200"
                        : "text-[#2B303B] dark:text-base-200"
                    )}
                  />
                </SidebarMenuItem>
              ))}

              <Separator />

              <SidebarGroupLabel className="px-0 text-base-500">Tags</SidebarGroupLabel>
              {tags.map((tags, index) => (
                <SidebarMenuItem
                  key={index}
                  className={cn(
                    "h-10 flex items-center justify-between pr-[13px]",
                    "hover:bg-base-100/80 dark:hover:bg-base-800",
                    "transition-all duration-200 ease-in-out px-3",
                    "transform hover:scale-[1.02]",
                    "hover:shadow-xs"
                  )}
                >
                  <SidebarMenuButton asChild>
                    <a href={tags.url}>
                      <tags.icon
                        size={20}
                        className={cn("text-[#2B303B] dark:text-base-200")}
                      />
                      <span className="text-base-950 dark:text-base-200 font-medium letter-[-2px]">
                        {tags.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
