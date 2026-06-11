import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Extension.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Extension.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3049f6b1"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=3049f6b1";
import {
  Shield,
  Download,
  Bell,
  Ban,
  Globe,
  Lock,
  CheckCircle,
  Loader2,
  Monitor,
  AlertTriangle,
  Send,
  ExternalLink,
  ShieldCheck,
  Bug,
  Eye,
  Zap,
  Database,
  Flag,
  Activity,
  CheckCircle2,
  XCircle,
  Info,
  Code2,
  Heart,
  Star,
  Users
} from "/node_modules/.vite/deps/lucide-react.js?v=68d8ce9e";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
import { downloadExtension } from "/src/utils/extensionDownload.js";
import { downloadSourceCode } from "/src/utils/sourceDownload.js?t=1781201831124";
import { base44 } from "/src/api/base44Client.js";
const browsers = [
  { name: "Chrome", color: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20" },
  { name: "Edge", color: "from-blue-600/10 to-indigo-500/10", border: "border-blue-600/20" },
  { name: "Firefox", color: "from-orange-500/10 to-red-500/10", border: "border-orange-500/20" },
  { name: "Brave", color: "from-orange-400/10 to-amber-500/10", border: "border-orange-400/20" }
];
const extensionFeatures = [
  { icon: Shield, title: "Real-time Site Blocking", description: "Instantly blocks malicious websites before they load using CYGUARD DNS + threat intelligence DB.", stat: "CYGUARD DNS powered", color: "text-primary" },
  { icon: Bell, title: "Anti-Phishing Alerts", description: "Smart overlay alerts when you visit suspicious login pages or scam sites with AI analysis.", stat: "99.7% detection rate", color: "text-amber-400" },
  { icon: Ban, title: "Ad & Tracker Blocker", description: "Removes ads and tracking scripts using CYGUARD filter lists — 400K+ rules updated daily.", stat: "400K+ filter rules", color: "text-red-400" },
  { icon: Eye, title: "Adult Content Filter", description: "Blocks adult content worldwide using CYGUARD Family DNS protection at network level.", stat: "Global adult filter", color: "text-rose-400" },
  { icon: Download, title: "Download Protection", description: "Scans files before download for malware, ransomware and zero-day threats with AI.", stat: "AI-powered scan", color: "text-purple-400" },
  { icon: Database, title: "DNS Filtering", description: "Routes DNS through CYGUARD DNS servers to block malware at the network level instantly.", stat: "CYGUARD DNS default", color: "text-emerald-400" }
];
const installSteps = [
  { step: "1", title: "Download", text: 'Click "Download Extension" to get the CYGUARD Shield .zip file' },
  { step: "2", title: "Open Extensions", text: "In Chrome/Edge, navigate to chrome://extensions or edge://extensions" },
  { step: "3", title: "Developer Mode", text: 'Enable "Developer Mode" using the toggle in the top-right corner' },
  { step: "4", title: "Load Extension", text: 'Unzip the file, click "Load unpacked" and select the extracted folder' }
];
const DNS_SERVERS = [
  { name: "CYGUARD Default DNS", primary: "94.140.14.14", secondary: "94.140.15.15", desc: "Blocks ads, trackers, malware", color: "text-primary" },
  { name: "CYGUARD Family DNS", primary: "94.140.14.15", secondary: "94.140.15.16", desc: "Blocks adult content + ads + malware", color: "text-rose-400" },
  { name: "CYGUARD Secure DNS", primary: "94.140.14.140", secondary: "94.140.14.141", desc: "No blocking, just encrypted DNS", color: "text-emerald-400" }
];
const statusConfig = {
  safe: { color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30", icon: CheckCircle2, label: "SAFE" },
  warning: { color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30", icon: AlertTriangle, label: "WARNING" },
  danger: { color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/30", icon: XCircle, label: "DANGER" }
};
export default function Extension() {
  _s();
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [srcDownloading, setSrcDownloading] = useState(false);
  const [srcProgress, setSrcProgress] = useState(0);
  const [srcDone, setSrcDone] = useState(false);
  const [reportUrl, setReportUrl] = useState("");
  const [reportReason, setReportReason] = useState("phishing");
  const [reporting, setReporting] = useState(false);
  const [reported, setReported] = useState(false);
  const [reportError, setReportError] = useState("");
  const [activeTab, setActiveTab] = useState("features");
  const [siteUrl, setSiteUrl] = useState("");
  const [siteChecking, setSiteChecking] = useState(false);
  const [siteStatus, setSiteStatus] = useState(null);
  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadExtension();
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4e3);
    } finally {
      setDownloading(false);
    }
  };
  const handleReport = async (e) => {
    e.preventDefault();
    if (!reportUrl.trim()) return;
    setReporting(true);
    setReportError("");
    try {
      await base44.entities.ThreatAlert.create({
        title: `User Reported Site: ${reportUrl}`,
        severity: reportReason === "malware" ? "critical" : reportReason === "phishing" ? "high" : "medium",
        category: reportReason,
        description: `User manually reported this site as ${reportReason}: ${reportUrl}`,
        source: reportUrl,
        resolved: false
      });
      setReported(true);
      setReportUrl("");
      setTimeout(() => setReported(false), 4e3);
    } catch {
      setReportError("Failed to submit report. Please try again.");
    } finally {
      setReporting(false);
    }
  };
  const checkSiteStatus = async (e) => {
    e.preventDefault();
    if (!siteUrl.trim()) return;
    setSiteChecking(true);
    setSiteStatus(null);
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `Perform a real-time cybersecurity analysis of the website: "${siteUrl}". Assess it realistically in 2026 context. Well-known sites (google.com, github.com, microsoft.com, etc.) should be safe with low scores. Unknown, misspelled, or suspicious-looking domains should score higher. Provide: status (safe/warning/danger), threat_score (0-100), verdict (short sentence), ssl_valid (boolean), domain_age (e.g. "8 years"), phishing_prob (0-100), trackers count (integer), and 3 detail bullet points about the site's security posture.`,
      add_context_from_internet: false,
      response_json_schema: {
        type: "object",
        properties: {
          url: { type: "string" },
          status: { type: "string", enum: ["safe", "warning", "danger"] },
          threat_score: { type: "number" },
          verdict: { type: "string" },
          ssl_valid: { type: "boolean" },
          domain_age: { type: "string" },
          phishing_prob: { type: "number" },
          trackers: { type: "number" },
          details: { type: "array", items: { type: "string" } }
        }
      }
    });
    setSiteStatus(res);
    setSiteChecking(false);
  };
  const handleSrcDownload = async () => {
    if (srcDownloading) return;
    setSrcDownloading(true);
    setSrcProgress(0);
    setSrcDone(false);
    await downloadSourceCode((pct) => setSrcProgress(pct));
    setSrcDownloading(false);
    setSrcDone(true);
    setTimeout(() => setSrcDone(false), 3e3);
  };
  const tabs = [
    { id: "features", label: "Features", icon: Shield },
    { id: "install", label: "Install", icon: Download },
    { id: "status", label: "Site Status", icon: Activity },
    { id: "dns", label: "DNS Config", icon: Database },
    { id: "report", label: "Report Site", icon: Flag },
    { id: "source", label: "Source Code", icon: Code2 }
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:153:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Extension:154:6", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Extension:155:8", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Browser Extension" }, void 0, false, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:156:8", "data-dynamic-content": "false", className: "text-muted-foreground mt-1", children: "Real-time protection powered by CYGUARD DNS & AI" }, void 0, false, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 175,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Extension.jsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:160:6", "data-dynamic-content": "true", hover: false, glow: "blue", className: "mb-6 text-center py-10", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:161:8", "data-dynamic-content": "false", className: "inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 mb-5", children: /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "pages/Extension:162:10", "data-dynamic-content": "false", className: "w-10 h-10 text-primary" }, void 0, false, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 181,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Extension:164:8", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground mb-2", children: [
        "CYGUARD ",
        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Extension:165:18", "data-dynamic-content": "false", className: "gradient-text", children: "Shield Extension" }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 184,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 183,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:167:8", "data-dynamic-content": "false", className: "text-muted-foreground max-w-xl mx-auto mb-6 text-sm leading-relaxed", children: [
        "Powered by ",
        /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/Extension:168:21", "data-dynamic-content": "false", className: "text-foreground", children: "CYGUARD DNS" }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 187,
          columnNumber: 22
        }, this),
        " — blocks ads, trackers, malware, adult content, and phishing in real-time with 400K+ filter rules. Includes live site safety checker."
      ] }, void 0, true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:170:8", "data-dynamic-content": "true", className: "flex flex-wrap justify-center gap-3 mb-5", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/Extension:171:10", "data-dynamic-content": "true", size: "lg", onClick: handleDownload, disabled: downloading, children: [
        downloading ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/Extension:172:27", "data-dynamic-content": "false", className: "w-5 h-5 animate-spin" }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 191,
          columnNumber: 28
        }, this) : downloaded ? /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/Extension:172:87", "data-dynamic-content": "false", className: "w-5 h-5 text-emerald-400" }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 191,
          columnNumber: 163
        }, this) : /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "pages/Extension:172:142", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 191,
          columnNumber: 293
        }, this),
        downloading ? "Packaging..." : downloaded ? "Downloaded!" : "Download Extension (.zip)"
      ] }, void 0, true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 190,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:176:8", "data-dynamic-content": "true", className: "flex flex-wrap justify-center gap-2", children: browsers.map(
        (b, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:178:12", "data-dynamic-content": "true", className: `flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r ${b.color} border ${b.border} text-xs font-medium text-foreground`, "data-arr-index": __arrIdx__, "data-arr-variable-name": "browsers", "data-arr-field": "name", children: [
          /* @__PURE__ */ jsxDEV(Globe, { "data-source-location": "pages/Extension:179:14", "data-dynamic-content": "false", className: "w-3.5 h-3.5 text-primary", "data-arr-index": __arrIdx__, "data-arr-variable-name": "browsers" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 198,
            columnNumber: 15
          }, this),
          b.name,
          /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/Extension:179:68", "data-dynamic-content": "false", className: "w-3.5 h-3.5 text-emerald-400", "data-arr-index": __arrIdx__, "data-arr-variable-name": "browsers" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 198,
            columnNumber: 206
          }, this)
        ] }, b.name, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 197,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Extension.jsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:186:6", "data-dynamic-content": "true", className: "flex gap-1.5 mb-5 bg-secondary/40 p-1.5 rounded-2xl overflow-x-auto", children: tabs.map((t, __arrIdx__) => {
      const Icon = t.icon;
      return /* @__PURE__ */ jsxDEV(
        "button",
        {
          "data-source-location": "pages/Extension:190:12",
          "data-dynamic-content": "true",
          onClick: () => setActiveTab(t.id),
          className: `flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex-1 justify-center ${activeTab === t.id ? "bg-card text-foreground shadow-sm border border-border" : "text-muted-foreground hover:text-foreground"}`,
          "data-collection-item-id": t?.id,
          "data-arr-index": __arrIdx__,
          "data-arr-variable-name": "tabs",
          "data-arr-field": "label",
          children: [
            /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/Extension:194:14", "data-dynamic-content": "false", className: "w-3.5 h-3.5", "data-arr-index": __arrIdx__, "data-arr-variable-name": "tabs" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 213,
              columnNumber: 15
            }, this),
            t.label
          ]
        },
        t.id,
        true,
        {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 209,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "/app/src/pages/Extension.jsx",
      lineNumber: 205,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/Extension:201:6", "data-dynamic-content": "true", mode: "wait", children: [
      activeTab === "features" && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Extension:205:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:206:12", "data-dynamic-content": "true", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: extensionFeatures.map((feature, i) => {
          const Icon = feature.icon;
          return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:210:18", "data-dynamic-content": "true", delay: i * 0.06, "data-arr-index": i, "data-arr-variable-name": "extensionFeatures", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:211:20", "data-dynamic-content": "true", className: "flex items-start gap-3", "data-arr-index": i, "data-arr-variable-name": "extensionFeatures", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:212:22", "data-dynamic-content": "true", className: "p-2.5 rounded-xl bg-secondary border border-border flex-shrink-0", "data-arr-index": i, "data-arr-variable-name": "extensionFeatures", children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/Extension:213:24", "data-dynamic-content": "true", className: `w-4 h-4 ${feature.color}`, "data-arr-index": i, "data-arr-variable-name": "extensionFeatures" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 232,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 231,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:215:22", "data-dynamic-content": "true", "data-arr-index": i, "data-arr-variable-name": "extensionFeatures", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Extension:216:24", "data-dynamic-content": "true", className: "text-sm font-semibold text-foreground", "data-arr-index": i, "data-arr-variable-name": "extensionFeatures", "data-arr-field": "title", children: feature.title }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 235,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:217:24", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-1 leading-relaxed", "data-arr-index": i, "data-arr-variable-name": "extensionFeatures", "data-arr-field": "description", children: feature.description }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 236,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Extension:218:24", "data-dynamic-content": "true", className: `text-[11px] font-mono font-semibold mt-2 block ${feature.color}`, "data-arr-index": i, "data-arr-variable-name": "extensionFeatures", "data-arr-field": "stat", children: feature.stat }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 237,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 234,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 230,
            columnNumber: 21
          }, this) }, feature.title, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 229,
            columnNumber: 17
          }, this);
        }) }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:225:12", "data-dynamic-content": "false", hover: false, className: "mt-4 border-primary/20", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:226:14", "data-dynamic-content": "false", className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:227:16", "data-dynamic-content": "false", className: "w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { "data-source-location": "pages/Extension:228:18", "data-dynamic-content": "false", className: "w-5 h-5 text-primary" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 247,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 246,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:230:16", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Extension:231:18", "data-dynamic-content": "false", className: "font-bold text-foreground text-sm mb-1", children: "Powered by CYGUARD Filter Lists (2026)" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 250,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:232:18", "data-dynamic-content": "false", className: "text-xs text-muted-foreground leading-relaxed", children: "CYGUARD Shield uses DNS-level blocking (94.140.14.14) with over 400,000 filter rules covering ads, trackers, malware, phishing, adult content, and crypto-mining scripts. Updated daily with 2026 threat intelligence." }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 251,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 249,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 245,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 244,
          columnNumber: 13
        }, this)
      ] }, "features", true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      activeTab === "install" && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Extension:243:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, children: [
        /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:244:12", "data-dynamic-content": "true", hover: false, className: "mb-4", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Extension:245:14", "data-dynamic-content": "false", className: "font-bold text-foreground mb-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Monitor, { "data-source-location": "pages/Extension:246:16", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 265,
              columnNumber: 17
            }, this),
            " Step-by-Step Installation"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 264,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:248:14", "data-dynamic-content": "true", className: "space-y-4", children: installSteps.map(
            (s, i) => /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "pages/Extension:250:18",
                "data-dynamic-content": "true",
                initial: { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.1 },
                className: "flex items-start gap-4",
                "data-arr-index": i,
                "data-arr-variable-name": "installSteps",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:252:20", "data-dynamic-content": "true", className: "w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-black text-primary flex-shrink-0", "data-arr-index": i, "data-arr-variable-name": "installSteps", "data-arr-field": "step", children: s.step }, void 0, false, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 271,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:255:20", "data-dynamic-content": "true", "data-arr-index": i, "data-arr-variable-name": "installSteps", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:256:22", "data-dynamic-content": "true", className: "text-sm font-semibold text-foreground", "data-arr-index": i, "data-arr-variable-name": "installSteps", "data-arr-field": "title", children: s.title }, void 0, false, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 275,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:257:22", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", "data-arr-index": i, "data-arr-variable-name": "installSteps", "data-arr-field": "text", children: s.text }, void 0, false, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 276,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 274,
                    columnNumber: 21
                  }, this)
                ]
              },
              s.step,
              true,
              {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 269,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 267,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:263:12", "data-dynamic-content": "false", hover: false, className: "border-amber-500/20 bg-amber-500/5", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:264:14", "data-dynamic-content": "false", className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "pages/Extension:265:16", "data-dynamic-content": "false", className: "w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 284,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:266:16", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:267:18", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground mb-1", children: "Developer Mode Note" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 286,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:268:18", "data-dynamic-content": "false", className: "text-xs text-muted-foreground leading-relaxed", children: "Chrome may show a warning when Developer Mode is on with unpacked extensions. This is normal for sideloaded extensions and does not affect security." }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 287,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 285,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 283,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 282,
          columnNumber: 13
        }, this)
      ] }, "install", true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 262,
        columnNumber: 9
      }, this),
      activeTab === "status" && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Extension:279:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, children: /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:280:12", "data-dynamic-content": "true", hover: false, className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Extension:281:14", "data-dynamic-content": "false", className: "font-bold text-foreground mb-1 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Activity, { "data-source-location": "pages/Extension:282:16", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 301,
            columnNumber: 17
          }, this),
          " Real-Time Website Safety Check"
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 300,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:284:14", "data-dynamic-content": "false", className: "text-xs text-muted-foreground mb-5 leading-relaxed", children: "Enter any URL to get an instant AI-powered security assessment — threat score, phishing probability, SSL status, and more." }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 303,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("form", { "data-source-location": "pages/Extension:287:14", "data-dynamic-content": "true", onSubmit: checkSiteStatus, className: "flex gap-2 mb-5", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:288:16", "data-dynamic-content": "true", className: "relative flex-1", children: [
            /* @__PURE__ */ jsxDEV(Globe, { "data-source-location": "pages/Extension:289:18", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 308,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                "data-source-location": "pages/Extension:290:18",
                "data-dynamic-content": "true",
                type: "text",
                value: siteUrl,
                onChange: (e) => setSiteUrl(e.target.value),
                placeholder: "https://example.com or example.com",
                className: "w-full pl-9 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 309,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 307,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/Extension:298:16", "data-dynamic-content": "true", type: "submit", disabled: siteChecking || !siteUrl.trim(), children: [
            siteChecking ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/Extension:299:34", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 318,
              columnNumber: 35
            }, this) : /* @__PURE__ */ jsxDEV(Activity, { "data-source-location": "pages/Extension:299:81", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 318,
              columnNumber: 157
            }, this),
            siteChecking ? "Scanning..." : "Check"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 317,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 306,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/Extension:304:14", "data-dynamic-content": "true", children: [
          siteChecking && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/Extension:306:18",
              "data-dynamic-content": "true",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "flex flex-col items-center gap-3 py-8",
              children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:308:20", "data-dynamic-content": "false", className: "relative w-16 h-16", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:309:22", "data-dynamic-content": "false", className: "absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary animate-spin" }, void 0, false, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 328,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "pages/Extension:310:22", "data-dynamic-content": "false", className: "absolute inset-0 m-auto w-7 h-7 text-primary" }, void 0, false, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 329,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Extension.jsx",
                  lineNumber: 327,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:312:20", "data-dynamic-content": "true", className: "text-sm text-muted-foreground", "data-collection-item-field": "siteUrl", children: [
                  "CYGUARD is scanning ",
                  siteUrl,
                  "…"
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Extension.jsx",
                  lineNumber: 331,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 325,
              columnNumber: 15
            },
            this
          ),
          siteStatus && !siteChecking && (() => {
            const cfg = statusConfig[siteStatus.status] || statusConfig.warning;
            const StatusIcon = cfg.icon;
            return /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "pages/Extension:319:20",
                "data-dynamic-content": "true",
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                className: `rounded-2xl border ${cfg.border} ${cfg.bg} p-5`,
                "data-collection-item-field": "details",
                "data-collection-item-id": siteStatus?.id || siteStatus?._id,
                children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:321:22", "data-dynamic-content": "true", className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxDEV(StatusIcon, { "data-source-location": "pages/Extension:322:24", "data-dynamic-content": "true", className: `w-8 h-8 ${cfg.color}` }, void 0, false, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 341,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:323:24", "data-dynamic-content": "true", children: [
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:324:26", "data-dynamic-content": "true", className: `text-lg font-black ${cfg.color}`, "data-collection-item-field": "label", "data-collection-item-id": cfg?.id || cfg?._id, children: cfg.label }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 343,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:325:26", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", "data-collection-item-field": "verdict", "data-collection-item-id": siteStatus?.id || siteStatus?._id, children: siteStatus.verdict }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 344,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 342,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:327:24", "data-dynamic-content": "true", className: "ml-auto text-right", children: [
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:328:26", "data-dynamic-content": "true", className: `text-3xl font-black font-mono ${cfg.color}`, children: Math.round(siteStatus.threat_score) }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 347,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:329:26", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground", children: "Threat Score" }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 348,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 346,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 340,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:332:22", "data-dynamic-content": "true", className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4", children: [
                    { label: "SSL Valid", value: siteStatus.ssl_valid ? "Yes ✓" : "No ✗", ok: siteStatus.ssl_valid },
                    { label: "Domain Age", value: siteStatus.domain_age, ok: true },
                    { label: "Phishing Risk", value: `${Math.round(siteStatus.phishing_prob)}%`, ok: siteStatus.phishing_prob < 30 },
                    { label: "Trackers", value: siteStatus.trackers ?? 0, ok: (siteStatus.trackers ?? 0) < 5 }
                  ].map(
                    (m) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:339:26", "data-dynamic-content": "true", className: "text-center p-3 rounded-xl bg-card/60 border border-border", children: [
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:340:28", "data-dynamic-content": "true", className: `text-base font-bold font-mono ${m.ok ? "text-emerald-400" : "text-red-400"}`, "data-collection-item-field": "value", "data-collection-item-id": m?.id || m?._id, children: m.value }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 359,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:341:28", "data-dynamic-content": "true", className: "text-[10px] text-muted-foreground mt-0.5", "data-collection-item-field": "label", "data-collection-item-id": m?.id || m?._id, children: m.label }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 360,
                        columnNumber: 29
                      }, this)
                    ] }, m.label, true, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 358,
                      columnNumber: 23
                    }, this)
                  ) }, void 0, false, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 351,
                    columnNumber: 23
                  }, this),
                  siteStatus.details && /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/Extension:346:24", "data-dynamic-content": "true", className: "space-y-1.5", "data-collection-item-field": "details", "data-collection-item-id": siteStatus?.id || siteStatus?._id, children: siteStatus.details.map(
                    (d, i) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/Extension:348:28", "data-dynamic-content": "true", className: "flex items-start gap-2 text-xs text-muted-foreground", "data-collection-item-field": "d", children: [
                      /* @__PURE__ */ jsxDEV(Info, { "data-source-location": "pages/Extension:349:30", "data-dynamic-content": "false", className: "w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 368,
                        columnNumber: 31
                      }, this),
                      d
                    ] }, i, true, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 367,
                      columnNumber: 23
                    }, this)
                  ) }, void 0, false, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 365,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 338,
                columnNumber: 19
              },
              this
            );
          })()
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 323,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 299,
        columnNumber: 13
      }, this) }, "status", false, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 298,
        columnNumber: 9
      }, this),
      activeTab === "dns" && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Extension:365:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, children: [
        /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:366:12", "data-dynamic-content": "true", hover: false, className: "mb-4", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Extension:367:14", "data-dynamic-content": "false", className: "font-bold text-foreground mb-1", children: "CYGUARD DNS Configuration" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 386,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:368:14", "data-dynamic-content": "false", className: "text-xs text-muted-foreground mb-5 leading-relaxed", children: "Configure your device or router to use CYGUARD DNS for network-level blocking. The extension uses these automatically, but you can also set them system-wide." }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 387,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:371:14", "data-dynamic-content": "true", className: "space-y-3", children: DNS_SERVERS.map(
            (dns, i) => /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "pages/Extension:373:18",
                "data-dynamic-content": "true",
                initial: { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.1 },
                className: "p-4 rounded-xl bg-secondary/40 border border-border",
                "data-arr-index": i,
                "data-arr-variable-name": "DNS_SERVERS",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:375:20", "data-dynamic-content": "true", className: "flex items-center justify-between mb-2", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", children: [
                    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Extension:376:22", "data-dynamic-content": "true", className: `text-sm font-bold ${dns.color}`, "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", "data-arr-field": "name", children: dns.name }, void 0, false, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 395,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Extension:377:22", "data-dynamic-content": "true", className: "text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full border border-border", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", "data-arr-field": "desc", children: dns.desc }, void 0, false, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 396,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 394,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:379:20", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-3", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", children: [
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:380:22", "data-dynamic-content": "true", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", children: [
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:381:24", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-1", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", children: "Primary DNS" }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 400,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("code", { "data-source-location": "pages/Extension:382:24", "data-dynamic-content": "true", className: "text-sm font-mono font-bold text-foreground", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", "data-arr-field": "primary", children: dns.primary }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 401,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 399,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:384:22", "data-dynamic-content": "true", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", children: [
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:385:24", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-1", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", children: "Secondary DNS" }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 404,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("code", { "data-source-location": "pages/Extension:386:24", "data-dynamic-content": "true", className: "text-sm font-mono font-bold text-foreground", "data-arr-index": i, "data-arr-variable-name": "DNS_SERVERS", "data-arr-field": "secondary", children: dns.secondary }, void 0, false, {
                        fileName: "/app/src/pages/Extension.jsx",
                        lineNumber: 405,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/Extension.jsx",
                      lineNumber: 403,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Extension.jsx",
                    lineNumber: 398,
                    columnNumber: 21
                  }, this)
                ]
              },
              dns.name,
              true,
              {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 392,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 390,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 385,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:393:12", "data-dynamic-content": "false", hover: false, className: "border-rose-400/20 bg-rose-400/5", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:394:14", "data-dynamic-content": "false", className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "pages/Extension:395:16", "data-dynamic-content": "false", className: "w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 414,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:396:16", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:397:18", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground mb-1", children: "Adult Content Blocking" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 416,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:398:18", "data-dynamic-content": "false", className: "text-xs text-muted-foreground leading-relaxed", children: [
              "Use CYGUARD Family DNS (",
              /* @__PURE__ */ jsxDEV("code", { "data-source-location": "pages/Extension:399:44", "data-dynamic-content": "false", className: "font-mono text-rose-400", children: "94.140.14.15" }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 418,
                columnNumber: 45
              }, this),
              ") to block adult and explicit websites globally at the DNS level, covering thousands of adult domains worldwide."
            ] }, void 0, true, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 417,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 415,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 413,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 412,
          columnNumber: 13
        }, this)
      ] }, "dns", true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 384,
        columnNumber: 9
      }, this),
      activeTab === "report" && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Extension:409:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, children: /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:410:12", "data-dynamic-content": "true", hover: false, className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Extension:411:14", "data-dynamic-content": "false", className: "font-bold text-foreground mb-1 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Flag, { "data-source-location": "pages/Extension:412:16", "data-dynamic-content": "false", className: "w-4 h-4 text-red-400" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 431,
            columnNumber: 17
          }, this),
          " Report a Malicious Site"
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 430,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:414:14", "data-dynamic-content": "false", className: "text-xs text-muted-foreground mb-5 leading-relaxed", children: "Help protect the community by reporting suspicious or malicious websites. Reports are reviewed and added to CYGUARD's threat database." }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 433,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("form", { "data-source-location": "pages/Extension:417:14", "data-dynamic-content": "true", onSubmit: handleReport, className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:418:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/Extension:419:18", "data-dynamic-content": "false", className: "text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block", children: "Website URL" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 438,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:420:18", "data-dynamic-content": "true", className: "relative", children: [
              /* @__PURE__ */ jsxDEV(Globe, { "data-source-location": "pages/Extension:421:20", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 440,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  "data-source-location": "pages/Extension:422:20",
                  "data-dynamic-content": "true",
                  type: "url",
                  value: reportUrl,
                  onChange: (e) => setReportUrl(e.target.value),
                  placeholder: "https://suspicious-site.com",
                  required: true,
                  className: "w-full pl-9 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/Extension.jsx",
                  lineNumber: 441,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 439,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 437,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:432:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/Extension:433:18", "data-dynamic-content": "false", className: "text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block", children: "Threat Type" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 452,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:434:18", "data-dynamic-content": "true", className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: ["phishing", "malware", "scam", "tracker", "exploit", "privacy"].map(
              (reason, __arrIdx__) => /* @__PURE__ */ jsxDEV(
                "button",
                {
                  "data-source-location": "pages/Extension:436:22",
                  "data-dynamic-content": "true",
                  type: "button",
                  onClick: () => setReportReason(reason),
                  className: `py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all capitalize ${reportReason === reason ? "bg-primary/15 border-primary/40 text-primary" : "bg-secondary border-border text-muted-foreground hover:text-foreground"}`,
                  "data-arr-index": __arrIdx__,
                  children: reason
                },
                reason,
                false,
                {
                  fileName: "/app/src/pages/Extension.jsx",
                  lineNumber: 455,
                  columnNumber: 19
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 453,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 451,
            columnNumber: 17
          }, this),
          reportError && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:448:18", "data-dynamic-content": "true", className: "flex items-center gap-2 p-3 rounded-xl bg-red-400/10 border border-red-400/20", children: [
            /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "pages/Extension:449:20", "data-dynamic-content": "false", className: "w-4 h-4 text-red-400 flex-shrink-0" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 468,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:450:20", "data-dynamic-content": "true", className: "text-sm text-red-400", "data-collection-item-field": "reportError", children: reportError }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 469,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 467,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/Extension:453:16", "data-dynamic-content": "true", children: reported && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/Extension:455:20",
              "data-dynamic-content": "true",
              initial: { opacity: 0, y: -8 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0 },
              className: "flex items-center gap-2 p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20",
              children: [
                /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/Extension:457:22", "data-dynamic-content": "false", className: "w-4 h-4 text-emerald-400 flex-shrink-0" }, void 0, false, {
                  fileName: "/app/src/pages/Extension.jsx",
                  lineNumber: 476,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:458:22", "data-dynamic-content": "false", className: "text-sm text-emerald-400 font-semibold", children: "Report submitted! Thank you for helping protect users." }, void 0, false, {
                  fileName: "/app/src/pages/Extension.jsx",
                  lineNumber: 477,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 474,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 472,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/Extension:462:16", "data-dynamic-content": "true", type: "submit", disabled: reporting || !reportUrl.trim(), className: "w-full justify-center", children: [
            reporting ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/Extension:463:31", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 482,
              columnNumber: 32
            }, this) : /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "pages/Extension:463:78", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 482,
              columnNumber: 154
            }, this),
            reporting ? "Submitting..." : "Submit Report"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 481,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 436,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 429,
        columnNumber: 13
      }, this) }, "report", false, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 428,
        columnNumber: 9
      }, this),
      activeTab === "source" && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Extension:472:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:475:12", "data-dynamic-content": "true", hover: false, glow: "blue", className: "border-accent/20", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:476:14", "data-dynamic-content": "false", className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:477:16", "data-dynamic-content": "false", className: "w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Code2, { "data-source-location": "pages/Extension:478:18", "data-dynamic-content": "false", className: "w-6 h-6 text-accent" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 497,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 496,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:480:16", "data-dynamic-content": "false", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Extension:481:18", "data-dynamic-content": "false", className: "font-bold text-foreground text-lg", children: "CYGUARD — Full Source Code" }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 500,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:482:18", "data-dynamic-content": "false", className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Download the complete source code — web app, browser extension, threat detection engine, AI modules, and all rule sets. MIT licensed, free for any use." }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 501,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:485:18", "data-dynamic-content": "false", className: "text-[11px] text-muted-foreground/60 mt-1 font-mono", children: "React · Tailwind CSS · Chrome Extension MV3 · Base44 BaaS" }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 504,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 499,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 495,
            columnNumber: 15
          }, this),
          srcDownloading && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:491:16", "data-dynamic-content": "true", className: "mb-5", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:492:18", "data-dynamic-content": "true", className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/Extension:493:20", "data-dynamic-content": "false", className: "w-3.5 h-3.5 text-primary animate-spin" }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 512,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Extension:494:20", "data-dynamic-content": "true", className: "text-xs text-primary font-semibold", "data-collection-item-field": "srcProgress", children: [
                "Packaging source files... ",
                srcProgress,
                "%"
              ] }, void 0, true, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 513,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 511,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:496:18", "data-dynamic-content": "true", className: "h-2 rounded-full bg-border overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:497:20", "data-dynamic-content": "true", className: "h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300", style: { width: `${srcProgress}%` } }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 516,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 515,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 510,
            columnNumber: 13
          }, this),
          srcDone && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:502:16", "data-dynamic-content": "false", className: "mb-5 flex items-center gap-2 text-sm text-emerald-400 font-semibold", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { "data-source-location": "pages/Extension:503:18", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 522,
              columnNumber: 19
            }, this),
            " Download complete!"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 521,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/Extension:507:14", "data-dynamic-content": "true", size: "lg", onClick: handleSrcDownload, disabled: srcDownloading, children: srcDownloading ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/Extension:508:36", "data-dynamic-content": "false", className: "w-5 h-5 animate-spin" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 527,
              columnNumber: 37
            }, this),
            " Packaging..."
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 527,
            columnNumber: 35
          }, this) : srcDone ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { "data-source-location": "pages/Extension:509:32", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 528,
              columnNumber: 27
            }, this),
            " Downloaded!"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 528,
            columnNumber: 25
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "pages/Extension:510:22", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 529,
              columnNumber: 17
            }, this),
            " Download Source Code (.zip)"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 529,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 526,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 494,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:515:12", "data-dynamic-content": "true", hover: false, children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/Extension:516:14", "data-dynamic-content": "false", className: "font-bold text-foreground text-sm mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Code2, { "data-source-location": "pages/Extension:517:16", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 536,
              columnNumber: 17
            }, this),
            " What's Included"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 535,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:519:14", "data-dynamic-content": "true", className: "grid sm:grid-cols-2 gap-3", children: [
            { label: "Web App", desc: "Full React + Tailwind source", icon: "🌐" },
            { label: "Browser Extension", desc: "Chrome MV3 — all JS, HTML, CSS", icon: "🛡️" },
            { label: "Threat Rules", desc: "All block_*.json rule sets", icon: "🚫" },
            { label: "AI Modules", desc: "LLM scan & breach checker logic", icon: "🤖" },
            { label: "All Pages & Components", desc: "Dashboard, Scanner, News, etc.", icon: "📄" },
            { label: "README + Docs", desc: "Setup & contribution guide", icon: "📖" }
          ].map(
            (item, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:528:18", "data-dynamic-content": "true", className: "flex items-start gap-3 p-3 rounded-xl bg-secondary/40 border border-border", "data-arr-index": __arrIdx__, children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Extension:529:20", "data-dynamic-content": "true", className: "text-lg flex-shrink-0", "data-arr-index": __arrIdx__, "data-arr-field": "icon", children: item.icon }, void 0, false, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 548,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:530:20", "data-dynamic-content": "true", "data-arr-index": __arrIdx__, children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:531:22", "data-dynamic-content": "true", className: "text-sm font-semibold text-foreground", "data-arr-index": __arrIdx__, "data-arr-field": "label", children: item.label }, void 0, false, {
                  fileName: "/app/src/pages/Extension.jsx",
                  lineNumber: 550,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:532:22", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", "data-arr-index": __arrIdx__, "data-arr-field": "desc", children: item.desc }, void 0, false, {
                  fileName: "/app/src/pages/Extension.jsx",
                  lineNumber: 551,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Extension.jsx",
                lineNumber: 549,
                columnNumber: 21
              }, this)
            ] }, item.label, true, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 547,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 538,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 534,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Extension:540:12", "data-dynamic-content": "false", hover: false, className: "border-emerald-400/20 bg-emerald-400/5", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:541:14", "data-dynamic-content": "false", className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(Heart, { "data-source-location": "pages/Extension:542:16", "data-dynamic-content": "false", className: "w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 561,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Extension:543:16", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:544:18", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground mb-1", children: "MIT License — Free for any use" }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 563,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Extension:545:18", "data-dynamic-content": "false", className: "text-xs text-muted-foreground leading-relaxed", children: "Use, modify, and distribute freely — personal or commercial. Attribution appreciated but not required. Contributions welcome." }, void 0, false, {
              fileName: "/app/src/pages/Extension.jsx",
              lineNumber: 564,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Extension.jsx",
            lineNumber: 562,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 560,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Extension.jsx",
          lineNumber: 559,
          columnNumber: 13
        }, this)
      ] }, "source", true, {
        fileName: "/app/src/pages/Extension.jsx",
        lineNumber: 491,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Extension.jsx",
      lineNumber: 220,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Extension.jsx",
    lineNumber: 172,
    columnNumber: 5
  }, this);
}
_s(Extension, "AvAQIEIdnWOXa/535xoaVWVaHFs=");
_c = Extension;
var _c;
$RefreshReg$(_c, "Extension");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Extension.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Extension.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsY0FDeEY7QUFBQSxpQ0FBQyxTQUFNLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsV0FBVSxtREFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBMkk7QUFBQSxVQUMzSSx1QkFBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQ3RFO0FBQUEsbUNBQUMsT0FBRSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsOENBQTZDLDhDQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFtSztBQUFBLFlBQ25LLHVCQUFDLE9BQUUsd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxXQUFVLGlEQUErQyw2SUFBdkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFLQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVFBLEtBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVVBO0FBQUEsV0E5RXNGLFVBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUErRUU7QUFBQSxTQTlWSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBaVdBO0FBQUEsT0FqWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtaQTtBQUVKO0FBQUNJLEdBemZ1QkQsV0FBUztBQUFBLEtBQVRBO0FBQVMsSUFBQThGO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJTaGllbGQiLCJEb3dubG9hZCIsIkJlbGwiLCJCYW4iLCJHbG9iZSIsIkxvY2siLCJDaGVja0NpcmNsZSIsIkxvYWRlcjIiLCJNb25pdG9yIiwiQWxlcnRUcmlhbmdsZSIsIlNlbmQiLCJFeHRlcm5hbExpbmsiLCJTaGllbGRDaGVjayIsIkJ1ZyIsIkV5ZSIsIlphcCIsIkRhdGFiYXNlIiwiRmxhZyIsIkFjdGl2aXR5IiwiQ2hlY2tDaXJjbGUyIiwiWENpcmNsZSIsIkluZm8iLCJDb2RlMiIsIkhlYXJ0IiwiU3RhciIsIlVzZXJzIiwiR2xhc3NDYXJkIiwiTmVvbkJ1dHRvbiIsImRvd25sb2FkRXh0ZW5zaW9uIiwiZG93bmxvYWRTb3VyY2VDb2RlIiwiYmFzZTQ0IiwiYnJvd3NlcnMiLCJuYW1lIiwiY29sb3IiLCJib3JkZXIiLCJleHRlbnNpb25GZWF0dXJlcyIsImljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdCIsImluc3RhbGxTdGVwcyIsInN0ZXAiLCJ0ZXh0IiwiRE5TX1NFUlZFUlMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZGVzYyIsInN0YXR1c0NvbmZpZyIsInNhZmUiLCJiZyIsImxhYmVsIiwid2FybmluZyIsImRhbmdlciIsIkV4dGVuc2lvbiIsIl9zIiwiZG93bmxvYWRpbmciLCJzZXREb3dubG9hZGluZyIsImRvd25sb2FkZWQiLCJzZXREb3dubG9hZGVkIiwic3JjRG93bmxvYWRpbmciLCJzZXRTcmNEb3dubG9hZGluZyIsInNyY1Byb2dyZXNzIiwic2V0U3JjUHJvZ3Jlc3MiLCJzcmNEb25lIiwic2V0U3JjRG9uZSIsInJlcG9ydFVybCIsInNldFJlcG9ydFVybCIsInJlcG9ydFJlYXNvbiIsInNldFJlcG9ydFJlYXNvbiIsInJlcG9ydGluZyIsInNldFJlcG9ydGluZyIsInJlcG9ydGVkIiwic2V0UmVwb3J0ZWQiLCJyZXBvcnRFcnJvciIsInNldFJlcG9ydEVycm9yIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwic2l0ZVVybCIsInNldFNpdGVVcmwiLCJzaXRlQ2hlY2tpbmciLCJzZXRTaXRlQ2hlY2tpbmciLCJzaXRlU3RhdHVzIiwic2V0U2l0ZVN0YXR1cyIsImhhbmRsZURvd25sb2FkIiwic2V0VGltZW91dCIsImhhbmRsZVJlcG9ydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJlbnRpdGllcyIsIlRocmVhdEFsZXJ0IiwiY3JlYXRlIiwic2V2ZXJpdHkiLCJjYXRlZ29yeSIsInNvdXJjZSIsInJlc29sdmVkIiwiY2hlY2tTaXRlU3RhdHVzIiwicmVzIiwiaW50ZWdyYXRpb25zIiwiQ29yZSIsIkludm9rZUxMTSIsInByb21wdCIsImFkZF9jb250ZXh0X2Zyb21faW50ZXJuZXQiLCJyZXNwb25zZV9qc29uX3NjaGVtYSIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidXJsIiwic3RhdHVzIiwiZW51bSIsInRocmVhdF9zY29yZSIsInZlcmRpY3QiLCJzc2xfdmFsaWQiLCJkb21haW5fYWdlIiwicGhpc2hpbmdfcHJvYiIsInRyYWNrZXJzIiwiZGV0YWlscyIsIml0ZW1zIiwiaGFuZGxlU3JjRG93bmxvYWQiLCJwY3QiLCJ0YWJzIiwiaWQiLCJvcGFjaXR5IiwieSIsIm1hcCIsImIiLCJfX2FycklkeF9fIiwidCIsIkljb24iLCJmZWF0dXJlIiwiaSIsInMiLCJ4IiwiZGVsYXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNmZyIsIlN0YXR1c0ljb24iLCJfaWQiLCJNYXRoIiwicm91bmQiLCJvayIsIm0iLCJkIiwiZG5zIiwicmVhc29uIiwid2lkdGgiLCJpdGVtIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRXh0ZW5zaW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHtcbiAgU2hpZWxkLCBEb3dubG9hZCwgQmVsbCwgQmFuLCBHbG9iZSwgTG9jaywgQ2hlY2tDaXJjbGUsIExvYWRlcjIsXG4gIE1vbml0b3IsIEFsZXJ0VHJpYW5nbGUsIFNlbmQsIEV4dGVybmFsTGluayxcbiAgU2hpZWxkQ2hlY2ssIEJ1ZywgRXllLCBaYXAsIERhdGFiYXNlLCBGbGFnLCBBY3Rpdml0eSxcbiAgQ2hlY2tDaXJjbGUyLCBYQ2lyY2xlLCBJbmZvLCBDb2RlMiwgSGVhcnQsIFN0YXIsIFVzZXJzIH0gZnJvbVxuJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgR2xhc3NDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL0dsYXNzQ2FyZCc7XG5pbXBvcnQgTmVvbkJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3VpLWN1c3RvbS9OZW9uQnV0dG9uJztcbmltcG9ydCB7IGRvd25sb2FkRXh0ZW5zaW9uIH0gZnJvbSAnLi4vdXRpbHMvZXh0ZW5zaW9uRG93bmxvYWQnO1xuaW1wb3J0IHsgZG93bmxvYWRTb3VyY2VDb2RlIH0gZnJvbSAnLi4vdXRpbHMvc291cmNlRG93bmxvYWQnO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSAnQC9hcGkvYmFzZTQ0Q2xpZW50JztcblxuY29uc3QgYnJvd3NlcnMgPSBbXG57IG5hbWU6ICdDaHJvbWUnLCBjb2xvcjogJ2Zyb20tYmx1ZS01MDAvMTAgdG8tY3lhbi01MDAvMTAnLCBib3JkZXI6ICdib3JkZXItYmx1ZS01MDAvMjAnIH0sXG57IG5hbWU6ICdFZGdlJywgY29sb3I6ICdmcm9tLWJsdWUtNjAwLzEwIHRvLWluZGlnby01MDAvMTAnLCBib3JkZXI6ICdib3JkZXItYmx1ZS02MDAvMjAnIH0sXG57IG5hbWU6ICdGaXJlZm94JywgY29sb3I6ICdmcm9tLW9yYW5nZS01MDAvMTAgdG8tcmVkLTUwMC8xMCcsIGJvcmRlcjogJ2JvcmRlci1vcmFuZ2UtNTAwLzIwJyB9LFxueyBuYW1lOiAnQnJhdmUnLCBjb2xvcjogJ2Zyb20tb3JhbmdlLTQwMC8xMCB0by1hbWJlci01MDAvMTAnLCBib3JkZXI6ICdib3JkZXItb3JhbmdlLTQwMC8yMCcgfV07XG5cblxuY29uc3QgZXh0ZW5zaW9uRmVhdHVyZXMgPSBbXG57IGljb246IFNoaWVsZCwgdGl0bGU6ICdSZWFsLXRpbWUgU2l0ZSBCbG9ja2luZycsIGRlc2NyaXB0aW9uOiAnSW5zdGFudGx5IGJsb2NrcyBtYWxpY2lvdXMgd2Vic2l0ZXMgYmVmb3JlIHRoZXkgbG9hZCB1c2luZyBDWUdVQVJEIEROUyArIHRocmVhdCBpbnRlbGxpZ2VuY2UgREIuJywgc3RhdDogJ0NZR1VBUkQgRE5TIHBvd2VyZWQnLCBjb2xvcjogJ3RleHQtcHJpbWFyeScgfSxcbnsgaWNvbjogQmVsbCwgdGl0bGU6ICdBbnRpLVBoaXNoaW5nIEFsZXJ0cycsIGRlc2NyaXB0aW9uOiAnU21hcnQgb3ZlcmxheSBhbGVydHMgd2hlbiB5b3UgdmlzaXQgc3VzcGljaW91cyBsb2dpbiBwYWdlcyBvciBzY2FtIHNpdGVzIHdpdGggQUkgYW5hbHlzaXMuJywgc3RhdDogJzk5LjclIGRldGVjdGlvbiByYXRlJywgY29sb3I6ICd0ZXh0LWFtYmVyLTQwMCcgfSxcbnsgaWNvbjogQmFuLCB0aXRsZTogJ0FkICYgVHJhY2tlciBCbG9ja2VyJywgZGVzY3JpcHRpb246ICdSZW1vdmVzIGFkcyBhbmQgdHJhY2tpbmcgc2NyaXB0cyB1c2luZyBDWUdVQVJEIGZpbHRlciBsaXN0cyDigJQgNDAwSysgcnVsZXMgdXBkYXRlZCBkYWlseS4nLCBzdGF0OiAnNDAwSysgZmlsdGVyIHJ1bGVzJywgY29sb3I6ICd0ZXh0LXJlZC00MDAnIH0sXG57IGljb246IEV5ZSwgdGl0bGU6ICdBZHVsdCBDb250ZW50IEZpbHRlcicsIGRlc2NyaXB0aW9uOiAnQmxvY2tzIGFkdWx0IGNvbnRlbnQgd29ybGR3aWRlIHVzaW5nIENZR1VBUkQgRmFtaWx5IEROUyBwcm90ZWN0aW9uIGF0IG5ldHdvcmsgbGV2ZWwuJywgc3RhdDogJ0dsb2JhbCBhZHVsdCBmaWx0ZXInLCBjb2xvcjogJ3RleHQtcm9zZS00MDAnIH0sXG57IGljb246IERvd25sb2FkLCB0aXRsZTogJ0Rvd25sb2FkIFByb3RlY3Rpb24nLCBkZXNjcmlwdGlvbjogJ1NjYW5zIGZpbGVzIGJlZm9yZSBkb3dubG9hZCBmb3IgbWFsd2FyZSwgcmFuc29td2FyZSBhbmQgemVyby1kYXkgdGhyZWF0cyB3aXRoIEFJLicsIHN0YXQ6ICdBSS1wb3dlcmVkIHNjYW4nLCBjb2xvcjogJ3RleHQtcHVycGxlLTQwMCcgfSxcbnsgaWNvbjogRGF0YWJhc2UsIHRpdGxlOiAnRE5TIEZpbHRlcmluZycsIGRlc2NyaXB0aW9uOiAnUm91dGVzIEROUyB0aHJvdWdoIENZR1VBUkQgRE5TIHNlcnZlcnMgdG8gYmxvY2sgbWFsd2FyZSBhdCB0aGUgbmV0d29yayBsZXZlbCBpbnN0YW50bHkuJywgc3RhdDogJ0NZR1VBUkQgRE5TIGRlZmF1bHQnLCBjb2xvcjogJ3RleHQtZW1lcmFsZC00MDAnIH1dO1xuXG5cbmNvbnN0IGluc3RhbGxTdGVwcyA9IFtcbnsgc3RlcDogJzEnLCB0aXRsZTogJ0Rvd25sb2FkJywgdGV4dDogJ0NsaWNrIFwiRG93bmxvYWQgRXh0ZW5zaW9uXCIgdG8gZ2V0IHRoZSBDWUdVQVJEIFNoaWVsZCAuemlwIGZpbGUnIH0sXG57IHN0ZXA6ICcyJywgdGl0bGU6ICdPcGVuIEV4dGVuc2lvbnMnLCB0ZXh0OiAnSW4gQ2hyb21lL0VkZ2UsIG5hdmlnYXRlIHRvIGNocm9tZTovL2V4dGVuc2lvbnMgb3IgZWRnZTovL2V4dGVuc2lvbnMnIH0sXG57IHN0ZXA6ICczJywgdGl0bGU6ICdEZXZlbG9wZXIgTW9kZScsIHRleHQ6ICdFbmFibGUgXCJEZXZlbG9wZXIgTW9kZVwiIHVzaW5nIHRoZSB0b2dnbGUgaW4gdGhlIHRvcC1yaWdodCBjb3JuZXInIH0sXG57IHN0ZXA6ICc0JywgdGl0bGU6ICdMb2FkIEV4dGVuc2lvbicsIHRleHQ6ICdVbnppcCB0aGUgZmlsZSwgY2xpY2sgXCJMb2FkIHVucGFja2VkXCIgYW5kIHNlbGVjdCB0aGUgZXh0cmFjdGVkIGZvbGRlcicgfV07XG5cblxuY29uc3QgRE5TX1NFUlZFUlMgPSBbXG57IG5hbWU6ICdDWUdVQVJEIERlZmF1bHQgRE5TJywgcHJpbWFyeTogJzk0LjE0MC4xNC4xNCcsIHNlY29uZGFyeTogJzk0LjE0MC4xNS4xNScsIGRlc2M6ICdCbG9ja3MgYWRzLCB0cmFja2VycywgbWFsd2FyZScsIGNvbG9yOiAndGV4dC1wcmltYXJ5JyB9LFxueyBuYW1lOiAnQ1lHVUFSRCBGYW1pbHkgRE5TJywgcHJpbWFyeTogJzk0LjE0MC4xNC4xNScsIHNlY29uZGFyeTogJzk0LjE0MC4xNS4xNicsIGRlc2M6ICdCbG9ja3MgYWR1bHQgY29udGVudCArIGFkcyArIG1hbHdhcmUnLCBjb2xvcjogJ3RleHQtcm9zZS00MDAnIH0sXG57IG5hbWU6ICdDWUdVQVJEIFNlY3VyZSBETlMnLCBwcmltYXJ5OiAnOTQuMTQwLjE0LjE0MCcsIHNlY29uZGFyeTogJzk0LjE0MC4xNC4xNDEnLCBkZXNjOiAnTm8gYmxvY2tpbmcsIGp1c3QgZW5jcnlwdGVkIEROUycsIGNvbG9yOiAndGV4dC1lbWVyYWxkLTQwMCcgfV07XG5cblxuXG5cbmNvbnN0IHN0YXR1c0NvbmZpZyA9IHtcbiAgc2FmZTogeyBjb2xvcjogJ3RleHQtZW1lcmFsZC00MDAnLCBiZzogJ2JnLWVtZXJhbGQtNDAwLzEwJywgYm9yZGVyOiAnYm9yZGVyLWVtZXJhbGQtNDAwLzMwJywgaWNvbjogQ2hlY2tDaXJjbGUyLCBsYWJlbDogJ1NBRkUnIH0sXG4gIHdhcm5pbmc6IHsgY29sb3I6ICd0ZXh0LWFtYmVyLTQwMCcsIGJnOiAnYmctYW1iZXItNDAwLzEwJywgYm9yZGVyOiAnYm9yZGVyLWFtYmVyLTQwMC8zMCcsIGljb246IEFsZXJ0VHJpYW5nbGUsIGxhYmVsOiAnV0FSTklORycgfSxcbiAgZGFuZ2VyOiB7IGNvbG9yOiAndGV4dC1yZWQtNDAwJywgYmc6ICdiZy1yZWQtNDAwLzEwJywgYm9yZGVyOiAnYm9yZGVyLXJlZC00MDAvMzAnLCBpY29uOiBYQ2lyY2xlLCBsYWJlbDogJ0RBTkdFUicgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXh0ZW5zaW9uKCkge1xuICBjb25zdCBbZG93bmxvYWRpbmcsIHNldERvd25sb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rvd25sb2FkZWQsIHNldERvd25sb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3JjRG93bmxvYWRpbmcsIHNldFNyY0Rvd25sb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NyY1Byb2dyZXNzLCBzZXRTcmNQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NyY0RvbmUsIHNldFNyY0RvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVwb3J0VXJsLCBzZXRSZXBvcnRVcmxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVwb3J0UmVhc29uLCBzZXRSZXBvcnRSZWFzb25dID0gdXNlU3RhdGUoJ3BoaXNoaW5nJyk7XG4gIGNvbnN0IFtyZXBvcnRpbmcsIHNldFJlcG9ydGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXBvcnRlZCwgc2V0UmVwb3J0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVwb3J0RXJyb3IsIHNldFJlcG9ydEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdmZWF0dXJlcycpO1xuXG4gIC8vIFNpdGUgc3RhdHVzIHN0YXRlXG4gIGNvbnN0IFtzaXRlVXJsLCBzZXRTaXRlVXJsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NpdGVDaGVja2luZywgc2V0U2l0ZUNoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NpdGVTdGF0dXMsIHNldFNpdGVTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0RG93bmxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRvd25sb2FkRXh0ZW5zaW9uKCk7XG4gICAgICBzZXREb3dubG9hZGVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXREb3dubG9hZGVkKGZhbHNlKSwgNDAwMCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldERvd25sb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVwb3J0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFyZXBvcnRVcmwudHJpbSgpKSByZXR1cm47XG4gICAgc2V0UmVwb3J0aW5nKHRydWUpO1xuICAgIHNldFJlcG9ydEVycm9yKCcnKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlRocmVhdEFsZXJ0LmNyZWF0ZSh7XG4gICAgICAgIHRpdGxlOiBgVXNlciBSZXBvcnRlZCBTaXRlOiAke3JlcG9ydFVybH1gLFxuICAgICAgICBzZXZlcml0eTogcmVwb3J0UmVhc29uID09PSAnbWFsd2FyZScgPyAnY3JpdGljYWwnIDogcmVwb3J0UmVhc29uID09PSAncGhpc2hpbmcnID8gJ2hpZ2gnIDogJ21lZGl1bScsXG4gICAgICAgIGNhdGVnb3J5OiByZXBvcnRSZWFzb24sXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgVXNlciBtYW51YWxseSByZXBvcnRlZCB0aGlzIHNpdGUgYXMgJHtyZXBvcnRSZWFzb259OiAke3JlcG9ydFVybH1gLFxuICAgICAgICBzb3VyY2U6IHJlcG9ydFVybCxcbiAgICAgICAgcmVzb2x2ZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHNldFJlcG9ydGVkKHRydWUpO1xuICAgICAgc2V0UmVwb3J0VXJsKCcnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0UmVwb3J0ZWQoZmFsc2UpLCA0MDAwKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldFJlcG9ydEVycm9yKCdGYWlsZWQgdG8gc3VibWl0IHJlcG9ydC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0UmVwb3J0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTaXRlU3RhdHVzID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFzaXRlVXJsLnRyaW0oKSkgcmV0dXJuO1xuICAgIHNldFNpdGVDaGVja2luZyh0cnVlKTtcbiAgICBzZXRTaXRlU3RhdHVzKG51bGwpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgcHJvbXB0OiBgUGVyZm9ybSBhIHJlYWwtdGltZSBjeWJlcnNlY3VyaXR5IGFuYWx5c2lzIG9mIHRoZSB3ZWJzaXRlOiBcIiR7c2l0ZVVybH1cIi4gQXNzZXNzIGl0IHJlYWxpc3RpY2FsbHkgaW4gMjAyNiBjb250ZXh0LiBXZWxsLWtub3duIHNpdGVzIChnb29nbGUuY29tLCBnaXRodWIuY29tLCBtaWNyb3NvZnQuY29tLCBldGMuKSBzaG91bGQgYmUgc2FmZSB3aXRoIGxvdyBzY29yZXMuIFVua25vd24sIG1pc3NwZWxsZWQsIG9yIHN1c3BpY2lvdXMtbG9va2luZyBkb21haW5zIHNob3VsZCBzY29yZSBoaWdoZXIuIFByb3ZpZGU6IHN0YXR1cyAoc2FmZS93YXJuaW5nL2RhbmdlciksIHRocmVhdF9zY29yZSAoMC0xMDApLCB2ZXJkaWN0IChzaG9ydCBzZW50ZW5jZSksIHNzbF92YWxpZCAoYm9vbGVhbiksIGRvbWFpbl9hZ2UgKGUuZy4gXCI4IHllYXJzXCIpLCBwaGlzaGluZ19wcm9iICgwLTEwMCksIHRyYWNrZXJzIGNvdW50IChpbnRlZ2VyKSwgYW5kIDMgZGV0YWlsIGJ1bGxldCBwb2ludHMgYWJvdXQgdGhlIHNpdGUncyBzZWN1cml0eSBwb3N0dXJlLmAsXG4gICAgICBhZGRfY29udGV4dF9mcm9tX2ludGVybmV0OiBmYWxzZSxcbiAgICAgIHJlc3BvbnNlX2pzb25fc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgdXJsOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgc3RhdHVzOiB7IHR5cGU6ICdzdHJpbmcnLCBlbnVtOiBbJ3NhZmUnLCAnd2FybmluZycsICdkYW5nZXInXSB9LFxuICAgICAgICAgIHRocmVhdF9zY29yZTogeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgIHZlcmRpY3Q6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICBzc2xfdmFsaWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgICAgZG9tYWluX2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgIHBoaXNoaW5nX3Byb2I6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICB0cmFja2VyczogeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgIGRldGFpbHM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTaXRlU3RhdHVzKHJlcyk7XG4gICAgc2V0U2l0ZUNoZWNraW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTcmNEb3dubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoc3JjRG93bmxvYWRpbmcpIHJldHVybjtcbiAgICBzZXRTcmNEb3dubG9hZGluZyh0cnVlKTtcbiAgICBzZXRTcmNQcm9ncmVzcygwKTtcbiAgICBzZXRTcmNEb25lKGZhbHNlKTtcbiAgICBhd2FpdCBkb3dubG9hZFNvdXJjZUNvZGUoKHBjdCkgPT4gc2V0U3JjUHJvZ3Jlc3MocGN0KSk7XG4gICAgc2V0U3JjRG93bmxvYWRpbmcoZmFsc2UpO1xuICAgIHNldFNyY0RvbmUodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRTcmNEb25lKGZhbHNlKSwgMzAwMCk7XG4gIH07XG5cbiAgY29uc3QgdGFicyA9IFtcbiAgeyBpZDogJ2ZlYXR1cmVzJywgbGFiZWw6ICdGZWF0dXJlcycsIGljb246IFNoaWVsZCB9LFxuICB7IGlkOiAnaW5zdGFsbCcsIGxhYmVsOiAnSW5zdGFsbCcsIGljb246IERvd25sb2FkIH0sXG4gIHsgaWQ6ICdzdGF0dXMnLCBsYWJlbDogJ1NpdGUgU3RhdHVzJywgaWNvbjogQWN0aXZpdHkgfSxcbiAgeyBpZDogJ2RucycsIGxhYmVsOiAnRE5TIENvbmZpZycsIGljb246IERhdGFiYXNlIH0sXG4gIHsgaWQ6ICdyZXBvcnQnLCBsYWJlbDogJ1JlcG9ydCBTaXRlJywgaWNvbjogRmxhZyB9LFxuICB7IGlkOiAnc291cmNlJywgbGFiZWw6ICdTb3VyY2UgQ29kZScsIGljb246IENvZGUyIH1dO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjE1Mzo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtNCBtZDpwLTggbWF4LXctNXhsIG14LWF1dG9cIj5cbiAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjE1NDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTU1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiPkJyb3dzZXIgRXh0ZW5zaW9uPC9oMT5cbiAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTU2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTFcIj5SZWFsLXRpbWUgcHJvdGVjdGlvbiBwb3dlcmVkIGJ5IENZR1VBUkQgRE5TICYgQUk8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiBIZXJvICovfVxuICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoxNjA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gZ2xvdz1cImJsdWVcIiBjbGFzc05hbWU9XCJtYi02IHRleHQtY2VudGVyIHB5LTEwXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTYxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMjAgaC0yMCByb3VuZGVkLTN4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkvMjAgdG8tYWNjZW50LzIwIGJvcmRlciBib3JkZXItcHJpbWFyeS8yMCBtYi01XCI+XG4gICAgICAgICAgPFNoaWVsZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoxNjI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTY0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCI+XG4gICAgICAgICAgQ1lHVUFSRCA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoxNjU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZ3JhZGllbnQtdGV4dFwiPlNoaWVsZCBFeHRlbnNpb248L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjE2Nzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYXgtdy14bCBteC1hdXRvIG1iLTYgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICBQb3dlcmVkIGJ5IDxzdHJvbmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTY4OjIxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZFwiPkNZR1VBUkQgRE5TPC9zdHJvbmc+IOKAlCBibG9ja3MgYWRzLCB0cmFja2VycywgbWFsd2FyZSwgYWR1bHQgY29udGVudCwgYW5kIHBoaXNoaW5nIGluIHJlYWwtdGltZSB3aXRoIDQwMEsrIGZpbHRlciBydWxlcy4gSW5jbHVkZXMgbGl2ZSBzaXRlIHNhZmV0eSBjaGVja2VyLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTcwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtMyBtYi01XCI+XG4gICAgICAgICAgPE5lb25CdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTcxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc2l6ZT1cImxnXCIgb25DbGljaz17aGFuZGxlRG93bmxvYWR9IGRpc2FibGVkPXtkb3dubG9hZGluZ30+XG4gICAgICAgICAgICB7ZG93bmxvYWRpbmcgPyA8TG9hZGVyMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoxNzI6MjdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSBhbmltYXRlLXNwaW5cIiAvPiA6IGRvd25sb2FkZWQgPyA8Q2hlY2tDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTcyOjg3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1lbWVyYWxkLTQwMFwiIC8+IDogPERvd25sb2FkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjE3MjoxNDJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+fVxuICAgICAgICAgICAge2Rvd25sb2FkaW5nID8gJ1BhY2thZ2luZy4uLicgOiBkb3dubG9hZGVkID8gJ0Rvd25sb2FkZWQhJyA6ICdEb3dubG9hZCBFeHRlbnNpb24gKC56aXApJ31cbiAgICAgICAgICA8L05lb25CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjE3Njo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICB7YnJvd3NlcnMubWFwKChiLCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MTc4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtiLm5hbWV9IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTMgcHktMS41IHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciAke2IuY29sb3J9IGJvcmRlciAke2IuYm9yZGVyfSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZGB9IGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiYnJvd3NlcnNcIiBkYXRhLWFyci1maWVsZD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgPEdsb2JlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjE3OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXByaW1hcnlcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImJyb3dzZXJzXCIgLz57Yi5uYW1lfTxDaGVja0NpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoxNzk6NjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1lbWVyYWxkLTQwMFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiYnJvd3NlcnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dsYXNzQ2FyZD5cblxuICAgICAgey8qIFRhYiBiYXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjE4Njo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMS41IG1iLTUgYmctc2Vjb25kYXJ5LzQwIHAtMS41IHJvdW5kZWQtMnhsIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICB7dGFicy5tYXAoKHQsIF9fYXJySWR4X18pID0+IHtcbiAgICAgICAgICBjb25zdCBJY29uID0gdC5pY29uO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjE5MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17dC5pZH0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHQuaWQpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTIgcm91bmRlZC14bCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgd2hpdGVzcGFjZS1ub3dyYXAgZmxleC0xIGp1c3RpZnktY2VudGVyICR7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPT09IHQuaWQgPyAnYmctY2FyZCB0ZXh0LWZvcmVncm91bmQgc2hhZG93LXNtIGJvcmRlciBib3JkZXItYm9yZGVyJyA6ICd0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kJ31gXG4gICAgICAgICAgICB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0Py5pZH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJ0YWJzXCIgZGF0YS1hcnItZmllbGQ9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoxOTQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInRhYnNcIiAvPnt0LmxhYmVsfVxuICAgICAgICAgICAgPC9idXR0b24+KTtcblxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogVGFiIGNvbnRlbnQgKi99XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjIwMTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgbW9kZT1cIndhaXRcIj5cblxuICAgICAgICB7LyogRkVBVFVSRVMgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdmZWF0dXJlcycgJiZcbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjA1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PVwiZmVhdHVyZXNcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBleGl0PXt7IG9wYWNpdHk6IDAgfX0+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjIwNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAge2V4dGVuc2lvbkZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBJY29uID0gZmVhdHVyZS5pY29uO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjEwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtmZWF0dXJlLnRpdGxlfSBkZWxheT17aSAqIDAuMDZ9IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZXh0ZW5zaW9uRmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyMTE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJleHRlbnNpb25GZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjEyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC0yLjUgcm91bmRlZC14bCBiZy1zZWNvbmRhcnkgYm9yZGVyIGJvcmRlci1ib3JkZXIgZmxleC1zaHJpbmstMFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZXh0ZW5zaW9uRmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjIxMzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctNCBoLTQgJHtmZWF0dXJlLmNvbG9yfWB9IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZXh0ZW5zaW9uRmVhdHVyZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjE1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJleHRlbnNpb25GZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjIxNjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmRcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImV4dGVuc2lvbkZlYXR1cmVzXCIgZGF0YS1hcnItZmllbGQ9XCJ0aXRsZVwiPntmZWF0dXJlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyMTc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xIGxlYWRpbmctcmVsYXhlZFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZXh0ZW5zaW9uRmVhdHVyZXNcIiBkYXRhLWFyci1maWVsZD1cImRlc2NyaXB0aW9uXCI+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjE4OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC1bMTFweF0gZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgbXQtMiBibG9jayAke2ZlYXR1cmUuY29sb3J9YH0gZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJleHRlbnNpb25GZWF0dXJlc1wiIGRhdGEtYXJyLWZpZWxkPVwic3RhdFwiPntmZWF0dXJlLnN0YXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvR2xhc3NDYXJkPik7XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjIyNToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cIm10LTQgYm9yZGVyLXByaW1hcnkvMjBcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyMjY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjI3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLXhsIGJnLXByaW1hcnkvMTAgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxTaGllbGRDaGVjayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyMjg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjMwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjIzMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIHRleHQtc20gbWItMVwiPlBvd2VyZWQgYnkgQ1lHVUFSRCBGaWx0ZXIgTGlzdHMgKDIwMjYpPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjIzMjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgQ1lHVUFSRCBTaGllbGQgdXNlcyBETlMtbGV2ZWwgYmxvY2tpbmcgKDk0LjE0MC4xNC4xNCkgd2l0aCBvdmVyIDQwMCwwMDAgZmlsdGVyIHJ1bGVzIGNvdmVyaW5nIGFkcywgdHJhY2tlcnMsIG1hbHdhcmUsIHBoaXNoaW5nLCBhZHVsdCBjb250ZW50LCBhbmQgY3J5cHRvLW1pbmluZyBzY3JpcHRzLiBVcGRhdGVkIGRhaWx5IHdpdGggMjAyNiB0aHJlYXQgaW50ZWxsaWdlbmNlLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR2xhc3NDYXJkPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHsvKiBJTlNUQUxMICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnaW5zdGFsbCcgJiZcbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjQzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PVwiaW5zdGFsbFwiIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19IGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cbiAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjQ0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyNDU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi01IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPE1vbml0b3IgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjQ2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1wcmltYXJ5XCIgLz4gU3RlcC1ieS1TdGVwIEluc3RhbGxhdGlvblxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjI0ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIHtpbnN0YWxsU3RlcHMubWFwKChzLCBpKSA9PlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyNTA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3Muc3RlcH0gaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMTYgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19IHRyYW5zaXRpb249e3sgZGVsYXk6IGkgKiAwLjEgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiaW5zdGFsbFN0ZXBzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjUyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy05IGgtOSByb3VuZGVkLXhsIGJnLXByaW1hcnkvMTAgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gZm9udC1ibGFjayB0ZXh0LXByaW1hcnkgZmxleC1zaHJpbmstMFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiaW5zdGFsbFN0ZXBzXCIgZGF0YS1hcnItZmllbGQ9XCJzdGVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Muc3RlcH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjU1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJpbnN0YWxsU3RlcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyNTY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJpbnN0YWxsU3RlcHNcIiBkYXRhLWFyci1maWVsZD1cInRpdGxlXCI+e3MudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjI1NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTAuNSBsZWFkaW5nLXJlbGF4ZWRcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImluc3RhbGxTdGVwc1wiIGRhdGEtYXJyLWZpZWxkPVwidGV4dFwiPntzLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjYzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGhvdmVyPXtmYWxzZX0gY2xhc3NOYW1lPVwiYm9yZGVyLWFtYmVyLTUwMC8yMCBiZy1hbWJlci01MDAvNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjI2NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjY1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci00MDAgZmxleC1zaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjY2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjY3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMVwiPkRldmVsb3BlciBNb2RlIE5vdGU8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyNjg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIENocm9tZSBtYXkgc2hvdyBhIHdhcm5pbmcgd2hlbiBEZXZlbG9wZXIgTW9kZSBpcyBvbiB3aXRoIHVucGFja2VkIGV4dGVuc2lvbnMuIFRoaXMgaXMgbm9ybWFsIGZvciBzaWRlbG9hZGVkIGV4dGVuc2lvbnMgYW5kIGRvZXMgbm90IGFmZmVjdCBzZWN1cml0eS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIH1cblxuICAgICAgICB7LyogU0lURSBTVEFUVVMgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdzdGF0dXMnICYmXG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjI3OToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT1cInN0YXR1c1wiIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19IGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cbiAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjgwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyODE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjI4MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeVwiIC8+IFJlYWwtVGltZSBXZWJzaXRlIFNhZmV0eSBDaGVja1xuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyODQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBFbnRlciBhbnkgVVJMIHRvIGdldCBhbiBpbnN0YW50IEFJLXBvd2VyZWQgc2VjdXJpdHkgYXNzZXNzbWVudCDigJQgdGhyZWF0IHNjb3JlLCBwaGlzaGluZyBwcm9iYWJpbGl0eSwgU1NMIHN0YXR1cywgYW5kIG1vcmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGZvcm0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mjg3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25TdWJtaXQ9e2NoZWNrU2l0ZVN0YXR1c30gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBtYi01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyODg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxHbG9iZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjoyODk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQgaC00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MjkwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NpdGVVcmx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXRlVXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vZXhhbXBsZS5jb20gb3IgZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwbC05IHByLTQgcHktMyByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS81MCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1wcmltYXJ5LzUwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXByaW1hcnkvMjAgdHJhbnNpdGlvbi1hbGxcIiAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjI5ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c2l0ZUNoZWNraW5nIHx8ICFzaXRlVXJsLnRyaW0oKX0+XG4gICAgICAgICAgICAgICAgICB7c2l0ZUNoZWNraW5nID8gPExvYWRlcjIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mjk5OjM0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgYW5pbWF0ZS1zcGluXCIgLz4gOiA8QWN0aXZpdHkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mjk5OjgxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPn1cbiAgICAgICAgICAgICAgICAgIHtzaXRlQ2hlY2tpbmcgPyAnU2Nhbm5pbmcuLi4nIDogJ0NoZWNrJ31cbiAgICAgICAgICAgICAgICA8L05lb25CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjMwNDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIHtzaXRlQ2hlY2tpbmcgJiZcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzA2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fSBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHktOFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjMwODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTE2IGgtMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjMwOToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItcHJpbWFyeS8yMCBib3JkZXItdC1wcmltYXJ5IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFNoaWVsZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozMTA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBtLWF1dG8gdy03IGgtNyB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzEyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInNpdGVVcmxcIj5DWUdVQVJEIGlzIHNjYW5uaW5nIHtzaXRlVXJsfeKApjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtzaXRlU3RhdHVzICYmICFzaXRlQ2hlY2tpbmcgJiYgKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZmcgPSBzdGF0dXNDb25maWdbc2l0ZVN0YXR1cy5zdGF0dXNdIHx8IHN0YXR1c0NvbmZpZy53YXJuaW5nO1xuICAgICAgICAgICAgICAgIGNvbnN0IFN0YXR1c0ljb24gPSBjZmcuaWNvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzE5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxNiB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLTJ4bCBib3JkZXIgJHtjZmcuYm9yZGVyfSAke2NmZy5iZ30gcC01YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXRhaWxzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NpdGVTdGF0dXM/LmlkIHx8IHNpdGVTdGF0dXM/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozMjE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhdHVzSWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozMjI6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTggaC04ICR7Y2ZnLmNvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjMyMzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozMjQ6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LWxnIGZvbnQtYmxhY2sgJHtjZmcuY29sb3J9YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjZmc/LmlkIHx8IGNmZz8uX2lkfT57Y2ZnLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzI1OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInZlcmRpY3RcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2l0ZVN0YXR1cz8uaWQgfHwgc2l0ZVN0YXR1cz8uX2lkfT57c2l0ZVN0YXR1cy52ZXJkaWN0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozMjc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtbC1hdXRvIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzI4OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC0zeGwgZm9udC1ibGFjayBmb250LW1vbm8gJHtjZmcuY29sb3J9YH0+e01hdGgucm91bmQoc2l0ZVN0YXR1cy50aHJlYXRfc2NvcmUpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzI5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlRocmVhdCBTY29yZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzMyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNCBnYXAtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTU0wgVmFsaWQnLCB2YWx1ZTogc2l0ZVN0YXR1cy5zc2xfdmFsaWQgPyAnWWVzIOKckycgOiAnTm8g4pyXJywgb2s6IHNpdGVTdGF0dXMuc3NsX3ZhbGlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RvbWFpbiBBZ2UnLCB2YWx1ZTogc2l0ZVN0YXR1cy5kb21haW5fYWdlLCBvazogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdQaGlzaGluZyBSaXNrJywgdmFsdWU6IGAke01hdGgucm91bmQoc2l0ZVN0YXR1cy5waGlzaGluZ19wcm9iKX0lYCwgb2s6IHNpdGVTdGF0dXMucGhpc2hpbmdfcHJvYiA8IDMwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1RyYWNrZXJzJywgdmFsdWU6IHNpdGVTdGF0dXMudHJhY2tlcnMgPz8gMCwgb2s6IChzaXRlU3RhdHVzLnRyYWNrZXJzID8/IDApIDwgNSB9XS5cbiAgICAgICAgICAgICAgICAgICAgICBtYXAoKG0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozMzk6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e20ubGFiZWx9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMyByb3VuZGVkLXhsIGJnLWNhcmQvNjAgYm9yZGVyIGJvcmRlci1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozNDA6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgZm9udC1ib2xkIGZvbnQtbW9ubyAke20ub2sgPyAndGV4dC1lbWVyYWxkLTQwMCcgOiAndGV4dC1yZWQtNDAwJ31gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInZhbHVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e20/LmlkIHx8IG0/Ll9pZH0+e20udmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM0MToyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0wLjVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e20/LmlkIHx8IG0/Ll9pZH0+e20ubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtzaXRlU3RhdHVzLmRldGFpbHMgJiZcbiAgICAgICAgICAgICAgICAgICAgPHVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM0NjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXRhaWxzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NpdGVTdGF0dXM/LmlkIHx8IHNpdGVTdGF0dXM/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzaXRlU3RhdHVzLmRldGFpbHMubWFwKChkLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozNDg6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM0OTozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXByaW1hcnkgZmxleC1zaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KTtcblxuICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvR2xhc3NDYXJkPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHsvKiBETlMgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdkbnMnICYmXG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM2NToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT1cImRuc1wiIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19IGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cbiAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzY2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozNjc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0xXCI+Q1lHVUFSRCBETlMgQ29uZmlndXJhdGlvbjwvaDM+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM2ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi01IGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIENvbmZpZ3VyZSB5b3VyIGRldmljZSBvciByb3V0ZXIgdG8gdXNlIENZR1VBUkQgRE5TIGZvciBuZXR3b3JrLWxldmVsIGJsb2NraW5nLiBUaGUgZXh0ZW5zaW9uIHVzZXMgdGhlc2UgYXV0b21hdGljYWxseSwgYnV0IHlvdSBjYW4gYWxzbyBzZXQgdGhlbSBzeXN0ZW0td2lkZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM3MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgIHtETlNfU0VSVkVSUy5tYXAoKGRucywgaSkgPT5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzczOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtkbnMubmFtZX0gaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMTYgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19IHRyYW5zaXRpb249e3sgZGVsYXk6IGkgKiAwLjEgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzQwIGJvcmRlciBib3JkZXItYm9yZGVyXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfU0VSVkVSU1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM3NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfU0VSVkVSU1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM3NjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtc20gZm9udC1ib2xkICR7ZG5zLmNvbG9yfWB9IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX1NFUlZFUlNcIiBkYXRhLWFyci1maWVsZD1cIm5hbWVcIj57ZG5zLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM3NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBiZy1zZWNvbmRhcnkgcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYm9yZGVyXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfU0VSVkVSU1wiIGRhdGEtYXJyLWZpZWxkPVwiZGVzY1wiPntkbnMuZGVzY308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM3OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIkROU19TRVJWRVJTXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozODA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIkROU19TRVJWRVJTXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozODE6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0xXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfU0VSVkVSU1wiPlByaW1hcnkgRE5TPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246MzgyOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX1NFUlZFUlNcIiBkYXRhLWFyci1maWVsZD1cInByaW1hcnlcIj57ZG5zLnByaW1hcnl9PC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mzg0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfU0VSVkVSU1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mzg1OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWItMVwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX1NFUlZFUlNcIj5TZWNvbmRhcnkgRE5TPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mzg2OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX1NFUlZFUlNcIiBkYXRhLWFyci1maWVsZD1cInNlY29uZGFyeVwiPntkbnMuc2Vjb25kYXJ5fTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9HbGFzc0NhcmQ+XG4gICAgICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM5MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cImJvcmRlci1yb3NlLTQwMC8yMCBiZy1yb3NlLTQwMC81XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mzk0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8RXllIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM5NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcm9zZS00MDAgZmxleC1zaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mzk2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246Mzk3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMVwiPkFkdWx0IENvbnRlbnQgQmxvY2tpbmc8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjozOTg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIFVzZSBDWUdVQVJEIEZhbWlseSBETlMgKDxjb2RlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjM5OTo0NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1yb3NlLTQwMFwiPjk0LjE0MC4xNC4xNTwvY29kZT4pIHRvIGJsb2NrIGFkdWx0IGFuZCBleHBsaWNpdCB3ZWJzaXRlcyBnbG9iYWxseSBhdCB0aGUgRE5TIGxldmVsLCBjb3ZlcmluZyB0aG91c2FuZHMgb2YgYWR1bHQgZG9tYWlucyB3b3JsZHdpZGUuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9HbGFzc0NhcmQ+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgey8qIFJFUE9SVCAqL31cbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3JlcG9ydCcgJiZcbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDA5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PVwicmVwb3J0XCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gZXhpdD17eyBvcGFjaXR5OiAwIH19PlxuICAgICAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0MTA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQxMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8RmxhZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0MTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXJlZC00MDBcIiAvPiBSZXBvcnQgYSBNYWxpY2lvdXMgU2l0ZVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0MTQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBIZWxwIHByb3RlY3QgdGhlIGNvbW11bml0eSBieSByZXBvcnRpbmcgc3VzcGljaW91cyBvciBtYWxpY2lvdXMgd2Vic2l0ZXMuIFJlcG9ydHMgYXJlIHJldmlld2VkIGFuZCBhZGRlZCB0byBDWUdVQVJEJ3MgdGhyZWF0IGRhdGFiYXNlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxmb3JtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQxNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uU3VibWl0PXtoYW5kbGVSZXBvcnR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDE4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDE5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTIgYmxvY2tcIj5XZWJzaXRlIFVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQyMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHbG9iZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0MjE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQgaC00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0MjI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBvcnRVcmwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL3N1c3BpY2lvdXMtc2l0ZS5jb21cIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwbC05IHByLTQgcHktMyByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS81MCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1wcmltYXJ5LzUwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXByaW1hcnkvMjAgdHJhbnNpdGlvbi1hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQzMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQzMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0yIGJsb2NrXCI+VGhyZWF0IFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0MzQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtbJ3BoaXNoaW5nJywgJ21hbHdhcmUnLCAnc2NhbScsICd0cmFja2VyJywgJ2V4cGxvaXQnLCAncHJpdmFjeSddLm1hcCgocmVhc29uLCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0MzY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0eXBlPVwiYnV0dG9uXCIga2V5PXtyZWFzb259IG9uQ2xpY2s9eygpID0+IHNldFJlcG9ydFJlYXNvbihyZWFzb24pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktMi41IHB4LTMgcm91bmRlZC14bCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYm9yZGVyIHRyYW5zaXRpb24tYWxsIGNhcGl0YWxpemUgJHtcbiAgICAgICAgICAgICAgICAgIHJlcG9ydFJlYXNvbiA9PT0gcmVhc29uID9cbiAgICAgICAgICAgICAgICAgICdiZy1wcmltYXJ5LzE1IGJvcmRlci1wcmltYXJ5LzQwIHRleHQtcHJpbWFyeScgOlxuICAgICAgICAgICAgICAgICAgJ2JnLXNlY29uZGFyeSBib3JkZXItYm9yZGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQnfWBcbiAgICAgICAgICAgICAgICAgIH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199PlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlYXNvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7cmVwb3J0RXJyb3IgJiZcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0NDg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTMgcm91bmRlZC14bCBiZy1yZWQtNDAwLzEwIGJvcmRlciBib3JkZXItcmVkLTQwMC8yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0NDk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXJlZC00MDAgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ1MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1yZWQtNDAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZXBvcnRFcnJvclwiPntyZXBvcnRFcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDUzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICB7cmVwb3J0ZWQgJiZcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0NTU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC04IH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTMgcm91bmRlZC14bCBiZy1lbWVyYWxkLTQwMC8xMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNDAwLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ1NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZW1lcmFsZC00MDAgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDU4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1lbWVyYWxkLTQwMCBmb250LXNlbWlib2xkXCI+UmVwb3J0IHN1Ym1pdHRlZCEgVGhhbmsgeW91IGZvciBoZWxwaW5nIHByb3RlY3QgdXNlcnMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ2MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17cmVwb3J0aW5nIHx8ICFyZXBvcnRVcmwudHJpbSgpfSBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtyZXBvcnRpbmcgPyA8TG9hZGVyMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0NjM6MzFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBhbmltYXRlLXNwaW5cIiAvPiA6IDxTZW5kIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ2Mzo3OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz59XG4gICAgICAgICAgICAgICAgICB7cmVwb3J0aW5nID8gJ1N1Ym1pdHRpbmcuLi4nIDogJ1N1Ym1pdCBSZXBvcnQnfVxuICAgICAgICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9HbGFzc0NhcmQ+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsvKiBTT1VSQ0UgQ09ERSAqL31cbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3NvdXJjZScgJiZcbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDcyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PVwic291cmNlXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gZXhpdD17eyBvcGFjaXR5OiAwIH19IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuXG4gICAgICAgICAgICB7LyogTWFpbiBkb3dubG9hZCBjYXJkICovfVxuICAgICAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0NzU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9IGdsb3c9XCJibHVlXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWFjY2VudC8yMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ3NjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00IG1iLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ3NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC0yeGwgYmctYWNjZW50LzE1IGJvcmRlciBib3JkZXItYWNjZW50LzI1IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxDb2RlMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0Nzg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWFjY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0ODA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDgxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgdGV4dC1sZ1wiPkNZR1VBUkQg4oCUIEZ1bGwgU291cmNlIENvZGU8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDgyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTEgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkIHRoZSBjb21wbGV0ZSBzb3VyY2UgY29kZSDigJQgd2ViIGFwcCwgYnJvd3NlciBleHRlbnNpb24sIHRocmVhdCBkZXRlY3Rpb24gZW5naW5lLCBBSSBtb2R1bGVzLCBhbmQgYWxsIHJ1bGUgc2V0cy4gTUlUIGxpY2Vuc2VkLCBmcmVlIGZvciBhbnkgdXNlLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDg1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZC82MCBtdC0xIGZvbnQtbW9ub1wiPlJlYWN0IMK3IFRhaWx3aW5kIENTUyDCtyBDaHJvbWUgRXh0ZW5zaW9uIE1WMyDCtyBCYXNlNDQgQmFhUzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFByb2dyZXNzICovfVxuICAgICAgICAgICAgICB7c3JjRG93bmxvYWRpbmcgJiZcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDkxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo0OTI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ5MzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXByaW1hcnkgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NDk0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3JjUHJvZ3Jlc3NcIj5QYWNrYWdpbmcgc291cmNlIGZpbGVzLi4uIHtzcmNQcm9ncmVzc30lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ5NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImgtMiByb3VuZGVkLWZ1bGwgYmctYm9yZGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjQ5NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImgtZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1hY2NlbnQgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiIHN0eWxlPXt7IHdpZHRoOiBgJHtzcmNQcm9ncmVzc30lYCB9fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtzcmNEb25lICYmXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjUwMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtYi01IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1lbWVyYWxkLTQwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjUwMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz4gRG93bmxvYWQgY29tcGxldGUhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPE5lb25CdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NTA3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc2l6ZT1cImxnXCIgb25DbGljaz17aGFuZGxlU3JjRG93bmxvYWR9IGRpc2FibGVkPXtzcmNEb3dubG9hZGluZ30+XG4gICAgICAgICAgICAgICAge3NyY0Rvd25sb2FkaW5nID8gPD48TG9hZGVyMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1MDg6MzZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSBhbmltYXRlLXNwaW5cIiAvPiBQYWNrYWdpbmcuLi48Lz4gOlxuICAgICAgICAgICAgICBzcmNEb25lID8gPD48Q2hlY2tDaXJjbGUyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjUwOTozMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gRG93bmxvYWRlZCE8Lz4gOlxuICAgICAgICAgICAgICA8PjxEb3dubG9hZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1MTA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+IERvd25sb2FkIFNvdXJjZSBDb2RlICguemlwKTwvPn1cbiAgICAgICAgICAgICAgPC9OZW9uQnV0dG9uPlxuICAgICAgICAgICAgPC9HbGFzc0NhcmQ+XG5cbiAgICAgICAgICAgIHsvKiBXaGF0J3MgaW5jbHVkZWQgKi99XG4gICAgICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjUxNToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0+XG4gICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1MTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCB0ZXh0LXNtIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8Q29kZTIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NTE3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1wcmltYXJ5XCIgLz4gV2hhdCdzIEluY2x1ZGVkXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NTE5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdXZWIgQXBwJywgZGVzYzogJ0Z1bGwgUmVhY3QgKyBUYWlsd2luZCBzb3VyY2UnLCBpY29uOiAn8J+MkCcgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0Jyb3dzZXIgRXh0ZW5zaW9uJywgZGVzYzogJ0Nocm9tZSBNVjMg4oCUIGFsbCBKUywgSFRNTCwgQ1NTJywgaWNvbjogJ/Cfm6HvuI8nIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdUaHJlYXQgUnVsZXMnLCBkZXNjOiAnQWxsIGJsb2NrXyouanNvbiBydWxlIHNldHMnLCBpY29uOiAn8J+aqycgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0FJIE1vZHVsZXMnLCBkZXNjOiAnTExNIHNjYW4gJiBicmVhY2ggY2hlY2tlciBsb2dpYycsIGljb246ICfwn6SWJyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnQWxsIFBhZ2VzICYgQ29tcG9uZW50cycsIGRlc2M6ICdEYXNoYm9hcmQsIFNjYW5uZXIsIE5ld3MsIGV0Yy4nLCBpY29uOiAn8J+ThCcgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1JFQURNRSArIERvY3MnLCBkZXNjOiAnU2V0dXAgJiBjb250cmlidXRpb24gZ3VpZGUnLCBpY29uOiAn8J+TlicgfV0uXG4gICAgICAgICAgICAgIG1hcCgoaXRlbSwgX19hcnJJZHhfXykgPT5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1Mjg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l0ZW0ubGFiZWx9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTMgcC0zIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzQwIGJvcmRlciBib3JkZXItYm9yZGVyXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1Mjk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZsZXgtc2hyaW5rLTBcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItZmllbGQ9XCJpY29uXCI+e2l0ZW0uaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NTMwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjUzMToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmRcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItZmllbGQ9XCJsYWJlbFwiPntpdGVtLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1MzI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cImRlc2NcIj57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dsYXNzQ2FyZD5cblxuICAgICAgICAgICAgey8qIExpY2Vuc2UgKi99XG4gICAgICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXh0ZW5zaW9uOjU0MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cImJvcmRlci1lbWVyYWxkLTQwMC8yMCBiZy1lbWVyYWxkLTQwMC81XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NTQxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8SGVhcnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeHRlbnNpb246NTQyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1lbWVyYWxkLTQwMCBmbGV4LXNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1NDM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1NDQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0xXCI+TUlUIExpY2Vuc2Ug4oCUIEZyZWUgZm9yIGFueSB1c2U8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4dGVuc2lvbjo1NDU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIFVzZSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSBmcmVlbHkg4oCUIHBlcnNvbmFsIG9yIGNvbW1lcmNpYWwuIEF0dHJpYnV0aW9uIGFwcHJlY2lhdGVkIGJ1dCBub3QgcmVxdWlyZWQuIENvbnRyaWJ1dGlvbnMgd2VsY29tZS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIH1cblxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvRXh0ZW5zaW9uLmpzeCJ9