# PRD: Tycoon AI Workspace Redesign

## 1. Product thesis

Tycoon is not a chatbot. It is an AI company workspace where the human founder communicates with AI agents, agents create and execute tasks, outputs are stored in the Library, and the Home dashboard shows what is happening across the company.

The redesigned UI should make the user feel:

> "I have an AI team. I can talk to them, see what they are doing, review what needs me, and manage the company from one place."

---

## 2. Core mental model

The whole product should follow this simple logic:

- **Chat** starts work.
- **Tasks** track work.
- **Library** stores work.
- **Home** summarizes work.
- **Team** controls agents.
- **Schedule** automates recurring work.

No separate "Missions."
No separate "Rooms" as a product object.
Only direct chats, group chats, and tasks.

### Core objects

| Object | Meaning |
|--------|---------|
| Home | Founder dashboard and command center |
| Chats | Direct and group conversations with agents |
| Tasks | All work spawned by user, Astra, or agents |
| Agents | AI employees with roles, permissions, workload |
| Library | Files, outputs, docs, memory, artifacts |
| Schedule | Recurring jobs, calendar, daily briefs |
| Approvals | Decisions/action items needed from the human |

Approvals can either be its own section or a filter inside Tasks/Home. For MVP, make it a strong filter inside Tasks and a section on Home.

---

## 3. Navigation architecture

### Left rail

- Home
- Chats
- Tasks
- Schedule
- Team
- Library

**Bottom:**

- User / Company card
- Settings

This rail should feel like Microsoft Teams, but cleaner and more founder/operator-oriented.

### Left rail purpose

**Home**

Company pulse, command input, agent updates, Kanban snapshot, decisions, schedule, artifacts.

**Chats**

Direct chats with Astra and agents. Group chats can be created here.

**Tasks**

All work across the workspace in Kanban, list, and activity feed.

**Schedule**

Recurring jobs, daily briefs, calendar events, scheduled automations.

**Team**

Astra, AI agents, human users, permissions, autonomy, tools.

**Library**

All files, generated outputs, uploaded context, working rules, research, docs.

---

## 4. Global layout system

Use a 3-layer layout pattern.

### Layout A: App shell

```
Left rail | Context panel | Main workspace | Optional right inspector
```

**Left rail**

Main navigation.

**Context panel**

Changes based on selected nav.

Examples:

- In Chats: chat list, agents, groups
- In Tasks: task filters
- In Library: categories
- In Team: agent groups
- In Schedule: scheduled job filters

**Main workspace**

The selected page content.

**Right inspector**

Appears when clicking a task, file, agent, approval, or notification.

---

## 5. Home page PRD

### 5.1 Home purpose

Home is the founder's daily command center.

It should answer:

- What do I want to start?
- What is happening now?
- What needs my attention?
- Which agents have updates?
- What tasks are moving?
- What is scheduled?
- What artifacts were created?

### 5.2 Home page structure

Recommended order:

1. Top command input
2. Quick action chips
3. Agent update carousel
4. Company pulse metrics
5. Work board / Kanban panel
6. Waiting on you section
7. Recent activity feed
8. Scheduled work table
9. Recent artifacts table

### 5.3 Top command input

This is the main starting point.

**Title**

What do you want to get done?

**Input placeholder**

Ask Astra to plan, research, design, write, build, analyze, or follow up…

**Quick action chips**

Research | Design | Write | Build | Market | Analyze | Schedule | Upload

**User behavior**

The user types a request. The system decides whether to:

- Route to one agent
- Ask Astra to coordinate multiple agents
- Ask a clarifying question
- Create a scheduled job
- Ask user to upload/connect something

### 5.4 Routing logic

**Case 1: Single-agent work**

User:

> Create 3 logo concepts for WilowAI.

System:

> Routed to Indie, Design Agent.
> Task created: Create 3 logo concepts for WilowAI.

CTA:

- Open Indie chat
- View task

