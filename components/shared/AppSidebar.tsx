"use client";
import { Home, Archive, Tag } from "lucide-react";
import Image from "next/image";
import NoteLogo from "../../public/logo-light.svg";
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
        stroke="#0E121B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarGroup>
        <SidebarGroupLabel>
          <Image src={NoteLogo} alt="NoteLogo" />
        </SidebarGroupLabel>
      </SidebarGroup>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  className={`h-10 flex items-center justify-between pr-[13px] 
                    hover:bg-base-100/80 
                    transition-all duration-200 ease-in-out 
                    transform hover:scale-[1.02] 
                    hover:shadow-xs 
                    ${
                      pathname === item.url
                        ? "bg-base-100 shadow-sm scale-[1.02]"
                        : ""
                    }`}
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon
                        size={20}
                        color={pathname === item.url ? "#335CFF" : "#2B303B"}
                      />
                      <span className="text-base-950 font-medium letter-[-2px]">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                  <ArrowIcon />
                </SidebarMenuItem>
              ))}

              <Separator />

              <SidebarGroupLabel className="px-0">Tags</SidebarGroupLabel>
              {tags.map((tags, index) => (
                <SidebarMenuItem
                  key={index}
                  className="h-10 flex items-center justify-between pr-[13px] hover:bg-base-100/80  
                    transition-all duration-200 ease-in-out px-3
                    transform hover:scale-[1.02] 
                    hover:shadow-xs"
                >
                  <SidebarMenuButton asChild>
                    <a href={tags.url}>
                      <tags.icon size={20} color="#2B303B" />
                      <span className="text-base-950 font-medium letter-[-2px]">
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
