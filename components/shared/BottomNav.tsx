"use client";

import Link from "next/link";
import { 
  Home, 
  Search, 
  Archive, 
  Tag, 
  Settings 
} from "lucide-react";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { 
      href: "/", 
      icon: Home, 
      label: "Home" 
    },
    { 
      href: "/search", 
      icon: Search, 
      label: "Search" 
    },
    { 
      href: "/archived", 
      icon: Archive, 
      label: "Archived" 
    },
    { 
      href: "/tags", 
      icon: Tag, 
      label: "Tags" 
    },
    { 
      href: "/settings", 
      icon: Settings, 
      label: "Settings" 
    }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-base-200 z-50 py-3 sm:py-0 px-4 shadow-bottom-nav">
      <div className="flex justify-around sm:py-2">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={`flex flex-1 flex-col gap-1 items-center justify-center py-1 ${
              pathname === item.href ? 'text-blue-500 bg-blue-50 rounded-sm' : 'text-base-600'
            }`}
          >
            <item.icon size={24} />
            <span className="text-xs mt-1 hidden sm:block">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;