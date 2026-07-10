"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Chats, Kanban, Calendar, Users, Books, List, CaretUp, CaretDown, Gear, SidebarSimple, CaretUpDown, MagnifyingGlass, Robot, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/home", icon: House },
  { name: "Chats", href: "/chats", icon: Chats },
  { name: "Tasks", href: "/tasks", icon: Kanban },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Team", href: "/team", icon: Users },
  { name: "Library", href: "/library", icon: Books },
];

export function Sidebar({ isCollapsed }: { isCollapsed?: boolean }) {
  const pathname = usePathname();
  const [width, setWidth] = useState(240);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current || isCollapsed) return;
      const newWidth = Math.max(180, Math.min(e.clientX, 400));
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.cursor = 'default';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isCollapsed]);

  const currentWidth = isCollapsed ? 64 : width;

  return (
    <div 
      className="flex-shrink-0 bg-paper-warm h-screen flex flex-col relative text-ink transition-[width] duration-300 ease-in-out"
      style={{ width: `${currentWidth}px` }}
    >
      {!isCollapsed && (
        <div 
          className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-border transition-colors z-10"
          onMouseDown={(e) => {
            isResizing.current = true;
            document.body.style.cursor = 'col-resize';
            e.preventDefault();
          }}
        />
      )}

      {/* Header Area */}
      <div className={clsx("flex items-center h-[52px] shrink-0 mt-2", isCollapsed ? "justify-center px-0" : "px-6")}>
        <h1 className={clsx("font-sora tracking-tight text-ink font-bold", isCollapsed ? "text-[20px]" : "text-[20px]")}>
          {isCollapsed ? "T" : "Tycoon AI"}
        </h1>
      </div>

      <nav className="flex-1 px-3 pb-2 space-y-1 overflow-hidden overflow-y-auto scrollbar-hide">
        
        {/* Quick Search */}
        {!isCollapsed && (
          <div className="relative px-1">
            <input 
              type="text" 
              placeholder="Quick search..."
              className="w-full bg-paper border border-border shadow-sm rounded-[8px] py-1.5 pl-8 pr-10 text-[13px] outline-none focus:border-ink text-ink placeholder:text-ink-faint transition-colors"
            />
            <MagnifyingGlass size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center h-5 px-1.5 bg-paper-elevated border border-border rounded-[4px]">
              <span className="text-[11px] text-ink-muted font-medium leading-none">⌘K</span>
            </div>
          </div>
        )}

        {isCollapsed && (
          <div className="flex justify-center">
            <button className="p-2 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors" title="Search">
              <MagnifyingGlass size={18} />
            </button>
          </div>
        )}

        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center rounded-[6px] transition-colors relative",
                isCollapsed ? "justify-center py-2.5 px-0 mb-1" : "gap-3 py-2 px-3",
                isActive
                  ? "bg-paper-elevated text-ink"
                  : "text-ink-muted hover:text-ink hover:bg-paper-elevated/50"
              )}
              title={isCollapsed ? item.name : undefined}
            >
              {isActive && <div className={clsx("absolute left-0 w-0.5 h-6 bg-ink rounded-r-full", isCollapsed && "left-[-8px]")} />}
              <Icon size={18} weight={isActive ? "fill" : "regular"} className={isActive ? "text-ink" : "text-ink-faint shrink-0"} />
              {!isCollapsed && <span className="text-[13px] font-medium">{item.name}</span>}
            </Link>
          );
        })}

        {/* Recent Section */}
        {!isCollapsed && (
          <>
            <div className="pt-6 pb-1">
              <div className="flex items-center gap-2 px-3 text-[12px] font-medium text-ink-muted">
                <CaretUp size={12} weight="bold" />
                Recent
              </div>
            </div>
            
            <div className="space-y-0.5">
              <button className="w-full flex items-center gap-3 py-1.5 rounded-[6px] transition-colors text-[14px] font-medium px-3 bg-paper-elevated/80 text-ink">
                <div className="w-[18px] h-[18px] rounded-[4px] bg-ink-muted/20 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-1.5 rounded-t-[2px] border-2 border-b-0 border-ink-muted" />
                </div>
                <span className="truncate">New Project</span>
              </button>
              
              <button className="w-full flex items-center gap-3 py-1.5 rounded-[6px] transition-colors text-[14px] font-medium px-3 text-ink-muted hover:text-ink hover:bg-paper-elevated/50">
                <Robot size={18} weight="fill" className="text-purple-600 shrink-0" />
                <span className="truncate">CotonAI Capabilities Overview</span>
              </button>
              
              <button className="w-full flex items-center gap-3 py-1.5 rounded-[6px] transition-colors text-[14px] font-medium px-3 text-ink-muted hover:text-ink hover:bg-paper-elevated/50">
                <RocketLaunch size={18} weight="fill" className="text-indigo-600 shrink-0" />
                <span className="truncate">CotonAI Presentation</span>
              </button>
            </div>
          </>
        )}
      </nav>

      {/* Bottom Profile Area */}
      <div className={clsx("p-3", isCollapsed && "px-2 pb-4")}>
        <div className={clsx(
          "flex items-center py-1.5 rounded-full border border-border bg-paper shadow-sm hover:border-ink/20 cursor-pointer transition-colors",
          isCollapsed ? "px-0 justify-center w-[36px] h-[36px] mx-auto" : "w-full px-1.5"
        )}>
          <div className={clsx("shrink-0 rounded-full bg-ink text-paper flex items-center justify-center font-bold text-[11px] overflow-hidden relative", isCollapsed ? "w-[28px] h-[28px]" : "w-7 h-7 mr-2")}>
             <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-20" />
             DD
          </div>
          {!isCollapsed && (
            <>
              <p className="text-[14px] font-medium text-ink flex-1 truncate">Dwaipayan</p>
              <CaretDown size={14} className="text-ink-muted shrink-0 mx-2" weight="bold" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
