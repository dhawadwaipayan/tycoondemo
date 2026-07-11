"use client";

import { Sparkle, ArrowRight, CheckCircle, ClockCounterClockwise, StopCircle, MagnifyingGlass, Plus, At, MicrophoneStage, CaretDown, MagicWand, ArrowUp, Table, FileText, PresentationChart, Kanban, Calendar, ListDashes, CheckSquare, Star, Robot, RocketLaunch, Crown, Palette, BookOpen, Terminal } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { clsx } from "clsx";

export default function HomePage() {
  return (
    <div className="flex-1 relative bg-paper overflow-hidden flex flex-col h-full w-full">
      {/* Stylized lined mint green gradient background */}
      <div 
        className="absolute inset-x-0 top-0 h-[800px] pointer-events-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, transparent, transparent 31px, rgba(14, 116, 75, 0.06) 31px, rgba(14, 116, 75, 0.06) 32px),
            linear-gradient(to top, transparent 0%, rgba(157, 224, 185, 0.3) 100%)
          `,
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
        }}
      />
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto relative z-10 w-full">
        <div className="max-w-[1000px] mx-auto px-10 pt-12 pb-24 space-y-16">
        
          {/* Command Input Area */}
          <section className="w-full flex flex-col items-center relative z-20">
          <h1 className="font-display font-bold text-[40px] text-ink text-center tracking-tight mb-12">What can I do for you?</h1>
          
          <div className="bg-paper rounded-[24px] p-4 flex flex-col border border-border shadow-sm focus-within:border-ink transition-colors w-full">
            <textarea 
              placeholder="Assign a task or type / for more"
              className="bg-transparent text-ink placeholder:text-ink-muted text-[16px] font-medium resize-none outline-none w-full min-h-[60px] p-2"
            />
            
            <div className="flex justify-between items-center mt-2 px-2">
              <div className="flex items-center gap-4 text-ink-muted">
                <button className="hover:text-ink transition-colors"><Plus size={20} /></button>
                <button className="hover:text-ink transition-colors"><At size={20} /></button>
                <button className="hover:text-ink transition-colors"><MicrophoneStage size={20} /></button>
                <button className="hover:text-ink transition-colors">
                  <div className="border border-current rounded-[6px] w-[20px] h-[20px] flex items-center justify-center text-[11px] font-bold">/</div>
                </button>
              </div>
              <div className="flex items-center gap-4 text-ink-muted">
                <button className="flex items-center gap-1.5 text-[14px] font-medium hover:text-ink transition-colors">
                  Auto <CaretDown size={14} weight="bold" />
                </button>
                <button className="hover:text-ink transition-colors"><MagicWand size={20} /></button>
                <button className="bg-ink hover:opacity-90 text-paper p-2 rounded-full transition-opacity flex items-center justify-center w-9 h-9 shadow-sm">
                  <ArrowUp size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Action Chips */}
          <div className="flex justify-center gap-2.5 overflow-x-auto pt-6 pb-2 scrollbar-hide hide-scroll-bar w-full">
            <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-paper border border-border hover:bg-paper-elevated transition-colors shrink-0 shadow-sm">
              <Table weight="fill" className="text-emerald-500" size={18} />
              <span className="text-ink text-[14px] font-medium">Table</span>
            </button>
            <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-paper border border-border hover:bg-paper-elevated transition-colors shrink-0 shadow-sm">
              <FileText weight="fill" className="text-blue-500" size={18} />
              <span className="text-ink text-[14px] font-medium">Doc</span>
            </button>
            <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-paper border border-border hover:bg-paper-elevated transition-colors shrink-0 shadow-sm">
              <PresentationChart weight="fill" className="text-red-500" size={18} />
              <span className="text-ink text-[14px] font-medium">Slides</span>
            </button>
            <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-paper border border-border hover:bg-paper-elevated transition-colors shrink-0 shadow-sm">
              <Kanban weight="fill" className="text-purple-500" size={18} />
              <span className="text-ink text-[14px] font-medium">Board</span>
            </button>
            <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-paper border border-border hover:bg-paper-elevated transition-colors shrink-0 shadow-sm">
              <Calendar weight="fill" className="text-red-400" size={18} />
              <span className="text-ink text-[14px] font-medium">Calendar</span>
            </button>
            <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-paper border border-border hover:bg-paper-elevated transition-colors shrink-0 shadow-sm">
              <ListDashes weight="bold" className="text-gray-400" size={18} />
              <span className="text-ink text-[14px] font-medium">Timeline</span>
            </button>
            <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-paper border border-border hover:bg-paper-elevated transition-colors shrink-0 shadow-sm">
              <CheckSquare weight="fill" className="text-emerald-600" size={18} />
              <span className="text-ink text-[14px] font-medium">Checklist</span>
            </button>
          </div>
        </section>

        {/* Agent Updates */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-ink">What's happening now</h2>
          <button className="text-[14px] font-semibold flex items-center gap-1.5 text-ink-muted hover:text-ink hover:underline transition-colors">
            View all <ArrowRight size={14} weight="bold" />
          </button>
        </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide">
            {/* Astra Card */}
            <div className="snap-start shrink-0 w-[280px] bg-paper border border-border rounded-[24px] p-2 flex flex-col gap-3 shadow-sm transition-shadow hover:shadow-md cursor-pointer">
              {/* Header */}
              <div className="flex items-center gap-3 px-1 pt-1.5">
                <div className="w-[52px] h-[52px] rounded-full bg-[#FFF4D4] flex items-center justify-center shrink-0 relative overflow-hidden">
                  <Image src="/avatars/astra.png" alt="Astra" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[17px] font-bold text-ink tracking-tight">Astra</span>
                    <span className="text-[14px] text-ink-muted">AI CEO</span>
                  </div>
                  <span className="text-[14px] text-ink-muted mt-0.5">12 Tasks ongoing</span>
                </div>
              </div>
              
              {/* Body (Grey Area) */}
              <div className="bg-[#F8F9FA] rounded-[16px] p-4 flex flex-col flex-1 border border-border/40 mx-1 mb-1">
                <p className="font-bold text-[15px] text-ink mb-1">3 decisions need review</p>
                <p className="text-[14px] text-ink-muted leading-relaxed line-clamp-2">Astra is waiting for your input on Q3 planning and budget.</p>

                <div className="mt-auto pt-4">
                  <button className="text-[14px] font-bold text-ink flex items-center gap-1.5 hover:underline">
                    Review now <ArrowRight size={14} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Indie Card */}
            <div className="snap-start shrink-0 w-[280px] bg-paper border border-border rounded-[24px] p-2 flex flex-col gap-3 shadow-sm transition-shadow hover:shadow-md cursor-pointer">
              {/* Header */}
              <div className="flex items-center gap-3 px-1 pt-1.5">
                <div className="w-[52px] h-[52px] rounded-full bg-purple-100 flex items-center justify-center shrink-0 relative overflow-hidden">
                  <Image src="/avatars/indie.png" alt="Indie" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[17px] font-bold text-ink tracking-tight">Indie</span>
                    <span className="text-[14px] text-ink-muted">Design Lead</span>
                  </div>
                  <span className="text-[14px] text-ink-muted mt-0.5">4 Tasks ongoing</span>
                </div>
              </div>
              
              {/* Body (Grey Area) */}
              <div className="bg-[#F8F9FA] rounded-[16px] p-4 flex flex-col flex-1 border border-border/40 mx-1 mb-1">
                <p className="font-bold text-[15px] text-ink mb-1">Logo concepts ready</p>
                <p className="text-[14px] text-ink-muted leading-relaxed line-clamp-2">Generated 3 visual directions for the WilowAI brand launch.</p>

                <div className="mt-auto pt-4">
                  <button className="text-[14px] font-bold text-ink flex items-center gap-1.5 hover:underline">
                    View <ArrowRight size={14} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Riley Card */}
            <div className="snap-start shrink-0 w-[280px] bg-paper border border-border rounded-[24px] p-2 flex flex-col gap-3 shadow-sm transition-shadow hover:shadow-md cursor-pointer opacity-90">
              {/* Header */}
              <div className="flex items-center gap-3 px-1 pt-1.5">
                <div className="w-[52px] h-[52px] rounded-full bg-blue-100 flex items-center justify-center shrink-0 relative overflow-hidden">
                  <Image src="/avatars/riley.png" alt="Riley" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[17px] font-bold text-ink tracking-tight">Riley</span>
                    <span className="text-[14px] text-ink-muted">Head of Research</span>
                  </div>
                  <span className="text-[14px] text-ink-muted mt-0.5">1 Task ongoing</span>
                </div>
              </div>
              
              {/* Body (Grey Area) */}
              <div className="bg-[#F8F9FA] rounded-[16px] p-4 flex flex-col flex-1 border border-border/40 mx-1 mb-1">
                <p className="font-bold text-[15px] text-ink-muted mb-1">Research completed</p>
                <p className="text-[14px] text-ink-muted/70 leading-relaxed line-clamp-2">Competitor scan and market positioning memo is now available.</p>

                <div className="mt-auto pt-4">
                  <button className="text-[14px] font-bold text-ink flex items-center gap-1.5 hover:underline">
                    Read <ArrowRight size={14} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Darren Card */}
            <div className="snap-start shrink-0 w-[280px] bg-paper border border-border rounded-[24px] p-2 flex flex-col gap-3 shadow-sm transition-shadow hover:shadow-md cursor-pointer">
              {/* Header */}
              <div className="flex items-center gap-3 px-1 pt-1.5">
                <div className="w-[52px] h-[52px] rounded-full bg-slate-100 flex items-center justify-center shrink-0 relative overflow-hidden">
                  <Image src="/avatars/darren.png" alt="Darren" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[17px] font-bold text-ink tracking-tight">Darren</span>
                    <span className="text-[14px] text-ink-muted">AI CTO</span>
                  </div>
                  <span className="text-[14px] text-ink-muted mt-0.5">7 Tasks ongoing</span>
                </div>
              </div>
              
              {/* Body (Grey Area) */}
              <div className="bg-[#F8F9FA] rounded-[16px] p-4 flex flex-col flex-1 border border-border/40 mx-1 mb-1">
                <p className="font-bold text-[15px] text-ink mb-1">Build blocked</p>
                <p className="text-[14px] text-ink-muted leading-relaxed line-clamp-2">Missing API credentials required to deploy the landing page.</p>

                <div className="mt-auto pt-4">
                  <button className="text-[14px] font-bold text-ink flex items-center gap-1.5 hover:underline">
                    Resolve <ArrowRight size={14} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Additional empty states for scroll feeling */}
            <div className="snap-start shrink-0 w-[40px]" />
          </div>
        </section>

        {/* Task Board */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-ink">Task board</h2>
            <button className="text-[14px] font-semibold flex items-center gap-1.5 text-ink-muted hover:text-ink hover:underline transition-colors">
              View board <ArrowRight size={14} weight="bold" />
            </button>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Backlog */}
            <div className="space-y-3 bg-paper border border-border/50 p-4 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <p className="text-[13px] font-semibold text-ink">Backlog</p>
                </div>
                <span className="text-[12px] font-bold text-ink-muted bg-[#F8F9FA] px-1.5 py-0.5 rounded-md">2</span>
              </div>
              <div className="bg-[#F8F9FA] border border-border/40 p-3 rounded-xl hover:border-border transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <p className="text-[13px] font-semibold leading-tight text-ink mb-2">Brand ads copy refresh</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[18px] h-[18px] rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/casey.png" alt="Casey" fill className="object-cover" />
                    </div>
                    <span className="text-[11px] font-medium text-ink-muted">Amelia Grant</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F9FA] border border-border/40 p-3 rounded-xl hover:border-border transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <p className="text-[13px] font-semibold leading-tight text-ink mb-2">"Leave work at work" billboards</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[18px] h-[18px] rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/darren.png" alt="Darren" fill className="object-cover" />
                    </div>
                    <span className="text-[11px] font-medium text-ink-muted">Daniel Foster</span>
                  </div>
                </div>
              </div>
            </div>

            {/* In Progress */}
            <div className="space-y-3 bg-paper border border-border/50 p-4 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  <p className="text-[13px] font-semibold text-ink">In Progress</p>
                </div>
                <span className="text-[12px] font-bold text-ink-muted bg-[#F8F9FA] px-1.5 py-0.5 rounded-md">3</span>
              </div>
              <div className="bg-[#F8F9FA] border border-border/40 p-3 rounded-xl hover:border-border transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <p className="text-[13px] font-semibold leading-tight text-ink mb-2">BFCM campaign</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[18px] h-[18px] rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/jordan.png" alt="Jordan" fill className="object-cover" />
                    </div>
                    <span className="text-[11px] font-medium text-ink-muted">Benjamin Ortiz</span>
                  </div>
                  <span className="text-[10px] font-semibold text-orange-600 bg-orange-100 border border-orange-200 px-1.5 py-0.5 rounded-md">High</span>
                </div>
              </div>
              <div className="bg-[#F8F9FA] border border-border/40 p-3 rounded-xl hover:border-border transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <p className="text-[13px] font-semibold leading-tight text-ink mb-2">Influencer promotions</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[18px] h-[18px] rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/indie.png" alt="Indie" fill className="object-cover" />
                    </div>
                    <span className="text-[11px] font-medium text-ink-muted">Ruby Gallagher</span>
                  </div>
                  <span className="text-[10px] font-semibold text-orange-600 bg-orange-100 border border-orange-200 px-1.5 py-0.5 rounded-md">High</span>
                </div>
              </div>
            </div>

            {/* Done */}
            <div className="space-y-3 bg-paper border border-border/50 p-4 rounded-2xl shadow-sm opacity-60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <p className="text-[13px] font-semibold text-ink">Done</p>
                </div>
                <span className="text-[12px] font-bold text-ink-muted bg-[#F8F9FA] px-1.5 py-0.5 rounded-md">2</span>
              </div>
              <div className="bg-[#F8F9FA] border border-border/40 p-3 rounded-xl hover:border-border transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <p className="text-[13px] font-semibold leading-tight text-ink-muted line-through mb-2">Grand central poster</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[18px] h-[18px] rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/darren.png" alt="Darren" fill className="object-cover" />
                    </div>
                    <span className="text-[11px] font-medium text-ink-muted">Caleb Smith</span>
                  </div>
                  <CheckCircle size={14} className="text-emerald-500" weight="fill" />
                </div>
              </div>
              <div className="bg-[#F8F9FA] border border-border/40 p-3 rounded-xl hover:border-border transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <p className="text-[13px] font-semibold leading-tight text-ink-muted line-through mb-2">Social Easter eggs</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[18px] h-[18px] rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/riley.png" alt="Riley" fill className="object-cover" />
                    </div>
                    <span className="text-[11px] font-medium text-ink-muted">Caleb Smith</span>
                  </div>
                  <CheckCircle size={14} className="text-emerald-500" weight="fill" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggestion Templates */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-ink">Suggestion templates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Template 1 */}
            <div className="p-4 rounded-2xl border border-border bg-paper hover:border-ink/20 transition-colors cursor-pointer flex flex-col gap-3 group shadow-sm">
              <div className="w-8 h-8 rounded-[10px] bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <RocketLaunch size={16} weight="fill" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-ink mb-1">Product Launch</p>
                <p className="text-[12px] text-ink-muted leading-relaxed">End-to-end launch plan with marketing assets and timelines.</p>
              </div>
            </div>
            {/* Template 2 */}
            <div className="p-4 rounded-2xl border border-border bg-paper hover:border-ink/20 transition-colors cursor-pointer flex flex-col gap-3 group shadow-sm">
              <div className="w-8 h-8 rounded-[10px] bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Palette size={16} weight="fill" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-ink mb-1">Brand Identity</p>
                <p className="text-[12px] text-ink-muted leading-relaxed">Generate logos, color palettes, and typography guidelines.</p>
              </div>
            </div>
            {/* Template 3 */}
            <div className="p-4 rounded-2xl border border-border bg-paper hover:border-ink/20 transition-colors cursor-pointer flex flex-col gap-3 group shadow-sm">
              <div className="w-8 h-8 rounded-[10px] bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PresentationChart size={16} weight="fill" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-ink mb-1">Competitor Analysis</p>
                <p className="text-[12px] text-ink-muted leading-relaxed">Deep dive into market positioning and feature comparisons.</p>
              </div>
            </div>
            {/* Template 4 */}
            <div className="p-4 rounded-2xl border border-border bg-paper hover:border-ink/20 transition-colors cursor-pointer flex flex-col gap-3 group shadow-sm">
              <div className="w-8 h-8 rounded-[10px] bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen size={16} weight="fill" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-ink mb-1">Content Strategy</p>
                <p className="text-[12px] text-ink-muted leading-relaxed">Blog topics, social media calendar, and SEO keywords.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