**Case 2: Multi-agent work**

User:

> Help me launch WilowAI's landing page.

System:

> Astra created a work plan:
> - Riley: competitor research
> - Casey: landing page copy
> - Indie: visual direction
> - Darren: implementation plan

CTA:

- Open group chat
- View tasks

In this case, the system may create a group chat automatically, but it is still inside Chats only.

**Case 3: Ambiguous request**

User:

> Help me grow.

System asks:

> What do you want to grow first?
> [Users] [Revenue] [Traffic] [Content] [Email list]

After user selects, create task(s).

**Case 4: Scheduled work**

User:

> Send me a market scan every Monday.

System:

> Scheduled job created:
> Weekly market scan
> Owner: Riley
> Frequency: Every Monday

CTA:

- Open Schedule
- View task template

### 5.5 Agent update carousel

This is your Instagram-style carousel idea.

But instead of stories, use **Agent Brief Cards**.

**Section title**

Agent updates

**Card content**

Each card should show:

- Agent avatar
- Agent name
- Role
- Status
- Short update
- CTA

**Example cards**

| Agent | Update | CTA |
|-------|--------|-----|
| Astra | 3 decisions need review | Open |
| Indie | Logo concepts ready | Review |
| Riley | Research completed | Read |
| Jordan | Launch copy drafted | Approve |
| Darren | Build blocked | Resolve |

**Status types**

Needs you | Completed | In progress | Blocked | Scheduled | Idle

**Behavior**

Clicking a card opens:

- relevant chat
- task detail
- approval drawer
- file/artifact
- agent profile

**Design note**

Use status rings around avatars:

- prominent ring for "Needs you"
- subtle ring for "Completed"
- warning ring for "Blocked"
- muted state for idle agents

### 5.6 Company pulse metrics

After the carousel, show a compact metric row.

Example:

- Active tasks: 24
- Waiting on you: 4
- Completed today: 8
- Agents active: 6
- Scheduled jobs: 5
- Spend today: $3.20

These should not be heavy analytics. They are quick operational signals.

### 5.7 Kanban panel on Home

This should be the main dashboard panel.

**Section title**

Work board

**Columns**

For Home, keep it compact:

- Queued
- In progress
- Waiting on you
- Blocked
- Done

**Card content**

Each task card should show:

- Task title
- Assigned agent
- Spawned by
- Source chat
- Status
- Due time
- Files/output count
- Action

**Example**

> Create WilowAI logo concepts
> Owner: Indie | Spawned by: Astra | Source: Astra chat
> Status: Delivered | Files: 1 | Action: Review

**Limits**

Home should show only high-priority or recent tasks.

Add: **View all tasks →**

The full board lives in Tasks.

### 5.8 Waiting on you section

This is one of the most important Home sections.

**Purpose**

Surface all founder decisions and blockers.

**Format**

Can be cards or table. For Home, use cards if there are few items; use table if many.

**Columns**

Decision | Requested by | Why it matters | Due | Action

**Example**

| Decision | Requested by | Why it matters | Due | Action |
|----------|--------------|----------------|-----|--------|
| Choose logo direction | Indie | Needed before Darren starts landing page build | Today | Review |

**Actions:** Approve | Ask revision | Discuss | Open task

### 5.9 Recent activity feed

**Section title**

Recent work activity

**Example**

- 10:42 — You asked Astra to create logo concepts.
- 10:43 — Astra spawned research task for Riley.
- 10:44 — Astra assigned design task to Indie.
- 10:58 — Riley completed competitor research.
- 11:02 — Indie started logo exploration.
- 11:18 — Indie delivered 3 logo options.
- 11:20 — Astra requested your approval.

**Why this matters**

This explains:

- who spawned what
- why a task exists
- who owns it
- what changed
- what output was created

This makes autonomous AI work feel trustworthy.

### 5.10 Scheduled work table

**Section title**

Scheduled work

**Columns**

Job | Owner | Frequency | Next run | Status | Last output

