import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Privacy.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Privacy.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=82de9d48";
import { Eye, Cookie, Fingerprint, ShieldAlert, Globe, Lock, Ban, Wifi, Database, Shield, ToggleLeft, ToggleRight, ChevronRight, ExternalLink, CheckCircle } from "/node_modules/.vite/deps/lucide-react.js?v=76f08321";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import ScoreRing from "/src/components/ui-custom/ScoreRing.jsx";
const DNS_OPTIONS = [
  { id: "adguard", name: "AdGuard Default", primary: "94.140.14.14", secondary: "94.140.15.15", desc: "Blocks ads + trackers + malware", color: "text-primary", border: "border-primary/30", bg: "bg-primary/5" },
  { id: "family", name: "AdGuard Family", primary: "94.140.14.15", secondary: "94.140.15.16", desc: "Blocks adult content + ads + malware", color: "text-rose-400", border: "border-rose-400/30", bg: "bg-rose-400/5" },
  { id: "none", name: "No DNS Filter", primary: "—", secondary: "—", desc: "Use system default DNS (no filtering)", color: "text-muted-foreground", border: "border-border", bg: "bg-secondary/30" }
];
function IOSToggle({ enabled, onChange, "data-collection-item-id": __dataCollectionItemId }) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      "data-source-location": "pages/Privacy:15:4",
      "data-dynamic-content": "true",
      onClick: onChange,
      className: `relative w-12 h-7 rounded-full transition-all duration-300 ${enabled ? "bg-emerald-500" : "bg-secondary border border-border"}`,
      "data-collection-item-id": __dataCollectionItemId,
      children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Privacy:17:6",
          "data-dynamic-content": "true",
          className: "w-5 h-5 rounded-full bg-white shadow-md absolute top-1",
          animate: { left: enabled ? 26 : 4 },
          transition: { type: "spring", stiffness: 600, damping: 35 }
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 36,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/app/src/pages/Privacy.jsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
_c = IOSToggle;
export default function Privacy() {
  _s();
  const [modules, setModules] = useState({
    trackers: true,
    fingerprint: true,
    cookies: true,
    credentials: true,
    ads: true,
    dns: true,
    adultFilter: true
  });
  const [selectedDns, setSelectedDns] = useState("family");
  const toggle = (key) => setModules((prev) => ({ ...prev, [key]: !prev[key] }));
  const privacyModules = [
    { key: "trackers", icon: Eye, title: "Tracker Monitoring", description: "Real-time detection and blocking of web trackers across sites.", blocked: 247, color: "text-primary" },
    { key: "fingerprint", icon: Fingerprint, title: "Fingerprint Protection", description: "Prevents browser fingerprinting used to identify and track you.", blocked: 89, color: "text-accent" },
    { key: "cookies", icon: Cookie, title: "Cookie Analysis", description: "Monitors and controls third-party cookies and session data.", blocked: 1203, color: "text-amber-400" },
    { key: "credentials", icon: ShieldAlert, title: "Credential Protection", description: "Prevents credential theft and unauthorized data exfiltration.", blocked: 12, color: "text-red-400" },
    { key: "ads", icon: Ban, title: "Ad Blocking", description: "Blocks intrusive advertisements and ad-based tracking scripts via AdGuard rules.", blocked: 3456, color: "text-rose-400" },
    { key: "adultFilter", icon: Lock, title: "Adult Content Filter", description: "Blocks adult and pornographic websites using AdGuard Family DNS filtering.", blocked: 892, color: "text-pink-400" },
    { key: "dns", icon: Globe, title: "DNS Filtering", description: "Filters malicious DNS requests using AdGuard DNS servers to prevent phishing.", blocked: 134, color: "text-emerald-400" }
  ];
  const activeCount = Object.values(modules).filter(Boolean).length;
  const score = Math.round(activeCount / privacyModules.length * 100);
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:54:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Privacy:55:6", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Privacy:56:8", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Privacy Center" }, void 0, false, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Privacy:57:8", "data-dynamic-content": "false", className: "text-muted-foreground mt-1", children: "Monitor and control your digital privacy protection" }, void 0, false, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Privacy.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:61:6", "data-dynamic-content": "true", className: "grid md:grid-cols-3 gap-5 mb-8", children: [
      /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Privacy:62:8", "data-dynamic-content": "true", hover: false, glow: "blue", className: "flex flex-col items-center py-8", children: [
        /* @__PURE__ */ jsxDEV(ScoreRing, { "data-source-location": "pages/Privacy:63:10", "data-dynamic-content": "true", score, size: 130, strokeWidth: 10, label: "Privacy Score" }, void 0, false, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Privacy:64:10", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-3", "data-collection-item-field": "activeCount", children: [
          activeCount,
          "/",
          privacyModules.length,
          " modules active"
        ] }, void 0, true, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Privacy:66:8", "data-dynamic-content": "true", hover: false, className: "flex flex-col justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:67:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        { label: "Trackers Blocked", value: "5,007", color: "text-primary" },
        { label: "Cookies Managed", value: "1,203", color: "text-accent" },
        { label: "Threats Prevented", value: "348", color: "text-emerald-400" }
      ].map(
        (stat, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:73:14", "data-dynamic-content": "true", className: "flex items-center justify-between", "data-arr-index": __arrIdx__, children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Privacy:74:16", "data-dynamic-content": "true", className: "text-sm text-muted-foreground", "data-arr-index": __arrIdx__, "data-arr-field": "label", children: stat.label }, void 0, false, {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Privacy:75:16", "data-dynamic-content": "true", className: `text-lg font-bold font-mono ${stat.color}`, "data-arr-index": __arrIdx__, "data-arr-field": "value", children: stat.value }, void 0, false, {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 94,
            columnNumber: 17
          }, this)
        ] }, stat.label, true, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 92,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 86,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Privacy:80:8", "data-dynamic-content": "false", hover: false, className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Privacy:81:10", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground mb-3", children: "Quick Stats" }, void 0, false, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:82:10", "data-dynamic-content": "false", className: "space-y-3", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:83:12", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(Lock, { "data-source-location": "pages/Privacy:84:14", "data-dynamic-content": "false", className: "w-4 h-4 text-emerald-400" }, void 0, false, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 103,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Privacy:85:14", "data-dynamic-content": "false", className: "text-sm text-foreground", children: [
              "Data leaks prevented: ",
              /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/Privacy:85:78", "data-dynamic-content": "false", children: "23" }, void 0, false, {
                fileName: "/app/src/pages/Privacy.jsx",
                lineNumber: 104,
                columnNumber: 151
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 104,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 102,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:87:12", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(Wifi, { "data-source-location": "pages/Privacy:88:14", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 107,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Privacy:89:14", "data-dynamic-content": "false", className: "text-sm text-foreground", children: [
              "Safe browsing sessions: ",
              /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/Privacy:89:80", "data-dynamic-content": "false", children: "1,847" }, void 0, false, {
                fileName: "/app/src/pages/Privacy.jsx",
                lineNumber: 108,
                columnNumber: 153
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 108,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:91:12", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(Fingerprint, { "data-source-location": "pages/Privacy:92:14", "data-dynamic-content": "false", className: "w-4 h-4 text-accent" }, void 0, false, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 111,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Privacy:93:14", "data-dynamic-content": "false", className: "text-sm text-foreground", children: [
              "Fingerprint blocks: ",
              /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/Privacy:93:76", "data-dynamic-content": "false", children: "89" }, void 0, false, {
                fileName: "/app/src/pages/Privacy.jsx",
                lineNumber: 112,
                columnNumber: 149
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 112,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 110,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Privacy.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:100:6", "data-dynamic-content": "true", className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Privacy:101:8", "data-dynamic-content": "false", className: "text-lg font-bold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Database, { "data-source-location": "pages/Privacy:102:10", "data-dynamic-content": "false", className: "w-5 h-5 text-primary" }, void 0, false, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        " AdGuard DNS Configuration"
      ] }, void 0, true, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:104:8", "data-dynamic-content": "true", className: "grid md:grid-cols-3 gap-3", children: DNS_OPTIONS.map(
        (dns, __arrIdx__) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "pages/Privacy:106:12",
            "data-dynamic-content": "true",
            onClick: () => setSelectedDns(dns.id),
            className: `text-left p-4 rounded-2xl border transition-all ${selectedDns === dns.id ? `${dns.border} ${dns.bg} shadow-sm` : "border-border bg-card hover:border-border/80"}`,
            "data-collection-item-id": dns?.id,
            "data-arr-index": __arrIdx__,
            "data-arr-variable-name": "DNS_OPTIONS",
            children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:112:14", "data-dynamic-content": "true", className: "flex items-center justify-between mb-2", "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Privacy:113:16", "data-dynamic-content": "true", className: `text-sm font-bold ${selectedDns === dns.id ? dns.color : "text-foreground"}`, "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", "data-arr-field": "name", children: dns.name }, void 0, false, {
                  fileName: "/app/src/pages/Privacy.jsx",
                  lineNumber: 132,
                  columnNumber: 17
                }, this),
                selectedDns === dns.id && /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/Privacy:114:43", "data-dynamic-content": "true", className: `w-4 h-4 ${dns.color}`, "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS" }, void 0, false, {
                  fileName: "/app/src/pages/Privacy.jsx",
                  lineNumber: 133,
                  columnNumber: 44
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Privacy.jsx",
                lineNumber: 131,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Privacy:116:14", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mb-3", "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", "data-arr-field": "desc", children: dns.desc }, void 0, false, {
                fileName: "/app/src/pages/Privacy.jsx",
                lineNumber: 135,
                columnNumber: 15
              }, this),
              dns.primary !== "—" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:118:16", "data-dynamic-content": "true", className: "space-y-1", "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:119:18", "data-dynamic-content": "true", className: "flex items-center justify-between", "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Privacy:120:20", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground uppercase", "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", children: "Primary" }, void 0, false, {
                    fileName: "/app/src/pages/Privacy.jsx",
                    lineNumber: 139,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("code", { "data-source-location": "pages/Privacy:121:20", "data-dynamic-content": "true", className: `text-xs font-mono font-bold ${selectedDns === dns.id ? dns.color : "text-foreground"}`, "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", "data-arr-field": "primary", children: dns.primary }, void 0, false, {
                    fileName: "/app/src/pages/Privacy.jsx",
                    lineNumber: 140,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Privacy.jsx",
                  lineNumber: 138,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:123:18", "data-dynamic-content": "true", className: "flex items-center justify-between", "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Privacy:124:20", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground uppercase", "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", children: "Secondary" }, void 0, false, {
                    fileName: "/app/src/pages/Privacy.jsx",
                    lineNumber: 143,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("code", { "data-source-location": "pages/Privacy:125:20", "data-dynamic-content": "true", className: `text-xs font-mono font-bold ${selectedDns === dns.id ? dns.color : "text-foreground"}`, "data-arr-index": __arrIdx__, "data-arr-variable-name": "DNS_OPTIONS", "data-arr-field": "secondary", children: dns.secondary }, void 0, false, {
                    fileName: "/app/src/pages/Privacy.jsx",
                    lineNumber: 144,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Privacy.jsx",
                  lineNumber: 142,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Privacy.jsx",
                lineNumber: 137,
                columnNumber: 13
              }, this)
            ]
          },
          dns.id,
          true,
          {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 125,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          "data-source-location": "pages/Privacy:132:8",
          "data-dynamic-content": "false",
          href: "https://adguard-dns.io/en/public-dns.html",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline",
          children: [
            "AdGuard DNS documentation ",
            /* @__PURE__ */ jsxDEV(ExternalLink, { "data-source-location": "pages/Privacy:134:36", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 153,
              columnNumber: 37
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 151,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/Privacy.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Privacy:139:6", "data-dynamic-content": "false", className: "text-lg font-bold text-foreground mb-4 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "pages/Privacy:140:8", "data-dynamic-content": "false", className: "w-5 h-5 text-primary" }, void 0, false, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      " Protection Modules"
    ] }, void 0, true, {
      fileName: "/app/src/pages/Privacy.jsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:142:6", "data-dynamic-content": "true", className: "grid md:grid-cols-2 gap-3", children: privacyModules.map((mod, i) => {
      const Icon = mod.icon;
      const active = modules[mod.key];
      return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Privacy:147:12", "data-dynamic-content": "true", delay: i * 0.04, hover: false, "data-arr-index": i, "data-arr-variable-name": "privacyModules", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:148:14", "data-dynamic-content": "true", className: "flex items-center gap-4", "data-arr-index": i, "data-arr-variable-name": "privacyModules", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:149:16", "data-dynamic-content": "true", className: `p-2.5 rounded-xl transition-all ${active ? "bg-primary/10 border border-primary/20" : "bg-secondary border border-border"}`, "data-arr-index": i, "data-arr-variable-name": "privacyModules", children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/Privacy:152:18", "data-dynamic-content": "true", className: `w-4 h-4 ${active ? mod.color : "text-muted-foreground"}`, "data-arr-index": i, "data-arr-variable-name": "privacyModules" }, void 0, false, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 171,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 168,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:154:16", "data-dynamic-content": "true", className: "flex-1 min-w-0", "data-arr-index": i, "data-arr-variable-name": "privacyModules", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Privacy:155:18", "data-dynamic-content": "true", className: "flex items-center justify-between mb-0.5", "data-arr-index": i, "data-arr-variable-name": "privacyModules", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Privacy:156:20", "data-dynamic-content": "true", className: "text-sm font-semibold text-foreground", "data-arr-index": i, "data-arr-variable-name": "privacyModules", "data-arr-field": "title", children: mod.title }, void 0, false, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 175,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(IOSToggle, { "data-source-location": "pages/Privacy:157:20", "data-dynamic-content": "true", enabled: active, onChange: () => toggle(mod.key), "data-arr-index": i, "data-arr-variable-name": "privacyModules" }, void 0, false, {
              fileName: "/app/src/pages/Privacy.jsx",
              lineNumber: 176,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 174,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Privacy:159:18", "data-dynamic-content": "true", className: "text-xs text-muted-foreground leading-relaxed", "data-arr-index": i, "data-arr-variable-name": "privacyModules", "data-arr-field": "description", children: mod.description }, void 0, false, {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 178,
            columnNumber: 19
          }, this),
          mod.blocked > 0 && active && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Privacy:161:20", "data-dynamic-content": "true", className: `text-xs font-mono font-semibold mt-1.5 ${mod.color}`, "data-arr-index": i, "data-arr-variable-name": "privacyModules", children: [
            mod.blocked.toLocaleString(),
            " blocked"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Privacy.jsx",
            lineNumber: 180,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Privacy.jsx",
          lineNumber: 173,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 167,
        columnNumber: 15
      }, this) }, mod.title, false, {
        fileName: "/app/src/pages/Privacy.jsx",
        lineNumber: 166,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/src/pages/Privacy.jsx",
      lineNumber: 161,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Privacy.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
_s(Privacy, "IghDncp6FdRjBmWEEBvJ3AmAoBw=");
_c2 = Privacy;
var _c, _c2;
$RefreshReg$(_c, "IOSToggle");
$RefreshReg$(_c2, "Privacy");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Privacy.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Privacy.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFVLHdCQUFxQix3QkFBdUIsd0JBQXFCLFFBQU8sU0FBU3NCLFFBQVEsVUFBVSxNQUFNM0IsT0FBT3dCLElBQUl2QixHQUFHLEdBQUcsa0JBQWdCd0IsR0FBRywwQkFBdUIsb0JBQS9LO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQStMO0FBQUEsZUFGak07QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHQTtBQUFBLFVBQ0EsdUJBQUMsT0FBRSx3QkFBcUIsd0JBQXVCLHdCQUFxQixRQUFPLFdBQVUsaURBQWdELGtCQUFnQkEsR0FBRywwQkFBdUIsa0JBQWlCLGtCQUFlLGVBQWVELGNBQUlsQixlQUFsTztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE4TztBQUFBLFVBQzdPa0IsSUFBSWpCLFVBQVUsS0FBS29CLFVBQ3BCLHVCQUFDLE9BQUUsd0JBQXFCLHdCQUF1Qix3QkFBcUIsUUFBTyxXQUFXLDBDQUEwQ0gsSUFBSWpELEtBQUssSUFBSSxrQkFBZ0JrRCxHQUFHLDBCQUF1QixrQkFBa0JEO0FBQUFBLGdCQUFJakIsUUFBUXFCLGVBQWU7QUFBQSxZQUFFO0FBQUEsZUFBdE87QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBOE87QUFBQSxhQVBoUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBU0E7QUFBQSxXQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFnQkEsS0FqQnNGSixJQUFJbkIsT0FBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWtCQTtBQUFBLElBRUosQ0FBQyxLQXpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMEJBO0FBQUEsT0FsSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW1IQTtBQUVKO0FBQUNqQixHQWpKdUJELFNBQU87QUFBQSxNQUFQQTtBQUFPLElBQUFELElBQUEyQztBQUFBLGFBQUEzQyxJQUFBO0FBQUEsYUFBQTJDLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiRXllIiwiQ29va2llIiwiRmluZ2VycHJpbnQiLCJTaGllbGRBbGVydCIsIkdsb2JlIiwiTG9jayIsIkJhbiIsIldpZmkiLCJEYXRhYmFzZSIsIlNoaWVsZCIsIlRvZ2dsZUxlZnQiLCJUb2dnbGVSaWdodCIsIkNoZXZyb25SaWdodCIsIkV4dGVybmFsTGluayIsIkNoZWNrQ2lyY2xlIiwiR2xhc3NDYXJkIiwiU2NvcmVSaW5nIiwiRE5TX09QVElPTlMiLCJpZCIsIm5hbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZGVzYyIsImNvbG9yIiwiYm9yZGVyIiwiYmciLCJJT1NUb2dnbGUiLCJlbmFibGVkIiwib25DaGFuZ2UiLCJfX2RhdGFDb2xsZWN0aW9uSXRlbUlkIiwibGVmdCIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiX2MiLCJQcml2YWN5IiwiX3MiLCJtb2R1bGVzIiwic2V0TW9kdWxlcyIsInRyYWNrZXJzIiwiZmluZ2VycHJpbnQiLCJjb29raWVzIiwiY3JlZGVudGlhbHMiLCJhZHMiLCJkbnMiLCJhZHVsdEZpbHRlciIsInNlbGVjdGVkRG5zIiwic2V0U2VsZWN0ZWREbnMiLCJ0b2dnbGUiLCJrZXkiLCJwcmV2IiwicHJpdmFjeU1vZHVsZXMiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJsb2NrZWQiLCJhY3RpdmVDb3VudCIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJsZW5ndGgiLCJzY29yZSIsIk1hdGgiLCJyb3VuZCIsIm9wYWNpdHkiLCJ5IiwibGFiZWwiLCJ2YWx1ZSIsIm1hcCIsInN0YXQiLCJfX2FycklkeF9fIiwibW9kIiwiaSIsIkljb24iLCJhY3RpdmUiLCJ0b0xvY2FsZVN0cmluZyIsIl9jMiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQcml2YWN5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEV5ZSwgQ29va2llLCBGaW5nZXJwcmludCwgU2hpZWxkQWxlcnQsIEdsb2JlLCBMb2NrLCBCYW4sIFdpZmksIERhdGFiYXNlLCBTaGllbGQsIFRvZ2dsZUxlZnQsIFRvZ2dsZVJpZ2h0LCBDaGV2cm9uUmlnaHQsIEV4dGVybmFsTGluaywgQ2hlY2tDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IEdsYXNzQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3VpLWN1c3RvbS9HbGFzc0NhcmQnO1xuaW1wb3J0IFNjb3JlUmluZyBmcm9tICcuLi9jb21wb25lbnRzL3VpLWN1c3RvbS9TY29yZVJpbmcnO1xuXG5jb25zdCBETlNfT1BUSU9OUyA9IFtcbnsgaWQ6ICdhZGd1YXJkJywgbmFtZTogJ0FkR3VhcmQgRGVmYXVsdCcsIHByaW1hcnk6ICc5NC4xNDAuMTQuMTQnLCBzZWNvbmRhcnk6ICc5NC4xNDAuMTUuMTUnLCBkZXNjOiAnQmxvY2tzIGFkcyArIHRyYWNrZXJzICsgbWFsd2FyZScsIGNvbG9yOiAndGV4dC1wcmltYXJ5JywgYm9yZGVyOiAnYm9yZGVyLXByaW1hcnkvMzAnLCBiZzogJ2JnLXByaW1hcnkvNScgfSxcbnsgaWQ6ICdmYW1pbHknLCBuYW1lOiAnQWRHdWFyZCBGYW1pbHknLCBwcmltYXJ5OiAnOTQuMTQwLjE0LjE1Jywgc2Vjb25kYXJ5OiAnOTQuMTQwLjE1LjE2JywgZGVzYzogJ0Jsb2NrcyBhZHVsdCBjb250ZW50ICsgYWRzICsgbWFsd2FyZScsIGNvbG9yOiAndGV4dC1yb3NlLTQwMCcsIGJvcmRlcjogJ2JvcmRlci1yb3NlLTQwMC8zMCcsIGJnOiAnYmctcm9zZS00MDAvNScgfSxcbnsgaWQ6ICdub25lJywgbmFtZTogJ05vIEROUyBGaWx0ZXInLCBwcmltYXJ5OiAn4oCUJywgc2Vjb25kYXJ5OiAn4oCUJywgZGVzYzogJ1VzZSBzeXN0ZW0gZGVmYXVsdCBETlMgKG5vIGZpbHRlcmluZyknLCBjb2xvcjogJ3RleHQtbXV0ZWQtZm9yZWdyb3VuZCcsIGJvcmRlcjogJ2JvcmRlci1ib3JkZXInLCBiZzogJ2JnLXNlY29uZGFyeS8zMCcgfV07XG5cblxuZnVuY3Rpb24gSU9TVG9nZ2xlKHsgZW5hYmxlZCwgb25DaGFuZ2UsIFwiZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWRcIjogX19kYXRhQ29sbGVjdGlvbkl0ZW1JZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTU6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e29uQ2hhbmdlfVxuICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHctMTIgaC03IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtlbmFibGVkID8gJ2JnLWVtZXJhbGQtNTAwJyA6ICdiZy1zZWNvbmRhcnkgYm9yZGVyIGJvcmRlci1ib3JkZXInfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT5cbiAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxNzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCBhYnNvbHV0ZSB0b3AtMVwiXG4gICAgICBhbmltYXRlPXt7IGxlZnQ6IGVuYWJsZWQgPyAyNiA6IDQgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogJ3NwcmluZycsIHN0aWZmbmVzczogNjAwLCBkYW1waW5nOiAzNSB9fSAvPlxuICAgICAgXG4gICAgPC9idXR0b24+KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcml2YWN5KCkge1xuICBjb25zdCBbbW9kdWxlcywgc2V0TW9kdWxlc10gPSB1c2VTdGF0ZSh7XG4gICAgdHJhY2tlcnM6IHRydWUsXG4gICAgZmluZ2VycHJpbnQ6IHRydWUsXG4gICAgY29va2llczogdHJ1ZSxcbiAgICBjcmVkZW50aWFsczogdHJ1ZSxcbiAgICBhZHM6IHRydWUsXG4gICAgZG5zOiB0cnVlLFxuICAgIGFkdWx0RmlsdGVyOiB0cnVlXG4gIH0pO1xuICBjb25zdCBbc2VsZWN0ZWREbnMsIHNldFNlbGVjdGVkRG5zXSA9IHVzZVN0YXRlKCdmYW1pbHknKTtcblxuICBjb25zdCB0b2dnbGUgPSAoa2V5KSA9PiBzZXRNb2R1bGVzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBba2V5XTogIXByZXZba2V5XSB9KSk7XG5cbiAgY29uc3QgcHJpdmFjeU1vZHVsZXMgPSBbXG4gIHsga2V5OiAndHJhY2tlcnMnLCBpY29uOiBFeWUsIHRpdGxlOiAnVHJhY2tlciBNb25pdG9yaW5nJywgZGVzY3JpcHRpb246ICdSZWFsLXRpbWUgZGV0ZWN0aW9uIGFuZCBibG9ja2luZyBvZiB3ZWIgdHJhY2tlcnMgYWNyb3NzIHNpdGVzLicsIGJsb2NrZWQ6IDI0NywgY29sb3I6ICd0ZXh0LXByaW1hcnknIH0sXG4gIHsga2V5OiAnZmluZ2VycHJpbnQnLCBpY29uOiBGaW5nZXJwcmludCwgdGl0bGU6ICdGaW5nZXJwcmludCBQcm90ZWN0aW9uJywgZGVzY3JpcHRpb246ICdQcmV2ZW50cyBicm93c2VyIGZpbmdlcnByaW50aW5nIHVzZWQgdG8gaWRlbnRpZnkgYW5kIHRyYWNrIHlvdS4nLCBibG9ja2VkOiA4OSwgY29sb3I6ICd0ZXh0LWFjY2VudCcgfSxcbiAgeyBrZXk6ICdjb29raWVzJywgaWNvbjogQ29va2llLCB0aXRsZTogJ0Nvb2tpZSBBbmFseXNpcycsIGRlc2NyaXB0aW9uOiAnTW9uaXRvcnMgYW5kIGNvbnRyb2xzIHRoaXJkLXBhcnR5IGNvb2tpZXMgYW5kIHNlc3Npb24gZGF0YS4nLCBibG9ja2VkOiAxMjAzLCBjb2xvcjogJ3RleHQtYW1iZXItNDAwJyB9LFxuICB7IGtleTogJ2NyZWRlbnRpYWxzJywgaWNvbjogU2hpZWxkQWxlcnQsIHRpdGxlOiAnQ3JlZGVudGlhbCBQcm90ZWN0aW9uJywgZGVzY3JpcHRpb246ICdQcmV2ZW50cyBjcmVkZW50aWFsIHRoZWZ0IGFuZCB1bmF1dGhvcml6ZWQgZGF0YSBleGZpbHRyYXRpb24uJywgYmxvY2tlZDogMTIsIGNvbG9yOiAndGV4dC1yZWQtNDAwJyB9LFxuICB7IGtleTogJ2FkcycsIGljb246IEJhbiwgdGl0bGU6ICdBZCBCbG9ja2luZycsIGRlc2NyaXB0aW9uOiAnQmxvY2tzIGludHJ1c2l2ZSBhZHZlcnRpc2VtZW50cyBhbmQgYWQtYmFzZWQgdHJhY2tpbmcgc2NyaXB0cyB2aWEgQWRHdWFyZCBydWxlcy4nLCBibG9ja2VkOiAzNDU2LCBjb2xvcjogJ3RleHQtcm9zZS00MDAnIH0sXG4gIHsga2V5OiAnYWR1bHRGaWx0ZXInLCBpY29uOiBMb2NrLCB0aXRsZTogJ0FkdWx0IENvbnRlbnQgRmlsdGVyJywgZGVzY3JpcHRpb246ICdCbG9ja3MgYWR1bHQgYW5kIHBvcm5vZ3JhcGhpYyB3ZWJzaXRlcyB1c2luZyBBZEd1YXJkIEZhbWlseSBETlMgZmlsdGVyaW5nLicsIGJsb2NrZWQ6IDg5MiwgY29sb3I6ICd0ZXh0LXBpbmstNDAwJyB9LFxuICB7IGtleTogJ2RucycsIGljb246IEdsb2JlLCB0aXRsZTogJ0ROUyBGaWx0ZXJpbmcnLCBkZXNjcmlwdGlvbjogJ0ZpbHRlcnMgbWFsaWNpb3VzIEROUyByZXF1ZXN0cyB1c2luZyBBZEd1YXJkIEROUyBzZXJ2ZXJzIHRvIHByZXZlbnQgcGhpc2hpbmcuJywgYmxvY2tlZDogMTM0LCBjb2xvcjogJ3RleHQtZW1lcmFsZC00MDAnIH1dO1xuXG5cbiAgY29uc3QgYWN0aXZlQ291bnQgPSBPYmplY3QudmFsdWVzKG1vZHVsZXMpLmZpbHRlcihCb29sZWFuKS5sZW5ndGg7XG4gIGNvbnN0IHNjb3JlID0gTWF0aC5yb3VuZChhY3RpdmVDb3VudCAvIHByaXZhY3lNb2R1bGVzLmxlbmd0aCAqIDEwMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo1NDo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtNCBtZDpwLTggbWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo1NTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjU2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiPlByaXZhY3kgQ2VudGVyPC9oMT5cbiAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjU3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTFcIj5Nb25pdG9yIGFuZCBjb250cm9sIHlvdXIgZGlnaXRhbCBwcml2YWN5IHByb3RlY3Rpb248L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiBPdmVydmlldyAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjYxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC01IG1iLThcIj5cbiAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6NjI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gZ2xvdz1cImJsdWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweS04XCI+XG4gICAgICAgICAgPFNjb3JlUmluZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6NjM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzY29yZT17c2NvcmV9IHNpemU9ezEzMH0gc3Ryb2tlV2lkdGg9ezEwfSBsYWJlbD1cIlByaXZhY3kgU2NvcmVcIiAvPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo2NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImFjdGl2ZUNvdW50XCI+e2FjdGl2ZUNvdW50fS97cHJpdmFjeU1vZHVsZXMubGVuZ3RofSBtb2R1bGVzIGFjdGl2ZTwvcD5cbiAgICAgICAgPC9HbGFzc0NhcmQ+XG4gICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjY2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo2NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgIHsgbGFiZWw6ICdUcmFja2VycyBCbG9ja2VkJywgdmFsdWU6ICc1LDAwNycsIGNvbG9yOiAndGV4dC1wcmltYXJ5JyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0Nvb2tpZXMgTWFuYWdlZCcsIHZhbHVlOiAnMSwyMDMnLCBjb2xvcjogJ3RleHQtYWNjZW50JyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ1RocmVhdHMgUHJldmVudGVkJywgdmFsdWU6ICczNDgnLCBjb2xvcjogJ3RleHQtZW1lcmFsZC00MDAnIH1dLlxuICAgICAgICAgICAgbWFwKChzdGF0LCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6NzM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3N0YXQubGFiZWx9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6NzQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cImxhYmVsXCI+e3N0YXQubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo3NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtbGcgZm9udC1ib2xkIGZvbnQtbW9ubyAke3N0YXQuY29sb3J9YH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLWZpZWxkPVwidmFsdWVcIj57c3RhdC52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HbGFzc0NhcmQ+XG4gICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjgwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaG92ZXI9e2ZhbHNlfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo4MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTNcIj5RdWljayBTdGF0czwvaDM+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6ODI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo4MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8TG9jayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6ODQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5Ojg1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1mb3JlZ3JvdW5kXCI+RGF0YSBsZWFrcyBwcmV2ZW50ZWQ6IDxzdHJvbmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5Ojg1Ojc4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPjIzPC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo4NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8V2lmaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6ODg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6ODk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWZvcmVncm91bmRcIj5TYWZlIGJyb3dzaW5nIHNlc3Npb25zOiA8c3Ryb25nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo4OTo4MFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj4xLDg0Nzwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6OTE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPEZpbmdlcnByaW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo5MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYWNjZW50XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjkzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1mb3JlZ3JvdW5kXCI+RmluZ2VycHJpbnQgYmxvY2tzOiA8c3Ryb25nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeTo5Mzo3NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj44OTwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQWRHdWFyZCBETlMgU2VsZWN0b3IgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxMDA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxMDE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxEYXRhYmFzZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTAyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1wcmltYXJ5XCIgLz4gQWRHdWFyZCBETlMgQ29uZmlndXJhdGlvblxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxMDQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTNcIj5cbiAgICAgICAgICB7RE5TX09QVElPTlMubWFwKChkbnMsIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTA2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtkbnMuaWR9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkRG5zKGRucy5pZCl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1sZWZ0IHAtNCByb3VuZGVkLTJ4bCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICBzZWxlY3RlZERucyA9PT0gZG5zLmlkID9cbiAgICAgICAgICBgJHtkbnMuYm9yZGVyfSAke2Rucy5iZ30gc2hhZG93LXNtYCA6XG4gICAgICAgICAgJ2JvcmRlci1ib3JkZXIgYmctY2FyZCBob3Zlcjpib3JkZXItYm9yZGVyLzgwJ31gXG4gICAgICAgICAgfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZG5zPy5pZH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfT1BUSU9OU1wiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxMTI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMlwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX09QVElPTlNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTEzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LWJvbGQgJHtzZWxlY3RlZERucyA9PT0gZG5zLmlkID8gZG5zLmNvbG9yIDogJ3RleHQtZm9yZWdyb3VuZCd9YH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfT1BUSU9OU1wiIGRhdGEtYXJyLWZpZWxkPVwibmFtZVwiPntkbnMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkRG5zID09PSBkbnMuaWQgJiYgPENoZWNrQ2lyY2xlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxMTQ6NDNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTQgaC00ICR7ZG5zLmNvbG9yfWB9IGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX09QVElPTlNcIiAvPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxMTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi0zXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfT1BUSU9OU1wiIGRhdGEtYXJyLWZpZWxkPVwiZGVzY1wiPntkbnMuZGVzY308L3A+XG4gICAgICAgICAgICAgIHtkbnMucHJpbWFyeSAhPT0gJ+KAlCcgJiZcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjExODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMVwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX09QVElPTlNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjExOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX09QVElPTlNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjEyMDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LW11dGVkLWZvcmVncm91bmQgdXBwZXJjYXNlXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfT1BUSU9OU1wiPlByaW1hcnk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxMjE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGQgJHtzZWxlY3RlZERucyA9PT0gZG5zLmlkID8gZG5zLmNvbG9yIDogJ3RleHQtZm9yZWdyb3VuZCd9YH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfT1BUSU9OU1wiIGRhdGEtYXJyLWZpZWxkPVwicHJpbWFyeVwiPntkbnMucHJpbWFyeX08L2NvZGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjEyMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiRE5TX09QVElPTlNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjEyNDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LW11dGVkLWZvcmVncm91bmQgdXBwZXJjYXNlXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJETlNfT1BUSU9OU1wiPlNlY29uZGFyeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjEyNToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1tb25vIGZvbnQtYm9sZCAke3NlbGVjdGVkRG5zID09PSBkbnMuaWQgPyBkbnMuY29sb3IgOiAndGV4dC1mb3JlZ3JvdW5kJ31gfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIkROU19PUFRJT05TXCIgZGF0YS1hcnItZmllbGQ9XCJzZWNvbmRhcnlcIj57ZG5zLnNlY29uZGFyeX08L2NvZGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTMyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHJlZj1cImh0dHBzOi8vYWRndWFyZC1kbnMuaW8vZW4vcHVibGljLWRucy5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBtdC0zIHRleHQteHMgdGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgIEFkR3VhcmQgRE5TIGRvY3VtZW50YXRpb24gPEV4dGVybmFsTGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTM0OjM2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFByb3RlY3Rpb24gTW9kdWxlcyAqL31cbiAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTM5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgPFNoaWVsZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTQwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXByaW1hcnlcIiAvPiBQcm90ZWN0aW9uIE1vZHVsZXNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxNDI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAge3ByaXZhY3lNb2R1bGVzLm1hcCgobW9kLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgSWNvbiA9IG1vZC5pY29uO1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IG1vZHVsZXNbbW9kLmtleV07XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjE0NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17bW9kLnRpdGxlfSBkZWxheT17aSAqIDAuMDR9IGhvdmVyPXtmYWxzZX0gZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJwcml2YWN5TW9kdWxlc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxNDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwicHJpdmFjeU1vZHVsZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxNDk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BwLTIuNSByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlID8gJ2JnLXByaW1hcnkvMTAgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwJyA6ICdiZy1zZWNvbmRhcnkgYm9yZGVyIGJvcmRlci1ib3JkZXInfWBcbiAgICAgICAgICAgICAgICB9IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwicHJpdmFjeU1vZHVsZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxNTI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTQgaC00ICR7YWN0aXZlID8gbW9kLmNvbG9yIDogJ3RleHQtbXV0ZWQtZm9yZWdyb3VuZCd9YH0gZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJwcml2YWN5TW9kdWxlc1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTU0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInByaXZhY3lNb2R1bGVzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpdmFjeToxNTU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMC41XCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJwcml2YWN5TW9kdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjE1NjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmRcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInByaXZhY3lNb2R1bGVzXCIgZGF0YS1hcnItZmllbGQ9XCJ0aXRsZVwiPnttb2QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPElPU1RvZ2dsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaXZhY3k6MTU3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZW5hYmxlZD17YWN0aXZlfSBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlKG1vZC5rZXkpfSBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInByaXZhY3lNb2R1bGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjE1OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwicHJpdmFjeU1vZHVsZXNcIiBkYXRhLWFyci1maWVsZD1cImRlc2NyaXB0aW9uXCI+e21vZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICB7bW9kLmJsb2NrZWQgPiAwICYmIGFjdGl2ZSAmJlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Qcml2YWN5OjE2MToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgbXQtMS41ICR7bW9kLmNvbG9yfWB9IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwicHJpdmFjeU1vZHVsZXNcIj57bW9kLmJsb2NrZWQudG9Mb2NhbGVTdHJpbmcoKX0gYmxvY2tlZDwvcD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dsYXNzQ2FyZD4pO1xuXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvUHJpdmFjeS5qc3gifQ==