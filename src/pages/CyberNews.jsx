import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/CyberNews.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/CyberNews.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3049f6b1"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=3049f6b1";
import { base44 } from "/src/api/base44Client.js";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=cc9a851a";
import { Newspaper, RefreshCw, ExternalLink, AlertTriangle, Shield, Clock, TrendingUp, Loader2, Wifi, Database, Bug, Lock, Eye, Skull, FileText } from "/node_modules/.vite/deps/lucide-react.js?v=68d8ce9e";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
const NEWS_CATEGORIES = ["All", "Breaches", "Malware", "Vulnerabilities", "Privacy", "Ransomware"];
const CATEGORY_IMAGES = {
  Breaches: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=200&fit=crop",
  Malware: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
  Vulnerabilities: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop",
  Privacy: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
  Ransomware: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&h=200&fit=crop"
};
const STATIC_NEWS = [
  {
    title: "AT&T Data Breach Exposes 73 Million Customer Records",
    category: "Breaches",
    severity: "critical",
    summary: "AT&T confirmed a massive data breach affecting approximately 73 million current and former customers. Leaked data includes Social Security numbers, passcodes, and full names from 2019 or earlier.",
    source: "BleepingComputer",
    date: "2024-03-30",
    url: "https://www.bleepingcomputer.com",
    tags: ["AT&T", "Data Breach", "SSN Leaked"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=200&fit=crop"
  },
  {
    title: "Change Healthcare Ransomware Attack Disrupts US Healthcare",
    category: "Ransomware",
    severity: "critical",
    summary: "A ransomware attack on Change Healthcare disrupted prescription processing across thousands of US pharmacies. ALPHV/BlackCat ransomware group claimed responsibility.",
    source: "Krebs on Security",
    date: "2024-02-21",
    url: "https://krebsonsecurity.com",
    tags: ["Healthcare", "ALPHV", "Ransomware"],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&h=200&fit=crop"
  },
  {
    title: "Ivanti Zero-Days Exploited in Mass Attack on VPN Devices",
    category: "Vulnerabilities",
    severity: "high",
    summary: "Multiple zero-day vulnerabilities in Ivanti Connect Secure VPN were exploited by nation-state actors, affecting thousands of organizations worldwide.",
    source: "The Hacker News",
    date: "2024-01-19",
    url: "https://thehackernews.com",
    tags: ["Zero-day", "VPN", "Nation-state"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop"
  },
  {
    title: "New Phishing Kit Bypasses 2FA on Microsoft 365 Accounts",
    category: "Malware",
    severity: "high",
    summary: 'A sophisticated phishing kit called "Tycoon 2FA" uses adversary-in-the-middle techniques to bypass multi-factor authentication on Microsoft 365 and Gmail accounts.',
    source: "BleepingComputer",
    date: "2024-03-15",
    url: "https://www.bleepingcomputer.com",
    tags: ["Phishing", "2FA Bypass", "Microsoft 365"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop"
  },
  {
    title: "LastPass Breach Aftermath: Hackers Steal $4.4M in Crypto",
    category: "Breaches",
    severity: "high",
    summary: "Hackers linked to the 2022 LastPass breach stole an additional $4.4 million in cryptocurrency by exploiting encrypted vault data stolen in the attack.",
    source: "ZDNet",
    date: "2023-10-25",
    url: "https://www.zdnet.com",
    tags: ["LastPass", "Crypto", "Password Manager"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=200&fit=crop"
  },
  {
    title: "XZ Utils Backdoor Discovered in Linux Supply Chain Attack",
    category: "Vulnerabilities",
    severity: "critical",
    summary: "A sophisticated backdoor was discovered in XZ Utils, a compression library used widely in Linux. The attack was a 2-year coordinated supply chain operation.",
    source: "Ars Technica",
    date: "2024-03-29",
    url: "https://arstechnica.com",
    tags: ["Linux", "Supply Chain", "Backdoor"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop"
  },
  {
    title: "Meta Fined €1.2B for GDPR Violations Over Data Transfers",
    category: "Privacy",
    severity: "medium",
    summary: "Meta was fined a record €1.2 billion by Ireland's Data Protection Commission for illegally transferring EU user data to the US without adequate safeguards.",
    source: "The Guardian",
    date: "2023-05-22",
    url: "https://www.theguardian.com",
    tags: ["Meta", "GDPR", "Privacy Fine"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop"
  },
  {
    title: "Midnight Blizzard Breaches Microsoft Executive Emails",
    category: "Breaches",
    severity: "high",
    summary: "Russian nation-state group Midnight Blizzard (APT29/Cozy Bear) breached Microsoft corporate email accounts including senior leadership, using password spray attacks.",
    source: "Microsoft Security Blog",
    date: "2024-01-19",
    url: "https://msrc.microsoft.com",
    tags: ["Microsoft", "APT29", "Nation-state"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=200&fit=crop"
  }
];
const severityConfig = {
  critical: { color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20", dot: "bg-red-400" },
  high: { color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", dot: "bg-amber-400" },
  medium: { color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20", dot: "bg-yellow-400" },
  low: { color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", dot: "bg-emerald-400" }
};
const CATEGORY_ICONS = {
  Breaches: Database,
  Malware: Bug,
  Vulnerabilities: Lock,
  Privacy: Eye,
  Ransomware: Skull,
  All: FileText
};
export default function CyberNews() {
  _s();
  const [category, setCategory] = useState("All");
  const [aiNews, setAiNews] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const fetchLiveNews = async () => {
    setLoadingAI(true);
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a cybersecurity news aggregator. Provide 6 recent and realistic cybersecurity news items from 2024-2025 covering data breaches, malware campaigns, vulnerabilities, ransomware, and privacy violations. Make them detailed and realistic with actual company names and events.`,
      add_context_from_internet: true,
      response_json_schema: {
        type: "object",
        properties: {
          news: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                category: { type: "string", enum: ["Breaches", "Malware", "Vulnerabilities", "Privacy", "Ransomware"] },
                severity: { type: "string", enum: ["critical", "high", "medium", "low"] },
                summary: { type: "string" },
                source: { type: "string" },
                date: { type: "string" },
                tags: { type: "array", items: { type: "string" } }
              }
            }
          }
        }
      }
    });
    setAiNews(res.news || null);
    setLoadingAI(false);
  };
  const newsItems = aiNews || STATIC_NEWS;
  const filtered = category === "All" ? newsItems : newsItems.filter((n) => n.category === category);
  const criticalCount = newsItems.filter((n) => n.severity === "critical").length;
  const breachCount = newsItems.filter((n) => n.category === "Breaches").length;
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:170:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/CyberNews:171:6", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-8", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:172:8", "data-dynamic-content": "true", className: "flex items-center justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:173:10", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(Newspaper, { "data-source-location": "pages/CyberNews:174:12", "data-dynamic-content": "false", className: "w-7 h-7 text-primary" }, void 0, false, {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 193,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:175:12", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/CyberNews:176:14", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Cyber News" }, void 0, false, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 195,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CyberNews:177:14", "data-dynamic-content": "false", className: "text-muted-foreground text-sm", children: "Latest breaches, threats & cybersecurity updates" }, void 0, false, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 196,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 194,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/CyberNews.jsx",
        lineNumber: 192,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/CyberNews:180:10", "data-dynamic-content": "true", variant: "secondary", size: "sm", onClick: fetchLiveNews, disabled: loadingAI, children: [
        loadingAI ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/CyberNews:181:25", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 200,
          columnNumber: 26
        }, this) : /* @__PURE__ */ jsxDEV(Wifi, { "data-source-location": "pages/CyberNews:181:72", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 200,
          columnNumber: 148
        }, this),
        loadingAI ? "Fetching Live..." : "Fetch Live News"
      ] }, void 0, true, {
        fileName: "/app/src/pages/CyberNews.jsx",
        lineNumber: 199,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/CyberNews.jsx",
      lineNumber: 191,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/CyberNews.jsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    criticalCount > 0 && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/CyberNews:189:8", "data-dynamic-content": "true", initial: { opacity: 0 }, animate: { opacity: 1 }, className: "mb-6 p-4 rounded-xl bg-red-400/5 border border-red-400/20 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "pages/CyberNews:190:10", "data-dynamic-content": "false", className: "w-5 h-5 text-red-400 flex-shrink-0" }, void 0, false, {
        fileName: "/app/src/pages/CyberNews.jsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CyberNews:191:10", "data-dynamic-content": "true", className: "text-sm text-red-400 font-medium", "data-collection-item-field": "criticalCount", children: [
        criticalCount,
        " critical security incidents reported. Review immediately."
      ] }, void 0, true, {
        fileName: "/app/src/pages/CyberNews.jsx",
        lineNumber: 210,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/CyberNews.jsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:196:6", "data-dynamic-content": "true", className: "grid grid-cols-3 gap-4 mb-6", children: [
      { label: "News Items", value: newsItems.length, color: "text-primary" },
      { label: "Critical Alerts", value: criticalCount, color: "text-red-400" },
      { label: "Data Breaches", value: breachCount, color: "text-amber-400" }
    ].map(
      (s) => /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/CyberNews:202:10", "data-dynamic-content": "true", hover: false, className: "text-center py-4", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CyberNews:203:12", "data-dynamic-content": "true", className: `text-2xl font-bold font-mono ${s.color}`, "data-collection-item-field": "value", "data-collection-item-id": s?.id || s?._id, children: s.value }, void 0, false, {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 222,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CyberNews:204:12", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-1", "data-collection-item-field": "label", "data-collection-item-id": s?.id || s?._id, children: s.label }, void 0, false, {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 223,
          columnNumber: 13
        }, this)
      ] }, s.label, true, {
        fileName: "/app/src/pages/CyberNews.jsx",
        lineNumber: 221,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/app/src/pages/CyberNews.jsx",
      lineNumber: 215,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:210:6", "data-dynamic-content": "true", className: "flex gap-2 flex-wrap mb-6", children: NEWS_CATEGORIES.map((cat, __arrIdx__) => {
      const CatIcon = CATEGORY_ICONS[cat] || FileText;
      return /* @__PURE__ */ jsxDEV(
        "button",
        {
          "data-source-location": "pages/CyberNews:214:12",
          "data-dynamic-content": "true",
          onClick: () => setCategory(cat),
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${category === cat ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary text-muted-foreground border border-border hover:text-foreground"}`,
          "data-arr-index": __arrIdx__,
          "data-arr-variable-name": "NEWS_CATEGORIES",
          children: [
            /* @__PURE__ */ jsxDEV(CatIcon, { "data-source-location": "pages/CyberNews:221:14", "data-dynamic-content": "false", className: "w-3 h-3", "data-arr-index": __arrIdx__, "data-arr-variable-name": "NEWS_CATEGORIES" }, void 0, false, {
              fileName: "/app/src/pages/CyberNews.jsx",
              lineNumber: 240,
              columnNumber: 15
            }, this),
            " ",
            cat
          ]
        },
        cat,
        true,
        {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 233,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "/app/src/pages/CyberNews.jsx",
      lineNumber: 229,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:228:6", "data-dynamic-content": "true", className: "grid md:grid-cols-2 gap-4", children: filtered.map((item, i) => {
      const sev = severityConfig[item.severity] || severityConfig.medium;
      const thumbnail = item.image || CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES["Breaches"];
      return /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/CyberNews:233:12", "data-dynamic-content": "true", initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.05 }, children: /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/CyberNews:234:14", "data-dynamic-content": "true", hover: true, className: `h-full border ${sev.border} overflow-hidden !p-0`, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:236:16", "data-dynamic-content": "true", className: "relative h-36 overflow-hidden rounded-t-2xl", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              "data-source-location": "pages/CyberNews:237:18",
              "data-dynamic-content": "true",
              src: thumbnail,
              alt: item.title,
              className: "w-full h-full object-cover",
              onError: (e) => {
                e.target.style.display = "none";
              }
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/CyberNews.jsx",
              lineNumber: 256,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:243:18", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" }, void 0, false, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 262,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:245:18", "data-dynamic-content": "true", className: "absolute top-2 left-2 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CyberNews:246:20", "data-dynamic-content": "true", className: `text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${sev.bg} ${sev.color} border ${sev.border} backdrop-blur-sm`, "data-collection-item-field": "severity", "data-collection-item-id": item?.id || item?._id, children: item.severity }, void 0, false, {
              fileName: "/app/src/pages/CyberNews.jsx",
              lineNumber: 265,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CyberNews:249:20", "data-dynamic-content": "true", className: "text-[10px] text-muted-foreground bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-border", "data-collection-item-field": "category", "data-collection-item-id": item?.id || item?._id, children: item.category }, void 0, false, {
              fileName: "/app/src/pages/CyberNews.jsx",
              lineNumber: 268,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 264,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:251:18", "data-dynamic-content": "true", className: `absolute top-2 right-2 w-2.5 h-2.5 rounded-full ${sev.dot} shadow-lg` }, void 0, false, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 270,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 255,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:255:16", "data-dynamic-content": "true", className: "p-4", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/CyberNews:256:18", "data-dynamic-content": "true", className: "text-sm font-bold text-foreground mb-2 leading-tight", "data-collection-item-field": "title", "data-collection-item-id": item?.id || item?._id, children: item.title }, void 0, false, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 275,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CyberNews:257:18", "data-dynamic-content": "true", className: "text-xs text-muted-foreground leading-relaxed mb-3", "data-collection-item-field": "summary", "data-collection-item-id": item?.id || item?._id, children: item.summary }, void 0, false, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 276,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:259:18", "data-dynamic-content": "true", className: "flex flex-wrap gap-1 mb-3", children: (item.tags || []).map(
            (tag) => /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CyberNews:261:22", "data-dynamic-content": "true", className: "text-[10px] px-1.5 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/15", "data-collection-item-field": "tag", children: tag }, tag, false, {
              fileName: "/app/src/pages/CyberNews.jsx",
              lineNumber: 280,
              columnNumber: 21
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 278,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:265:18", "data-dynamic-content": "true", className: "flex items-center justify-between pt-3 border-t border-border", "data-collection-item-field": "url", "data-collection-item-id": item?.id || item?._id, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CyberNews:266:20", "data-dynamic-content": "true", className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "pages/CyberNews:267:22", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                fileName: "/app/src/pages/CyberNews.jsx",
                lineNumber: 286,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CyberNews:268:22", "data-dynamic-content": "true", "data-collection-item-field": "date", "data-collection-item-id": item?.id || item?._id, children: item.date }, void 0, false, {
                fileName: "/app/src/pages/CyberNews.jsx",
                lineNumber: 287,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CyberNews:269:22", "data-dynamic-content": "false", children: "·" }, void 0, false, {
                fileName: "/app/src/pages/CyberNews.jsx",
                lineNumber: 288,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CyberNews:270:22", "data-dynamic-content": "true", className: "font-medium text-foreground", "data-collection-item-field": "source", "data-collection-item-id": item?.id || item?._id, children: item.source }, void 0, false, {
                fileName: "/app/src/pages/CyberNews.jsx",
                lineNumber: 289,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/CyberNews.jsx",
              lineNumber: 285,
              columnNumber: 21
            }, this),
            item.url && /* @__PURE__ */ jsxDEV("a", { "data-source-location": "pages/CyberNews:273:22", "data-dynamic-content": "true", href: item.url, target: "_blank", rel: "noopener noreferrer", className: "text-xs text-primary hover:underline flex items-center gap-1", children: [
              "Read ",
              /* @__PURE__ */ jsxDEV(ExternalLink, { "data-source-location": "pages/CyberNews:274:29", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                fileName: "/app/src/pages/CyberNews.jsx",
                lineNumber: 293,
                columnNumber: 30
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/CyberNews.jsx",
              lineNumber: 292,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CyberNews.jsx",
            lineNumber: 284,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CyberNews.jsx",
          lineNumber: 274,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/CyberNews.jsx",
        lineNumber: 253,
        columnNumber: 15
      }, this) }, i, false, {
        fileName: "/app/src/pages/CyberNews.jsx",
        lineNumber: 252,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/src/pages/CyberNews.jsx",
      lineNumber: 247,
      columnNumber: 7
    }, this),
    aiNews && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CyberNews:286:8", "data-dynamic-content": "false", className: "text-center text-xs text-muted-foreground mt-6", children: "Live news fetched via AI — may contain synthesized summaries." }, void 0, false, {
      fileName: "/app/src/pages/CyberNews.jsx",
      lineNumber: 305,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/CyberNews.jsx",
    lineNumber: 189,
    columnNumber: 5
  }, this);
}
_s(CyberNews, "wy+ZfBVFqK19njPEiKr+MFLCKlA=");
_c = CyberNews;
var _c;
$RefreshReg$(_c, "CyberNews");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/CyberNews.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/CyberNews.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUksdUJBQXNCLFdBQVUsZ0VBQThEO0FBQUE7QUFBQSxjQUN0TSx1QkFBQyxnQkFBYSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsYUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNEc7QUFBQSxpQkFEckg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFRTtBQUFBLGVBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFZQTtBQUFBLGFBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF1QkE7QUFBQSxXQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNkNBLEtBOUN5RnFELEdBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUErQ0E7QUFBQSxJQUVKLENBQUMsS0F0REg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXVEQTtBQUFBLElBRUNwQyxVQUNELHVCQUFDLE9BQUUsd0JBQXFCLHlCQUF3Qix3QkFBcUIsU0FBUSxXQUFVLGtEQUFpRCw2RUFBeEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxTTtBQUFBLE9BcEh2TTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBc0hBO0FBRUo7QUFBQ0YsR0FsS3VCRCxXQUFTO0FBQUEsS0FBVEE7QUFBUyxJQUFBZ0Q7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsImJhc2U0NCIsInVzZVF1ZXJ5IiwiTmV3c3BhcGVyIiwiUmVmcmVzaEN3IiwiRXh0ZXJuYWxMaW5rIiwiQWxlcnRUcmlhbmdsZSIsIlNoaWVsZCIsIkNsb2NrIiwiVHJlbmRpbmdVcCIsIkxvYWRlcjIiLCJXaWZpIiwiRGF0YWJhc2UiLCJCdWciLCJMb2NrIiwiRXllIiwiU2t1bGwiLCJGaWxlVGV4dCIsIkdsYXNzQ2FyZCIsIk5lb25CdXR0b24iLCJORVdTX0NBVEVHT1JJRVMiLCJDQVRFR09SWV9JTUFHRVMiLCJCcmVhY2hlcyIsIk1hbHdhcmUiLCJWdWxuZXJhYmlsaXRpZXMiLCJQcml2YWN5IiwiUmFuc29td2FyZSIsIlNUQVRJQ19ORVdTIiwidGl0bGUiLCJjYXRlZ29yeSIsInNldmVyaXR5Iiwic3VtbWFyeSIsInNvdXJjZSIsImRhdGUiLCJ1cmwiLCJ0YWdzIiwiaW1hZ2UiLCJzZXZlcml0eUNvbmZpZyIsImNyaXRpY2FsIiwiY29sb3IiLCJiZyIsImJvcmRlciIsImRvdCIsImhpZ2giLCJtZWRpdW0iLCJsb3ciLCJDQVRFR09SWV9JQ09OUyIsIkFsbCIsIkN5YmVyTmV3cyIsIl9zIiwic2V0Q2F0ZWdvcnkiLCJhaU5ld3MiLCJzZXRBaU5ld3MiLCJsb2FkaW5nQUkiLCJzZXRMb2FkaW5nQUkiLCJmZXRjaExpdmVOZXdzIiwicmVzIiwiaW50ZWdyYXRpb25zIiwiQ29yZSIsIkludm9rZUxMTSIsInByb21wdCIsImFkZF9jb250ZXh0X2Zyb21faW50ZXJuZXQiLCJyZXNwb25zZV9qc29uX3NjaGVtYSIsInR5cGUiLCJwcm9wZXJ0aWVzIiwibmV3cyIsIml0ZW1zIiwiZW51bSIsIm5ld3NJdGVtcyIsImZpbHRlcmVkIiwiZmlsdGVyIiwibiIsImNyaXRpY2FsQ291bnQiLCJsZW5ndGgiLCJicmVhY2hDb3VudCIsIm9wYWNpdHkiLCJ5IiwibGFiZWwiLCJ2YWx1ZSIsIm1hcCIsInMiLCJpZCIsIl9pZCIsImNhdCIsIl9fYXJySWR4X18iLCJDYXRJY29uIiwiaXRlbSIsImkiLCJzZXYiLCJ0aHVtYm5haWwiLCJkZWxheSIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImRpc3BsYXkiLCJ0YWciLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDeWJlck5ld3MuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSAnQC9hcGkvYmFzZTQ0Q2xpZW50JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IE5ld3NwYXBlciwgUmVmcmVzaEN3LCBFeHRlcm5hbExpbmssIEFsZXJ0VHJpYW5nbGUsIFNoaWVsZCwgQ2xvY2ssIFRyZW5kaW5nVXAsIExvYWRlcjIsIFdpZmksIERhdGFiYXNlLCBCdWcsIExvY2ssIEV5ZSwgU2t1bGwsIEZpbGVUZXh0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBHbGFzc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy91aS1jdXN0b20vR2xhc3NDYXJkJztcbmltcG9ydCBOZW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL05lb25CdXR0b24nO1xuXG5jb25zdCBORVdTX0NBVEVHT1JJRVMgPSBbJ0FsbCcsICdCcmVhY2hlcycsICdNYWx3YXJlJywgJ1Z1bG5lcmFiaWxpdGllcycsICdQcml2YWN5JywgJ1JhbnNvbXdhcmUnXTtcblxuLy8gVGh1bWJuYWlsIGltYWdlcyBwZXIgY2F0ZWdvcnkgZnJvbSBVbnNwbGFzaFxuY29uc3QgQ0FURUdPUllfSU1BR0VTID0ge1xuICBCcmVhY2hlczogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE0MDY0NjQxOTM4LTNiYmVlNTI5NDJjNz93PTQwMCZoPTIwMCZmaXQ9Y3JvcCcsXG4gIE1hbHdhcmU6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1NTk0OTk2My1hYTc5ZGNlZTk4MWM/dz00MDAmaD0yMDAmZml0PWNyb3AnLFxuICBWdWxuZXJhYmlsaXRpZXM6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2Mzk4Njc2ODYwOS0zMjJkYTEzNTc1ZjM/dz00MDAmaD0yMDAmZml0PWNyb3AnLFxuICBQcml2YWN5OiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTYzMjEzMTg0MjMtZjA2Zjg1ZTUwNGIzP3c9NDAwJmg9MjAwJmZpdD1jcm9wJyxcbiAgUmFuc29td2FyZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTEwNTExNDU5MDE5LTVkZGE3NzI0ZmQ4Nz93PTQwMCZoPTIwMCZmaXQ9Y3JvcCdcbn07XG5cbi8vIEZhbGxiYWNrIHN0YXRpYyBuZXdzIGluIGNhc2UgQUkgZmV0Y2ggZmFpbHNcbmNvbnN0IFNUQVRJQ19ORVdTID0gW1xue1xuICB0aXRsZTogJ0FUJlQgRGF0YSBCcmVhY2ggRXhwb3NlcyA3MyBNaWxsaW9uIEN1c3RvbWVyIFJlY29yZHMnLFxuICBjYXRlZ29yeTogJ0JyZWFjaGVzJyxcbiAgc2V2ZXJpdHk6ICdjcml0aWNhbCcsXG4gIHN1bW1hcnk6ICdBVCZUIGNvbmZpcm1lZCBhIG1hc3NpdmUgZGF0YSBicmVhY2ggYWZmZWN0aW5nIGFwcHJveGltYXRlbHkgNzMgbWlsbGlvbiBjdXJyZW50IGFuZCBmb3JtZXIgY3VzdG9tZXJzLiBMZWFrZWQgZGF0YSBpbmNsdWRlcyBTb2NpYWwgU2VjdXJpdHkgbnVtYmVycywgcGFzc2NvZGVzLCBhbmQgZnVsbCBuYW1lcyBmcm9tIDIwMTkgb3IgZWFybGllci4nLFxuICBzb3VyY2U6ICdCbGVlcGluZ0NvbXB1dGVyJyxcbiAgZGF0ZTogJzIwMjQtMDMtMzAnLFxuICB1cmw6ICdodHRwczovL3d3dy5ibGVlcGluZ2NvbXB1dGVyLmNvbScsXG4gIHRhZ3M6IFsnQVQmVCcsICdEYXRhIEJyZWFjaCcsICdTU04gTGVha2VkJ10sXG4gIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTQwNjQ2NDE5MzgtM2JiZWU1Mjk0MmM3P3c9NDAwJmg9MjAwJmZpdD1jcm9wJ1xufSxcbntcbiAgdGl0bGU6ICdDaGFuZ2UgSGVhbHRoY2FyZSBSYW5zb213YXJlIEF0dGFjayBEaXNydXB0cyBVUyBIZWFsdGhjYXJlJyxcbiAgY2F0ZWdvcnk6ICdSYW5zb213YXJlJyxcbiAgc2V2ZXJpdHk6ICdjcml0aWNhbCcsXG4gIHN1bW1hcnk6ICdBIHJhbnNvbXdhcmUgYXR0YWNrIG9uIENoYW5nZSBIZWFsdGhjYXJlIGRpc3J1cHRlZCBwcmVzY3JpcHRpb24gcHJvY2Vzc2luZyBhY3Jvc3MgdGhvdXNhbmRzIG9mIFVTIHBoYXJtYWNpZXMuIEFMUEhWL0JsYWNrQ2F0IHJhbnNvbXdhcmUgZ3JvdXAgY2xhaW1lZCByZXNwb25zaWJpbGl0eS4nLFxuICBzb3VyY2U6ICdLcmVicyBvbiBTZWN1cml0eScsXG4gIGRhdGU6ICcyMDI0LTAyLTIxJyxcbiAgdXJsOiAnaHR0cHM6Ly9rcmVic29uc2VjdXJpdHkuY29tJyxcbiAgdGFnczogWydIZWFsdGhjYXJlJywgJ0FMUEhWJywgJ1JhbnNvbXdhcmUnXSxcbiAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMDUxMTQ1OTAxOS01ZGRhNzcyNGZkODc/dz00MDAmaD0yMDAmZml0PWNyb3AnXG59LFxue1xuICB0aXRsZTogJ0l2YW50aSBaZXJvLURheXMgRXhwbG9pdGVkIGluIE1hc3MgQXR0YWNrIG9uIFZQTiBEZXZpY2VzJyxcbiAgY2F0ZWdvcnk6ICdWdWxuZXJhYmlsaXRpZXMnLFxuICBzZXZlcml0eTogJ2hpZ2gnLFxuICBzdW1tYXJ5OiAnTXVsdGlwbGUgemVyby1kYXkgdnVsbmVyYWJpbGl0aWVzIGluIEl2YW50aSBDb25uZWN0IFNlY3VyZSBWUE4gd2VyZSBleHBsb2l0ZWQgYnkgbmF0aW9uLXN0YXRlIGFjdG9ycywgYWZmZWN0aW5nIHRob3VzYW5kcyBvZiBvcmdhbml6YXRpb25zIHdvcmxkd2lkZS4nLFxuICBzb3VyY2U6ICdUaGUgSGFja2VyIE5ld3MnLFxuICBkYXRlOiAnMjAyNC0wMS0xOScsXG4gIHVybDogJ2h0dHBzOi8vdGhlaGFja2VybmV3cy5jb20nLFxuICB0YWdzOiBbJ1plcm8tZGF5JywgJ1ZQTicsICdOYXRpb24tc3RhdGUnXSxcbiAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2Mzk4Njc2ODYwOS0zMjJkYTEzNTc1ZjM/dz00MDAmaD0yMDAmZml0PWNyb3AnXG59LFxue1xuICB0aXRsZTogJ05ldyBQaGlzaGluZyBLaXQgQnlwYXNzZXMgMkZBIG9uIE1pY3Jvc29mdCAzNjUgQWNjb3VudHMnLFxuICBjYXRlZ29yeTogJ01hbHdhcmUnLFxuICBzZXZlcml0eTogJ2hpZ2gnLFxuICBzdW1tYXJ5OiAnQSBzb3BoaXN0aWNhdGVkIHBoaXNoaW5nIGtpdCBjYWxsZWQgXCJUeWNvb24gMkZBXCIgdXNlcyBhZHZlcnNhcnktaW4tdGhlLW1pZGRsZSB0ZWNobmlxdWVzIHRvIGJ5cGFzcyBtdWx0aS1mYWN0b3IgYXV0aGVudGljYXRpb24gb24gTWljcm9zb2Z0IDM2NSBhbmQgR21haWwgYWNjb3VudHMuJyxcbiAgc291cmNlOiAnQmxlZXBpbmdDb21wdXRlcicsXG4gIGRhdGU6ICcyMDI0LTAzLTE1JyxcbiAgdXJsOiAnaHR0cHM6Ly93d3cuYmxlZXBpbmdjb21wdXRlci5jb20nLFxuICB0YWdzOiBbJ1BoaXNoaW5nJywgJzJGQSBCeXBhc3MnLCAnTWljcm9zb2Z0IDM2NSddLFxuICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU1OTQ5OTYzLWFhNzlkY2VlOTgxYz93PTQwMCZoPTIwMCZmaXQ9Y3JvcCdcbn0sXG57XG4gIHRpdGxlOiAnTGFzdFBhc3MgQnJlYWNoIEFmdGVybWF0aDogSGFja2VycyBTdGVhbCAkNC40TSBpbiBDcnlwdG8nLFxuICBjYXRlZ29yeTogJ0JyZWFjaGVzJyxcbiAgc2V2ZXJpdHk6ICdoaWdoJyxcbiAgc3VtbWFyeTogJ0hhY2tlcnMgbGlua2VkIHRvIHRoZSAyMDIyIExhc3RQYXNzIGJyZWFjaCBzdG9sZSBhbiBhZGRpdGlvbmFsICQ0LjQgbWlsbGlvbiBpbiBjcnlwdG9jdXJyZW5jeSBieSBleHBsb2l0aW5nIGVuY3J5cHRlZCB2YXVsdCBkYXRhIHN0b2xlbiBpbiB0aGUgYXR0YWNrLicsXG4gIHNvdXJjZTogJ1pETmV0JyxcbiAgZGF0ZTogJzIwMjMtMTAtMjUnLFxuICB1cmw6ICdodHRwczovL3d3dy56ZG5ldC5jb20nLFxuICB0YWdzOiBbJ0xhc3RQYXNzJywgJ0NyeXB0bycsICdQYXNzd29yZCBNYW5hZ2VyJ10sXG4gIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTQwNjQ2NDE5MzgtM2JiZWU1Mjk0MmM3P3c9NDAwJmg9MjAwJmZpdD1jcm9wJ1xufSxcbntcbiAgdGl0bGU6ICdYWiBVdGlscyBCYWNrZG9vciBEaXNjb3ZlcmVkIGluIExpbnV4IFN1cHBseSBDaGFpbiBBdHRhY2snLFxuICBjYXRlZ29yeTogJ1Z1bG5lcmFiaWxpdGllcycsXG4gIHNldmVyaXR5OiAnY3JpdGljYWwnLFxuICBzdW1tYXJ5OiAnQSBzb3BoaXN0aWNhdGVkIGJhY2tkb29yIHdhcyBkaXNjb3ZlcmVkIGluIFhaIFV0aWxzLCBhIGNvbXByZXNzaW9uIGxpYnJhcnkgdXNlZCB3aWRlbHkgaW4gTGludXguIFRoZSBhdHRhY2sgd2FzIGEgMi15ZWFyIGNvb3JkaW5hdGVkIHN1cHBseSBjaGFpbiBvcGVyYXRpb24uJyxcbiAgc291cmNlOiAnQXJzIFRlY2huaWNhJyxcbiAgZGF0ZTogJzIwMjQtMDMtMjknLFxuICB1cmw6ICdodHRwczovL2Fyc3RlY2huaWNhLmNvbScsXG4gIHRhZ3M6IFsnTGludXgnLCAnU3VwcGx5IENoYWluJywgJ0JhY2tkb29yJ10sXG4gIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjM5ODY3Njg2MDktMzIyZGExMzU3NWYzP3c9NDAwJmg9MjAwJmZpdD1jcm9wJ1xufSxcbntcbiAgdGl0bGU6ICdNZXRhIEZpbmVkIOKCrDEuMkIgZm9yIEdEUFIgVmlvbGF0aW9ucyBPdmVyIERhdGEgVHJhbnNmZXJzJyxcbiAgY2F0ZWdvcnk6ICdQcml2YWN5JyxcbiAgc2V2ZXJpdHk6ICdtZWRpdW0nLFxuICBzdW1tYXJ5OiAnTWV0YSB3YXMgZmluZWQgYSByZWNvcmQg4oKsMS4yIGJpbGxpb24gYnkgSXJlbGFuZFxcJ3MgRGF0YSBQcm90ZWN0aW9uIENvbW1pc3Npb24gZm9yIGlsbGVnYWxseSB0cmFuc2ZlcnJpbmcgRVUgdXNlciBkYXRhIHRvIHRoZSBVUyB3aXRob3V0IGFkZXF1YXRlIHNhZmVndWFyZHMuJyxcbiAgc291cmNlOiAnVGhlIEd1YXJkaWFuJyxcbiAgZGF0ZTogJzIwMjMtMDUtMjInLFxuICB1cmw6ICdodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20nLFxuICB0YWdzOiBbJ01ldGEnLCAnR0RQUicsICdQcml2YWN5IEZpbmUnXSxcbiAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNjMyMTMxODQyMy1mMDZmODVlNTA0YjM/dz00MDAmaD0yMDAmZml0PWNyb3AnXG59LFxue1xuICB0aXRsZTogJ01pZG5pZ2h0IEJsaXp6YXJkIEJyZWFjaGVzIE1pY3Jvc29mdCBFeGVjdXRpdmUgRW1haWxzJyxcbiAgY2F0ZWdvcnk6ICdCcmVhY2hlcycsXG4gIHNldmVyaXR5OiAnaGlnaCcsXG4gIHN1bW1hcnk6ICdSdXNzaWFuIG5hdGlvbi1zdGF0ZSBncm91cCBNaWRuaWdodCBCbGl6emFyZCAoQVBUMjkvQ296eSBCZWFyKSBicmVhY2hlZCBNaWNyb3NvZnQgY29ycG9yYXRlIGVtYWlsIGFjY291bnRzIGluY2x1ZGluZyBzZW5pb3IgbGVhZGVyc2hpcCwgdXNpbmcgcGFzc3dvcmQgc3ByYXkgYXR0YWNrcy4nLFxuICBzb3VyY2U6ICdNaWNyb3NvZnQgU2VjdXJpdHkgQmxvZycsXG4gIGRhdGU6ICcyMDI0LTAxLTE5JyxcbiAgdXJsOiAnaHR0cHM6Ly9tc3JjLm1pY3Jvc29mdC5jb20nLFxuICB0YWdzOiBbJ01pY3Jvc29mdCcsICdBUFQyOScsICdOYXRpb24tc3RhdGUnXSxcbiAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxNDA2NDY0MTkzOC0zYmJlZTUyOTQyYzc/dz00MDAmaD0yMDAmZml0PWNyb3AnXG59XTtcblxuXG5jb25zdCBzZXZlcml0eUNvbmZpZyA9IHtcbiAgY3JpdGljYWw6IHsgY29sb3I6ICd0ZXh0LXJlZC00MDAnLCBiZzogJ2JnLXJlZC00MDAvMTAnLCBib3JkZXI6ICdib3JkZXItcmVkLTQwMC8yMCcsIGRvdDogJ2JnLXJlZC00MDAnIH0sXG4gIGhpZ2g6IHsgY29sb3I6ICd0ZXh0LWFtYmVyLTQwMCcsIGJnOiAnYmctYW1iZXItNDAwLzEwJywgYm9yZGVyOiAnYm9yZGVyLWFtYmVyLTQwMC8yMCcsIGRvdDogJ2JnLWFtYmVyLTQwMCcgfSxcbiAgbWVkaXVtOiB7IGNvbG9yOiAndGV4dC15ZWxsb3ctNDAwJywgYmc6ICdiZy15ZWxsb3ctNDAwLzEwJywgYm9yZGVyOiAnYm9yZGVyLXllbGxvdy00MDAvMjAnLCBkb3Q6ICdiZy15ZWxsb3ctNDAwJyB9LFxuICBsb3c6IHsgY29sb3I6ICd0ZXh0LWVtZXJhbGQtNDAwJywgYmc6ICdiZy1lbWVyYWxkLTQwMC8xMCcsIGJvcmRlcjogJ2JvcmRlci1lbWVyYWxkLTQwMC8yMCcsIGRvdDogJ2JnLWVtZXJhbGQtNDAwJyB9XG59O1xuXG5jb25zdCBDQVRFR09SWV9JQ09OUyA9IHtcbiAgQnJlYWNoZXM6IERhdGFiYXNlLFxuICBNYWx3YXJlOiBCdWcsXG4gIFZ1bG5lcmFiaWxpdGllczogTG9jayxcbiAgUHJpdmFjeTogRXllLFxuICBSYW5zb213YXJlOiBTa3VsbCxcbiAgQWxsOiBGaWxlVGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3liZXJOZXdzKCkge1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCdBbGwnKTtcbiAgY29uc3QgW2FpTmV3cywgc2V0QWlOZXdzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZ0FJLCBzZXRMb2FkaW5nQUldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoTGl2ZU5ld3MgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZ0FJKHRydWUpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgcHJvbXB0OiBgWW91IGFyZSBhIGN5YmVyc2VjdXJpdHkgbmV3cyBhZ2dyZWdhdG9yLiBQcm92aWRlIDYgcmVjZW50IGFuZCByZWFsaXN0aWMgY3liZXJzZWN1cml0eSBuZXdzIGl0ZW1zIGZyb20gMjAyNC0yMDI1IGNvdmVyaW5nIGRhdGEgYnJlYWNoZXMsIG1hbHdhcmUgY2FtcGFpZ25zLCB2dWxuZXJhYmlsaXRpZXMsIHJhbnNvbXdhcmUsIGFuZCBwcml2YWN5IHZpb2xhdGlvbnMuIE1ha2UgdGhlbSBkZXRhaWxlZCBhbmQgcmVhbGlzdGljIHdpdGggYWN0dWFsIGNvbXBhbnkgbmFtZXMgYW5kIGV2ZW50cy5gLFxuICAgICAgYWRkX2NvbnRleHRfZnJvbV9pbnRlcm5ldDogdHJ1ZSxcbiAgICAgIHJlc3BvbnNlX2pzb25fc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgbmV3czoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogeyB0eXBlOiAnc3RyaW5nJywgZW51bTogWydCcmVhY2hlcycsICdNYWx3YXJlJywgJ1Z1bG5lcmFiaWxpdGllcycsICdQcml2YWN5JywgJ1JhbnNvbXdhcmUnXSB9LFxuICAgICAgICAgICAgICAgIHNldmVyaXR5OiB7IHR5cGU6ICdzdHJpbmcnLCBlbnVtOiBbJ2NyaXRpY2FsJywgJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdyddIH0sXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICAgIHNvdXJjZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICAgIGRhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgICB0YWdzOiB7IHR5cGU6ICdhcnJheScsIGl0ZW1zOiB7IHR5cGU6ICdzdHJpbmcnIH0gfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0QWlOZXdzKHJlcy5uZXdzIHx8IG51bGwpO1xuICAgIHNldExvYWRpbmdBSShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgbmV3c0l0ZW1zID0gYWlOZXdzIHx8IFNUQVRJQ19ORVdTO1xuICBjb25zdCBmaWx0ZXJlZCA9IGNhdGVnb3J5ID09PSAnQWxsJyA/IG5ld3NJdGVtcyA6IG5ld3NJdGVtcy5maWx0ZXIoKG4pID0+IG4uY2F0ZWdvcnkgPT09IGNhdGVnb3J5KTtcblxuICBjb25zdCBjcml0aWNhbENvdW50ID0gbmV3c0l0ZW1zLmZpbHRlcigobikgPT4gbi5zZXZlcml0eSA9PT0gJ2NyaXRpY2FsJykubGVuZ3RoO1xuICBjb25zdCBicmVhY2hDb3VudCA9IG5ld3NJdGVtcy5maWx0ZXIoKG4pID0+IG4uY2F0ZWdvcnkgPT09ICdCcmVhY2hlcycpLmxlbmd0aDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTcwOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC00IG1kOnAtOCBtYXgtdy02eGwgbXgtYXV0b1wiPlxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTcxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTcyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoxNzM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxOZXdzcGFwZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTc0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNyBoLTcgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTc1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTc2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5DeWJlciBOZXdzPC9oMT5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTc3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+TGF0ZXN0IGJyZWFjaGVzLCB0aHJlYXRzICYgY3liZXJzZWN1cml0eSB1cGRhdGVzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE5lb25CdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTgwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9e2ZldGNoTGl2ZU5ld3N9IGRpc2FibGVkPXtsb2FkaW5nQUl9PlxuICAgICAgICAgICAge2xvYWRpbmdBSSA/IDxMb2FkZXIyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjE4MToyNVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IGFuaW1hdGUtc3BpblwiIC8+IDogPFdpZmkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTgxOjcyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPn1cbiAgICAgICAgICAgIHtsb2FkaW5nQUkgPyAnRmV0Y2hpbmcgTGl2ZS4uLicgOiAnRmV0Y2ggTGl2ZSBOZXdzJ31cbiAgICAgICAgICA8L05lb25CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICB7LyogQWxlcnQgYmFubmVyIGZvciBjcml0aWNhbCBuZXdzICovfVxuICAgICAge2NyaXRpY2FsQ291bnQgPiAwICYmXG4gICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoxODk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gY2xhc3NOYW1lPVwibWItNiBwLTQgcm91bmRlZC14bCBiZy1yZWQtNDAwLzUgYm9yZGVyIGJvcmRlci1yZWQtNDAwLzIwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MTkwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1yZWQtNDAwIGZsZXgtc2hyaW5rLTBcIiAvPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjE5MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1yZWQtNDAwIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjcml0aWNhbENvdW50XCI+e2NyaXRpY2FsQ291bnR9IGNyaXRpY2FsIHNlY3VyaXR5IGluY2lkZW50cyByZXBvcnRlZC4gUmV2aWV3IGltbWVkaWF0ZWx5LjwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgfVxuXG4gICAgICB7LyogU3RhdHMgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjE5Njo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNCBtYi02XCI+XG4gICAgICAgIHtbXG4gICAgICAgIHsgbGFiZWw6ICdOZXdzIEl0ZW1zJywgdmFsdWU6IG5ld3NJdGVtcy5sZW5ndGgsIGNvbG9yOiAndGV4dC1wcmltYXJ5JyB9LFxuICAgICAgICB7IGxhYmVsOiAnQ3JpdGljYWwgQWxlcnRzJywgdmFsdWU6IGNyaXRpY2FsQ291bnQsIGNvbG9yOiAndGV4dC1yZWQtNDAwJyB9LFxuICAgICAgICB7IGxhYmVsOiAnRGF0YSBCcmVhY2hlcycsIHZhbHVlOiBicmVhY2hDb3VudCwgY29sb3I6ICd0ZXh0LWFtYmVyLTQwMCcgfV0uXG4gICAgICAgIG1hcCgocykgPT5cbiAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoyMDI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3MubGFiZWx9IGhvdmVyPXtmYWxzZX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNFwiPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MjAzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtbW9ubyAke3MuY29sb3J9YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ2YWx1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzPy5pZCB8fCBzPy5faWR9PntzLnZhbHVlfTwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjIwNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3M/LmlkIHx8IHM/Ll9pZH0+e3MubGFiZWx9PC9wPlxuICAgICAgICAgIDwvR2xhc3NDYXJkPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDYXRlZ29yeSBmaWx0ZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjIxMDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBmbGV4LXdyYXAgbWItNlwiPlxuICAgICAgICB7TkVXU19DQVRFR09SSUVTLm1hcCgoY2F0LCBfX2FycklkeF9fKSA9PiB7XG4gICAgICAgICAgY29uc3QgQ2F0SWNvbiA9IENBVEVHT1JZX0lDT05TW2NhdF0gfHwgRmlsZVRleHQ7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MjE0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIGtleT17Y2F0fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2F0ZWdvcnkoY2F0KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICBjYXRlZ29yeSA9PT0gY2F0ID8gJ2JnLXByaW1hcnkvMjAgdGV4dC1wcmltYXJ5IGJvcmRlciBib3JkZXItcHJpbWFyeS8zMCcgOiAnYmctc2Vjb25kYXJ5IHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBib3JkZXIgYm9yZGVyLWJvcmRlciBob3Zlcjp0ZXh0LWZvcmVncm91bmQnfWBcbiAgICAgICAgICAgIH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJORVdTX0NBVEVHT1JJRVNcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxDYXRJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjIyMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJORVdTX0NBVEVHT1JJRVNcIiAvPiB7Y2F0fVxuICAgICAgICAgICAgPC9idXR0b24+KTtcblxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTmV3cyBncmlkICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoyMjg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAge2ZpbHRlcmVkLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNldiA9IHNldmVyaXR5Q29uZmlnW2l0ZW0uc2V2ZXJpdHldIHx8IHNldmVyaXR5Q29uZmlnLm1lZGl1bTtcbiAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBpdGVtLmltYWdlIHx8IENBVEVHT1JZX0lNQUdFU1tpdGVtLmNhdGVnb3J5XSB8fCBDQVRFR09SWV9JTUFHRVNbJ0JyZWFjaGVzJ107XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjIzMzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17aX0gaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxNiB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gdHJhbnNpdGlvbj17eyBkZWxheTogaSAqIDAuMDUgfX0+XG4gICAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MjM0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e3RydWV9IGNsYXNzTmFtZT17YGgtZnVsbCBib3JkZXIgJHtzZXYuYm9yZGVyfSBvdmVyZmxvdy1oaWRkZW4gIXAtMGB9PlxuICAgICAgICAgICAgICAgIHsvKiBUaHVtYm5haWwgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoyMzY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTM2IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjIzNzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBzcmM9e3RodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB7ZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJzt9fSAvPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI0MzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1jYXJkLzkwIHZpYS1jYXJkLzMwIHRvLXRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiBCYWRnZXMgb3ZlciBpbWFnZSAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MjQ1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgbGVmdC0yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MjQ2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC1bMTBweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgJHtzZXYuYmd9ICR7c2V2LmNvbG9yfSBib3JkZXIgJHtzZXYuYm9yZGVyfSBiYWNrZHJvcC1ibHVyLXNtYH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzZXZlcml0eVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNldmVyaXR5fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI0OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBiZy1jYXJkLzgwIGJhY2tkcm9wLWJsdXItc20gcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYm9yZGVyXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjYXRlZ29yeVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PntpdGVtLmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoyNTE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHctMi41IGgtMi41IHJvdW5kZWQtZnVsbCAke3Nldi5kb3R9IHNoYWRvdy1sZ2B9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogQ29udGVudCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI1NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI1NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yIGxlYWRpbmctdGlnaHRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRpdGxlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkIHx8IGl0ZW0/Ll9pZH0+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI1NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZCBtYi0zXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdW1tYXJ5XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkIHx8IGl0ZW0/Ll9pZH0+e2l0ZW0uc3VtbWFyeX08L3A+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MjU5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTEgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICB7KGl0ZW0udGFncyB8fCBbXSkubWFwKCh0YWcpID0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI2MToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17dGFnfSBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBweC0xLjUgcHktMC41IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzUgdGV4dC1wcmltYXJ5IGJvcmRlciBib3JkZXItcHJpbWFyeS8xNVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGFnXCI+e3RhZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoyNjU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHQtMyBib3JkZXItdCBib3JkZXItYm9yZGVyXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ1cmxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWQgfHwgaXRlbT8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoyNjY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDbG9jayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoyNjc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MjY4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkYXRlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkIHx8IGl0ZW0/Ll9pZH0+e2l0ZW0uZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DeWJlck5ld3M6MjY5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI3MDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic291cmNlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkIHx8IGl0ZW0/Ll9pZH0+e2l0ZW0uc291cmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnVybCAmJlxuICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N5YmVyTmV3czoyNzM6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBocmVmPXtpdGVtLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCA8RXh0ZXJuYWxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI3NDoyOVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pO1xuXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHthaU5ld3MgJiZcbiAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3liZXJOZXdzOjI4Njo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTZcIj5MaXZlIG5ld3MgZmV0Y2hlZCB2aWEgQUkg4oCUIG1heSBjb250YWluIHN5bnRoZXNpemVkIHN1bW1hcmllcy48L3A+XG4gICAgICB9XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvQ3liZXJOZXdzLmpzeCJ9