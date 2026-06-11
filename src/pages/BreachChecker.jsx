import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/BreachChecker.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/BreachChecker.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3049f6b1"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=3049f6b1";
import { Mail, Search, ShieldCheck, ShieldAlert, Loader2, AlertTriangle, Calendar, Globe, Key, Lock, Eye, EyeOff, ChevronDown, ChevronUp, ExternalLink, KeyRound, Sparkles, Copy, CheckCheck, RefreshCw, Shield, Zap } from "/node_modules/.vite/deps/lucide-react.js?v=68d8ce9e";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
import { base44 } from "/src/api/base44Client.js";
const SEVERITY_COLORS = {
  high: { text: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
  medium: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
  low: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" }
};
function BreachCard({ breach, index, id }) {
  _s();
  const [expanded, setExpanded] = useState(false);
  const hasPwd = breach.DataClasses?.some((d) => d.toLowerCase().includes("password"));
  const sev = hasPwd ? "high" : breach.DataClasses?.length > 3 ? "medium" : "low";
  const col = SEVERITY_COLORS[sev];
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "pages/BreachChecker:21:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.05 },
      className: `rounded-2xl border ${col.border} ${col.bg} overflow-hidden`,
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:27:6", "data-dynamic-content": "true", className: "p-4 flex items-start gap-3 cursor-pointer", onClick: () => setExpanded(!expanded), children: [
          breach.LogoPath ? /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/BreachChecker:29:10", "data-dynamic-content": "true", src: breach.LogoPath, alt: breach.Name, className: "w-10 h-10 rounded-xl object-contain bg-white/10 p-1 flex-shrink-0" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 48,
            columnNumber: 9
          }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:31:10", "data-dynamic-content": "true", className: `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${col.bg} border ${col.border}`, children: /* @__PURE__ */ jsxDEV(Globe, { "data-source-location": "pages/BreachChecker:32:12", "data-dynamic-content": "true", className: `w-5 h-5 ${col.text}` }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 51,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:35:8", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:36:10", "data-dynamic-content": "true", className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/BreachChecker:37:12", "data-dynamic-content": "true", className: "font-bold text-foreground text-sm", children: breach.Title || breach.Name }, void 0, false, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 56,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:38:12", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/BreachChecker:39:14", "data-dynamic-content": "true", className: `text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${col.bg} ${col.text} border ${col.border}`, "data-collection-item-field": "sev", "data-collection-item-id": id, children: sev }, void 0, false, {
                  fileName: "/app/src/pages/BreachChecker.jsx",
                  lineNumber: 58,
                  columnNumber: 15
                }, this),
                expanded ? /* @__PURE__ */ jsxDEV(ChevronUp, { "data-source-location": "pages/BreachChecker:40:26", "data-dynamic-content": "false", className: "w-4 h-4 text-muted-foreground" }, void 0, false, {
                  fileName: "/app/src/pages/BreachChecker.jsx",
                  lineNumber: 59,
                  columnNumber: 27
                }, this) : /* @__PURE__ */ jsxDEV(ChevronDown, { "data-source-location": "pages/BreachChecker:40:84", "data-dynamic-content": "false", className: "w-4 h-4 text-muted-foreground" }, void 0, false, {
                  fileName: "/app/src/pages/BreachChecker.jsx",
                  lineNumber: 59,
                  columnNumber: 163
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 57,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:43:10", "data-dynamic-content": "true", className: "flex items-center gap-3 mt-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/BreachChecker:44:12", "data-dynamic-content": "true", className: "flex items-center gap-1", "data-collection-item-field": "BreachDate", "data-collection-item-id": breach?.id || breach?._id, children: [
                /* @__PURE__ */ jsxDEV(Calendar, { "data-source-location": "pages/BreachChecker:44:54", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/src/pages/BreachChecker.jsx",
                  lineNumber: 63,
                  columnNumber: 224
                }, this),
                breach.BreachDate
              ] }, void 0, true, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 63,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/BreachChecker:45:12", "data-dynamic-content": "true", children: [
                (breach.PwnCount || 0).toLocaleString(),
                " accounts"
              ] }, void 0, true, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 64,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:47:10", "data-dynamic-content": "true", className: "flex flex-wrap gap-1 mt-2", children: [
              (breach.DataClasses || []).slice(0, 4).map(
                (dc) => /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/BreachChecker:49:14", "data-dynamic-content": "true", className: "text-[10px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground", "data-collection-item-field": "dc", children: dc }, dc, false, {
                  fileName: "/app/src/pages/BreachChecker.jsx",
                  lineNumber: 68,
                  columnNumber: 13
                }, this)
              ),
              breach.DataClasses?.length > 4 && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/BreachChecker:52:14", "data-dynamic-content": "true", className: "text-[10px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground", children: [
                "+",
                breach.DataClasses.length - 4,
                " more"
              ] }, void 0, true, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 71,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/BreachChecker:57:6", "data-dynamic-content": "true", children: expanded && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/BreachChecker:59:10", "data-dynamic-content": "true", initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, className: "overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:60:12", "data-dynamic-content": "true", className: "px-4 pb-4 border-t border-border/40 pt-3", "data-collection-item-field": "Domain", "data-collection-item-id": breach?.id || breach?._id, children: [
          /* @__PURE__ */ jsxDEV(
            "p",
            {
              "data-source-location": "pages/BreachChecker:61:14",
              "data-dynamic-content": "true",
              className: "text-xs text-muted-foreground leading-relaxed",
              dangerouslySetInnerHTML: { __html: breach.Description?.replace(/<[^>]*>/g, "") || "No description available." }
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 80,
              columnNumber: 15
            },
            this
          ),
          breach.Domain && /* @__PURE__ */ jsxDEV(
            "a",
            {
              "data-source-location": "pages/BreachChecker:64:16",
              "data-dynamic-content": "true",
              href: `https://${breach.Domain}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline",
              "data-collection-item-field": "Domain",
              "data-collection-item-id": breach?.id || breach?._id,
              children: [
                breach.Domain,
                " ",
                /* @__PURE__ */ jsxDEV(ExternalLink, { "data-source-location": "pages/BreachChecker:66:34", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/src/pages/BreachChecker.jsx",
                  lineNumber: 85,
                  columnNumber: 35
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 83,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 79,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 78,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 76,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 40,
      columnNumber: 5
    },
    this
  );
}
_s(BreachCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c = BreachCard;
function PasswordStrengthBar({ password }) {
  if (!password) return null;
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 14) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  const levels = [
    { label: "Very Weak", color: "bg-red-500" },
    { label: "Weak", color: "bg-orange-500" },
    { label: "Fair", color: "bg-yellow-500" },
    { label: "Strong", color: "bg-emerald-400" },
    { label: "Very Strong", color: "bg-emerald-500" }
  ];
  const level = levels[Math.max(0, score - 1)] || levels[0];
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:97:4", "data-dynamic-content": "true", className: "mt-2", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:98:6", "data-dynamic-content": "true", className: "flex gap-1 mb-1", children: [1, 2, 3, 4, 5].map(
      (i, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:100:10", "data-dynamic-content": "true", className: `h-1.5 flex-1 rounded-full transition-all ${i <= score ? level.color : "bg-border"}`, "data-arr-index": __arrIdx__ }, i, false, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:103:6", "data-dynamic-content": "true", className: "text-[11px] text-muted-foreground", "data-collection-item-field": "label", "data-collection-item-id": level?.id || level?._id, children: level.label }, void 0, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/BreachChecker.jsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}
_c2 = PasswordStrengthBar;
function PasswordChecker() {
  _s2();
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [genLoading, setGenLoading] = useState(false);
  const checkPassword = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setResult(null);
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `Analyze this password for security: "${password}"
      
      Assess:
      1. Whether it appears in common password lists / known breaches (pwned status)
      2. Estimated crack time
      3. Specific weaknesses found
      4. Overall security score 0-100
      
      Be realistic. Common passwords like "password123", "qwerty", "123456" etc. should be marked as pwned=true with very high exposure count.`,
      response_json_schema: {
        type: "object",
        properties: {
          pwned: { type: "boolean" },
          exposure_count: { type: "number" },
          crack_time: { type: "string" },
          score: { type: "number" },
          risk_level: { type: "string", enum: ["critical", "high", "medium", "low", "safe"] },
          weaknesses: { type: "array", items: { type: "string" } },
          verdict: { type: "string" }
        }
      }
    });
    setResult(res);
    setLoading(false);
  };
  const generateStrongPassword = async () => {
    setGenLoading(true);
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `Generate 4 strong, unique passwords for different use cases. Each should be:
      - At least 16 characters
      - Mix of uppercase, lowercase, numbers, and symbols
      - Memorable but secure (consider passphrases with symbols for some)
      - NOT based on dictionary words alone
      
      Also provide a very strong passphrase option (4+ random words with symbols).`,
      response_json_schema: {
        type: "object",
        properties: {
          passwords: {
            type: "array",
            items: {
              type: "object",
              properties: {
                password: { type: "string" },
                type: { type: "string" },
                strength_note: { type: "string" }
              }
            }
          }
        }
      }
    });
    setGenLoading(false);
    return res.passwords || [];
  };
  const [generatedPasswords, setGeneratedPasswords] = useState([]);
  const handleGenerate = async () => {
    const pwds = await generateStrongPassword();
    setGeneratedPasswords(pwds);
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(false), 2e3);
  };
  const riskColors = {
    critical: { text: "text-red-400", bg: "bg-red-400/5", border: "border-red-400/20" },
    high: { text: "text-orange-400", bg: "bg-orange-400/5", border: "border-orange-400/20" },
    medium: { text: "text-amber-400", bg: "bg-amber-400/5", border: "border-amber-400/20" },
    low: { text: "text-yellow-400", bg: "bg-yellow-400/5", border: "border-yellow-400/20" },
    safe: { text: "text-emerald-400", bg: "bg-emerald-400/5", border: "border-emerald-400/20" }
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:202:4", "data-dynamic-content": "true", className: "space-y-5", children: [
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/BreachChecker:204:6", "data-dynamic-content": "true", hover: false, glow: "purple", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/BreachChecker:205:8", "data-dynamic-content": "false", className: "text-sm font-bold text-foreground mb-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "pages/BreachChecker:206:10", "data-dynamic-content": "false", className: "w-4 h-4 text-accent" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        " Check if Password is Pwned"
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:208:8", "data-dynamic-content": "false", className: "text-xs text-muted-foreground mb-4", children: "Find out if your password appears in known data breaches." }, void 0, false, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 227,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("form", { "data-source-location": "pages/BreachChecker:209:8", "data-dynamic-content": "true", onSubmit: checkPassword, className: "flex gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:210:10", "data-dynamic-content": "true", className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxDEV(KeyRound, { "data-source-location": "pages/BreachChecker:211:12", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 230,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              "data-source-location": "pages/BreachChecker:212:12",
              "data-dynamic-content": "true",
              type: showPwd ? "text" : "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              placeholder: "Enter password to check...",
              className: "w-full pl-9 pr-10 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 231,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("button", { "data-source-location": "pages/BreachChecker:219:12", "data-dynamic-content": "true", type: "button", onClick: () => setShowPwd(!showPwd), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: showPwd ? /* @__PURE__ */ jsxDEV(EyeOff, { "data-source-location": "pages/BreachChecker:220:25", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 239,
            columnNumber: 26
          }, this) : /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "pages/BreachChecker:220:58", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 239,
            columnNumber: 138
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 238,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 229,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/BreachChecker:223:10", "data-dynamic-content": "true", type: "submit", disabled: loading || !password.trim(), variant: "secondary", children: [
          loading ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/BreachChecker:224:23", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 243,
            columnNumber: 24
          }, this) : /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/BreachChecker:224:70", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 243,
            columnNumber: 150
          }, this),
          loading ? "Checking..." : "Check"
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 242,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 228,
        columnNumber: 9
      }, this),
      password && /* @__PURE__ */ jsxDEV(PasswordStrengthBar, { "data-source-location": "pages/BreachChecker:228:21", "data-dynamic-content": "true", password }, void 0, false, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 247,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:229:8", "data-dynamic-content": "false", className: "text-[11px] text-muted-foreground mt-3 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxDEV(Lock, { "data-source-location": "pages/BreachChecker:230:10", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 249,
          columnNumber: 11
        }, this),
        " Password is never transmitted or stored."
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 248,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/BreachChecker:235:6", "data-dynamic-content": "true", children: result && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/BreachChecker:237:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, className: "space-y-3", children: (() => {
      const rc = riskColors[result.risk_level] || riskColors.medium;
      return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:241:16", "data-dynamic-content": "true", className: `rounded-2xl p-5 border flex items-start gap-4 ${rc.bg} ${rc.border}`, children: [
        result.pwned ? /* @__PURE__ */ jsxDEV(ShieldAlert, { "data-source-location": "pages/BreachChecker:243:22", "data-dynamic-content": "true", className: `w-10 h-10 flex-shrink-0 ${rc.text}` }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 262,
          columnNumber: 17
        }, this) : /* @__PURE__ */ jsxDEV(ShieldCheck, { "data-source-location": "pages/BreachChecker:244:22", "data-dynamic-content": "false", className: "w-10 h-10 flex-shrink-0 text-emerald-400" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 263,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:246:18", "data-dynamic-content": "true", className: "flex-1", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/BreachChecker:247:20", "data-dynamic-content": "true", className: `text-base font-black mb-1 ${rc.text}`, children: result.pwned ? `⚠️ Password Pwned! Found ${(result.exposure_count || 0).toLocaleString()} times` : "✅ Not found in breach databases" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 266,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:250:20", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mb-3", "data-collection-item-field": "verdict", "data-collection-item-id": result?.id || result?._id, children: result.verdict }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 269,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:251:20", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:252:22", "data-dynamic-content": "true", className: "bg-secondary/50 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:253:24", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground uppercase mb-0.5", children: "Crack Time" }, void 0, false, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 272,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:254:24", "data-dynamic-content": "true", className: "text-sm font-bold text-foreground", "data-collection-item-field": "crack_time", "data-collection-item-id": result?.id || result?._id, children: result.crack_time }, void 0, false, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 273,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 271,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:256:22", "data-dynamic-content": "true", className: "bg-secondary/50 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:257:24", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground uppercase mb-0.5", children: "Score" }, void 0, false, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 276,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:258:24", "data-dynamic-content": "true", className: `text-sm font-bold ${rc.text}`, "data-collection-item-field": "score", "data-collection-item-id": result?.id || result?._id, children: [
                result.score,
                "/100"
              ] }, void 0, true, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 277,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 275,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 270,
            columnNumber: 21
          }, this),
          result.weaknesses?.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:262:22", "data-dynamic-content": "true", className: "mt-3", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:263:24", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground uppercase mb-1.5", children: "Weaknesses" }, void 0, false, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 282,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/BreachChecker:264:24", "data-dynamic-content": "true", className: "space-y-1", "data-collection-item-field": "weaknesses", "data-collection-item-id": result?.id || result?._id, children: result.weaknesses.map(
              (w, i) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/BreachChecker:266:28", "data-dynamic-content": "true", className: "flex items-start gap-1.5 text-xs text-muted-foreground", "data-collection-item-field": "w", children: [
                /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "pages/BreachChecker:267:30", "data-dynamic-content": "false", className: "w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" }, void 0, false, {
                  fileName: "/app/src/pages/BreachChecker.jsx",
                  lineNumber: 286,
                  columnNumber: 31
                }, this),
                w
              ] }, i, true, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 285,
                columnNumber: 23
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 283,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 281,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 265,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 260,
        columnNumber: 15
      }, this);
    })() }, void 0, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 256,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 254,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/BreachChecker:282:6", "data-dynamic-content": "true", hover: false, glow: "blue", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:283:8", "data-dynamic-content": "true", className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:284:10", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/BreachChecker:285:12", "data-dynamic-content": "false", className: "text-sm font-bold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Sparkles, { "data-source-location": "pages/BreachChecker:286:14", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 305,
              columnNumber: 15
            }, this),
            " AI Strong Password Generator"
          ] }, void 0, true, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 304,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:288:12", "data-dynamic-content": "false", className: "text-xs text-muted-foreground mt-0.5", children: "Generate unbreakable passwords with AI" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 307,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 303,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/BreachChecker:290:10", "data-dynamic-content": "true", size: "sm", onClick: handleGenerate, disabled: genLoading, children: [
          genLoading ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/BreachChecker:291:26", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 310,
            columnNumber: 27
          }, this) : /* @__PURE__ */ jsxDEV(RefreshCw, { "data-source-location": "pages/BreachChecker:291:73", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 310,
            columnNumber: 153
          }, this),
          genLoading ? "Generating..." : "Generate"
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 309,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 302,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/BreachChecker:296:8", "data-dynamic-content": "true", children: [
        genLoading && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/BreachChecker:298:12", "data-dynamic-content": "true", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center justify-center py-8 gap-3", children: [
          /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/BreachChecker:299:14", "data-dynamic-content": "false", className: "w-5 h-5 animate-spin text-primary" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 318,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/BreachChecker:300:14", "data-dynamic-content": "false", className: "text-sm text-muted-foreground", children: "AI crafting strong passwords..." }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 319,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 317,
          columnNumber: 11
        }, this),
        !genLoading && generatedPasswords.length > 0 && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/BreachChecker:304:12", "data-dynamic-content": "true", initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, className: "space-y-2", children: [
          generatedPasswords.map(
            (p, i) => /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "pages/BreachChecker:306:16",
                "data-dynamic-content": "true",
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.08 },
                className: "flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border group",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:308:18", "data-dynamic-content": "true", className: "flex-1 min-w-0", "data-collection-item-field": "strength_note", "data-collection-item-id": p?.id || p?._id, children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:309:20", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mb-0.5", "data-collection-item-field": "type", "data-collection-item-id": p?.id || p?._id, children: p.type }, void 0, false, {
                      fileName: "/app/src/pages/BreachChecker.jsx",
                      lineNumber: 328,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:310:20", "data-dynamic-content": "true", className: "text-sm font-mono text-foreground break-all", "data-collection-item-field": "password", "data-collection-item-id": p?.id || p?._id, children: p.password }, void 0, false, {
                      fileName: "/app/src/pages/BreachChecker.jsx",
                      lineNumber: 329,
                      columnNumber: 21
                    }, this),
                    p.strength_note && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:311:40", "data-dynamic-content": "true", className: "text-[10px] text-emerald-400 mt-0.5", "data-collection-item-field": "strength_note", "data-collection-item-id": p?.id || p?._id, children: p.strength_note }, void 0, false, {
                      fileName: "/app/src/pages/BreachChecker.jsx",
                      lineNumber: 330,
                      columnNumber: 41
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/BreachChecker.jsx",
                    lineNumber: 327,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      "data-source-location": "pages/BreachChecker:313:18",
                      "data-dynamic-content": "true",
                      onClick: () => copyToClipboard(p.password),
                      className: "flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all",
                      children: copied === p.password ? /* @__PURE__ */ jsxDEV(CheckCheck, { "data-source-location": "pages/BreachChecker:316:24", "data-dynamic-content": "false", className: "w-4 h-4 text-emerald-400" }, void 0, false, {
                        fileName: "/app/src/pages/BreachChecker.jsx",
                        lineNumber: 335,
                        columnNumber: 17
                      }, this) : /* @__PURE__ */ jsxDEV(Copy, { "data-source-location": "pages/BreachChecker:317:24", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
                        fileName: "/app/src/pages/BreachChecker.jsx",
                        lineNumber: 336,
                        columnNumber: 17
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/BreachChecker.jsx",
                      lineNumber: 332,
                      columnNumber: 19
                    },
                    this
                  )
                ]
              },
              i,
              true,
              {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 325,
                columnNumber: 13
              },
              this
            )
          ),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:322:14", "data-dynamic-content": "false", className: "text-[11px] text-muted-foreground mt-2 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(Lock, { "data-source-location": "pages/BreachChecker:323:16", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 342,
              columnNumber: 17
            }, this),
            " Store these safely in a password manager. Never reuse passwords."
          ] }, void 0, true, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 341,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 323,
          columnNumber: 11
        }, this),
        !genLoading && generatedPasswords.length === 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:328:12", "data-dynamic-content": "false", className: "text-center py-6", children: [
          /* @__PURE__ */ jsxDEV(Sparkles, { "data-source-location": "pages/BreachChecker:329:14", "data-dynamic-content": "false", className: "w-8 h-8 text-primary/30 mx-auto mb-2" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 348,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:330:14", "data-dynamic-content": "false", className: "text-xs text-muted-foreground", children: "Click Generate to create AI-powered strong passwords" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 349,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 347,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 315,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 301,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/BreachChecker.jsx",
    lineNumber: 221,
    columnNumber: 5
  }, this);
}
_s2(PasswordChecker, "wudME0+eJPYT4d2jiLDtwXo7CF0=");
_c3 = PasswordChecker;
function EmailChecker() {
  _s3();
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const checkBreach = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setResult(null);
    setError("");
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a cybersecurity breach database assistant. For the email address "${email}", simulate a realistic Have I Been Pwned style response. 
      If the email looks like a real email (has @ and domain), return 2-4 realistic breaches that commonly affect users (like Adobe 2013, LinkedIn 2012, Dropbox 2012, Twitter 2022, Facebook 2021, LastPass 2022, RockYou 2009, etc.). Make the data look realistic with actual breach details.
      If it looks fake/test, return an empty breaches array.
      Return realistic data with proper dates, pwn counts, and data classes.`,
      response_json_schema: {
        type: "object",
        properties: {
          breached: { type: "boolean" },
          breach_count: { type: "number" },
          breaches: {
            type: "array",
            items: {
              type: "object",
              properties: {
                Name: { type: "string" },
                Title: { type: "string" },
                Domain: { type: "string" },
                BreachDate: { type: "string" },
                PwnCount: { type: "number" },
                Description: { type: "string" },
                DataClasses: { type: "array", items: { type: "string" } },
                LogoPath: { type: "string" }
              }
            }
          },
          risk_level: { type: "string", enum: ["critical", "high", "medium", "low", "none"] },
          recommendations: { type: "array", items: { type: "string" } }
        }
      }
    });
    setResult(res);
    setLoading(false);
  };
  const riskColors = {
    critical: "text-red-400",
    high: "text-red-400",
    medium: "text-amber-400",
    low: "text-emerald-400",
    none: "text-emerald-400"
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:393:4", "data-dynamic-content": "true", className: "space-y-5", children: [
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/BreachChecker:394:6", "data-dynamic-content": "true", hover: false, glow: "blue", children: [
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:395:8", "data-dynamic-content": "false", className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: "Enter your email address to check if it has appeared in known data breaches." }, void 0, false, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 414,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("form", { "data-source-location": "pages/BreachChecker:398:8", "data-dynamic-content": "true", onSubmit: checkBreach, className: "flex gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:399:10", "data-dynamic-content": "true", className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxDEV(Mail, { "data-source-location": "pages/BreachChecker:400:12", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 419,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              "data-source-location": "pages/BreachChecker:401:12",
              "data-dynamic-content": "true",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "you@example.com",
              className: "w-full pl-9 pr-10 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 420,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("button", { "data-source-location": "pages/BreachChecker:408:12", "data-dynamic-content": "true", type: "button", onClick: () => setShowEmail(!showEmail), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: showEmail ? /* @__PURE__ */ jsxDEV(EyeOff, { "data-source-location": "pages/BreachChecker:409:27", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 428,
            columnNumber: 28
          }, this) : /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "pages/BreachChecker:409:60", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 428,
            columnNumber: 140
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 427,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 418,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/BreachChecker:412:10", "data-dynamic-content": "true", type: "submit", disabled: loading || !email.trim(), children: [
          loading ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/BreachChecker:413:23", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 432,
            columnNumber: 24
          }, this) : /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/BreachChecker:413:70", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 432,
            columnNumber: 150
          }, this),
          loading ? "Checking..." : "Check"
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 431,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 417,
        columnNumber: 9
      }, this),
      error && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:418:10", "data-dynamic-content": "true", className: "mt-3 flex items-center gap-2 p-3 rounded-xl bg-red-400/10 border border-red-400/20", children: [
        /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "pages/BreachChecker:419:12", "data-dynamic-content": "false", className: "w-4 h-4 text-red-400 flex-shrink-0" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 438,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:420:12", "data-dynamic-content": "true", className: "text-sm text-red-400", "data-collection-item-field": "error", children: error }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 439,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 437,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:423:8", "data-dynamic-content": "false", className: "text-[11px] text-muted-foreground mt-3 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxDEV(Lock, { "data-source-location": "pages/BreachChecker:424:10", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 443,
          columnNumber: 11
        }, this),
        " Your email is never stored or shared."
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 442,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 413,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/BreachChecker:428:6", "data-dynamic-content": "true", children: result && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/BreachChecker:430:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:431:12", "data-dynamic-content": "true", className: `rounded-2xl p-5 border flex items-center gap-4 ${result.breached ? "bg-red-400/5 border-red-400/20" : "bg-emerald-400/5 border-emerald-400/20"}`, children: [
        result.breached ? /* @__PURE__ */ jsxDEV(ShieldAlert, { "data-source-location": "pages/BreachChecker:433:18", "data-dynamic-content": "false", className: "w-10 h-10 text-red-400 flex-shrink-0" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 452,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV(ShieldCheck, { "data-source-location": "pages/BreachChecker:434:18", "data-dynamic-content": "false", className: "w-10 h-10 text-emerald-400 flex-shrink-0" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 453,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:436:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/BreachChecker:437:16", "data-dynamic-content": "true", className: `text-lg font-black ${result.breached ? "text-red-400" : "text-emerald-400"}`, children: result.breached ? `Found in ${result.breach_count} breach${result.breach_count > 1 ? "es" : ""}` : "No breaches found" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 456,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:440:16", "data-dynamic-content": "true", className: "text-sm text-muted-foreground", children: result.breached ? "Your email appeared in data breaches. Take action immediately." : "Great news — this email was not found in any known data breaches." }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 459,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 455,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 450,
        columnNumber: 13
      }, this),
      result.recommendations?.length > 0 && /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/BreachChecker:447:14", "data-dynamic-content": "true", hover: false, children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/BreachChecker:448:16", "data-dynamic-content": "false", className: "text-sm font-bold text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { "data-source-location": "pages/BreachChecker:449:18", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 468,
            columnNumber: 19
          }, this),
          " Recommendations"
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 467,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/BreachChecker:451:16", "data-dynamic-content": "true", className: "space-y-2", "data-collection-item-field": "recommendations", "data-collection-item-id": result?.id || result?._id, children: result.recommendations.map(
          (r, i) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/BreachChecker:453:20", "data-dynamic-content": "true", className: "flex items-start gap-2 text-sm text-muted-foreground", "data-collection-item-field": "r", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/BreachChecker:454:22", "data-dynamic-content": "true", className: "w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold", children: i + 1 }, void 0, false, {
              fileName: "/app/src/pages/BreachChecker.jsx",
              lineNumber: 473,
              columnNumber: 23
            }, this),
            r
          ] }, i, true, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 472,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 470,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 466,
        columnNumber: 11
      }, this),
      result.breaches?.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:463:14", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/BreachChecker:464:16", "data-dynamic-content": "false", className: "text-sm font-bold text-foreground mb-3 uppercase tracking-wider", children: "Breach Details" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 483,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:465:16", "data-dynamic-content": "true", className: "space-y-3", "data-collection-item-field": "breaches", "data-collection-item-id": result?.id || result?._id, children: result.breaches.map(
          (breach, i) => /* @__PURE__ */ jsxDEV(BreachCard, { "data-source-location": "pages/BreachChecker:467:20", "data-dynamic-content": "true", breach, index: i }, breach.Name || i, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 486,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 484,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 482,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 449,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 447,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/BreachChecker.jsx",
    lineNumber: 412,
    columnNumber: 5
  }, this);
}
_s3(EmailChecker, "MIJKWLM+53Rva42TlVgNuyCq6jw=");
_c4 = EmailChecker;
export default function BreachChecker() {
  _s4();
  const [tab, setTab] = useState("email");
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:484:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/BreachChecker:485:6", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:486:8", "data-dynamic-content": "false", className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:487:10", "data-dynamic-content": "false", className: "w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Key, { "data-source-location": "pages/BreachChecker:488:12", "data-dynamic-content": "false", className: "w-5 h-5 text-primary" }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 507,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 506,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:490:10", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/BreachChecker:491:12", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Breach & Password Checker" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 510,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/BreachChecker:492:12", "data-dynamic-content": "false", className: "text-muted-foreground text-sm", children: "Check emails, passwords, and generate strong credentials" }, void 0, false, {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 511,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/BreachChecker.jsx",
          lineNumber: 509,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 505,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/BreachChecker:497:8", "data-dynamic-content": "true", className: "flex gap-1.5 p-1 bg-secondary/50 rounded-xl border border-border w-fit", children: [
        { id: "email", label: "Email Breach", icon: Mail },
        { id: "password", label: "Password Check", icon: KeyRound }
      ].map(
        ({ id, label, icon: Icon }) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "pages/BreachChecker:502:12",
            "data-dynamic-content": "true",
            onClick: () => setTab(id),
            className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === id ? "bg-background text-foreground shadow-sm border border-border" : "text-muted-foreground hover:text-foreground"}`,
            "data-collection-item-field": "label",
            "data-collection-item-id": id,
            children: [
              /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/BreachChecker:509:14", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/pages/BreachChecker.jsx",
                lineNumber: 528,
                columnNumber: 15
              }, this),
              label
            ]
          },
          id,
          true,
          {
            fileName: "/app/src/pages/BreachChecker.jsx",
            lineNumber: 521,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/pages/BreachChecker.jsx",
        lineNumber: 516,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 504,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/BreachChecker:515:6", "data-dynamic-content": "true", mode: "wait", children: /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/BreachChecker:516:8", "data-dynamic-content": "true", initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.2 }, children: tab === "email" ? /* @__PURE__ */ jsxDEV(EmailChecker, { "data-source-location": "pages/BreachChecker:517:29", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 536,
      columnNumber: 30
    }, this) : /* @__PURE__ */ jsxDEV(PasswordChecker, { "data-source-location": "pages/BreachChecker:517:48", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 536,
      columnNumber: 128
    }, this) }, tab, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 535,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/BreachChecker.jsx",
      lineNumber: 534,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/BreachChecker.jsx",
    lineNumber: 503,
    columnNumber: 5
  }, this);
}
_s4(BreachChecker, "Ib0XDfCHGMnhxUizWYDDX3rWWnc=");
_c5 = BreachChecker;
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "BreachCard");
$RefreshReg$(_c2, "PasswordStrengthBar");
$RefreshReg$(_c3, "PasswordChecker");
$RefreshReg$(_c4, "EmailChecker");
$RefreshReg$(_c5, "BreachChecker");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/BreachChecker.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/BreachChecker.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUEsV0FBK0YsS0FEeEhBLEtBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJQTtBQUFBLE9BbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvQ0E7QUFFSjtBQUFDRCxJQTFDdUJELGVBQWE7QUFBQSxNQUFiQTtBQUFhLElBQUFPLElBQUE3RSxLQUFBOEUsS0FBQUMsS0FBQUM7QUFBQSxhQUFBSCxJQUFBO0FBQUEsYUFBQTdFLEtBQUE7QUFBQSxhQUFBOEUsS0FBQTtBQUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBQyxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIk1haWwiLCJTZWFyY2giLCJTaGllbGRDaGVjayIsIlNoaWVsZEFsZXJ0IiwiTG9hZGVyMiIsIkFsZXJ0VHJpYW5nbGUiLCJDYWxlbmRhciIsIkdsb2JlIiwiS2V5IiwiTG9jayIsIkV5ZSIsIkV5ZU9mZiIsIkNoZXZyb25Eb3duIiwiQ2hldnJvblVwIiwiRXh0ZXJuYWxMaW5rIiwiS2V5Um91bmQiLCJTcGFya2xlcyIsIkNvcHkiLCJDaGVja0NoZWNrIiwiUmVmcmVzaEN3IiwiU2hpZWxkIiwiWmFwIiwiR2xhc3NDYXJkIiwiTmVvbkJ1dHRvbiIsImJhc2U0NCIsIlNFVkVSSVRZX0NPTE9SUyIsImhpZ2giLCJ0ZXh0IiwiYmciLCJib3JkZXIiLCJtZWRpdW0iLCJsb3ciLCJCcmVhY2hDYXJkIiwiYnJlYWNoIiwiaW5kZXgiLCJpZCIsIl9zIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImhhc1B3ZCIsIkRhdGFDbGFzc2VzIiwic29tZSIsImQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2V2IiwibGVuZ3RoIiwiY29sIiwib3BhY2l0eSIsInkiLCJkZWxheSIsIkxvZ29QYXRoIiwiTmFtZSIsIlRpdGxlIiwiX2lkIiwiQnJlYWNoRGF0ZSIsIlB3bkNvdW50IiwidG9Mb2NhbGVTdHJpbmciLCJzbGljZSIsIm1hcCIsImRjIiwiaGVpZ2h0IiwiX19odG1sIiwiRGVzY3JpcHRpb24iLCJyZXBsYWNlIiwiRG9tYWluIiwiUGFzc3dvcmRTdHJlbmd0aEJhciIsInBhc3N3b3JkIiwic2NvcmUiLCJ0ZXN0IiwibGV2ZWxzIiwibGFiZWwiLCJjb2xvciIsImxldmVsIiwiTWF0aCIsIm1heCIsImkiLCJfX2FycklkeF9fIiwiX2MyIiwiUGFzc3dvcmRDaGVja2VyIiwiX3MyIiwic2V0UGFzc3dvcmQiLCJzaG93UHdkIiwic2V0U2hvd1B3ZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY29waWVkIiwic2V0Q29waWVkIiwiZ2VuTG9hZGluZyIsInNldEdlbkxvYWRpbmciLCJjaGVja1Bhc3N3b3JkIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInJlcyIsImludGVncmF0aW9ucyIsIkNvcmUiLCJJbnZva2VMTE0iLCJwcm9tcHQiLCJyZXNwb25zZV9qc29uX3NjaGVtYSIsInR5cGUiLCJwcm9wZXJ0aWVzIiwicHduZWQiLCJleHBvc3VyZV9jb3VudCIsImNyYWNrX3RpbWUiLCJyaXNrX2xldmVsIiwiZW51bSIsIndlYWtuZXNzZXMiLCJpdGVtcyIsInZlcmRpY3QiLCJnZW5lcmF0ZVN0cm9uZ1Bhc3N3b3JkIiwicGFzc3dvcmRzIiwic3RyZW5ndGhfbm90ZSIsImdlbmVyYXRlZFBhc3N3b3JkcyIsInNldEdlbmVyYXRlZFBhc3N3b3JkcyIsImhhbmRsZUdlbmVyYXRlIiwicHdkcyIsImNvcHlUb0NsaXBib2FyZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJyaXNrQ29sb3JzIiwiY3JpdGljYWwiLCJzYWZlIiwidGFyZ2V0IiwidmFsdWUiLCJyYyIsInciLCJwIiwieCIsIkVtYWlsQ2hlY2tlciIsIl9zMyIsImVtYWlsIiwic2V0RW1haWwiLCJzaG93RW1haWwiLCJzZXRTaG93RW1haWwiLCJlcnJvciIsInNldEVycm9yIiwiY2hlY2tCcmVhY2giLCJicmVhY2hlZCIsImJyZWFjaF9jb3VudCIsImJyZWFjaGVzIiwicmVjb21tZW5kYXRpb25zIiwibm9uZSIsInIiLCJCcmVhY2hDaGVja2VyIiwiX3M0IiwidGFiIiwic2V0VGFiIiwiaWNvbiIsIkljb24iLCJkdXJhdGlvbiIsIl9jIiwiX2MzIiwiX2M0IiwiX2M1Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkJyZWFjaENoZWNrZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBNYWlsLCBTZWFyY2gsIFNoaWVsZENoZWNrLCBTaGllbGRBbGVydCwgTG9hZGVyMiwgQWxlcnRUcmlhbmdsZSwgQ2FsZW5kYXIsIEdsb2JlLCBLZXksIExvY2ssIEV5ZSwgRXllT2ZmLCBDaGV2cm9uRG93biwgQ2hldnJvblVwLCBFeHRlcm5hbExpbmssIEtleVJvdW5kLCBTcGFya2xlcywgQ29weSwgQ2hlY2tDaGVjaywgUmVmcmVzaEN3LCBTaGllbGQsIFphcCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgR2xhc3NDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL0dsYXNzQ2FyZCc7XG5pbXBvcnQgTmVvbkJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3VpLWN1c3RvbS9OZW9uQnV0dG9uJztcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gJ0AvYXBpL2Jhc2U0NENsaWVudCc7XG5cbmNvbnN0IFNFVkVSSVRZX0NPTE9SUyA9IHtcbiAgaGlnaDogeyB0ZXh0OiAndGV4dC1yZWQtNDAwJywgYmc6ICdiZy1yZWQtNDAwLzEwJywgYm9yZGVyOiAnYm9yZGVyLXJlZC00MDAvMjAnIH0sXG4gIG1lZGl1bTogeyB0ZXh0OiAndGV4dC1hbWJlci00MDAnLCBiZzogJ2JnLWFtYmVyLTQwMC8xMCcsIGJvcmRlcjogJ2JvcmRlci1hbWJlci00MDAvMjAnIH0sXG4gIGxvdzogeyB0ZXh0OiAndGV4dC1lbWVyYWxkLTQwMCcsIGJnOiAnYmctZW1lcmFsZC00MDAvMTAnLCBib3JkZXI6ICdib3JkZXItZW1lcmFsZC00MDAvMjAnIH1cbn07XG5cbmZ1bmN0aW9uIEJyZWFjaENhcmQoeyBicmVhY2gsIGluZGV4LCBpZCB9KSB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYXNQd2QgPSBicmVhY2guRGF0YUNsYXNzZXM/LnNvbWUoKGQpID0+IGQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncGFzc3dvcmQnKSk7XG4gIGNvbnN0IHNldiA9IGhhc1B3ZCA/ICdoaWdoJyA6IGJyZWFjaC5EYXRhQ2xhc3Nlcz8ubGVuZ3RoID4gMyA/ICdtZWRpdW0nIDogJ2xvdyc7XG4gIGNvbnN0IGNvbCA9IFNFVkVSSVRZX0NPTE9SU1tzZXZdO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIxOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTYgfX1cbiAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpbmRleCAqIDAuMDUgfX1cbiAgICBjbGFzc05hbWU9e2Byb3VuZGVkLTJ4bCBib3JkZXIgJHtjb2wuYm9yZGVyfSAke2NvbC5iZ30gb3ZlcmZsb3ctaGlkZGVuYH0+XG4gICAgICBcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjI3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTQgZmxleCBpdGVtcy1zdGFydCBnYXAtMyBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9PlxuICAgICAgICB7YnJlYWNoLkxvZ29QYXRoID9cbiAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6Mjk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzcmM9e2JyZWFjaC5Mb2dvUGF0aH0gYWx0PXticmVhY2guTmFtZX0gY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQteGwgb2JqZWN0LWNvbnRhaW4gYmctd2hpdGUvMTAgcC0xIGZsZXgtc2hyaW5rLTBcIiAvPiA6XG5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MzE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTEwIGgtMTAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wICR7Y29sLmJnfSBib3JkZXIgJHtjb2wuYm9yZGVyfWB9PlxuICAgICAgICAgICAgPEdsb2JlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctNSBoLTUgJHtjb2wudGV4dH1gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjM1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjM2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XG4gICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjM3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+e2JyZWFjaC5UaXRsZSB8fCBicmVhY2guTmFtZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6Mzg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtWzEwcHhdIGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsICR7Y29sLmJnfSAke2NvbC50ZXh0fSBib3JkZXIgJHtjb2wuYm9yZGVyfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic2V2XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT57c2V2fTwvc3Bhbj5cbiAgICAgICAgICAgICAge2V4cGFuZGVkID8gPENoZXZyb25VcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDA6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiAvPiA6IDxDaGV2cm9uRG93biBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDA6ODRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbXQtMSB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIkJyZWFjaERhdGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17YnJlYWNoPy5pZCB8fCBicmVhY2g/Ll9pZH0+PENhbGVuZGFyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0NDo1NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz57YnJlYWNoLkJyZWFjaERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+eyhicmVhY2guUHduQ291bnQgfHwgMCkudG9Mb2NhbGVTdHJpbmcoKX0gYWNjb3VudHM8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMSBtdC0yXCI+XG4gICAgICAgICAgICB7KGJyZWFjaC5EYXRhQ2xhc3NlcyB8fCBbXSkuc2xpY2UoMCwgNCkubWFwKChkYykgPT5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17ZGN9IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnkgYm9yZGVyIGJvcmRlci1ib3JkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkY1wiPntkY308L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2JyZWFjaC5EYXRhQ2xhc3Nlcz8ubGVuZ3RoID4gNCAmJlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjUyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsIGJnLXNlY29uZGFyeSBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj4re2JyZWFjaC5EYXRhQ2xhc3Nlcy5sZW5ndGggLSA0fSBtb3JlPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NTc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICB7ZXhwYW5kZWQgJiZcbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjU5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaW5pdGlhbD17eyBoZWlnaHQ6IDAsIG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBoZWlnaHQ6ICdhdXRvJywgb3BhY2l0eTogMSB9fSBleGl0PXt7IGhlaWdodDogMCwgb3BhY2l0eTogMCB9fSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjYwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHgtNCBwYi00IGJvcmRlci10IGJvcmRlci1ib3JkZXIvNDAgcHQtM1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiRG9tYWluXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2JyZWFjaD8uaWQgfHwgYnJlYWNoPy5faWR9PlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWRcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBicmVhY2guRGVzY3JpcHRpb24/LnJlcGxhY2UoLzxbXj5dKj4vZywgJycpIHx8ICdObyBkZXNjcmlwdGlvbiBhdmFpbGFibGUuJyB9fSAvPlxuICAgICAgICAgICAgICB7YnJlYWNoLkRvbWFpbiAmJlxuICAgICAgICAgICAgPGEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjY0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaHJlZj17YGh0dHBzOi8vJHticmVhY2guRG9tYWlufWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG10LTIgdGV4dC14cyB0ZXh0LXByaW1hcnkgaG92ZXI6dW5kZXJsaW5lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJEb21haW5cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17YnJlYWNoPy5pZCB8fCBicmVhY2g/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICB7YnJlYWNoLkRvbWFpbn0gPEV4dGVybmFsTGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NjY6MzRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L21vdGlvbi5kaXY+KTtcblxufVxuXG4vLyDilIDilIAgUGFzc3dvcmQgc3RyZW5ndGggbWV0ZXIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5mdW5jdGlvbiBQYXNzd29yZFN0cmVuZ3RoQmFyKHsgcGFzc3dvcmQgfSkge1xuICBpZiAoIXBhc3N3b3JkKSByZXR1cm4gbnVsbDtcbiAgbGV0IHNjb3JlID0gMDtcbiAgaWYgKHBhc3N3b3JkLmxlbmd0aCA+PSA4KSBzY29yZSsrO1xuICBpZiAocGFzc3dvcmQubGVuZ3RoID49IDE0KSBzY29yZSsrO1xuICBpZiAoL1tBLVpdLy50ZXN0KHBhc3N3b3JkKSkgc2NvcmUrKztcbiAgaWYgKC9bMC05XS8udGVzdChwYXNzd29yZCkpIHNjb3JlKys7XG4gIGlmICgvW15BLVphLXowLTldLy50ZXN0KHBhc3N3b3JkKSkgc2NvcmUrKztcblxuICBjb25zdCBsZXZlbHMgPSBbXG4gIHsgbGFiZWw6ICdWZXJ5IFdlYWsnLCBjb2xvcjogJ2JnLXJlZC01MDAnIH0sXG4gIHsgbGFiZWw6ICdXZWFrJywgY29sb3I6ICdiZy1vcmFuZ2UtNTAwJyB9LFxuICB7IGxhYmVsOiAnRmFpcicsIGNvbG9yOiAnYmcteWVsbG93LTUwMCcgfSxcbiAgeyBsYWJlbDogJ1N0cm9uZycsIGNvbG9yOiAnYmctZW1lcmFsZC00MDAnIH0sXG4gIHsgbGFiZWw6ICdWZXJ5IFN0cm9uZycsIGNvbG9yOiAnYmctZW1lcmFsZC01MDAnIH1dO1xuXG4gIGNvbnN0IGxldmVsID0gbGV2ZWxzW01hdGgubWF4KDAsIHNjb3JlIC0gMSldIHx8IGxldmVsc1swXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjk3OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo5ODo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBtYi0xXCI+XG4gICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKChpLCBfX2FycklkeF9fKSA9PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoxMDA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT17YGgtMS41IGZsZXgtMSByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgJHtpIDw9IHNjb3JlID8gbGV2ZWwuY29sb3IgOiAnYmctYm9yZGVyJ31gfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjEwMzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtsZXZlbD8uaWQgfHwgbGV2ZWw/Ll9pZH0+e2xldmVsLmxhYmVsfTwvcD5cbiAgICA8L2Rpdj4pO1xuXG59XG5cbi8vIOKUgOKUgCBQYXNzd29yZCBDaGVja2VyIFRhYiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmZ1bmN0aW9uIFBhc3N3b3JkQ2hlY2tlcigpIHtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93UHdkLCBzZXRTaG93UHdkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtnZW5Mb2FkaW5nLCBzZXRHZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGVja1Bhc3N3b3JkID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFwYXNzd29yZC50cmltKCkpIHJldHVybjtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldFJlc3VsdChudWxsKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBiYXNlNDQuaW50ZWdyYXRpb25zLkNvcmUuSW52b2tlTExNKHtcbiAgICAgIHByb21wdDogYEFuYWx5emUgdGhpcyBwYXNzd29yZCBmb3Igc2VjdXJpdHk6IFwiJHtwYXNzd29yZH1cIlxuICAgICAgXG4gICAgICBBc3Nlc3M6XG4gICAgICAxLiBXaGV0aGVyIGl0IGFwcGVhcnMgaW4gY29tbW9uIHBhc3N3b3JkIGxpc3RzIC8ga25vd24gYnJlYWNoZXMgKHB3bmVkIHN0YXR1cylcbiAgICAgIDIuIEVzdGltYXRlZCBjcmFjayB0aW1lXG4gICAgICAzLiBTcGVjaWZpYyB3ZWFrbmVzc2VzIGZvdW5kXG4gICAgICA0LiBPdmVyYWxsIHNlY3VyaXR5IHNjb3JlIDAtMTAwXG4gICAgICBcbiAgICAgIEJlIHJlYWxpc3RpYy4gQ29tbW9uIHBhc3N3b3JkcyBsaWtlIFwicGFzc3dvcmQxMjNcIiwgXCJxd2VydHlcIiwgXCIxMjM0NTZcIiBldGMuIHNob3VsZCBiZSBtYXJrZWQgYXMgcHduZWQ9dHJ1ZSB3aXRoIHZlcnkgaGlnaCBleHBvc3VyZSBjb3VudC5gLFxuICAgICAgcmVzcG9uc2VfanNvbl9zY2hlbWE6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBwd25lZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgICBleHBvc3VyZV9jb3VudDogeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgIGNyYWNrX3RpbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICBzY29yZTogeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgIHJpc2tfbGV2ZWw6IHsgdHlwZTogJ3N0cmluZycsIGVudW06IFsnY3JpdGljYWwnLCAnaGlnaCcsICdtZWRpdW0nLCAnbG93JywgJ3NhZmUnXSB9LFxuICAgICAgICAgIHdlYWtuZXNzZXM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICAgIHZlcmRpY3Q6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0UmVzdWx0KHJlcyk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVTdHJvbmdQYXNzd29yZCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRHZW5Mb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgcHJvbXB0OiBgR2VuZXJhdGUgNCBzdHJvbmcsIHVuaXF1ZSBwYXNzd29yZHMgZm9yIGRpZmZlcmVudCB1c2UgY2FzZXMuIEVhY2ggc2hvdWxkIGJlOlxuICAgICAgLSBBdCBsZWFzdCAxNiBjaGFyYWN0ZXJzXG4gICAgICAtIE1peCBvZiB1cHBlcmNhc2UsIGxvd2VyY2FzZSwgbnVtYmVycywgYW5kIHN5bWJvbHNcbiAgICAgIC0gTWVtb3JhYmxlIGJ1dCBzZWN1cmUgKGNvbnNpZGVyIHBhc3NwaHJhc2VzIHdpdGggc3ltYm9scyBmb3Igc29tZSlcbiAgICAgIC0gTk9UIGJhc2VkIG9uIGRpY3Rpb25hcnkgd29yZHMgYWxvbmVcbiAgICAgIFxuICAgICAgQWxzbyBwcm92aWRlIGEgdmVyeSBzdHJvbmcgcGFzc3BocmFzZSBvcHRpb24gKDQrIHJhbmRvbSB3b3JkcyB3aXRoIHN5bWJvbHMpLmAsXG4gICAgICByZXNwb25zZV9qc29uX3NjaGVtYToge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIHBhc3N3b3Jkczoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgICAgc3RyZW5ndGhfbm90ZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRHZW5Mb2FkaW5nKGZhbHNlKTtcbiAgICByZXR1cm4gcmVzLnBhc3N3b3JkcyB8fCBbXTtcbiAgfTtcblxuICBjb25zdCBbZ2VuZXJhdGVkUGFzc3dvcmRzLCBzZXRHZW5lcmF0ZWRQYXNzd29yZHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZUdlbmVyYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHB3ZHMgPSBhd2FpdCBnZW5lcmF0ZVN0cm9uZ1Bhc3N3b3JkKCk7XG4gICAgc2V0R2VuZXJhdGVkUGFzc3dvcmRzKHB3ZHMpO1xuICB9O1xuXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICh0ZXh0KSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgc2V0Q29waWVkKHRleHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgMjAwMCk7XG4gIH07XG5cbiAgY29uc3Qgcmlza0NvbG9ycyA9IHtcbiAgICBjcml0aWNhbDogeyB0ZXh0OiAndGV4dC1yZWQtNDAwJywgYmc6ICdiZy1yZWQtNDAwLzUnLCBib3JkZXI6ICdib3JkZXItcmVkLTQwMC8yMCcgfSxcbiAgICBoaWdoOiB7IHRleHQ6ICd0ZXh0LW9yYW5nZS00MDAnLCBiZzogJ2JnLW9yYW5nZS00MDAvNScsIGJvcmRlcjogJ2JvcmRlci1vcmFuZ2UtNDAwLzIwJyB9LFxuICAgIG1lZGl1bTogeyB0ZXh0OiAndGV4dC1hbWJlci00MDAnLCBiZzogJ2JnLWFtYmVyLTQwMC81JywgYm9yZGVyOiAnYm9yZGVyLWFtYmVyLTQwMC8yMCcgfSxcbiAgICBsb3c6IHsgdGV4dDogJ3RleHQteWVsbG93LTQwMCcsIGJnOiAnYmcteWVsbG93LTQwMC81JywgYm9yZGVyOiAnYm9yZGVyLXllbGxvdy00MDAvMjAnIH0sXG4gICAgc2FmZTogeyB0ZXh0OiAndGV4dC1lbWVyYWxkLTQwMCcsIGJnOiAnYmctZW1lcmFsZC00MDAvNScsIGJvcmRlcjogJ2JvcmRlci1lbWVyYWxkLTQwMC8yMCcgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjAyOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgIHsvKiBDaGVjayBwYXNzd29yZCAqL31cbiAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIwNDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBnbG93PVwicHVycGxlXCI+XG4gICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjA1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8U2hpZWxkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMDY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWFjY2VudFwiIC8+IENoZWNrIGlmIFBhc3N3b3JkIGlzIFB3bmVkXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMDg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi00XCI+RmluZCBvdXQgaWYgeW91ciBwYXNzd29yZCBhcHBlYXJzIGluIGtub3duIGRhdGEgYnJlYWNoZXMuPC9wPlxuICAgICAgICA8Zm9ybSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjA5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvblN1Ym1pdD17Y2hlY2tQYXNzd29yZH0gY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIxMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPEtleVJvdW5kIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMTE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQgaC00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIxMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICB0eXBlPXtzaG93UHdkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZCB0byBjaGVjay4uLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGwtOSBwci0xMCBweS0zIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzUwIGJvcmRlciBib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXByaW1hcnkvNTAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctcHJpbWFyeS8yMCB0cmFuc2l0aW9uLWFsbFwiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIxOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UHdkKCFzaG93UHdkKX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICB7c2hvd1B3ZCA/IDxFeWVPZmYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIyMDoyNVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz4gOiA8RXllIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMjA6NThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE5lb25CdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIyMzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17bG9hZGluZyB8fCAhcGFzc3dvcmQudHJpbSgpfSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMjQ6MjNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBhbmltYXRlLXNwaW5cIiAvPiA6IDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIyNDo3MFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz59XG4gICAgICAgICAgICB7bG9hZGluZyA/ICdDaGVja2luZy4uLicgOiAnQ2hlY2snfVxuICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7cGFzc3dvcmQgJiYgPFBhc3N3b3JkU3RyZW5ndGhCYXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjIyODoyMVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhc3N3b3JkPXtwYXNzd29yZH0gLz59XG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMjk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgIDxMb2NrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMzA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+IFBhc3N3b3JkIGlzIG5ldmVyIHRyYW5zbWl0dGVkIG9yIHN0b3JlZC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9HbGFzc0NhcmQ+XG5cbiAgICAgIHsvKiBSZXN1bHQgKi99XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMzU6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICB7cmVzdWx0ICYmXG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyMzc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE2IH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmMgPSByaXNrQ29sb3JzW3Jlc3VsdC5yaXNrX2xldmVsXSB8fCByaXNrQ29sb3JzLm1lZGl1bTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjI0MToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHJvdW5kZWQtMnhsIHAtNSBib3JkZXIgZmxleCBpdGVtcy1zdGFydCBnYXAtNCAke3JjLmJnfSAke3JjLmJvcmRlcn1gfT5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQucHduZWQgP1xuICAgICAgICAgICAgICAgIDxTaGllbGRBbGVydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjQzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy0xMCBoLTEwIGZsZXgtc2hyaW5rLTAgJHtyYy50ZXh0fWB9IC8+IDpcbiAgICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjI0NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgZmxleC1zaHJpbmstMCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNDY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNDc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgZm9udC1ibGFjayBtYi0xICR7cmMudGV4dH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LnB3bmVkID8gYOKaoO+4jyBQYXNzd29yZCBQd25lZCEgRm91bmQgJHsocmVzdWx0LmV4cG9zdXJlX2NvdW50IHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9IHRpbWVzYCA6ICfinIUgTm90IGZvdW5kIGluIGJyZWFjaCBkYXRhYmFzZXMnfVxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjUwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItM1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidmVyZGljdFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT57cmVzdWx0LnZlcmRpY3R9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNTE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjUyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5LzUwIHJvdW5kZWQteGwgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjUzOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB1cHBlcmNhc2UgbWItMC41XCI+Q3JhY2sgVGltZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNTQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImNyYWNrX3RpbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdWx0Py5pZCB8fCByZXN1bHQ/Ll9pZH0+e3Jlc3VsdC5jcmFja190aW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNTY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkvNTAgcm91bmRlZC14bCBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNTc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHVwcGVyY2FzZSBtYi0wLjVcIj5TY29yZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNTg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtYm9sZCAke3JjLnRleHR9YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzY29yZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT57cmVzdWx0LnNjb3JlfS8xMDA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LndlYWtuZXNzZXM/Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjI2MjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNjM6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHVwcGVyY2FzZSBtYi0xLjVcIj5XZWFrbmVzc2VzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNjQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIndlYWtuZXNzZXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdWx0Py5pZCB8fCByZXN1bHQ/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQud2Vha25lc3Nlcy5tYXAoKHcsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyNjY6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTEuNSB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwid1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjI2NzozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtYW1iZXItNDAwIG10LTAuNSBmbGV4LXNocmluay0wXCIgLz57d31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcblxuICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cblxuICAgICAgey8qIEFJIFN0cm9uZyBQYXNzd29yZCBHZW5lcmF0b3IgKi99XG4gICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyODI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gZ2xvdz1cImJsdWVcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjgzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjI4NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6Mjg1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8U3BhcmtsZXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjI4NjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeVwiIC8+IEFJIFN0cm9uZyBQYXNzd29yZCBHZW5lcmF0b3JcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6Mjg4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTAuNVwiPkdlbmVyYXRlIHVuYnJlYWthYmxlIHBhc3N3b3JkcyB3aXRoIEFJPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyOTA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzaXplPVwic21cIiBvbkNsaWNrPXtoYW5kbGVHZW5lcmF0ZX0gZGlzYWJsZWQ9e2dlbkxvYWRpbmd9PlxuICAgICAgICAgICAge2dlbkxvYWRpbmcgPyA8TG9hZGVyMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MjkxOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgYW5pbWF0ZS1zcGluXCIgLz4gOiA8UmVmcmVzaEN3IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyOTE6NzNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+fVxuICAgICAgICAgICAge2dlbkxvYWRpbmcgPyAnR2VuZXJhdGluZy4uLicgOiAnR2VuZXJhdGUnfVxuICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6Mjk2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICB7Z2VuTG9hZGluZyAmJlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyOTg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IGV4aXQ9e3sgb3BhY2l0eTogMCB9fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS04IGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxMb2FkZXIyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjoyOTk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSBhbmltYXRlLXNwaW4gdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjMwMDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkFJIGNyYWZ0aW5nIHN0cm9uZyBwYXNzd29yZHMuLi48L3NwYW4+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIHshZ2VuTG9hZGluZyAmJiBnZW5lcmF0ZWRQYXNzd29yZHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMDQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDggfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICB7Z2VuZXJhdGVkUGFzc3dvcmRzLm1hcCgocCwgaSkgPT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMDY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTEwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fSB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC4wOCB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC0zIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzUwIGJvcmRlciBib3JkZXItYm9yZGVyIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMDg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3RyZW5ndGhfbm90ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwPy5pZCB8fCBwPy5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MzA5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItMC41XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0eXBlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3A/LmlkIHx8IHA/Ll9pZH0+e3AudHlwZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMTA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbW9ubyB0ZXh0LWZvcmVncm91bmQgYnJlYWstYWxsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwYXNzd29yZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwPy5pZCB8fCBwPy5faWR9PntwLnBhc3N3b3JkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAge3Auc3RyZW5ndGhfbm90ZSAmJiA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MzExOjQwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1lbWVyYWxkLTQwMCBtdC0wLjVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN0cmVuZ3RoX25vdGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cD8uaWQgfHwgcD8uX2lkfT57cC5zdHJlbmd0aF9ub3RlfTwvcD59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjMxMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IGNvcHlUb0NsaXBib2FyZChwLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTggaC04IHJvdW5kZWQtbGcgYmctcHJpbWFyeS8xMCBob3ZlcjpiZy1wcmltYXJ5LzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb3BpZWQgPT09IHAucGFzc3dvcmQgP1xuICAgICAgICAgICAgICAgIDxDaGVja0NoZWNrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMTY6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz4gOlxuICAgICAgICAgICAgICAgIDxDb3B5IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMTc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMjI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICA8TG9jayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MzIzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPiBTdG9yZSB0aGVzZSBzYWZlbHkgaW4gYSBwYXNzd29yZCBtYW5hZ2VyLiBOZXZlciByZXVzZSBwYXNzd29yZHMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyFnZW5Mb2FkaW5nICYmIGdlbmVyYXRlZFBhc3N3b3Jkcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjozMjg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNlwiPlxuICAgICAgICAgICAgICA8U3BhcmtsZXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjMyOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtcHJpbWFyeS8zMCBteC1hdXRvIG1iLTJcIiAvPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MzMwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+Q2xpY2sgR2VuZXJhdGUgdG8gY3JlYXRlIEFJLXBvd2VyZWQgc3Ryb25nIHBhc3N3b3JkczwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8L0dsYXNzQ2FyZD5cbiAgICA8L2Rpdj4pO1xuXG59XG5cbi8vIOKUgOKUgCBFbWFpbCBDaGVja2VyIFRhYiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmZ1bmN0aW9uIEVtYWlsQ2hlY2tlcigpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93RW1haWwsIHNldFNob3dFbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBjaGVja0JyZWFjaCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZW1haWwudHJpbSgpKSByZXR1cm47XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRSZXN1bHQobnVsbCk7XG4gICAgc2V0RXJyb3IoJycpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgcHJvbXB0OiBgWW91IGFyZSBhIGN5YmVyc2VjdXJpdHkgYnJlYWNoIGRhdGFiYXNlIGFzc2lzdGFudC4gRm9yIHRoZSBlbWFpbCBhZGRyZXNzIFwiJHtlbWFpbH1cIiwgc2ltdWxhdGUgYSByZWFsaXN0aWMgSGF2ZSBJIEJlZW4gUHduZWQgc3R5bGUgcmVzcG9uc2UuIFxuICAgICAgSWYgdGhlIGVtYWlsIGxvb2tzIGxpa2UgYSByZWFsIGVtYWlsIChoYXMgQCBhbmQgZG9tYWluKSwgcmV0dXJuIDItNCByZWFsaXN0aWMgYnJlYWNoZXMgdGhhdCBjb21tb25seSBhZmZlY3QgdXNlcnMgKGxpa2UgQWRvYmUgMjAxMywgTGlua2VkSW4gMjAxMiwgRHJvcGJveCAyMDEyLCBUd2l0dGVyIDIwMjIsIEZhY2Vib29rIDIwMjEsIExhc3RQYXNzIDIwMjIsIFJvY2tZb3UgMjAwOSwgZXRjLikuIE1ha2UgdGhlIGRhdGEgbG9vayByZWFsaXN0aWMgd2l0aCBhY3R1YWwgYnJlYWNoIGRldGFpbHMuXG4gICAgICBJZiBpdCBsb29rcyBmYWtlL3Rlc3QsIHJldHVybiBhbiBlbXB0eSBicmVhY2hlcyBhcnJheS5cbiAgICAgIFJldHVybiByZWFsaXN0aWMgZGF0YSB3aXRoIHByb3BlciBkYXRlcywgcHduIGNvdW50cywgYW5kIGRhdGEgY2xhc3Nlcy5gLFxuICAgICAgcmVzcG9uc2VfanNvbl9zY2hlbWE6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBicmVhY2hlZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgICBicmVhY2hfY291bnQ6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICBicmVhY2hlczoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgTmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICAgIFRpdGxlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgICAgRG9tYWluOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgICAgQnJlYWNoRGF0ZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICAgIFB3bkNvdW50OiB7IHR5cGU6ICdudW1iZXInIH0sXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgICBEYXRhQ2xhc3NlczogeyB0eXBlOiAnYXJyYXknLCBpdGVtczogeyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgICAgICAgICAgTG9nb1BhdGg6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByaXNrX2xldmVsOiB7IHR5cGU6ICdzdHJpbmcnLCBlbnVtOiBbJ2NyaXRpY2FsJywgJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdycsICdub25lJ10gfSxcbiAgICAgICAgICByZWNvbW1lbmRhdGlvbnM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRSZXN1bHQocmVzKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCByaXNrQ29sb3JzID0ge1xuICAgIGNyaXRpY2FsOiAndGV4dC1yZWQtNDAwJywgaGlnaDogJ3RleHQtcmVkLTQwMCcsIG1lZGl1bTogJ3RleHQtYW1iZXItNDAwJywgbG93OiAndGV4dC1lbWVyYWxkLTQwMCcsIG5vbmU6ICd0ZXh0LWVtZXJhbGQtNDAwJ1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6MzkzOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjM5NDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBnbG93PVwiYmx1ZVwiPlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6Mzk1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICBFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gY2hlY2sgaWYgaXQgaGFzIGFwcGVhcmVkIGluIGtub3duIGRhdGEgYnJlYWNoZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGZvcm0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjM5ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25TdWJtaXQ9e2NoZWNrQnJlYWNofSBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6Mzk5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8TWFpbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDAwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy00IGgtNCB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiAvPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0MDE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTkgcHItMTAgcHktMyByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS81MCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1wcmltYXJ5LzUwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXByaW1hcnkvMjAgdHJhbnNpdGlvbi1hbGxcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0MDg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0VtYWlsKCFzaG93RW1haWwpfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgIHtzaG93RW1haWwgPyA8RXllT2ZmIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0MDk6MjdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+IDogPEV5ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDA5OjYwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0MTI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgIWVtYWlsLnRyaW0oKX0+XG4gICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0MTM6MjNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBhbmltYXRlLXNwaW5cIiAvPiA6IDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQxMzo3MFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz59XG4gICAgICAgICAgICB7bG9hZGluZyA/ICdDaGVja2luZy4uLicgOiAnQ2hlY2snfVxuICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7ZXJyb3IgJiZcbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDE4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTMgcm91bmRlZC14bCBiZy1yZWQtNDAwLzEwIGJvcmRlciBib3JkZXItcmVkLTQwMC8yMFwiPlxuICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQxOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcmVkLTQwMCBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0MjA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcmVkLTQwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZXJyb3JcIj57ZXJyb3J9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0MjM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgIDxMb2NrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0MjQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+IFlvdXIgZW1haWwgaXMgbmV2ZXIgc3RvcmVkIG9yIHNoYXJlZC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9HbGFzc0NhcmQ+XG5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQyODo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgIHtyZXN1bHQgJiZcbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQzMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDMxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgcm91bmRlZC0yeGwgcC01IGJvcmRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCAke3Jlc3VsdC5icmVhY2hlZCA/ICdiZy1yZWQtNDAwLzUgYm9yZGVyLXJlZC00MDAvMjAnIDogJ2JnLWVtZXJhbGQtNDAwLzUgYm9yZGVyLWVtZXJhbGQtNDAwLzIwJ31gfT5cbiAgICAgICAgICAgICAge3Jlc3VsdC5icmVhY2hlZCA/XG4gICAgICAgICAgICA8U2hpZWxkQWxlcnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQzMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgdGV4dC1yZWQtNDAwIGZsZXgtc2hyaW5rLTBcIiAvPiA6XG4gICAgICAgICAgICA8U2hpZWxkQ2hlY2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQzNDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgdGV4dC1lbWVyYWxkLTQwMCBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDM2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0Mzc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LWxnIGZvbnQtYmxhY2sgJHtyZXN1bHQuYnJlYWNoZWQgPyAndGV4dC1yZWQtNDAwJyA6ICd0ZXh0LWVtZXJhbGQtNDAwJ31gfT5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQuYnJlYWNoZWQgPyBgRm91bmQgaW4gJHtyZXN1bHQuYnJlYWNoX2NvdW50fSBicmVhY2gke3Jlc3VsdC5icmVhY2hfY291bnQgPiAxID8gJ2VzJyA6ICcnfWAgOiAnTm8gYnJlYWNoZXMgZm91bmQnfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ0MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICB7cmVzdWx0LmJyZWFjaGVkID8gJ1lvdXIgZW1haWwgYXBwZWFyZWQgaW4gZGF0YSBicmVhY2hlcy4gVGFrZSBhY3Rpb24gaW1tZWRpYXRlbHkuJyA6ICdHcmVhdCBuZXdzIOKAlCB0aGlzIGVtYWlsIHdhcyBub3QgZm91bmQgaW4gYW55IGtub3duIGRhdGEgYnJlYWNoZXMuJ31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtyZXN1bHQucmVjb21tZW5kYXRpb25zPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDQ3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ0ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPFNoaWVsZENoZWNrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0NDk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnlcIiAvPiBSZWNvbW1lbmRhdGlvbnNcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDUxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZWNvbW1lbmRhdGlvbnNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdWx0Py5pZCB8fCByZXN1bHQ/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICB7cmVzdWx0LnJlY29tbWVuZGF0aW9ucy5tYXAoKHIsIGkpID0+XG4gICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDUzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ1NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5IHRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCBtdC0wLjUgZm9udC1ib2xkXCI+e2kgKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7cn1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtyZXN1bHQuYnJlYWNoZXM/Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0NjM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ2NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5CcmVhY2ggRGV0YWlsczwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDY1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0zXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJicmVhY2hlc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQuYnJlYWNoZXMubWFwKChicmVhY2gsIGkpID0+XG4gICAgICAgICAgICAgIDxCcmVhY2hDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0Njc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2JyZWFjaC5OYW1lIHx8IGl9IGJyZWFjaD17YnJlYWNofSBpbmRleD17aX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+KTtcblxufVxuXG4vLyDilIDilIAgTWFpbiBQYWdlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJlYWNoQ2hlY2tlcigpIHtcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKCdlbWFpbCcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDg0OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC00IG1kOnAtOCBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ4NTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0ODY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi00XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDg3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLTJ4bCBiZy1wcmltYXJ5LzEwIGJvcmRlciBib3JkZXItcHJpbWFyeS8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPEtleSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDg4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo0OTA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ5MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+QnJlYWNoICYgUGFzc3dvcmQgQ2hlY2tlcjwvaDE+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JyZWFjaENoZWNrZXI6NDkyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+Q2hlY2sgZW1haWxzLCBwYXNzd29yZHMsIGFuZCBnZW5lcmF0ZSBzdHJvbmcgY3JlZGVudGlhbHM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUYWIgc3dpdGNoZXIgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjQ5Nzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMS41IHAtMSBiZy1zZWNvbmRhcnkvNTAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWJvcmRlciB3LWZpdFwiPlxuICAgICAgICAgIHtbXG4gICAgICAgICAgeyBpZDogJ2VtYWlsJywgbGFiZWw6ICdFbWFpbCBCcmVhY2gnLCBpY29uOiBNYWlsIH0sXG4gICAgICAgICAgeyBpZDogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCBDaGVjaycsIGljb246IEtleVJvdW5kIH1dLlxuICAgICAgICAgIG1hcCgoeyBpZCwgbGFiZWwsIGljb246IEljb24gfSkgPT5cbiAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo1MDI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKGlkKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgdGFiID09PSBpZCA/ICdiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZCBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ib3JkZXInIDogJ3RleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQnfWBcbiAgICAgICAgICB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibGFiZWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQnJlYWNoQ2hlY2tlcjo1MDk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+e2xhYmVsfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjUxNTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgbW9kZT1cIndhaXRcIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjUxNjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXt0YWJ9IGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogOCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtOCB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX0+XG4gICAgICAgICAge3RhYiA9PT0gJ2VtYWlsJyA/IDxFbWFpbENoZWNrZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjUxNzoyOVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPiA6IDxQYXNzd29yZENoZWNrZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CcmVhY2hDaGVja2VyOjUxNzo0OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvQnJlYWNoQ2hlY2tlci5qc3gifQ==