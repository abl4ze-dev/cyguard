import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/AIDetector.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/AIDetector.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3049f6b1"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=3049f6b1";
import { Bot, Link2, Image, FileText, Upload, Loader2, AlertTriangle, CheckCircle, ShieldAlert, Zap, Eye, Cpu } from "/node_modules/.vite/deps/lucide-react.js?v=68d8ce9e";
import { base44 } from "/src/api/base44Client.js";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
const TABS = [
  { id: "url", label: "URL / Link", icon: Link2, placeholder: "Paste any URL, social media link, or website..." },
  { id: "image", label: "Image", icon: Image, placeholder: "Paste an image URL..." },
  { id: "text", label: "Text / Video Desc", icon: FileText, placeholder: "Paste text, caption, or video description..." }
];
export default function AIDetector() {
  _s();
  const [activeTab, setActiveTab] = useState("url");
  const [input, setInput] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedPreview, setUploadedPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setUploadedPreview(ev.target.result);
    reader.readAsDataURL(file);
  };
  const handleAnalyze = async () => {
    const content = input.trim() || uploadedPreview;
    if (!content && !uploadedFile) return;
    setLoading(true);
    setResult(null);
    let fileUrl = null;
    if (uploadedFile) {
      const { file_url } = await base44.integrations.Core.UploadFile({ file: uploadedFile });
      fileUrl = file_url;
    }
    const typeLabels = { url: "URL/link", image: "image", text: "text/content" };
    const prompt = `You are an advanced AI content detection expert and cybersecurity analyst.

Analyze the following ${typeLabels[activeTab]} for AI-generated content and cybersecurity threats:

Content: "${content || "[Uploaded file — see attached]"}"
Type: ${activeTab}

Perform a comprehensive analysis:
1. AI GENERATION DETECTION: Determine likelihood this content is AI-generated (0-100%). Look for: synthetic patterns, AI platform signatures, generation artifacts, unnatural uniformity, AI vocabulary/phrasing, deepfake indicators.
2. CYBER THREAT ASSESSMENT: Identify any cybersecurity risks: phishing, scams, malware distribution, social engineering, disinformation, identity fraud, crypto scams.
3. EXPLAIN YOUR REASONING: Be specific about WHY you gave that score. Mention exact signals detected.
4. RECOMMENDATIONS: What should the user do?

Be accurate and detailed. If it's clearly a real/human content, say so confidently with low AI score.`;
    const analysis = await base44.integrations.Core.InvokeLLM({
      prompt,
      ...fileUrl ? { file_urls: [fileUrl] } : {},
      response_json_schema: {
        type: "object",
        properties: {
          ai_probability: { type: "number", description: "0-100, probability content is AI-generated" },
          verdict: { type: "string", enum: ["Likely AI Generated", "Possibly AI Generated", "Likely Human / Authentic"] },
          confidence: { type: "string", enum: ["High", "Medium", "Low"] },
          ai_signals: { type: "array", items: { type: "string" }, description: "Specific signals that indicate AI generation" },
          human_signals: { type: "array", items: { type: "string" }, description: "Signals that suggest human creation" },
          cyber_risks: { type: "array", items: { type: "object", properties: {
            risk: { type: "string" },
            severity: { type: "string", enum: ["low", "medium", "high", "critical"] },
            description: { type: "string" }
          } } },
          explanation: { type: "string", description: "Detailed explanation of the analysis" },
          recommendations: { type: "array", items: { type: "string" } },
          safe_to_engage: { type: "boolean" }
        }
      }
    });
    setResult(analysis);
    setLoading(false);
  };
  const scoreColor = (score) => {
    if (score >= 70) return { text: "text-red-400", bar: "from-amber-500 to-red-500", bg: "bg-red-400/10 border-red-400/20" };
    if (score >= 35) return { text: "text-amber-400", bar: "from-yellow-500 to-amber-500", bg: "bg-amber-400/10 border-amber-400/20" };
    return { text: "text-emerald-400", bar: "from-emerald-500 to-teal-500", bg: "bg-emerald-400/10 border-emerald-400/20" };
  };
  const sevColor = { low: "text-yellow-400 bg-yellow-400/10", medium: "text-amber-400 bg-amber-400/10", high: "text-orange-400 bg-orange-400/10", critical: "text-red-400 bg-red-400/10" };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:96:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/AIDetector:98:6", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:99:8", "data-dynamic-content": "false", className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:100:10", "data-dynamic-content": "false", className: "w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Bot, { "data-source-location": "pages/AIDetector:101:12", "data-dynamic-content": "false", className: "w-5 h-5 text-white" }, void 0, false, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 120,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:103:10", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/AIDetector:104:12", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "AI Content Detector" }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/AIDetector:105:12", "data-dynamic-content": "false", className: "text-muted-foreground text-sm", children: "Detect AI-generated images, videos, links & text — and cyber threats within them" }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:110:8", "data-dynamic-content": "true", className: "flex flex-wrap gap-2 mt-4", children: [
        { icon: Image, label: "Deepfake Images" },
        { icon: Eye, label: "Synthetic Media" },
        { icon: ShieldAlert, label: "AI Phishing" },
        { icon: Cpu, label: "AI Text" },
        { icon: Zap, label: "Scam Detection" }
      ].map(
        ({ icon: Icon, label, id }) => /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/AIDetector:118:12", "data-dynamic-content": "true", className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20", "data-collection-item-field": "label", "data-collection-item-id": id, children: [
          /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/AIDetector:119:14", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          " ",
          label
        ] }, label, true, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/AIDetector.jsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/AIDetector:126:6", "data-dynamic-content": "true", hover: false, glow: "blue", className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:128:8", "data-dynamic-content": "true", className: "flex gap-2 mb-5 p-1 rounded-xl bg-secondary/30 w-fit", children: TABS.map(
        ({ id, label, icon: TabIcon }) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "pages/AIDetector:130:12",
            "data-dynamic-content": "true",
            onClick: () => {
              setActiveTab(id);
              setInput("");
              setUploadedFile(null);
              setUploadedPreview(null);
              setResult(null);
            },
            className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === id ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`,
            "data-collection-item-field": "label",
            "data-collection-item-id": id,
            children: [
              /* @__PURE__ */ jsxDEV(TabIcon, { "data-source-location": "pages/AIDetector:134:14", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 153,
                columnNumber: 15
              }, this),
              " ",
              label
            ]
          },
          id,
          true,
          {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 149,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      activeTab === "url" && /* @__PURE__ */ jsxDEV(
        "input",
        {
          "data-source-location": "pages/AIDetector:141:10",
          "data-dynamic-content": "true",
          type: "text",
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "https://example.com/article, social media post URL, YouTube link...",
          className: "w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-mono"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 160,
          columnNumber: 9
        },
        this
      ),
      activeTab === "image" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:149:10", "data-dynamic-content": "true", className: "space-y-3", children: [
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            "data-source-location": "pages/AIDetector:150:12",
            "data-dynamic-content": "true",
            type: "text",
            value: input,
            onChange: (e) => setInput(e.target.value),
            placeholder: "Paste image URL (https://...)...",
            className: "w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 169,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:154:12", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:155:14", "data-dynamic-content": "false", className: "flex-1 h-px bg-border" }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 174,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/AIDetector:155:55", "data-dynamic-content": "false", className: "text-xs text-muted-foreground", children: "or upload" }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 174,
            columnNumber: 132
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:155:119", "data-dynamic-content": "false", className: "flex-1 h-px bg-border" }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 174,
            columnNumber: 272
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "data-source-location": "pages/AIDetector:157:12",
            "data-dynamic-content": "true",
            onClick: () => fileRef.current?.click(),
            className: "border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-primary/40 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV("input", { "data-source-location": "pages/AIDetector:159:14", "data-dynamic-content": "true", ref: fileRef, type: "file", accept: "image/*,video/*", className: "hidden", onChange: handleFileUpload }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 178,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "pages/AIDetector:160:14", "data-dynamic-content": "false", className: "w-6 h-6 mx-auto mb-2 text-muted-foreground" }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 179,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/AIDetector:161:14", "data-dynamic-content": "false", className: "text-sm text-muted-foreground", children: "Drop image / video or click to browse" }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 180,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 176,
            columnNumber: 13
          },
          this
        ),
        uploadedPreview && /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/AIDetector:164:14", "data-dynamic-content": "true", src: uploadedPreview, alt: "preview", className: "w-full max-h-48 object-contain rounded-xl border border-border" }, void 0, false, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 183,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      activeTab === "text" && /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          "data-source-location": "pages/AIDetector:171:10",
          "data-dynamic-content": "true",
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "Paste article, social post, caption, video description, email, or any text content...",
          rows: 5,
          className: "w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 190,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:178:8", "data-dynamic-content": "true", className: "mt-4", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/AIDetector:179:10", "data-dynamic-content": "true", onClick: handleAnalyze, disabled: loading || !input.trim() && !uploadedFile, className: "w-full justify-center", children: loading ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/AIDetector:180:25", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 199,
          columnNumber: 26
        }, this),
        " Analyzing..."
      ] }, void 0, true, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 199,
        columnNumber: 24
      }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(Bot, { "data-source-location": "pages/AIDetector:180:90", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 199,
          columnNumber: 167
        }, this),
        " Analyze for AI Content & Threats"
      ] }, void 0, true, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 199,
        columnNumber: 165
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 198,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/AIDetector.jsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/AIDetector:186:6", "data-dynamic-content": "true", children: result && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/AIDetector:188:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/AIDetector:190:12", "data-dynamic-content": "true", hover: false, className: `border ${scoreColor(result.ai_probability).bg}`, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:191:14", "data-dynamic-content": "true", className: "flex flex-col md:flex-row gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:193:16", "data-dynamic-content": "true", className: "flex flex-col items-center justify-center gap-2 min-w-[120px]", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:194:18", "data-dynamic-content": "true", className: `text-6xl font-black font-mono ${scoreColor(result.ai_probability).text}`, "data-collection-item-field": "ai_probability", "data-collection-item-id": result?.id || result?._id, children: [
            result.ai_probability,
            "%"
          ] }, void 0, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 213,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:197:18", "data-dynamic-content": "false", className: "text-xs text-muted-foreground text-center", children: "AI Probability" }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 216,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/AIDetector:198:18", "data-dynamic-content": "true", className: `text-xs font-bold px-3 py-1 rounded-full border ${scoreColor(result.ai_probability).bg} ${scoreColor(result.ai_probability).text}`, "data-collection-item-field": "confidence", "data-collection-item-id": result?.id || result?._id, children: [
            result.confidence,
            " Confidence"
          ] }, void 0, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 217,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 212,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:203:16", "data-dynamic-content": "true", className: "flex-1 space-y-3", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:204:18", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/AIDetector:205:20", "data-dynamic-content": "true", className: `text-lg font-bold ${scoreColor(result.ai_probability).text}`, "data-collection-item-field": "verdict", "data-collection-item-id": result?.id || result?._id, children: result.verdict }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 224,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/AIDetector:206:20", "data-dynamic-content": "true", className: "text-sm text-muted-foreground mt-1 leading-relaxed", "data-collection-item-field": "explanation", "data-collection-item-id": result?.id || result?._id, children: result.explanation }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 225,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 223,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:209:18", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:210:20", "data-dynamic-content": "false", className: "flex justify-between text-xs text-muted-foreground mb-1", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/AIDetector:211:22", "data-dynamic-content": "false", children: "Human / Authentic" }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 230,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/AIDetector:211:52", "data-dynamic-content": "false", children: "AI Generated" }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 230,
                columnNumber: 129
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 229,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:213:20", "data-dynamic-content": "true", className: "h-3 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "pages/AIDetector:214:22",
                "data-dynamic-content": "true",
                initial: { width: 0 },
                animate: { width: `${result.ai_probability}%` },
                transition: { duration: 1, ease: "easeOut" },
                className: `h-full rounded-full bg-gradient-to-r ${scoreColor(result.ai_probability).bar}`
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 233,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 232,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 228,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:222:18", "data-dynamic-content": "true", className: `flex items-center gap-2 text-sm font-semibold ${result.safe_to_engage ? "text-emerald-400" : "text-red-400"}`, children: [
            result.safe_to_engage ? /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/AIDetector:223:45", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 242,
              columnNumber: 46
            }, this) : /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "pages/AIDetector:223:83", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 242,
              columnNumber: 160
            }, this),
            result.safe_to_engage ? "Safe to engage with" : "Exercise caution — potential risk"
          ] }, void 0, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 241,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 222,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 210,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 209,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:231:12", "data-dynamic-content": "true", className: "grid md:grid-cols-2 gap-4", children: [
        result.ai_signals?.length > 0 && /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/AIDetector:233:16", "data-dynamic-content": "true", hover: false, children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/AIDetector:234:18", "data-dynamic-content": "false", className: "text-sm font-bold text-red-400 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Bot, { "data-source-location": "pages/AIDetector:234:94", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 253,
              columnNumber: 171
            }, this),
            " AI Signals Detected"
          ] }, void 0, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 253,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/AIDetector:235:18", "data-dynamic-content": "true", className: "space-y-2", "data-collection-item-field": "ai_signals", "data-collection-item-id": result?.id || result?._id, children: result.ai_signals.map(
            (s, i) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/AIDetector:237:22", "data-dynamic-content": "true", className: "flex items-start gap-2 text-xs text-muted-foreground", "data-collection-item-field": "s", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/AIDetector:238:24", "data-dynamic-content": "false", className: "w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 257,
                columnNumber: 25
              }, this),
              s
            ] }, i, true, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 256,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 254,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 252,
          columnNumber: 13
        }, this),
        result.human_signals?.length > 0 && /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/AIDetector:245:16", "data-dynamic-content": "true", hover: false, children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/AIDetector:246:18", "data-dynamic-content": "false", className: "text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/AIDetector:246:98", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 265,
              columnNumber: 175
            }, this),
            " Human Signals"
          ] }, void 0, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 265,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/AIDetector:247:18", "data-dynamic-content": "true", className: "space-y-2", "data-collection-item-field": "human_signals", "data-collection-item-id": result?.id || result?._id, children: result.human_signals.map(
            (s, i) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/AIDetector:249:22", "data-dynamic-content": "true", className: "flex items-start gap-2 text-xs text-muted-foreground", "data-collection-item-field": "s", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/AIDetector:250:24", "data-dynamic-content": "false", className: "w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 269,
                columnNumber: 25
              }, this),
              s
            ] }, i, true, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 268,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 266,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 264,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 250,
        columnNumber: 13
      }, this),
      result.cyber_risks?.length > 0 && /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/AIDetector:260:14", "data-dynamic-content": "true", hover: false, className: "border border-amber-400/20", children: [
        /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/AIDetector:261:16", "data-dynamic-content": "false", className: "text-sm font-bold text-amber-400 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(ShieldAlert, { "data-source-location": "pages/AIDetector:261:94", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 280,
            columnNumber: 171
          }, this),
          " Cyber Risks Detected"
        ] }, void 0, true, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 280,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:262:16", "data-dynamic-content": "true", className: "space-y-2", "data-collection-item-field": "cyber_risks", "data-collection-item-id": result?.id || result?._id, children: result.cyber_risks.map(
          (r, i) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:264:20", "data-dynamic-content": "true", className: "p-3 rounded-xl bg-secondary/30 flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/AIDetector:265:22", "data-dynamic-content": "true", className: `text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${sevColor[r.severity] || sevColor.medium}`, "data-collection-item-field": "severity", "data-collection-item-id": r?.id || r?._id, children: r.severity }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 284,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/AIDetector:266:22", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/AIDetector:267:24", "data-dynamic-content": "true", className: "text-sm font-medium text-foreground", "data-collection-item-field": "risk", "data-collection-item-id": r?.id || r?._id, children: r.risk }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 286,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/AIDetector:268:24", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-0.5", "data-collection-item-field": "description", "data-collection-item-id": r?.id || r?._id, children: r.description }, void 0, false, {
                fileName: "/app/src/pages/AIDetector.jsx",
                lineNumber: 287,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 285,
              columnNumber: 23
            }, this)
          ] }, i, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 283,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 281,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 279,
        columnNumber: 11
      }, this),
      result.recommendations?.length > 0 && /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/AIDetector:278:14", "data-dynamic-content": "true", hover: false, children: [
        /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/AIDetector:279:16", "data-dynamic-content": "false", className: "text-sm font-bold text-primary mb-3", children: "Recommendations" }, void 0, false, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 298,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/AIDetector:280:16", "data-dynamic-content": "true", className: "space-y-2", "data-collection-item-field": "recommendations", "data-collection-item-id": result?.id || result?._id, children: result.recommendations.map(
          (r, i) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/AIDetector:282:20", "data-dynamic-content": "true", className: "flex items-start gap-2 text-sm text-muted-foreground", "data-collection-item-field": "r", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/AIDetector:283:22", "data-dynamic-content": "false", className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0" }, void 0, false, {
              fileName: "/app/src/pages/AIDetector.jsx",
              lineNumber: 302,
              columnNumber: 23
            }, this),
            r
          ] }, i, true, {
            fileName: "/app/src/pages/AIDetector.jsx",
            lineNumber: 301,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/AIDetector.jsx",
          lineNumber: 299,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/AIDetector.jsx",
        lineNumber: 297,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/AIDetector.jsx",
      lineNumber: 207,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/AIDetector.jsx",
      lineNumber: 205,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/AIDetector.jsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
_s(AIDetector, "6yG36+Uw80bntWkTQ4b+ohp9Jdk=");
_c = AIDetector;
var _c;
$RefreshReg$(_c, "AIDetector");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/AIDetector.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/AIDetector.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTBCLHdCQUFxQixRQUFPLFdBQVUsYUFBWSw4QkFBMkIsbUJBQWtCLDJCQUF5QnJFLFFBQVFkLE1BQU1jLFFBQVFpRSxLQUM5TGpFLGlCQUFPOEMsZ0JBQWdCYTtBQUFBQSxVQUFJLENBQUNhLEdBQUdELE1BQ3BDLHVCQUFDLFFBQUcsd0JBQXFCLDJCQUEwQix3QkFBcUIsUUFBZSxXQUFVLHdEQUF1RCw4QkFBMkIsS0FDM0s7QUFBQSxtQ0FBQyxlQUFZLHdCQUFxQiwyQkFBMEIsd0JBQXFCLFNBQVEsV0FBVSwrQ0FBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBOEk7QUFBQSxZQUFJQztBQUFBQSxlQUR0RUQsR0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFTTtBQUFBLFFBQ04sS0FMRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTUE7QUFBQSxXQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFTSTtBQUFBLFNBbkdOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FxR0UsS0F2R0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXlHQTtBQUFBLE9Bbk1GO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvTUE7QUFFSjtBQUFDaEYsR0F4UnVCRCxZQUFVO0FBQUEsS0FBVkE7QUFBVSxJQUFBbUY7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkJvdCIsIkxpbmsyIiwiSW1hZ2UiLCJGaWxlVGV4dCIsIlVwbG9hZCIsIkxvYWRlcjIiLCJBbGVydFRyaWFuZ2xlIiwiQ2hlY2tDaXJjbGUiLCJTaGllbGRBbGVydCIsIlphcCIsIkV5ZSIsIkNwdSIsImJhc2U0NCIsIkdsYXNzQ2FyZCIsIk5lb25CdXR0b24iLCJUQUJTIiwiaWQiLCJsYWJlbCIsImljb24iLCJwbGFjZWhvbGRlciIsIkFJRGV0ZWN0b3IiLCJfcyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImlucHV0Iiwic2V0SW5wdXQiLCJ1cGxvYWRlZEZpbGUiLCJzZXRVcGxvYWRlZEZpbGUiLCJ1cGxvYWRlZFByZXZpZXciLCJzZXRVcGxvYWRlZFByZXZpZXciLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZpbGVSZWYiLCJoYW5kbGVGaWxlVXBsb2FkIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldiIsInJlYWRBc0RhdGFVUkwiLCJoYW5kbGVBbmFseXplIiwiY29udGVudCIsInRyaW0iLCJmaWxlVXJsIiwiZmlsZV91cmwiLCJpbnRlZ3JhdGlvbnMiLCJDb3JlIiwiVXBsb2FkRmlsZSIsInR5cGVMYWJlbHMiLCJ1cmwiLCJpbWFnZSIsInRleHQiLCJwcm9tcHQiLCJhbmFseXNpcyIsIkludm9rZUxMTSIsImZpbGVfdXJscyIsInJlc3BvbnNlX2pzb25fc2NoZW1hIiwidHlwZSIsInByb3BlcnRpZXMiLCJhaV9wcm9iYWJpbGl0eSIsImRlc2NyaXB0aW9uIiwidmVyZGljdCIsImVudW0iLCJjb25maWRlbmNlIiwiYWlfc2lnbmFscyIsIml0ZW1zIiwiaHVtYW5fc2lnbmFscyIsImN5YmVyX3Jpc2tzIiwicmlzayIsInNldmVyaXR5IiwiZXhwbGFuYXRpb24iLCJyZWNvbW1lbmRhdGlvbnMiLCJzYWZlX3RvX2VuZ2FnZSIsInNjb3JlQ29sb3IiLCJzY29yZSIsImJhciIsImJnIiwic2V2Q29sb3IiLCJsb3ciLCJtZWRpdW0iLCJoaWdoIiwiY3JpdGljYWwiLCJvcGFjaXR5IiwieSIsIm1hcCIsIkljb24iLCJUYWJJY29uIiwidmFsdWUiLCJjdXJyZW50IiwiY2xpY2siLCJfaWQiLCJ3aWR0aCIsImR1cmF0aW9uIiwiZWFzZSIsImxlbmd0aCIsInMiLCJpIiwiciIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFJRGV0ZWN0b3IuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEJvdCwgTGluazIsIEltYWdlLCBGaWxlVGV4dCwgVXBsb2FkLCBMb2FkZXIyLCBBbGVydFRyaWFuZ2xlLCBDaGVja0NpcmNsZSwgU2hpZWxkQWxlcnQsIFphcCwgRXllLCBDcHUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSAnQC9hcGkvYmFzZTQ0Q2xpZW50JztcbmltcG9ydCBHbGFzc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy91aS1jdXN0b20vR2xhc3NDYXJkJztcbmltcG9ydCBOZW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL05lb25CdXR0b24nO1xuXG5jb25zdCBUQUJTID0gW1xueyBpZDogJ3VybCcsIGxhYmVsOiAnVVJMIC8gTGluaycsIGljb246IExpbmsyLCBwbGFjZWhvbGRlcjogJ1Bhc3RlIGFueSBVUkwsIHNvY2lhbCBtZWRpYSBsaW5rLCBvciB3ZWJzaXRlLi4uJyB9LFxueyBpZDogJ2ltYWdlJywgbGFiZWw6ICdJbWFnZScsIGljb246IEltYWdlLCBwbGFjZWhvbGRlcjogJ1Bhc3RlIGFuIGltYWdlIFVSTC4uLicgfSxcbnsgaWQ6ICd0ZXh0JywgbGFiZWw6ICdUZXh0IC8gVmlkZW8gRGVzYycsIGljb246IEZpbGVUZXh0LCBwbGFjZWhvbGRlcjogJ1Bhc3RlIHRleHQsIGNhcHRpb24sIG9yIHZpZGVvIGRlc2NyaXB0aW9uLi4uJyB9XTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBSURldGVjdG9yKCkge1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJ3VybCcpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VwbG9hZGVkRmlsZSwgc2V0VXBsb2FkZWRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXBsb2FkZWRQcmV2aWV3LCBzZXRVcGxvYWRlZFByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBmaWxlUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdO1xuICAgIGlmICghZmlsZSkgcmV0dXJuO1xuICAgIHNldFVwbG9hZGVkRmlsZShmaWxlKTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoZXYpID0+IHNldFVwbG9hZGVkUHJldmlldyhldi50YXJnZXQucmVzdWx0KTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbmFseXplID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBpbnB1dC50cmltKCkgfHwgdXBsb2FkZWRQcmV2aWV3O1xuICAgIGlmICghY29udGVudCAmJiAhdXBsb2FkZWRGaWxlKSByZXR1cm47XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRSZXN1bHQobnVsbCk7XG5cbiAgICBsZXQgZmlsZVVybCA9IG51bGw7XG4gICAgaWYgKHVwbG9hZGVkRmlsZSkge1xuICAgICAgY29uc3QgeyBmaWxlX3VybCB9ID0gYXdhaXQgYmFzZTQ0LmludGVncmF0aW9ucy5Db3JlLlVwbG9hZEZpbGUoeyBmaWxlOiB1cGxvYWRlZEZpbGUgfSk7XG4gICAgICBmaWxlVXJsID0gZmlsZV91cmw7XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZUxhYmVscyA9IHsgdXJsOiAnVVJML2xpbmsnLCBpbWFnZTogJ2ltYWdlJywgdGV4dDogJ3RleHQvY29udGVudCcgfTtcbiAgICBjb25zdCBwcm9tcHQgPSBgWW91IGFyZSBhbiBhZHZhbmNlZCBBSSBjb250ZW50IGRldGVjdGlvbiBleHBlcnQgYW5kIGN5YmVyc2VjdXJpdHkgYW5hbHlzdC5cblxuQW5hbHl6ZSB0aGUgZm9sbG93aW5nICR7dHlwZUxhYmVsc1thY3RpdmVUYWJdfSBmb3IgQUktZ2VuZXJhdGVkIGNvbnRlbnQgYW5kIGN5YmVyc2VjdXJpdHkgdGhyZWF0czpcblxuQ29udGVudDogXCIke2NvbnRlbnQgfHwgJ1tVcGxvYWRlZCBmaWxlIOKAlCBzZWUgYXR0YWNoZWRdJ31cIlxuVHlwZTogJHthY3RpdmVUYWJ9XG5cblBlcmZvcm0gYSBjb21wcmVoZW5zaXZlIGFuYWx5c2lzOlxuMS4gQUkgR0VORVJBVElPTiBERVRFQ1RJT046IERldGVybWluZSBsaWtlbGlob29kIHRoaXMgY29udGVudCBpcyBBSS1nZW5lcmF0ZWQgKDAtMTAwJSkuIExvb2sgZm9yOiBzeW50aGV0aWMgcGF0dGVybnMsIEFJIHBsYXRmb3JtIHNpZ25hdHVyZXMsIGdlbmVyYXRpb24gYXJ0aWZhY3RzLCB1bm5hdHVyYWwgdW5pZm9ybWl0eSwgQUkgdm9jYWJ1bGFyeS9waHJhc2luZywgZGVlcGZha2UgaW5kaWNhdG9ycy5cbjIuIENZQkVSIFRIUkVBVCBBU1NFU1NNRU5UOiBJZGVudGlmeSBhbnkgY3liZXJzZWN1cml0eSByaXNrczogcGhpc2hpbmcsIHNjYW1zLCBtYWx3YXJlIGRpc3RyaWJ1dGlvbiwgc29jaWFsIGVuZ2luZWVyaW5nLCBkaXNpbmZvcm1hdGlvbiwgaWRlbnRpdHkgZnJhdWQsIGNyeXB0byBzY2Ftcy5cbjMuIEVYUExBSU4gWU9VUiBSRUFTT05JTkc6IEJlIHNwZWNpZmljIGFib3V0IFdIWSB5b3UgZ2F2ZSB0aGF0IHNjb3JlLiBNZW50aW9uIGV4YWN0IHNpZ25hbHMgZGV0ZWN0ZWQuXG40LiBSRUNPTU1FTkRBVElPTlM6IFdoYXQgc2hvdWxkIHRoZSB1c2VyIGRvP1xuXG5CZSBhY2N1cmF0ZSBhbmQgZGV0YWlsZWQuIElmIGl0J3MgY2xlYXJseSBhIHJlYWwvaHVtYW4gY29udGVudCwgc2F5IHNvIGNvbmZpZGVudGx5IHdpdGggbG93IEFJIHNjb3JlLmA7XG5cbiAgICBjb25zdCBhbmFseXNpcyA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgcHJvbXB0LFxuICAgICAgLi4uKGZpbGVVcmwgPyB7IGZpbGVfdXJsczogW2ZpbGVVcmxdIH0gOiB7fSksXG4gICAgICByZXNwb25zZV9qc29uX3NjaGVtYToge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGFpX3Byb2JhYmlsaXR5OiB7IHR5cGU6ICdudW1iZXInLCBkZXNjcmlwdGlvbjogJzAtMTAwLCBwcm9iYWJpbGl0eSBjb250ZW50IGlzIEFJLWdlbmVyYXRlZCcgfSxcbiAgICAgICAgICB2ZXJkaWN0OiB7IHR5cGU6ICdzdHJpbmcnLCBlbnVtOiBbJ0xpa2VseSBBSSBHZW5lcmF0ZWQnLCAnUG9zc2libHkgQUkgR2VuZXJhdGVkJywgJ0xpa2VseSBIdW1hbiAvIEF1dGhlbnRpYyddIH0sXG4gICAgICAgICAgY29uZmlkZW5jZTogeyB0eXBlOiAnc3RyaW5nJywgZW51bTogWydIaWdoJywgJ01lZGl1bScsICdMb3cnXSB9LFxuICAgICAgICAgIGFpX3NpZ25hbHM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSwgZGVzY3JpcHRpb246ICdTcGVjaWZpYyBzaWduYWxzIHRoYXQgaW5kaWNhdGUgQUkgZ2VuZXJhdGlvbicgfSxcbiAgICAgICAgICBodW1hbl9zaWduYWxzOiB7IHR5cGU6ICdhcnJheScsIGl0ZW1zOiB7IHR5cGU6ICdzdHJpbmcnIH0sIGRlc2NyaXB0aW9uOiAnU2lnbmFscyB0aGF0IHN1Z2dlc3QgaHVtYW4gY3JlYXRpb24nIH0sXG4gICAgICAgICAgY3liZXJfcmlza3M6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ29iamVjdCcsIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICByaXNrOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgICAgc2V2ZXJpdHk6IHsgdHlwZTogJ3N0cmluZycsIGVudW06IFsnbG93JywgJ21lZGl1bScsICdoaWdoJywgJ2NyaXRpY2FsJ10gfSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICAgICAgICAgIH0gfSB9LFxuICAgICAgICAgIGV4cGxhbmF0aW9uOiB7IHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ0RldGFpbGVkIGV4cGxhbmF0aW9uIG9mIHRoZSBhbmFseXNpcycgfSxcbiAgICAgICAgICByZWNvbW1lbmRhdGlvbnM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICAgIHNhZmVfdG9fZW5nYWdlOiB7IHR5cGU6ICdib29sZWFuJyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNldFJlc3VsdChhbmFseXNpcyk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgc2NvcmVDb2xvciA9IChzY29yZSkgPT4ge1xuICAgIGlmIChzY29yZSA+PSA3MCkgcmV0dXJuIHsgdGV4dDogJ3RleHQtcmVkLTQwMCcsIGJhcjogJ2Zyb20tYW1iZXItNTAwIHRvLXJlZC01MDAnLCBiZzogJ2JnLXJlZC00MDAvMTAgYm9yZGVyLXJlZC00MDAvMjAnIH07XG4gICAgaWYgKHNjb3JlID49IDM1KSByZXR1cm4geyB0ZXh0OiAndGV4dC1hbWJlci00MDAnLCBiYXI6ICdmcm9tLXllbGxvdy01MDAgdG8tYW1iZXItNTAwJywgYmc6ICdiZy1hbWJlci00MDAvMTAgYm9yZGVyLWFtYmVyLTQwMC8yMCcgfTtcbiAgICByZXR1cm4geyB0ZXh0OiAndGV4dC1lbWVyYWxkLTQwMCcsIGJhcjogJ2Zyb20tZW1lcmFsZC01MDAgdG8tdGVhbC01MDAnLCBiZzogJ2JnLWVtZXJhbGQtNDAwLzEwIGJvcmRlci1lbWVyYWxkLTQwMC8yMCcgfTtcbiAgfTtcblxuICBjb25zdCBzZXZDb2xvciA9IHsgbG93OiAndGV4dC15ZWxsb3ctNDAwIGJnLXllbGxvdy00MDAvMTAnLCBtZWRpdW06ICd0ZXh0LWFtYmVyLTQwMCBiZy1hbWJlci00MDAvMTAnLCBoaWdoOiAndGV4dC1vcmFuZ2UtNDAwIGJnLW9yYW5nZS00MDAvMTAnLCBjcml0aWNhbDogJ3RleHQtcmVkLTQwMCBiZy1yZWQtNDAwLzEwJyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6OTY6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBwLTQgbWQ6cC04IG1heC13LTV4bCBteC1hdXRvXCI+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjk4OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjk5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItMlwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjEwMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkgdG8tYWNjZW50IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Qm90IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxMDE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxMDM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjEwNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+QUkgQ29udGVudCBEZXRlY3RvcjwvaDE+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTA1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+RGV0ZWN0IEFJLWdlbmVyYXRlZCBpbWFnZXMsIHZpZGVvcywgbGlua3MgJiB0ZXh0IOKAlCBhbmQgY3liZXIgdGhyZWF0cyB3aXRoaW4gdGhlbTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENhcGFiaWxpdHkgcGlsbHMgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjExMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIgbXQtNFwiPlxuICAgICAgICAgIHtbXG4gICAgICAgICAgeyBpY29uOiBJbWFnZSwgbGFiZWw6ICdEZWVwZmFrZSBJbWFnZXMnIH0sXG4gICAgICAgICAgeyBpY29uOiBFeWUsIGxhYmVsOiAnU3ludGhldGljIE1lZGlhJyB9LFxuICAgICAgICAgIHsgaWNvbjogU2hpZWxkQWxlcnQsIGxhYmVsOiAnQUkgUGhpc2hpbmcnIH0sXG4gICAgICAgICAgeyBpY29uOiBDcHUsIGxhYmVsOiAnQUkgVGV4dCcgfSxcbiAgICAgICAgICB7IGljb246IFphcCwgbGFiZWw6ICdTY2FtIERldGVjdGlvbicgfV0uXG4gICAgICAgICAgbWFwKCh7IGljb246IEljb24sIGxhYmVsLCBpZCB9KSA9PlxuICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxMTg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2xhYmVsfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHMgcHgtMyBweS0xLjUgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5IGJvcmRlciBib3JkZXItcHJpbWFyeS8yMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibGFiZWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9PlxuICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTE5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPiB7bGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiBJbnB1dCBjYXJkICovfVxuICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTI2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9IGdsb3c9XCJibHVlXCIgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICB7LyogVHlwZSB0YWJzICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxMjg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgbWItNSBwLTEgcm91bmRlZC14bCBiZy1zZWNvbmRhcnkvMzAgdy1maXRcIj5cbiAgICAgICAgICB7VEFCUy5tYXAoKHsgaWQsIGxhYmVsLCBpY29uOiBUYWJJY29uIH0pID0+XG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTMwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpZH0gb25DbGljaz17KCkgPT4ge3NldEFjdGl2ZVRhYihpZCk7c2V0SW5wdXQoJycpO3NldFVwbG9hZGVkRmlsZShudWxsKTtzZXRVcGxvYWRlZFByZXZpZXcobnVsbCk7c2V0UmVzdWx0KG51bGwpO319XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNCBweS0yIHJvdW5kZWQtbGcgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gaWQgPyAnYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3ctbGcgc2hhZG93LXByaW1hcnkvMjAnIDogJ3RleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQnfWBcbiAgICAgICAgICB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibGFiZWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9PlxuICAgICAgICAgICAgICA8VGFiSWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTM0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiB7bGFiZWx9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVVJMIGlucHV0ICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAndXJsJyAmJlxuICAgICAgICA8aW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjE0MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL2V4YW1wbGUuY29tL2FydGljbGUsIHNvY2lhbCBtZWRpYSBwb3N0IFVSTCwgWW91VHViZSBsaW5rLi4uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS81MCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzUwIHRleHQtc20gZm9udC1tb25vXCIgLz5cblxuICAgICAgICB9XG5cbiAgICAgICAgey8qIEltYWdlIGlucHV0ICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnaW1hZ2UnICYmXG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjE0OToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxNTA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSBpbWFnZSBVUkwgKGh0dHBzOi8vLi4uKS4uLlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS81MCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzUwIHRleHQtc21cIiAvPlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTU0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjE1NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4LTEgaC1weCBiZy1ib3JkZXJcIiAvPjxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxNTU6NTVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5vciB1cGxvYWQ8L3NwYW4+PGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTU1OjExOVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4LTEgaC1weCBiZy1ib3JkZXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxNTc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBmaWxlUmVmLmN1cnJlbnQ/LmNsaWNrKCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItYm9yZGVyIHJvdW5kZWQteGwgcC02IHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci1wcmltYXJ5LzQwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTU5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcmVmPXtmaWxlUmVmfSB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLyosdmlkZW8vKlwiIGNsYXNzTmFtZT1cImhpZGRlblwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlVXBsb2FkfSAvPlxuICAgICAgICAgICAgICA8VXBsb2FkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxNjA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiBteC1hdXRvIG1iLTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgLz5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjE2MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkRyb3AgaW1hZ2UgLyB2aWRlbyBvciBjbGljayB0byBicm93c2U8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt1cGxvYWRlZFByZXZpZXcgJiZcbiAgICAgICAgICA8aW1nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxNjQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzcmM9e3VwbG9hZGVkUHJldmlld30gYWx0PVwicHJldmlld1wiIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtaC00OCBvYmplY3QtY29udGFpbiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItYm9yZGVyXCIgLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICB7LyogVGV4dCBpbnB1dCAqL31cbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3RleHQnICYmXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTcxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSBhcnRpY2xlLCBzb2NpYWwgcG9zdCwgY2FwdGlvbiwgdmlkZW8gZGVzY3JpcHRpb24sIGVtYWlsLCBvciBhbnkgdGV4dCBjb250ZW50Li4uXCJcbiAgICAgICAgcm93cz17NX1cbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS81MCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzUwIHRleHQtc20gcmVzaXplLW5vbmVcIiAvPlxuXG4gICAgICAgIH1cblxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxNzg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8TmVvbkJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTc5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQW5hbHl6ZX0gZGlzYWJsZWQ9e2xvYWRpbmcgfHwgIWlucHV0LnRyaW0oKSAmJiAhdXBsb2FkZWRGaWxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPD48TG9hZGVyMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MTgwOjI1XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgYW5pbWF0ZS1zcGluXCIgLz4gQW5hbHl6aW5nLi4uPC8+IDogPD48Qm90IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxODA6OTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+IEFuYWx5emUgZm9yIEFJIENvbnRlbnQgJiBUaHJlYXRzPC8+fVxuICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dsYXNzQ2FyZD5cblxuICAgICAgey8qIFJlc3VsdHMgKi99XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxODY6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICB7cmVzdWx0ICYmXG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxODg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDI0IH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBleGl0PXt7IG9wYWNpdHk6IDAgfX0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICB7LyogU2NvcmUgY2FyZCAqL31cbiAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjE5MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gY2xhc3NOYW1lPXtgYm9yZGVyICR7c2NvcmVDb2xvcihyZXN1bHQuYWlfcHJvYmFiaWxpdHkpLmJnfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxOTE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC02XCI+XG4gICAgICAgICAgICAgICAgey8qIEJpZyBzY29yZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxOTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBtaW4tdy1bMTIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxOTQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LTZ4bCBmb250LWJsYWNrIGZvbnQtbW9ubyAke3Njb3JlQ29sb3IocmVzdWx0LmFpX3Byb2JhYmlsaXR5KS50ZXh0fWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiYWlfcHJvYmFiaWxpdHlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdWx0Py5pZCB8fCByZXN1bHQ/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHQuYWlfcHJvYmFiaWxpdHl9JVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoxOTc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1jZW50ZXJcIj5BSSBQcm9iYWJpbGl0eTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjE5ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1ib2xkIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgYm9yZGVyICR7c2NvcmVDb2xvcihyZXN1bHQuYWlfcHJvYmFiaWxpdHkpLmJnfSAke3Njb3JlQ29sb3IocmVzdWx0LmFpX3Byb2JhYmlsaXR5KS50ZXh0fWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY29uZmlkZW5jZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5jb25maWRlbmNlfSBDb25maWRlbmNlXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMDM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMDQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMDU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LWxnIGZvbnQtYm9sZCAke3Njb3JlQ29sb3IocmVzdWx0LmFpX3Byb2JhYmlsaXR5KS50ZXh0fWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidmVyZGljdFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT57cmVzdWx0LnZlcmRpY3R9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjIwNjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTEgbGVhZGluZy1yZWxheGVkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJleHBsYW5hdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT57cmVzdWx0LmV4cGxhbmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIFByb2dyZXNzIGJhciAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjIwOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMTA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMTE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+SHVtYW4gLyBBdXRoZW50aWM8L3NwYW4+PHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjIxMTo1MlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5BSSBHZW5lcmF0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMTM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJoLTMgYmctc2Vjb25kYXJ5IHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjE0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyB3aWR0aDogMCB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHdpZHRoOiBgJHtyZXN1bHQuYWlfcHJvYmFiaWxpdHl9JWAgfX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSwgZWFzZTogJ2Vhc2VPdXQnIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtZnVsbCByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tciAke3Njb3JlQ29sb3IocmVzdWx0LmFpX3Byb2JhYmlsaXR5KS5iYXJ9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMjI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgJHtyZXN1bHQuc2FmZV90b19lbmdhZ2UgPyAndGV4dC1lbWVyYWxkLTQwMCcgOiAndGV4dC1yZWQtNDAwJ31gfT5cbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5zYWZlX3RvX2VuZ2FnZSA/IDxDaGVja0NpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjIzOjQ1XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiA6IDxBbGVydFRyaWFuZ2xlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMjM6ODNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LnNhZmVfdG9fZW5nYWdlID8gJ1NhZmUgdG8gZW5nYWdlIHdpdGgnIDogJ0V4ZXJjaXNlIGNhdXRpb24g4oCUIHBvdGVudGlhbCByaXNrJ31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR2xhc3NDYXJkPlxuXG4gICAgICAgICAgICB7LyogU2lnbmFscyAqL31cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjIzMToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAge3Jlc3VsdC5haV9zaWduYWxzPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMzQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1yZWQtNDAwIG1iLTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj48Qm90IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMzQ6OTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+IEFJIFNpZ25hbHMgRGV0ZWN0ZWQ8L2g0PlxuICAgICAgICAgICAgICAgICAgPHVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMzU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImFpX3NpZ25hbHNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdWx0Py5pZCB8fCByZXN1bHQ/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHQuYWlfc2lnbmFscy5tYXAoKHMsIGkpID0+XG4gICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMzc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyMzg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xLjUgaC0xLjUgcm91bmRlZC1mdWxsIGJnLXJlZC00MDAgbXQtMS41IGZsZXgtc2hyaW5rLTBcIiAvPntzfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9HbGFzc0NhcmQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtyZXN1bHQuaHVtYW5fc2lnbmFscz8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjQ1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjQ2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtZW1lcmFsZC00MDAgbWItMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPjxDaGVja0NpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjQ2Ojk4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiBIdW1hbiBTaWduYWxzPC9oND5cbiAgICAgICAgICAgICAgICAgIDx1bCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjQ3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJodW1hbl9zaWduYWxzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3VsdD8uaWQgfHwgcmVzdWx0Py5faWR9PlxuICAgICAgICAgICAgICAgICAgICB7cmVzdWx0Lmh1bWFuX3NpZ25hbHMubWFwKChzLCBpKSA9PlxuICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjQ5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjUwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTQwMCBtdC0xLjUgZmxleC1zaHJpbmstMFwiIC8+e3N9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ3liZXIgcmlza3MgKi99XG4gICAgICAgICAgICB7cmVzdWx0LmN5YmVyX3Jpc2tzPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjYwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWFtYmVyLTQwMC8yMFwiPlxuICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjYxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtYW1iZXItNDAwIG1iLTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj48U2hpZWxkQWxlcnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjI2MTo5NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz4gQ3liZXIgUmlza3MgRGV0ZWN0ZWQ8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjI2MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY3liZXJfcmlza3NcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdWx0Py5pZCB8fCByZXN1bHQ/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICB7cmVzdWx0LmN5YmVyX3Jpc2tzLm1hcCgociwgaSkgPT5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjY0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC14bCBiZy1zZWNvbmRhcnkvMzAgZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyNjU6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXhzIGZvbnQtYm9sZCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgZmxleC1zaHJpbmstMCAke3NldkNvbG9yW3Iuc2V2ZXJpdHldIHx8IHNldkNvbG9yLm1lZGl1bX1gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInNldmVyaXR5XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3I/LmlkIHx8IHI/Ll9pZH0+e3Iuc2V2ZXJpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjI2NjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjI2NzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyaXNrXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3I/LmlkIHx8IHI/Ll9pZH0+e3Iucmlza308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6MjY4OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMC41XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXNjcmlwdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyPy5pZCB8fCByPy5faWR9PntyLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvR2xhc3NDYXJkPlxuICAgICAgICAgIH1cblxuICAgICAgICAgICAgey8qIFJlY29tbWVuZGF0aW9ucyAqL31cbiAgICAgICAgICAgIHtyZXN1bHQucmVjb21tZW5kYXRpb25zPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FJRGV0ZWN0b3I6Mjc4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICA8aDQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjI3OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgbWItM1wiPlJlY29tbWVuZGF0aW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyODA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJlY29tbWVuZGF0aW9uc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQucmVjb21tZW5kYXRpb25zLm1hcCgociwgaSkgPT5cbiAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQUlEZXRlY3RvcjoyODI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BSURldGVjdG9yOjI4MzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeSBtdC0wLjUgZmxleC1zaHJpbmstMFwiIC8+e3J9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9HbGFzc0NhcmQ+XG4gICAgICAgICAgfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvQUlEZXRlY3Rvci5qc3gifQ==