**Example rows**

| Job | Owner | Frequency | Next run | Status | Last output |
|-----|-------|-----------|----------|--------|-------------|
| Daily operating review | Astra | Daily | Tomorrow 9 AM | Active | Brief created |
| Weekly content plan | Jordan | Monday | Jul 15 | Active | 5 posts drafted |
| Market scan | Riley | Weekly | Friday | Paused | Research memo |

CTA: **View Schedule →**

### 5.11 Recent artifacts table

**Section title**

Recent artifacts

**Columns**

Name | Type | Created by | Source task | Last used | Action

**Example rows**

| Name | Type | Created by | Source task | Last used | Action |
|------|------|------------|-------------|-----------|--------|
| WilowAI Logo Concepts | Design doc | Indie | Logo concepts | Today | Open |
| Screen Recorder Market Analysis | Research | Riley | Competitor scan | Today | Open |
| Landing Page Copy Draft | Copy | Casey | Landing copy | Yesterday | Review |

CTA: **View Library →**

---

## 6. Chats PRD

### 6.1 Chats purpose

Chats are the communication layer.

Users can:

- talk to Astra
- talk to individual agents
- create group chats with agents
- review files/tasks related to each chat
- spawn work from conversation

**Important principle:**

Chats do not replace tasks. Chats create and discuss tasks.

### 6.2 Chat page layout

```
Left rail | Chat list panel | Main chat panel | Right context inspector
```

### 6.3 Chat list panel

**Top controls**

- Search chats, agents, tasks...
- + New chat
- + New group

**Default sections**

**Pinned**

- Astra

**Agents**

- Riley, Indie, Jordan, Casey, Darren, Harper

**Groups**

- WilowAI Launch
- Website Build
- Content Sprint

**Recent**

- Astra, Indie, Jordan + Casey

Astra should always be pinned.

### 6.4 Creating a new chat

User clicks New chat.

**Flow:**

1. Select agent
2. Optional: describe what you need
3. Start chat

**Example:**

> Chat with: [Indie — Design]
> What do you need? [Create a visual direction for WilowAI]

### 6.5 Creating a group chat

User clicks New group.

**Flow:**

1. Group name
2. Select agents
3. Optional goal / context
4. Create group

**Example:**

> Group name: WilowAI Launch
> Agents: Astra, Riley, Indie, Jordan, Casey
> Context: Help launch the brand and first campaign.

Group chats exist only in Chats. They are not a separate nav object.

### 6.6 Chat header tabs

**For direct agent chats:**

Agent name | Chat | Tasks | Files | Memory | Settings

**For group chats:**

Group name | Chat | Tasks | Files | Members

These tabs are filtered views. They do not create separate product objects.

| Tab | Content |
|-----|---------|
| Chat | Conversation |
| Tasks | Tasks spawned from this chat or assigned to this agent/group |
| Files | Files and artifacts attached to this chat or created from related tasks |
| Memory | Only for direct agents. Shows what this agent knows or uses as context |
| Settings | Only for direct agents. Agent autonomy and tool permissions |
| Members | Only for group chats. Shows humans and agents in the group |

### 6.7 Chat message types

Do not make every message a plain bubble. Use structured message types.

**Message types**

- Normal message
- Task created
- Task updated
- File created
- Approval requested
- Agent handoff
- Clarifying question
- System note

**Example: task created message**

> Astra created 3 tasks:
> - Riley: Research competitors
> - Indie: Create logo concepts
> - Casey: Draft brand voice
>
> [View tasks]

**Example: approval requested**

> Indie needs your decision:
> Choose one logo direction before Darren starts landing page design.
>
> [Review options]

### 6.8 Right context inspector in chat

For an **agent chat**, show:

- Agent profile
- Current tasks
- Recent outputs
- Files used
- Pending approvals
- Autonomy level
- Tools connected

For a **group chat**, show:

