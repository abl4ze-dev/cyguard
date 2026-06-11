# CYGUARD Shield — Open Source (Full Stack)

## Overview
CYGUARD is a free, open-source cybersecurity platform featuring:
- 🛡️ Real-time threat detection browser extension (Chrome/Edge/Firefox/Brave)
- 🔍 AI-powered URL & file scanner
- 📰 Live cybersecurity news feed
- 🔐 Email & password breach checker
- 🚫 Ad, tracker & malware blocking (400K+ rules)
- 🔞 Adult content filter
- 🤖 AI Security Assistant (CygBot)

## Tech Stack
- **Frontend:** React 18, Tailwind CSS, Framer Motion, shadcn/ui
- **Backend/BaaS:** Base44 (entities, auth, integrations)
- **Extension:** Chrome MV3, Declarative Net Request API
- **AI:** LLM integration via Base44 Core (InvokeLLM)

## Project Structure
```
src/
├── pages/          # App pages (Landing, Dashboard, Scanner, etc.)
├── components/     # Reusable UI components
│   ├── layout/     # App layout & navbar
│   ├── landing/    # Landing page sections
│   ├── dashboard/  # Dashboard widgets
│   ├── scan/       # Scanner components
│   ├── chat/       # AI chat widget
│   └── ui-custom/  # Custom design system
├── entities/       # Backend data schemas (JSON)
├── agents/         # AI agent configs (JSON)
├── lib/            # Auth, theme context, utilities
├── api/            # Base44 SDK client
└── utils/          # Helper utilities
extension/          # Chrome/Edge browser extension (MV3)
```

## Getting Started
```bash
npm install
npm run dev
```

## Extension Installation
1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** → select the `extension/` folder

## Backend (Base44 Entities)
- **ScanResult** — stores URL/file scan history
- **ThreatAlert** — active threat notifications
- **ReportedSite** — community-reported malicious domains

## License
MIT License — free for personal and commercial use.

## Contributing
Pull requests, bug reports, and feature suggestions are welcome!
