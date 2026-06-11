import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/scan/FileScanner.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/scan/FileScanner.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"];
import { Upload, FileSearch, Loader2, Shield, AlertTriangle, CheckCircle, File, X } from "/node_modules/.vite/deps/lucide-react.js?v=ef8b20f3";
import { base44 } from "/src/api/base44Client.js";
import { useMutation, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=ef8b20f3";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import ScoreRing from "/src/components/ui-custom/ScoreRing.jsx";
import { playSafeSound, playDangerSound, playWarnSound } from "/src/utils/scanSounds.js";
const MAX_SIZE_BYTES = 1 * 1024 * 1024 * 1024;
export default function FileScanner() {
  _s();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [sizeError, setSizeError] = useState("");
  const inputRef = useRef(null);
  const queryClient = useQueryClient();
  const handleFileSelect = (selectedFile) => {
    if (!selectedFile) return;
    if (selectedFile.size > MAX_SIZE_BYTES) {
      setSizeError(`File too large. Maximum allowed size is 1 GB. Your file is ${(selectedFile.size / 1024 ** 3).toFixed(2)} GB.`);
      setFile(null);
      return;
    }
    setSizeError("");
    setFile(selectedFile);
    setResult(null);
  };
  const scanMutation = useMutation({
    mutationFn: async (selectedFile) => {
      const fileExt = selectedFile.name.toLowerCase().slice(selectedFile.name.lastIndexOf("."));
      let file_url = null;
      const isSmallEnoughForUpload = selectedFile.size <= 25 * 1024 * 1024;
      if (isSmallEnoughForUpload) {
        try {
          const uploadResult = await base44.integrations.Core.UploadFile({ file: selectedFile });
          file_url = uploadResult.file_url;
        } catch (_) {
        }
      }
      const scan = await base44.entities.ScanResult.create({
        scan_type: "file",
        target: selectedFile.name,
        status: "scanning"
      });
      const prompt = `Perform a comprehensive cybersecurity threat analysis on the following file.

File name: "${selectedFile.name}"
File size: ${(selectedFile.size / 1024).toFixed(1)} KB (${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
MIME type: "${selectedFile.type}"
File extension: "${fileExt}"
Analysis method: ${file_url ? "Full content + metadata analysis" : "Metadata-based heuristic analysis (file too large for content upload)"}

ANALYSIS RULES:
- Standard Office documents (.docx, .doc, .xlsx, .pptx), plain text (.txt, .csv), images (.png, .jpg, .gif) are generally SAFE unless they contain macros, embedded executables, or exploit shellcode.
- Executable formats (.exe, .msi, .apk, .bat, .ps1, .vbs, .jar) warrant deep scrutiny.
- Archives (.zip, .rar, .7z) should be evaluated for archive bomb patterns and known malware payloads.
- Large files (>100MB) of executable type are HIGH suspicion — be more conservative.
- Script files (.js, .py, .sh) warrant medium scrutiny.
- Be accurate. A clean .docx should score 0-10. A suspicious .exe should score 50+.
- Provide realistic, professional threat assessment.

Evaluate: malware signatures, ransomware patterns, spyware indicators, suspicious API calls, embedded executables, macro presence, polymorphic behavior, C2 communication patterns, privilege escalation attempts.`;
      const analysis = await base44.integrations.Core.InvokeLLM({
        prompt,
        ...file_url ? { file_urls: [file_url] } : {},
        response_json_schema: {
          type: "object",
          properties: {
            threat_score: { type: "number" },
            status: { type: "string", enum: ["safe", "warning", "danger"] },
            malware_detected: { type: "boolean" },
            ransomware_indicators: { type: "boolean" },
            trackers_found: { type: "number" },
            suspicious_permissions: { type: "array", items: { type: "string" } },
            suspicious_api_calls: { type: "array", items: { type: "string" } },
            embedded_executables: { type: "boolean" },
            macro_detected: { type: "boolean" },
            threats: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  type: { type: "string" },
                  severity: { type: "string", enum: ["low", "medium", "high", "critical"] },
                  description: { type: "string" }
                }
              }
            },
            recommendations: { type: "array", items: { type: "string" } },
            summary: { type: "string" }
          }
        }
      });
      await base44.entities.ScanResult.update(scan.id, {
        threat_score: analysis.threat_score,
        status: analysis.status,
        threats_found: analysis.threats || [],
        ai_summary: analysis.summary,
        details: {
          malware_detected: analysis.malware_detected,
          trackers_found: analysis.trackers_found
        }
      });
      return analysis;
    },
    onSuccess: (data) => {
      setResult(data);
      if (data.status === "safe") playSafeSound();
      else if (data.status === "warning") playWarnSound();
      else
        playDangerSound();
      queryClient.invalidateQueries({ queryKey: ["recentScans"] });
      queryClient.invalidateQueries({ queryKey: ["allScans"] });
    }
  });
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFileSelect(e.dataTransfer.files[0]);
  };
  const handleScan = () => {
    if (!file) return;
    setResult(null);
    scanMutation.mutate(file);
  };
  const statusConfig = {
    safe: { color: "text-emerald-400", icon: CheckCircle, label: "Safe" },
    warning: { color: "text-amber-400", icon: AlertTriangle, label: "Warning" },
    danger: { color: "text-red-400", icon: Shield, label: "Dangerous" }
  };
  const formatSize = (bytes) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:155:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/scan/FileScanner:156:6", "data-dynamic-content": "true", hover: false, glow: "purple", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          "data-source-location": "components/scan/FileScanner:157:8",
          "data-dynamic-content": "true",
          onDragOver: (e) => {
            e.preventDefault();
            setDragActive(true);
          },
          onDragLeave: () => setDragActive(false),
          onDrop: handleDrop,
          onClick: () => inputRef.current?.click(),
          className: `border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`,
          children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                "data-source-location": "components/scan/FileScanner:166:10",
                "data-dynamic-content": "true",
                ref: inputRef,
                type: "file",
                className: "hidden",
                accept: "*",
                onChange: (e) => handleFileSelect(e.target.files?.[0] || null)
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 185,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "components/scan/FileScanner:173:10", "data-dynamic-content": "true", className: `w-10 h-10 mx-auto mb-4 ${dragActive ? "text-primary" : "text-muted-foreground"}` }, void 0, false, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 192,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:174:10", "data-dynamic-content": "true", className: "text-foreground font-medium mb-1", children: file ? file.name : "Drag & drop a file, or click to browse" }, void 0, false, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 193,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:177:10", "data-dynamic-content": "false", className: "text-sm text-muted-foreground", children: [
              "Any file type supported — up to ",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/scan/FileScanner:178:44", "data-dynamic-content": "false", className: "text-primary font-semibold", children: "1 GB" }, void 0, false, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 197,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 196,
              columnNumber: 11
            }, this),
            file && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:181:12", "data-dynamic-content": "true", className: "mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-sm", children: [
              /* @__PURE__ */ jsxDEV(File, { "data-source-location": "components/scan/FileScanner:182:14", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 201,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/scan/FileScanner:183:14", "data-dynamic-content": "true", className: "text-foreground", "data-collection-item-field": "name", "data-collection-item-id": file?.id || file?._id, children: file.name }, void 0, false, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 202,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/scan/FileScanner:184:14", "data-dynamic-content": "true", className: "text-muted-foreground", children: [
                "(",
                formatSize(file.size),
                ")"
              ] }, void 0, true, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 203,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("button", { "data-source-location": "components/scan/FileScanner:185:14", "data-dynamic-content": "true", onClick: (e) => {
                e.stopPropagation();
                setFile(null);
                setResult(null);
              }, className: "text-muted-foreground hover:text-red-400 transition-colors", children: /* @__PURE__ */ jsxDEV(X, { "data-source-location": "components/scan/FileScanner:186:16", "data-dynamic-content": "false", className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 205,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 204,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 200,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 176,
          columnNumber: 9
        },
        this
      ),
      sizeError && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:193:10", "data-dynamic-content": "true", className: "mt-3 flex items-center gap-2 p-3 rounded-lg bg-red-400/10 border border-red-400/20", children: [
        /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "components/scan/FileScanner:194:12", "data-dynamic-content": "false", className: "w-4 h-4 text-red-400 flex-shrink-0" }, void 0, false, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:195:12", "data-dynamic-content": "true", className: "text-sm text-red-400", "data-collection-item-field": "sizeError", children: sizeError }, void 0, false, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 214,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/scan/FileScanner.jsx",
        lineNumber: 212,
        columnNumber: 9
      }, this),
      file && !sizeError && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:200:10", "data-dynamic-content": "true", className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:201:12", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", children: file.size > 25 * 1024 * 1024 ? "Large file — AI heuristic metadata analysis will be used" : "Full content analysis will be performed" }, void 0, false, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 220,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/scan/FileScanner:206:12", "data-dynamic-content": "true", onClick: handleScan, disabled: scanMutation.isPending, children: [
          scanMutation.isPending ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "components/scan/FileScanner:207:40", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 226,
            columnNumber: 41
          }, this) : /* @__PURE__ */ jsxDEV(FileSearch, { "data-source-location": "components/scan/FileScanner:207:87", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 226,
            columnNumber: 175
          }, this),
          scanMutation.isPending ? "Analyzing..." : "Analyze File"
        ] }, void 0, true, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 225,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/scan/FileScanner.jsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/scan/FileScanner.jsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "components/scan/FileScanner:214:6", "data-dynamic-content": "true", children: result && /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "components/scan/FileScanner:216:10", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/scan/FileScanner:217:12", "data-dynamic-content": "true", hover: false, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:218:14", "data-dynamic-content": "true", className: "flex flex-col md:flex-row gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:219:16", "data-dynamic-content": "true", className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV(ScoreRing, { "data-source-location": "components/scan/FileScanner:220:18", "data-dynamic-content": "true", score: 100 - (result.threat_score || 0), size: 160, strokeWidth: 12, label: "Safety Score" }, void 0, false, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 239,
          columnNumber: 19
        }, this),
        (() => {
          const cfg = statusConfig[result.status] || statusConfig.safe;
          const Icon = cfg.icon;
          return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:225:22", "data-dynamic-content": "true", className: `flex items-center gap-2 ${cfg.color}`, children: [
            /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "components/scan/FileScanner:226:24", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 245,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/scan/FileScanner:227:24", "data-dynamic-content": "true", className: "font-semibold", "data-collection-item-field": "label", "data-collection-item-id": cfg?.id || cfg?._id, children: cfg.label }, void 0, false, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 246,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 244,
            columnNumber: 21
          }, this);
        })()
      ] }, void 0, true, {
        fileName: "/app/src/components/scan/FileScanner.jsx",
        lineNumber: 238,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:232:16", "data-dynamic-content": "true", className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:233:18", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/scan/FileScanner:234:20", "data-dynamic-content": "false", className: "text-lg font-semibold text-foreground mb-2", children: "AI Sandbox Analysis" }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 253,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:235:20", "data-dynamic-content": "true", className: "text-sm text-muted-foreground leading-relaxed", "data-collection-item-field": "summary", "data-collection-item-id": result?.id || result?._id, children: result.summary }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 254,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 252,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:239:18", "data-dynamic-content": "true", className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
          { label: "Malware", value: result.malware_detected ? "Detected" : "Clean", ok: !result.malware_detected },
          { label: "Ransomware", value: result.ransomware_indicators ? "Indicators" : "None", ok: !result.ransomware_indicators },
          { label: "Macros", value: result.macro_detected ? "Found" : "None", ok: !result.macro_detected },
          { label: "Embedded Exec", value: result.embedded_executables ? "Found" : "None", ok: !result.embedded_executables },
          { label: "Trackers", value: result.trackers_found || 0, ok: (result.trackers_found || 0) === 0 },
          { label: "Threat Score", value: `${result.threat_score || 0}/100`, ok: (result.threat_score || 0) < 30 }
        ].map(
          (m) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:248:22", "data-dynamic-content": "true", className: "p-3 rounded-xl bg-secondary/30 text-center", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:249:24", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mb-1", "data-collection-item-field": "label", "data-collection-item-id": m?.id || m?._id, children: m.label }, void 0, false, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 268,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:250:24", "data-dynamic-content": "true", className: `text-sm font-bold font-mono ${m.ok ? "text-emerald-400" : "text-red-400"}`, "data-collection-item-field": "value", "data-collection-item-id": m?.id || m?._id, children: m.value }, void 0, false, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 269,
              columnNumber: 25
            }, this)
          ] }, m.label, true, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 267,
            columnNumber: 19
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 258,
          columnNumber: 19
        }, this),
        result.suspicious_permissions?.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:256:20", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/scan/FileScanner:257:22", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground mb-2", children: "Suspicious Permissions" }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 276,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:258:22", "data-dynamic-content": "true", className: "flex flex-wrap gap-2", "data-collection-item-field": "suspicious_permissions", "data-collection-item-id": result?.id || result?._id, children: result.suspicious_permissions.map(
            (p, i) => /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/scan/FileScanner:260:26", "data-dynamic-content": "true", className: "text-xs px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20", "data-collection-item-field": "p", children: p }, i, false, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 279,
              columnNumber: 21
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 277,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 275,
          columnNumber: 17
        }, this),
        result.threats?.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:267:20", "data-dynamic-content": "true", className: "space-y-2", "data-collection-item-field": "threats", "data-collection-item-id": result?.id || result?._id, children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/scan/FileScanner:268:22", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground mb-2", children: "Threats Detected" }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 287,
            columnNumber: 23
          }, this),
          result.threats.map(
            (t, i) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:270:24", "data-dynamic-content": "true", className: "flex items-start gap-2 p-2 rounded-lg bg-red-400/5 border border-red-400/10", children: [
              /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "components/scan/FileScanner:271:26", "data-dynamic-content": "false", className: "w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" }, void 0, false, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 290,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:272:26", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:273:28", "data-dynamic-content": "true", className: "text-sm text-foreground font-medium", "data-collection-item-field": "type", "data-collection-item-id": t?.id || t?._id, children: t.type }, void 0, false, {
                  fileName: "/app/src/components/scan/FileScanner.jsx",
                  lineNumber: 292,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/FileScanner:274:28", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", "data-collection-item-field": "description", "data-collection-item-id": t?.id || t?._id, children: t.description }, void 0, false, {
                  fileName: "/app/src/components/scan/FileScanner.jsx",
                  lineNumber: 293,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 291,
                columnNumber: 27
              }, this)
            ] }, i, true, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 289,
              columnNumber: 19
            }, this)
          )
        ] }, void 0, true, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 286,
          columnNumber: 17
        }, this),
        result.recommendations?.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/FileScanner:282:20", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/scan/FileScanner:283:22", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground mb-2", children: "Recommendations" }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 302,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "components/scan/FileScanner:284:22", "data-dynamic-content": "true", className: "space-y-1", "data-collection-item-field": "recommendations", "data-collection-item-id": result?.id || result?._id, children: result.recommendations.map(
            (r, i) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "components/scan/FileScanner:286:26", "data-dynamic-content": "true", className: "flex items-start gap-2 text-xs text-muted-foreground", "data-collection-item-field": "r", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "components/scan/FileScanner:287:28", "data-dynamic-content": "false", className: "w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" }, void 0, false, {
                fileName: "/app/src/components/scan/FileScanner.jsx",
                lineNumber: 306,
                columnNumber: 29
              }, this),
              r
            ] }, i, true, {
              fileName: "/app/src/components/scan/FileScanner.jsx",
              lineNumber: 305,
              columnNumber: 21
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/components/scan/FileScanner.jsx",
            lineNumber: 303,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/scan/FileScanner.jsx",
          lineNumber: 301,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/scan/FileScanner.jsx",
        lineNumber: 251,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/scan/FileScanner.jsx",
      lineNumber: 237,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "/app/src/components/scan/FileScanner.jsx",
      lineNumber: 236,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/src/components/scan/FileScanner.jsx",
      lineNumber: 235,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/scan/FileScanner.jsx",
      lineNumber: 233,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/scan/FileScanner.jsx",
    lineNumber: 174,
    columnNumber: 5
  }, this);
}
_s(FileScanner, "6KSVNn0ke/+nLv39KmElxQR7N9s=", false, function() {
  return [useQueryClient, useMutation];
});
_c = FileScanner;
var _c;
$RefreshReg$(_c, "FileScanner");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/scan/FileScanner.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/scan/FileScanner.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBLGlCQUZzRkYsR0FBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHTTtBQUFBLFVBQ04sS0FORTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU9BO0FBQUEsYUFUTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVUk7QUFBQSxXQTVESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOERBO0FBQUEsU0E1RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTZFQSxLQTlFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBK0VBLEtBaEZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FpRkUsS0FuRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXFGQTtBQUFBLE9BaEpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FpSkE7QUFFSjtBQUFDbEcsR0FqU3VCRCxhQUFXO0FBQUEsVUFNYlYsZ0JBY0NELFdBQVc7QUFBQTtBQUFBLEtBcEJWVztBQUFXLElBQUFzRztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiVXBsb2FkIiwiRmlsZVNlYXJjaCIsIkxvYWRlcjIiLCJTaGllbGQiLCJBbGVydFRyaWFuZ2xlIiwiQ2hlY2tDaXJjbGUiLCJGaWxlIiwiWCIsImJhc2U0NCIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJOZW9uQnV0dG9uIiwiR2xhc3NDYXJkIiwiU2NvcmVSaW5nIiwicGxheVNhZmVTb3VuZCIsInBsYXlEYW5nZXJTb3VuZCIsInBsYXlXYXJuU291bmQiLCJNQVhfU0laRV9CWVRFUyIsIkZpbGVTY2FubmVyIiwiX3MiLCJmaWxlIiwic2V0RmlsZSIsInJlc3VsdCIsInNldFJlc3VsdCIsImRyYWdBY3RpdmUiLCJzZXREcmFnQWN0aXZlIiwic2l6ZUVycm9yIiwic2V0U2l6ZUVycm9yIiwiaW5wdXRSZWYiLCJxdWVyeUNsaWVudCIsImhhbmRsZUZpbGVTZWxlY3QiLCJzZWxlY3RlZEZpbGUiLCJzaXplIiwidG9GaXhlZCIsInNjYW5NdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJmaWxlRXh0IiwibmFtZSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImZpbGVfdXJsIiwiaXNTbWFsbEVub3VnaEZvclVwbG9hZCIsInVwbG9hZFJlc3VsdCIsImludGVncmF0aW9ucyIsIkNvcmUiLCJVcGxvYWRGaWxlIiwiXyIsInNjYW4iLCJlbnRpdGllcyIsIlNjYW5SZXN1bHQiLCJjcmVhdGUiLCJzY2FuX3R5cGUiLCJ0YXJnZXQiLCJzdGF0dXMiLCJwcm9tcHQiLCJ0eXBlIiwiYW5hbHlzaXMiLCJJbnZva2VMTE0iLCJmaWxlX3VybHMiLCJyZXNwb25zZV9qc29uX3NjaGVtYSIsInByb3BlcnRpZXMiLCJ0aHJlYXRfc2NvcmUiLCJlbnVtIiwibWFsd2FyZV9kZXRlY3RlZCIsInJhbnNvbXdhcmVfaW5kaWNhdG9ycyIsInRyYWNrZXJzX2ZvdW5kIiwic3VzcGljaW91c19wZXJtaXNzaW9ucyIsIml0ZW1zIiwic3VzcGljaW91c19hcGlfY2FsbHMiLCJlbWJlZGRlZF9leGVjdXRhYmxlcyIsIm1hY3JvX2RldGVjdGVkIiwidGhyZWF0cyIsInNldmVyaXR5IiwiZGVzY3JpcHRpb24iLCJyZWNvbW1lbmRhdGlvbnMiLCJzdW1tYXJ5IiwidXBkYXRlIiwiaWQiLCJ0aHJlYXRzX2ZvdW5kIiwiYWlfc3VtbWFyeSIsImRldGFpbHMiLCJvblN1Y2Nlc3MiLCJkYXRhIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJxdWVyeUtleSIsImhhbmRsZURyb3AiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImhhbmRsZVNjYW4iLCJtdXRhdGUiLCJzdGF0dXNDb25maWciLCJzYWZlIiwiY29sb3IiLCJpY29uIiwibGFiZWwiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwiZm9ybWF0U2l6ZSIsImJ5dGVzIiwiY3VycmVudCIsImNsaWNrIiwiX2lkIiwic3RvcFByb3BhZ2F0aW9uIiwiaXNQZW5kaW5nIiwib3BhY2l0eSIsInkiLCJjZmciLCJJY29uIiwidmFsdWUiLCJvayIsIm1hcCIsIm0iLCJsZW5ndGgiLCJwIiwiaSIsInQiLCJyIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRmlsZVNjYW5uZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXBsb2FkLCBGaWxlU2VhcmNoLCBMb2FkZXIyLCBTaGllbGQsIEFsZXJ0VHJpYW5nbGUsIENoZWNrQ2lyY2xlLCBGaWxlLCBYIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gJ0AvYXBpL2Jhc2U0NENsaWVudCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBOZW9uQnV0dG9uIGZyb20gJy4uL3VpLWN1c3RvbS9OZW9uQnV0dG9uJztcbmltcG9ydCBHbGFzc0NhcmQgZnJvbSAnLi4vdWktY3VzdG9tL0dsYXNzQ2FyZCc7XG5pbXBvcnQgU2NvcmVSaW5nIGZyb20gJy4uL3VpLWN1c3RvbS9TY29yZVJpbmcnO1xuaW1wb3J0IHsgcGxheVNhZmVTb3VuZCwgcGxheURhbmdlclNvdW5kLCBwbGF5V2FyblNvdW5kIH0gZnJvbSAnQC91dGlscy9zY2FuU291bmRzJztcblxuY29uc3QgTUFYX1NJWkVfQllURVMgPSAxICogMTAyNCAqIDEwMjQgKiAxMDI0OyAvLyAxIEdCXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVTY2FubmVyKCkge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZHJhZ0FjdGl2ZSwgc2V0RHJhZ0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaXplRXJyb3IsIHNldFNpemVFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZVNlbGVjdCA9IChzZWxlY3RlZEZpbGUpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkRmlsZSkgcmV0dXJuO1xuICAgIGlmIChzZWxlY3RlZEZpbGUuc2l6ZSA+IE1BWF9TSVpFX0JZVEVTKSB7XG4gICAgICBzZXRTaXplRXJyb3IoYEZpbGUgdG9vIGxhcmdlLiBNYXhpbXVtIGFsbG93ZWQgc2l6ZSBpcyAxIEdCLiBZb3VyIGZpbGUgaXMgJHsoc2VsZWN0ZWRGaWxlLnNpemUgLyAxMDI0ICoqIDMpLnRvRml4ZWQoMil9IEdCLmApO1xuICAgICAgc2V0RmlsZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0U2l6ZUVycm9yKCcnKTtcbiAgICBzZXRGaWxlKHNlbGVjdGVkRmlsZSk7XG4gICAgc2V0UmVzdWx0KG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IHNjYW5NdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbkZuOiBhc3luYyAoc2VsZWN0ZWRGaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlRXh0ID0gc2VsZWN0ZWRGaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5zbGljZShzZWxlY3RlZEZpbGUubmFtZS5sYXN0SW5kZXhPZignLicpKTtcblxuICAgICAgLy8gRm9yIGxhcmdlIGZpbGVzIHdlIGNhbiBvbmx5IGRvIG1ldGFkYXRhICsgQUkgYW5hbHlzaXMgd2l0aG91dCBkaXJlY3QgdXBsb2FkXG4gICAgICBsZXQgZmlsZV91cmwgPSBudWxsO1xuICAgICAgY29uc3QgaXNTbWFsbEVub3VnaEZvclVwbG9hZCA9IHNlbGVjdGVkRmlsZS5zaXplIDw9IDI1ICogMTAyNCAqIDEwMjQ7IC8vIDI1IE1CIHVwbG9hZCBsaW1pdCBmb3IgQUkgdmlzaW9uXG5cbiAgICAgIGlmIChpc1NtYWxsRW5vdWdoRm9yVXBsb2FkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgYmFzZTQ0LmludGVncmF0aW9ucy5Db3JlLlVwbG9hZEZpbGUoeyBmaWxlOiBzZWxlY3RlZEZpbGUgfSk7XG4gICAgICAgICAgZmlsZV91cmwgPSB1cGxvYWRSZXN1bHQuZmlsZV91cmw7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcblxuICAgICAgICAgIC8vIFVwbG9hZCBmYWlsZWQsIGZhbGwgYmFjayB0byBtZXRhZGF0YS1vbmx5IGFuYWx5c2lzXG4gICAgICAgIH19XG5cbiAgICAgIGNvbnN0IHNjYW4gPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuU2NhblJlc3VsdC5jcmVhdGUoe1xuICAgICAgICBzY2FuX3R5cGU6ICdmaWxlJyxcbiAgICAgICAgdGFyZ2V0OiBzZWxlY3RlZEZpbGUubmFtZSxcbiAgICAgICAgc3RhdHVzOiAnc2Nhbm5pbmcnXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJvbXB0ID0gYFBlcmZvcm0gYSBjb21wcmVoZW5zaXZlIGN5YmVyc2VjdXJpdHkgdGhyZWF0IGFuYWx5c2lzIG9uIHRoZSBmb2xsb3dpbmcgZmlsZS5cblxuRmlsZSBuYW1lOiBcIiR7c2VsZWN0ZWRGaWxlLm5hbWV9XCJcbkZpbGUgc2l6ZTogJHsoc2VsZWN0ZWRGaWxlLnNpemUgLyAxMDI0KS50b0ZpeGVkKDEpfSBLQiAoJHsoc2VsZWN0ZWRGaWxlLnNpemUgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpfSBNQilcbk1JTUUgdHlwZTogXCIke3NlbGVjdGVkRmlsZS50eXBlfVwiXG5GaWxlIGV4dGVuc2lvbjogXCIke2ZpbGVFeHR9XCJcbkFuYWx5c2lzIG1ldGhvZDogJHtmaWxlX3VybCA/ICdGdWxsIGNvbnRlbnQgKyBtZXRhZGF0YSBhbmFseXNpcycgOiAnTWV0YWRhdGEtYmFzZWQgaGV1cmlzdGljIGFuYWx5c2lzIChmaWxlIHRvbyBsYXJnZSBmb3IgY29udGVudCB1cGxvYWQpJ31cblxuQU5BTFlTSVMgUlVMRVM6XG4tIFN0YW5kYXJkIE9mZmljZSBkb2N1bWVudHMgKC5kb2N4LCAuZG9jLCAueGxzeCwgLnBwdHgpLCBwbGFpbiB0ZXh0ICgudHh0LCAuY3N2KSwgaW1hZ2VzICgucG5nLCAuanBnLCAuZ2lmKSBhcmUgZ2VuZXJhbGx5IFNBRkUgdW5sZXNzIHRoZXkgY29udGFpbiBtYWNyb3MsIGVtYmVkZGVkIGV4ZWN1dGFibGVzLCBvciBleHBsb2l0IHNoZWxsY29kZS5cbi0gRXhlY3V0YWJsZSBmb3JtYXRzICguZXhlLCAubXNpLCAuYXBrLCAuYmF0LCAucHMxLCAudmJzLCAuamFyKSB3YXJyYW50IGRlZXAgc2NydXRpbnkuXG4tIEFyY2hpdmVzICguemlwLCAucmFyLCAuN3opIHNob3VsZCBiZSBldmFsdWF0ZWQgZm9yIGFyY2hpdmUgYm9tYiBwYXR0ZXJucyBhbmQga25vd24gbWFsd2FyZSBwYXlsb2Fkcy5cbi0gTGFyZ2UgZmlsZXMgKD4xMDBNQikgb2YgZXhlY3V0YWJsZSB0eXBlIGFyZSBISUdIIHN1c3BpY2lvbiDigJQgYmUgbW9yZSBjb25zZXJ2YXRpdmUuXG4tIFNjcmlwdCBmaWxlcyAoLmpzLCAucHksIC5zaCkgd2FycmFudCBtZWRpdW0gc2NydXRpbnkuXG4tIEJlIGFjY3VyYXRlLiBBIGNsZWFuIC5kb2N4IHNob3VsZCBzY29yZSAwLTEwLiBBIHN1c3BpY2lvdXMgLmV4ZSBzaG91bGQgc2NvcmUgNTArLlxuLSBQcm92aWRlIHJlYWxpc3RpYywgcHJvZmVzc2lvbmFsIHRocmVhdCBhc3Nlc3NtZW50LlxuXG5FdmFsdWF0ZTogbWFsd2FyZSBzaWduYXR1cmVzLCByYW5zb213YXJlIHBhdHRlcm5zLCBzcHl3YXJlIGluZGljYXRvcnMsIHN1c3BpY2lvdXMgQVBJIGNhbGxzLCBlbWJlZGRlZCBleGVjdXRhYmxlcywgbWFjcm8gcHJlc2VuY2UsIHBvbHltb3JwaGljIGJlaGF2aW9yLCBDMiBjb21tdW5pY2F0aW9uIHBhdHRlcm5zLCBwcml2aWxlZ2UgZXNjYWxhdGlvbiBhdHRlbXB0cy5gO1xuXG4gICAgICBjb25zdCBhbmFseXNpcyA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgICBwcm9tcHQsXG4gICAgICAgIC4uLihmaWxlX3VybCA/IHsgZmlsZV91cmxzOiBbZmlsZV91cmxdIH0gOiB7fSksXG4gICAgICAgIHJlc3BvbnNlX2pzb25fc2NoZW1hOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgdGhyZWF0X3Njb3JlOiB7IHR5cGU6ICdudW1iZXInIH0sXG4gICAgICAgICAgICBzdGF0dXM6IHsgdHlwZTogJ3N0cmluZycsIGVudW06IFsnc2FmZScsICd3YXJuaW5nJywgJ2RhbmdlciddIH0sXG4gICAgICAgICAgICBtYWx3YXJlX2RldGVjdGVkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgICAgcmFuc29td2FyZV9pbmRpY2F0b3JzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgICAgdHJhY2tlcnNfZm91bmQ6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICAgIHN1c3BpY2lvdXNfcGVybWlzc2lvbnM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICAgICAgc3VzcGljaW91c19hcGlfY2FsbHM6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICAgICAgZW1iZWRkZWRfZXhlY3V0YWJsZXM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgICAgICBtYWNyb19kZXRlY3RlZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgICAgIHRocmVhdHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgICAgICBzZXZlcml0eTogeyB0eXBlOiAnc3RyaW5nJywgZW51bTogWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnLCAnY3JpdGljYWwnXSB9LFxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY29tbWVuZGF0aW9uczogeyB0eXBlOiAnYXJyYXknLCBpdGVtczogeyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgICAgICBzdW1tYXJ5OiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuU2NhblJlc3VsdC51cGRhdGUoc2Nhbi5pZCwge1xuICAgICAgICB0aHJlYXRfc2NvcmU6IGFuYWx5c2lzLnRocmVhdF9zY29yZSxcbiAgICAgICAgc3RhdHVzOiBhbmFseXNpcy5zdGF0dXMsXG4gICAgICAgIHRocmVhdHNfZm91bmQ6IGFuYWx5c2lzLnRocmVhdHMgfHwgW10sXG4gICAgICAgIGFpX3N1bW1hcnk6IGFuYWx5c2lzLnN1bW1hcnksXG4gICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICBtYWx3YXJlX2RldGVjdGVkOiBhbmFseXNpcy5tYWx3YXJlX2RldGVjdGVkLFxuICAgICAgICAgIHRyYWNrZXJzX2ZvdW5kOiBhbmFseXNpcy50cmFja2Vyc19mb3VuZFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFuYWx5c2lzO1xuICAgIH0sXG4gICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgc2V0UmVzdWx0KGRhdGEpO1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnc2FmZScpIHBsYXlTYWZlU291bmQoKTtlbHNlXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICd3YXJuaW5nJykgcGxheVdhcm5Tb3VuZCgpO2Vsc2VcbiAgICAgIHBsYXlEYW5nZXJTb3VuZCgpO1xuICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoeyBxdWVyeUtleTogWydyZWNlbnRTY2FucyddIH0pO1xuICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoeyBxdWVyeUtleTogWydhbGxTY2FucyddIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldERyYWdBY3RpdmUoZmFsc2UpO1xuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5maWxlcz8uWzBdKSBoYW5kbGVGaWxlU2VsZWN0KGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY2FuID0gKCkgPT4ge1xuICAgIGlmICghZmlsZSkgcmV0dXJuO1xuICAgIHNldFJlc3VsdChudWxsKTtcbiAgICBzY2FuTXV0YXRpb24ubXV0YXRlKGZpbGUpO1xuICB9O1xuXG4gIGNvbnN0IHN0YXR1c0NvbmZpZyA9IHtcbiAgICBzYWZlOiB7IGNvbG9yOiAndGV4dC1lbWVyYWxkLTQwMCcsIGljb246IENoZWNrQ2lyY2xlLCBsYWJlbDogJ1NhZmUnIH0sXG4gICAgd2FybmluZzogeyBjb2xvcjogJ3RleHQtYW1iZXItNDAwJywgaWNvbjogQWxlcnRUcmlhbmdsZSwgbGFiZWw6ICdXYXJuaW5nJyB9LFxuICAgIGRhbmdlcjogeyBjb2xvcjogJ3RleHQtcmVkLTQwMCcsIGljb246IFNoaWVsZCwgbGFiZWw6ICdEYW5nZXJvdXMnIH1cbiAgfTtcblxuICBjb25zdCBmb3JtYXRTaXplID0gKGJ5dGVzKSA9PiB7XG4gICAgaWYgKGJ5dGVzIDwgMTAyNCAqIDEwMjQpIHJldHVybiBgJHsoYnl0ZXMgLyAxMDI0KS50b0ZpeGVkKDEpfSBLQmA7XG4gICAgaWYgKGJ5dGVzIDwgMTAyNCAqIDEwMjQgKiAxMDI0KSByZXR1cm4gYCR7KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKX0gTUJgO1xuICAgIHJldHVybiBgJHsoYnl0ZXMgLyAoMTAyNCAqIDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKX0gR0JgO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoxNTU6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoxNTY6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gZ2xvdz1cInB1cnBsZVwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjE1Nzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IHtlLnByZXZlbnREZWZhdWx0KCk7c2V0RHJhZ0FjdGl2ZSh0cnVlKTt9fVxuICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gc2V0RHJhZ0FjdGl2ZShmYWxzZSl9XG4gICAgICAgIG9uRHJvcD17aGFuZGxlRHJvcH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCByb3VuZGVkLXhsIHAtMTIgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgZHJhZ0FjdGl2ZSA/ICdib3JkZXItcHJpbWFyeSBiZy1wcmltYXJ5LzUnIDogJ2JvcmRlci1ib3JkZXIgaG92ZXI6Ym9yZGVyLXByaW1hcnkvMzAnfWBcbiAgICAgICAgfT5cbiAgICAgICAgICBcbiAgICAgICAgICA8aW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MTY2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgIGFjY2VwdD1cIipcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZVNlbGVjdChlLnRhcmdldC5maWxlcz8uWzBdIHx8IG51bGwpfSAvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxVcGxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MTczOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy0xMCBoLTEwIG14LWF1dG8gbWItNCAke2RyYWdBY3RpdmUgPyAndGV4dC1wcmltYXJ5JyA6ICd0ZXh0LW11dGVkLWZvcmVncm91bmQnfWB9IC8+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MTc0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtIG1iLTFcIj5cbiAgICAgICAgICAgIHtmaWxlID8gZmlsZS5uYW1lIDogJ0RyYWcgJiBkcm9wIGEgZmlsZSwgb3IgY2xpY2sgdG8gYnJvd3NlJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MTc3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICBBbnkgZmlsZSB0eXBlIHN1cHBvcnRlZCDigJQgdXAgdG8gPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MTc4OjQ0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkXCI+MSBHQjwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAge2ZpbGUgJiZcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjE4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm10LTQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWxnIGJnLXNlY29uZGFyeS81MCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDxGaWxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjE4MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjE4MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtmaWxlPy5pZCB8fCBmaWxlPy5faWR9PntmaWxlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoxODQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj4oe2Zvcm1hdFNpemUoZmlsZS5zaXplKX0pPC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjE4NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9eyhlKSA9PiB7ZS5zdG9wUHJvcGFnYXRpb24oKTtzZXRGaWxlKG51bGwpO3NldFJlc3VsdChudWxsKTt9fSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1yZWQtNDAwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgPFggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MTg2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtzaXplRXJyb3IgJiZcbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoxOTM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtdC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHAtMyByb3VuZGVkLWxnIGJnLXJlZC00MDAvMTAgYm9yZGVyIGJvcmRlci1yZWQtNDAwLzIwXCI+XG4gICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoxOTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXJlZC00MDAgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoxOTU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcmVkLTQwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic2l6ZUVycm9yXCI+e3NpemVFcnJvcn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICB7ZmlsZSAmJiAhc2l6ZUVycm9yICYmXG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MjAwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjIwMToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgIHtmaWxlLnNpemUgPiAyNSAqIDEwMjQgKiAxMDI0ID9cbiAgICAgICAgICAgICdMYXJnZSBmaWxlIOKAlCBBSSBoZXVyaXN0aWMgbWV0YWRhdGEgYW5hbHlzaXMgd2lsbCBiZSB1c2VkJyA6XG4gICAgICAgICAgICAnRnVsbCBjb250ZW50IGFuYWx5c2lzIHdpbGwgYmUgcGVyZm9ybWVkJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjIwNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZVNjYW59IGRpc2FibGVkPXtzY2FuTXV0YXRpb24uaXNQZW5kaW5nfT5cbiAgICAgICAgICAgICAge3NjYW5NdXRhdGlvbi5pc1BlbmRpbmcgPyA8TG9hZGVyMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMDc6NDBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBhbmltYXRlLXNwaW5cIiAvPiA6IDxGaWxlU2VhcmNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjIwNzo4N1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz59XG4gICAgICAgICAgICAgIHtzY2FuTXV0YXRpb24uaXNQZW5kaW5nID8gJ0FuYWx5emluZy4uLicgOiAnQW5hbHl6ZSBGaWxlJ31cbiAgICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9HbGFzc0NhcmQ+XG5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MjE0OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAge3Jlc3VsdCAmJlxuICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMTY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fT5cbiAgICAgICAgICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MjE3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMTg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMTk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPFNjb3JlUmluZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMjA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzY29yZT17MTAwIC0gKHJlc3VsdC50aHJlYXRfc2NvcmUgfHwgMCl9IHNpemU9ezE2MH0gc3Ryb2tlV2lkdGg9ezEyfSBsYWJlbD1cIlNhZmV0eSBTY29yZVwiIC8+XG4gICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNmZyA9IHN0YXR1c0NvbmZpZ1tyZXN1bHQuc3RhdHVzXSB8fCBzdGF0dXNDb25maWcuc2FmZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IEljb24gPSBjZmcuaWNvbjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MjI1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgJHtjZmcuY29sb3J9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMjY6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMjc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjZmc/LmlkIHx8IGNmZz8uX2lkfT57Y2ZnLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuXG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjIzMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MjMzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMzQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCI+QUkgU2FuZGJveCBBbmFseXNpczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjIzNToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3VtbWFyeVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT57cmVzdWx0LnN1bW1hcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBJbmRpY2F0b3JzICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyMzk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTWFsd2FyZScsIHZhbHVlOiByZXN1bHQubWFsd2FyZV9kZXRlY3RlZCA/ICdEZXRlY3RlZCcgOiAnQ2xlYW4nLCBvazogIXJlc3VsdC5tYWx3YXJlX2RldGVjdGVkIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUmFuc29td2FyZScsIHZhbHVlOiByZXN1bHQucmFuc29td2FyZV9pbmRpY2F0b3JzID8gJ0luZGljYXRvcnMnIDogJ05vbmUnLCBvazogIXJlc3VsdC5yYW5zb213YXJlX2luZGljYXRvcnMgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdNYWNyb3MnLCB2YWx1ZTogcmVzdWx0Lm1hY3JvX2RldGVjdGVkID8gJ0ZvdW5kJyA6ICdOb25lJywgb2s6ICFyZXN1bHQubWFjcm9fZGV0ZWN0ZWQgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdFbWJlZGRlZCBFeGVjJywgdmFsdWU6IHJlc3VsdC5lbWJlZGRlZF9leGVjdXRhYmxlcyA/ICdGb3VuZCcgOiAnTm9uZScsIG9rOiAhcmVzdWx0LmVtYmVkZGVkX2V4ZWN1dGFibGVzIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnVHJhY2tlcnMnLCB2YWx1ZTogcmVzdWx0LnRyYWNrZXJzX2ZvdW5kIHx8IDAsIG9rOiAocmVzdWx0LnRyYWNrZXJzX2ZvdW5kIHx8IDApID09PSAwIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnVGhyZWF0IFNjb3JlJywgdmFsdWU6IGAke3Jlc3VsdC50aHJlYXRfc2NvcmUgfHwgMH0vMTAwYCwgb2s6IChyZXN1bHQudGhyZWF0X3Njb3JlIHx8IDApIDwgMzAgfV0uXG4gICAgICAgICAgICAgICAgICBtYXAoKG0pID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjI0ODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17bS5sYWJlbH0gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzMwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyNDk6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi0xXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXttPy5pZCB8fCBtPy5faWR9PnttLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjI1MDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtc20gZm9udC1ib2xkIGZvbnQtbW9ubyAke20ub2sgPyAndGV4dC1lbWVyYWxkLTQwMCcgOiAndGV4dC1yZWQtNDAwJ31gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInZhbHVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e20/LmlkIHx8IG0/Ll9pZH0+e20udmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7cmVzdWx0LnN1c3BpY2lvdXNfcGVybWlzc2lvbnM/Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjI1NjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyNTc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCI+U3VzcGljaW91cyBQZXJtaXNzaW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyNTg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3VzcGljaW91c19wZXJtaXNzaW9uc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQuc3VzcGljaW91c19wZXJtaXNzaW9ucy5tYXAoKHAsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjI2MDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17aX0gY2xhc3NOYW1lPVwidGV4dC14cyBweC0yLjUgcHktMSByb3VuZGVkLWZ1bGwgYmctYW1iZXItNDAwLzEwIHRleHQtYW1iZXItNDAwIGJvcmRlciBib3JkZXItYW1iZXItNDAwLzIwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwXCI+e3B9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQudGhyZWF0cz8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MjY3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0aHJlYXRzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3VsdD8uaWQgfHwgcmVzdWx0Py5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyNjg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCI+VGhyZWF0cyBEZXRlY3RlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC50aHJlYXRzLm1hcCgodCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MjcwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHAtMiByb3VuZGVkLWxnIGJnLXJlZC00MDAvNSBib3JkZXIgYm9yZGVyLXJlZC00MDAvMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6MjcxOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1yZWQtNDAwIG10LTAuNSBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyNzI6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyNzM6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZCBmb250LW1lZGl1bVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidHlwZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0Py5pZCB8fCB0Py5faWR9Pnt0LnR5cGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjI3NDoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXNjcmlwdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0Py5pZCB8fCB0Py5faWR9Pnt0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAge3Jlc3VsdC5yZWNvbW1lbmRhdGlvbnM/Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyOjI4MjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyODM6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCI+UmVjb21tZW5kYXRpb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6Mjg0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0xXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZWNvbW1lbmRhdGlvbnNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdWx0Py5pZCB8fCByZXN1bHQ/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LnJlY29tbWVuZGF0aW9ucy5tYXAoKHIsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9GaWxlU2Nhbm5lcjoyODY6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vRmlsZVNjYW5uZXI6Mjg3OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtcHJpbWFyeSBtdC0wLjUgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR2xhc3NDYXJkPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyLmpzeCJ9