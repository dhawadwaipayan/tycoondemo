"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Sparkle, ArrowRight, Paperclip, MicrophoneStage, CaretDown, Users, Info, 
  MagnifyingGlass, Plus, At, Robot, CheckSquare, ListDashes, ClockCounterClockwise, 
  ShieldCheck, Wrench, FolderOpen, Kanban, CheckCircle, ChatCircle, ArrowUp,
  DotsThree, Clock, X, SidebarSimple, CornersOut, FileText, PushPin, ShareNetwork, Trash,
  TextT, TextAUnderline, Highlighter, TextB, TextItalic, TextUnderline, TextStrikethrough, 
  TextHOne, TextHTwo, TextHThree, ListBullets, ListNumbers, ListChecks, Quotes, 
  Link as LinkIcon, Image as PhosphorImage, Globe, Table, ArrowUUpLeft, ArrowUUpRight, Check,
  Copy, CaretRight, ArrowUpRight
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { clsx } from "clsx";

const agents = [
  { name: "Indie", role: "Design Lead", img: "indie" },
  { name: "Riley", role: "Head of Research", img: "riley" },
  { name: "Jordan", role: "Marketing", img: "jordan" },
  { name: "Casey", role: "Content", img: "casey" },
  { name: "Darren", role: "AI CTO", img: "darren" },
  { name: "Harper", role: "Legal", img: "harper" },
];

