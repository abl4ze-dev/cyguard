import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/scan/URLScanner.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/scan/URLScanner.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { Search, Shield, Loader2, AlertTriangle, CheckCircle, ExternalLink } from "/node_modules/.vite/deps/lucide-react.js?v=76f08321";
import { base44 } from "/src/api/base44Client.js";
import { useMutation, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=95e257e8";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=82de9d48";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import ScoreRing from "/src/components/ui-custom/ScoreRing.jsx";
import { playSafeSound, playDangerSound, playWarnSound } from "/src/utils/scanSounds.js";
export default function URLScanner() {
  _s();
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const queryClient = useQueryClient();
  const scanMutation = useMutation({
    mutationFn: async (targetUrl) => {
      const scan = await base44.entities.ScanResult.create({
        scan_type: "url",
        target: targetUrl,
        status: "scanning"
      });
      const analysis = await base44.integrations.Core.InvokeLLM({
        prompt: `Analyze this URL for cybersecurity threats: "${targetUrl}". 
        Evaluate: phishing risk, malware risk, tracker presence, SSL validity, domain reputation, suspicious redirects.
        Be realistic and provide a thorough security assessment.`,
        response_json_schema: {
          type: "object",
          properties: {
            threat_score: { type: "number", description: "Score 0-100, higher=more dangerous" },
            status: { type: "string", enum: ["safe", "warning", "danger"] },
            ssl_valid: { type: "boolean" },
            phishing_probability: { type: "number" },
            trackers_found: { type: "number" },
            suspicious_scripts: { type: "number" },
            redirects: { type: "number" },
            privacy_score: { type: "number", description: "0-100, higher=better privacy" },
            domain_age_days: { type: "number" },
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
            summary: { type: "string", description: "Brief AI security assessment" }
          }
        }
      });
      const updated = await base44.entities.ScanResult.update(scan.id, {
        threat_score: analysis.threat_score,
        status: analysis.status,
        threats_found: analysis.threats || [],
        ai_summary: analysis.summary,
        details: {
          ssl_valid: analysis.ssl_valid,
          phishing_probability: analysis.phishing_probability,
          trackers_found: analysis.trackers_found,
          suspicious_scripts: analysis.suspicious_scripts,
          redirects: analysis.redirects,
          privacy_score: analysis.privacy_score,
          domain_age_days: analysis.domain_age_days
        }
      });
      return { ...updated, ...analysis };
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
  const handleScan = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setResult(null);
    scanMutation.mutate(url.trim());
  };
  const statusConfig = {
    safe: { color: "text-emerald-400", icon: CheckCircle, label: "Safe" },
    warning: { color: "text-amber-400", icon: AlertTriangle, label: "Warning" },
    danger: { color: "text-red-400", icon: Shield, label: "Dangerous" }
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:101:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/scan/URLScanner:103:6", "data-dynamic-content": "true", hover: false, glow: "blue", children: /* @__PURE__ */ jsxDEV("form", { "data-source-location": "components/scan/URLScanner:104:8", "data-dynamic-content": "true", onSubmit: handleScan, className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:105:10", "data-dynamic-content": "true", className: "flex-1 relative", children: [
        /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "components/scan/URLScanner:106:12", "data-dynamic-content": "false", className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" }, void 0, false, {
          fileName: "/app/src/components/scan/URLScanner.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            "data-source-location": "components/scan/URLScanner:107:12",
            "data-dynamic-content": "true",
            type: "text",
            value: url,
            onChange: (e) => setUrl(e.target.value),
            placeholder: "Enter URL to scan (e.g., https://example.com)",
            className: "w-full pl-12 pr-4 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-sm font-mono"
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/scan/URLScanner.jsx",
            lineNumber: 126,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/scan/URLScanner.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/scan/URLScanner:115:10", "data-dynamic-content": "true", type: "submit", disabled: scanMutation.isPending || !url.trim(), children: [
        scanMutation.isPending ? /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "components/scan/URLScanner:117:14", "data-dynamic-content": "false", className: "w-4 h-4 animate-spin" }, void 0, false, {
          fileName: "/app/src/components/scan/URLScanner.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "components/scan/URLScanner:119:14", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/components/scan/URLScanner.jsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        scanMutation.isPending ? "Scanning..." : "Scan URL"
      ] }, void 0, true, {
        fileName: "/app/src/components/scan/URLScanner.jsx",
        lineNumber: 134,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/scan/URLScanner.jsx",
      lineNumber: 123,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/scan/URLScanner.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "components/scan/URLScanner:127:6", "data-dynamic-content": "true", children: result && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/scan/URLScanner:129:10",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        children: /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/scan/URLScanner:134:12", "data-dynamic-content": "true", hover: false, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:135:14", "data-dynamic-content": "true", className: "flex flex-col md:flex-row gap-8", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:137:16", "data-dynamic-content": "true", className: "flex flex-col items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV(ScoreRing, { "data-source-location": "components/scan/URLScanner:138:18", "data-dynamic-content": "true", score: 100 - (result.threat_score || 0), size: 160, strokeWidth: 12, label: "Safety Score" }, void 0, false, {
              fileName: "/app/src/components/scan/URLScanner.jsx",
              lineNumber: 157,
              columnNumber: 19
            }, this),
            (() => {
              const cfg = statusConfig[result.status] || statusConfig.safe;
              const Icon = cfg.icon;
              return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:143:22", "data-dynamic-content": "true", className: `flex items-center gap-2 ${cfg.color}`, children: [
                /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "components/scan/URLScanner:144:24", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                  fileName: "/app/src/components/scan/URLScanner.jsx",
                  lineNumber: 163,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/scan/URLScanner:145:24", "data-dynamic-content": "true", className: "font-semibold", "data-collection-item-field": "label", "data-collection-item-id": cfg?.id || cfg?._id, children: cfg.label }, void 0, false, {
                  fileName: "/app/src/components/scan/URLScanner.jsx",
                  lineNumber: 164,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/scan/URLScanner.jsx",
                lineNumber: 162,
                columnNumber: 21
              }, this);
            })()
          ] }, void 0, true, {
            fileName: "/app/src/components/scan/URLScanner.jsx",
            lineNumber: 156,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:152:16", "data-dynamic-content": "true", className: "flex-1 space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:153:18", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/scan/URLScanner:154:20", "data-dynamic-content": "false", className: "text-lg font-semibold text-foreground mb-2", children: "AI Analysis" }, void 0, false, {
                fileName: "/app/src/components/scan/URLScanner.jsx",
                lineNumber: 173,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/URLScanner:155:20", "data-dynamic-content": "true", className: "text-sm text-muted-foreground leading-relaxed", children: result.summary || result.ai_summary }, void 0, false, {
                fileName: "/app/src/components/scan/URLScanner.jsx",
                lineNumber: 174,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/scan/URLScanner.jsx",
              lineNumber: 172,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:159:18", "data-dynamic-content": "true", className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
              { label: "SSL", value: result.ssl_valid ? "Valid" : "Invalid", ok: result.ssl_valid },
              { label: "Phishing", value: `${result.phishing_probability || 0}%`, ok: (result.phishing_probability || 0) < 30 },
              { label: "Trackers", value: result.trackers_found || 0, ok: (result.trackers_found || 0) < 3 },
              { label: "Privacy", value: `${result.privacy_score || 0}/100`, ok: (result.privacy_score || 0) > 60 }
            ].map(
              (m) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:166:22", "data-dynamic-content": "true", className: "p-3 rounded-xl bg-secondary/30 text-center", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/URLScanner:167:24", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mb-1", "data-collection-item-field": "label", "data-collection-item-id": m?.id || m?._id, children: m.label }, void 0, false, {
                  fileName: "/app/src/components/scan/URLScanner.jsx",
                  lineNumber: 186,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/URLScanner:168:24", "data-dynamic-content": "true", className: `text-sm font-bold font-mono ${m.ok ? "text-emerald-400" : "text-red-400"}`, "data-collection-item-field": "value", "data-collection-item-id": m?.id || m?._id, children: m.value }, void 0, false, {
                  fileName: "/app/src/components/scan/URLScanner.jsx",
                  lineNumber: 187,
                  columnNumber: 25
                }, this)
              ] }, m.label, true, {
                fileName: "/app/src/components/scan/URLScanner.jsx",
                lineNumber: 185,
                columnNumber: 19
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/components/scan/URLScanner.jsx",
              lineNumber: 178,
              columnNumber: 19
            }, this),
            result.threats && result.threats.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:177:20", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/scan/URLScanner:178:22", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground mb-2", children: "Threats Detected" }, void 0, false, {
                fileName: "/app/src/components/scan/URLScanner.jsx",
                lineNumber: 197,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:179:22", "data-dynamic-content": "true", className: "space-y-2", "data-collection-item-field": "threats", "data-collection-item-id": result?.id || result?._id, children: result.threats.map(
                (t, i) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:181:26", "data-dynamic-content": "true", className: "flex items-start gap-2 p-2 rounded-lg bg-red-400/5 border border-red-400/10", children: [
                  /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "components/scan/URLScanner:182:28", "data-dynamic-content": "false", className: "w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" }, void 0, false, {
                    fileName: "/app/src/components/scan/URLScanner.jsx",
                    lineNumber: 201,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/scan/URLScanner:183:28", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/URLScanner:184:30", "data-dynamic-content": "true", className: "text-sm text-foreground font-medium", "data-collection-item-field": "type", "data-collection-item-id": t?.id || t?._id, children: t.type }, void 0, false, {
                      fileName: "/app/src/components/scan/URLScanner.jsx",
                      lineNumber: 203,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/scan/URLScanner:185:30", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", "data-collection-item-field": "description", "data-collection-item-id": t?.id || t?._id, children: t.description }, void 0, false, {
                      fileName: "/app/src/components/scan/URLScanner.jsx",
                      lineNumber: 204,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/scan/URLScanner.jsx",
                    lineNumber: 202,
                    columnNumber: 29
                  }, this)
                ] }, i, true, {
                  fileName: "/app/src/components/scan/URLScanner.jsx",
                  lineNumber: 200,
                  columnNumber: 21
                }, this)
              ) }, void 0, false, {
                fileName: "/app/src/components/scan/URLScanner.jsx",
                lineNumber: 198,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/scan/URLScanner.jsx",
              lineNumber: 196,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/scan/URLScanner.jsx",
            lineNumber: 171,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/scan/URLScanner.jsx",
          lineNumber: 154,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/components/scan/URLScanner.jsx",
          lineNumber: 153,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/src/components/scan/URLScanner.jsx",
        lineNumber: 148,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/components/scan/URLScanner.jsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/scan/URLScanner.jsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}
