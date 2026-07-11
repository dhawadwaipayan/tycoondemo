"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Plus, At, MicrophoneStage, CaretDown, MagicWand, ArrowUp, Table, FileText, PresentationChart, Kanban, Calendar, ListDashes, CheckSquare, Clock, DotsThree } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Typewriter, useTypewriterPlaceholder } from "@/components/motion/Typewriter";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/PageMotion";

const COMPOSER_PHRASES = [
  "Assign a task or type / for more",
  "Ask Astra to plan the next launch…",
  "Draft a brief for Indie…",
  "Summarize what's waiting on you…",
];

const templates = [
  {
    title: "Product Launch",
    description: "End-to-end launch plan with marketing assets and timelines.",
    image: "/templates/product-launch.jpg",
  },
  {
    title: "Brand Identity",
    description: "Generate logos, color palettes, and typography guidelines.",
    image: "/templates/brand-identity.jpg",
  },
  {
    title: "Competitor Analysis",
    description: "Deep dive into market positioning and feature comparisons.",
    image: "/templates/competitor.jpg",
  },
  {
    title: "Content Strategy",
    description: "Blog topics, social media calendar, and SEO keywords.",
    image: "/templates/content.jpg",
  },
];

const quickActions = [
  { label: "Table", icon: Table, color: "text-emerald-500", weight: "fill" as const },
  { label: "Doc", icon: FileText, color: "text-blue-500", weight: "fill" as const },
  { label: "Slides", icon: PresentationChart, color: "text-red-500", weight: "fill" as const },
  { label: "Board", icon: Kanban, color: "text-purple-500", weight: "fill" as const },
  { label: "Calendar", icon: Calendar, color: "text-red-400", weight: "fill" as const },
  { label: "Timeline", icon: ListDashes, color: "text-gray-400", weight: "bold" as const },
  { label: "Checklist", icon: CheckSquare, color: "text-emerald-600", weight: "fill" as const },
];

/** Pastel outer + white nested card — reference styling for "What's happening" */
const happeningCards = [
  {
    name: "Astra",
    role: "AI CEO",
    avatar: "/avatars/astra.png",
    tasksOngoing: 12,
    shell: "bg-[#EEF5F0] border-[#D0E3D6]",
    label: "text-[#3D6B52]",
    iconBtn: "text-[#3D6B52]/70 hover:text-[#3D6B52] hover:bg-[#3D6B52]/8",
    taskBadge: "bg-white/80 text-[#3D6B52] border-[#D0E3D6]",
    tags: [
      { label: "Needs you", className: "bg-[#D8EBE0] text-[#3D6B52]" },
      { label: "Decisions", className: "bg-[#D8EBE0]/70 text-[#3D6B52]" },
    ],
    title: "3 decisions need review",
    body: (
      <>
        Waiting on your input for{" "}
        <span className="bg-[#D8EBE0] px-1 rounded-[3px]">Q3 planning</span>
        {" "}and budget before the team can move.
      </>
    ),
    cta: "Review now",
  },
  {
    name: "Indie",
    role: "Design Lead",
    avatar: "/avatars/indie.png",
    tasksOngoing: 4,
    shell: "bg-[#F6EEF4] border-[#E5D0DE]",
    label: "text-[#7A4568]",
    iconBtn: "text-[#7A4568]/70 hover:text-[#7A4568] hover:bg-[#7A4568]/8",
    taskBadge: "bg-white/80 text-[#7A4568] border-[#E5D0DE]",
    tags: [
      { label: "Design", className: "bg-[#EDE0E9] text-[#7A4568]" },
      { label: "Ready", className: "bg-[#EDE0E9]/70 text-[#7A4568]" },
    ],
    title: "Logo concepts ready",
    body: (
      <>
        Generated 3 visual directions for the{" "}
        <span className="bg-[#EDE0E9] px-1 rounded-[3px]">AcmeAI</span>
        {" "}brand launch.
      </>
    ),
    cta: "View",
  },
  {
    name: "Riley",
    role: "Head of Research",
    avatar: "/avatars/riley.png",
    tasksOngoing: 1,
    shell: "bg-[#EEF3F8] border-[#D2DEEA]",
    label: "text-[#3D5F7A]",
    iconBtn: "text-[#3D5F7A]/70 hover:text-[#3D5F7A] hover:bg-[#3D5F7A]/8",
    taskBadge: "bg-white/80 text-[#3D5F7A] border-[#D2DEEA]",
    tags: [
      { label: "Research", className: "bg-[#DCE7F0] text-[#3D5F7A]" },
      { label: "Completed", className: "bg-[#DCE7F0]/70 text-[#3D5F7A]" },
    ],
    title: "Research completed",
    body: (
      <>
        Competitor scan and{" "}
        <span className="bg-[#DCE7F0] px-1 rounded-[3px]">market positioning</span>
        {" "}memo is now available.
      </>
    ),
    cta: "Read",
  },
  {
    name: "Darren",
    role: "AI CTO",
    avatar: "/avatars/darren.png",
    tasksOngoing: 7,
    shell: "bg-[#FDF0EB] border-[#F0D5C8]",
    label: "text-[#9A4F3A]",
    iconBtn: "text-[#9A4F3A]/70 hover:text-[#9A4F3A] hover:bg-[#9A4F3A]/8",
    taskBadge: "bg-white/80 text-[#9A4F3A] border-[#F0D5C8]",
    tags: [
      { label: "Build", className: "bg-[#F8E0D6] text-[#9A4F3A]" },
      { label: "Blocked", className: "bg-[#F8E0D6]/70 text-[#9A4F3A]" },
    ],
    title: "Build blocked",
    body: (
      <>
        Missing{" "}
        <span className="bg-[#F8E0D6] px-1 rounded-[3px]">API credentials</span>
        {" "}required to deploy the landing page.
      </>
    ),
    cta: "Resolve",
  },
];

