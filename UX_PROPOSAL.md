# Tycoon US — UX Design Proposal (Detailed)

**Document type:** Platform & website UX proposal  
**Author intent:** High-fidelity UI revamp proposal for Tycoon US  
**Status:** Interactive prototype — Home, Chats, Tasks live; Schedule / Team / Library in IA  
**Audience:** Product, design, engineering, and leadership  
**Companion docs:** [`prd.md`](./prd.md) (product requirements) · [`design.md`](./design.md) (visual system)

---

## Table of contents

1. [Purpose of this revamp](#1-purpose-of-this-revamp)
2. [Goals & success criteria](#2-goals--success-criteria)
3. [Executive summary](#3-executive-summary)
4. [Audit of the earlier experience](#4-audit-of-the-earlier-experience)
5. [Mental model revamp](#5-mental-model-revamp)
6. [Information architecture & hierarchy](#6-information-architecture--hierarchy)
7. [Global layout system](#7-global-layout-system)
8. [Surface-by-surface redesign](#8-surface-by-surface-redesign)
9. [Cross-cutting UX improvements](#9-cross-cutting-ux-improvements)
10. [Design uplift](#10-design-uplift)
11. [Key user journeys](#11-key-user-journeys)
12. [What the prototype demonstrates](#12-what-the-prototype-demonstrates)
13. [Key achievements](#13-key-achievements)
14. [Before / after matrix](#14-before--after-matrix)
15. [Website & brand storytelling](#15-website--brand-storytelling)
16. [Risks, tradeoffs & open decisions](#16-risks-tradeoffs--open-decisions)
17. [Gaps & recommended roadmap](#17-gaps--recommended-roadmap)
18. [Appendix](#18-appendix)

---

## 1. Purpose of this revamp

### 1.1 Why this work exists

This UI revamp is not a visual refresh for its own sake. It is a **proposal for how Tycoon US should feel and function** as a product and as a brand story on the website.

The earlier product proved a powerful idea: an AI CEO (Astra) plus AI employees that can research, design, write, and ship. But the interface still framed Tycoon as **a chat app with satellite pages**. That framing under-sells the product and creates operational confusion for founders who need to:

- start work quickly  
- trust that agents are actually working  
- know what needs their decision  
- find outputs without digging through threads  
- feel like they are running a company, not prompting a bot  

### 1.2 The goal of the UI revamp (in one sentence)

**Turn Tycoon from “talk to Astra” into “run your AI company”** — with a clear hierarchy, a durable mental model, and a premium desktop workspace that can also sell the product on the website.

### 1.3 What “success” looks like for this proposal

A stakeholder who walks the prototype should leave believing:

1. Tycoon is an **operating system for AI work**, not a chatbot skin.  
2. The founder always knows **what to do next** (command, review, approve).  
3. Agents feel like **employees with roles and workload**, not anonymous model replies.  
4. Chat, tasks, and artifacts are **one system**, not three disconnected apps.  
5. The visual language is **calm, premium, and brandable** enough for both product and marketing.

### 1.4 Scope of this document

| In scope | Out of scope (for this doc) |
|----------|-----------------------------|
| UX goals, IA, hierarchy, mental model | Backend architecture / model routing |
| Detailed before → after improvements | Final production engineering estimates |
| Design uplift rationale | Legal / pricing policy |
| Prototype inventory (what’s built) | Full accessibility audit |
| Website storytelling alignment | Pixel-perfect marketing site build |

---

## 2. Goals & success criteria

### 2.1 Primary product goals

| # | Goal | How the new UI supports it |
|---|------|----------------------------|
| G1 | **Make work the center of gravity** | Tasks Kanban + Home board snapshot; chat creates tasks instead of replacing them |
| G2 | **Make autonomy trustworthy** | Agent cards, spawn metadata, tool-use lines, structured task embeds |
| G3 | **Reduce cognitive load** | Six clear nav layers; fewer product nouns; consistent shell |
| G4 | **Put the founder in control** | “Waiting on you,” approvals, Auto mode, org-level Share |
| G5 | **Create daily momentum** | Home command + “What’s happening now” so opening the app feels alive |
| G6 | **Unify brand across product & site** | Cirka/Gilroy, warm paper, mint atmosphere, editorial hierarchy |

### 2.2 UX goals (user-facing)

1. **Time-to-first-action &lt; 5 seconds** — Land on Home, type or pick a quick action.  
2. **Answer “what needs me?” in one glance** — Badges, agent cards, Waiting on you filter.  
3. **Never lose the output** — Task cards link to board; docs open beside chat; Library is the long-term store (planned).  
4. **Understand who owns what** — Assignees, roles, spawn source on every work object.  
5. **Feel premium without feeling cold** — Warm shell, soft motion, restrained accents.

### 2.3 Anti-goals (what this revamp deliberately avoids)

- Turning Tycoon into a generic project-management clone with AI bolted on  
- Keeping Astra as the only meaningful entry point  
- Stuffing billing / credit upsells into the primary work stream  
- Inventing new top-level nouns (Missions, Rooms, Workstreams-as-nav)  
- Loud “AI SaaS” aesthetics (purple gradients, glow, emoji chrome)  
- Dashboard clutter: stats strips, promo chips, and competing hero modules in the first viewport  

### 2.4 Measurable proposal criteria (for review)

| Criterion | Pass signal |
|-----------|-------------|
| Mental model clarity | Reviewer can explain Chat vs Tasks vs Home without notes |
| Hierarchy | Reviewer can sketch the left rail from memory |
| Demo path | Home → Chats → Tasks tells a complete story in &lt; 5 minutes |
| Brand fit | First Home viewport still feels like Tycoon with nav removed |
| Trust | Agent work looks accountable (owner, status, next action) |

---

## 3. Executive summary

This proposal redesigns Tycoon US from an **Astra-centric chat product** into an **AI company workspace**.

**Earlier product:** Astra · Work · Library · Team — chat-first, list-based work, handbook library, roster team, credit plans inside chat.

**Proposed product:** Home · Chats · Tasks · Schedule · Team · Library — command-first home, multi-pane collaboration, Kanban execution, agent pulse, premium OS shell.

The emotional and operational promise:

> *“I have an AI team. I can talk to them, see what they are doing, review what needs me, and manage the company from one place.”*

**Core loop:**

```
User asks (Home or Chat)
  → Astra routes to agent(s)
  → Agent(s) create tasks
  → Tasks move on the board
  → Outputs land in Library
  → Updates surface on Home
  → User approves only when needed
```

---

## 4. Audit of the earlier experience

### 4.1 Earlier information architecture

| Nav item | What the user saw | Implicit job |
|----------|-------------------|--------------|
| **Astra** | Full-screen chat with AI CEO; integrations strip; composer | Primary product surface |
| **Work** | “Astra’s current work”; Ongoing / Delivered; urgent banner; paused rows | Status of Astra’s queue |
| **Library** | Handbook tiles + docs/files table | Company brain + artifacts |
| **Team** | Astra card, humans, hired AI employees | Roster / hiring |
| **Settings** | Account configuration | Config |

### 4.2 What worked in the earlier product

These strengths are **kept and amplified**, not discarded:

1. **Astra as AI CEO** — Clear lead agent with personality and coordination role.  
2. **Named AI employees** — Riley, Indie, Jordan, etc. make the team feel real.  
3. **Company handbook idea** — Durable context (principles, brand, priorities) is valuable.  
4. **Needs-you urgency** — The orange “Needs you” banner correctly prioritized founder attention.  
5. **Clean minimal UI** — White space and restraint were already better than noisy AI tools.  

### 4.3 What broke down (detailed friction)

#### Friction A — Chat absorbed the whole product

Astra was both the home screen and the brand. That taught users: *“Tycoon = messaging an AI.”*  
Work, Library, and Team then felt like admin pages, not parts of one operating loop.

**Consequence:** Users could not build a stable model of where work *lives*. Threads became the only memory.

#### Friction B — Work was a list, not an execution system

“Ongoing / Delivered” with IDs like `DWR-1` and a Paused label resembled a thin ticket list. It did not answer:

- Who owns this?  
- What stage is it in (queued vs live vs blocked)?  
- What did it produce?  
- How does it relate to a project or chat?  

**Consequence:** Founders could not operate the company at a glance.

#### Friction C — Monetization competed with trust

Duplicate “Choose a monthly credit plan” cards inside the chat stream interrupted the narrative of agents delivering work. Billing is necessary; placing it as the hero of the conversation undermines the “AI team” fantasy.

**Consequence:** The product felt like a checkout funnel wearing a chat UI.

#### Friction D — Weak cross-linking

A delivered research doc in Library, a paused task in Work, and a message in Astra were related in reality but not in the UI grammar. Users had to hold the graph in their head.

**Consequence:** High cognitive load; low confidence in autonomous work.

#### Friction E — Flat hierarchy

Five peer nav items with Astra as the emotional center created a **false equality**. The real hierarchy should be: *command → communicate → execute → remember → control*.

#### Friction F — Website / product story mismatch risk

If marketing says “your AI company” but the product opens into a chat thread with a paywall card, the brand promise collapses on first use. The revamp exists partly to **align product proof with website claim**.

### 4.4 Jobs-to-be-done the old UI under-served

| Job | Old support | Gap |
|-----|-------------|-----|
| Start ambiguous work (“help me launch”) | Chat only | No Home command / routing theater |
| See company pulse | Weak | No agent update carousel |
| Approve decisions | Banner / chat | Not a durable filter or Home section |
| Track multi-agent plans | Implicit in chat | No board of record |
| Work beside a document | Rare / separate | No split chat + doc workspace |
| Find recent projects | Limited | No Recent rail |

---

## 5. Mental model revamp

### 5.1 The shift in one table

| Dimension | Before | After |
|-----------|--------|--------|
| Metaphor | Chat with Astra | Run an AI company |
| Primary verb | Message | Command / review / approve |
| Center of gravity | Thread | Work objects (tasks) + pulse (Home) |
| Agents | Personas in Team + replies in chat | Employees with workload, status, CTAs |
| Work | Astra’s queue | System of record for all spawn sources |
| Memory | Handbook + files | Artifacts tied to tasks/chats (Library) |
| Control | Settings + credit plan | Team permissions + approvals + Schedule |
| Success feeling | “Astra answered me” | “The company moved while I slept / while I worked” |

### 5.2 The six-layer model

| Layer | Object | User question it answers |
|-------|--------|--------------------------|
| **Home** | Pulse + command | What should I start? What’s happening? What needs me? |
| **Chats** | Conversations | Who am I talking to? What did we decide? |
| **Tasks** | Work units | What’s in flight? What’s blocked? What’s done? |
| **Schedule** | Time-based jobs | What runs without me asking again? |
| **Team** | People + agents | Who can do what? What’s their load? |
| **Library** | Files + memory | Where is the output / context? |

### 5.3 Noun reduction policy

**Canonical nouns (teach these):**

- Chat / Group chat  
- Task  
- Agent  
- File / Artifact  
- Schedule / Job  
- Approval (filter or state, not necessarily a top nav)  

**Avoid as top-level product objects:**

- Missions  
- Rooms (as a separate nav type)  
- Workstreams-as-nav (projects can be tabs/filters inside Tasks/Chats)  
- Duplicate “Work” vs “Tasks” naming  

### 5.4 Relationship rules (the graph users should feel)

```
Chat ──spawns──► Task ──produces──► Artifact (Library)
  ▲                 │
  │                 └──assigned to──► Agent
  │
Home ◄──summarizes── Tasks + Agents + Approvals
```

**Rule:** Chats do not replace tasks. Chats create and discuss tasks.  
**Rule:** Home does not replace Tasks. Home summarizes and starts work.  
**Rule:** Library does not replace chat history. Library stores durable outputs.

### 5.5 Emotional model

| Moment | Feeling we design for |
|--------|------------------------|
| Open Home | Calm command; the company is alive |
| See agent card “needs review” | Urgency without panic |
| Watch Astra spawn 3 tasks | Competence and coordination |
| Open Kanban | Control and clarity |
| Open doc beside chat | Continuity of craft |
| Hit Waiting on you | Agency — I am the decision-maker |

---

## 6. Information architecture & hierarchy

### 6.1 Left rail (global)

```
Tycoon AI
────────────
⌘K Quick search
Home
Chats
Tasks
Schedule
Team
Library
────────────
Recent
  · New Project
  · AcmeAI Capabilities…
  · AcmeAI Presentation
────────────
User profile
```

**Hierarchy principle:** Nav is ordered by **founder workflow frequency**, not by AI mythology.

1. Home — daily open  
2. Chats — instruct & discuss  
3. Tasks — operate  
4. Schedule — automate  
5. Team — configure people/agents  
6. Library — retrieve memory  

Astra is **not** a top-level nav item. Astra is:

- pinned in Chats  
- featured on Home agent cards  
- the default coordinator behind the Home composer  

### 6.2 Why Astra was demoted from top nav (and elevated in role)

This looks like a demotion; it is actually a **promotion of role clarity**.

| If Astra is top nav | If Astra is coordinator inside the system |
|---------------------|-------------------------------------------|
| Product = chat | Product = company OS |
| Other pages feel secondary | Other pages have clear jobs |
| Hard to explain Tasks | Tasks become the execution layer |
| Brand = one character | Brand = team + operating system |

Astra remains the hero *character*; Home/Tasks become the hero *system*.

### 6.3 Local hierarchy inside each section

Every section follows the same nesting logic:

```
Global nav (who am I in the product?)
  → Context panel (what list/filter am I in?)
    → Main workspace (what am I doing?)
      → Inspector (what detail am I examining?)
```

This is the structural upgrade from the old single-column pages.

### 6.4 Object hierarchy (content)

| Level | Example | UI treatment |
|-------|---------|--------------|
| Org | dwaipayan’s org | Header switcher |
| Project / initiative | AcmeAI Launch | Tabs in Tasks/Chats, Recent items |
| Conversation | Astra thread / group | Chat list + browser-like tabs |
| Task | Research launch channels | Board card + drawer |
| Artifact | Planning report doc | Right panel / Library |
| Agent | Riley — Head of Research | Directory, assignee, Home card |

---

## 7. Global layout system

### 7.1 App shell

```
┌────────────┬──────────────────────────────────────────────────────┐
│ Left rail  │ Workspace header (org · Share · utilities)           │
│ (collapsible) ├──────────────────────────────────────────────────┤
│            │ Context │ Main workspace              │ Inspector   │
│            │ panel   │                             │ (optional)  │
└────────────┴─────────┴─────────────────────────────┴─────────────┘
```

**Implemented behaviors in the prototype:**

- Warm `paper-warm` rail vs inset white `paper` workspace (depth without heavy shadow)  
- Sidebar collapses automatically on Chats to maximize conversation + doc space  
- Manual collapse toggle in header  
- Resizable right panels (Chats doc, Tasks detail)  
- Page transition motion on route change  

### 7.2 Context panel patterns

| Section | Context panel content |
|---------|----------------------|
| Chats | Search, Pinned (Astra), Groups, Agents |
| Tasks | Search, status filters, source filters |
| Library (planned) | Categories / types |
| Team (planned) | Agent groups / humans |
| Schedule (planned) | Job filters / calendar modes |
| Home | No second panel — full command canvas |

### 7.3 Why this shell matters for the revamp goal

The old UI was a **website of pages**.  
The new UI is a **desktop workspace**.

That single shift supports the goal of feeling like an AI company OS: persistent navigation, local filters, multi-pane work, and inspectors that don’t eject you from context.

---

## 8. Surface-by-surface redesign

### 8.1 Home — founder command center

#### Goal of Home

Answer, in one scroll:

1. What do I want to start?  
2. What’s happening across the team?  
3. What’s moving on the board?  
4. How do I start a structured workflow (templates)?  

#### Structure (as prototyped)

| Zone | Content | UX job |
|------|---------|--------|
| Hero | Cirka headline *“What can I do for you?”* + typewriter | Brand + invitation |
| Atmosphere | Mint grid + hands illustration | Emotional presence, not empty white |
| Composer | Multi-line input, +, @, voice, `/`, Auto, send | Primary action |
| Quick actions | Table, Doc, Slides, Board, Calendar, Timeline, Checklist | Lower friction to create artifacts |
| What’s happening now | Horizontal agent brief cards | Autonomy pulse + CTAs |
| Task board | Compact Backlog / In Progress / Done | Execution snapshot |
| Templates | Product Launch, Brand Identity, Competitor Analysis… | Guided starts + path to Library |

#### Improvements vs old “Astra as home”

| Old | New | Why better |
|-----|-----|------------|
| Open into chat | Open into command | Faster start; less thread anxiety |
| No company pulse | Agent cards with status + CTA | Trust and prioritization |
| No board on home | Compact Kanban snapshot | Work is visible without leaving Home |
| Billing cards in chat | Templates / create chips | Momentum without paywall theater |
| Flat white | Editorial hero + atmosphere | Website-grade brand in-product |

#### Attention design on Home

- **P0:** Agent cards with “decisions need review” / “Build blocked”  
- **P1:** In-progress board cards with High priority  
- **P2:** Done column (muted, struck through)  
- **P3:** Templates  

#### Composer behavior (intended product logic)

The composer is not “another chat box.” It is a **router**:

| User intent | System response pattern |
|-------------|-------------------------|
| Single-agent ask | Route to Indie/Riley/… + create task |
| Multi-agent ask | Astra plan + multiple tasks + optional group chat |
| Ambiguous ask | Clarifying chips before spawning work |
| Recurring ask | Create Schedule job |
| Artifact ask | Create Doc/Board/etc. and attach to work |

Rotating placeholders reinforce the breadth of the system (*plan, draft for Indie, summarize waiting on you*).

---

### 8.2 Chats — communication layer

#### Goal of Chats

Be the place to **talk, coordinate, and spawn work** — without becoming the system of record.

#### Layout (as prototyped)

```
Chat list (Pinned / Groups / Agents)
  → Thread (tabs for parallel conversations)
    → Optional right document editor
```

#### Key patterns introduced

1. **Pinned Astra** with attention cue (“3 decisions need review”)  
2. **Groups** for multi-agent initiatives (e.g. AcmeAI Launch, Website Build)  
3. **Agents directory** for direct 1:1  
4. **Browser-like conversation tabs** for parallel threads  
5. **Structured messages** — not only bubbles:  
   - plain agent reply  
   - multi-task spawn card (“3 Tasks Created”)  
   - tool-use disclosure (`Used tyctl task create`)  
   - single task created card with ID / status / due  
   - system note (linked artifact)  
6. **Split workspace** — chat + rich text doc (`wilow_planning_report`) with full formatting toolbar  
7. **Composer** with +, @, mic, send — reply-in-context  

#### Improvements vs old Astra page

| Old Astra | New Chats | Why better |
|-----------|-----------|------------|
| One infinite thread metaphor | Many chats + tabs | Matches real parallel work |
| Integrations strip as chrome | Focus on conversation + work objects | Less distraction |
| Credit plan cards in stream | Task/tool cards in stream | Reinforces execution, not checkout |
| No side doc | Resizable doc panel | Work product stays beside discussion |
| Agents only on Team page | Agents in chat directory | Faster access to the team |
| Opaque “AI did something” | Tool line + task embed | Accountability |

#### Message hierarchy (visual)

1. User message — dark ink bubble, right-aligned (clear human intent)  
2. Agent attribution — avatar + name + time  
3. Narrative reply — light paper bubble  
4. Work object cards — nested, scannable, CTA to board  
5. System notes — centered pills for links/events  
6. Tool disclosure — quiet, expandable-feeling metadata  

This hierarchy is a major uplift: the thread **reads like an operations log**, not only a chat.

---

### 8.3 Tasks — execution layer

#### Goal of Tasks

Be the **system of record** for all work spawned by the user, Astra, agents, or (later) schedule.

#### Layout (as prototyped)

```
Filter rail → Board/List workspace → Task detail drawer
```

#### Filter rail

**Status**

- All tasks  
- Waiting on you (badge count)  
- In progress  
- Blocked  
- Done  

**Sources**

- Spawned by me  
- Spawned by Astra  

This directly attacks the old opacity problem: founders can separate *my asks* from *Astra’s coordination*.

#### Board

Columns (prototype):

| Column | Meaning |
|--------|---------|
| Backlog | Queued / not started |
| In Progress | Actively owned |
| Live | Running / in market / active campaign sense |
| Completed | Finished |

Card anatomy:

- Title  
- Time estimate (e.g. `1d`, `3d`)  
- Assignee avatar + name  
- Priority pill when High/Medium  
- Column-colored border for peripheral vision scanning  

#### Workspace chrome

- Project tabs: All tasks · AcmeAI Launch · Marketing Prep  
- Board / List toggle  
- Filter / Sort  
- Inspector toggle  

#### Improvements vs old Work page

| Old Work | New Tasks | Why better |
|----------|-----------|------------|
| Ongoing / Delivered binary | Multi-stage Kanban | Real operational granularity |
| Row list + Paused | Cards with owner, priority, estimate | Scannable ownership |
| “Needs you” banner only | Waiting on you as durable filter | Approvals are a mode, not a one-off banner |
| Astra-centric framing (“Astra’s current work”) | Workspace-wide tasks | Includes user- and agent-spawned work |
| No detail surface | Right drawer on click | Inspect without losing the board |
| No project slicing | Tabs | Initiative-level focus |

#### Why Kanban serves the revamp goal

Kanban externalizes **state**. Autonomous agents without visible state feel like black boxes. Visible columns make AI labor feel like team labor.

---

### 8.4 Schedule / Team / Library (IA committed, pages pending)

These are part of the mental model even where the prototype has not fully built pages yet.

#### Schedule (planned)

- Recurring jobs, daily briefs, calendar, run-now / pause  
- Prevents “I have to re-ask Astra every Monday”  

#### Team (planned — evolved from old Team)

Keep: Astra hero, humans, AI employees, custom agent create.  
Upgrade: workload, autonomy, tools, permissions — not only a hiring gallery.

#### Library (planned — evolved from old Library)

Keep: handbook / company brain + files table.  
Upgrade: every artifact links to source task/chat; filters by type/owner; inspector preview.

---

## 9. Cross-cutting UX improvements

### 9.1 From pages to a system

| Improvement | Detail |
|-------------|--------|
| Shared shell | Same rail, header, motion language everywhere |
| Shared objects | Task cards appear in Chat, Home, Tasks |
| Shared agents | Same avatars/roles across Home, Chats, Tasks |
| Shared atmosphere | Mint/sepia grid washes differentiate sections without breaking the system |

### 9.2 Attention & notification hierarchy

| Priority | Signal | Surfaces |
|----------|--------|----------|
| P0 Needs you | Alert badge, agent card CTA, Waiting filter | Home, Chats pin, Tasks |
| P1 Active work | Orange In Progress, High pills | Home board, Tasks |
| P2 Blocked | Explicit blocked card/filter | Home, Tasks |
| P3 Completed | Muted / check / Completed column | Home, Tasks |
| P4 Create | Quick actions, templates, + buttons | Home, Chats, Tasks |

### 9.3 Trust & transparency improvements

1. **Tool-use disclosure** in chat  
2. **Task IDs and statuses** on embeds  
3. **Spawn source filters**  
4. **Assignee always visible**  
5. **Guardrail language** in Astra replies (“I’ll ask before publishing…”)  

These are UX expressions of the product thesis: autonomy with accountability.

### 9.4 Interaction density

| Surface | Density | Rationale |
|---------|---------|-----------|
| Home | Low | Command + pulse; avoid dashboard soup |
| Chats | Medium | Conversation + structured cards |
| Tasks | High | Operator board; information-rich cards OK |

### 9.5 Progressive disclosure

- Home shows a **slice** of the board → “View board”  
- Chat shows **task embeds** → “View board” / open details  
- Tasks show **cards** → drawer for full detail  
- Doc panel opens **on demand**  

Users are never forced into the densest view first.

### 9.6 Monetization repositioning (UX principle)

Billing remains necessary for the business, but this revamp treats it as:

- a **Settings / Billing** concern, or  
- a **controlled modal / dedicated moment**,  

—not as the primary content of the agent conversation.  
That protects the emotional goal of the UI: *trust the team, then fund the team*.

---

## 10. Design uplift

### 10.1 Design principles applied

From the design system and prototype:

1. **Quiet confidence** — borders and type over glow and clutter  
2. **Editorial hierarchy** — Cirka for meaning; Gilroy for function  
3. **One accent at a time** — mint atmosphere, ink CTAs, sparse alert red  
4. **Progressive density** — airy Home, denser Tasks  
5. **Lowercase / human voice** — calm, direct copy  

### 10.2 Typography uplift

| Role | Type | Use in prototype |
|------|------|------------------|
| Display | Cirka | Home hero, section presence |
| UI | Gilroy (sans stack) | Nav, cards, chat, board |

**Improvement:** The old UI was clean but typographically generic. The new UI can carry **brand on the website and in-product** with the same type story.

### 10.3 Color & material uplift

| Token idea | Role |
|------------|------|
| `paper-warm` | App chrome |
| `paper` | Work surfaces |
| `ink` | Primary text / primary buttons |
| Mint grid wash | Home / Chats atmosphere |
| Sepia grid wash | Tasks atmosphere (work/craft cue) |
| Column colors | Peripheral status scanning |

### 10.4 Motion uplift

| Motion | Purpose |
|--------|---------|
| Typewriter headline | Arrival, brand presence |
| Rotating placeholders | Teach capability breadth |
| Staggered cards/chips | Hierarchy without noise |
| Route transitions | Continuity of shell |
| Card hover lift | Affordance, craft |

Motion is **presence and hierarchy**, not playfulness.

### 10.5 Iconography

Phosphor icons with regular/fill weight shifts for active states — consistent, thin, premium.

### 10.6 Component craft upgrades

| Component | Uplift |
|-----------|--------|
| Sidebar | Active rail indicator, ⌘K, Recent, profile pill |
| Header | Org switcher, Share, collapse |
| Agent cards | Nested status panel + CTA |
| Task cards | Estimate, assignee, priority, column border |
| Chat embeds | Mini boards inside the thread |
| Doc editor | Full formatting toolbar beside chat |
| Segmented view toggles | Board/List with soft selected state |

### 10.7 First-viewport brand test (Home)

With nav removed, Home still reads as Tycoon because of:

- the serif question  
- the hands/atmosphere composition  
- the command box as the single primary action  

This directly supports the website/product dual goal of the revamp.

---

## 11. Key user journeys

### Journey A — Start work from Home

1. Founder lands on Home  
2. Types “Create a launch plan for AcmeAI” (or picks a template)  
3. System routes via Astra  
4. Tasks appear on board; agent cards update  
5. Founder can jump to Chats or Tasks  

**Improvement vs old:** No need to find Astra first; the company starts from the command center.

### Journey B — Coordinate in Chat

1. Open Chats → pinned Astra  
2. Ask for a launch plan  
3. See “3 Tasks Created” card with Riley / Jordan / Casey  
4. Ask a follow-up; see tool-use + single task card for Riley  
5. Open right doc to co-edit the planning report  

**Improvement vs old:** Conversation produces operable objects and a side-by-side artifact, not only prose (or a paywall card).

### Journey C — Operate the board

1. Open Tasks  
2. Filter Waiting on you (badge)  
3. Scan Kanban by project tab  
4. Click a card → drawer  
5. Approve / reassign / open source chat (intended)  

**Improvement vs old:** Execution is a first-class workspace, not a thin Ongoing list.

### Journey D — Review agent output from Home

1. See Indie card: “Logo concepts ready”  
2. Click View  
3. Land in relevant chat/file/task (intended deep link)  

**Improvement vs old:** Home becomes the notification surface for the whole team, not only Astra’s banner.

### Journey E — Multi-agent initiative

1. Group chat “AcmeAI Launch”  
2. Astra breaks work across agents  
3. Tasks tagged to the initiative tab  
4. Outputs accumulate toward Library  

**Improvement vs old:** Groups + Tasks tabs replace the vague “current work” bag.

---

## 12. What the prototype demonstrates

### 12.1 Built now

| Area | Fidelity | Notes |
|------|----------|-------|
| App shell | High | Collapse, org header, motion |
| Home | High | Composer, agents, board, templates |
| Chats | High | List, tabs, structured thread, doc panel |
| Tasks | High | Filters, Kanban, drawer, view toggle |
| Design tokens / fonts | Medium–High | Cirka loaded; system documented |
| PRD + design docs | High | Spec depth for engineering handoff |

### 12.2 Intentionally illustrative

- Sample tasks, agents, and copy (AcmeAI / campaign scenarios)  
- Non-persistent UI state  
- Nav links for Schedule / Team / Library without full pages yet  

### 12.3 Demo script (recommended for stakeholders)

1. **Home (60s)** — “This is the command center.” Show composer, agent cards, board.  
2. **Chats (90s)** — “Talking creates work.” Show spawn card, tool line, doc panel.  
3. **Tasks (90s)** — “This is the system of record.” Show Waiting on you, columns, drawer.  
4. **Close (30s)** — Restate loop: ask → assign → track → store → review.

---

## 13. Key achievements

### 13.1 Strategic achievements

1. **Reframed the product category** — from chatbot to AI company OS.  
2. **Aligned product proof with website claim** — “AI team” is visible in the UI structure, not only in marketing copy.  
3. **Established a durable mental model** — six layers, clear jobs, reduced nouns.  
4. **Separated communication from execution** — Chats vs Tasks without losing linkage.  
5. **Repositioned Astra** — from the entire app to the coordinating CEO inside the system.

### 13.2 UX achievements

6. **Founder command center** — Home answers start + pulse + snapshot.  
7. **Operable autonomy** — agent cards, tool disclosure, spawn filters.  
8. **Approval as a mode** — Waiting on you, not only a one-time banner.  
9. **Multi-pane collaboration** — chat + document as a real work pattern.  
10. **Project slicing** — tabs for initiatives without new top-level nouns.  
11. **Attention hierarchy** — P0–P4 signals designed across surfaces.  
12. **Progressive density** — Home airy, Tasks dense, Chats in between.

### 13.3 Design achievements

13. **Brandable visual system** — Cirka/Gilroy, warm paper, mint atmosphere.  
14. **Motion with purpose** — typewriter, stagger, route transitions.  
15. **Consistent component language** — cards, pills, tabs, inspectors.  
16. **Shell craft** — collapsible rail, org header, resizable inspectors.  
17. **Anti-generic AI aesthetic** — avoided purple-glow SaaS clichés.

### 13.4 Process / proposal achievements

18. **Traceable specs** — `prd.md` + `design.md` + this proposal + live prototype.  
19. **Before/after narrative** — grounded in the earlier live product screens.  
20. **Handoff-ready IA** — engineers can implement Schedule/Team/Library without reinventing the model.

---

## 14. Before / after matrix

| Dimension | Earlier Tycoon US | Proposed Tycoon US |
|-----------|-------------------|--------------------|
| Category feel | AI chat product | AI company workspace |
| Default land | Astra chat | Home command center |
| Top nav | Astra, Work, Library, Team | Home, Chats, Tasks, Schedule, Team, Library |
| Work UI | Ongoing/Delivered list | Kanban + filters + drawer |
| Agent visibility | Team page + chat replies | Home pulse + chat directory + assignees |
| Parallel work | Single-thread bias | Chat tabs + project tabs |
| Artifacts in flow | Weak | Doc panel beside chat |
| Approvals | Banner / chat interrupt | Waiting on you + agent CTAs |
| Billing in UX | In-stream plan cards | Deferred to controlled surfaces (principle) |
| Layout | Single column pages | Rail + context + workspace + inspector |
| Typography | Generic clean sans | Cirka + Gilroy editorial system |
| Atmosphere | Flat white | Warm shell + mint/sepia washes |
| Trust model | Implicit | Explicit ownership, tools, spawn source |
| Website alignment | Claim &gt; proof risk | Proof matches “AI company” claim |

---

## 15. Website & brand storytelling

### 15.1 Why the website is in scope of this UX revamp

The goal is not only a better app. It is a **coherent story** across:

- marketing site  
- onboarding  
- daily product use  

If the site says “hire an AI team” and the app opens as a paywalled chat, conversion and retention both suffer.

### 15.2 Story beats ↔ product proof

| Website beat | Prototype proof |
|--------------|-----------------|
| Your AI CEO coordinates the company | Astra pin + multi-task spawn cards |
| Specialized AI employees | Agent directory + Home cards + assignees |
| See work move in real time | Kanban + “What’s happening now” |
| You stay in control | Waiting on you / review CTAs / guardrail copy |
| Everything compounds in memory | Doc panel now; Library next |
| Start in one sentence | Home composer + templates |

### 15.3 Visual continuity for site + product

Use the same:

- Cirka headlines  
- Warm paper / ink system  
- Calm motion  
- Agent portrait language  
- “Command → team → board” narrative sections on the marketing site  

---

## 16. Risks, tradeoffs & open decisions

### 16.1 Risks

| Risk | Mitigation |
|------|------------|
| Users look for “Astra” in the rail and feel lost | Keep Astra pinned + Home composer routes to Astra by default |
| Tasks feel like “another Jira” | Keep agent-native metadata (spawned by, source chat) and AI-native cards |
| Home becomes cluttered over time | Strict section budget; metrics only if sparse |
| Doc panel competes with chat focus | Closed by default; user-opened; resizable |
| Kanban columns confuse (Live vs In Progress) | Validate naming with users; PRD allows merge/simplify |

### 16.2 Open product decisions

1. Exact MVP Kanban columns (4 vs 5 vs Waiting-on-you column)  
2. Approvals: filter-only vs dedicated Home module vs both  
3. Group chats auto-created by Astra vs user-created only  
4. Billing entry points post-revamp  
5. How strongly Handbook (old Library) remains distinct from generated artifacts  

### 16.3 Tradeoffs accepted in this proposal

- **More chrome than the old minimal pages** — in exchange for operability  
- **Astra less visually “the app”** — in exchange for system clarity  
- **Higher information density on Tasks** — in exchange for control  

---

## 17. Gaps & recommended roadmap

### 17.1 Not yet in the interactive prototype

- Schedule page  
- Team page (evolved)  
- Library page (evolved)  
- Settings / billing as dedicated UX  
- Onboarding (brief → control level → first workflow)  
- Deep links from agent cards to exact artifacts  
- Real data, auth, permissions, spend  

### 17.2 Suggested next prototype sprints

**Sprint 1 — Close the loop**

- Team page + Library page at Home/Chats/Tasks fidelity  
- Wire agent card CTAs to concrete destinations  

**Sprint 2 — Time & control**

- Schedule table + calendar  
- Approvals module on Home  
- Agent permission basics on Team  

**Sprint 3 — Website pairing**

- Marketing landing that mirrors Home command + team + board story  
- Shared design tokens published for web  

**Sprint 4 — Onboarding**

- Replace survey-like onboarding with first live workflow into Home  

### 17.3 Stakeholder review checklist

- [ ] Agree the six-layer IA replaces Astra/Work/Library/Team as the primary model  
- [ ] Agree Chat ≠ system of record  
- [ ] Agree Home is the default land  
- [ ] Agree Waiting on you is MVP-critical  
- [ ] Agree billing does not live as chat spam  
- [ ] Prioritize Schedule vs Team vs Library for next build  
- [ ] Align website narrative to the new proof  

---

## 18. Appendix

### A. Design principles (north star)

1. Chat is not the product — Chat instructs; Tasks execute.  
2. Always show state — happening / blocked / needs you / output location.  
3. Make autonomy visible — spawned by, assigned to, source, why.  
4. Reduce nouns — small set of durable objects.  
5. Home creates momentum — the company should feel alive on open.  
6. Quiet confidence — typography and space over chrome and noise.  
7. Brand and product share one visual language.  

### B. Core loop (repeat for handoff)

```
User asks from Home or Chat
  → Astra routes to agent(s)
  → Agent(s) create tasks
  → Tasks move in Kanban
  → Outputs go to Library
  → Updates appear on Home
  → User approves only when needed
```

### C. Prototype file map (for engineers/designers)

| Area | Primary files |
|------|----------------|
| Shell | `app/(dashboard)/layout.tsx`, `components/layout/Sidebar.tsx` |
| Home | `app/(dashboard)/home/page.tsx` |
| Chats | `app/(dashboard)/chats/page.tsx` |
| Tasks | `app/(dashboard)/tasks/page.tsx` |
| Motion | `components/motion/*` |
| Tokens | `app/globals.css`, Tailwind theme, `design.md` |
| Product spec | `prd.md` |

### D. Glossary

| Term | Meaning |
|------|---------|
| Astra | AI CEO / coordinator |
| Agent | AI employee with a role |
| Task | Unit of work on the board |
| Spawned by | Who created the task (user / Astra / agent / schedule) |
| Waiting on you | Approval or decision required from the human |
| Artifact | Durable output (doc, design, research, file) |
| Context panel | Second column for lists/filters |
| Inspector | Right detail panel |

### E. One-line summary

**This revamp exists to make Tycoon feel like the AI company it claims to be — operable, trustworthy, brandable, and centered on work rather than chat chrome.**

---

*Version 2.0 — Detailed UX proposal for Tycoon US platform & website.*  
*Update this document as Schedule, Team, Library, and website surfaces land in the prototype.*
