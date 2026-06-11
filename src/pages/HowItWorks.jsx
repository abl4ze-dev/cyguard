import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/HowItWorks.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/HowItWorks.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion, useInView } from "/node_modules/.vite/deps/framer-motion.js?v=82de9d48";
import __vite__cjsImport5_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const useRef = __vite__cjsImport5_react["useRef"];
import {
  Shield,
  Brain,
  Zap,
  Eye,
  Lock,
  Globe,
  Server,
  Code2,
  Cpu,
  Network,
  Database,
  FileSearch,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Layers,
  Fingerprint,
  Radio,
  Bot,
  ShieldCheck,
  ShieldAlert,
  ScanSearch,
  Bug,
  Wifi
} from "/node_modules/.vite/deps/lucide-react.js?v=76f08321";
function Section({ children, className = "", "data-collection-item-id": __dataCollectionItemId }) {
  _s();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "pages/HowItWorks:16:4",
      "data-dynamic-content": "true",
      ref,
      initial: { opacity: 0, y: 48 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.7, ease: "easeOut" },
      className,
      "data-collection-item-id": __dataCollectionItemId,
      children
    },
    void 0,
    false,
    {
      fileName: "/app/src/pages/HowItWorks.jsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}
_s(Section, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
  return [useInView];
});
_c = Section;
function StepCard({ step, icon: Icon, title, desc, color, delay = 0, "data-collection-item-id": __dataCollectionItemId }) {
  _s2();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const colors = {
    blue: { bg: "from-primary/20 to-primary/5", border: "border-primary/30", icon: "text-primary", glow: "shadow-primary/20", num: "bg-primary/20 text-primary" },
    purple: { bg: "from-accent/20 to-accent/5", border: "border-accent/30", icon: "text-accent", glow: "shadow-accent/20", num: "bg-accent/20 text-accent" },
    green: { bg: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/30", icon: "text-emerald-400", glow: "shadow-emerald-500/20", num: "bg-emerald-500/20 text-emerald-400" },
    red: { bg: "from-red-500/20 to-red-500/5", border: "border-red-500/30", icon: "text-red-400", glow: "shadow-red-500/20", num: "bg-red-500/20 text-red-400" },
    amber: { bg: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/30", icon: "text-amber-400", glow: "shadow-amber-500/20", num: "bg-amber-500/20 text-amber-400" }
  };
  const c = colors[color] || colors.blue;
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "pages/HowItWorks:36:4",
      "data-dynamic-content": "true",
      ref,
      initial: { opacity: 0, y: 32 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.6, delay },
      whileHover: { y: -6, transition: { duration: 0.2 } },
      className: `relative bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl p-6 shadow-xl ${c.glow}`,
      "data-collection-item-id": __dataCollectionItemId,
      children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:39:6", "data-dynamic-content": "true", className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:40:8", "data-dynamic-content": "true", className: `w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0 shadow-lg ${c.glow}`, children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/HowItWorks:41:10", "data-dynamic-content": "true", className: `w-6 h-6 ${c.icon}` }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 59,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:43:8", "data-dynamic-content": "true", className: "flex-1", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:44:10", "data-dynamic-content": "true", className: "flex items-center gap-3 mb-2", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/HowItWorks:45:12", "data-dynamic-content": "true", className: `text-xs font-black px-2.5 py-0.5 rounded-full ${c.num}`, "data-collection-item-field": "step", "data-collection-item-id": __dataCollectionItemId, children: [
            "STEP ",
            step
          ] }, void 0, true, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 64,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 63,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/HowItWorks:47:10", "data-dynamic-content": "true", className: "text-base font-bold text-foreground mb-1", "data-collection-item-field": "title", "data-collection-item-id": __dataCollectionItemId, children: title }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 66,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/HowItWorks:48:10", "data-dynamic-content": "true", className: "text-sm text-muted-foreground leading-relaxed", "data-collection-item-field": "desc", "data-collection-item-id": __dataCollectionItemId, children: desc }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 67,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 62,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/app/src/pages/HowItWorks.jsx",
      lineNumber: 55,
      columnNumber: 5
    },
    this
  );
}
_s2(StepCard, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
  return [useInView];
});
_c2 = StepCard;
function TechBadge({ icon: Icon, label, sublabel, color, "data-collection-item-id": __dataCollectionItemId }) {
  const cols = {
    blue: "border-primary/30 bg-primary/5 text-primary",
    purple: "border-accent/30 bg-accent/5 text-accent",
    green: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
    amber: "border-amber-500/30 bg-amber-500/5 text-amber-400"
  };
  return /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/HowItWorks:64:4", "data-dynamic-content": "true", whileHover: { scale: 1.05 }, className: `flex flex-col items-center gap-2 p-4 rounded-xl border ${cols[color]} text-center`, "data-collection-item-id": __dataCollectionItemId, children: [
    /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/HowItWorks:65:6", "data-dynamic-content": "false", className: "w-7 h-7" }, void 0, false, {
      fileName: "/app/src/pages/HowItWorks.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/HowItWorks:66:6", "data-dynamic-content": "true", className: "text-xs font-bold", "data-collection-item-field": "label", "data-collection-item-id": __dataCollectionItemId, children: label }, void 0, false, {
      fileName: "/app/src/pages/HowItWorks.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    sublabel && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/HowItWorks:67:19", "data-dynamic-content": "true", className: "text-[10px] opacity-70", "data-collection-item-field": "sublabel", "data-collection-item-id": __dataCollectionItemId, children: sublabel }, void 0, false, {
      fileName: "/app/src/pages/HowItWorks.jsx",
      lineNumber: 86,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/HowItWorks.jsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
_c3 = TechBadge;
const PIPELINE_STEPS = [
  { step: 1, icon: Globe, title: "Input Received", desc: "URL, file, text, or image submitted by user or auto-captured by browser extension.", color: "blue" },
  { step: 2, icon: ScanSearch, title: "Signature Scanning", desc: "Compared against 50,000+ known malicious domain signatures, phishing patterns, and tracker fingerprints in real-time.", color: "purple" },
  { step: 3, icon: Brain, title: "AI Deep Analysis", desc: "Our LLM-powered engine analyzes behavioral patterns, linguistic signals, image artifacts, and URL semantics.", color: "blue" },
  { step: 4, icon: Network, title: "Threat Intelligence", desc: "Cross-referenced with live threat feeds, community reports, and OSINT sources for maximum accuracy.", color: "amber" },
  { step: 5, icon: Layers, title: "Risk Scoring", desc: "Multi-layer scoring engine combines all signals into a 0–100 threat score with confidence rating.", color: "purple" },
  { step: 6, icon: ShieldCheck, title: "Result + Action", desc: "Instant verdict delivered with detailed explanation, cyber risk breakdown, and actionable recommendations.", color: "green" }
];
const AI_DETECTION_STEPS = [
  { step: 1, icon: Eye, title: "Pattern Recognition", desc: "Analyzes statistical patterns unique to AI generators — uniform textures, synthetic symmetry, over-smooth gradients.", color: "blue" },
  { step: 2, icon: Fingerprint, title: "Signature Matching", desc: "Identifies platform-specific artifacts from Midjourney, DALL-E, Stable Diffusion, Sora, and 40+ AI tools.", color: "purple" },
  { step: 3, icon: Cpu, title: "Semantic Analysis", desc: "For text: detects AI vocabulary patterns, sentence uniformity, filler phrases, and structural templates.", color: "amber" },
  { step: 4, icon: Bot, title: "Deepfake Detection", desc: "Checks for facial inconsistencies, background artifacts, lighting discontinuities common in deepfake media.", color: "red" },
  { step: 5, icon: ShieldAlert, title: "Cyber Risk Overlay", desc: "Correlates AI content with known attack vectors — AI phishing, synthetic identity fraud, disinfo campaigns.", color: "red" },
  { step: 6, icon: CheckCircle, title: "Confidence Verdict", desc: "Returns AI probability %, confidence level, all detected signals, and specific security risks.", color: "green" }
];
const TECH_STACK = [
  { icon: Brain, label: "GPT-4o / Gemini", sublabel: "AI Analysis Engine", color: "blue" },
  { icon: Shield, label: "DeclarativeNetRequest", sublabel: "MV3 Ad Blocking", color: "purple" },
  { icon: Database, label: "Threat Intelligence", sublabel: "50K+ Signatures", color: "amber" },
  { icon: Zap, label: "Real-time Engine", sublabel: "<200ms Response", color: "green" },
  { icon: Code2, label: "React + Vite", sublabel: "Frontend", color: "blue" },
  { icon: Server, label: "Base44 Backend", sublabel: "Cloud Infrastructure", color: "purple" },
  { icon: Wifi, label: "Chrome Extension", sublabel: "Manifest V3", color: "green" },
  { icon: Lock, label: "Zero Trust", sublabel: "Security Model", color: "amber" }
];
export default function HowItWorks() {
  _s3();
  const [activeFlow, setActiveFlow] = useState("scan");
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:105:4", "data-dynamic-content": "true", className: "min-h-screen", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:107:6", "data-dynamic-content": "true", className: "relative overflow-hidden py-20 px-4 md:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:108:8", "data-dynamic-content": "false", className: "absolute inset-0 grid-pattern opacity-30" }, void 0, false, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:109:8", "data-dynamic-content": "false", className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" }, void 0, false, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:110:8", "data-dynamic-content": "false", className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/8 blur-2xl pointer-events-none" }, void 0, false, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/HowItWorks:112:8", "data-dynamic-content": "true", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "relative max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:113:10", "data-dynamic-content": "false", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6", children: [
          /* @__PURE__ */ jsxDEV(Cpu, { "data-source-location": "pages/HowItWorks:114:12", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 133,
            columnNumber: 13
          }, this),
          " Under the Hood"
        ] }, void 0, true, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/HowItWorks:116:10", "data-dynamic-content": "false", className: "text-4xl md:text-6xl font-black text-foreground mb-4", children: [
          "How ",
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/HowItWorks:117:16", "data-dynamic-content": "false", className: "gradient-text", children: "CYGUARD" }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          " Works"
        ] }, void 0, true, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/HowItWorks:119:10", "data-dynamic-content": "false", className: "text-lg text-muted-foreground leading-relaxed", children: `A multi-layer AI security engine that processes every threat in under 200ms. Here's exactly what happens when you hit "Scan".` }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 138,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/HowItWorks.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:126:6", "data-dynamic-content": "true", className: "max-w-6xl mx-auto px-4 md:px-8 pb-20 space-y-24", children: [
      /* @__PURE__ */ jsxDEV(Section, { "data-source-location": "pages/HowItWorks:129:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:130:10", "data-dynamic-content": "true", className: "flex justify-center gap-3 flex-wrap mb-12", children: [
          { id: "scan", label: "Scan Pipeline", icon: ScanSearch },
          { id: "ai", label: "AI Detector", icon: Bot }
        ].map(
          ({ id, label, icon: Icon }) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-source-location": "pages/HowItWorks:135:14",
              "data-dynamic-content": "true",
              onClick: () => setActiveFlow(id),
              className: `flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all border ${activeFlow === id ? "bg-primary/15 border-primary/40 text-primary shadow-lg shadow-primary/10" : "bg-card border-border text-muted-foreground hover:text-foreground"}`,
              "data-collection-item-field": "label",
              "data-collection-item-id": id,
              children: [
                /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/HowItWorks:141:16", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 160,
                  columnNumber: 17
                }, this),
                label
              ]
            },
            id,
            true,
            {
              fileName: "/app/src/pages/HowItWorks.jsx",
              lineNumber: 154,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:147:10", "data-dynamic-content": "true", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: (activeFlow === "scan" ? PIPELINE_STEPS : AI_DETECTION_STEPS).map(
          (step, i) => /* @__PURE__ */ jsxDEV(React.Fragment, { "data-source-location": "pages/HowItWorks:149:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(StepCard, { "data-source-location": "pages/HowItWorks:150:16", "data-dynamic-content": "true", ...step, delay: i * 0.1 }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 169,
            columnNumber: 17
          }, this) }, step.step, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 168,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 166,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:156:10", "data-dynamic-content": "true", className: "mt-8 flex items-center justify-center gap-1 flex-wrap", children: (activeFlow === "scan" ? PIPELINE_STEPS : AI_DETECTION_STEPS).map(
          (s, i) => /* @__PURE__ */ jsxDEV(React.Fragment, { "data-source-location": "pages/HowItWorks:158:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/HowItWorks:159:16",
              "data-dynamic-content": "true",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.8 + i * 0.1 },
              className: "flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:161:18", "data-dynamic-content": "true", className: "w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold text-muted-foreground", "data-collection-item-field": "step", "data-collection-item-id": s?.id || s?._id, children: s.step }, void 0, false, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 180,
                  columnNumber: 19
                }, this),
                i < 5 && /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "pages/HowItWorks:164:28", "data-dynamic-content": "false", className: "w-4 h-4 text-muted-foreground/40" }, void 0, false, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 183,
                  columnNumber: 29
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/HowItWorks.jsx",
              lineNumber: 178,
              columnNumber: 17
            },
            this
          ) }, s.step, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 177,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 175,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Section, { "data-source-location": "pages/HowItWorks:172:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:173:10", "data-dynamic-content": "false", className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/HowItWorks:174:12", "data-dynamic-content": "false", className: "text-3xl font-black text-foreground mb-3", children: "Multi-Layer Architecture" }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 193,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/HowItWorks:175:12", "data-dynamic-content": "false", className: "text-muted-foreground", children: "Every request passes through all layers simultaneously for maximum accuracy" }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 194,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:178:10", "data-dynamic-content": "true", className: "relative", children: [
          { label: "User Input Layer", desc: "Browser Extension / Web App / API", icon: Globe, color: "border-primary/40 bg-primary/5", text: "text-primary" },
          { label: "Signature Engine", desc: "Pattern Matching · Known Threat DB · Blocklist Rules", icon: Database, color: "border-accent/40 bg-accent/5", text: "text-accent" },
          { label: "AI Analysis Layer", desc: "LLM Behavioral Analysis · NLP · Computer Vision", icon: Brain, color: "border-emerald-500/40 bg-emerald-500/5", text: "text-emerald-400" },
          { label: "Threat Intelligence", desc: "OSINT · Community Reports · Live Feed Correlation", icon: Radio, color: "border-amber-500/40 bg-amber-500/5", text: "text-amber-400" },
          { label: "Scoring & Decision", desc: "Risk Score Aggregation · Confidence Calculation", icon: Zap, color: "border-red-500/40 bg-red-500/5", text: "text-red-400" },
          { label: "Response Layer", desc: "Verdict · Explanation · Block / Warn / Allow", icon: ShieldCheck, color: "border-primary/40 bg-primary/5", text: "text-primary" }
        ].map((layer, i) => {
          const Icon = layer.icon;
          return /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/HowItWorks:190:16",
              "data-dynamic-content": "true",
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: `flex items-center gap-4 p-4 rounded-xl border ${layer.color} mb-3`,
              style: { marginLeft: `${i * 24}px`, marginRight: `${(5 - i) * 4}px` },
              "data-arr-index": i,
              children: [
                /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/HowItWorks:194:18", "data-dynamic-content": "true", className: `w-5 h-5 ${layer.text} flex-shrink-0`, "data-arr-index": i }, void 0, false, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 213,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:195:18", "data-dynamic-content": "true", className: "flex-1", "data-arr-index": i, children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/HowItWorks:196:20", "data-dynamic-content": "true", className: `text-sm font-bold ${layer.text}`, "data-arr-index": i, "data-arr-field": "label", children: layer.label }, void 0, false, {
                    fileName: "/app/src/pages/HowItWorks.jsx",
                    lineNumber: 215,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/HowItWorks:197:20", "data-dynamic-content": "true", className: "text-xs text-muted-foreground ml-3", "data-arr-index": i, "data-arr-field": "desc", children: layer.desc }, void 0, false, {
                    fileName: "/app/src/pages/HowItWorks.jsx",
                    lineNumber: 216,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 214,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:199:18", "data-dynamic-content": "true", className: `w-2 h-2 rounded-full ${layer.text.replace("text-", "bg-")} animate-pulse`, "data-arr-index": i }, void 0, false, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 218,
                  columnNumber: 19
                }, this)
              ]
            },
            i,
            true,
            {
              fileName: "/app/src/pages/HowItWorks.jsx",
              lineNumber: 209,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 197,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Section, { "data-source-location": "pages/HowItWorks:207:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:208:10", "data-dynamic-content": "true", className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        { value: "500 ms", label: "Avg Response Time", color: "text-primary" },
        { value: "99.2%", label: "Detection Accuracy", color: "text-emerald-400" },
        { value: "400K+", label: "AdGuard Filter Rules", color: "text-accent" },
        { value: "Global", label: "Adult Site Blocking", color: "text-amber-400" }
      ].map(
        (s, __arrIdx__) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-source-location": "pages/HowItWorks:215:14",
            "data-dynamic-content": "true",
            whileHover: { y: -4 },
            className: "glass rounded-2xl p-5 text-center border border-border",
            "data-arr-index": __arrIdx__,
            children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:217:16", "data-dynamic-content": "true", className: `text-3xl font-black font-mono ${s.color} mb-1`, "data-arr-index": __arrIdx__, "data-arr-field": "value", children: s.value }, void 0, false, {
                fileName: "/app/src/pages/HowItWorks.jsx",
                lineNumber: 236,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:218:16", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", "data-arr-index": __arrIdx__, "data-arr-field": "label", children: s.label }, void 0, false, {
                fileName: "/app/src/pages/HowItWorks.jsx",
                lineNumber: 237,
                columnNumber: 17
              }, this)
            ]
          },
          s.label,
          true,
          {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 234,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 227,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Section, { "data-source-location": "pages/HowItWorks:225:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:226:10", "data-dynamic-content": "false", className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/HowItWorks:227:12", "data-dynamic-content": "false", className: "text-3xl font-black text-foreground mb-3", children: "Tech Stack" }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 246,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/HowItWorks:228:12", "data-dynamic-content": "false", className: "text-muted-foreground", children: "Built with the best-in-class technologies for security, speed, and reliability" }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 247,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 245,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:230:10", "data-dynamic-content": "true", className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: TECH_STACK.map(
          (t, i) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/HowItWorks:232:14",
              "data-dynamic-content": "true",
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.07 },
              "data-arr-index": i,
              "data-arr-variable-name": "TECH_STACK",
              children: /* @__PURE__ */ jsxDEV(TechBadge, { "data-source-location": "pages/HowItWorks:234:16", "data-dynamic-content": "true", ...t, "data-arr-index": i, "data-arr-variable-name": "TECH_STACK" }, void 0, false, {
                fileName: "/app/src/pages/HowItWorks.jsx",
                lineNumber: 253,
                columnNumber: 17
              }, this)
            },
            t.label,
            false,
            {
              fileName: "/app/src/pages/HowItWorks.jsx",
              lineNumber: 251,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 249,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 244,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Section, { "data-source-location": "pages/HowItWorks:241:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:242:10", "data-dynamic-content": "false", className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/HowItWorks:243:12", "data-dynamic-content": "false", className: "text-3xl font-black text-foreground mb-3", children: "Browser Extension Flow" }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 262,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/HowItWorks:244:12", "data-dynamic-content": "false", className: "text-muted-foreground", children: "How the CYGUARD Shield extension protects you in real-time" }, void 0, false, {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 263,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 261,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:247:10", "data-dynamic-content": "true", className: "grid md:grid-cols-3 gap-6", children: [
          {
            icon: Globe,
            color: "blue",
            title: "You Visit a Website",
            points: ["URL intercepted at browser level", "Checked before page loads", "Domain reputation lookup"]
          },
          {
            icon: Shield,
            color: "purple",
            title: "CYGUARD Analyzes",
            points: ["Phishing pattern matching", "Ad/tracker request blocking (DNR rules)", "Content script injection for deep scan"]
          },
          {
            icon: CheckCircle,
            color: "green",
            title: "Instant Decision",
            points: [
              { icon: CheckCircle, color: "text-emerald-400", text: "Safe — page loads normally" },
              { icon: AlertTriangle, color: "text-amber-400", text: "Warning — banner + badge shown" },
              { icon: ShieldAlert, color: "text-red-400", text: "Danger — alert + leave prompt" }
            ]
          }
        ].map((col, i) => {
          const Icon = col.icon;
          const clr = { blue: "text-primary border-primary/30 bg-primary/5", purple: "text-accent border-accent/30 bg-accent/5", green: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" }[col.color];
          return /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/HowItWorks:269:16",
              "data-dynamic-content": "true",
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.15 },
              className: `glass rounded-2xl p-6 border ${clr}`,
              "data-arr-index": i,
              children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:272:18", "data-dynamic-content": "true", className: "flex items-center gap-3 mb-4", "data-arr-index": i, children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:273:20", "data-dynamic-content": "true", className: `w-10 h-10 rounded-xl flex items-center justify-center ${clr}`, "data-arr-index": i, children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/HowItWorks:274:22", "data-dynamic-content": "false", className: "w-5 h-5", "data-arr-index": i }, void 0, false, {
                    fileName: "/app/src/pages/HowItWorks.jsx",
                    lineNumber: 293,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/HowItWorks.jsx",
                    lineNumber: 292,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/HowItWorks:276:20", "data-dynamic-content": "true", className: "font-bold text-foreground", "data-arr-index": i, "data-arr-field": "title", children: col.title }, void 0, false, {
                    fileName: "/app/src/pages/HowItWorks.jsx",
                    lineNumber: 295,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 291,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/HowItWorks:278:18", "data-dynamic-content": "true", className: "space-y-2", "data-arr-index": i, children: col.points.map((p, j) => {
                  if (typeof p === "string") {
                    return /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/HowItWorks:282:26", "data-dynamic-content": "true", className: "flex items-start gap-2 text-sm text-muted-foreground", "data-collection-item-field": "p", children: [
                      /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "pages/HowItWorks:283:28", "data-dynamic-content": "false", className: "w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-muted-foreground/50" }, void 0, false, {
                        fileName: "/app/src/pages/HowItWorks.jsx",
                        lineNumber: 302,
                        columnNumber: 29
                      }, this),
                      p
                    ] }, j, true, {
                      fileName: "/app/src/pages/HowItWorks.jsx",
                      lineNumber: 301,
                      columnNumber: 27
                    }, this);
                  }
                  const PI = p.icon;
                  return /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/HowItWorks:289:24", "data-dynamic-content": "true", className: "flex items-start gap-2 text-sm text-muted-foreground", "data-collection-item-field": "text", "data-collection-item-id": p?.id || p?._id, children: [
                    /* @__PURE__ */ jsxDEV(PI, { "data-source-location": "pages/HowItWorks:290:26", "data-dynamic-content": "true", className: `w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.color}` }, void 0, false, {
                      fileName: "/app/src/pages/HowItWorks.jsx",
                      lineNumber: 309,
                      columnNumber: 27
                    }, this),
                    p.text
                  ] }, j, true, {
                    fileName: "/app/src/pages/HowItWorks.jsx",
                    lineNumber: 308,
                    columnNumber: 25
                  }, this);
                }) }, void 0, false, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 297,
                  columnNumber: 19
                }, this)
              ]
            },
            i,
            true,
            {
              fileName: "/app/src/pages/HowItWorks.jsx",
              lineNumber: 288,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 266,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 260,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Section, { "data-source-location": "pages/HowItWorks:302:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:303:10", "data-dynamic-content": "true", className: "glass rounded-3xl p-8 md:p-12 border border-primary/20 text-center relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:304:12", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 323,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-source-location": "pages/HowItWorks:305:12",
            "data-dynamic-content": "true",
            animate: { scale: [1, 1.05, 1] },
            transition: { duration: 4, repeat: Infinity },
            className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/30",
            children: /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "pages/HowItWorks:307:14", "data-dynamic-content": "false", className: "w-8 h-8 text-white" }, void 0, false, {
              fileName: "/app/src/pages/HowItWorks.jsx",
              lineNumber: 326,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/HowItWorks.jsx",
            lineNumber: 324,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/HowItWorks:309:12", "data-dynamic-content": "false", className: "text-3xl md:text-4xl font-black text-foreground mb-4", children: "Why CYGUARD Beats the Rest" }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 328,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:312:12", "data-dynamic-content": "true", className: "grid md:grid-cols-3 gap-6 mt-8 text-left", children: [
          { icon: Brain, title: "AI-First, Not Rule-First", desc: "Unlike legacy tools that only match known signatures, CYGUARD understands intent — catching zero-day threats that no blocklist has seen." },
          { icon: Zap, title: "Real-Time, <200ms", desc: "Analysis completes before you can blink. No noticeable slowdown. Full protection without sacrificing speed." },
          { icon: Bug, title: "AI Content Detection", desc: "The only security tool that also detects AI-generated content — deepfakes, synthetic media, AI phishing — all in one platform." }
        ].map((item, i) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/HowItWorks:320:18",
              "data-dynamic-content": "true",
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "flex items-start gap-3",
              "data-arr-index": i,
              children: [
                /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/HowItWorks:323:20", "data-dynamic-content": "false", className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0", "data-arr-index": i }, void 0, false, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 342,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/HowItWorks:324:20", "data-dynamic-content": "true", "data-arr-index": i, children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/HowItWorks:325:22", "data-dynamic-content": "true", className: "text-sm font-bold text-foreground mb-1", "data-arr-index": i, "data-arr-field": "title", children: item.title }, void 0, false, {
                    fileName: "/app/src/pages/HowItWorks.jsx",
                    lineNumber: 344,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/HowItWorks:326:22", "data-dynamic-content": "true", className: "text-xs text-muted-foreground leading-relaxed", "data-arr-index": i, "data-arr-field": "desc", children: item.desc }, void 0, false, {
                    fileName: "/app/src/pages/HowItWorks.jsx",
                    lineNumber: 345,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/HowItWorks.jsx",
                  lineNumber: 343,
                  columnNumber: 21
                }, this)
              ]
            },
            i,
            true,
            {
              fileName: "/app/src/pages/HowItWorks.jsx",
              lineNumber: 339,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/app/src/pages/HowItWorks.jsx",
          lineNumber: 331,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 322,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/HowItWorks.jsx",
        lineNumber: 321,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/HowItWorks.jsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/HowItWorks.jsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
_s3(HowItWorks, "LYbDbIMujuBQXYfr2FPdeXUrafI=");
_c4 = HowItWorks;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "StepCard");
$RefreshReg$(_c3, "TechBadge");
$RefreshReg$(_c4, "HowItWorks");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/HowItWorks.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/HowItWorks.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QiwyQkFBMEIsd0JBQXFCLFFBQU8sV0FBVSwwQ0FBeUMsa0JBQWdCQSxHQUFHLGtCQUFlLFNBQVNvQixlQUFLcEQsU0FBakw7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBdUw7QUFBQSxrQkFDdkwsdUJBQUMsT0FBRSx3QkFBcUIsMkJBQTBCLHdCQUFxQixRQUFPLFdBQVUsaURBQWdELGtCQUFnQmdDLEdBQUcsa0JBQWUsUUFBUW9CLGVBQUtuRCxRQUF2TDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUE0TDtBQUFBLHFCQUY5TDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUdBO0FBQUE7QUFBQTtBQUFBLFlBUDBGK0I7QUFBQUEsWUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVFBO0FBQUEsUUFFSixDQUFDLEtBbEJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFtQkE7QUFBQSxXQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNkJBLEtBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUErQkE7QUFBQSxTQS9NRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBaU5BO0FBQUEsT0F0T0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXVPQTtBQUVKO0FBQUNMLElBN091QkQsWUFBVTtBQUFBLE1BQVZBO0FBQVUsSUFBQTJCLElBQUFDLEtBQUFoQyxLQUFBaUM7QUFBQSxhQUFBRixJQUFBO0FBQUEsYUFBQUMsS0FBQTtBQUFBLGFBQUFoQyxLQUFBO0FBQUEsYUFBQWlDLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwidXNlSW5WaWV3IiwidXNlUmVmIiwiU2hpZWxkIiwiQnJhaW4iLCJaYXAiLCJFeWUiLCJMb2NrIiwiR2xvYmUiLCJTZXJ2ZXIiLCJDb2RlMiIsIkNwdSIsIk5ldHdvcmsiLCJEYXRhYmFzZSIsIkZpbGVTZWFyY2giLCJBbGVydFRyaWFuZ2xlIiwiQ2hlY2tDaXJjbGUiLCJBcnJvd1JpZ2h0IiwiQ2hldnJvbkRvd24iLCJMYXllcnMiLCJGaW5nZXJwcmludCIsIlJhZGlvIiwiQm90IiwiU2hpZWxkQ2hlY2siLCJTaGllbGRBbGVydCIsIlNjYW5TZWFyY2giLCJCdWciLCJXaWZpIiwiU2VjdGlvbiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiX19kYXRhQ29sbGVjdGlvbkl0ZW1JZCIsIl9zIiwicmVmIiwiaW5WaWV3Iiwib25jZSIsIm1hcmdpbiIsIm9wYWNpdHkiLCJ5IiwiZHVyYXRpb24iLCJlYXNlIiwiU3RlcENhcmQiLCJzdGVwIiwiaWNvbiIsIkljb24iLCJ0aXRsZSIsImRlc2MiLCJjb2xvciIsImRlbGF5IiwiX3MyIiwiY29sb3JzIiwiYmx1ZSIsImJnIiwiYm9yZGVyIiwiZ2xvdyIsIm51bSIsInB1cnBsZSIsImdyZWVuIiwicmVkIiwiYW1iZXIiLCJjIiwidHJhbnNpdGlvbiIsIlRlY2hCYWRnZSIsImxhYmVsIiwic3VibGFiZWwiLCJjb2xzIiwic2NhbGUiLCJfYzMiLCJQSVBFTElORV9TVEVQUyIsIkFJX0RFVEVDVElPTl9TVEVQUyIsIlRFQ0hfU1RBQ0siLCJIb3dJdFdvcmtzIiwiX3MzIiwiYWN0aXZlRmxvdyIsInNldEFjdGl2ZUZsb3ciLCJpZCIsIm1hcCIsImkiLCJzIiwiX2lkIiwidGV4dCIsImxheWVyIiwieCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInJlcGxhY2UiLCJ2YWx1ZSIsIl9fYXJySWR4X18iLCJ0IiwicG9pbnRzIiwiY29sIiwiY2xyIiwicCIsImoiLCJQSSIsInJlcGVhdCIsIkluZmluaXR5IiwiaXRlbSIsIl9jIiwiX2MyIiwiX2M0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkhvd0l0V29ya3MuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3IH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBTaGllbGQsIEJyYWluLCBaYXAsIEV5ZSwgTG9jaywgR2xvYmUsIFNlcnZlciwgQ29kZTIsXG4gIENwdSwgTmV0d29yaywgRGF0YWJhc2UsIEZpbGVTZWFyY2gsIEFsZXJ0VHJpYW5nbGUsIENoZWNrQ2lyY2xlLFxuICBBcnJvd1JpZ2h0LCBDaGV2cm9uRG93biwgTGF5ZXJzLCBGaW5nZXJwcmludCwgUmFkaW8sIEJvdCxcbiAgU2hpZWxkQ2hlY2ssIFNoaWVsZEFsZXJ0LCBTY2FuU2VhcmNoLCBCdWcsIFdpZmkgfSBmcm9tXG4nbHVjaWRlLXJlYWN0JztcblxuLy8g4pSA4pSAIEFuaW1hdGVkIHNlY3Rpb24gd3JhcHBlciDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmZ1bmN0aW9uIFNlY3Rpb24oeyBjaGlsZHJlbiwgY2xhc3NOYW1lID0gJycsIFwiZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWRcIjogX19kYXRhQ29sbGVjdGlvbkl0ZW1JZCB9KSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwgeyBvbmNlOiB0cnVlLCBtYXJnaW46ICctODBweCcgfSk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjE2OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiByZWY9e3JlZn0gaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA0OCB9fSBhbmltYXRlPXtpblZpZXcgPyB7IG9wYWNpdHk6IDEsIHk6IDAgfSA6IHt9fVxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNywgZWFzZTogJ2Vhc2VPdXQnIH19IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17X19kYXRhQ29sbGVjdGlvbkl0ZW1JZH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tb3Rpb24uZGl2Pik7XG5cbn1cblxuLy8g4pSA4pSAIEdsb3dpbmcgc3RlcCBjYXJkIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZnVuY3Rpb24gU3RlcENhcmQoeyBzdGVwLCBpY29uOiBJY29uLCB0aXRsZSwgZGVzYywgY29sb3IsIGRlbGF5ID0gMCwgXCJkYXRhLWNvbGxlY3Rpb24taXRlbS1pZFwiOiBfX2RhdGFDb2xsZWN0aW9uSXRlbUlkIH0pIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpblZpZXcgPSB1c2VJblZpZXcocmVmLCB7IG9uY2U6IHRydWUsIG1hcmdpbjogJy02MHB4JyB9KTtcbiAgY29uc3QgY29sb3JzID0ge1xuICAgIGJsdWU6IHsgYmc6ICdmcm9tLXByaW1hcnkvMjAgdG8tcHJpbWFyeS81JywgYm9yZGVyOiAnYm9yZGVyLXByaW1hcnkvMzAnLCBpY29uOiAndGV4dC1wcmltYXJ5JywgZ2xvdzogJ3NoYWRvdy1wcmltYXJ5LzIwJywgbnVtOiAnYmctcHJpbWFyeS8yMCB0ZXh0LXByaW1hcnknIH0sXG4gICAgcHVycGxlOiB7IGJnOiAnZnJvbS1hY2NlbnQvMjAgdG8tYWNjZW50LzUnLCBib3JkZXI6ICdib3JkZXItYWNjZW50LzMwJywgaWNvbjogJ3RleHQtYWNjZW50JywgZ2xvdzogJ3NoYWRvdy1hY2NlbnQvMjAnLCBudW06ICdiZy1hY2NlbnQvMjAgdGV4dC1hY2NlbnQnIH0sXG4gICAgZ3JlZW46IHsgYmc6ICdmcm9tLWVtZXJhbGQtNTAwLzIwIHRvLWVtZXJhbGQtNTAwLzUnLCBib3JkZXI6ICdib3JkZXItZW1lcmFsZC01MDAvMzAnLCBpY29uOiAndGV4dC1lbWVyYWxkLTQwMCcsIGdsb3c6ICdzaGFkb3ctZW1lcmFsZC01MDAvMjAnLCBudW06ICdiZy1lbWVyYWxkLTUwMC8yMCB0ZXh0LWVtZXJhbGQtNDAwJyB9LFxuICAgIHJlZDogeyBiZzogJ2Zyb20tcmVkLTUwMC8yMCB0by1yZWQtNTAwLzUnLCBib3JkZXI6ICdib3JkZXItcmVkLTUwMC8zMCcsIGljb246ICd0ZXh0LXJlZC00MDAnLCBnbG93OiAnc2hhZG93LXJlZC01MDAvMjAnLCBudW06ICdiZy1yZWQtNTAwLzIwIHRleHQtcmVkLTQwMCcgfSxcbiAgICBhbWJlcjogeyBiZzogJ2Zyb20tYW1iZXItNTAwLzIwIHRvLWFtYmVyLTUwMC81JywgYm9yZGVyOiAnYm9yZGVyLWFtYmVyLTUwMC8zMCcsIGljb246ICd0ZXh0LWFtYmVyLTQwMCcsIGdsb3c6ICdzaGFkb3ctYW1iZXItNTAwLzIwJywgbnVtOiAnYmctYW1iZXItNTAwLzIwIHRleHQtYW1iZXItNDAwJyB9XG4gIH07XG4gIGNvbnN0IGMgPSBjb2xvcnNbY29sb3JdIHx8IGNvbG9ycy5ibHVlO1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczozNjo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcmVmPXtyZWZ9IGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzIgfX0gYW5pbWF0ZT17aW5WaWV3ID8geyBvcGFjaXR5OiAxLCB5OiAwIH0gOiB7fX1cbiAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYsIGRlbGF5IH19IHdoaWxlSG92ZXI9e3sgeTogLTYsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMiB9IH19XG4gICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgYmctZ3JhZGllbnQtdG8tYnIgJHtjLmJnfSBib3JkZXIgJHtjLmJvcmRlcn0gcm91bmRlZC0yeGwgcC02IHNoYWRvdy14bCAke2MuZ2xvd31gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17X19kYXRhQ29sbGVjdGlvbkl0ZW1JZH0+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczozOTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3Jrczo0MDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy0xMiBoLTEyIHJvdW5kZWQteGwgYmctY2FyZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wIHNoYWRvdy1sZyAke2MuZ2xvd31gfT5cbiAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6NDE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTYgaC02ICR7Yy5pY29ufWB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3Jrczo0Mzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6NDQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi0yXCI+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6NDU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXhzIGZvbnQtYmxhY2sgcHgtMi41IHB5LTAuNSByb3VuZGVkLWZ1bGwgJHtjLm51bX1gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN0ZXBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17X19kYXRhQ29sbGVjdGlvbkl0ZW1JZH0+U1RFUCB7c3RlcH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3Jrczo0NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRpdGxlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9Pnt0aXRsZX08L2gzPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3Jrczo0ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVzY1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT57ZGVzY308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2Pik7XG5cbn1cblxuLy8g4pSA4pSAIFRlY2ggYmFkZ2Ug4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBUZWNoQmFkZ2UoeyBpY29uOiBJY29uLCBsYWJlbCwgc3VibGFiZWwsIGNvbG9yLCBcImRhdGEtY29sbGVjdGlvbi1pdGVtLWlkXCI6IF9fZGF0YUNvbGxlY3Rpb25JdGVtSWQgfSkge1xuICBjb25zdCBjb2xzID0ge1xuICAgIGJsdWU6ICdib3JkZXItcHJpbWFyeS8zMCBiZy1wcmltYXJ5LzUgdGV4dC1wcmltYXJ5JyxcbiAgICBwdXJwbGU6ICdib3JkZXItYWNjZW50LzMwIGJnLWFjY2VudC81IHRleHQtYWNjZW50JyxcbiAgICBncmVlbjogJ2JvcmRlci1lbWVyYWxkLTUwMC8zMCBiZy1lbWVyYWxkLTUwMC81IHRleHQtZW1lcmFsZC00MDAnLFxuICAgIGFtYmVyOiAnYm9yZGVyLWFtYmVyLTUwMC8zMCBiZy1hbWJlci01MDAvNSB0ZXh0LWFtYmVyLTQwMCdcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6NjQ6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX0gY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC00IHJvdW5kZWQteGwgYm9yZGVyICR7Y29sc1tjb2xvcl19IHRleHQtY2VudGVyYH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PlxuICAgICAgPEljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjY1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy03IGgtN1wiIC8+XG4gICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6NjY6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT57bGFiZWx9PC9zcGFuPlxuICAgICAge3N1YmxhYmVsICYmIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3Jrczo2NzoxOVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIG9wYWNpdHktNzBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN1YmxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PntzdWJsYWJlbH08L3NwYW4+fVxuICAgIDwvbW90aW9uLmRpdj4pO1xuXG59XG5cbmNvbnN0IFBJUEVMSU5FX1NURVBTID0gW1xueyBzdGVwOiAxLCBpY29uOiBHbG9iZSwgdGl0bGU6ICdJbnB1dCBSZWNlaXZlZCcsIGRlc2M6ICdVUkwsIGZpbGUsIHRleHQsIG9yIGltYWdlIHN1Ym1pdHRlZCBieSB1c2VyIG9yIGF1dG8tY2FwdHVyZWQgYnkgYnJvd3NlciBleHRlbnNpb24uJywgY29sb3I6ICdibHVlJyB9LFxueyBzdGVwOiAyLCBpY29uOiBTY2FuU2VhcmNoLCB0aXRsZTogJ1NpZ25hdHVyZSBTY2FubmluZycsIGRlc2M6ICdDb21wYXJlZCBhZ2FpbnN0IDUwLDAwMCsga25vd24gbWFsaWNpb3VzIGRvbWFpbiBzaWduYXR1cmVzLCBwaGlzaGluZyBwYXR0ZXJucywgYW5kIHRyYWNrZXIgZmluZ2VycHJpbnRzIGluIHJlYWwtdGltZS4nLCBjb2xvcjogJ3B1cnBsZScgfSxcbnsgc3RlcDogMywgaWNvbjogQnJhaW4sIHRpdGxlOiAnQUkgRGVlcCBBbmFseXNpcycsIGRlc2M6ICdPdXIgTExNLXBvd2VyZWQgZW5naW5lIGFuYWx5emVzIGJlaGF2aW9yYWwgcGF0dGVybnMsIGxpbmd1aXN0aWMgc2lnbmFscywgaW1hZ2UgYXJ0aWZhY3RzLCBhbmQgVVJMIHNlbWFudGljcy4nLCBjb2xvcjogJ2JsdWUnIH0sXG57IHN0ZXA6IDQsIGljb246IE5ldHdvcmssIHRpdGxlOiAnVGhyZWF0IEludGVsbGlnZW5jZScsIGRlc2M6ICdDcm9zcy1yZWZlcmVuY2VkIHdpdGggbGl2ZSB0aHJlYXQgZmVlZHMsIGNvbW11bml0eSByZXBvcnRzLCBhbmQgT1NJTlQgc291cmNlcyBmb3IgbWF4aW11bSBhY2N1cmFjeS4nLCBjb2xvcjogJ2FtYmVyJyB9LFxueyBzdGVwOiA1LCBpY29uOiBMYXllcnMsIHRpdGxlOiAnUmlzayBTY29yaW5nJywgZGVzYzogJ011bHRpLWxheWVyIHNjb3JpbmcgZW5naW5lIGNvbWJpbmVzIGFsbCBzaWduYWxzIGludG8gYSAw4oCTMTAwIHRocmVhdCBzY29yZSB3aXRoIGNvbmZpZGVuY2UgcmF0aW5nLicsIGNvbG9yOiAncHVycGxlJyB9LFxueyBzdGVwOiA2LCBpY29uOiBTaGllbGRDaGVjaywgdGl0bGU6ICdSZXN1bHQgKyBBY3Rpb24nLCBkZXNjOiAnSW5zdGFudCB2ZXJkaWN0IGRlbGl2ZXJlZCB3aXRoIGRldGFpbGVkIGV4cGxhbmF0aW9uLCBjeWJlciByaXNrIGJyZWFrZG93biwgYW5kIGFjdGlvbmFibGUgcmVjb21tZW5kYXRpb25zLicsIGNvbG9yOiAnZ3JlZW4nIH1dO1xuXG5cbmNvbnN0IEFJX0RFVEVDVElPTl9TVEVQUyA9IFtcbnsgc3RlcDogMSwgaWNvbjogRXllLCB0aXRsZTogJ1BhdHRlcm4gUmVjb2duaXRpb24nLCBkZXNjOiAnQW5hbHl6ZXMgc3RhdGlzdGljYWwgcGF0dGVybnMgdW5pcXVlIHRvIEFJIGdlbmVyYXRvcnMg4oCUIHVuaWZvcm0gdGV4dHVyZXMsIHN5bnRoZXRpYyBzeW1tZXRyeSwgb3Zlci1zbW9vdGggZ3JhZGllbnRzLicsIGNvbG9yOiAnYmx1ZScgfSxcbnsgc3RlcDogMiwgaWNvbjogRmluZ2VycHJpbnQsIHRpdGxlOiAnU2lnbmF0dXJlIE1hdGNoaW5nJywgZGVzYzogJ0lkZW50aWZpZXMgcGxhdGZvcm0tc3BlY2lmaWMgYXJ0aWZhY3RzIGZyb20gTWlkam91cm5leSwgREFMTC1FLCBTdGFibGUgRGlmZnVzaW9uLCBTb3JhLCBhbmQgNDArIEFJIHRvb2xzLicsIGNvbG9yOiAncHVycGxlJyB9LFxueyBzdGVwOiAzLCBpY29uOiBDcHUsIHRpdGxlOiAnU2VtYW50aWMgQW5hbHlzaXMnLCBkZXNjOiAnRm9yIHRleHQ6IGRldGVjdHMgQUkgdm9jYWJ1bGFyeSBwYXR0ZXJucywgc2VudGVuY2UgdW5pZm9ybWl0eSwgZmlsbGVyIHBocmFzZXMsIGFuZCBzdHJ1Y3R1cmFsIHRlbXBsYXRlcy4nLCBjb2xvcjogJ2FtYmVyJyB9LFxueyBzdGVwOiA0LCBpY29uOiBCb3QsIHRpdGxlOiAnRGVlcGZha2UgRGV0ZWN0aW9uJywgZGVzYzogJ0NoZWNrcyBmb3IgZmFjaWFsIGluY29uc2lzdGVuY2llcywgYmFja2dyb3VuZCBhcnRpZmFjdHMsIGxpZ2h0aW5nIGRpc2NvbnRpbnVpdGllcyBjb21tb24gaW4gZGVlcGZha2UgbWVkaWEuJywgY29sb3I6ICdyZWQnIH0sXG57IHN0ZXA6IDUsIGljb246IFNoaWVsZEFsZXJ0LCB0aXRsZTogJ0N5YmVyIFJpc2sgT3ZlcmxheScsIGRlc2M6ICdDb3JyZWxhdGVzIEFJIGNvbnRlbnQgd2l0aCBrbm93biBhdHRhY2sgdmVjdG9ycyDigJQgQUkgcGhpc2hpbmcsIHN5bnRoZXRpYyBpZGVudGl0eSBmcmF1ZCwgZGlzaW5mbyBjYW1wYWlnbnMuJywgY29sb3I6ICdyZWQnIH0sXG57IHN0ZXA6IDYsIGljb246IENoZWNrQ2lyY2xlLCB0aXRsZTogJ0NvbmZpZGVuY2UgVmVyZGljdCcsIGRlc2M6ICdSZXR1cm5zIEFJIHByb2JhYmlsaXR5ICUsIGNvbmZpZGVuY2UgbGV2ZWwsIGFsbCBkZXRlY3RlZCBzaWduYWxzLCBhbmQgc3BlY2lmaWMgc2VjdXJpdHkgcmlza3MuJywgY29sb3I6ICdncmVlbicgfV07XG5cblxuY29uc3QgVEVDSF9TVEFDSyA9IFtcbnsgaWNvbjogQnJhaW4sIGxhYmVsOiAnR1BULTRvIC8gR2VtaW5pJywgc3VibGFiZWw6ICdBSSBBbmFseXNpcyBFbmdpbmUnLCBjb2xvcjogJ2JsdWUnIH0sXG57IGljb246IFNoaWVsZCwgbGFiZWw6ICdEZWNsYXJhdGl2ZU5ldFJlcXVlc3QnLCBzdWJsYWJlbDogJ01WMyBBZCBCbG9ja2luZycsIGNvbG9yOiAncHVycGxlJyB9LFxueyBpY29uOiBEYXRhYmFzZSwgbGFiZWw6ICdUaHJlYXQgSW50ZWxsaWdlbmNlJywgc3VibGFiZWw6ICc1MEsrIFNpZ25hdHVyZXMnLCBjb2xvcjogJ2FtYmVyJyB9LFxueyBpY29uOiBaYXAsIGxhYmVsOiAnUmVhbC10aW1lIEVuZ2luZScsIHN1YmxhYmVsOiAnPDIwMG1zIFJlc3BvbnNlJywgY29sb3I6ICdncmVlbicgfSxcbnsgaWNvbjogQ29kZTIsIGxhYmVsOiAnUmVhY3QgKyBWaXRlJywgc3VibGFiZWw6ICdGcm9udGVuZCcsIGNvbG9yOiAnYmx1ZScgfSxcbnsgaWNvbjogU2VydmVyLCBsYWJlbDogJ0Jhc2U0NCBCYWNrZW5kJywgc3VibGFiZWw6ICdDbG91ZCBJbmZyYXN0cnVjdHVyZScsIGNvbG9yOiAncHVycGxlJyB9LFxueyBpY29uOiBXaWZpLCBsYWJlbDogJ0Nocm9tZSBFeHRlbnNpb24nLCBzdWJsYWJlbDogJ01hbmlmZXN0IFYzJywgY29sb3I6ICdncmVlbicgfSxcbnsgaWNvbjogTG9jaywgbGFiZWw6ICdaZXJvIFRydXN0Jywgc3VibGFiZWw6ICdTZWN1cml0eSBNb2RlbCcsIGNvbG9yOiAnYW1iZXInIH1dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvd0l0V29ya3MoKSB7XG4gIGNvbnN0IFthY3RpdmVGbG93LCBzZXRBY3RpdmVGbG93XSA9IHVzZVN0YXRlKCdzY2FuJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxMDU6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgey8qIEhlcm8gKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxMDc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBweS0yMCBweC00IG1kOnB4LTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTA4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBncmlkLXBhdHRlcm4gb3BhY2l0eS0zMFwiIC8+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjEwOTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHctWzYwMHB4XSBoLVs2MDBweF0gcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvNSBibHVyLTN4bCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTEwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdy1bMzAwcHhdIGgtWzMwMHB4XSByb3VuZGVkLWZ1bGwgYmctYWNjZW50LzggYmx1ci0yeGwgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG5cbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjExMjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAzMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTEzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwIHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTZcIj5cbiAgICAgICAgICAgIDxDcHUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjExNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz4gVW5kZXIgdGhlIEhvb2RcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjExNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LWJsYWNrIHRleHQtZm9yZWdyb3VuZCBtYi00XCI+XG4gICAgICAgICAgICBIb3cgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjExNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0XCI+Q1lHVUFSRDwvc3Bhbj4gV29ya3NcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxMTk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICBBIG11bHRpLWxheWVyIEFJIHNlY3VyaXR5IGVuZ2luZSB0aGF0IHByb2Nlc3NlcyBldmVyeSB0aHJlYXQgaW4gdW5kZXIgMjAwbXMuXG4gICAgICAgICAgICBIZXJlJ3MgZXhhY3RseSB3aGF0IGhhcHBlbnMgd2hlbiB5b3UgaGl0IFwiU2NhblwiLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjEyNjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBtZDpweC04IHBiLTIwIHNwYWNlLXktMjRcIj5cblxuICAgICAgICB7LyogRmxvdyBzZWxlY3RvciAqL31cbiAgICAgICAgPFNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjEyOTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTMwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMyBmbGV4LXdyYXAgbWItMTJcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICB7IGlkOiAnc2NhbicsIGxhYmVsOiAnU2NhbiBQaXBlbGluZScsIGljb246IFNjYW5TZWFyY2ggfSxcbiAgICAgICAgICAgIHsgaWQ6ICdhaScsIGxhYmVsOiAnQUkgRGV0ZWN0b3InLCBpY29uOiBCb3QgfV0uXG4gICAgICAgICAgICBtYXAoKHsgaWQsIGxhYmVsLCBpY29uOiBJY29uIH0pID0+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxMzU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVGbG93KGlkKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTYgcHktMyByb3VuZGVkLXhsIHRleHQtc20gZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsIGJvcmRlciAke1xuICAgICAgICAgICAgYWN0aXZlRmxvdyA9PT0gaWQgP1xuICAgICAgICAgICAgJ2JnLXByaW1hcnkvMTUgYm9yZGVyLXByaW1hcnkvNDAgdGV4dC1wcmltYXJ5IHNoYWRvdy1sZyBzaGFkb3ctcHJpbWFyeS8xMCcgOlxuICAgICAgICAgICAgJ2JnLWNhcmQgYm9yZGVyLWJvcmRlciB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kJ31gXG4gICAgICAgICAgICB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibGFiZWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9PlxuICAgICAgICAgICAgICAgIDxJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxNDE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+e2xhYmVsfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUGlwZWxpbmUgZmxvdyAqL31cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxNDc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC01XCI+XG4gICAgICAgICAgICB7KGFjdGl2ZUZsb3cgPT09ICdzY2FuJyA/IFBJUEVMSU5FX1NURVBTIDogQUlfREVURUNUSU9OX1NURVBTKS5tYXAoKHN0ZXAsIGkpID0+XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjE0OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c3RlcC5zdGVwfT5cbiAgICAgICAgICAgICAgICA8U3RlcENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjE1MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHsuLi5zdGVwfSBkZWxheT17aSAqIDAuMX0gLz5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQXJyb3cgZmxvdyB2aXN1YWwgKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTU2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIHsoYWN0aXZlRmxvdyA9PT0gJ3NjYW4nID8gUElQRUxJTkVfU1RFUFMgOiBBSV9ERVRFQ1RJT05fU1RFUFMpLm1hcCgocywgaSkgPT5cbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTU4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtzLnN0ZXB9PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxNTk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IHRyYW5zaXRpb249e3sgZGVsYXk6IDAuOCArIGkgKiAwLjEgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjE2MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsIGJnLWNhcmQgYm9yZGVyIGJvcmRlci1ib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC14cyBmb250LWJvbGQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdGVwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3M/LmlkIHx8IHM/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtzLnN0ZXB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtpIDwgNSAmJiA8QXJyb3dSaWdodCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTY0OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kLzQwXCIgLz59XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICAgIHsvKiBBcmNoaXRlY3R1cmUgdmlzdWFsICovfVxuICAgICAgICA8U2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTcyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxNzM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTBcIj5cbiAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTc0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC1mb3JlZ3JvdW5kIG1iLTNcIj5NdWx0aS1MYXllciBBcmNoaXRlY3R1cmU8L2gyPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjE3NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5FdmVyeSByZXF1ZXN0IHBhc3NlcyB0aHJvdWdoIGFsbCBsYXllcnMgc2ltdWx0YW5lb3VzbHkgZm9yIG1heGltdW0gYWNjdXJhY3k8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxNzg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgey8qIExheWVyIHN0YWNrICovfVxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgIHsgbGFiZWw6ICdVc2VyIElucHV0IExheWVyJywgZGVzYzogJ0Jyb3dzZXIgRXh0ZW5zaW9uIC8gV2ViIEFwcCAvIEFQSScsIGljb246IEdsb2JlLCBjb2xvcjogJ2JvcmRlci1wcmltYXJ5LzQwIGJnLXByaW1hcnkvNScsIHRleHQ6ICd0ZXh0LXByaW1hcnknIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnU2lnbmF0dXJlIEVuZ2luZScsIGRlc2M6ICdQYXR0ZXJuIE1hdGNoaW5nIMK3IEtub3duIFRocmVhdCBEQiDCtyBCbG9ja2xpc3QgUnVsZXMnLCBpY29uOiBEYXRhYmFzZSwgY29sb3I6ICdib3JkZXItYWNjZW50LzQwIGJnLWFjY2VudC81JywgdGV4dDogJ3RleHQtYWNjZW50JyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0FJIEFuYWx5c2lzIExheWVyJywgZGVzYzogJ0xMTSBCZWhhdmlvcmFsIEFuYWx5c2lzIMK3IE5MUCDCtyBDb21wdXRlciBWaXNpb24nLCBpY29uOiBCcmFpbiwgY29sb3I6ICdib3JkZXItZW1lcmFsZC01MDAvNDAgYmctZW1lcmFsZC01MDAvNScsIHRleHQ6ICd0ZXh0LWVtZXJhbGQtNDAwJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ1RocmVhdCBJbnRlbGxpZ2VuY2UnLCBkZXNjOiAnT1NJTlQgwrcgQ29tbXVuaXR5IFJlcG9ydHMgwrcgTGl2ZSBGZWVkIENvcnJlbGF0aW9uJywgaWNvbjogUmFkaW8sIGNvbG9yOiAnYm9yZGVyLWFtYmVyLTUwMC80MCBiZy1hbWJlci01MDAvNScsIHRleHQ6ICd0ZXh0LWFtYmVyLTQwMCcgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdTY29yaW5nICYgRGVjaXNpb24nLCBkZXNjOiAnUmlzayBTY29yZSBBZ2dyZWdhdGlvbiDCtyBDb25maWRlbmNlIENhbGN1bGF0aW9uJywgaWNvbjogWmFwLCBjb2xvcjogJ2JvcmRlci1yZWQtNTAwLzQwIGJnLXJlZC01MDAvNScsIHRleHQ6ICd0ZXh0LXJlZC00MDAnIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnUmVzcG9uc2UgTGF5ZXInLCBkZXNjOiAnVmVyZGljdCDCtyBFeHBsYW5hdGlvbiDCtyBCbG9jayAvIFdhcm4gLyBBbGxvdycsIGljb246IFNoaWVsZENoZWNrLCBjb2xvcjogJ2JvcmRlci1wcmltYXJ5LzQwIGJnLXByaW1hcnkvNScsIHRleHQ6ICd0ZXh0LXByaW1hcnknIH1dLlxuICAgICAgICAgICAgbWFwKChsYXllciwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBJY29uID0gbGF5ZXIuaWNvbjtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTkwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0zMCB9fSB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fSB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC4xIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcC00IHJvdW5kZWQteGwgYm9yZGVyICR7bGF5ZXIuY29sb3J9IG1iLTNgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGAke2kgKiAyNH1weGAsIG1hcmdpblJpZ2h0OiBgJHsoNSAtIGkpICogNH1weGAgfX0gZGF0YS1hcnItaW5kZXg9e2l9PlxuICAgICAgICAgICAgICAgICAgPEljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjE5NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctNSBoLTUgJHtsYXllci50ZXh0fSBmbGV4LXNocmluay0wYH0gZGF0YS1hcnItaW5kZXg9e2l9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxOTU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTFcIiBkYXRhLWFyci1pbmRleD17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoxOTY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtYm9sZCAke2xheWVyLnRleHR9YH0gZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLWZpZWxkPVwibGFiZWxcIj57bGF5ZXIubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MTk3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWwtM1wiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci1maWVsZD1cImRlc2NcIj57bGF5ZXIuZGVzY308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjE5OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctMiBoLTIgcm91bmRlZC1mdWxsICR7bGF5ZXIudGV4dC5yZXBsYWNlKCd0ZXh0LScsICdiZy0nKX0gYW5pbWF0ZS1wdWxzZWB9IGRhdGEtYXJyLWluZGV4PXtpfSAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pO1xuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTdGF0cyBzdHJpcCAqL31cbiAgICAgICAgPFNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjIwNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MjA4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgIHsgdmFsdWU6ICc1MDAgbXMnLCBsYWJlbDogJ0F2ZyBSZXNwb25zZSBUaW1lJywgY29sb3I6ICd0ZXh0LXByaW1hcnknIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnOTkuMiUnLCBsYWJlbDogJ0RldGVjdGlvbiBBY2N1cmFjeScsIGNvbG9yOiAndGV4dC1lbWVyYWxkLTQwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICc0MDBLKycsIGxhYmVsOiAnQWRHdWFyZCBGaWx0ZXIgUnVsZXMnLCBjb2xvcjogJ3RleHQtYWNjZW50JyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ0dsb2JhbCcsIGxhYmVsOiAnQWR1bHQgU2l0ZSBCbG9ja2luZycsIGNvbG9yOiAndGV4dC1hbWJlci00MDAnIH1dLlxuICAgICAgICAgICAgbWFwKChzLCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjIxNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17cy5sYWJlbH0gd2hpbGVIb3Zlcj17eyB5OiAtNCB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xhc3Mgcm91bmRlZC0yeGwgcC01IHRleHQtY2VudGVyIGJvcmRlciBib3JkZXItYm9yZGVyXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjIxNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtM3hsIGZvbnQtYmxhY2sgZm9udC1tb25vICR7cy5jb2xvcn0gbWItMWB9IGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cInZhbHVlXCI+e3MudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MjE4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItZmllbGQ9XCJsYWJlbFwiPntzLmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NlY3Rpb24+XG5cbiAgICAgICAgey8qIFRlY2ggU3RhY2sgKi99XG4gICAgICAgIDxTZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoyMjU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjIyNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMFwiPlxuICAgICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoyMjc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ibGFjayB0ZXh0LWZvcmVncm91bmQgbWItM1wiPlRlY2ggU3RhY2s8L2gyPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjIyODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5CdWlsdCB3aXRoIHRoZSBiZXN0LWluLWNsYXNzIHRlY2hub2xvZ2llcyBmb3Igc2VjdXJpdHksIHNwZWVkLCBhbmQgcmVsaWFiaWxpdHk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MjMwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAge1RFQ0hfU1RBQ0subWFwKCh0LCBpKSA9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjIzMjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17dC5sYWJlbH0gaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45IH19IHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19IHRyYW5zaXRpb249e3sgZGVsYXk6IGkgKiAwLjA3IH19IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiVEVDSF9TVEFDS1wiPlxuICAgICAgICAgICAgICAgIDxUZWNoQmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjIzNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHsuLi50fSBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIlRFQ0hfU1RBQ0tcIiAvPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NlY3Rpb24+XG5cbiAgICAgICAgey8qIEV4dGVuc2lvbiB3b3JraW5nIGRpYWdyYW0gKi99XG4gICAgICAgIDxTZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoyNDE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjI0MjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMFwiPlxuICAgICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoyNDM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ibGFjayB0ZXh0LWZvcmVncm91bmQgbWItM1wiPkJyb3dzZXIgRXh0ZW5zaW9uIEZsb3c8L2gyPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjI0NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5Ib3cgdGhlIENZR1VBUkQgU2hpZWxkIGV4dGVuc2lvbiBwcm90ZWN0cyB5b3UgaW4gcmVhbC10aW1lPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MjQ3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogR2xvYmUsIGNvbG9yOiAnYmx1ZScsIHRpdGxlOiAnWW91IFZpc2l0IGEgV2Vic2l0ZScsXG4gICAgICAgICAgICAgIHBvaW50czogWydVUkwgaW50ZXJjZXB0ZWQgYXQgYnJvd3NlciBsZXZlbCcsICdDaGVja2VkIGJlZm9yZSBwYWdlIGxvYWRzJywgJ0RvbWFpbiByZXB1dGF0aW9uIGxvb2t1cCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBTaGllbGQsIGNvbG9yOiAncHVycGxlJywgdGl0bGU6ICdDWUdVQVJEIEFuYWx5emVzJyxcbiAgICAgICAgICAgICAgcG9pbnRzOiBbJ1BoaXNoaW5nIHBhdHRlcm4gbWF0Y2hpbmcnLCAnQWQvdHJhY2tlciByZXF1ZXN0IGJsb2NraW5nIChETlIgcnVsZXMpJywgJ0NvbnRlbnQgc2NyaXB0IGluamVjdGlvbiBmb3IgZGVlcCBzY2FuJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IENoZWNrQ2lyY2xlLCBjb2xvcjogJ2dyZWVuJywgdGl0bGU6ICdJbnN0YW50IERlY2lzaW9uJyxcbiAgICAgICAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgICAgIHsgaWNvbjogQ2hlY2tDaXJjbGUsIGNvbG9yOiAndGV4dC1lbWVyYWxkLTQwMCcsIHRleHQ6ICdTYWZlIOKAlCBwYWdlIGxvYWRzIG5vcm1hbGx5JyB9LFxuICAgICAgICAgICAgICB7IGljb246IEFsZXJ0VHJpYW5nbGUsIGNvbG9yOiAndGV4dC1hbWJlci00MDAnLCB0ZXh0OiAnV2FybmluZyDigJQgYmFubmVyICsgYmFkZ2Ugc2hvd24nIH0sXG4gICAgICAgICAgICAgIHsgaWNvbjogU2hpZWxkQWxlcnQsIGNvbG9yOiAndGV4dC1yZWQtNDAwJywgdGV4dDogJ0RhbmdlciDigJQgYWxlcnQgKyBsZWF2ZSBwcm9tcHQnIH1dXG5cbiAgICAgICAgICAgIH1dLlxuICAgICAgICAgICAgbWFwKChjb2wsIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgSWNvbiA9IGNvbC5pY29uO1xuICAgICAgICAgICAgICBjb25zdCBjbHIgPSB7IGJsdWU6ICd0ZXh0LXByaW1hcnkgYm9yZGVyLXByaW1hcnkvMzAgYmctcHJpbWFyeS81JywgcHVycGxlOiAndGV4dC1hY2NlbnQgYm9yZGVyLWFjY2VudC8zMCBiZy1hY2NlbnQvNScsIGdyZWVuOiAndGV4dC1lbWVyYWxkLTQwMCBib3JkZXItZW1lcmFsZC01MDAvMzAgYmctZW1lcmFsZC01MDAvNScgfVtjb2wuY29sb3JdO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoyNjk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjQgfX0gd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX0gdHJhbnNpdGlvbj17eyBkZWxheTogaSAqIDAuMTUgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BnbGFzcyByb3VuZGVkLTJ4bCBwLTYgYm9yZGVyICR7Y2xyfWB9IGRhdGEtYXJyLWluZGV4PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjI3MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1iLTRcIiBkYXRhLWFyci1pbmRleD17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjI3MzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctMTAgaC0xMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICR7Y2xyfWB9IGRhdGEtYXJyLWluZGV4PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6Mjc0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiBkYXRhLWFyci1pbmRleD17aX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6Mjc2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci1maWVsZD1cInRpdGxlXCI+e2NvbC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8dWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjI3ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiIGRhdGEtYXJyLWluZGV4PXtpfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5wb2ludHMubWFwKChwLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoyODI6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2p9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MjgzOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMy41IGgtMy41IG10LTAuNSBmbGV4LXNocmluay0wIHRleHQtbXV0ZWQtZm9yZWdyb3VuZC81MFwiIC8+e3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KTtcblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBQSSA9IHAuaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoyODk6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2p9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRleHRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cD8uaWQgfHwgcD8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBJIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczoyOTA6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTMuNSBoLTMuNSBtdC0wLjUgZmxleC1zaHJpbmstMCAke3AuY29sb3J9YH0gLz57cC50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KTtcblxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgICB7LyogV2h5IGNob29zZSB1cyAqL31cbiAgICAgICAgPFNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjMwMjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MzAzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ2xhc3Mgcm91bmRlZC0zeGwgcC04IG1kOnAtMTIgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwIHRleHQtY2VudGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MzA0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5LzUgdmlhLXRyYW5zcGFyZW50IHRvLWFjY2VudC81IHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjMwNToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGFuaW1hdGU9e3sgc2NhbGU6IFsxLCAxLjA1LCAxXSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiA0LCByZXBlYXQ6IEluZmluaXR5IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5IHRvLWFjY2VudCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTYgc2hhZG93LXhsIHNoYWRvdy1wcmltYXJ5LzMwXCI+XG4gICAgICAgICAgICAgIDxTaGllbGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjMwNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczozMDk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ibGFjayB0ZXh0LWZvcmVncm91bmQgbWItNFwiPlxuICAgICAgICAgICAgICBXaHkgQ1lHVUFSRCBCZWF0cyB0aGUgUmVzdFxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjMxMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTYgbXQtOCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBpY29uOiBCcmFpbiwgdGl0bGU6ICdBSS1GaXJzdCwgTm90IFJ1bGUtRmlyc3QnLCBkZXNjOiAnVW5saWtlIGxlZ2FjeSB0b29scyB0aGF0IG9ubHkgbWF0Y2gga25vd24gc2lnbmF0dXJlcywgQ1lHVUFSRCB1bmRlcnN0YW5kcyBpbnRlbnQg4oCUIGNhdGNoaW5nIHplcm8tZGF5IHRocmVhdHMgdGhhdCBubyBibG9ja2xpc3QgaGFzIHNlZW4uJyB9LFxuICAgICAgICAgICAgICB7IGljb246IFphcCwgdGl0bGU6ICdSZWFsLVRpbWUsIDwyMDBtcycsIGRlc2M6ICdBbmFseXNpcyBjb21wbGV0ZXMgYmVmb3JlIHlvdSBjYW4gYmxpbmsuIE5vIG5vdGljZWFibGUgc2xvd2Rvd24uIEZ1bGwgcHJvdGVjdGlvbiB3aXRob3V0IHNhY3JpZmljaW5nIHNwZWVkLicgfSxcbiAgICAgICAgICAgICAgeyBpY29uOiBCdWcsIHRpdGxlOiAnQUkgQ29udGVudCBEZXRlY3Rpb24nLCBkZXNjOiAnVGhlIG9ubHkgc2VjdXJpdHkgdG9vbCB0aGF0IGFsc28gZGV0ZWN0cyBBSS1nZW5lcmF0ZWQgY29udGVudCDigJQgZGVlcGZha2VzLCBzeW50aGV0aWMgbWVkaWEsIEFJIHBoaXNoaW5nIOKAlCBhbGwgaW4gb25lIHBsYXRmb3JtLicgfV0uXG4gICAgICAgICAgICAgIG1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IEljb24gPSBpdGVtLmljb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG93SXRXb3JrczozMjA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTYgfX0gd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fSB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC4xIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCIgZGF0YS1hcnItaW5kZXg9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MzIzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1wcmltYXJ5IG10LTAuNSBmbGV4LXNocmluay0wXCIgZGF0YS1hcnItaW5kZXg9e2l9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib3dJdFdvcmtzOjMyNDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtYXJyLWluZGV4PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MzI1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTFcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItZmllbGQ9XCJ0aXRsZVwiPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvd0l0V29ya3M6MzI2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLWZpZWxkPVwiZGVzY1wiPntpdGVtLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pO1xuXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvSG93SXRXb3Jrcy5qc3gifQ==