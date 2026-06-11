import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/LandingAIDetectorTeaser.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/LandingAIDetectorTeaser.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=ef8b20f3";
import { Bot, Image, Link2, FileText, ArrowRight, ShieldAlert, Eye, Fingerprint } from "/node_modules/.vite/deps/lucide-react.js?v=ef8b20f3";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
const features = [
  { icon: Image, label: "Deepfake Detection", desc: "Identify AI-generated images & synthetic faces", color: "text-primary" },
  { icon: Link2, label: "AI Link Analysis", desc: "Detect AI-crafted phishing & scam URLs", color: "text-accent" },
  { icon: FileText, label: "AI Text Detection", desc: "Spot ChatGPT, Claude & AI-written content", color: "text-emerald-400" },
  { icon: ShieldAlert, label: "Cyber Risk Overlay", desc: "AI content × security threat correlation", color: "text-amber-400" },
  { icon: Eye, label: "Synthetic Media", desc: "Video, audio & image deepfake analysis", color: "text-primary" },
  { icon: Fingerprint, label: "Platform Fingerprinting", desc: "Identify which AI tool created the content", color: "text-accent" }
];
export default function LandingAIDetectorTeaser() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/LandingAIDetectorTeaser:18:4", "data-dynamic-content": "true", className: "py-24 px-4 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LandingAIDetectorTeaser:19:6", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 pointer-events-none" }, void 0, false, {
      fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LandingAIDetectorTeaser:20:6", "data-dynamic-content": "false", className: "absolute top-1/2 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" }, void 0, false, {
      fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LandingAIDetectorTeaser:22:6", "data-dynamic-content": "true", className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LandingAIDetectorTeaser:23:8", "data-dynamic-content": "true", className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "components/landing/LandingAIDetectorTeaser:25:10", "data-dynamic-content": "true", initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 }, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LandingAIDetectorTeaser:26:12", "data-dynamic-content": "false", className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-4", children: [
          /* @__PURE__ */ jsxDEV(Bot, { "data-source-location": "components/landing/LandingAIDetectorTeaser:27:14", "data-dynamic-content": "false", className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          " NEW FEATURE"
        ] }, void 0, true, {
          fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/LandingAIDetectorTeaser:29:12", "data-dynamic-content": "false", className: "text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight", children: [
          "AI Content",
          /* @__PURE__ */ jsxDEV("br", { "data-source-location": "components/landing/LandingAIDetectorTeaser:30:24", "data-dynamic-content": "false" }, void 0, false, {
            fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
            lineNumber: 49,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LandingAIDetectorTeaser:30:30", "data-dynamic-content": "false", className: "gradient-text", children: "Detector" }, void 0, false, {
            fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
            lineNumber: 49,
            columnNumber: 132
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/LandingAIDetectorTeaser:32:12", "data-dynamic-content": "false", className: "text-muted-foreground leading-relaxed mb-6", children: "The world is flooded with AI-generated content — deepfakes, synthetic articles, AI phishing emails. CYGUARD's AI Detector analyzes images, links, and text to tell you exactly what's real and what's machine-made, with a confidence percentage and full cyber risk breakdown." }, void 0, false, {
          fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/LandingAIDetectorTeaser:37:12", "data-dynamic-content": "false", to: "/ai-detector", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/LandingAIDetectorTeaser:38:14", "data-dynamic-content": "false", size: "lg", children: [
          "Try AI Detector ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "components/landing/LandingAIDetectorTeaser:39:32", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
            lineNumber: 58,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
          lineNumber: 57,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LandingAIDetectorTeaser:45:10", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4", children: features.map((f, i) => {
        const Icon = f.icon;
        return /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-source-location": "components/landing/LandingAIDetectorTeaser:49:16",
            "data-dynamic-content": "true",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            whileHover: { y: -4, transition: { duration: 0.2 } },
            className: "glass rounded-xl p-4 border border-border hover:border-primary/30 transition-colors",
            "data-arr-index": i,
            "data-arr-variable-name": "features",
            children: [
              /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "components/landing/LandingAIDetectorTeaser:54:18", "data-dynamic-content": "true", className: `w-5 h-5 ${f.color} mb-2`, "data-arr-index": i, "data-arr-variable-name": "features" }, void 0, false, {
                fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
                lineNumber: 73,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/LandingAIDetectorTeaser:55:18", "data-dynamic-content": "true", className: "text-sm font-bold text-foreground", "data-arr-index": i, "data-arr-variable-name": "features", "data-arr-field": "label", children: f.label }, void 0, false, {
                fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
                lineNumber: 74,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/LandingAIDetectorTeaser:56:18", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-1", "data-arr-index": i, "data-arr-variable-name": "features", "data-arr-field": "desc", children: f.desc }, void 0, false, {
                fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
                lineNumber: 75,
                columnNumber: 19
              }, this)
            ]
          },
          f.label,
          true,
          {
            fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
            lineNumber: 68,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/LandingAIDetectorTeaser.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
_c = LandingAIDetectorTeaser;
var _c;
$RefreshReg$(_c, "LandingAIDetectorTeaser");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/LandingAIDetectorTeaser.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/LandingAIDetectorTeaser.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFDLE9BQUUsd0JBQXFCLG9EQUFtRCx3QkFBcUIsUUFBTyxXQUFVLHNDQUFxQyxrQkFBZ0JVLEdBQUcsMEJBQXVCLFlBQVcsa0JBQWUsUUFBUUQsWUFBRVIsUUFBcE87QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBeU87QUFBQTtBQUFBO0FBQUEsVUFQdEhRLEVBQUVUO0FBQUFBLFVBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFRQTtBQUFBLE1BRUosQ0FBQyxLQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFlQTtBQUFBLFNBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FzQ0EsS0F2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXdDQTtBQUFBLE9BNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E2Q0E7QUFFSjtBQUFDZSxLQWpEdUJaO0FBQXVCLElBQUFZO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiTGluayIsIkJvdCIsIkltYWdlIiwiTGluazIiLCJGaWxlVGV4dCIsIkFycm93UmlnaHQiLCJTaGllbGRBbGVydCIsIkV5ZSIsIkZpbmdlcnByaW50IiwiTmVvbkJ1dHRvbiIsImZlYXR1cmVzIiwiaWNvbiIsImxhYmVsIiwiZGVzYyIsImNvbG9yIiwiTGFuZGluZ0FJRGV0ZWN0b3JUZWFzZXIiLCJvcGFjaXR5IiwieCIsIm9uY2UiLCJkdXJhdGlvbiIsIm1hcCIsImYiLCJpIiwiSWNvbiIsInkiLCJkZWxheSIsInRyYW5zaXRpb24iLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJMYW5kaW5nQUlEZXRlY3RvclRlYXNlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQm90LCBJbWFnZSwgTGluazIsIEZpbGVUZXh0LCBBcnJvd1JpZ2h0LCBTaGllbGRBbGVydCwgRXllLCBGaW5nZXJwcmludCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgTmVvbkJ1dHRvbiBmcm9tICcuLi91aS1jdXN0b20vTmVvbkJ1dHRvbic7XG5cbmNvbnN0IGZlYXR1cmVzID0gW1xueyBpY29uOiBJbWFnZSwgbGFiZWw6ICdEZWVwZmFrZSBEZXRlY3Rpb24nLCBkZXNjOiAnSWRlbnRpZnkgQUktZ2VuZXJhdGVkIGltYWdlcyAmIHN5bnRoZXRpYyBmYWNlcycsIGNvbG9yOiAndGV4dC1wcmltYXJ5JyB9LFxueyBpY29uOiBMaW5rMiwgbGFiZWw6ICdBSSBMaW5rIEFuYWx5c2lzJywgZGVzYzogJ0RldGVjdCBBSS1jcmFmdGVkIHBoaXNoaW5nICYgc2NhbSBVUkxzJywgY29sb3I6ICd0ZXh0LWFjY2VudCcgfSxcbnsgaWNvbjogRmlsZVRleHQsIGxhYmVsOiAnQUkgVGV4dCBEZXRlY3Rpb24nLCBkZXNjOiAnU3BvdCBDaGF0R1BULCBDbGF1ZGUgJiBBSS13cml0dGVuIGNvbnRlbnQnLCBjb2xvcjogJ3RleHQtZW1lcmFsZC00MDAnIH0sXG57IGljb246IFNoaWVsZEFsZXJ0LCBsYWJlbDogJ0N5YmVyIFJpc2sgT3ZlcmxheScsIGRlc2M6ICdBSSBjb250ZW50IMOXIHNlY3VyaXR5IHRocmVhdCBjb3JyZWxhdGlvbicsIGNvbG9yOiAndGV4dC1hbWJlci00MDAnIH0sXG57IGljb246IEV5ZSwgbGFiZWw6ICdTeW50aGV0aWMgTWVkaWEnLCBkZXNjOiAnVmlkZW8sIGF1ZGlvICYgaW1hZ2UgZGVlcGZha2UgYW5hbHlzaXMnLCBjb2xvcjogJ3RleHQtcHJpbWFyeScgfSxcbnsgaWNvbjogRmluZ2VycHJpbnQsIGxhYmVsOiAnUGxhdGZvcm0gRmluZ2VycHJpbnRpbmcnLCBkZXNjOiAnSWRlbnRpZnkgd2hpY2ggQUkgdG9vbCBjcmVhdGVkIHRoZSBjb250ZW50JywgY29sb3I6ICd0ZXh0LWFjY2VudCcgfV07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ0FJRGV0ZWN0b3JUZWFzZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGFuZGluZ0FJRGV0ZWN0b3JUZWFzZXI6MTg6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTI0IHB4LTQgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdBSURldGVjdG9yVGVhc2VyOjE5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tYWNjZW50LzUgdmlhLXRyYW5zcGFyZW50IHRvLXByaW1hcnkvNSBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGFuZGluZ0FJRGV0ZWN0b3JUZWFzZXI6MjA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHJpZ2h0LTAgdy05NiBoLTk2IGJnLWFjY2VudC84IHJvdW5kZWQtZnVsbCBibHVyLTN4bCBwb2ludGVyLWV2ZW50cy1ub25lIC10cmFuc2xhdGUteS0xLzJcIiAvPlxuXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdBSURldGVjdG9yVGVhc2VyOjIyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdBSURldGVjdG9yVGVhc2VyOjIzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC0xMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7LyogTGVmdDogdGV4dCAqL31cbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nQUlEZXRlY3RvclRlYXNlcjoyNToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTMwIH19IHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHg6IDAgfX0gdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjcgfX0+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdBSURldGVjdG9yVGVhc2VyOjI2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LTEuNSByb3VuZGVkLWZ1bGwgYmctYWNjZW50LzEwIGJvcmRlciBib3JkZXItYWNjZW50LzIwIHRleHQtYWNjZW50IHRleHQteHMgZm9udC1ib2xkIG1iLTRcIj5cbiAgICAgICAgICAgICAgPEJvdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nQUlEZXRlY3RvclRlYXNlcjoyNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+IE5FVyBGRUFUVVJFXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nQUlEZXRlY3RvclRlYXNlcjoyOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJsYWNrIHRleHQtZm9yZWdyb3VuZCBtYi00IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgQUkgQ29udGVudDxiciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nQUlEZXRlY3RvclRlYXNlcjozMDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPjxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdBSURldGVjdG9yVGVhc2VyOjMwOjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImdyYWRpZW50LXRleHRcIj5EZXRlY3Rvcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nQUlEZXRlY3RvclRlYXNlcjozMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkIG1iLTZcIj5cbiAgICAgICAgICAgICAgVGhlIHdvcmxkIGlzIGZsb29kZWQgd2l0aCBBSS1nZW5lcmF0ZWQgY29udGVudCDigJQgZGVlcGZha2VzLCBzeW50aGV0aWMgYXJ0aWNsZXMsIEFJIHBoaXNoaW5nIGVtYWlscy5cbiAgICAgICAgICAgICAgQ1lHVUFSRCdzIEFJIERldGVjdG9yIGFuYWx5emVzIGltYWdlcywgbGlua3MsIGFuZCB0ZXh0IHRvIHRlbGwgeW91IGV4YWN0bHkgd2hhdCdzIHJlYWwgYW5kIHdoYXQncyBtYWNoaW5lLW1hZGUsXG4gICAgICAgICAgICAgIHdpdGggYSBjb25maWRlbmNlIHBlcmNlbnRhZ2UgYW5kIGZ1bGwgY3liZXIgcmlzayBicmVha2Rvd24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nQUlEZXRlY3RvclRlYXNlcjozNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB0bz1cIi9haS1kZXRlY3RvclwiPlxuICAgICAgICAgICAgICA8TmVvbkJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nQUlEZXRlY3RvclRlYXNlcjozODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgICAgICBUcnkgQUkgRGV0ZWN0b3IgPEFycm93UmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGFuZGluZ0FJRGV0ZWN0b3JUZWFzZXI6Mzk6MzJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQ6IGZlYXR1cmUgZ3JpZCAqL31cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdBSURldGVjdG9yVGVhc2VyOjQ1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZiwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBJY29uID0gZi5pY29uO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdBSURldGVjdG9yVGVhc2VyOjQ5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtmLmxhYmVsfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX0gd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX0gdHJhbnNpdGlvbj17eyBkZWxheTogaSAqIDAuMDggfX1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC00LCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjIgfSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdsYXNzIHJvdW5kZWQteGwgcC00IGJvcmRlciBib3JkZXItYm9yZGVyIGhvdmVyOmJvcmRlci1wcmltYXJ5LzMwIHRyYW5zaXRpb24tY29sb3JzXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJmZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgICAgPEljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGFuZGluZ0FJRGV0ZWN0b3JUZWFzZXI6NTQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTUgaC01ICR7Zi5jb2xvcn0gbWItMmB9IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZmVhdHVyZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGFuZGluZ0FJRGV0ZWN0b3JUZWFzZXI6NTU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImZlYXR1cmVzXCIgZGF0YS1hcnItZmllbGQ9XCJsYWJlbFwiPntmLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdBSURldGVjdG9yVGVhc2VyOjU2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMVwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZmVhdHVyZXNcIiBkYXRhLWFyci1maWVsZD1cImRlc2NcIj57Zi5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KTtcblxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nQUlEZXRlY3RvclRlYXNlci5qc3gifQ==