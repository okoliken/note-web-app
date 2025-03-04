import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import BottomNav from "./BottomNav";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 relative">
        <AppHeader />
        {children}
        <BottomNav />
      </main>
    </SidebarProvider>
  );
}
