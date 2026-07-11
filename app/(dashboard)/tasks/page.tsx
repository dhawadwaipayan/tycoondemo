"use client";

import { useState, useRef, useEffect } from "react";
import { 
  MagnifyingGlass, Plus, Funnel, SortAscending, DotsThree, 
  Kanban, ListDashes, SidebarSimple, X,
  Clock, User, CalendarBlank, Flag, WarningCircle, CheckCircle, Users, Robot, ClockCounterClockwise
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { clsx } from "clsx";

const tasksData = [
  { id: "1", title: "Brand ads copy refresh", assignee: "casey", assigneeName: "Amelia Grant", date: "n/a", priority: "Low priority", status: "backlog", timeframe: "1d" },
  { id: "2", title: "\"Leave work at work\" billboards", assignee: "darren", assigneeName: "Daniel Foster", date: "n/a", priority: "Low priority", status: "backlog", timeframe: "6d" },
  { id: "3", title: "BFCM campaign", assignee: "jordan", assigneeName: "Benjamin Ortiz", date: "11/15/2025", priority: "High priority", status: "in-progress", timeframe: "3d" },
  { id: "4", title: "Influencer promotions", assignee: "indie", assigneeName: "Ruby Gallagher", date: "11/15/2025", priority: "High priority", status: "in-progress", timeframe: "2d" },
  { id: "5", title: "\"A day in the life\" social campa...", assignee: "riley", assigneeName: "Ethan Davies", date: "11/10/2025", priority: "Medium priority", status: "in-progress", timeframe: "1d" },
  { id: "6", title: "Branded search campaign", assignee: "jordan", assigneeName: "Oliver Hayes", date: "09/18/2025", priority: "Low priority", status: "live", timeframe: "3d" },
  { id: "7", title: "Streaming services ad placem...", assignee: "casey", assigneeName: "Amelia Smith", date: "09/18/2025", priority: "Low priority", status: "live", timeframe: "2d" },
  { id: "8", title: "Pop-up retargeting campaign", assignee: "jordan", assigneeName: "Oliver Benson", date: "09/22/2025", priority: "High priority", status: "live", timeframe: "2d" },
  { id: "9", title: "Grand central poster", assignee: "darren", assigneeName: "Caleb Smith", date: "09/23/2025", priority: "High priority", status: "completed", timeframe: "" },
  { id: "10", title: "Social Easter eggs", assignee: "riley", assigneeName: "Caleb Smith", date: "09/14/2025", priority: "High priority", status: "completed", timeframe: "" },
];

const columns = [
  { id: "backlog", title: "Backlog", badgeBg: "bg-purple-100", badgeText: "text-purple-700", border: "border-purple-200" },
  { id: "in-progress", title: "In Progress", badgeBg: "bg-orange-100", badgeText: "text-orange-700", border: "border-orange-200" },
  { id: "live", title: "Live", badgeBg: "bg-blue-100", badgeText: "text-blue-700", border: "border-blue-200" },
  { id: "completed", title: "Completed", badgeBg: "bg-emerald-100", badgeText: "text-emerald-700", border: "border-emerald-200" },
];

export default function TasksPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [view, setView] = useState<"board" | "list">("board");
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<typeof tasksData[0] | null>(null);
  
  const [rightPanelWidth, setRightPanelWidth] = useState(400);
  const isResizingRight = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizingRight.current) return;
      
      const newWidth = document.body.clientWidth - e.clientX;
      if (newWidth >= 300 && newWidth <= 800) {
        setRightPanelWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      isResizingRight.current = false;
      document.body.style.cursor = 'default';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleTaskClick = (task: typeof tasksData[0]) => {
    setSelectedTask(task);
    setIsRightPanelOpen(true);
  };

  const filters = [
    { id: "all", label: "All tasks", icon: Kanban },
    { id: "waiting", label: "Waiting on you", icon: WarningCircle },
    { id: "in-progress", label: "In progress", icon: ClockCounterClockwise },
    { id: "blocked", label: "Blocked", icon: WarningCircle },
    { id: "done", label: "Done", icon: CheckCircle },
  ];

  const sourceFilters = [
    { id: "me", label: "Spawned by me", icon: Users },
    { id: "astra", label: "Spawned by Astra", icon: Robot },
  ];

  return (
    <div className="flex-1 flex overflow-hidden bg-paper">
      
      {/* Context Panel: Filters */}
      <div className="w-[280px] flex-shrink-0 border-r border-border bg-paper flex flex-col h-full z-10 shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
        <div className="p-4 pt-5 pb-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] font-display font-bold tracking-tight text-ink">Tasks</h2>
            <button className="text-ink hover:bg-paper-elevated p-1.5 rounded-full transition-colors">
              <Plus size={18} weight="bold" />
            </button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="w-full bg-[#F8F9FA] border border-border/50 rounded-xl py-2 pl-9 pr-4 text-[13px] outline-none focus:border-ink/30 text-ink placeholder:text-ink-muted transition-colors"
            />
            <MagnifyingGlass size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 space-y-6 pb-6 scrollbar-hide">
          {/* Main Filters */}
          <div className="space-y-1">
            {filters.map(filter => {
              const Icon = filter.icon;
              return (
                <button 
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={clsx(
                    "w-full flex items-center gap-3 p-2 px-3 rounded-2xl text-left transition-colors",
                    activeFilter === filter.id ? "bg-[#F8F9FA] text-ink" : "text-ink-muted hover:bg-[#F8F9FA]/50 hover:text-ink"
                  )}
                >
                  <Icon size={18} weight={activeFilter === filter.id ? "fill" : "regular"} className={activeFilter === filter.id ? "text-ink" : ""} />
                  <span className="text-[13px] font-medium flex-1">{filter.label}</span>
                  {filter.id === "waiting" && <span className="bg-accent-alert/10 text-accent-alert text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>}
                </button>
              );
            })}
          </div>

          {/* Sources */}
          <div>
            <p className="px-3 text-[11px] font-semibold tracking-wider text-ink-muted/70 uppercase mb-2">Sources</p>
            <div className="space-y-1">
              {sourceFilters.map(filter => {
                const Icon = filter.icon;
                return (
                  <button 
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={clsx(
                      "w-full flex items-center gap-3 p-2 px-3 rounded-2xl text-left transition-colors",
                      activeFilter === filter.id ? "bg-[#F8F9FA] text-ink" : "text-ink-muted hover:bg-[#F8F9FA]/50 hover:text-ink"
                    )}
                  >
                    <Icon size={18} weight={activeFilter === filter.id ? "fill" : "regular"} className={activeFilter === filter.id ? "text-ink" : ""} />
                    <span className="text-[13px] font-medium flex-1">{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace: Board */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden min-w-0">
        
        {/* Header */}
        <header className="h-[52px] border-b border-border flex items-center justify-between px-4 bg-paper/80 backdrop-blur-sm z-20 shrink-0">
          <div className="flex items-center gap-3">
            <h1 className="text-[15px] font-semibold tracking-tight text-ink">All tasks</h1>
            <span className="text-[13px] text-ink-muted font-medium bg-[#F8F9FA] px-2 py-0.5 rounded-md border border-border/50">{tasksData.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#F8F9FA] border border-border/60 rounded-lg p-0.5 shadow-sm">
              <button 
                onClick={() => setView("board")}
                className={clsx(
                  "p-1.5 rounded-md transition-colors",
                  view === "board" ? "bg-white text-ink shadow-[0_1px_3px_rgba(0,0,0,0.05)]" : "text-ink-muted hover:text-ink"
                )}
              >
                <Kanban size={16} />
              </button>
              <button 
                onClick={() => setView("list")}
                className={clsx(
                  "p-1.5 rounded-md transition-colors",
                  view === "list" ? "bg-white text-ink shadow-[0_1px_3px_rgba(0,0,0,0.05)]" : "text-ink-muted hover:text-ink"
                )}
              >
                <ListDashes size={16} />
              </button>
            </div>
            
            <div className="h-4 w-px bg-border mx-1" />
            
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 text-ink-muted hover:text-ink hover:bg-[#F8F9FA] rounded-md transition-colors text-[13px] font-medium">
              <Funnel size={16} /> Filter
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 text-ink-muted hover:text-ink hover:bg-[#F8F9FA] rounded-md transition-colors text-[13px] font-medium">
              <SortAscending size={16} /> Sort
            </button>
            <button 
              onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
              className={clsx(
                "p-1.5 rounded-md transition-colors -scale-x-100",
                isRightPanelOpen ? "text-ink bg-[#F8F9FA]" : "text-ink-muted hover:text-ink hover:bg-[#F8F9FA]"
              )}
            >
              <SidebarSimple size={18} />
            </button>
          </div>
        </header>

        {/* Board Content */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden p-6 relative">
          
          <div className="flex gap-6 h-full items-start w-max">
            {columns.map(column => {
              const columnTasks = tasksData.filter(t => t.status === column.id);
              
              return (
                <div key={column.id} className="w-[300px] shrink-0 flex flex-col max-h-full">
                  {/* Column Header */}
                  <div className="flex items-center gap-3 mb-4 px-1">
                    <span className={clsx("px-2.5 py-1 rounded-md text-[13px] font-medium", column.badgeBg, column.badgeText)}>
                      {column.title}
                    </span>
                    <span className="text-[14px] font-medium text-ink-muted">{columnTasks.length}</span>
                  </div>
                  
                  {/* Cards */}
                  <div className="flex-1 overflow-y-auto space-y-3 pb-4 scrollbar-hide px-1">
                    {columnTasks.map(task => (
                      <div 
                        key={task.id} 
                        onClick={() => handleTaskClick(task)}
                        className={clsx(
                          "bg-white border rounded-[12px] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer group flex flex-col gap-3 transition-all",
                          column.border,
                          selectedTask?.id === task.id ? "ring-2 ring-blue-500/20" : ""
                        )}
                      >
                        {/* Title and Time */}
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="text-[14px] font-medium text-ink leading-snug">{task.title}</h4>
                          {task.timeframe && (
                            <div className="flex items-center gap-1 text-ink-muted text-[12px] shrink-0 mt-0.5">
                              <Clock size={14} /> <span>{task.timeframe}</span>
                            </div>
                          )}
                        </div>

                        {/* Metadata Rows */}
                        <div className="flex flex-col gap-2 mt-1">
                          <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                            <User size={15} />
                            <div className="w-5 h-5 rounded-full overflow-hidden relative">
                              <Image src={`/avatars/${task.assignee}.png`} alt={task.assigneeName} fill className="object-cover" />
                            </div>
                            <span className="text-ink">{task.assigneeName}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                            <CalendarBlank size={15} />
                            <span>{task.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                            <Flag size={15} />
                            <span>{task.priority}</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add New Button */}
                    <button className="flex items-center gap-1.5 text-[13px] text-ink-muted hover:text-ink font-medium mt-1 py-1 px-1 transition-colors">
                      <Plus size={14} weight="bold" /> Add new
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Context Inspector */}
      {isRightPanelOpen && (
        <div 
          className="flex-shrink-0 flex flex-col h-full bg-paper border-l border-border relative z-20 shadow-[-4px_0_24px_rgba(0,0,0,0.02)]"
          style={{ width: `${rightPanelWidth}px` }}
        >
          {/* Drag Handle */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-border/80 transition-colors z-30"
            onMouseDown={(e) => {
              isResizingRight.current = true;
              document.body.style.cursor = 'col-resize';
              e.preventDefault();
            }}
          />
          
          {/* Panel Header */}
          <div className="h-[52px] bg-paper border-b border-border flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-2">
              <Kanban size={18} className="text-ink-muted" />
              <h3 className="font-semibold text-[14px] text-ink">Task Details</h3>
            </div>
            <div className="flex items-center gap-1">
               <button className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors">
                 <DotsThree size={20} />
               </button>
               <button 
                 onClick={() => setIsRightPanelOpen(false)}
                 className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"
               >
                 <X size={16} weight="bold" />
               </button>
            </div>
          </div>
          
          {/* Panel Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {selectedTask ? (
              <div className="space-y-8">
                <div>
                  <h2 className="text-[20px] font-bold text-ink leading-tight mb-6">{selectedTask.title}</h2>
                  
                  <div className="space-y-4">
                     {/* Status */}
                     <div className="flex items-center">
                       <div className="w-[120px] text-[13px] text-ink-muted flex items-center gap-2">
                         <Kanban size={16} /> Status
                       </div>
                       <div className="flex-1">
                         <span className={clsx(
                           "px-2.5 py-1 rounded-md text-[13px] font-medium capitalize",
                           columns.find(c => c.id === selectedTask.status)?.badgeBg,
                           columns.find(c => c.id === selectedTask.status)?.badgeText
                         )}>
                           {columns.find(c => c.id === selectedTask.status)?.title || selectedTask.status}
                         </span>
                       </div>
                     </div>

                     {/* Assignee */}
                     <div className="flex items-center">
                       <div className="w-[120px] text-[13px] text-ink-muted flex items-center gap-2">
                         <User size={16} /> Assignee
                       </div>
                       <div className="flex-1 flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full overflow-hidden relative border border-border/50">
                           <Image src={`/avatars/${selectedTask.assignee}.png`} alt={selectedTask.assigneeName} fill className="object-cover" />
                         </div>
                         <span className="text-[13px] font-medium text-ink">{selectedTask.assigneeName}</span>
                       </div>
                     </div>

                     {/* Due Date */}
                     <div className="flex items-center">
                       <div className="w-[120px] text-[13px] text-ink-muted flex items-center gap-2">
                         <CalendarBlank size={16} /> Due Date
                       </div>
                       <div className="flex-1">
                         <span className="text-[13px] text-ink">{selectedTask.date}</span>
                       </div>
                     </div>

                     {/* Priority */}
                     <div className="flex items-center">
                       <div className="w-[120px] text-[13px] text-ink-muted flex items-center gap-2">
                         <Flag size={16} /> Priority
                       </div>
                       <div className="flex-1">
                         <span className="text-[13px] text-ink">{selectedTask.priority}</span>
                       </div>
                     </div>
                  </div>
                </div>

                <div className="h-px w-full bg-border" />

                <div>
                   <h3 className="text-[14px] font-semibold text-ink mb-3">Description</h3>
                   <textarea 
                     placeholder="Add a more detailed description..."
                     className="w-full min-h-[150px] bg-[#F8F9FA] border border-border/50 rounded-xl p-3 text-[14px] outline-none focus:border-ink/30 text-ink placeholder:text-ink-muted resize-none transition-colors"
                   />
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-ink-muted space-y-3 opacity-60">
                <Kanban size={48} weight="light" />
                <p className="text-[14px] font-medium">Select a task to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