- Members
- Active tasks
- Pending approvals
- Recent files
- Source context
- Spend / usage

---

## 7. Tasks PRD

### 7.1 Tasks purpose

Tasks are the execution layer.

Every piece of work appears here, whether spawned by:

- user
- Astra
- another agent
- schedule
- integration
- recurring job

### 7.2 Tasks page layout

```
Left rail | Task filter panel | Main task board | Task detail drawer
```

### 7.3 Task filters

Second panel:

- All tasks
- Waiting on you
- In progress
- Blocked
- Done
- Scheduled
- Spawned by me
- Spawned by Astra
- By agent
- By source chat

Useful filters: Agent, Status, Priority, Source, Due date, Approval needed, Created by

### 7.4 Kanban columns

**Full Tasks page:**

Backlog | Queued | In progress | Waiting on you | Blocked | Delivered | Done

Potentially merge Delivered and Done if it feels too much.

**For MVP:**

Queued | In progress | Waiting on you | Blocked | Done

### 7.5 Task card design

Each task card should show:

- Title
- Assigned agent
- Status
- Spawned by
- Source chat
- Due time
- Files/output count
- Approval indicator

**Example:**

> Create 3 logo concepts
> Owner: Indie | Spawned by: Astra | Source: WilowAI Launch group
> Status: Waiting on you | Output: 1 doc | Action: Review

### 7.6 Task detail drawer

**Fields**

Task title, Description, Status, Assigned agent, Spawned by, Source chat, Created time, Due date, Priority, Cost/usage, Files used, Files created, Subtasks, Activity log, Approval status

**Actions**

Approve | Ask revision | Comment | Reassign | Pause | Mark done | Open chat | Open output

### 7.7 Task spawning logic

| Type | Example |
|------|---------|
| User-spawned | User asks Indie → Assigned to Indie, Spawned by User, Source: Indie chat |
| Astra-spawned | User asks Astra → Multiple tasks, Spawned by Astra, Source: Astra chat |
| Agent-spawned | Indie needs research → Assigned to Riley, Spawned by Indie, Source: Indie task |
| Schedule-spawned | Weekly review → Assigned to Astra, Spawned by Schedule, Source: Weekly growth review |

### 7.8 Activity feed in Tasks

Below Kanban or as a tab: **Recent task activity**

Show chronological work history:

Astra created task → Riley started task → Riley attached file → Indie requested approval → You approved → Darren started next task

---

## 8. Schedule PRD

### 8.1 Schedule purpose

Schedule controls recurring and time-based work.

Not just calendar events. It should include:

- daily brief
- weekly reports
- recurring research
- content schedules
- reminders
- agent check-ins
- upcoming review points

### 8.2 Schedule page structure

**Second panel:** All scheduled | Daily | Weekly | Monthly | Paused | Calendar view | Recurring jobs

**Main area:** Scheduled jobs table | Calendar view | Upcoming runs | Recent outputs

### 8.3 Scheduled jobs table

**Columns:** Job | Owner | Frequency | Next run | Status | Last run | Last output | Action

**Example:**

| Job | Owner | Frequency | Next run | Status | Last run | Last output |
|-----|-------|-----------|----------|--------|----------|-------------|
| Daily operating review | Astra | Daily | Tomorrow 9 AM | Active | Today | Brief |
| Weekly market scan | Riley | Weekly | Friday | Active | Last Friday | Memo |
| Content plan | Jordan | Monday | Jul 15 | Paused | Jul 8 | Draft |

**Actions:** Edit | Pause | Run now | View outputs

### 8.4 Calendar view

Show: scheduled jobs, external meetings if connected, task deadlines, review deadlines

Clicking a calendar item opens detail drawer.

---

## 9. Team PRD

### 9.1 Team purpose

Team is where users manage Astra, agents, and humans.

It should not be only a list of agent personas. It should show capability, workload, and control.

### 9.2 Team page structure

**Sections:** Astra | Human users | AI agents | Custom agents

