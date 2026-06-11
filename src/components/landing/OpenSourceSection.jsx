import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/OpenSourceSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/OpenSourceSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
import { Code2, Download, Heart, Users, Star, Loader2, CheckCircle2 } from "/node_modules/.vite/deps/lucide-react.js?v=ef8b20f3";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
import { downloadSourceCode } from "/src/utils/sourceDownload.js?t=1781203789212";
const stats = [
  { icon: Code2, label: "Open Source", value: "100%" },
  { icon: Heart, label: "Free Forever", value: "Always" },
  { icon: Users, label: "Community", value: "Driven" },
  { icon: Star, label: "MIT License", value: "Free Use" }
];
export default function OpenSourceSection() {
  _s();
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const handleDownload = async () => {
    if (status === "downloading") return;
    setStatus("downloading");
    setProgress(0);
    await downloadSourceCode((pct) => setProgress(pct));
    setStatus("done");
    setTimeout(() => setStatus("idle"), 3e3);
  };
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/OpenSourceSection:28:4", "data-dynamic-content": "true", className: "py-20 px-4 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:29:6", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" }, void 0, false, {
      fileName: "/app/src/components/landing/OpenSourceSection.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:30:6", "data-dynamic-content": "true", className: "max-w-5xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/OpenSourceSection:33:8",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:39:10", "data-dynamic-content": "false", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6", children: [
              /* @__PURE__ */ jsxDEV(Code2, { "data-source-location": "components/landing/OpenSourceSection:40:12", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 59,
                columnNumber: 13
              }, this),
              "Open Source"
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/OpenSourceSection:43:10", "data-dynamic-content": "false", className: "text-3xl md:text-5xl font-bold mb-5", children: [
              "Built for the ",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/OpenSourceSection:44:26", "data-dynamic-content": "false", className: "gradient-text", children: "Community" }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 63,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/OpenSourceSection:46:10", "data-dynamic-content": "false", className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "CYGUARD is fully open source. Download the complete source code instantly — no GitHub account needed. Inspect, modify, and build on top of it freely." }, void 0, false, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/landing/OpenSourceSection.jsx",
          lineNumber: 52,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/OpenSourceSection:52:8",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",
          children: stats.map(
            (s, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:60:12", "data-dynamic-content": "true", className: "glass rounded-xl p-5 text-center border border-border", "data-arr-index": __arrIdx__, "data-arr-variable-name": "stats", children: [
              /* @__PURE__ */ jsxDEV(s.icon, { "data-source-location": "components/landing/OpenSourceSection:61:14", "data-dynamic-content": "false", className: "w-6 h-6 text-accent mx-auto mb-2", "data-arr-index": __arrIdx__, "data-arr-variable-name": "stats" }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 80,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:62:14", "data-dynamic-content": "true", className: "text-xl font-bold text-foreground", "data-arr-index": __arrIdx__, "data-arr-variable-name": "stats", "data-arr-field": "value", children: s.value }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 81,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:63:14", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-1", "data-arr-index": __arrIdx__, "data-arr-variable-name": "stats", "data-arr-field": "label", children: s.label }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 82,
                columnNumber: 15
              }, this)
            ] }, s.label, true, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 79,
              columnNumber: 11
            }, this)
          )
        },
        void 0,
        false,
        {
          fileName: "/app/src/components/landing/OpenSourceSection.jsx",
          lineNumber: 71,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/OpenSourceSection:69:8",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "glass rounded-2xl border border-accent/20 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8",
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:76:10", "data-dynamic-content": "true", className: "flex-1 text-center md:text-left", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:77:12", "data-dynamic-content": "false", className: "flex items-center justify-center md:justify-start gap-3 mb-3", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:78:14", "data-dynamic-content": "false", className: "w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Code2, { "data-source-location": "components/landing/OpenSourceSection:79:16", "data-dynamic-content": "false", className: "w-5 h-5 text-accent" }, void 0, false, {
                  fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                  lineNumber: 98,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                  lineNumber: 97,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/OpenSourceSection:81:14", "data-dynamic-content": "false", className: "text-xl font-bold", children: "CYGUARD Source Code" }, void 0, false, {
                  fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                  lineNumber: 100,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 96,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/OpenSourceSection:83:12", "data-dynamic-content": "false", className: "text-muted-foreground text-sm mb-2", children: "Complete source — web app, browser extension, threat detection engine, AI modules, and all rule sets. MIT licensed." }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 102,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/OpenSourceSection:86:12", "data-dynamic-content": "false", className: "text-xs text-muted-foreground/60", children: "React · Tailwind · Chrome Extension MV3 · Base44 BaaS" }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 105,
                columnNumber: 13
              }, this),
              status === "downloading" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:92:14", "data-dynamic-content": "true", className: "mt-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:93:16", "data-dynamic-content": "true", className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "components/landing/OpenSourceSection:94:18", "data-dynamic-content": "false", className: "w-3 h-3 text-primary animate-spin" }, void 0, false, {
                    fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                    lineNumber: 113,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/OpenSourceSection:95:18", "data-dynamic-content": "true", className: "text-xs text-primary font-semibold", "data-collection-item-field": "progress", children: [
                    "Packaging files... ",
                    progress,
                    "%"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                    lineNumber: 114,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                  lineNumber: 112,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:97:16", "data-dynamic-content": "true", className: "h-1.5 rounded-full bg-border overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    "data-source-location": "components/landing/OpenSourceSection:98:18",
                    "data-dynamic-content": "true",
                    className: "h-full bg-primary rounded-full transition-all duration-300",
                    style: { width: `${progress}%` }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                    lineNumber: 117,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                  lineNumber: 116,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 111,
                columnNumber: 13
              }, this),
              status === "done" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:106:14", "data-dynamic-content": "false", className: "mt-4 flex items-center gap-2 text-xs text-green-400 font-semibold", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { "data-source-location": "components/landing/OpenSourceSection:107:16", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                  lineNumber: 126,
                  columnNumber: 17
                }, this),
                "Download complete!"
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 125,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 95,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/OpenSourceSection:113:10", "data-dynamic-content": "true", className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/OpenSourceSection:114:12", "data-dynamic-content": "true", size: "lg", onClick: handleDownload, disabled: status === "downloading", children: status === "downloading" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "components/landing/OpenSourceSection:116:18", "data-dynamic-content": "false", className: "w-5 h-5 animate-spin" }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 135,
                columnNumber: 17
              }, this),
              " Packaging..."
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 135,
              columnNumber: 15
            }, this) : status === "done" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { "data-source-location": "components/landing/OpenSourceSection:118:18", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 137,
                columnNumber: 17
              }, this),
              " Downloaded!"
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 137,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "components/landing/OpenSourceSection:120:18", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                fileName: "/app/src/components/landing/OpenSourceSection.jsx",
                lineNumber: 139,
                columnNumber: 17
              }, this),
              " Download Source ZIP"
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 139,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 133,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/OpenSourceSection.jsx",
              lineNumber: 132,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/landing/OpenSourceSection.jsx",
          lineNumber: 88,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.p,
        {
          "data-source-location": "components/landing/OpenSourceSection:126:8",
          "data-dynamic-content": "true",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.3 },
          className: "text-center text-sm text-muted-foreground mt-6",
          children: "Downloads all source files instantly — includes the web app, browser extension, and README. MIT licensed, free for any use."
        },
        void 0,
        false,
        {
          fileName: "/app/src/components/landing/OpenSourceSection.jsx",
          lineNumber: 145,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/OpenSourceSection.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/OpenSourceSection.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
_s(OpenSourceSection, "t292Woa7AuzaTOBAf4BT6+JDmOw=");
_c = OpenSourceSection;
var _c;
$RefreshReg$(_c, "OpenSourceSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/OpenSourceSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/OpenSourceSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBNEJNLFNBdUZRLFVBdkZSOzs7Ozs7Ozs7Ozs7Ozs7OztBQTVCTixPQUFPQSxTQUFTQyxnQkFBZ0I7QUFDaEMsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxPQUFPQyxVQUFVQyxPQUFPQyxPQUFPQyxNQUFNQyxTQUFTQyxvQkFBb0I7QUFDM0UsT0FBT0MsZ0JBQWdCO0FBQ3ZCLFNBQVNDLDBCQUEwQjtBQUVuQyxNQUFNQyxRQUFRO0FBQUEsRUFDZCxFQUFFQyxNQUFNVixPQUFPVyxPQUFPLGVBQWVDLE9BQU8sT0FBTztBQUFBLEVBQ25ELEVBQUVGLE1BQU1SLE9BQU9TLE9BQU8sZ0JBQWdCQyxPQUFPLFNBQVM7QUFBQSxFQUN0RCxFQUFFRixNQUFNUCxPQUFPUSxPQUFPLGFBQWFDLE9BQU8sU0FBUztBQUFBLEVBQ25ELEVBQUVGLE1BQU1OLE1BQU1PLE9BQU8sZUFBZUMsT0FBTyxXQUFXO0FBQUM7QUFHdkQsd0JBQXdCQyxvQkFBb0I7QUFBQUMsS0FBQTtBQUMxQyxRQUFNLENBQUNDLFFBQVFDLFNBQVMsSUFBSWxCLFNBQVMsTUFBTTtBQUMzQyxRQUFNLENBQUNtQixVQUFVQyxXQUFXLElBQUlwQixTQUFTLENBQUM7QUFFMUMsUUFBTXFCLGlCQUFpQixZQUFZO0FBQ2pDLFFBQUlKLFdBQVcsY0FBZTtBQUM5QkMsY0FBVSxhQUFhO0FBQ3ZCRSxnQkFBWSxDQUFDO0FBQ2IsVUFBTVYsbUJBQW1CLENBQUNZLFFBQVFGLFlBQVlFLEdBQUcsQ0FBQztBQUNsREosY0FBVSxNQUFNO0FBQ2hCSyxlQUFXLE1BQU1MLFVBQVUsTUFBTSxHQUFHLEdBQUk7QUFBQSxFQUMxQztBQUVBLFNBQ0UsdUJBQUMsYUFBUSx3QkFBcUIsNkNBQTRDLHdCQUFxQixRQUFPLFdBQVUsdUJBQzlHO0FBQUEsMkJBQUMsU0FBSSx3QkFBcUIsNkNBQTRDLHdCQUFxQixTQUFRLFdBQVUsd0dBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaU47QUFBQSxJQUNqTix1QkFBQyxTQUFJLHdCQUFxQiw2Q0FBNEMsd0JBQXFCLFFBQU8sV0FBVSxtQ0FHMUc7QUFBQTtBQUFBLFFBQUMsT0FBTztBQUFBLFFBQVA7QUFBQSxVQUFXLHdCQUFxQjtBQUFBLFVBQTRDLHdCQUFxQjtBQUFBLFVBQ2xHLFNBQVMsRUFBRU0sU0FBUyxHQUFHQyxHQUFHLEdBQUc7QUFBQSxVQUM3QixhQUFhLEVBQUVELFNBQVMsR0FBR0MsR0FBRyxFQUFFO0FBQUEsVUFDaEMsVUFBVSxFQUFFQyxNQUFNLEtBQUs7QUFBQSxVQUN2QixXQUFVO0FBQUEsVUFFUjtBQUFBLG1DQUFDLFNBQUksd0JBQXFCLDhDQUE2Qyx3QkFBcUIsU0FBUSxXQUFVLHFJQUM1RztBQUFBLHFDQUFDLFNBQU0sd0JBQXFCLDhDQUE2Qyx3QkFBcUIsU0FBUSxXQUFVLGFBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXlIO0FBQUE7QUFBQSxpQkFEM0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLFlBQ0EsdUJBQUMsUUFBRyx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUsdUNBQXFDO0FBQUE7QUFBQSxjQUNsSSx1QkFBQyxVQUFLLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQVEsV0FBVSxpQkFBZ0IseUJBQS9IO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXdJO0FBQUEsaUJBRHhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUE7QUFBQSxZQUNBLHVCQUFDLE9BQUUsd0JBQXFCLDhDQUE2Qyx3QkFBcUIsU0FBUSxXQUFVLG1EQUFpRCxxS0FBN0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQTtBQUFBO0FBQUE7QUFBQSxRQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWdCQTtBQUFBLE1BR0E7QUFBQSxRQUFDLE9BQU87QUFBQSxRQUFQO0FBQUEsVUFBVyx3QkFBcUI7QUFBQSxVQUE0Qyx3QkFBcUI7QUFBQSxVQUNsRyxTQUFTLEVBQUVGLFNBQVMsR0FBR0MsR0FBRyxHQUFHO0FBQUEsVUFDN0IsYUFBYSxFQUFFRCxTQUFTLEdBQUdDLEdBQUcsRUFBRTtBQUFBLFVBQ2hDLFVBQVUsRUFBRUMsTUFBTSxLQUFLO0FBQUEsVUFDdkIsWUFBWSxFQUFFQyxPQUFPLElBQUk7QUFBQSxVQUN6QixXQUFVO0FBQUEsVUFFUGhCLGdCQUFNaUI7QUFBQUEsWUFBSSxDQUFDQyxHQUFHQyxlQUNmLHVCQUFDLFNBQUksd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFBcUIsV0FBVSx5REFBd0Qsa0JBQWdCQSxZQUFZLDBCQUF1QixTQUNsTztBQUFBLHFDQUFDLEVBQUUsTUFBRixFQUFPLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQVEsV0FBVSxvQ0FBbUMsa0JBQWdCQSxZQUFZLDBCQUF1QixXQUF2TTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4TTtBQUFBLGNBQzlNLHVCQUFDLFNBQUksd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFBTyxXQUFVLHFDQUFvQyxrQkFBZ0JBLFlBQVksMEJBQXVCLFNBQVEsa0JBQWUsU0FBU0QsWUFBRWYsU0FBdE87QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNE87QUFBQSxjQUM1Tyx1QkFBQyxTQUFJLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxzQ0FBcUMsa0JBQWdCZ0IsWUFBWSwwQkFBdUIsU0FBUSxrQkFBZSxTQUFTRCxZQUFFaEIsU0FBdk87QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNk87QUFBQSxpQkFIeklnQixFQUFFaEIsT0FBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFJRTtBQUFBLFVBQ0Y7QUFBQTtBQUFBLFFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BY0E7QUFBQSxNQUdBO0FBQUEsUUFBQyxPQUFPO0FBQUEsUUFBUDtBQUFBLFVBQVcsd0JBQXFCO0FBQUEsVUFBNEMsd0JBQXFCO0FBQUEsVUFDbEcsU0FBUyxFQUFFVyxTQUFTLEdBQUdDLEdBQUcsR0FBRztBQUFBLFVBQzdCLGFBQWEsRUFBRUQsU0FBUyxHQUFHQyxHQUFHLEVBQUU7QUFBQSxVQUNoQyxVQUFVLEVBQUVDLE1BQU0sS0FBSztBQUFBLFVBQ3ZCLFlBQVksRUFBRUMsT0FBTyxJQUFJO0FBQUEsVUFDekIsV0FBVTtBQUFBLFVBRVI7QUFBQSxtQ0FBQyxTQUFJLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxtQ0FDM0c7QUFBQSxxQ0FBQyxTQUFJLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQVEsV0FBVSxnRUFDNUc7QUFBQSx1Q0FBQyxTQUFJLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQVEsV0FBVSw4RkFDNUcsaUNBQUMsU0FBTSx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUseUJBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXFJLEtBRHZJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFBQSxnQkFDQSx1QkFBQyxVQUFLLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQVEsV0FBVSxxQkFBb0IsbUNBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXNKO0FBQUEsbUJBSnhKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBS0E7QUFBQSxjQUNBLHVCQUFDLE9BQUUsd0JBQXFCLDhDQUE2Qyx3QkFBcUIsU0FBUSxXQUFVLHNDQUFvQyxtSUFBaEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGNBQ0EsdUJBQUMsT0FBRSx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUsb0NBQWtDLHFFQUE5STtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVBO0FBQUEsY0FHQ1YsV0FBVyxpQkFDWix1QkFBQyxTQUFJLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxRQUN6RztBQUFBLHVDQUFDLFNBQUksd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFBTyxXQUFVLGdDQUMzRztBQUFBLHlDQUFDLFdBQVEsd0JBQXFCLDhDQUE2Qyx3QkFBcUIsU0FBUSxXQUFVLHVDQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFxSjtBQUFBLGtCQUNySix1QkFBQyxVQUFLLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxzQ0FBcUMsOEJBQTJCLFlBQVc7QUFBQTtBQUFBLG9CQUFvQkU7QUFBQUEsb0JBQVM7QUFBQSx1QkFBdE47QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBdU47QUFBQSxxQkFGek47QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFHQTtBQUFBLGdCQUNBLHVCQUFDLFNBQUksd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFBTyxXQUFVLGdEQUMzRztBQUFBLGtCQUFDO0FBQUE7QUFBQSxvQkFBSSx3QkFBcUI7QUFBQSxvQkFBNkMsd0JBQXFCO0FBQUEsb0JBQzlGLFdBQVU7QUFBQSxvQkFDVixPQUFPLEVBQUVZLE9BQU8sR0FBR1osUUFBUSxJQUFJO0FBQUE7QUFBQSxrQkFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUUrQixLQUhqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUtBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFXRTtBQUFBLGNBRURGLFdBQVcsVUFDWix1QkFBQyxTQUFJLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsV0FBVSxxRUFDM0c7QUFBQSx1Q0FBQyxnQkFBYSx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUsYUFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBaUk7QUFBQTtBQUFBLG1CQURySTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdFO0FBQUEsaUJBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbUNBO0FBQUEsWUFFQSx1QkFBQyxTQUFJLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVSxpQkFDNUcsaUNBQUMsY0FBVyx3QkFBcUIsK0NBQThDLHdCQUFxQixRQUFPLE1BQUssTUFBSyxTQUFTSSxnQkFBZ0IsVUFBVUosV0FBVyxlQUNoS0EscUJBQVcsZ0JBQ1osbUNBQUU7QUFBQSxxQ0FBQyxXQUFRLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsV0FBVSwwQkFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBeUk7QUFBQSxjQUFHO0FBQUEsaUJBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTJKLElBQzNKQSxXQUFXLFNBQ1gsbUNBQUU7QUFBQSxxQ0FBQyxnQkFBYSx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUsYUFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBaUk7QUFBQSxjQUFHO0FBQUEsaUJBQXRJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWtKLElBRWxKLG1DQUFFO0FBQUEscUNBQUMsWUFBUyx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUsYUFBcEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNkg7QUFBQSxjQUFHO0FBQUEsaUJBQWxJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXNKLEtBTnhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUUEsS0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVVBO0FBQUE7QUFBQTtBQUFBLFFBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXVEQTtBQUFBLE1BRUE7QUFBQSxRQUFDLE9BQU87QUFBQSxRQUFQO0FBQUEsVUFBUyx3QkFBcUI7QUFBQSxVQUE2Qyx3QkFBcUI7QUFBQSxVQUNqRyxTQUFTLEVBQUVPLFNBQVMsRUFBRTtBQUFBLFVBQ3RCLGFBQWEsRUFBRUEsU0FBUyxFQUFFO0FBQUEsVUFDMUIsVUFBVSxFQUFFRSxNQUFNLEtBQUs7QUFBQSxVQUN2QixZQUFZLEVBQUVDLE9BQU8sSUFBSTtBQUFBLFVBQ3pCLFdBQVU7QUFBQSxVQUFnRDtBQUFBO0FBQUEsUUFMMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUE7QUFBQSxTQXhHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBeUdBO0FBQUEsT0EzR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTRHQTtBQUVKO0FBQUNYLEdBNUh1QkQsbUJBQWlCO0FBQUEsS0FBakJBO0FBQWlCLElBQUFpQjtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQ29kZTIiLCJEb3dubG9hZCIsIkhlYXJ0IiwiVXNlcnMiLCJTdGFyIiwiTG9hZGVyMiIsIkNoZWNrQ2lyY2xlMiIsIk5lb25CdXR0b24iLCJkb3dubG9hZFNvdXJjZUNvZGUiLCJzdGF0cyIsImljb24iLCJsYWJlbCIsInZhbHVlIiwiT3BlblNvdXJjZVNlY3Rpb24iLCJfcyIsInN0YXR1cyIsInNldFN0YXR1cyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJoYW5kbGVEb3dubG9hZCIsInBjdCIsInNldFRpbWVvdXQiLCJvcGFjaXR5IiwieSIsIm9uY2UiLCJkZWxheSIsIm1hcCIsInMiLCJfX2FycklkeF9fIiwid2lkdGgiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJPcGVuU291cmNlU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBDb2RlMiwgRG93bmxvYWQsIEhlYXJ0LCBVc2VycywgU3RhciwgTG9hZGVyMiwgQ2hlY2tDaXJjbGUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBOZW9uQnV0dG9uIGZyb20gJy4uL3VpLWN1c3RvbS9OZW9uQnV0dG9uJztcbmltcG9ydCB7IGRvd25sb2FkU291cmNlQ29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3NvdXJjZURvd25sb2FkJztcblxuY29uc3Qgc3RhdHMgPSBbXG57IGljb246IENvZGUyLCBsYWJlbDogJ09wZW4gU291cmNlJywgdmFsdWU6ICcxMDAlJyB9LFxueyBpY29uOiBIZWFydCwgbGFiZWw6ICdGcmVlIEZvcmV2ZXInLCB2YWx1ZTogJ0Fsd2F5cycgfSxcbnsgaWNvbjogVXNlcnMsIGxhYmVsOiAnQ29tbXVuaXR5JywgdmFsdWU6ICdEcml2ZW4nIH0sXG57IGljb246IFN0YXIsIGxhYmVsOiAnTUlUIExpY2Vuc2UnLCB2YWx1ZTogJ0ZyZWUgVXNlJyB9XTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVuU291cmNlU2VjdGlvbigpIHtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdpZGxlJyk7IC8vIGlkbGUgfCBkb3dubG9hZGluZyB8IGRvbmVcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSAnZG93bmxvYWRpbmcnKSByZXR1cm47XG4gICAgc2V0U3RhdHVzKCdkb3dubG9hZGluZycpO1xuICAgIHNldFByb2dyZXNzKDApO1xuICAgIGF3YWl0IGRvd25sb2FkU291cmNlQ29kZSgocGN0KSA9PiBzZXRQcm9ncmVzcyhwY3QpKTtcbiAgICBzZXRTdGF0dXMoJ2RvbmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFN0YXR1cygnaWRsZScpLCAzMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjI4OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0yMCBweC00IHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjI5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iIGZyb20tdHJhbnNwYXJlbnQgdmlhLWFjY2VudC8zIHRvLXRyYW5zcGFyZW50IHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjozMDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG8gcmVsYXRpdmUgei0xMFwiPlxuXG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjMzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246Mzk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctYWNjZW50LzEwIGJvcmRlciBib3JkZXItYWNjZW50LzIwIHRleHQtYWNjZW50IHRleHQtc20gZm9udC1zZW1pYm9sZCBtYi02XCI+XG4gICAgICAgICAgICA8Q29kZTIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246NDA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICBPcGVuIFNvdXJjZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjo0MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgbWItNVwiPlxuICAgICAgICAgICAgQnVpbHQgZm9yIHRoZSA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjo0NDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0XCI+Q29tbXVuaXR5PC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246NDY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIENZR1VBUkQgaXMgZnVsbHkgb3BlbiBzb3VyY2UuIERvd25sb2FkIHRoZSBjb21wbGV0ZSBzb3VyY2UgY29kZSBpbnN0YW50bHkg4oCUIG5vIEdpdEh1YiBhY2NvdW50IG5lZWRlZC4gSW5zcGVjdCwgbW9kaWZ5LCBhbmQgYnVpbGQgb24gdG9wIG9mIGl0IGZyZWVseS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICB7LyogU3RhdHMgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjUyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjEgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNCBtYi0xMlwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHtzdGF0cy5tYXAoKHMsIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjo2MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17cy5sYWJlbH0gY2xhc3NOYW1lPVwiZ2xhc3Mgcm91bmRlZC14bCBwLTUgdGV4dC1jZW50ZXIgYm9yZGVyIGJvcmRlci1ib3JkZXJcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgICAgIDxzLmljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246NjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWFjY2VudCBteC1hdXRvIG1iLTJcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInN0YXRzXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjo2MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwic3RhdHNcIiBkYXRhLWFyci1maWVsZD1cInZhbHVlXCI+e3MudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246NjM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzdGF0c1wiIGRhdGEtYXJyLWZpZWxkPVwibGFiZWxcIj57cy5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICB7LyogRG93bmxvYWQgY2FyZCAqL31cbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246Njk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMiB9fVxuICAgICAgICBjbGFzc05hbWU9XCJnbGFzcyByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWFjY2VudC8yMCBwLTggbWQ6cC0xMCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246NzY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjc3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgZ2FwLTMgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjc4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLXhsIGJnLWFjY2VudC8xNSBib3JkZXIgYm9yZGVyLWFjY2VudC8yNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxDb2RlMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjo3OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYWNjZW50XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjgxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+Q1lHVUFSRCBTb3VyY2UgQ29kZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246ODM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc20gbWItMlwiPlxuICAgICAgICAgICAgICBDb21wbGV0ZSBzb3VyY2Ug4oCUIHdlYiBhcHAsIGJyb3dzZXIgZXh0ZW5zaW9uLCB0aHJlYXQgZGV0ZWN0aW9uIGVuZ2luZSwgQUkgbW9kdWxlcywgYW5kIGFsbCBydWxlIHNldHMuIE1JVCBsaWNlbnNlZC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjg2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kLzYwXCI+XG4gICAgICAgICAgICAgIFJlYWN0IMK3IFRhaWx3aW5kIMK3IENocm9tZSBFeHRlbnNpb24gTVYzIMK3IEJhc2U0NCBCYWFTXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIHsvKiBQcm9ncmVzcyBiYXIgKi99XG4gICAgICAgICAgICB7c3RhdHVzID09PSAnZG93bmxvYWRpbmcnICYmXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjkyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246OTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICA8TG9hZGVyMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjo5NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtcHJpbWFyeSBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246OTU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwcm9ncmVzc1wiPlBhY2thZ2luZyBmaWxlcy4uLiB7cHJvZ3Jlc3N9JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjk3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaC0xLjUgcm91bmRlZC1mdWxsIGJnLWJvcmRlciBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246OTg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBiZy1wcmltYXJ5IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fSAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtzdGF0dXMgPT09ICdkb25lJyAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjoxMDY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIHRleHQtZ3JlZW4tNDAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjEwNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICBEb3dubG9hZCBjb21wbGV0ZSFcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjExMzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL09wZW5Tb3VyY2VTZWN0aW9uOjExNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHNpemU9XCJsZ1wiIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfSBkaXNhYmxlZD17c3RhdHVzID09PSAnZG93bmxvYWRpbmcnfT5cbiAgICAgICAgICAgICAge3N0YXR1cyA9PT0gJ2Rvd25sb2FkaW5nJyA/XG4gICAgICAgICAgICAgIDw+PExvYWRlcjIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246MTE2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgYW5pbWF0ZS1zcGluXCIgLz4gUGFja2FnaW5nLi4uPC8+IDpcbiAgICAgICAgICAgICAgc3RhdHVzID09PSAnZG9uZScgP1xuICAgICAgICAgICAgICA8PjxDaGVja0NpcmNsZTIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246MTE4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiBEb3dubG9hZGVkITwvPiA6XG5cbiAgICAgICAgICAgICAgPD48RG93bmxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvT3BlblNvdXJjZVNlY3Rpb246MTIwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiBEb3dubG9hZCBTb3VyY2UgWklQPC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxtb3Rpb24ucCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbjoxMjY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4zIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTZcIj5cbiAgICAgICAgICBcbiAgICAgICAgICBEb3dubG9hZHMgYWxsIHNvdXJjZSBmaWxlcyBpbnN0YW50bHkg4oCUIGluY2x1ZGVzIHRoZSB3ZWIgYXBwLCBicm93c2VyIGV4dGVuc2lvbiwgYW5kIFJFQURNRS4gTUlUIGxpY2Vuc2VkLCBmcmVlIGZvciBhbnkgdXNlLlxuICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbi5qc3gifQ==