_s(URLScanner, "YcavQkP9b7n9lxKJGplLNv1HCOk=", false, function() {
  return [useQueryClient, useMutation];
});
_c = URLScanner;
var _c;
$RefreshReg$(_c, "URLScanner");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/scan/URLScanner.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/scan/URLScanner.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBeUdZOzs7Ozs7Ozs7Ozs7Ozs7OztBQXpHWixPQUFPQSxTQUFTQyxnQkFBZ0I7QUFDaEMsU0FBU0MsUUFBUUMsUUFBUUMsU0FBU0MsZUFBZUMsYUFBYUMsb0JBQW9CO0FBQ2xGLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsYUFBYUMsc0JBQXNCO0FBQzVDLFNBQVNDLFFBQVFDLHVCQUF1QjtBQUN4QyxPQUFPQyxnQkFBZ0I7QUFDdkIsT0FBT0MsZUFBZTtBQUN0QixPQUFPQyxlQUFlO0FBQ3RCLFNBQVNDLGVBQWVDLGlCQUFpQkMscUJBQXFCO0FBRTlELHdCQUF3QkMsYUFBYTtBQUFBQyxLQUFBO0FBQ25DLFFBQU0sQ0FBQ0MsS0FBS0MsTUFBTSxJQUFJckIsU0FBUyxFQUFFO0FBQ2pDLFFBQU0sQ0FBQ3NCLFFBQVFDLFNBQVMsSUFBSXZCLFNBQVMsSUFBSTtBQUN6QyxRQUFNd0IsY0FBY2YsZUFBZTtBQUVuQyxRQUFNZ0IsZUFBZWpCLFlBQVk7QUFBQSxJQUMvQmtCLFlBQVksT0FBT0MsY0FBYztBQUUvQixZQUFNQyxPQUFPLE1BQU1yQixPQUFPc0IsU0FBU0MsV0FBV0MsT0FBTztBQUFBLFFBQ25EQyxXQUFXO0FBQUEsUUFDWEMsUUFBUU47QUFBQUEsUUFDUk8sUUFBUTtBQUFBLE1BQ1YsQ0FBQztBQUdELFlBQU1DLFdBQVcsTUFBTTVCLE9BQU82QixhQUFhQyxLQUFLQyxVQUFVO0FBQUEsUUFDeERDLFFBQVEsZ0RBQWdEWixTQUFTO0FBQUE7QUFBQTtBQUFBLFFBR2pFYSxzQkFBc0I7QUFBQSxVQUNwQkMsTUFBTTtBQUFBLFVBQ05DLFlBQVk7QUFBQSxZQUNWQyxjQUFjLEVBQUVGLE1BQU0sVUFBVUcsYUFBYSxxQ0FBcUM7QUFBQSxZQUNsRlYsUUFBUSxFQUFFTyxNQUFNLFVBQVVJLE1BQU0sQ0FBQyxRQUFRLFdBQVcsUUFBUSxFQUFFO0FBQUEsWUFDOURDLFdBQVcsRUFBRUwsTUFBTSxVQUFVO0FBQUEsWUFDN0JNLHNCQUFzQixFQUFFTixNQUFNLFNBQVM7QUFBQSxZQUN2Q08sZ0JBQWdCLEVBQUVQLE1BQU0sU0FBUztBQUFBLFlBQ2pDUSxvQkFBb0IsRUFBRVIsTUFBTSxTQUFTO0FBQUEsWUFDckNTLFdBQVcsRUFBRVQsTUFBTSxTQUFTO0FBQUEsWUFDNUJVLGVBQWUsRUFBRVYsTUFBTSxVQUFVRyxhQUFhLCtCQUErQjtBQUFBLFlBQzdFUSxpQkFBaUIsRUFBRVgsTUFBTSxTQUFTO0FBQUEsWUFDbENZLFNBQVM7QUFBQSxjQUNQWixNQUFNO0FBQUEsY0FDTmEsT0FBTztBQUFBLGdCQUNMYixNQUFNO0FBQUEsZ0JBQ05DLFlBQVk7QUFBQSxrQkFDVkQsTUFBTSxFQUFFQSxNQUFNLFNBQVM7QUFBQSxrQkFDdkJjLFVBQVUsRUFBRWQsTUFBTSxVQUFVSSxNQUFNLENBQUMsT0FBTyxVQUFVLFFBQVEsVUFBVSxFQUFFO0FBQUEsa0JBQ3hFRCxhQUFhLEVBQUVILE1BQU0sU0FBUztBQUFBLGdCQUNoQztBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQWUsU0FBUyxFQUFFZixNQUFNLFVBQVVHLGFBQWEsK0JBQStCO0FBQUEsVUFDekU7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBR0QsWUFBTWEsVUFBVSxNQUFNbEQsT0FBT3NCLFNBQVNDLFdBQVc0QixPQUFPOUIsS0FBSytCLElBQUk7QUFBQSxRQUMvRGhCLGNBQWNSLFNBQVNRO0FBQUFBLFFBQ3ZCVCxRQUFRQyxTQUFTRDtBQUFBQSxRQUNqQjBCLGVBQWV6QixTQUFTa0IsV0FBVztBQUFBLFFBQ25DUSxZQUFZMUIsU0FBU3FCO0FBQUFBLFFBQ3JCTSxTQUFTO0FBQUEsVUFDUGhCLFdBQVdYLFNBQVNXO0FBQUFBLFVBQ3BCQyxzQkFBc0JaLFNBQVNZO0FBQUFBLFVBQy9CQyxnQkFBZ0JiLFNBQVNhO0FBQUFBLFVBQ3pCQyxvQkFBb0JkLFNBQVNjO0FBQUFBLFVBQzdCQyxXQUFXZixTQUFTZTtBQUFBQSxVQUNwQkMsZUFBZWhCLFNBQVNnQjtBQUFBQSxVQUN4QkMsaUJBQWlCakIsU0FBU2lCO0FBQUFBLFFBQzVCO0FBQUEsTUFDRixDQUFDO0FBRUQsYUFBTyxFQUFFLEdBQUdLLFNBQVMsR0FBR3RCLFNBQVM7QUFBQSxJQUNuQztBQUFBLElBQ0E0QixXQUFXQSxDQUFDQyxTQUFTO0FBQ25CekMsZ0JBQVV5QyxJQUFJO0FBQ2QsVUFBSUEsS0FBSzlCLFdBQVcsT0FBUW5CLGVBQWM7QUFBQSxlQUN0Q2lELEtBQUs5QixXQUFXLFVBQVdqQixlQUFjO0FBQUE7QUFDN0NELHdCQUFnQjtBQUNoQlEsa0JBQVl5QyxrQkFBa0IsRUFBRUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzNEMUMsa0JBQVl5QyxrQkFBa0IsRUFBRUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQUEsSUFDMUQ7QUFBQSxFQUNGLENBQUM7QUFFRCxRQUFNQyxhQUFhQSxDQUFDQyxNQUFNO0FBQ3hCQSxNQUFFQyxlQUFlO0FBQ2pCLFFBQUksQ0FBQ2pELElBQUlrRCxLQUFLLEVBQUc7QUFDakIvQyxjQUFVLElBQUk7QUFDZEUsaUJBQWE4QyxPQUFPbkQsSUFBSWtELEtBQUssQ0FBQztBQUFBLEVBQ2hDO0FBRUEsUUFBTUUsZUFBZTtBQUFBLElBQ25CQyxNQUFNLEVBQUVDLE9BQU8sb0JBQW9CQyxNQUFNdEUsYUFBYXVFLE9BQU8sT0FBTztBQUFBLElBQ3BFQyxTQUFTLEVBQUVILE9BQU8sa0JBQWtCQyxNQUFNdkUsZUFBZXdFLE9BQU8sVUFBVTtBQUFBLElBQzFFRSxRQUFRLEVBQUVKLE9BQU8sZ0JBQWdCQyxNQUFNekUsUUFBUTBFLE9BQU8sWUFBWTtBQUFBLEVBQ3BFO0FBRUEsU0FDRSx1QkFBQyxTQUFJLHdCQUFxQixvQ0FBbUMsd0JBQXFCLFFBQU8sV0FBVSxhQUVqRztBQUFBLDJCQUFDLGFBQVUsd0JBQXFCLG9DQUFtQyx3QkFBcUIsUUFBTyxPQUFPLE9BQU8sTUFBSyxRQUNoSCxpQ0FBQyxVQUFLLHdCQUFxQixvQ0FBbUMsd0JBQXFCLFFBQU8sVUFBVVQsWUFBWSxXQUFVLG1DQUN4SDtBQUFBLDZCQUFDLFNBQUksd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxXQUFVLG1CQUNsRztBQUFBLCtCQUFDLFVBQU8sd0JBQXFCLHFDQUFvQyx3QkFBcUIsU0FBUSxXQUFVLDRFQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWdMO0FBQUEsUUFDaEw7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUFNLHdCQUFxQjtBQUFBLFlBQW9DLHdCQUFxQjtBQUFBLFlBQ3JGLE1BQUs7QUFBQSxZQUNMLE9BQU8vQztBQUFBQSxZQUNQLFVBQVUsQ0FBQ2dELE1BQU0vQyxPQUFPK0MsRUFBRW5DLE9BQU84QyxLQUFLO0FBQUEsWUFDdEMsYUFBWTtBQUFBLFlBQ1osV0FBVTtBQUFBO0FBQUEsVUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLc087QUFBQSxXQVB4TztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBU0E7QUFBQSxNQUNBLHVCQUFDLGNBQVcsd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxNQUFLLFVBQVMsVUFBVXRELGFBQWF1RCxhQUFhLENBQUM1RCxJQUFJa0QsS0FBSyxHQUMxSjdDO0FBQUFBLHFCQUFhdUQsWUFDZCx1QkFBQyxXQUFRLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFNBQVEsV0FBVSwwQkFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUErSCxJQUUvSCx1QkFBQyxVQUFPLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFNBQVEsV0FBVSxhQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlIO0FBQUEsUUFFaEh2RCxhQUFhdUQsWUFBWSxnQkFBZ0I7QUFBQSxXQU41QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBT0E7QUFBQSxTQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBbUJBLEtBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FxQkE7QUFBQSxJQUdBLHVCQUFDLG1CQUFnQix3QkFBcUIsb0NBQW1DLHdCQUFxQixRQUMzRjFELG9CQUNEO0FBQUEsTUFBQyxPQUFPO0FBQUEsTUFBUDtBQUFBLFFBQVcsd0JBQXFCO0FBQUEsUUFBb0Msd0JBQXFCO0FBQUEsUUFDMUYsU0FBUyxFQUFFMkQsU0FBUyxHQUFHQyxHQUFHLEdBQUc7QUFBQSxRQUM3QixTQUFTLEVBQUVELFNBQVMsR0FBR0MsR0FBRyxFQUFFO0FBQUEsUUFDNUIsTUFBTSxFQUFFRCxTQUFTLEdBQUdDLEdBQUcsSUFBSTtBQUFBLFFBRXZCLGlDQUFDLGFBQVUsd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxPQUFPLE9BQ3JHLGlDQUFDLFNBQUksd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxXQUFVLG1DQUVsRztBQUFBLGlDQUFDLFNBQUksd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxXQUFVLG9DQUNsRztBQUFBLG1DQUFDLGFBQVUsd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxPQUFPLE9BQU81RCxPQUFPcUIsZ0JBQWdCLElBQUksTUFBTSxLQUFLLGFBQWEsSUFBSSxPQUFNLGtCQUEzSztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF5TDtBQUFBLGFBQ3ZMLE1BQU07QUFDUixvQkFBTXdDLE1BQU1YLGFBQWFsRCxPQUFPWSxNQUFNLEtBQUtzQyxhQUFhQztBQUN4RCxvQkFBTVcsT0FBT0QsSUFBSVI7QUFDakIscUJBQ0UsdUJBQUMsU0FBSSx3QkFBcUIscUNBQW9DLHdCQUFxQixRQUFPLFdBQVcsMkJBQTJCUSxJQUFJVCxLQUFLLElBQ3JJO0FBQUEsdUNBQUMsUUFBSyx3QkFBcUIscUNBQW9DLHdCQUFxQixTQUFRLFdBQVUsYUFBdEc7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBK0c7QUFBQSxnQkFDL0csdUJBQUMsVUFBSyx3QkFBcUIscUNBQW9DLHdCQUFxQixRQUFPLFdBQVUsaUJBQWdCLDhCQUEyQixTQUFRLDJCQUF5QlMsS0FBS3hCLE1BQU13QixLQUFLRSxLQUFNRixjQUFJUCxTQUEzTTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFpTjtBQUFBLG1CQUZyTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdFO0FBQUEsWUFFTixHQUFHO0FBQUEsZUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVlBO0FBQUEsVUFHQSx1QkFBQyxTQUFJLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFFBQU8sV0FBVSxvQkFDbEc7QUFBQSxtQ0FBQyxTQUFJLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFFBQ2pGO0FBQUEscUNBQUMsUUFBRyx3QkFBcUIscUNBQW9DLHdCQUFxQixTQUFRLFdBQVUsOENBQTZDLDJCQUFqSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE0SjtBQUFBLGNBQzVKLHVCQUFDLE9BQUUsd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxXQUFVLGlEQUFpRHRELGlCQUFPa0MsV0FBV2xDLE9BQU91QyxjQUE1SztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF1TDtBQUFBLGlCQUZ6TDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsWUFHQSx1QkFBQyxTQUFJLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFFBQU8sV0FBVSx5Q0FDakc7QUFBQSxjQUNILEVBQUVlLE9BQU8sT0FBT0csT0FBT3pELE9BQU93QixZQUFZLFVBQVUsV0FBV3dDLElBQUloRSxPQUFPd0IsVUFBVTtBQUFBLGNBQ3BGLEVBQUU4QixPQUFPLFlBQVlHLE9BQU8sR0FBR3pELE9BQU95Qix3QkFBd0IsQ0FBQyxLQUFLdUMsS0FBS2hFLE9BQU95Qix3QkFBd0IsS0FBSyxHQUFHO0FBQUEsY0FDaEgsRUFBRTZCLE9BQU8sWUFBWUcsT0FBT3pELE9BQU8wQixrQkFBa0IsR0FBR3NDLEtBQUtoRSxPQUFPMEIsa0JBQWtCLEtBQUssRUFBRTtBQUFBLGNBQzdGLEVBQUU0QixPQUFPLFdBQVdHLE9BQU8sR0FBR3pELE9BQU82QixpQkFBaUIsQ0FBQyxRQUFRbUMsS0FBS2hFLE9BQU82QixpQkFBaUIsS0FBSyxHQUFHO0FBQUEsWUFBQyxFQUNyR29DO0FBQUFBLGNBQUksQ0FBQ0MsTUFDTCx1QkFBQyxTQUFJLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFFBQXFCLFdBQVUsOENBQzVHO0FBQUEsdUNBQUMsT0FBRSx3QkFBcUIscUNBQW9DLHdCQUFxQixRQUFPLFdBQVUsc0NBQXFDLDhCQUEyQixTQUFRLDJCQUF5QkEsR0FBRzdCLE1BQU02QixHQUFHSCxLQUFNRyxZQUFFWixTQUF2TjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE2TjtBQUFBLGdCQUM3Tix1QkFBQyxPQUFFLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFFBQU8sV0FBVywrQkFBK0JZLEVBQUVGLEtBQUsscUJBQXFCLGNBQWMsSUFBSSw4QkFBMkIsU0FBUSwyQkFBeUJFLEdBQUc3QixNQUFNNkIsR0FBR0gsS0FDclBHLFlBQUVULFNBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBLG1CQUp5RlMsRUFBRVosT0FBakc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFLSTtBQUFBLFlBQ0osS0FiQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWNBO0FBQUEsWUFHQ3RELE9BQU8rQixXQUFXL0IsT0FBTytCLFFBQVFvQyxTQUFTLEtBQzdDLHVCQUFDLFNBQUksd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFDN0U7QUFBQSxxQ0FBQyxRQUFHLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFNBQVEsV0FBVSw4Q0FBNkMsZ0NBQWpKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWlLO0FBQUEsY0FDakssdUJBQUMsU0FBSSx3QkFBcUIscUNBQW9DLHdCQUFxQixRQUFPLFdBQVUsYUFBWSw4QkFBMkIsV0FBVSwyQkFBeUJuRSxRQUFRcUMsTUFBTXJDLFFBQVErRCxLQUNqTS9ELGlCQUFPK0IsUUFBUWtDO0FBQUFBLGdCQUFJLENBQUNHLEdBQUdDLE1BQzVCLHVCQUFDLFNBQUksd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBZSxXQUFVLCtFQUNwRztBQUFBLHlDQUFDLGlCQUFjLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFNBQVEsV0FBVSwrQ0FBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBMEo7QUFBQSxrQkFDMUosdUJBQUMsU0FBSSx3QkFBcUIscUNBQW9DLHdCQUFxQixRQUNqRjtBQUFBLDJDQUFDLE9BQUUsd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxXQUFVLHVDQUFzQyw4QkFBMkIsUUFBTywyQkFBeUJELEdBQUcvQixNQUFNK0IsR0FBR0wsS0FBTUssWUFBRWpELFFBQXZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTROO0FBQUEsb0JBQzVOLHVCQUFDLE9BQUUsd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxXQUFVLGlDQUFnQyw4QkFBMkIsZUFBYywyQkFBeUJpRCxHQUFHL0IsTUFBTStCLEdBQUdMLEtBQU1LLFlBQUU5QyxlQUF4TjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFvTztBQUFBLHVCQUZ0TztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUdBO0FBQUEscUJBTHVGK0MsR0FBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFNTTtBQUFBLGNBQ04sS0FURTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVVBO0FBQUEsaUJBWk47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFhSTtBQUFBLGVBdENKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBd0NBO0FBQUEsYUF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTBEQSxLQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNERBO0FBQUE7QUFBQSxNQWpFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFrRUUsS0FwRUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXNFQTtBQUFBLE9BaEdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FpR0E7QUFFSjtBQUFDeEUsR0E3THVCRCxZQUFVO0FBQUEsVUFHWlQsZ0JBRUNELFdBQVc7QUFBQTtBQUFBLEtBTFZVO0FBQVUsSUFBQTBFO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTZWFyY2giLCJTaGllbGQiLCJMb2FkZXIyIiwiQWxlcnRUcmlhbmdsZSIsIkNoZWNrQ2lyY2xlIiwiRXh0ZXJuYWxMaW5rIiwiYmFzZTQ0IiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeUNsaWVudCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIk5lb25CdXR0b24iLCJHbGFzc0NhcmQiLCJTY29yZVJpbmciLCJwbGF5U2FmZVNvdW5kIiwicGxheURhbmdlclNvdW5kIiwicGxheVdhcm5Tb3VuZCIsIlVSTFNjYW5uZXIiLCJfcyIsInVybCIsInNldFVybCIsInJlc3VsdCIsInNldFJlc3VsdCIsInF1ZXJ5Q2xpZW50Iiwic2Nhbk11dGF0aW9uIiwibXV0YXRpb25GbiIsInRhcmdldFVybCIsInNjYW4iLCJlbnRpdGllcyIsIlNjYW5SZXN1bHQiLCJjcmVhdGUiLCJzY2FuX3R5cGUiLCJ0YXJnZXQiLCJzdGF0dXMiLCJhbmFseXNpcyIsImludGVncmF0aW9ucyIsIkNvcmUiLCJJbnZva2VMTE0iLCJwcm9tcHQiLCJyZXNwb25zZV9qc29uX3NjaGVtYSIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidGhyZWF0X3Njb3JlIiwiZGVzY3JpcHRpb24iLCJlbnVtIiwic3NsX3ZhbGlkIiwicGhpc2hpbmdfcHJvYmFiaWxpdHkiLCJ0cmFja2Vyc19mb3VuZCIsInN1c3BpY2lvdXNfc2NyaXB0cyIsInJlZGlyZWN0cyIsInByaXZhY3lfc2NvcmUiLCJkb21haW5fYWdlX2RheXMiLCJ0aHJlYXRzIiwiaXRlbXMiLCJzZXZlcml0eSIsInN1bW1hcnkiLCJ1cGRhdGVkIiwidXBkYXRlIiwiaWQiLCJ0aHJlYXRzX2ZvdW5kIiwiYWlfc3VtbWFyeSIsImRldGFpbHMiLCJvblN1Y2Nlc3MiLCJkYXRhIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJxdWVyeUtleSIsImhhbmRsZVNjYW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibXV0YXRlIiwic3RhdHVzQ29uZmlnIiwic2FmZSIsImNvbG9yIiwiaWNvbiIsImxhYmVsIiwid2FybmluZyIsImRhbmdlciIsInZhbHVlIiwiaXNQZW5kaW5nIiwib3BhY2l0eSIsInkiLCJjZmciLCJJY29uIiwiX2lkIiwib2siLCJtYXAiLCJtIiwibGVuZ3RoIiwidCIsImkiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJVUkxTY2FubmVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWFyY2gsIFNoaWVsZCwgTG9hZGVyMiwgQWxlcnRUcmlhbmdsZSwgQ2hlY2tDaXJjbGUsIEV4dGVybmFsTGluayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tICdAL2FwaS9iYXNlNDRDbGllbnQnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgTmVvbkJ1dHRvbiBmcm9tICcuLi91aS1jdXN0b20vTmVvbkJ1dHRvbic7XG5pbXBvcnQgR2xhc3NDYXJkIGZyb20gJy4uL3VpLWN1c3RvbS9HbGFzc0NhcmQnO1xuaW1wb3J0IFNjb3JlUmluZyBmcm9tICcuLi91aS1jdXN0b20vU2NvcmVSaW5nJztcbmltcG9ydCB7IHBsYXlTYWZlU291bmQsIHBsYXlEYW5nZXJTb3VuZCwgcGxheVdhcm5Tb3VuZCB9IGZyb20gJ0AvdXRpbHMvc2NhblNvdW5kcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVSTFNjYW5uZXIoKSB7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gIGNvbnN0IHNjYW5NdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbkZuOiBhc3luYyAodGFyZ2V0VXJsKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgaW5pdGlhbCBzY2FuIHJlY29yZFxuICAgICAgY29uc3Qgc2NhbiA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5TY2FuUmVzdWx0LmNyZWF0ZSh7XG4gICAgICAgIHNjYW5fdHlwZTogJ3VybCcsXG4gICAgICAgIHRhcmdldDogdGFyZ2V0VXJsLFxuICAgICAgICBzdGF0dXM6ICdzY2FubmluZydcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBSS1wb3dlcmVkIGFuYWx5c2lzXG4gICAgICBjb25zdCBhbmFseXNpcyA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgICBwcm9tcHQ6IGBBbmFseXplIHRoaXMgVVJMIGZvciBjeWJlcnNlY3VyaXR5IHRocmVhdHM6IFwiJHt0YXJnZXRVcmx9XCIuIFxuICAgICAgICBFdmFsdWF0ZTogcGhpc2hpbmcgcmlzaywgbWFsd2FyZSByaXNrLCB0cmFja2VyIHByZXNlbmNlLCBTU0wgdmFsaWRpdHksIGRvbWFpbiByZXB1dGF0aW9uLCBzdXNwaWNpb3VzIHJlZGlyZWN0cy5cbiAgICAgICAgQmUgcmVhbGlzdGljIGFuZCBwcm92aWRlIGEgdGhvcm91Z2ggc2VjdXJpdHkgYXNzZXNzbWVudC5gLFxuICAgICAgICByZXNwb25zZV9qc29uX3NjaGVtYToge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRocmVhdF9zY29yZTogeyB0eXBlOiAnbnVtYmVyJywgZGVzY3JpcHRpb246ICdTY29yZSAwLTEwMCwgaGlnaGVyPW1vcmUgZGFuZ2Vyb3VzJyB9LFxuICAgICAgICAgICAgc3RhdHVzOiB7IHR5cGU6ICdzdHJpbmcnLCBlbnVtOiBbJ3NhZmUnLCAnd2FybmluZycsICdkYW5nZXInXSB9LFxuICAgICAgICAgICAgc3NsX3ZhbGlkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgICAgcGhpc2hpbmdfcHJvYmFiaWxpdHk6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICAgIHRyYWNrZXJzX2ZvdW5kOiB7IHR5cGU6ICdudW1iZXInIH0sXG4gICAgICAgICAgICBzdXNwaWNpb3VzX3NjcmlwdHM6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICAgIHJlZGlyZWN0czogeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgcHJpdmFjeV9zY29yZTogeyB0eXBlOiAnbnVtYmVyJywgZGVzY3JpcHRpb246ICcwLTEwMCwgaGlnaGVyPWJldHRlciBwcml2YWN5JyB9LFxuICAgICAgICAgICAgZG9tYWluX2FnZV9kYXlzOiB7IHR5cGU6ICdudW1iZXInIH0sXG4gICAgICAgICAgICB0aHJlYXRzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICAgICAgc2V2ZXJpdHk6IHsgdHlwZTogJ3N0cmluZycsIGVudW06IFsnbG93JywgJ21lZGl1bScsICdoaWdoJywgJ2NyaXRpY2FsJ10gfSxcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdW1tYXJ5OiB7IHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ0JyaWVmIEFJIHNlY3VyaXR5IGFzc2Vzc21lbnQnIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgc2NhbiB3aXRoIHJlc3VsdHNcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuU2NhblJlc3VsdC51cGRhdGUoc2Nhbi5pZCwge1xuICAgICAgICB0aHJlYXRfc2NvcmU6IGFuYWx5c2lzLnRocmVhdF9zY29yZSxcbiAgICAgICAgc3RhdHVzOiBhbmFseXNpcy5zdGF0dXMsXG4gICAgICAgIHRocmVhdHNfZm91bmQ6IGFuYWx5c2lzLnRocmVhdHMgfHwgW10sXG4gICAgICAgIGFpX3N1bW1hcnk6IGFuYWx5c2lzLnN1bW1hcnksXG4gICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICBzc2xfdmFsaWQ6IGFuYWx5c2lzLnNzbF92YWxpZCxcbiAgICAgICAgICBwaGlzaGluZ19wcm9iYWJpbGl0eTogYW5hbHlzaXMucGhpc2hpbmdfcHJvYmFiaWxpdHksXG4gICAgICAgICAgdHJhY2tlcnNfZm91bmQ6IGFuYWx5c2lzLnRyYWNrZXJzX2ZvdW5kLFxuICAgICAgICAgIHN1c3BpY2lvdXNfc2NyaXB0czogYW5hbHlzaXMuc3VzcGljaW91c19zY3JpcHRzLFxuICAgICAgICAgIHJlZGlyZWN0czogYW5hbHlzaXMucmVkaXJlY3RzLFxuICAgICAgICAgIHByaXZhY3lfc2NvcmU6IGFuYWx5c2lzLnByaXZhY3lfc2NvcmUsXG4gICAgICAgICAgZG9tYWluX2FnZV9kYXlzOiBhbmFseXNpcy5kb21haW5fYWdlX2RheXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IC4uLnVwZGF0ZWQsIC4uLmFuYWx5c2lzIH07XG4gICAgfSxcbiAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICBzZXRSZXN1bHQoZGF0YSk7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzYWZlJykgcGxheVNhZmVTb3VuZCgpO2Vsc2VcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3dhcm5pbmcnKSBwbGF5V2FyblNvdW5kKCk7ZWxzZVxuICAgICAgcGxheURhbmdlclNvdW5kKCk7XG4gICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbJ3JlY2VudFNjYW5zJ10gfSk7XG4gICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbJ2FsbFNjYW5zJ10gfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTY2FuID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF1cmwudHJpbSgpKSByZXR1cm47XG4gICAgc2V0UmVzdWx0KG51bGwpO1xuICAgIHNjYW5NdXRhdGlvbi5tdXRhdGUodXJsLnRyaW0oKSk7XG4gIH07XG5cbiAgY29uc3Qgc3RhdHVzQ29uZmlnID0ge1xuICAgIHNhZmU6IHsgY29sb3I6ICd0ZXh0LWVtZXJhbGQtNDAwJywgaWNvbjogQ2hlY2tDaXJjbGUsIGxhYmVsOiAnU2FmZScgfSxcbiAgICB3YXJuaW5nOiB7IGNvbG9yOiAndGV4dC1hbWJlci00MDAnLCBpY29uOiBBbGVydFRyaWFuZ2xlLCBsYWJlbDogJ1dhcm5pbmcnIH0sXG4gICAgZGFuZ2VyOiB7IGNvbG9yOiAndGV4dC1yZWQtNDAwJywgaWNvbjogU2hpZWxkLCBsYWJlbDogJ0Rhbmdlcm91cycgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjEwMTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICB7LyogU2VhcmNoIEZvcm0gKi99XG4gICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTAzOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9IGdsb3c9XCJibHVlXCI+XG4gICAgICAgIDxmb3JtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTA0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvblN1Ym1pdD17aGFuZGxlU2Nhbn0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtM1wiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxMDU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTEgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxMDY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTUgaC01IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxMDc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVVJMIHRvIHNjYW4gKGUuZy4sIGh0dHBzOi8vZXhhbXBsZS5jb20pXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwbC0xMiBwci00IHB5LTMuNSByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS81MCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzUwIGZvY3VzOmJvcmRlci1wcmltYXJ5LzUwIHRleHQtc20gZm9udC1tb25vXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTE1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzY2FuTXV0YXRpb24uaXNQZW5kaW5nIHx8ICF1cmwudHJpbSgpfT5cbiAgICAgICAgICAgIHtzY2FuTXV0YXRpb24uaXNQZW5kaW5nID9cbiAgICAgICAgICAgIDxMb2FkZXIyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTE3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgYW5pbWF0ZS1zcGluXCIgLz4gOlxuXG4gICAgICAgICAgICA8U2hpZWxkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTE5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NjYW5NdXRhdGlvbi5pc1BlbmRpbmcgPyAnU2Nhbm5pbmcuLi4nIDogJ1NjYW4gVVJMJ31cbiAgICAgICAgICA8L05lb25CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvR2xhc3NDYXJkPlxuXG4gICAgICB7LyogUmVzdWx0cyAqL31cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxMjc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICB7cmVzdWx0ICYmXG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTI5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX0+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTM0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjEzNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICB7LyogU2NvcmUgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjEzNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8U2NvcmVSaW5nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTM4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc2NvcmU9ezEwMCAtIChyZXN1bHQudGhyZWF0X3Njb3JlIHx8IDApfSBzaXplPXsxNjB9IHN0cm9rZVdpZHRoPXsxMn0gbGFiZWw9XCJTYWZldHkgU2NvcmVcIiAvPlxuICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjZmcgPSBzdGF0dXNDb25maWdbcmVzdWx0LnN0YXR1c10gfHwgc3RhdHVzQ29uZmlnLnNhZmU7XG4gICAgICAgICAgICAgICAgICBjb25zdCBJY29uID0gY2ZnLmljb247XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTQzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgJHtjZmcuY29sb3J9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjE0NDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTQ1OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibGFiZWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y2ZnPy5pZCB8fCBjZmc/Ll9pZH0+e2NmZy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcblxuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogRGV0YWlscyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTUyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjE1MzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxNTQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCI+QUkgQW5hbHlzaXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjE1NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiPntyZXN1bHQuc3VtbWFyeSB8fCByZXN1bHQuYWlfc3VtbWFyeX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIE1ldHJpY3MgR3JpZCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxNTk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy00IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU1NMJywgdmFsdWU6IHJlc3VsdC5zc2xfdmFsaWQgPyAnVmFsaWQnIDogJ0ludmFsaWQnLCBvazogcmVzdWx0LnNzbF92YWxpZCB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1BoaXNoaW5nJywgdmFsdWU6IGAke3Jlc3VsdC5waGlzaGluZ19wcm9iYWJpbGl0eSB8fCAwfSVgLCBvazogKHJlc3VsdC5waGlzaGluZ19wcm9iYWJpbGl0eSB8fCAwKSA8IDMwIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnVHJhY2tlcnMnLCB2YWx1ZTogcmVzdWx0LnRyYWNrZXJzX2ZvdW5kIHx8IDAsIG9rOiAocmVzdWx0LnRyYWNrZXJzX2ZvdW5kIHx8IDApIDwgMyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1ByaXZhY3knLCB2YWx1ZTogYCR7cmVzdWx0LnByaXZhY3lfc2NvcmUgfHwgMH0vMTAwYCwgb2s6IChyZXN1bHQucHJpdmFjeV9zY29yZSB8fCAwKSA+IDYwIH1dLlxuICAgICAgICAgICAgICAgICAgbWFwKChtKSA9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjE2NjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17bS5sYWJlbH0gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzMwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjE2NzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e20/LmlkIHx8IG0/Ll9pZH0+e20ubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxNjg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtYm9sZCBmb250LW1vbm8gJHttLm9rID8gJ3RleHQtZW1lcmFsZC00MDAnIDogJ3RleHQtcmVkLTQwMCd9YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ2YWx1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXttPy5pZCB8fCBtPy5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIFRocmVhdHMgKi99XG4gICAgICAgICAgICAgICAgICB7cmVzdWx0LnRocmVhdHMgJiYgcmVzdWx0LnRocmVhdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxNzc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxNzg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCI+VGhyZWF0cyBEZXRlY3RlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjE3OToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGhyZWF0c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN1bHQ/LmlkIHx8IHJlc3VsdD8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQudGhyZWF0cy5tYXAoKHQsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcjoxODE6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgcC0yIHJvdW5kZWQtbGcgYmctcmVkLTQwMC81IGJvcmRlciBib3JkZXItcmVkLTQwMC8xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTgyOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1yZWQtNDAwIG10LTAuNSBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9zY2FuL1VSTFNjYW5uZXI6MTgzOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjE4NDozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0eXBlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Q/LmlkIHx8IHQ/Ll9pZH0+e3QudHlwZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyOjE4NTozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXNjcmlwdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0Py5pZCB8fCB0Py5faWR9Pnt0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvc2Nhbi9VUkxTY2FubmVyLmpzeCJ9