**Agent categories:** Leadership | Research | Design | Marketing | Content | Product/Tech | Legal | Operations

### 9.3 Agent card content

Each card should show:

- Avatar, Name, Role, Status
- Current tasks, Completed this week
- Can spawn tasks?, Autonomy level, Tools allowed, Budget/spend
- CTA: Chat / View work / Settings

**Example:**

> Indie — AI Design Lead
> Status: Active | Current tasks: 2 | Completed this week: 7
> Can request research from Riley | Needs approval before publishing
> [Chat] [View work] [Settings]

### 9.4 Agent detail page

**Tabs:** Overview | Tasks | Files | Memory | Tools | Permissions

### 9.5 Agent permissions

**Important controls:**

- Can create tasks
- Can assign tasks to other agents
- Can access files
- Can send emails
- Can publish content
- Can spend money
- Can use connected tools
- Can contact external people

**Approval thresholds:**

- Ask before spending more than $X
- Ask before external communication
- Ask before publishing
- Ask before deleting files
- Ask before changing website/app

---

## 10. Library PRD

### 10.1 Library purpose

Library is the memory and artifact system.

It stores: uploaded files, generated outputs, research docs, design files, working rules, brand context, customer notes, task outputs, chat attachments

### 10.2 Library categories

Second panel: All | Docs | Research | Brand | Generated | Uploads | Rules | Customer context | Agent outputs

### 10.3 Library table

**Columns:** Name | Type | Created by | Source task | Source chat | Last used | Status | Action

### 10.4 File detail drawer

**Fields:** File preview, Created by, Created from task, Source chat, Used by agents, Last used, Tags, Memory status, Related tasks

**Actions:** Open | Attach to chat | Use as memory | Remove from memory | Download | Archive

---

## 11. Settings PRD

**Sections:** General | Notifications | Billing / credits | Integrations | Agent permissions | Working rules | Security | Domains / email | Usage

### Working rules

Framed as: **How your AI team works with you.**

Rules:

- Astra can create tasks
- Agents can spawn tasks
- Agents can draft documents
- Agents need approval before external action
- Agents need approval before spending
- Agents need approval before publishing

---

## 12. Onboarding PRD

### Current issue

Current onboarding asks too many questions (use case, stage, bottleneck, working style, notification frequency, tools). This feels like a survey.

### New onboarding goal

Get the user to: **Astra created the first task flow and the dashboard is alive.**

### New onboarding steps

**Step 1: Brief Astra**

Title: What should your AI team help you accomplish first?

Fields: Company/project name, Goal description

Optional chips: Launch MVP | Get users | Create brand | Build landing page | Research market | Create content engine | Raise funding

**Step 2: Set control level**

Title: How much freedom should Astra have?

| Card | Description |
|------|-------------|
| Suggest only | Astra creates plans and options. You approve every task. |
| Check with me first (default) | Astra creates tasks and drafts, but asks before important actions. |
| Run with guardrails | Astra works continuously and only asks for approvals, spend, and external actions. |

Approval toggles: Ask before spending money | Ask before sending external messages | Ask before publishing content | Ask before changing connected tools

**Step 3: Start first work**

Title: Start your first workflow

Astra suggests 3 cards based on the user brief. CTA: **Start with this**

After click: create relevant chat/group chat if needed, create first tasks, assign agents, land on Home

**Optional after Home loads**

Non-blocking card: Connect tools for better execution (Gmail, Drive, Notion, GitHub, Figma). Do not block onboarding with connectors.

---

## 13. Key user flows

**Flow 1: User starts work from Home**

User types request → System routes → Task(s) created → Kanban updated → Chat updates → Agent update card → Output to Library

**Flow 2: User chats with agent**

Open Indie chat → Ask for design → Indie creates task → Task in Tasks → Indie updates chat → Output to Library → User reviews/approves

**Flow 3: Astra spawns multiple agents**