export default function HomePage() {
  const [composerValue, setComposerValue] = useState("");
  const [headingDone, setHeadingDone] = useState(false);
  const placeholder = useTypewriterPlaceholder(COMPOSER_PHRASES, {
    enabled: headingDone,
    startDelay: 280,
    speed: 36,
    pause: 2200,
  });

  return (
    <div className="flex-1 relative bg-paper overflow-hidden flex flex-col h-full w-full">
      {/* Layer 1: mint grid gradient (bottom) */}
      <div 
        className="absolute inset-x-0 top-0 h-[800px] pointer-events-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, transparent, transparent 31px, rgba(14, 116, 75, 0.045) 31px, rgba(14, 116, 75, 0.045) 32px),
            linear-gradient(to top, transparent 0%, rgba(157, 224, 185, 0.22) 100%)
          `,
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
        }}
      />
      
      {/* Scrollable content — hands scroll with UI */}
      <div className="flex-1 overflow-y-auto relative z-10 w-full">
        {/* Hands — above gradient, below UI, scrolls with page */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] w-full aspect-[4096/1599] select-none"
        >
          <Image
            src="/hands3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-top opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-10 pt-20 pb-24 space-y-16">
        
          {/* Hero */}
          <section className="relative w-full flex flex-col items-center pt-6 pb-4">
            <Typewriter
              as="h1"
              text="What can I do for you?"
              speed={42}
              delay={180}
              className="font-display font-bold text-[40px] text-ink text-center tracking-tight mb-24 min-h-[48px] [text-shadow:0_2px_20px_rgba(255,255,255,0.95),0_0_40px_rgba(255,255,255,0.8)]"
              onComplete={() => setHeadingDone(true)}
            />

            <FadeIn delay={0.35} className="w-full">
              <motion.div
                className="bg-paper rounded-[24px] p-4 flex flex-col border border-border shadow-sm focus-within:border-ink transition-colors w-full"
                whileHover={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <textarea
                  value={composerValue}
                  onChange={(e) => setComposerValue(e.target.value)}
                  placeholder={composerValue ? "" : placeholder || " "}
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
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      className="bg-ink hover:opacity-90 text-paper p-2 rounded-full transition-opacity flex items-center justify-center w-9 h-9 shadow-sm"
                    >
                      <ArrowUp size={16} weight="bold" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <div className="relative z-10 -mx-3 mt-6 w-full overflow-x-auto scrollbar-hide">
              <Stagger className="flex justify-center gap-2.5 px-3 pb-2 scrollbar-hide hide-scroll-bar w-max min-w-full mx-auto" delay={0.55} stagger={0.05}>
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <StaggerItem key={action.label}>
                      <motion.button
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-paper border border-border hover:bg-paper-elevated transition-colors shrink-0 shadow-sm"
                      >
                        <Icon weight={action.weight} className={action.color} size={18} />
                        <span className="text-ink text-[14px] font-medium">{action.label}</span>
                      </motion.button>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </section>

        {/* Agent Updates */}
      <FadeIn delay={0.2} className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-ink">What's happening now</h2>
          <button className="text-[14px] font-semibold flex items-center gap-1.5 text-ink-muted hover:text-ink hover:underline transition-colors">
            View all <ArrowRight size={14} weight="bold" />
          </button>
        </div>
          
          <div className="-mx-5 overflow-x-auto scrollbar-hide">
            <Stagger className="flex gap-4 px-5 pt-3 pb-7 snap-x items-stretch" delay={0.1} stagger={0.1}>
            {happeningCards.map((card) => (
              <StaggerItem key={card.name} className="snap-start shrink-0 flex">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`w-[300px] h-[280px] rounded-[22px] border p-2.5 flex flex-col gap-2 cursor-pointer font-sans ${card.shell}`}
                >
                  {/* Header: category + actions */}
                  <div className="flex items-start justify-between shrink-0 gap-1.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-11 h-11 rounded-full overflow-hidden relative shrink-0 border border-black/5">
                        <Image src={card.avatar} alt={card.name} fill className="object-cover" />
                      </div>
                      <div className="min-w-0 flex flex-col gap-1">
                        <div className="flex items-baseline gap-1.5 min-w-0">
                          <p className={`text-[14px] font-semibold font-sans tracking-tight truncate ${card.label}`}>
                            {card.name}
                          </p>
                          <p className={`text-[11px] font-medium font-sans truncate opacity-70 ${card.label}`}>
                            {card.role}
                          </p>
                        </div>
                        <div
                          className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full border font-sans text-[11px] w-fit ${card.taskBadge}`}
                          title={`${card.tasksOngoing} tasks ongoing`}
                        >
                          <span className="font-bold tabular-nums leading-none">
                            {card.tasksOngoing}
                          </span>
                          <span className="font-medium leading-none">
                            ongoing
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`p-1 rounded-lg transition-colors shrink-0 ${card.iconBtn}`}
                      aria-label={`More for ${card.name}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DotsThree size={18} weight="bold" />
                    </button>
                  </div>

                  {/* Nested white content card */}
                  <div className="bg-white rounded-[14px] border border-black/[0.04] p-3 flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex-1 min-h-0 font-sans">
                    <div className="flex flex-wrap gap-1.5 shrink-0">
                      {card.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={`inline-flex items-center px-1.5 py-0.5 rounded-md text-[11px] font-semibold font-sans ${tag.className}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <p className="text-[16px] font-bold font-sans text-ink tracking-tight leading-snug shrink-0">
                      {card.title}
                    </p>
                    <p className="text-[13px] font-sans text-ink/80 leading-relaxed line-clamp-3">
                      {card.body}
                    </p>
                    <div className="mt-auto pt-1 shrink-0">
                      <button
                        type="button"
                        className="text-[13px] font-bold font-sans text-ink flex items-center gap-1.5 hover:underline"
                      >
                        {card.cta} <ArrowRight size={13} weight="bold" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
            
            <div className="snap-start shrink-0 w-[20px]" />
          </Stagger>
          </div>
      </FadeIn>

        {/* Task Board */}
        <FadeIn delay={0.25} className="space-y-6 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-ink">Task board</h2>
            <button className="text-[14px] font-medium flex items-center gap-1.5 text-ink-muted hover:text-ink hover:underline transition-colors">
              View board <ArrowRight size={14} weight="bold" />
            </button>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {/* Backlog */}
            <div className="flex flex-col gap-4 min-w-0">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md text-[13px] font-medium bg-purple-100 text-purple-700">Backlog</span>
                <span className="text-[14px] font-medium text-ink-muted">2</span>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                {/* Card 1 */}
                <div className="bg-white border border-purple-200 rounded-[12px] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-3 w-full">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-[14px] font-semibold text-ink leading-snug">Brand ads copy refresh</p>
                    <div className="flex items-center gap-1 text-ink-muted text-[12px] shrink-0 mt-0.5">
                      <Clock size={14} /> <span>1d</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                    <div className="w-5 h-5 rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/casey.png" alt="Casey" fill className="object-cover" />
                    </div>
                    <span className="font-medium text-ink">Amelia Grant</span>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-purple-200 rounded-[12px] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-3 w-full">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-[14px] font-semibold text-ink leading-snug">"Leave work at work" billboards</p>
                    <div className="flex items-center gap-1 text-ink-muted text-[12px] shrink-0 mt-0.5">
                      <Clock size={14} /> <span>6d</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                    <div className="w-5 h-5 rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/darren.png" alt="Darren" fill className="object-cover" />
                    </div>
                    <span className="font-medium text-ink">Daniel Foster</span>
                  </div>
                </div>
              </div>
            </div>

            {/* In Progress */}
            <div className="flex flex-col gap-4 min-w-0">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md text-[13px] font-medium bg-orange-100 text-orange-700">In Progress</span>
                <span className="text-[14px] font-medium text-ink-muted">3</span>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                {/* Card 1 */}
                <div className="bg-white border border-orange-200 rounded-[12px] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-3 w-full">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-[14px] font-semibold text-ink leading-snug">BFCM campaign</p>
                    <div className="flex items-center gap-1 text-ink-muted text-[12px] shrink-0 mt-0.5">
                      <Clock size={14} /> <span>3d</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                      <div className="w-5 h-5 rounded-full overflow-hidden relative border border-border/50">
                        <Image src="/avatars/jordan.png" alt="Jordan" fill className="object-cover" />
                      </div>
                      <span className="font-medium text-ink">Benjamin Ortiz</span>
                    </div>
                    <span className="text-[10px] font-semibold text-orange-600 bg-orange-100 border border-orange-200 px-1.5 py-0.5 rounded-md">High</span>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-orange-200 rounded-[12px] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-3 w-full">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-[14px] font-semibold text-ink leading-snug">Influencer promotions</p>
                    <div className="flex items-center gap-1 text-ink-muted text-[12px] shrink-0 mt-0.5">
                      <Clock size={14} /> <span>2d</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                      <div className="w-5 h-5 rounded-full overflow-hidden relative border border-border/50">
                        <Image src="/avatars/indie.png" alt="Indie" fill className="object-cover" />
                      </div>
                      <span className="font-medium text-ink">Ruby Gallagher</span>
                    </div>
                    <span className="text-[10px] font-semibold text-orange-600 bg-orange-100 border border-orange-200 px-1.5 py-0.5 rounded-md">High</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Done */}
            <div className="flex flex-col gap-4 min-w-0">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md text-[13px] font-medium bg-emerald-100 text-emerald-700">Done</span>
                <span className="text-[14px] font-medium text-ink-muted">2</span>
              </div>
              
              <div className="flex flex-col gap-3 w-full opacity-60">
                {/* Card 1 */}
                <div className="bg-white border border-emerald-200 rounded-[12px] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-3 w-full">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-[14px] font-semibold text-ink-muted line-through leading-snug">Grand central poster</p>
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" weight="fill" />
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                    <div className="w-5 h-5 rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/darren.png" alt="Darren" fill className="object-cover" />
                    </div>
                    <span className="font-medium">Caleb Smith</span>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-emerald-200 rounded-[12px] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-3 w-full">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-[14px] font-semibold text-ink-muted line-through leading-snug">Social Easter eggs</p>
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" weight="fill" />
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                    <div className="w-5 h-5 rounded-full overflow-hidden relative border border-border/50">
                      <Image src="/avatars/riley.png" alt="Riley" fill className="object-cover" />
                    </div>
                    <span className="font-medium">Caleb Smith</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Templates */}
        <FadeIn delay={0.3} className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-ink">Templates</h2>
            <button className="text-[14px] font-semibold flex items-center gap-1.5 text-ink-muted hover:text-ink hover:underline transition-colors">
              Library <ArrowRight size={14} weight="bold" />
            </button>
          </div>
          {/* Extra padding so hover lift + shadows aren't clipped by the scroll container */}
          <div className="-mx-5 overflow-x-auto scrollbar-hide">
            <Stagger className="flex gap-5 px-5 pt-4 pb-8 snap-x" delay={0.05} stagger={0.08}>
              {templates.map((template) => (
                <StaggerItem key={template.title} className="snap-start shrink-0">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="group cursor-pointer w-[320px] rounded-[24px] border border-border bg-paper shadow-sm hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-ink/15 transition-[box-shadow,border-color] flex flex-col"
                  >
                    <div className="relative h-[180px] overflow-hidden rounded-t-[24px] bg-[#F8F9FA]">
                      <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-2 flex-1 rounded-b-[24px]">
                      <p className="text-[16px] font-semibold text-ink tracking-tight">{template.title}</p>
                      <p className="text-[13px] text-ink-muted leading-relaxed">{template.description}</p>
                      <span className="mt-auto pt-4 text-[13px] font-semibold text-ink-muted group-hover:text-ink flex items-center gap-1.5 transition-colors">
                        Use template <ArrowRight size={13} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
              <div className="snap-start shrink-0 w-[20px]" />
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </div>
    </div>
  );
}
