import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/HeroSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/HeroSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=82de9d48";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=c96743a3";
import { Scan, Upload, Download, Shield, Zap, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=76f08321";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
import CyguardLogo from "/src/components/brand/CyguardLogo.jsx";
export default function HeroSection() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/HeroSection:10:4", "data-dynamic-content": "true", className: "relative min-h-screen flex items-center justify-center overflow-hidden px-4", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:12:6", "data-dynamic-content": "false", className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:13:8", "data-dynamic-content": "false", className: "absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:14:8", "data-dynamic-content": "false", className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:15:8", "data-dynamic-content": "false", className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:16:8", "data-dynamic-content": "false", className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/3" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/HeroSection.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:19:6", "data-dynamic-content": "true", className: "relative z-10 max-w-5xl mx-auto text-center", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/HeroSection:20:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "components/landing/HeroSection:26:10",
              "data-dynamic-content": "true",
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.2 },
              className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8",
              children: [
                /* @__PURE__ */ jsxDEV(Zap, { "data-source-location": "components/landing/HeroSection:32:12", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 51,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/HeroSection:33:12", "data-dynamic-content": "false", className: "text-sm font-medium text-primary", children: "Developed By Adlei Andasan & John Paul Flores" }, void 0, false, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 52,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 45,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "components/landing/HeroSection:37:10", "data-dynamic-content": "false", className: "text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/HeroSection:38:12", "data-dynamic-content": "false", className: "text-foreground", children: "AI-Powered Protection" }, void 0, false, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 57,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("br", { "data-source-location": "components/landing/HeroSection:39:12", "data-dynamic-content": "false" }, void 0, false, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/HeroSection:40:12", "data-dynamic-content": "false", className: "text-foreground", children: "Against " }, void 0, false, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 59,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/HeroSection:41:12", "data-dynamic-content": "false", className: "gradient-text", children: "Phishing, Malware" }, void 0, false, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("br", { "data-source-location": "components/landing/HeroSection:42:12", "data-dynamic-content": "false" }, void 0, false, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 61,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/HeroSection:43:12", "data-dynamic-content": "false", className: "gradient-text", children: "& Data Leaks" }, void 0, false, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 62,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/HeroSection.jsx",
            lineNumber: 56,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            motion.p,
            {
              "data-source-location": "components/landing/HeroSection:47:10",
              "data-dynamic-content": "true",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.4 },
              className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed",
              children: "CYGUARD combines artificial intelligence, sandbox analysis, privacy monitoring, and real-time threat detection into one intelligent cybersecurity platform."
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 66,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "components/landing/HeroSection:58:10",
              "data-dynamic-content": "true",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "flex flex-wrap items-center justify-center gap-4",
              children: [
                /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/HeroSection:64:12", "data-dynamic-content": "false", to: "/scan", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/HeroSection:65:14", "data-dynamic-content": "false", size: "lg", children: [
                  /* @__PURE__ */ jsxDEV(Scan, { "data-source-location": "components/landing/HeroSection:66:16", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/src/components/landing/HeroSection.jsx",
                    lineNumber: 85,
                    columnNumber: 17
                  }, this),
                  "Scan Website",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "components/landing/HeroSection:68:16", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/components/landing/HeroSection.jsx",
                    lineNumber: 87,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 84,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 83,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/HeroSection:71:12", "data-dynamic-content": "false", to: "/scan?tab=file", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/HeroSection:72:14", "data-dynamic-content": "false", variant: "secondary", size: "lg", children: [
                  /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "components/landing/HeroSection:73:16", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/src/components/landing/HeroSection.jsx",
                    lineNumber: 92,
                    columnNumber: 17
                  }, this),
                  "Upload File"
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 91,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 90,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/HeroSection:77:12", "data-dynamic-content": "false", to: "/extension", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/HeroSection:78:14", "data-dynamic-content": "false", variant: "secondary", size: "lg", children: [
                  /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "components/landing/HeroSection:79:16", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/src/components/landing/HeroSection.jsx",
                    lineNumber: 98,
                    columnNumber: 17
                  }, this),
                  "Download Extension"
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 97,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 96,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 77,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "components/landing/HeroSection:86:10",
              "data-dynamic-content": "true",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.8 },
              className: "mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground",
              children: [
                { value: "10M+", label: "Scans Performed" },
                { value: "99.7%", label: "Detection Rate" },
                { value: "150+", label: "Countries" },
                { value: "5s", label: "Scan Time" }
              ].map(
                (stat, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:98:12", "data-dynamic-content": "true", className: "text-center", "data-arr-index": __arrIdx__, children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/HeroSection:99:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-foreground font-mono", "data-arr-index": __arrIdx__, "data-arr-field": "value", children: stat.value }, void 0, false, {
                    fileName: "/app/src/components/landing/HeroSection.jsx",
                    lineNumber: 118,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/HeroSection:100:16", "data-dynamic-content": "true", className: "text-xs mt-1", "data-arr-index": __arrIdx__, "data-arr-field": "label", children: stat.label }, void 0, false, {
                    fileName: "/app/src/components/landing/HeroSection.jsx",
                    lineNumber: 119,
                    columnNumber: 17
                  }, this)
                ] }, stat.label, true, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 117,
                  columnNumber: 13
                }, this)
              )
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 105,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/components/landing/HeroSection.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/HeroSection.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
_c = HeroSection;
var _c;
$RefreshReg$(_c, "HeroSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/HeroSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/HeroSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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IiwiWmFwIiwiQXJyb3dSaWdodCIsIk5lb25CdXR0b24iLCJDeWd1YXJkTG9nbyIsIkhlcm9TZWN0aW9uIiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsInNjYWxlIiwiZGVsYXkiLCJ2YWx1ZSIsImxhYmVsIiwibWFwIiwic3RhdCIsIl9fYXJySWR4X18iLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIZXJvU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgU2NhbiwgVXBsb2FkLCBEb3dubG9hZCwgU2hpZWxkLCBaYXAsIEFycm93UmlnaHQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IE5lb25CdXR0b24gZnJvbSAnLi4vdWktY3VzdG9tL05lb25CdXR0b24nO1xuaW1wb3J0IEN5Z3VhcmRMb2dvIGZyb20gJy4uL2JyYW5kL0N5Z3VhcmRMb2dvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1NlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTA6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcHgtNFwiPlxuICAgICAgey8qIEJhY2tncm91bmQgZWZmZWN0cyAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMS80IHctOTYgaC05NiBiZy1uZW9uLWJsdWUvNSByb3VuZGVkLWZ1bGwgYmx1ci0zeGxcIiAvPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjE0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEvNCByaWdodC0xLzQgdy05NiBoLTk2IGJnLW5lb24tcHVycGxlLzUgcm91bmRlZC1mdWxsIGJsdXItM3hsXCIgLz5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjoxNTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHctWzYwMHB4XSBoLVs2MDBweF0gcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItcHJpbWFyeS81XCIgLz5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjoxNjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHctWzgwMHB4XSBoLVs4MDBweF0gcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItcHJpbWFyeS8zXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjE5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIG1heC13LTV4bCBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjIwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjggfX0+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIEJhZGdlICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjI2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgZ2xhc3MgYm9yZGVyLXByaW1hcnkvMjAgbWItOFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8WmFwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjMyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjMzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5XCI+RGV2ZWxvcGVkIEJ5IEFkbGVpIEFuZGFzYW4gJiBKb2huIFBhdWwgRmxvcmVzPC9zcGFuPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIHsvKiBNYWluIGhlYWRpbmcgKi99XG4gICAgICAgICAgPGgxIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjM3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtNHhsIHNtOnRleHQtNXhsIG1kOnRleHQtN3hsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHRyYWNraW5nLXRpZ2h0IG1iLTZcIj5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjM4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZFwiPkFJLVBvd2VyZWQgUHJvdGVjdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxiciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjozOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246NDA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kXCI+QWdhaW5zdCA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjo0MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0XCI+UGhpc2hpbmcsIE1hbHdhcmU8L3NwYW4+XG4gICAgICAgICAgICA8YnIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246NDI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjQzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImdyYWRpZW50LXRleHRcIj4mIERhdGEgTGVha3M8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIHsvKiBTdWJoZWFkbGluZSAqL31cbiAgICAgICAgICA8bW90aW9uLnAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246NDc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWF4LXctM3hsIG14LWF1dG8gbWItMTAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENZR1VBUkQgY29tYmluZXMgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UsIHNhbmRib3ggYW5hbHlzaXMsIHByaXZhY3kgbW9uaXRvcmluZywgXG4gICAgICAgICAgICBhbmQgcmVhbC10aW1lIHRocmVhdCBkZXRlY3Rpb24gaW50byBvbmUgaW50ZWxsaWdlbnQgY3liZXJzZWN1cml0eSBwbGF0Zm9ybS5cbiAgICAgICAgICA8L21vdGlvbi5wPlxuXG4gICAgICAgICAgey8qIENUQSBCdXR0b25zICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjU4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC42IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjY0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL3NjYW5cIj5cbiAgICAgICAgICAgICAgPE5lb25CdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246NjU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAgPFNjYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246NjY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgU2NhbiBXZWJzaXRlXG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246Njg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjcxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL3NjYW4/dGFiPWZpbGVcIj5cbiAgICAgICAgICAgICAgPE5lb25CdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246NzI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIDxVcGxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246NzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgVXBsb2FkIEZpbGVcbiAgICAgICAgICAgICAgPC9OZW9uQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246Nzc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdG89XCIvZXh0ZW5zaW9uXCI+XG4gICAgICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjc4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgICAgICA8RG93bmxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246Nzk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgRG93bmxvYWQgRXh0ZW5zaW9uXG4gICAgICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICB7LyogVHJ1c3QgaW5kaWNhdG9ycyAqL31cbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjo4NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC44IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTYgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC04IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgeyB2YWx1ZTogJzEwTSsnLCBsYWJlbDogJ1NjYW5zIFBlcmZvcm1lZCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICc5OS43JScsIGxhYmVsOiAnRGV0ZWN0aW9uIFJhdGUnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnMTUwKycsIGxhYmVsOiAnQ291bnRyaWVzJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJzVzJywgbGFiZWw6ICdTY2FuIFRpbWUnIH1dLlxuICAgICAgICAgICAgbWFwKChzdGF0LCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjo5ODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c3RhdC5sYWJlbH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246OTk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIGZvbnQtbW9ub1wiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cInZhbHVlXCI+e3N0YXQudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjEwMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgbXQtMVwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cImxhYmVsXCI+e3N0YXQubGFiZWx9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uLmpzeCJ9