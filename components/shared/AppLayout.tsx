import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/AppSidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        {children}
      </main>
    </SidebarProvider>
  )
}
