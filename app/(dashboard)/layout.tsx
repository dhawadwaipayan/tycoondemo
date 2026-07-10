"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { SidebarSimple, CaretUpDown, ChatCircleDots, UploadSimple, DotsThreeVertical } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/chats")) {
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarCollapsed(false);
    }
  }, [pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-paper-warm text-ink font-sans">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex-1 flex flex-col overflow-hidden pt-2 pr-2">
        
        {/* Main Workspace Header (Arcade-style breadcrumb) */}
        <header className="h-[52px] rounded-t-xl bg-paper shrink-0 flex items-center justify-between px-4 gap-4 border border-border border-b-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"
            >
              <SidebarSimple size={20} weight="regular" />
            </button>

            <div className="h-4 w-px bg-border mx-1" />
            
            <div className="flex items-center gap-2 text-[14px]">
              {/* Org Switcher */}
              <button className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-paper-elevated transition-colors">
                <div className="w-5 h-5 rounded-full bg-ink text-paper flex items-center justify-center text-[10px] font-bold">
                  D
                </div>
                <span className="font-medium">dwaipayan's org</span>
                <CaretUpDown size={14} className="text-ink-muted" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1 pr-2">
            <button className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors">
              <ChatCircleDots size={20} />
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors text-[13px] font-medium">
              <UploadSimple size={16} weight="bold" />
              Share
            </button>
            <button className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors">
              <DotsThreeVertical size={20} />
            </button>
          </div>
        </header>

        <main className="flex-1 flex overflow-hidden bg-paper border border-border border-b-0 rounded-b-none">
          {children}
        </main>
      </div>
    </div>
  );
}