User asks Astra → Astra breaks into tasks → Assigns agents → Kanban + activity feed → User approves key decisions

**Flow 4: Agent spawns another agent**

Indie creates task for Riley → Spawned by Indie visible → Riley completes → Indie continues

**Flow 5: Scheduled job runs**

Schedule triggers → Astra creates task → Output in Home and Library → Agent update card

---

## 14. MVP feature scope

### MVP must have

- Home command input
- Agent update carousel
- Compact Home Kanban
- Waiting on you section
- Recent activity feed
- Chats with Astra and agents
- Group chat creation
- Tasks Kanban
- Task detail drawer
- Spawned by / assigned to metadata
- Library table
- Team agent list
- Basic Schedule table
- Short onboarding

### MVP can skip for later

- Custom tabs
- Advanced analytics
- Complex project hierarchy
- Full calendar sync
- Deep permissions per agent
- Complex automation builder
- Agent performance scoring
- Custom agent builder

---

## 15. Design principles

1. **Chat is not the product** — Chat is the interface for giving instructions and discussing work. Execution must live in Tasks.

2. **Always show state** — The user should never wonder: what is happening, who is doing it, what is blocked, what needs approval, where the output is.

3. **Make autonomy visible** — If an agent creates work, show: spawned by whom, assigned to whom, source chat, why it was created.

4. **Reduce nouns** — No Missions. No separate Rooms. No complicated hierarchy. Use: chats, group chats, tasks, files, agents, schedule.

5. **Home should create momentum** — The user should open Home and immediately see: work has moved, agents have updates, decisions need action, outputs are ready.

---

## 16. Suggested page-by-page IA

### Home

Command input | Quick action chips | Agent update carousel | Company pulse | Work board | Waiting on you | Recent activity | Scheduled work | Recent artifacts

### Chats

Search | New chat | New group | Pinned Astra | Agents | Groups | Recent chats | Main chat | Right inspector

### Tasks

Filters | Kanban | Task cards | Task drawer | Activity feed

### Schedule

Scheduled jobs | Calendar view | Recurring tasks | Upcoming runs | Recent outputs

### Team

Astra | Humans | Agents by function | Agent detail | Permissions | Tools | Workload

### Library

All files | Docs | Research | Brand | Generated | Uploads | Rules | File detail drawer

### Settings

General | Notifications | Billing | Integrations | Working rules | Agent permissions | Security | Usage

---

## 17. Example Home copy

**Top:** What do you want to get done?

**Input:** Ask Astra to plan, research, design, write, build, analyze, or follow up…

**Agent carousel:**

- Astra — 3 decisions need review
- Indie — Logo concepts ready
- Riley — Research completed
- Jordan — Launch copy drafted
- Darren — Build blocked

**Kanban title:** Work board

**Waiting section:** Waiting on you

**Activity:** Recent work activity

**Schedule:** Scheduled work

**Artifacts:** Recent artifacts

---

## 18. Example chat behavior

User asks Astra:

> Create a launch plan for WilowAI.

Astra response:

> I'll coordinate this with Jordan, Riley, and Casey.
>
> Created tasks:
> 1. Riley — Research launch channels
> 2. Jordan — Create GTM plan
> 3. Casey — Draft launch copy
>
> I'll ask you before publishing or contacting anyone.

**Task metadata:**

- Spawned by: Astra
- Source: Astra chat
- Assigned to: Riley/Jordan/Casey
- Approval required: Before external action

---

## 19. Final product summary

The redesigned Tycoon should be built around this simple system:

| Layer | Role |
|-------|------|
| Home | command center |
| Chats | communication |
| Tasks | execution |
| Schedule | recurring work |
| Team | agent control |
| Library | memory and outputs |

**The most important interaction:**

```
User asks from Home or Chat
  → Astra routes to agent(s)
  → Agent(s) create tasks
  → Tasks move in Kanban
  → Outputs go to Library
  → Updates appear on Home
  → User approves only when needed
```

That is the whole product.
