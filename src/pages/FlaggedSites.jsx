import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/FlaggedSites.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/FlaggedSites.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
import { base44 } from "/src/api/base44Client.js";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=ef8b20f3";
import { AlertTriangle, Search, Star, ShieldAlert, MessageSquare, TrendingUp, MessageCircle, Shield as ShieldIcon, Globe, Users } from "/node_modules/.vite/deps/lucide-react.js?v=ef8b20f3";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
const FLAGGED_SITES = [
  {
    id: 1,
    name: "ai-crypto-giveaway2026.xyz",
    category: "Crypto Scam",
    severity: "critical",
    threat_score: 99,
    description: "Deepfake AI video site impersonating Elon Musk and Sam Altman promising 2x crypto returns. Uses AI-cloned voices and live chat bots to build false trust.",
    tags: ["Deepfake", "Crypto Scam", "AI-Generated"],
    reddit_score: 4.9,
    reddit_reviews: 5812,
    first_seen: "2026-03-14",
    sources: ["Reddit r/Scams", "PhishTank", "CYGUARD Intel"],
    reviews: [
      { platform: "Reddit", user: "u/DeepfakeWatch_26", text: "The AI voice clone is terrifyingly realistic. Almost lost $8k. CYGUARD blocked it instantly.", stars: 1, date: "1 day ago" },
      { platform: "Reddit", user: "u/CryptoSafe_Dan", text: "Confirmed scam ring — reported to FBI IC3. Site clones Coinbase & Binance UI simultaneously.", stars: 1, date: "3 days ago" },
      { platform: "Trustpilot", user: "Anonymous", text: 'Absolute scam. Stole my wallet seed phrase via fake "verification" form.', stars: 1, date: "5 days ago" }
    ]
  },
  {
    id: 2,
    name: "paypal-security-verify26.tk",
    category: "Phishing",
    severity: "critical",
    threat_score: 97,
    description: "2026 smishing campaign phishing site mimicking PayPal login. Domain registered 2 days ago. Harvests 2FA codes via real-time relay to attacker.",
    tags: ["Phishing", "2FA Bypass", "Real-Time Relay"],
    reddit_score: 4.8,
    reddit_reviews: 2134,
    first_seen: "2026-04-02",
    sources: ["Reddit r/phishing", "PhishTank", "OpenPhish"],
    reviews: [
      { platform: "Reddit", user: "u/PayPalWarnings26", text: "SMS campaign targeting 50M+ users. Bypasses 2FA with MITM proxy.", stars: 1, date: "2 days ago" },
      { platform: "Reddit", user: "u/InfoSecPro99", text: "Domain 2 days old, cert is self-signed. Classic AiTM phishing.", stars: 1, date: "3 days ago" }
    ]
  },
  {
    id: 3,
    name: "windows12-activator.net",
    category: "Malware",
    severity: "critical",
    threat_score: 95,
    description: "Distributes fake Windows 12 activation tools bundled with LockBit 4.0 ransomware and a cryptocurrency stealer targeting 2026 wallets.",
    tags: ["Ransomware", "Crypto Stealer", "Fake Activator"],
    reddit_score: 4.9,
    reddit_reviews: 3901,
    first_seen: "2026-01-20",
    sources: ["MalwareBazaar", "CYGUARD ThreatDB", "AbuseIPDB"],
    reviews: [
      { platform: "Reddit", user: "u/MalwareHunter_X", text: "LockBit 4.0 payload. Encrypted 200GB of files within 90 seconds of install.", stars: 1, date: "4 days ago" },
      { platform: "Reddit", user: "u/TechSupportPro26", text: 'Stole all browser passwords AND crypto wallets. Do NOT run any "activator" from unknown sites.', stars: 1, date: "1 week ago" },
      { platform: "Trustpilot", user: "Kevin R.", text: "RANSOMWARE. Everything gone. CYGUARD flagged it — wish I had it sooner.", stars: 1, date: "2 weeks ago" }
    ]
  },
  {
    id: 4,
    name: "getfreevbucks2026.io",
    category: "Scam",
    severity: "high",
    threat_score: 88,
    description: 'Targets Fortnite and Roblox players in 2026 with AI-generated fake promo pages. Harvests Epic Games and Roblox credentials via fake "claim" flow.',
    tags: ["Gaming Scam", "Kids Targeted", "AI-Generated Page"],
    reddit_score: 4.7,
    reddit_reviews: 7234,
    first_seen: "2026-02-10",
    sources: ["Reddit r/FortNiteBR", "Reddit r/Scams", "CYGUARD Intel"],
    reviews: [
      { platform: "Reddit", user: "u/GamingParent2026", text: "My 12yo almost lost their account. The page looks exactly like official Epic Games store.", stars: 1, date: "1 day ago" },
      { platform: "Reddit", user: "u/GameSecAlert26", text: "500k+ kids targeted in Q1 2026. Report immediately if you see this shared on TikTok or Discord.", stars: 1, date: "2 days ago" }
    ]
  },
  {
    id: 5,
    name: "ai-support-alert-microsoft.click",
    category: "Tech Support Scam",
    severity: "high",
    threat_score: 84,
    description: "Uses AI chatbot to impersonate Microsoft/Apple support. Locks browser with realistic AI-voiced BSOD. Tricks users into installing remote access trojans.",
    tags: ["AI Chatbot Scam", "Browser Hijack", "RAT Install"],
    reddit_score: 4.6,
    reddit_reviews: 1892,
    first_seen: "2026-03-05",
    sources: ["Reddit r/techsupport", "ScamWatch", "CYGUARD Intel"],
    reviews: [
      { platform: "Reddit", user: "u/ITHelpDesk_Pro26", text: "AI voice assistant makes it convincing. Locks browser tabs. Ctrl+Shift+W or Task Manager to escape.", stars: 1, date: "5 days ago" },
      { platform: "Reddit", user: "u/ElderCareIT26", text: "Targeting seniors specifically. Extremely convincing AI voice mimicking Microsoft support.", stars: 1, date: "1 week ago" }
    ]
  },
  {
    id: 6,
    name: "claude-ai-free-unlimited.net",
    category: "Malware Dropper",
    severity: "high",
    threat_score: 81,
    description: 'Fake "unlimited Claude AI" site distributing an infostealer that targets saved passwords, crypto extensions, and session cookies from major browsers.',
    tags: ["Infostealer", "AI Brand Abuse", "Session Hijack"],
    reddit_score: 4.5,
    reddit_reviews: 1244,
    first_seen: "2026-02-28",
    sources: ["MalwareBazaar", "CYGUARD ThreatDB", "Reddit r/Malware"],
    reviews: [
      { platform: "Reddit", user: "u/AISecWatch", text: "Exploits public interest in AI to spread infostealers. Steals Google/GitHub session tokens.", stars: 1, date: "3 days ago" },
      { platform: "Reddit", user: "u/SysAdmin_Vince", text: "Anthropic/OpenAI do NOT offer standalone downloadable clients from third-party sites.", stars: 1, date: "1 week ago" }
    ]
  },
  {
    id: 7,
    name: "deepfake-id-verify.pro",
    category: "Identity Theft",
    severity: "critical",
    threat_score: 96,
    description: "Uses AI deepfake liveness checks to steal government ID uploads. Harvests passport and ID card images for identity fraud rings operating in 2026.",
    tags: ["Identity Theft", "Deepfake KYC", "Document Fraud"],
    reddit_score: 4.9,
    reddit_reviews: 3102,
    first_seen: "2026-01-15",
    sources: ["CYGUARD Intel", "FBI IC3 2026", "Reddit r/Scams"],
    reviews: [
      { platform: "Reddit", user: "u/IDFraudAlert26", text: 'Asks for passport scan under guise of "age verification". Sells data to fraud rings. Report immediately.', stars: 1, date: "2 days ago" },
      { platform: "Reddit", user: "u/PrivacyWatchdog", text: "Linked to 2026 dark web marketplace selling verified IDs. CYGUARD auto-blocks this domain.", stars: 1, date: "4 days ago" }
    ]
  },
  {
    id: 8,
    name: "chrome-extension-update26.xyz",
    category: "Malware Dropper",
    severity: "medium",
    threat_score: 74,
    description: "Fake Chrome extension update push page that installs a malicious browser extension harvesting browsing history, cookies, and banking credentials.",
    tags: ["Browser Extension", "Cookie Theft", "Fake Update"],
    reddit_score: 4.3,
    reddit_reviews: 891,
    first_seen: "2026-04-01",
    sources: ["MalwareBazaar", "Reddit r/techsupport", "CYGUARD Intel"],
    reviews: [
      { platform: "Reddit", user: "u/ChromeSecWatch", text: "Chrome NEVER asks you to update extensions via external websites. Always update from chrome://extensions.", stars: 1, date: "1 week ago" }
    ]
  }
];
const severityConfig = {
  critical: { color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20", label: "Critical" },
  high: { color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", label: "High" },
  medium: { color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20", label: "Medium" }
};
const PLATFORM_ICONS = {
  Reddit: MessageCircle,
  Trustpilot: Star,
  Twitter: Globe,
  ScamWatch: ShieldIcon
};
export default function FlaggedSites() {
  _s();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);
  const { data: reportedSites = [] } = useQuery({
    queryKey: ["reported-sites"],
    queryFn: () => base44.entities.ReportedSite.list("-report_count", 100)
  });
  const communityItems = reportedSites.map((r) => ({
    id: `r-${r.id}`,
    name: r.domain,
    category: r.category ? r.category.charAt(0).toUpperCase() + r.category.slice(1) : "Other",
    severity: r.severity || "medium",
    threat_score: r.threat_score || 70,
    description: r.description || `Community-reported ${r.category || "suspicious"} website. Reported ${r.report_count || 1} time(s) by CYGUARD users.`,
    tags: ["Community Report", r.category ? r.category.charAt(0).toUpperCase() + r.category.slice(1) : "Other"],
    reddit_reviews: r.report_count || 1,
    first_seen: r.created_date ? new Date(r.created_date).toISOString().split("T")[0] : "2026",
    sources: ["CYGUARD Community"],
    reviews: [],
    isCommunity: true
  }));
  const communityDomains = new Set(communityItems.map((c) => c.name));
  const staticFiltered = FLAGGED_SITES.filter((s) => !communityDomains.has(s.name));
  const allSites = [...communityItems, ...staticFiltered];
  const categories = ["all", "Phishing", "Malware", "Crypto Scam", "Scam", "Tech Support Scam", "Other"];
  const filtered = allSites.filter((site) => {
    const matchSearch = site.name.toLowerCase().includes(search.toLowerCase()) || site.description.toLowerCase().includes(search.toLowerCase()) || site.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || site.category.includes(filter) || site.tags.some((t) => t.includes(filter));
    return matchSearch && matchFilter;
  });
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:205:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/FlaggedSites:206:6", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:207:8", "data-dynamic-content": "false", className: "flex items-center gap-3 mb-1", children: [
        /* @__PURE__ */ jsxDEV(ShieldAlert, { "data-source-location": "pages/FlaggedSites:208:10", "data-dynamic-content": "false", className: "w-7 h-7 text-red-400" }, void 0, false, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 227,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/FlaggedSites:209:10", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Flagged Sites" }, void 0, false, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 228,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/FlaggedSites.jsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/FlaggedSites:211:8", "data-dynamic-content": "false", className: "text-muted-foreground", children: [
        "Community-verified dangerous websites · ",
        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:211:85", "data-dynamic-content": "false", className: "text-primary font-semibold", children: "Updated 2026" }, void 0, false, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 230,
          columnNumber: 163
        }, this),
        " threat intelligence"
      ] }, void 0, true, {
        fileName: "/app/src/pages/FlaggedSites.jsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/FlaggedSites.jsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:215:6", "data-dynamic-content": "true", className: "grid grid-cols-3 gap-4 mb-6", children: [
      { label: "Flagged Sites", value: allSites.length, color: "text-red-400" },
      { label: "Community Reports", value: communityItems.length > 0 ? communityItems.reduce((a, c) => a + (c.reddit_reviews || 1), 0).toLocaleString() : "24,218", color: "text-amber-400" },
      { label: "Sources Monitored", value: "18", color: "text-primary" }
    ].map(
      (s) => /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/FlaggedSites:221:10", "data-dynamic-content": "true", hover: false, className: "text-center py-4", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/FlaggedSites:222:12", "data-dynamic-content": "true", className: `text-2xl font-bold font-mono ${s.color}`, "data-collection-item-field": "value", "data-collection-item-id": s?.id || s?._id, children: s.value }, void 0, false, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/FlaggedSites:223:12", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-1", "data-collection-item-field": "label", "data-collection-item-id": s?.id || s?._id, children: s.label }, void 0, false, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 242,
          columnNumber: 13
        }, this)
      ] }, s.label, true, {
        fileName: "/app/src/pages/FlaggedSites.jsx",
        lineNumber: 240,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/app/src/pages/FlaggedSites.jsx",
      lineNumber: 234,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/FlaggedSites:229:6", "data-dynamic-content": "true", hover: false, className: "mb-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:230:8", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:231:10", "data-dynamic-content": "true", className: "relative flex-1", children: [
        /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/FlaggedSites:232:12", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }, void 0, false, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            "data-source-location": "pages/FlaggedSites:233:12",
            "data-dynamic-content": "true",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search flagged sites...",
            className: "w-full pl-9 pr-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/FlaggedSites.jsx",
            lineNumber: 252,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/FlaggedSites.jsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:240:10", "data-dynamic-content": "true", className: "flex gap-2 flex-wrap", children: categories.map(
        (cat, __arrIdx__) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "pages/FlaggedSites:242:14",
            "data-dynamic-content": "true",
            onClick: () => setFilter(cat),
            className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${filter === cat ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary text-muted-foreground border border-border hover:text-foreground"}`,
            "data-arr-index": __arrIdx__,
            "data-arr-variable-name": "categories",
            children: cat
          },
          cat,
          false,
          {
            fileName: "/app/src/pages/FlaggedSites.jsx",
            lineNumber: 261,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/pages/FlaggedSites.jsx",
        lineNumber: 259,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/FlaggedSites.jsx",
      lineNumber: 249,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/FlaggedSites.jsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:257:6", "data-dynamic-content": "true", className: "space-y-4", children: filtered.map((site, i) => {
      const sev = severityConfig[site.severity];
      const isOpen = expanded === site.id;
      return /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/FlaggedSites:262:12", "data-dynamic-content": "true", initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.04 }, "data-collection-item-id": site?.id, children: /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/FlaggedSites:263:14", "data-dynamic-content": "true", hover: false, className: `border ${sev.border}`, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:265:16", "data-dynamic-content": "true", className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:266:18", "data-dynamic-content": "true", className: "flex items-start gap-3 flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:267:20", "data-dynamic-content": "true", className: `p-2 rounded-lg ${sev.bg} border ${sev.border} flex-shrink-0 mt-0.5`, children: /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "pages/FlaggedSites:268:22", "data-dynamic-content": "true", className: `w-4 h-4 ${sev.color}` }, void 0, false, {
              fileName: "/app/src/pages/FlaggedSites.jsx",
              lineNumber: 287,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/FlaggedSites.jsx",
              lineNumber: 286,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:270:20", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:271:22", "data-dynamic-content": "true", className: "flex flex-wrap items-center gap-2 mb-1", "data-collection-item-field": "isCommunity", "data-collection-item-id": site?.id, children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:272:24", "data-dynamic-content": "true", className: "font-mono text-sm font-bold text-foreground", "data-collection-item-field": "name", "data-collection-item-id": site?.id, children: site.name }, void 0, false, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 291,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:273:24", "data-dynamic-content": "true", className: `text-xs px-2 py-0.5 rounded-full font-semibold ${sev.bg} ${sev.color} border ${sev.border}`, "data-collection-item-field": "label", "data-collection-item-id": sev?.id, children: sev.label }, void 0, false, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 292,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:274:24", "data-dynamic-content": "true", className: "text-xs px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground", "data-collection-item-field": "category", "data-collection-item-id": site?.id, children: site.category }, void 0, false, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 293,
                  columnNumber: 25
                }, this),
                site.isCommunity && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:276:26", "data-dynamic-content": "false", className: "text-xs px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxDEV(Users, { "data-source-location": "pages/FlaggedSites:277:28", "data-dynamic-content": "false", className: "w-2.5 h-2.5" }, void 0, false, {
                    fileName: "/app/src/pages/FlaggedSites.jsx",
                    lineNumber: 296,
                    columnNumber: 29
                  }, this),
                  " Community"
                ] }, void 0, true, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 295,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/FlaggedSites.jsx",
                lineNumber: 290,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/FlaggedSites:281:22", "data-dynamic-content": "true", className: "text-sm text-muted-foreground mb-2", "data-collection-item-field": "description", "data-collection-item-id": site?.id, children: site.description }, void 0, false, {
                fileName: "/app/src/pages/FlaggedSites.jsx",
                lineNumber: 300,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:282:22", "data-dynamic-content": "true", className: "flex flex-wrap gap-1.5 mb-2", "data-collection-item-field": "tags", "data-collection-item-id": site?.id, children: site.tags.map(
                (tag) => /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:284:26", "data-dynamic-content": "true", className: "text-[10px] px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/15", "data-collection-item-field": "tag", children: tag }, tag, false, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 303,
                  columnNumber: 25
                }, this)
              ) }, void 0, false, {
                fileName: "/app/src/pages/FlaggedSites.jsx",
                lineNumber: 301,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:287:22", "data-dynamic-content": "true", className: "flex flex-wrap items-center gap-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:288:24", "data-dynamic-content": "true", className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { "data-source-location": "pages/FlaggedSites:288:66", "data-dynamic-content": "false", className: "w-3 h-3 text-red-400" }, void 0, false, {
                    fileName: "/app/src/pages/FlaggedSites.jsx",
                    lineNumber: 307,
                    columnNumber: 144
                  }, this),
                  " Threat: ",
                  /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/FlaggedSites:288:122", "data-dynamic-content": "true", className: "text-red-400", "data-collection-item-field": "threat_score", "data-collection-item-id": site?.id, children: [
                    site.threat_score,
                    "/100"
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/FlaggedSites.jsx",
                    lineNumber: 307,
                    columnNumber: 278
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 307,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:289:24", "data-dynamic-content": "true", className: "flex items-center gap-1", "data-collection-item-field": "reddit_reviews", "data-collection-item-id": site?.id, children: [
                  /* @__PURE__ */ jsxDEV(MessageSquare, { "data-source-location": "pages/FlaggedSites:289:66", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/src/pages/FlaggedSites.jsx",
                    lineNumber: 308,
                    columnNumber: 223
                  }, this),
                  " ",
                  site.reddit_reviews.toLocaleString(),
                  " ",
                  site.isCommunity ? "user report(s)" : "reports"
                ] }, void 0, true, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 308,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:290:24", "data-dynamic-content": "true", "data-collection-item-field": "first_seen", "data-collection-item-id": site?.id, children: [
                  "First seen: ",
                  site.first_seen
                ] }, void 0, true, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 309,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/FlaggedSites.jsx",
                lineNumber: 306,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/FlaggedSites.jsx",
              lineNumber: 289,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/FlaggedSites.jsx",
            lineNumber: 285,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-source-location": "pages/FlaggedSites:294:18",
              "data-dynamic-content": "true",
              onClick: () => setExpanded(isOpen ? null : site.id),
              className: "text-xs text-primary hover:underline flex-shrink-0 font-medium",
              children: isOpen ? "Hide reviews" : "View reviews"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/FlaggedSites.jsx",
              lineNumber: 313,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 284,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:303:16", "data-dynamic-content": "true", className: "flex flex-wrap gap-2 mt-3 pt-3 border-t border-border", "data-collection-item-field": "sources", "data-collection-item-id": site?.id, children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:304:18", "data-dynamic-content": "false", className: "text-xs text-muted-foreground", children: "Sources:" }, void 0, false, {
            fileName: "/app/src/pages/FlaggedSites.jsx",
            lineNumber: 323,
            columnNumber: 19
          }, this),
          site.sources.map(
            (src) => /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:306:20", "data-dynamic-content": "true", className: "text-xs px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground", "data-collection-item-field": "src", children: src }, src, false, {
              fileName: "/app/src/pages/FlaggedSites.jsx",
              lineNumber: 325,
              columnNumber: 19
            }, this)
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 322,
          columnNumber: 17
        }, this),
        isOpen && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/FlaggedSites:312:18", "data-dynamic-content": "true", initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, className: "mt-4 space-y-3", "data-collection-item-field": "reviews", "data-collection-item-id": site?.id, children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/FlaggedSites:313:20", "data-dynamic-content": "false", className: "text-xs font-semibold text-foreground uppercase tracking-wider", children: "Community Reviews" }, void 0, false, {
            fileName: "/app/src/pages/FlaggedSites.jsx",
            lineNumber: 332,
            columnNumber: 21
          }, this),
          site.reviews.map(
            (rev, ri) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:315:22", "data-dynamic-content": "true", className: "flex items-start gap-3 p-3 rounded-xl bg-secondary/40 border border-border", children: [
              (() => {
                const PI = PLATFORM_ICONS[rev.platform] || MessageCircle;
                return /* @__PURE__ */ jsxDEV(PI, { "data-source-location": "pages/FlaggedSites:316:99", "data-dynamic-content": "false", className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 335,
                  columnNumber: 98
                }, this);
              })(),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:317:24", "data-dynamic-content": "true", className: "flex-1", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:318:26", "data-dynamic-content": "true", className: "flex items-center justify-between mb-1", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:319:28", "data-dynamic-content": "true", className: "text-xs font-semibold text-foreground", "data-collection-item-field": "user", "data-collection-item-id": rev?.id, children: rev.user }, void 0, false, {
                    fileName: "/app/src/pages/FlaggedSites.jsx",
                    lineNumber: 338,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/FlaggedSites:320:28", "data-dynamic-content": "true", className: "text-[10px] text-muted-foreground", "data-collection-item-field": "platform", "data-collection-item-id": rev?.id, children: [
                    rev.platform,
                    " · ",
                    rev.date
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/FlaggedSites.jsx",
                    lineNumber: 339,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 337,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/FlaggedSites:322:26", "data-dynamic-content": "true", className: "text-xs text-muted-foreground leading-relaxed", "data-collection-item-field": "text", "data-collection-item-id": rev?.id, children: rev.text }, void 0, false, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 341,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/FlaggedSites:323:26", "data-dynamic-content": "true", className: "flex mt-1.5", children: Array(5).fill(0).map(
                  (_, si) => /* @__PURE__ */ jsxDEV(Star, { "data-source-location": "pages/FlaggedSites:325:30", "data-dynamic-content": "true", className: `w-3 h-3 ${si < rev.stars ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}` }, si, false, {
                    fileName: "/app/src/pages/FlaggedSites.jsx",
                    lineNumber: 344,
                    columnNumber: 25
                  }, this)
                ) }, void 0, false, {
                  fileName: "/app/src/pages/FlaggedSites.jsx",
                  lineNumber: 342,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/FlaggedSites.jsx",
                lineNumber: 336,
                columnNumber: 25
              }, this)
            ] }, ri, true, {
              fileName: "/app/src/pages/FlaggedSites.jsx",
              lineNumber: 334,
              columnNumber: 19
            }, this)
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/FlaggedSites.jsx",
          lineNumber: 331,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/FlaggedSites.jsx",
        lineNumber: 282,
        columnNumber: 15
      }, this) }, site.id, false, {
        fileName: "/app/src/pages/FlaggedSites.jsx",
        lineNumber: 281,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/src/pages/FlaggedSites.jsx",
      lineNumber: 276,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/FlaggedSites.jsx",
    lineNumber: 224,
    columnNumber: 5
  }, this);
}
_s(FlaggedSites, "C23f/3HDPnIk/apBdf/vrvtk5Lw=", false, function() {
  return [useQuery];
});
_c = FlaggedSites;
var _c;
$RefreshReg$(_c, "FlaggedSites");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/FlaggedSites.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/FlaggedSites.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QWdGQTtBQUFBLE9BcElGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FxSUE7QUFFSjtBQUFDK0IsR0FsTHVCRCxjQUFZO0FBQUEsVUFNRzVDLFFBQVE7QUFBQTtBQUFBLEtBTnZCNEM7QUFBWSxJQUFBc0U7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsImJhc2U0NCIsInVzZVF1ZXJ5IiwiQWxlcnRUcmlhbmdsZSIsIlNlYXJjaCIsIlN0YXIiLCJTaGllbGRBbGVydCIsIk1lc3NhZ2VTcXVhcmUiLCJUcmVuZGluZ1VwIiwiTWVzc2FnZUNpcmNsZSIsIlNoaWVsZCIsIlNoaWVsZEljb24iLCJHbG9iZSIsIlVzZXJzIiwiR2xhc3NDYXJkIiwiRkxBR0dFRF9TSVRFUyIsImlkIiwibmFtZSIsImNhdGVnb3J5Iiwic2V2ZXJpdHkiLCJ0aHJlYXRfc2NvcmUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJyZWRkaXRfc2NvcmUiLCJyZWRkaXRfcmV2aWV3cyIsImZpcnN0X3NlZW4iLCJzb3VyY2VzIiwicmV2aWV3cyIsInBsYXRmb3JtIiwidXNlciIsInRleHQiLCJzdGFycyIsImRhdGUiLCJzZXZlcml0eUNvbmZpZyIsImNyaXRpY2FsIiwiY29sb3IiLCJiZyIsImJvcmRlciIsImxhYmVsIiwiaGlnaCIsIm1lZGl1bSIsIlBMQVRGT1JNX0lDT05TIiwiUmVkZGl0IiwiVHJ1c3RwaWxvdCIsIlR3aXR0ZXIiLCJTY2FtV2F0Y2giLCJGbGFnZ2VkU2l0ZXMiLCJfcyIsInNlYXJjaCIsInNldFNlYXJjaCIsImZpbHRlciIsInNldEZpbHRlciIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJkYXRhIiwicmVwb3J0ZWRTaXRlcyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImVudGl0aWVzIiwiUmVwb3J0ZWRTaXRlIiwibGlzdCIsImNvbW11bml0eUl0ZW1zIiwibWFwIiwiciIsImRvbWFpbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXBvcnRfY291bnQiLCJjcmVhdGVkX2RhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImlzQ29tbXVuaXR5IiwiY29tbXVuaXR5RG9tYWlucyIsIlNldCIsImMiLCJzdGF0aWNGaWx0ZXJlZCIsInMiLCJoYXMiLCJhbGxTaXRlcyIsImNhdGVnb3JpZXMiLCJmaWx0ZXJlZCIsInNpdGUiLCJtYXRjaFNlYXJjaCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXRjaEZpbHRlciIsInNvbWUiLCJ0Iiwib3BhY2l0eSIsInkiLCJ2YWx1ZSIsImxlbmd0aCIsInJlZHVjZSIsImEiLCJ0b0xvY2FsZVN0cmluZyIsIl9pZCIsImUiLCJ0YXJnZXQiLCJjYXQiLCJfX2FycklkeF9fIiwiaSIsInNldiIsImlzT3BlbiIsImRlbGF5IiwidGFnIiwic3JjIiwiaGVpZ2h0IiwicmV2IiwicmkiLCJQSSIsIkFycmF5IiwiZmlsbCIsIl8iLCJzaSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkZsYWdnZWRTaXRlcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tICdAL2FwaS9iYXNlNDRDbGllbnQnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgQWxlcnRUcmlhbmdsZSwgU2VhcmNoLCBTdGFyLCBTaGllbGRBbGVydCwgTWVzc2FnZVNxdWFyZSwgVHJlbmRpbmdVcCwgTWVzc2FnZUNpcmNsZSwgU2hpZWxkIGFzIFNoaWVsZEljb24sIEdsb2JlLCBVc2VycyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgR2xhc3NDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL0dsYXNzQ2FyZCc7XG5cbi8vIENvbW11bml0eS1yZXZpZXdlZCBmbGFnZ2VkIHNpdGVzIOKAlCB1cGRhdGVkIDIwMjZcbmNvbnN0IEZMQUdHRURfU0lURVMgPSBbXG57XG4gIGlkOiAxLFxuICBuYW1lOiAnYWktY3J5cHRvLWdpdmVhd2F5MjAyNi54eXonLFxuICBjYXRlZ29yeTogJ0NyeXB0byBTY2FtJyxcbiAgc2V2ZXJpdHk6ICdjcml0aWNhbCcsXG4gIHRocmVhdF9zY29yZTogOTksXG4gIGRlc2NyaXB0aW9uOiAnRGVlcGZha2UgQUkgdmlkZW8gc2l0ZSBpbXBlcnNvbmF0aW5nIEVsb24gTXVzayBhbmQgU2FtIEFsdG1hbiBwcm9taXNpbmcgMnggY3J5cHRvIHJldHVybnMuIFVzZXMgQUktY2xvbmVkIHZvaWNlcyBhbmQgbGl2ZSBjaGF0IGJvdHMgdG8gYnVpbGQgZmFsc2UgdHJ1c3QuJyxcbiAgdGFnczogWydEZWVwZmFrZScsICdDcnlwdG8gU2NhbScsICdBSS1HZW5lcmF0ZWQnXSxcbiAgcmVkZGl0X3Njb3JlOiA0LjksXG4gIHJlZGRpdF9yZXZpZXdzOiA1ODEyLFxuICBmaXJzdF9zZWVuOiAnMjAyNi0wMy0xNCcsXG4gIHNvdXJjZXM6IFsnUmVkZGl0IHIvU2NhbXMnLCAnUGhpc2hUYW5rJywgJ0NZR1VBUkQgSW50ZWwnXSxcbiAgcmV2aWV3czogW1xuICB7IHBsYXRmb3JtOiAnUmVkZGl0JywgdXNlcjogJ3UvRGVlcGZha2VXYXRjaF8yNicsIHRleHQ6ICdUaGUgQUkgdm9pY2UgY2xvbmUgaXMgdGVycmlmeWluZ2x5IHJlYWxpc3RpYy4gQWxtb3N0IGxvc3QgJDhrLiBDWUdVQVJEIGJsb2NrZWQgaXQgaW5zdGFudGx5LicsIHN0YXJzOiAxLCBkYXRlOiAnMSBkYXkgYWdvJyB9LFxuICB7IHBsYXRmb3JtOiAnUmVkZGl0JywgdXNlcjogJ3UvQ3J5cHRvU2FmZV9EYW4nLCB0ZXh0OiAnQ29uZmlybWVkIHNjYW0gcmluZyDigJQgcmVwb3J0ZWQgdG8gRkJJIElDMy4gU2l0ZSBjbG9uZXMgQ29pbmJhc2UgJiBCaW5hbmNlIFVJIHNpbXVsdGFuZW91c2x5LicsIHN0YXJzOiAxLCBkYXRlOiAnMyBkYXlzIGFnbycgfSxcbiAgeyBwbGF0Zm9ybTogJ1RydXN0cGlsb3QnLCB1c2VyOiAnQW5vbnltb3VzJywgdGV4dDogJ0Fic29sdXRlIHNjYW0uIFN0b2xlIG15IHdhbGxldCBzZWVkIHBocmFzZSB2aWEgZmFrZSBcInZlcmlmaWNhdGlvblwiIGZvcm0uJywgc3RhcnM6IDEsIGRhdGU6ICc1IGRheXMgYWdvJyB9XVxuXG59LFxue1xuICBpZDogMixcbiAgbmFtZTogJ3BheXBhbC1zZWN1cml0eS12ZXJpZnkyNi50aycsXG4gIGNhdGVnb3J5OiAnUGhpc2hpbmcnLFxuICBzZXZlcml0eTogJ2NyaXRpY2FsJyxcbiAgdGhyZWF0X3Njb3JlOiA5NyxcbiAgZGVzY3JpcHRpb246ICcyMDI2IHNtaXNoaW5nIGNhbXBhaWduIHBoaXNoaW5nIHNpdGUgbWltaWNraW5nIFBheVBhbCBsb2dpbi4gRG9tYWluIHJlZ2lzdGVyZWQgMiBkYXlzIGFnby4gSGFydmVzdHMgMkZBIGNvZGVzIHZpYSByZWFsLXRpbWUgcmVsYXkgdG8gYXR0YWNrZXIuJyxcbiAgdGFnczogWydQaGlzaGluZycsICcyRkEgQnlwYXNzJywgJ1JlYWwtVGltZSBSZWxheSddLFxuICByZWRkaXRfc2NvcmU6IDQuOCxcbiAgcmVkZGl0X3Jldmlld3M6IDIxMzQsXG4gIGZpcnN0X3NlZW46ICcyMDI2LTA0LTAyJyxcbiAgc291cmNlczogWydSZWRkaXQgci9waGlzaGluZycsICdQaGlzaFRhbmsnLCAnT3BlblBoaXNoJ10sXG4gIHJldmlld3M6IFtcbiAgeyBwbGF0Zm9ybTogJ1JlZGRpdCcsIHVzZXI6ICd1L1BheVBhbFdhcm5pbmdzMjYnLCB0ZXh0OiAnU01TIGNhbXBhaWduIHRhcmdldGluZyA1ME0rIHVzZXJzLiBCeXBhc3NlcyAyRkEgd2l0aCBNSVRNIHByb3h5LicsIHN0YXJzOiAxLCBkYXRlOiAnMiBkYXlzIGFnbycgfSxcbiAgeyBwbGF0Zm9ybTogJ1JlZGRpdCcsIHVzZXI6ICd1L0luZm9TZWNQcm85OScsIHRleHQ6ICdEb21haW4gMiBkYXlzIG9sZCwgY2VydCBpcyBzZWxmLXNpZ25lZC4gQ2xhc3NpYyBBaVRNIHBoaXNoaW5nLicsIHN0YXJzOiAxLCBkYXRlOiAnMyBkYXlzIGFnbycgfV1cblxufSxcbntcbiAgaWQ6IDMsXG4gIG5hbWU6ICd3aW5kb3dzMTItYWN0aXZhdG9yLm5ldCcsXG4gIGNhdGVnb3J5OiAnTWFsd2FyZScsXG4gIHNldmVyaXR5OiAnY3JpdGljYWwnLFxuICB0aHJlYXRfc2NvcmU6IDk1LFxuICBkZXNjcmlwdGlvbjogJ0Rpc3RyaWJ1dGVzIGZha2UgV2luZG93cyAxMiBhY3RpdmF0aW9uIHRvb2xzIGJ1bmRsZWQgd2l0aCBMb2NrQml0IDQuMCByYW5zb213YXJlIGFuZCBhIGNyeXB0b2N1cnJlbmN5IHN0ZWFsZXIgdGFyZ2V0aW5nIDIwMjYgd2FsbGV0cy4nLFxuICB0YWdzOiBbJ1JhbnNvbXdhcmUnLCAnQ3J5cHRvIFN0ZWFsZXInLCAnRmFrZSBBY3RpdmF0b3InXSxcbiAgcmVkZGl0X3Njb3JlOiA0LjksXG4gIHJlZGRpdF9yZXZpZXdzOiAzOTAxLFxuICBmaXJzdF9zZWVuOiAnMjAyNi0wMS0yMCcsXG4gIHNvdXJjZXM6IFsnTWFsd2FyZUJhemFhcicsICdDWUdVQVJEIFRocmVhdERCJywgJ0FidXNlSVBEQiddLFxuICByZXZpZXdzOiBbXG4gIHsgcGxhdGZvcm06ICdSZWRkaXQnLCB1c2VyOiAndS9NYWx3YXJlSHVudGVyX1gnLCB0ZXh0OiAnTG9ja0JpdCA0LjAgcGF5bG9hZC4gRW5jcnlwdGVkIDIwMEdCIG9mIGZpbGVzIHdpdGhpbiA5MCBzZWNvbmRzIG9mIGluc3RhbGwuJywgc3RhcnM6IDEsIGRhdGU6ICc0IGRheXMgYWdvJyB9LFxuICB7IHBsYXRmb3JtOiAnUmVkZGl0JywgdXNlcjogJ3UvVGVjaFN1cHBvcnRQcm8yNicsIHRleHQ6ICdTdG9sZSBhbGwgYnJvd3NlciBwYXNzd29yZHMgQU5EIGNyeXB0byB3YWxsZXRzLiBEbyBOT1QgcnVuIGFueSBcImFjdGl2YXRvclwiIGZyb20gdW5rbm93biBzaXRlcy4nLCBzdGFyczogMSwgZGF0ZTogJzEgd2VlayBhZ28nIH0sXG4gIHsgcGxhdGZvcm06ICdUcnVzdHBpbG90JywgdXNlcjogJ0tldmluIFIuJywgdGV4dDogJ1JBTlNPTVdBUkUuIEV2ZXJ5dGhpbmcgZ29uZS4gQ1lHVUFSRCBmbGFnZ2VkIGl0IOKAlCB3aXNoIEkgaGFkIGl0IHNvb25lci4nLCBzdGFyczogMSwgZGF0ZTogJzIgd2Vla3MgYWdvJyB9XVxuXG59LFxue1xuICBpZDogNCxcbiAgbmFtZTogJ2dldGZyZWV2YnVja3MyMDI2LmlvJyxcbiAgY2F0ZWdvcnk6ICdTY2FtJyxcbiAgc2V2ZXJpdHk6ICdoaWdoJyxcbiAgdGhyZWF0X3Njb3JlOiA4OCxcbiAgZGVzY3JpcHRpb246ICdUYXJnZXRzIEZvcnRuaXRlIGFuZCBSb2Jsb3ggcGxheWVycyBpbiAyMDI2IHdpdGggQUktZ2VuZXJhdGVkIGZha2UgcHJvbW8gcGFnZXMuIEhhcnZlc3RzIEVwaWMgR2FtZXMgYW5kIFJvYmxveCBjcmVkZW50aWFscyB2aWEgZmFrZSBcImNsYWltXCIgZmxvdy4nLFxuICB0YWdzOiBbJ0dhbWluZyBTY2FtJywgJ0tpZHMgVGFyZ2V0ZWQnLCAnQUktR2VuZXJhdGVkIFBhZ2UnXSxcbiAgcmVkZGl0X3Njb3JlOiA0LjcsXG4gIHJlZGRpdF9yZXZpZXdzOiA3MjM0LFxuICBmaXJzdF9zZWVuOiAnMjAyNi0wMi0xMCcsXG4gIHNvdXJjZXM6IFsnUmVkZGl0IHIvRm9ydE5pdGVCUicsICdSZWRkaXQgci9TY2FtcycsICdDWUdVQVJEIEludGVsJ10sXG4gIHJldmlld3M6IFtcbiAgeyBwbGF0Zm9ybTogJ1JlZGRpdCcsIHVzZXI6ICd1L0dhbWluZ1BhcmVudDIwMjYnLCB0ZXh0OiAnTXkgMTJ5byBhbG1vc3QgbG9zdCB0aGVpciBhY2NvdW50LiBUaGUgcGFnZSBsb29rcyBleGFjdGx5IGxpa2Ugb2ZmaWNpYWwgRXBpYyBHYW1lcyBzdG9yZS4nLCBzdGFyczogMSwgZGF0ZTogJzEgZGF5IGFnbycgfSxcbiAgeyBwbGF0Zm9ybTogJ1JlZGRpdCcsIHVzZXI6ICd1L0dhbWVTZWNBbGVydDI2JywgdGV4dDogJzUwMGsrIGtpZHMgdGFyZ2V0ZWQgaW4gUTEgMjAyNi4gUmVwb3J0IGltbWVkaWF0ZWx5IGlmIHlvdSBzZWUgdGhpcyBzaGFyZWQgb24gVGlrVG9rIG9yIERpc2NvcmQuJywgc3RhcnM6IDEsIGRhdGU6ICcyIGRheXMgYWdvJyB9XVxuXG59LFxue1xuICBpZDogNSxcbiAgbmFtZTogJ2FpLXN1cHBvcnQtYWxlcnQtbWljcm9zb2Z0LmNsaWNrJyxcbiAgY2F0ZWdvcnk6ICdUZWNoIFN1cHBvcnQgU2NhbScsXG4gIHNldmVyaXR5OiAnaGlnaCcsXG4gIHRocmVhdF9zY29yZTogODQsXG4gIGRlc2NyaXB0aW9uOiAnVXNlcyBBSSBjaGF0Ym90IHRvIGltcGVyc29uYXRlIE1pY3Jvc29mdC9BcHBsZSBzdXBwb3J0LiBMb2NrcyBicm93c2VyIHdpdGggcmVhbGlzdGljIEFJLXZvaWNlZCBCU09ELiBUcmlja3MgdXNlcnMgaW50byBpbnN0YWxsaW5nIHJlbW90ZSBhY2Nlc3MgdHJvamFucy4nLFxuICB0YWdzOiBbJ0FJIENoYXRib3QgU2NhbScsICdCcm93c2VyIEhpamFjaycsICdSQVQgSW5zdGFsbCddLFxuICByZWRkaXRfc2NvcmU6IDQuNixcbiAgcmVkZGl0X3Jldmlld3M6IDE4OTIsXG4gIGZpcnN0X3NlZW46ICcyMDI2LTAzLTA1JyxcbiAgc291cmNlczogWydSZWRkaXQgci90ZWNoc3VwcG9ydCcsICdTY2FtV2F0Y2gnLCAnQ1lHVUFSRCBJbnRlbCddLFxuICByZXZpZXdzOiBbXG4gIHsgcGxhdGZvcm06ICdSZWRkaXQnLCB1c2VyOiAndS9JVEhlbHBEZXNrX1BybzI2JywgdGV4dDogJ0FJIHZvaWNlIGFzc2lzdGFudCBtYWtlcyBpdCBjb252aW5jaW5nLiBMb2NrcyBicm93c2VyIHRhYnMuIEN0cmwrU2hpZnQrVyBvciBUYXNrIE1hbmFnZXIgdG8gZXNjYXBlLicsIHN0YXJzOiAxLCBkYXRlOiAnNSBkYXlzIGFnbycgfSxcbiAgeyBwbGF0Zm9ybTogJ1JlZGRpdCcsIHVzZXI6ICd1L0VsZGVyQ2FyZUlUMjYnLCB0ZXh0OiAnVGFyZ2V0aW5nIHNlbmlvcnMgc3BlY2lmaWNhbGx5LiBFeHRyZW1lbHkgY29udmluY2luZyBBSSB2b2ljZSBtaW1pY2tpbmcgTWljcm9zb2Z0IHN1cHBvcnQuJywgc3RhcnM6IDEsIGRhdGU6ICcxIHdlZWsgYWdvJyB9XVxuXG59LFxue1xuICBpZDogNixcbiAgbmFtZTogJ2NsYXVkZS1haS1mcmVlLXVubGltaXRlZC5uZXQnLFxuICBjYXRlZ29yeTogJ01hbHdhcmUgRHJvcHBlcicsXG4gIHNldmVyaXR5OiAnaGlnaCcsXG4gIHRocmVhdF9zY29yZTogODEsXG4gIGRlc2NyaXB0aW9uOiAnRmFrZSBcInVubGltaXRlZCBDbGF1ZGUgQUlcIiBzaXRlIGRpc3RyaWJ1dGluZyBhbiBpbmZvc3RlYWxlciB0aGF0IHRhcmdldHMgc2F2ZWQgcGFzc3dvcmRzLCBjcnlwdG8gZXh0ZW5zaW9ucywgYW5kIHNlc3Npb24gY29va2llcyBmcm9tIG1ham9yIGJyb3dzZXJzLicsXG4gIHRhZ3M6IFsnSW5mb3N0ZWFsZXInLCAnQUkgQnJhbmQgQWJ1c2UnLCAnU2Vzc2lvbiBIaWphY2snXSxcbiAgcmVkZGl0X3Njb3JlOiA0LjUsXG4gIHJlZGRpdF9yZXZpZXdzOiAxMjQ0LFxuICBmaXJzdF9zZWVuOiAnMjAyNi0wMi0yOCcsXG4gIHNvdXJjZXM6IFsnTWFsd2FyZUJhemFhcicsICdDWUdVQVJEIFRocmVhdERCJywgJ1JlZGRpdCByL01hbHdhcmUnXSxcbiAgcmV2aWV3czogW1xuICB7IHBsYXRmb3JtOiAnUmVkZGl0JywgdXNlcjogJ3UvQUlTZWNXYXRjaCcsIHRleHQ6ICdFeHBsb2l0cyBwdWJsaWMgaW50ZXJlc3QgaW4gQUkgdG8gc3ByZWFkIGluZm9zdGVhbGVycy4gU3RlYWxzIEdvb2dsZS9HaXRIdWIgc2Vzc2lvbiB0b2tlbnMuJywgc3RhcnM6IDEsIGRhdGU6ICczIGRheXMgYWdvJyB9LFxuICB7IHBsYXRmb3JtOiAnUmVkZGl0JywgdXNlcjogJ3UvU3lzQWRtaW5fVmluY2UnLCB0ZXh0OiAnQW50aHJvcGljL09wZW5BSSBkbyBOT1Qgb2ZmZXIgc3RhbmRhbG9uZSBkb3dubG9hZGFibGUgY2xpZW50cyBmcm9tIHRoaXJkLXBhcnR5IHNpdGVzLicsIHN0YXJzOiAxLCBkYXRlOiAnMSB3ZWVrIGFnbycgfV1cblxufSxcbntcbiAgaWQ6IDcsXG4gIG5hbWU6ICdkZWVwZmFrZS1pZC12ZXJpZnkucHJvJyxcbiAgY2F0ZWdvcnk6ICdJZGVudGl0eSBUaGVmdCcsXG4gIHNldmVyaXR5OiAnY3JpdGljYWwnLFxuICB0aHJlYXRfc2NvcmU6IDk2LFxuICBkZXNjcmlwdGlvbjogJ1VzZXMgQUkgZGVlcGZha2UgbGl2ZW5lc3MgY2hlY2tzIHRvIHN0ZWFsIGdvdmVybm1lbnQgSUQgdXBsb2Fkcy4gSGFydmVzdHMgcGFzc3BvcnQgYW5kIElEIGNhcmQgaW1hZ2VzIGZvciBpZGVudGl0eSBmcmF1ZCByaW5ncyBvcGVyYXRpbmcgaW4gMjAyNi4nLFxuICB0YWdzOiBbJ0lkZW50aXR5IFRoZWZ0JywgJ0RlZXBmYWtlIEtZQycsICdEb2N1bWVudCBGcmF1ZCddLFxuICByZWRkaXRfc2NvcmU6IDQuOSxcbiAgcmVkZGl0X3Jldmlld3M6IDMxMDIsXG4gIGZpcnN0X3NlZW46ICcyMDI2LTAxLTE1JyxcbiAgc291cmNlczogWydDWUdVQVJEIEludGVsJywgJ0ZCSSBJQzMgMjAyNicsICdSZWRkaXQgci9TY2FtcyddLFxuICByZXZpZXdzOiBbXG4gIHsgcGxhdGZvcm06ICdSZWRkaXQnLCB1c2VyOiAndS9JREZyYXVkQWxlcnQyNicsIHRleHQ6ICdBc2tzIGZvciBwYXNzcG9ydCBzY2FuIHVuZGVyIGd1aXNlIG9mIFwiYWdlIHZlcmlmaWNhdGlvblwiLiBTZWxscyBkYXRhIHRvIGZyYXVkIHJpbmdzLiBSZXBvcnQgaW1tZWRpYXRlbHkuJywgc3RhcnM6IDEsIGRhdGU6ICcyIGRheXMgYWdvJyB9LFxuICB7IHBsYXRmb3JtOiAnUmVkZGl0JywgdXNlcjogJ3UvUHJpdmFjeVdhdGNoZG9nJywgdGV4dDogJ0xpbmtlZCB0byAyMDI2IGRhcmsgd2ViIG1hcmtldHBsYWNlIHNlbGxpbmcgdmVyaWZpZWQgSURzLiBDWUdVQVJEIGF1dG8tYmxvY2tzIHRoaXMgZG9tYWluLicsIHN0YXJzOiAxLCBkYXRlOiAnNCBkYXlzIGFnbycgfV1cblxufSxcbntcbiAgaWQ6IDgsXG4gIG5hbWU6ICdjaHJvbWUtZXh0ZW5zaW9uLXVwZGF0ZTI2Lnh5eicsXG4gIGNhdGVnb3J5OiAnTWFsd2FyZSBEcm9wcGVyJyxcbiAgc2V2ZXJpdHk6ICdtZWRpdW0nLFxuICB0aHJlYXRfc2NvcmU6IDc0LFxuICBkZXNjcmlwdGlvbjogJ0Zha2UgQ2hyb21lIGV4dGVuc2lvbiB1cGRhdGUgcHVzaCBwYWdlIHRoYXQgaW5zdGFsbHMgYSBtYWxpY2lvdXMgYnJvd3NlciBleHRlbnNpb24gaGFydmVzdGluZyBicm93c2luZyBoaXN0b3J5LCBjb29raWVzLCBhbmQgYmFua2luZyBjcmVkZW50aWFscy4nLFxuICB0YWdzOiBbJ0Jyb3dzZXIgRXh0ZW5zaW9uJywgJ0Nvb2tpZSBUaGVmdCcsICdGYWtlIFVwZGF0ZSddLFxuICByZWRkaXRfc2NvcmU6IDQuMyxcbiAgcmVkZGl0X3Jldmlld3M6IDg5MSxcbiAgZmlyc3Rfc2VlbjogJzIwMjYtMDQtMDEnLFxuICBzb3VyY2VzOiBbJ01hbHdhcmVCYXphYXInLCAnUmVkZGl0IHIvdGVjaHN1cHBvcnQnLCAnQ1lHVUFSRCBJbnRlbCddLFxuICByZXZpZXdzOiBbXG4gIHsgcGxhdGZvcm06ICdSZWRkaXQnLCB1c2VyOiAndS9DaHJvbWVTZWNXYXRjaCcsIHRleHQ6ICdDaHJvbWUgTkVWRVIgYXNrcyB5b3UgdG8gdXBkYXRlIGV4dGVuc2lvbnMgdmlhIGV4dGVybmFsIHdlYnNpdGVzLiBBbHdheXMgdXBkYXRlIGZyb20gY2hyb21lOi8vZXh0ZW5zaW9ucy4nLCBzdGFyczogMSwgZGF0ZTogJzEgd2VlayBhZ28nIH1dXG5cbn1dO1xuXG5cbmNvbnN0IHNldmVyaXR5Q29uZmlnID0ge1xuICBjcml0aWNhbDogeyBjb2xvcjogJ3RleHQtcmVkLTQwMCcsIGJnOiAnYmctcmVkLTQwMC8xMCcsIGJvcmRlcjogJ2JvcmRlci1yZWQtNDAwLzIwJywgbGFiZWw6ICdDcml0aWNhbCcgfSxcbiAgaGlnaDogeyBjb2xvcjogJ3RleHQtYW1iZXItNDAwJywgYmc6ICdiZy1hbWJlci00MDAvMTAnLCBib3JkZXI6ICdib3JkZXItYW1iZXItNDAwLzIwJywgbGFiZWw6ICdIaWdoJyB9LFxuICBtZWRpdW06IHsgY29sb3I6ICd0ZXh0LXllbGxvdy00MDAnLCBiZzogJ2JnLXllbGxvdy00MDAvMTAnLCBib3JkZXI6ICdib3JkZXIteWVsbG93LTQwMC8yMCcsIGxhYmVsOiAnTWVkaXVtJyB9XG59O1xuXG5jb25zdCBQTEFURk9STV9JQ09OUyA9IHtcbiAgUmVkZGl0OiBNZXNzYWdlQ2lyY2xlLFxuICBUcnVzdHBpbG90OiBTdGFyLFxuICBUd2l0dGVyOiBHbG9iZSxcbiAgU2NhbVdhdGNoOiBTaGllbGRJY29uXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGFnZ2VkU2l0ZXMoKSB7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnYWxsJyk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gTG9hZCBjb21tdW5pdHktcmVwb3J0ZWQgc2l0ZXMgZnJvbSBEQlxuICBjb25zdCB7IGRhdGE6IHJlcG9ydGVkU2l0ZXMgPSBbXSB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbJ3JlcG9ydGVkLXNpdGVzJ10sXG4gICAgcXVlcnlGbjogKCkgPT4gYmFzZTQ0LmVudGl0aWVzLlJlcG9ydGVkU2l0ZS5saXN0KCctcmVwb3J0X2NvdW50JywgMTAwKVxuICB9KTtcblxuICAvLyBDb252ZXJ0IHJlcG9ydGVkIHNpdGVzIHRvIHNhbWUgc2hhcGUgYXMgRkxBR0dFRF9TSVRFU1xuICBjb25zdCBjb21tdW5pdHlJdGVtcyA9IHJlcG9ydGVkU2l0ZXMubWFwKChyKSA9PiAoe1xuICAgIGlkOiBgci0ke3IuaWR9YCxcbiAgICBuYW1lOiByLmRvbWFpbixcbiAgICBjYXRlZ29yeTogci5jYXRlZ29yeSA/IHIuY2F0ZWdvcnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByLmNhdGVnb3J5LnNsaWNlKDEpIDogJ090aGVyJyxcbiAgICBzZXZlcml0eTogci5zZXZlcml0eSB8fCAnbWVkaXVtJyxcbiAgICB0aHJlYXRfc2NvcmU6IHIudGhyZWF0X3Njb3JlIHx8IDcwLFxuICAgIGRlc2NyaXB0aW9uOiByLmRlc2NyaXB0aW9uIHx8IGBDb21tdW5pdHktcmVwb3J0ZWQgJHtyLmNhdGVnb3J5IHx8ICdzdXNwaWNpb3VzJ30gd2Vic2l0ZS4gUmVwb3J0ZWQgJHtyLnJlcG9ydF9jb3VudCB8fCAxfSB0aW1lKHMpIGJ5IENZR1VBUkQgdXNlcnMuYCxcbiAgICB0YWdzOiBbJ0NvbW11bml0eSBSZXBvcnQnLCByLmNhdGVnb3J5ID8gci5jYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHIuY2F0ZWdvcnkuc2xpY2UoMSkgOiAnT3RoZXInXSxcbiAgICByZWRkaXRfcmV2aWV3czogci5yZXBvcnRfY291bnQgfHwgMSxcbiAgICBmaXJzdF9zZWVuOiByLmNyZWF0ZWRfZGF0ZSA/IG5ldyBEYXRlKHIuY3JlYXRlZF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gOiAnMjAyNicsXG4gICAgc291cmNlczogWydDWUdVQVJEIENvbW11bml0eSddLFxuICAgIHJldmlld3M6IFtdLFxuICAgIGlzQ29tbXVuaXR5OiB0cnVlXG4gIH0pKTtcblxuICAvLyBNZXJnZTogY29tbXVuaXR5IGZpcnN0IChieSByZXBvcnQgY291bnQpLCB0aGVuIHN0YXRpYyDigJQgZGVkdXBsaWNhdGUgYnkgZG9tYWluXG4gIGNvbnN0IGNvbW11bml0eURvbWFpbnMgPSBuZXcgU2V0KGNvbW11bml0eUl0ZW1zLm1hcCgoYykgPT4gYy5uYW1lKSk7XG4gIGNvbnN0IHN0YXRpY0ZpbHRlcmVkID0gRkxBR0dFRF9TSVRFUy5maWx0ZXIoKHMpID0+ICFjb21tdW5pdHlEb21haW5zLmhhcyhzLm5hbWUpKTtcbiAgY29uc3QgYWxsU2l0ZXMgPSBbLi4uY29tbXVuaXR5SXRlbXMsIC4uLnN0YXRpY0ZpbHRlcmVkXTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gWydhbGwnLCAnUGhpc2hpbmcnLCAnTWFsd2FyZScsICdDcnlwdG8gU2NhbScsICdTY2FtJywgJ1RlY2ggU3VwcG9ydCBTY2FtJywgJ090aGVyJ107XG5cbiAgY29uc3QgZmlsdGVyZWQgPSBhbGxTaXRlcy5maWx0ZXIoKHNpdGUpID0+IHtcbiAgICBjb25zdCBtYXRjaFNlYXJjaCA9IHNpdGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIHNpdGUuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgICBzaXRlLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnN0IG1hdGNoRmlsdGVyID0gZmlsdGVyID09PSAnYWxsJyB8fCBzaXRlLmNhdGVnb3J5LmluY2x1ZGVzKGZpbHRlcikgfHwgc2l0ZS50YWdzLnNvbWUoKHQpID0+IHQuaW5jbHVkZXMoZmlsdGVyKSk7XG4gICAgcmV0dXJuIG1hdGNoU2VhcmNoICYmIG1hdGNoRmlsdGVyO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjA1OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC00IG1kOnAtOCBtYXgtdy02eGwgbXgtYXV0b1wiPlxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjA2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjA3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItMVwiPlxuICAgICAgICAgIDxTaGllbGRBbGVydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyMDg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy03IGgtNyB0ZXh0LXJlZC00MDBcIiAvPlxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyMDk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiPkZsYWdnZWQgU2l0ZXM8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjExOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+Q29tbXVuaXR5LXZlcmlmaWVkIGRhbmdlcm91cyB3ZWJzaXRlcyDCtyA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyMTE6ODVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj5VcGRhdGVkIDIwMjY8L3NwYW4+IHRocmVhdCBpbnRlbGxpZ2VuY2U8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiBTdGF0cyAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjE1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00IG1iLTZcIj5cbiAgICAgICAge1tcbiAgICAgICAgeyBsYWJlbDogJ0ZsYWdnZWQgU2l0ZXMnLCB2YWx1ZTogYWxsU2l0ZXMubGVuZ3RoLCBjb2xvcjogJ3RleHQtcmVkLTQwMCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ0NvbW11bml0eSBSZXBvcnRzJywgdmFsdWU6IGNvbW11bml0eUl0ZW1zLmxlbmd0aCA+IDAgPyBjb21tdW5pdHlJdGVtcy5yZWR1Y2UoKGEsIGMpID0+IGEgKyAoYy5yZWRkaXRfcmV2aWV3cyB8fCAxKSwgMCkudG9Mb2NhbGVTdHJpbmcoKSA6ICcyNCwyMTgnLCBjb2xvcjogJ3RleHQtYW1iZXItNDAwJyB9LFxuICAgICAgICB7IGxhYmVsOiAnU291cmNlcyBNb25pdG9yZWQnLCB2YWx1ZTogJzE4JywgY29sb3I6ICd0ZXh0LXByaW1hcnknIH1dLlxuICAgICAgICBtYXAoKHMpID0+XG4gICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjIxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtzLmxhYmVsfSBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjIyMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCBmb250LW1vbm8gJHtzLmNvbG9yfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidmFsdWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cz8uaWQgfHwgcz8uX2lkfT57cy52YWx1ZX08L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyMjM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzPy5pZCB8fCBzPy5faWR9PntzLmxhYmVsfTwvcD5cbiAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU2VhcmNoICYgRmlsdGVyICovfVxuICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyMjk6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjIzMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtM1wiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjMxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xXCI+XG4gICAgICAgICAgICA8U2VhcmNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjIzMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyMzM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZsYWdnZWQgc2l0ZXMuLi5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTkgcHItNCBweS0yIHJvdW5kZWQtbGcgYmctc2Vjb25kYXJ5LzUwIGJvcmRlciBib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXByaW1hcnkvNTBcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyNDA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQsIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjI0MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBrZXk9e2NhdH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihjYXQpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsIGNhcGl0YWxpemUgJHtcbiAgICAgICAgICAgIGZpbHRlciA9PT0gY2F0ID8gJ2JnLXByaW1hcnkvMjAgdGV4dC1wcmltYXJ5IGJvcmRlciBib3JkZXItcHJpbWFyeS8zMCcgOiAnYmctc2Vjb25kYXJ5IHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBib3JkZXIgYm9yZGVyLWJvcmRlciBob3Zlcjp0ZXh0LWZvcmVncm91bmQnfWBcbiAgICAgICAgICAgIH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJjYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtjYXR9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dsYXNzQ2FyZD5cblxuICAgICAgey8qIEZsYWdnZWQgU2l0ZXMgTGlzdCAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjU3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAge2ZpbHRlcmVkLm1hcCgoc2l0ZSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNldiA9IHNldmVyaXR5Q29uZmlnW3NpdGUuc2V2ZXJpdHldO1xuICAgICAgICAgIGNvbnN0IGlzT3BlbiA9IGV4cGFuZGVkID09PSBzaXRlLmlkO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyNjI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3NpdGUuaWR9IGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTYgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19IHRyYW5zaXRpb249e3sgZGVsYXk6IGkgKiAwLjA0IH19IGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzaXRlPy5pZH0+XG4gICAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjYzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBjbGFzc05hbWU9e2Bib3JkZXIgJHtzZXYuYm9yZGVyfWB9PlxuICAgICAgICAgICAgICAgIHsvKiBNYWluIHJvdyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjI2NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjI2NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTMgZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyNjc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyAke3Nldi5iZ30gYm9yZGVyICR7c2V2LmJvcmRlcn0gZmxleC1zaHJpbmstMCBtdC0wLjVgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyNjg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTQgaC00ICR7c2V2LmNvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjI3MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyNzE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiaXNDb21tdW5pdHlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2l0ZT8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjcyOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzaXRlPy5pZH0+e3NpdGUubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyNzM6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXhzIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkICR7c2V2LmJnfSAke3Nldi5jb2xvcn0gYm9yZGVyICR7c2V2LmJvcmRlcn1gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Nldj8uaWR9PntzZXYubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6Mjc0OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgYmctc2Vjb25kYXJ5IGJvcmRlciBib3JkZXItYm9yZGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY2F0ZWdvcnlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2l0ZT8uaWR9PntzaXRlLmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaXRlLmlzQ29tbXVuaXR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyNzY6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCBib3JkZXIgYm9yZGVyLXByaW1hcnkvMjAgdGV4dC1wcmltYXJ5IGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjI3NzoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTIuNSBoLTIuNVwiIC8+IENvbW11bml0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MjgxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItMlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVzY3JpcHRpb25cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2l0ZT8uaWR9PntzaXRlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjI4MjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0xLjUgbWItMlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGFnc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzaXRlPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2l0ZS50YWdzLm1hcCgodGFnKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6Mjg0OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzUgdGV4dC1wcmltYXJ5IGJvcmRlciBib3JkZXItcHJpbWFyeS8xNVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGFnXCI+e3RhZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6Mjg3OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0zIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyODg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPjxUcmVuZGluZ1VwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjI4ODo2NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtcmVkLTQwMFwiIC8+IFRocmVhdDogPHN0cm9uZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyODg6MTIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0aHJlYXRfc2NvcmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2l0ZT8uaWR9PntzaXRlLnRocmVhdF9zY29yZX0vMTAwPC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6Mjg5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJlZGRpdF9yZXZpZXdzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NpdGU/LmlkfT48TWVzc2FnZVNxdWFyZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyODk6NjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+IHtzaXRlLnJlZGRpdF9yZXZpZXdzLnRvTG9jYWxlU3RyaW5nKCl9IHtzaXRlLmlzQ29tbXVuaXR5ID8gJ3VzZXIgcmVwb3J0KHMpJyA6ICdyZXBvcnRzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyOTA6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImZpcnN0X3NlZW5cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2l0ZT8uaWR9PkZpcnN0IHNlZW46IHtzaXRlLmZpcnN0X3NlZW59PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczoyOTQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoaXNPcGVuID8gbnVsbCA6IHNpdGUuaWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXByaW1hcnkgaG92ZXI6dW5kZXJsaW5lIGZsZXgtc2hyaW5rLTAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gPyAnSGlkZSByZXZpZXdzJyA6ICdWaWV3IHJldmlld3MnfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogU291cmNlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMwMzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG10LTMgcHQtMyBib3JkZXItdCBib3JkZXItYm9yZGVyXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzb3VyY2VzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NpdGU/LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMwNDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlNvdXJjZXM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAge3NpdGUuc291cmNlcy5tYXAoKHNyYykgPT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMwNjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c3JjfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnkgYm9yZGVyIGJvcmRlci1ib3JkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzcmNcIj57c3JjfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUmV2aWV3cyAoZXhwYW5kYWJsZSkgKi99XG4gICAgICAgICAgICAgICAge2lzT3BlbiAmJlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMxMjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgaGVpZ2h0OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgaGVpZ2h0OiAnYXV0bycgfX0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJldmlld3NcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2l0ZT8uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZsYWdnZWRTaXRlczozMTM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5Db21tdW5pdHkgUmV2aWV3czwvcD5cbiAgICAgICAgICAgICAgICAgICAge3NpdGUucmV2aWV3cy5tYXAoKHJldiwgcmkpID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMxNToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17cml9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTMgcC0zIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzQwIGJvcmRlciBib3JkZXItYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtjb25zdCBQSSA9IFBMQVRGT1JNX0lDT05TW3Jldi5wbGF0Zm9ybV0gfHwgTWVzc2FnZUNpcmNsZTtyZXR1cm4gPFBJIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMxNjo5OVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmbGV4LXNocmluay0wIG10LTAuNVwiIC8+O30pKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMxNzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMxODoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GbGFnZ2VkU2l0ZXM6MzE5OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidXNlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXY/LmlkfT57cmV2LnVzZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMyMDoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicGxhdGZvcm1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmV2Py5pZH0+e3Jldi5wbGF0Zm9ybX0gwrcge3Jldi5kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMyMjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGV4dFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXY/LmlkfT57cmV2LnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMyMzoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggbXQtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5KDUpLmZpbGwoMCkubWFwKChfLCBzaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmxhZ2dlZFNpdGVzOjMyNTozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c2l9IGNsYXNzTmFtZT17YHctMyBoLTMgJHtzaSA8IHJldi5zdGFycyA/ICd0ZXh0LWFtYmVyLTQwMCBmaWxsLWFtYmVyLTQwMCcgOiAndGV4dC1tdXRlZC1mb3JlZ3JvdW5kJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pO1xuXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvRmxhZ2dlZFNpdGVzLmpzeCJ9