export default function ChatsPage() {
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [rightPanelWidth, setRightPanelWidth] = useState(500);
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

  return (
    <div className="flex-1 flex overflow-hidden bg-paper">
      
      {/* Context Panel: Chat List */}
      <div className="w-[300px] flex-shrink-0 border-r border-border bg-paper flex flex-col h-full z-10 shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
        <div className="p-4 pt-5 pb-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] font-display font-bold tracking-tight text-ink">Chats</h2>
            <button className="text-ink hover:bg-paper-elevated p-1.5 rounded-full transition-colors">
              <Plus size={18} weight="bold" />
            </button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search chats, agents..." 
              className="w-full bg-[#F8F9FA] border border-border/50 rounded-xl py-2 pl-9 pr-4 text-[13px] outline-none focus:border-ink/30 text-ink placeholder:text-ink-muted transition-colors"
            />
            <MagnifyingGlass size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 space-y-6 pb-6 scrollbar-hide">
          {/* Pinned */}
          <div>
            <p className="px-3 text-[11px] font-semibold tracking-wider text-ink-muted/70 uppercase mb-2">Pinned</p>
            <button className="w-full flex items-center gap-3 p-2 px-3 rounded-2xl bg-[#F8F9FA] hover:bg-paper-elevated text-left transition-colors relative">
              <div className="w-[42px] h-[42px] rounded-full bg-[#FFF4D4] flex items-center justify-center shrink-0 relative overflow-hidden">
                <Image src="/avatars/astra.png" alt="Astra" fill className="object-cover" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-bold text-ink">Astra</p>
                  <span className="w-2 h-2 rounded-full bg-accent-alert" />
                </div>
                <p className="text-[13px] text-ink-muted truncate font-medium">3 decisions need review</p>
              </div>
            </button>
          </div>

          {/* Groups */}
          <div>
            <div className="flex justify-between items-center px-3 mb-2">
              <p className="text-[11px] font-semibold tracking-wider text-ink-muted/70 uppercase">Groups</p>
              <button className="text-ink-muted hover:text-ink"><Plus size={12} weight="bold" /></button>
            </div>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 p-2 px-3 rounded-2xl hover:bg-[#F8F9FA] text-left transition-colors group">
                <div className="w-[42px] h-[42px] rounded-full bg-paper-elevated border border-border/50 text-ink flex items-center justify-center group-hover:border-ink/20 transition-colors"><Users size={20} weight="fill" className="text-ink-muted" /></div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-[14px] font-bold text-ink">WilowAI Launch</p>
                  <p className="text-[13px] text-ink-muted truncate">Indie: Logo concepts ready</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-2 px-3 rounded-2xl hover:bg-[#F8F9FA] text-left transition-colors group">
                <div className="w-[42px] h-[42px] rounded-full bg-paper-elevated border border-border/50 text-ink flex items-center justify-center group-hover:border-ink/20 transition-colors"><Users size={20} weight="fill" className="text-ink-muted" /></div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-[14px] font-bold text-ink">Website Build</p>
                  <p className="text-[13px] text-ink-muted truncate">Darren: Need approval for...</p>
                </div>
              </button>
            </div>
          </div>

          {/* Agents */}
          <div>
            <div className="flex justify-between items-center px-3 mb-2">
              <p className="text-[11px] font-semibold tracking-wider text-ink-muted/70 uppercase">Agents</p>
            </div>
            <div className="space-y-1">
              {agents.map(agent => (
                <button key={agent.name} className="w-full flex items-center gap-3 p-2 px-3 rounded-2xl hover:bg-[#F8F9FA] text-left transition-colors">
                  <div className="w-[42px] h-[42px] rounded-full bg-paper-elevated flex items-center justify-center relative overflow-hidden shrink-0 border border-border/20">
                    <Image src={`/avatars/${agent.img}.png`} alt={agent.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-bold text-ink">{agent.name}</p>
                    </div>
                    <p className="text-[13px] text-ink-muted truncate">{agent.role}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace: Chat Area */}
      <div className="flex-1 flex flex-col bg-[#F8F9FA] relative min-w-0">
        
        {/* Stylized lined mint green gradient background */}
        <div 
          className="absolute inset-x-0 top-[52px] bottom-0 pointer-events-none z-0"
          style={{
                backgroundImage: `
                  repeating-linear-gradient(to right, transparent, transparent 31px, rgba(112, 66, 20, 0.04) 31px, rgba(112, 66, 20, 0.04) 32px),
                  linear-gradient(to bottom, transparent 0%, rgba(227, 200, 160, 0.3) 100%)
                `,
            WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
            maskImage: 'linear-gradient(to top, black 30%, transparent 100%)'
          }}
        />

        {/* Header */}
        <header className="h-[52px] border-b border-border flex items-center justify-between shrink-0 bg-paper/80 backdrop-blur-sm z-20 sticky top-0 px-2">
          {/* Left Tabs */}
          <div className="flex h-full items-end gap-1 px-1 pt-1.5">
            
            {/* Active Tab */}
            <div className="group relative flex items-center gap-2 h-[38px] pl-3 pr-2 bg-[#F8F9FA] border border-border/50 border-b-[#F8F9FA] rounded-t-[10px] min-w-[180px] max-w-[220px] cursor-pointer translate-y-[1px]">
               <div className="w-[18px] h-[18px] rounded-full overflow-hidden shrink-0 relative">
                 <Image src="/avatars/astra.png" alt="Astra" fill className="object-cover" />
               </div>
               <span className="text-[13px] font-medium text-ink truncate flex-1">Video sizing on the...</span>
               <button className="shrink-0 p-1 text-ink-muted hover:text-ink hover:bg-black/5 rounded-[4px] transition-colors opacity-0 group-hover:opacity-100 z-10">
                 <X size={12} weight="bold" />
               </button>
               <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F8F9FA] to-transparent rounded-tr-[10px] pointer-events-none group-hover:opacity-0 transition-opacity" />
            </div>

            {/* Inactive Tab 1 */}
            <div className="group relative flex items-center gap-2 h-[38px] pl-3 pr-2 hover:bg-[#F8F9FA]/50 border border-transparent rounded-t-[10px] min-w-[180px] max-w-[220px] cursor-pointer text-ink-muted hover:text-ink transition-colors translate-y-[1px]">
               <div className="w-[18px] h-[18px] rounded-full overflow-hidden shrink-0 relative opacity-70 group-hover:opacity-100 transition-opacity">
                 <Image src="/avatars/astra.png" alt="Astra" fill className="object-cover" />
               </div>
               <span className="text-[13px] font-medium truncate flex-1">Stripe integration for...</span>
               <button className="shrink-0 p-1 text-ink-muted hover:text-ink hover:bg-black/5 rounded-[4px] transition-colors opacity-0 group-hover:opacity-100 z-10">
                 <X size={12} weight="bold" />
               </button>
               <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-paper group-hover:from-[#F8F9FA]/50 to-transparent rounded-tr-[10px] transition-all group-hover:opacity-0 pointer-events-none" />
            </div>

            {/* Inactive Tab 2 */}
            <div className="group relative flex items-center gap-2 h-[38px] pl-3 pr-2 hover:bg-[#F8F9FA]/50 border border-transparent rounded-t-[10px] min-w-[180px] max-w-[220px] cursor-pointer text-ink-muted hover:text-ink transition-colors translate-y-[1px]">
               <div className="w-[18px] h-[18px] rounded-full overflow-hidden shrink-0 relative opacity-70 group-hover:opacity-100 transition-opacity">
                 <Image src="/avatars/astra.png" alt="Astra" fill className="object-cover" />
               </div>
               <span className="text-[13px] font-medium truncate flex-1">Account manag...</span>
               <button className="shrink-0 p-1 text-ink-muted hover:text-ink hover:bg-black/5 rounded-[4px] transition-colors opacity-0 group-hover:opacity-100 z-10">
                 <X size={12} weight="bold" />
               </button>
               <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-paper group-hover:from-[#F8F9FA]/50 to-transparent rounded-tr-[10px] transition-all group-hover:opacity-0 pointer-events-none" />
            </div>

          </div>

          {/* Right Actions */}
          <div className="flex gap-1 h-full items-center">
            <button className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors">
              <Plus size={16} />
            </button>
            <button className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors">
              <Clock size={16} />
            </button>
            <button className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors">
              <DotsThree size={20} />
            </button>
            <div className="h-4 w-px bg-border mx-1" />
            <button 
              onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
              className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md transition-colors -scale-x-100"
            >
              <SidebarSimple size={18} />
            </button>
          </div>
        </header>

        {/* Chat Thread */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-48 scrollbar-hide pt-4 flex flex-col items-center relative z-10 w-full">
          <div className="w-full max-w-[1000px] flex flex-col space-y-8">
            <div className="flex justify-center my-6">
            <span className="px-3 py-1 bg-paper rounded-full border border-border/50 text-[11px] font-bold text-ink-muted uppercase tracking-wider shadow-sm">Today</span>
          </div>

            {/* User Message */}
            <div className="flex justify-end pr-[58px]">
              <div className="bg-ink text-paper px-5 py-3.5 rounded-[20px] rounded-tr-[4px] max-w-[700px] shadow-sm">
                <p className="text-[15px] leading-relaxed">Create a launch plan for WilowAI.</p>
              </div>
            </div>

          {/* Astra Response: Complex Message */}
          <div className="flex gap-4 pr-[58px]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#FFF4D4] flex items-center justify-center shrink-0 relative overflow-hidden shadow-sm mt-1 border border-border/20">
              <Image src="/avatars/astra.png" alt="Astra" fill className="object-cover" />
            </div>
            
            <div className="flex-1 space-y-4 max-w-[700px]">
              <div className="flex items-baseline gap-2">
                <p className="text-[15px] font-bold text-ink tracking-tight">Astra</p>
                <span className="text-[12px] text-ink-muted font-medium">10:42 AM</span>
              </div>
              
              <div className="bg-paper border border-border/50 px-5 py-4 rounded-[20px] rounded-tl-[4px] shadow-sm text-ink text-[15px] leading-relaxed">
                I'll coordinate this with Jordan, Riley, and Casey. I've broken down the work into 3 tasks for the team:
              </div>
              
              {/* Task Spawn Card inside Chat - Modeled after Home cards */}
              <div className="bg-paper border border-border rounded-[20px] p-1.5 flex flex-col shadow-sm max-w-[400px]">
                <div className="flex items-center gap-3 px-1.5 pt-1.5 pb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Kanban size={18} weight="fill" className="text-purple-600" />
                  </div>
                  <p className="text-[15px] font-bold text-ink tracking-tight">3 Tasks Created</p>
                </div>
                
                <div className="bg-[#F8F9FA] rounded-[14px] p-2 flex flex-col mx-1.5 mb-1.5 border border-border/40">
                  <div className="flex items-center gap-3 p-2 rounded-[10px] hover:bg-white hover:shadow-sm cursor-pointer transition-all group">
                    <div className="w-6 h-6 rounded-full overflow-hidden relative border border-border/50 shrink-0">
                      <Image src="/avatars/riley.png" alt="Riley" fill className="object-cover" />
                    </div>
                    <p className="text-[13px] font-medium text-ink flex-1 truncate group-hover:text-blue-600 transition-colors">Research launch channels</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-[10px] hover:bg-white hover:shadow-sm cursor-pointer transition-all group">
                    <div className="w-6 h-6 rounded-full overflow-hidden relative border border-border/50 shrink-0">
                      <Image src="/avatars/jordan.png" alt="Jordan" fill className="object-cover" />
                    </div>
                    <p className="text-[13px] font-medium text-ink flex-1 truncate group-hover:text-blue-600 transition-colors">Create GTM plan</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-[10px] hover:bg-white hover:shadow-sm cursor-pointer transition-all group">
                    <div className="w-6 h-6 rounded-full overflow-hidden relative border border-border/50 shrink-0">
                      <Image src="/avatars/casey.png" alt="Casey" fill className="object-cover" />
                    </div>
                    <p className="text-[13px] font-medium text-ink flex-1 truncate group-hover:text-blue-600 transition-colors">Draft launch copy</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="mt-1 pt-2.5 px-2 pb-1 border-t border-border/40">
                    <button className="text-[13px] font-bold text-ink flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                      View board <ArrowRight size={12} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-paper border border-border/50 px-5 py-4 rounded-[20px] shadow-sm text-ink text-[15px] leading-relaxed">
                I'll ask you before publishing or contacting anyone externally. Is there a specific channel you want to prioritize first?
              </div>
            </div>
          </div>

          {/* System Note */}
          <div className="flex justify-center mt-2 mb-4">
            <div className="flex items-center gap-2 bg-paper border border-border/50 px-3 py-1.5 rounded-full text-[12px] font-medium text-ink-muted shadow-sm">
              <Sparkle size={14} weight="fill" className="text-accent-gold" />
              Astra linked <span className="text-ink font-bold hover:underline cursor-pointer">Q3 Launch Budget Draft</span>
            </div>
          </div>

            {/* User Message */}
            <div className="flex justify-end pr-[58px]">
              <div className="bg-ink text-paper px-5 py-3.5 rounded-[20px] rounded-tr-[4px] max-w-[700px] shadow-sm">
                <p className="text-[15px] leading-relaxed">Can we also get someone to research screen recording apps?</p>
              </div>
            </div>

          {/* Astra Response: Single Task Created */}
          <div className="flex gap-4 pr-[58px]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#FFF4D4] flex items-center justify-center shrink-0 relative overflow-hidden shadow-sm mt-1 border border-border/20">
              <Image src="/avatars/astra.png" alt="Astra" fill className="object-cover" />
            </div>
            
            <div className="flex-1 space-y-3 max-w-[700px]">
              <div className="flex items-baseline gap-2">
                <p className="text-[15px] font-bold text-ink tracking-tight">Astra</p>
                <span className="text-[12px] text-ink-muted font-medium">10:45 AM</span>
              </div>
              
              {/* Tool Usage Indicator */}
              <div className="flex items-center gap-1.5 text-[12px] font-medium text-ink-muted hover:text-ink cursor-pointer transition-colors w-fit">
                <CaretRight size={12} weight="bold" />
                <Wrench size={12} weight="fill" className="text-ink-muted/70" />
                <span>Used tyctl task create</span>
                <span className="text-ink-faint">(1)</span>
              </div>
              
              <div className="text-ink text-[15px] leading-relaxed pl-1">
                Riley's on it — researching screen recording apps now.
              </div>
              
              {/* Task Creation Block - Updated to match screenshot UI */}
              <div className="bg-paper border border-border rounded-[20px] p-1.5 flex flex-col shadow-sm max-w-[400px]">
                <div className="flex items-center gap-3 px-1.5 pt-1.5 pb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Kanban size={18} weight="fill" className="text-purple-600" />
                  </div>
                  <p className="text-[15px] font-bold text-ink tracking-tight">Task Created</p>
                </div>
                
                <div className="bg-[#F8F9FA] rounded-[14px] p-3 flex flex-col gap-3 mx-1.5 mb-1.5 border border-border/40 hover:border-border hover:shadow-sm transition-all group cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative border border-border/50 shrink-0 shadow-sm">
                      <Image src="/avatars/riley.png" alt="Riley" fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-1.5 pt-0.5">
                      <p className="text-[14px] font-semibold text-ink leading-snug group-hover:text-blue-600 transition-colors">Research screen recording apps</p>
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider bg-border/50 px-1.5 py-0.5 rounded">DWA-3</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_4px_rgba(59,130,246,0.4)]" />
                          <span className="text-[11px] font-semibold text-ink-muted">To Do</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-border" />
                        <span className="text-[11px] font-medium text-ink-muted flex items-center gap-1"><Clock size={12} /> Today</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2.5 border-t border-border/40 flex justify-between items-center">
                    <span className="text-[12px] font-medium text-ink-muted group-hover:text-ink transition-colors">Click to open details</span>
                    <ArrowUpRight size={14} className="text-ink-muted group-hover:text-blue-600 transition-colors" weight="bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Composer Area */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center pb-6 pt-20 px-6">
          <div className="w-full max-w-[1000px] flex relative pointer-events-auto z-20">
            <div className="w-[58px] shrink-0" /> {/* Spacer for avatar alignment */}
            
            <div className="flex-1 bg-paper/95 backdrop-blur-xl border border-border/80 shadow-[0_0_30px_rgba(52,211,153,0.1)] rounded-[20px] flex flex-col p-2 focus-within:border-ink/40 focus-within:bg-paper transition-all duration-300">
              <textarea 
                placeholder="Reply to Astra..."
                className="flex-1 bg-transparent border-none outline-none text-[14px] placeholder:text-ink-muted px-3 py-2 resize-none min-h-[44px]"
              />
              <div className="flex items-center justify-between px-1">
                 <div className="flex items-center gap-0.5">
                   <button className="p-1.5 text-ink-muted hover:bg-[#F8F9FA] hover:text-ink rounded-full transition-colors">
                     <Plus size={18} />
                   </button>
                   <button className="p-1.5 text-ink-muted hover:bg-[#F8F9FA] hover:text-ink rounded-full transition-colors">
                     <At size={18} />
                   </button>
                   <button className="p-1.5 text-ink-muted hover:bg-[#F8F9FA] hover:text-ink rounded-full transition-colors">
                     <MicrophoneStage size={18} />
                   </button>
                   <button className="p-1.5 text-ink-muted hover:bg-[#F8F9FA] hover:text-ink rounded-full transition-colors">
                     <div className="border border-current rounded-[6px] w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold">/</div>
                   </button>
                 </div>
                 <button className="bg-ink text-paper rounded-full hover:opacity-90 transition-opacity flex items-center justify-center w-8 h-8 shadow-sm mr-1">
                   <ArrowUp size={14} weight="bold" />
                 </button>
              </div>
            </div>
            
            <div className="w-[58px] shrink-0" /> {/* Spacer for right alignment */}
          </div>
        </div>
      </div>

      {/* Document Editor Panel (Right) */}
      {isRightPanelOpen && (
        <div 
          className="flex-shrink-0 bg-paper border-l border-border flex flex-col h-full z-20 shadow-2xl relative"
          style={{ width: `${rightPanelWidth}px`, transition: isResizingRight.current ? 'none' : 'width 300ms ease-in-out' }}
        >
          {/* Drag Handle */}
          <div 
            className="absolute top-0 left-0 w-1.5 h-full cursor-col-resize hover:bg-border/50 transition-colors z-30"
            onMouseDown={(e) => {
              isResizingRight.current = true;
              document.body.style.cursor = 'col-resize';
              e.preventDefault();
            }}
          />
          
          {/* Top Tabs Bar */}
          <div className="h-[52px] flex items-end pl-3 pr-1 bg-paper border-b border-border shrink-0">
             <div className="flex items-center gap-2 bg-[#F8F9FA] h-[38px] pl-3 pr-2 rounded-t-[10px] border border-border/50 border-b-[#F8F9FA] text-[13px] text-ink font-medium translate-y-[1px] min-w-[180px]">
               <FileText size={16} className="text-blue-500 shrink-0" weight="fill" />
               <span className="truncate flex-1">wilow_planning_r...</span>
               <button className="shrink-0 p-1 text-ink-muted hover:text-ink hover:bg-black/5 rounded-[4px] transition-colors"><X size={12} weight="bold" /></button>
             </div>
             <button className="p-1.5 text-ink-muted hover:text-ink hover:bg-paper-elevated rounded-md mb-1.5 ml-1 transition-colors"><Plus size={16} /></button>
             
             <div className="flex-1 flex justify-end items-center gap-1 text-ink-muted pb-2 pr-2">
               <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><CaretDown size={16} /></button>
               <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><CornersOut size={16} /></button>
               <button 
                 onClick={() => setIsRightPanelOpen(false)}
                 className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"
               >
                 <SidebarSimple size={18} className="-scale-x-100" />
               </button>
             </div>
          </div>
          
          {/* Toolbar */}
          <div className="h-[48px] flex items-center justify-between px-4 shrink-0 border-b border-border bg-[#F8F9FA]">
            <div className="flex items-center gap-3">
              <span className="text-[14px] font-medium text-ink tracking-wide">wilow_planning_report</span>
              <span className="text-[10px] font-bold text-ink-muted bg-paper-elevated border border-border/50 px-1.5 py-0.5 rounded tracking-wider">DOC</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-[12px] font-medium text-ink-muted hover:text-ink flex items-center gap-1 transition-colors mr-2">
                110% <CaretDown size={10} weight="bold" />
              </button>
              <div className="flex items-center gap-1.5">
                <button className="flex items-center justify-center w-[32px] h-[32px] bg-paper hover:bg-paper-elevated border border-border/80 rounded-[8px] text-ink-muted hover:text-ink transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <PushPin size={16} weight="bold" />
                </button>
                <button className="flex items-center justify-center w-[32px] h-[32px] bg-paper hover:bg-paper-elevated border border-border/80 rounded-[8px] text-ink-muted hover:text-ink transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <ClockCounterClockwise size={16} weight="bold" />
                </button>
                <button className="flex items-center gap-1.5 h-[32px] px-3 bg-paper hover:bg-paper-elevated border border-border/80 rounded-[8px] text-[13px] font-medium text-ink transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <ShareNetwork size={16} weight="bold" />
                  Share
                </button>
                <button className="flex items-center justify-center w-[32px] h-[32px] bg-paper hover:bg-paper-elevated border border-border/80 rounded-[8px] text-ink-muted hover:text-ink transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <Trash size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          {/* Formatting Toolbar */}
          <div className="h-[44px] flex items-center justify-between px-4 shrink-0 border-b border-border bg-paper overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 text-ink-muted shrink-0">
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextT size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextAUnderline size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><Highlighter size={18} /></button>
              
              <div className="w-px h-4 bg-border mx-1" />
              
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextB size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextItalic size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextUnderline size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextStrikethrough size={18} /></button>
              
              <div className="w-px h-4 bg-border mx-1" />
              
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextHOne size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextHTwo size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><TextHThree size={18} /></button>
              
              <div className="w-px h-4 bg-border mx-1" />
              
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><ListBullets size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><ListNumbers size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><ListChecks size={18} /></button>
              <button className="p-1.5 bg-ink text-paper rounded-[8px] transition-colors mx-0.5"><Quotes size={18} weight="fill" /></button>
              
              <div className="w-px h-4 bg-border mx-1" />
              
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><LinkIcon size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><PhosphorImage size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><Globe size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><Table size={18} /></button>
              
              <div className="w-px h-4 bg-border mx-1" />
              
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><ArrowUUpLeft size={18} /></button>
              <button className="p-1.5 hover:text-ink hover:bg-paper-elevated rounded-md transition-colors"><ArrowUUpRight size={18} /></button>
            </div>

            <div className="flex items-center gap-1.5 text-[13px] font-medium text-ink-muted pl-4 shrink-0">
              <Check size={16} className="text-emerald-500" weight="bold" />
              Saved
            </div>
          </div>

          {/* Document Content Area */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#F8F9FA] flex justify-center scrollbar-hide">
            <div className="w-full max-w-[850px] min-h-[800px] bg-white rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] ring-1 ring-black/5 flex flex-col">
              <textarea 
                className="flex-1 w-full h-full p-10 md:p-16 resize-none outline-none text-ink text-[15px] leading-relaxed bg-transparent font-sans"
                placeholder="Start typing..."
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
