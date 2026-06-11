import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/FeaturesSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/FeaturesSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=82de9d48";
import { Shield, Search, FileSearch, Eye, Globe, BarChart3 } from "/node_modules/.vite/deps/lucide-react.js?v=76f08321";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
const features = [
  {
    icon: Search,
    title: "AI Website Threat Detection",
    description: "Scan suspicious URLs, detect phishing, fake login pages, hidden trackers, and malicious redirects with real-time AI scoring.",
    color: "text-neon-blue",
    borderColor: "border-neon-blue/20"
  },
  {
    icon: FileSearch,
    title: "Application Sandbox",
    description: "Upload and deep AI inspect .apk, .exe, .zip files with sandbox execution, malware behavior analysis, and spyware detection.",
    color: "text-neon-purple",
    borderColor: "border-neon-purple/20"
  },
  {
    icon: Eye,
    title: "Privacy & Tracker Protection",
    description: "Real-time tracker monitoring, fingerprinting detection, cookie analysis, credential theft prevention, and ad blocking.",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20"
  },
  {
    icon: Globe,
    title: "Browser Extension",
    description: "Real-time malicious site blocking, anti-phishing alerts, download protection, and DNS filtering across all major browsers.",
    color: "text-amber-400",
    borderColor: "border-amber-400/20"
  },
  {
    icon: BarChart3,
    title: "AI Security Dashboard",
    description: "Overall protection score, threat analytics, real-time scan logs, AI recommendations, and threat map visualization.",
    color: "text-neon-blue",
    borderColor: "border-neon-blue/20"
  },
  {
    icon: Shield,
    title: "Report Generation",
    description: "Generate PDF, CSV, JSON reports with threat scores, malware indicators, privacy risk scores, and AI-generated summaries.",
    color: "text-rose-400",
    borderColor: "border-rose-400/20"
  },
  {
    icon: Search,
    title: "Email Breach Checker",
    description: "Check if your email appeared in known data breaches. Powered by global breach intelligence with detailed recommendations.",
    color: "text-amber-400",
    borderColor: "border-amber-400/20"
  }
];
export default function FeaturesSection() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/FeaturesSection:60:4", "data-dynamic-content": "true", className: "py-24 px-4 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:61:6", "data-dynamic-content": "false", className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" }, void 0, false, {
      fileName: "/app/src/components/landing/FeaturesSection.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:62:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/FeaturesSection:63:8",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/FeaturesSection:69:10", "data-dynamic-content": "false", className: "text-primary text-sm font-semibold uppercase tracking-widest", children: "Platform Features" }, void 0, false, {
              fileName: "/app/src/components/landing/FeaturesSection.jsx",
              lineNumber: 88,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/FeaturesSection:70:10", "data-dynamic-content": "false", className: "text-3xl md:text-5xl font-bold mt-4 mb-4", children: [
              "Complete ",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/FeaturesSection:71:21", "data-dynamic-content": "false", className: "gradient-text", children: "Cyber Defense" }, void 0, false, {
                fileName: "/app/src/components/landing/FeaturesSection.jsx",
                lineNumber: 90,
                columnNumber: 22
              }, this),
              " Suite"
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/FeaturesSection.jsx",
              lineNumber: 89,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/FeaturesSection:73:10", "data-dynamic-content": "false", className: "text-muted-foreground max-w-2xl mx-auto", children: "Everything you need to protect your digital presence, powered by cutting-edge AI." }, void 0, false, {
              fileName: "/app/src/components/landing/FeaturesSection.jsx",
              lineNumber: 92,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/landing/FeaturesSection.jsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:78:8", "data-dynamic-content": "true", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((feature, i) => {
        const Icon = feature.icon;
        return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/landing/FeaturesSection:82:14", "data-dynamic-content": "true", delay: i * 0.1, className: `${feature.borderColor}`, "data-arr-index": i, "data-arr-variable-name": "features", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:83:16", "data-dynamic-content": "true", className: `w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${feature.borderColor} border`, "data-arr-index": i, "data-arr-variable-name": "features", children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "components/landing/FeaturesSection:84:18", "data-dynamic-content": "true", className: `w-6 h-6 ${feature.color}`, "data-arr-index": i, "data-arr-variable-name": "features" }, void 0, false, {
            fileName: "/app/src/components/landing/FeaturesSection.jsx",
            lineNumber: 103,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/src/components/landing/FeaturesSection.jsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/landing/FeaturesSection:86:16", "data-dynamic-content": "true", className: "text-lg font-semibold text-foreground mb-2", "data-arr-index": i, "data-arr-variable-name": "features", "data-arr-field": "title", children: feature.title }, void 0, false, {
            fileName: "/app/src/components/landing/FeaturesSection.jsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/FeaturesSection:87:16", "data-dynamic-content": "true", className: "text-sm text-muted-foreground leading-relaxed", "data-arr-index": i, "data-arr-variable-name": "features", "data-arr-field": "description", children: feature.description }, void 0, false, {
            fileName: "/app/src/components/landing/FeaturesSection.jsx",
            lineNumber: 106,
            columnNumber: 17
          }, this)
        ] }, feature.title, true, {
          fileName: "/app/src/components/landing/FeaturesSection.jsx",
          lineNumber: 101,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "/app/src/components/landing/FeaturesSection.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/FeaturesSection.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/FeaturesSection.jsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
_c = FeaturesSection;
var _c;
$RefreshReg$(_c, "FeaturesSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/FeaturesSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/FeaturesSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBNERNOzs7Ozs7Ozs7Ozs7Ozs7O0FBNUROLE9BQU9BLFdBQVc7QUFDbEIsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxRQUFRQyxRQUFRQyxZQUFZQyxLQUFLQyxPQUFPQyxpQkFBaUI7QUFDbEUsT0FBT0MsZUFBZTtBQUV0QixNQUFNQyxXQUFXO0FBQUEsRUFDakI7QUFBQSxJQUNFQyxNQUFNUDtBQUFBQSxJQUNOUSxPQUFPO0FBQUEsSUFDUEMsYUFBYTtBQUFBLElBQ2JDLE9BQU87QUFBQSxJQUNQQyxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNFSixNQUFNTjtBQUFBQSxJQUNOTyxPQUFPO0FBQUEsSUFDUEMsYUFBYTtBQUFBLElBQ2JDLE9BQU87QUFBQSxJQUNQQyxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNFSixNQUFNTDtBQUFBQSxJQUNOTSxPQUFPO0FBQUEsSUFDUEMsYUFBYTtBQUFBLElBQ2JDLE9BQU87QUFBQSxJQUNQQyxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNFSixNQUFNSjtBQUFBQSxJQUNOSyxPQUFPO0FBQUEsSUFDUEMsYUFBYTtBQUFBLElBQ2JDLE9BQU87QUFBQSxJQUNQQyxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNFSixNQUFNSDtBQUFBQSxJQUNOSSxPQUFPO0FBQUEsSUFDUEMsYUFBYTtBQUFBLElBQ2JDLE9BQU87QUFBQSxJQUNQQyxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNFSixNQUFNUjtBQUFBQSxJQUNOUyxPQUFPO0FBQUEsSUFDUEMsYUFBYTtBQUFBLElBQ2JDLE9BQU87QUFBQSxJQUNQQyxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNFSixNQUFNUDtBQUFBQSxJQUNOUSxPQUFPO0FBQUEsSUFDUEMsYUFBYTtBQUFBLElBQ2JDLE9BQU87QUFBQSxJQUNQQyxhQUFhO0FBQUEsRUFDZjtBQUFDO0FBR0Qsd0JBQXdCQyxrQkFBa0I7QUFDeEMsU0FDRSx1QkFBQyxhQUFRLHdCQUFxQiwyQ0FBMEMsd0JBQXFCLFFBQU8sV0FBVSx1QkFDNUc7QUFBQSwyQkFBQyxTQUFJLHdCQUFxQiwyQ0FBMEMsd0JBQXFCLFNBQVEsV0FBVSx3R0FBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUErTTtBQUFBLElBQy9NLHVCQUFDLFNBQUksd0JBQXFCLDJDQUEwQyx3QkFBcUIsUUFBTyxXQUFVLHFCQUN4RztBQUFBO0FBQUEsUUFBQyxPQUFPO0FBQUEsUUFBUDtBQUFBLFVBQVcsd0JBQXFCO0FBQUEsVUFBMEMsd0JBQXFCO0FBQUEsVUFDaEcsU0FBUyxFQUFFQyxTQUFTLEdBQUdDLEdBQUcsR0FBRztBQUFBLFVBQzdCLGFBQWEsRUFBRUQsU0FBUyxHQUFHQyxHQUFHLEVBQUU7QUFBQSxVQUNoQyxVQUFVLEVBQUVDLE1BQU0sS0FBSztBQUFBLFVBQ3ZCLFdBQVU7QUFBQSxVQUVSO0FBQUEsbUNBQUMsVUFBSyx3QkFBcUIsNENBQTJDLHdCQUFxQixTQUFRLFdBQVUsZ0VBQStELGlDQUE1SztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE2TDtBQUFBLFlBQzdMLHVCQUFDLFFBQUcsd0JBQXFCLDRDQUEyQyx3QkFBcUIsU0FBUSxXQUFVLDRDQUEwQztBQUFBO0FBQUEsY0FDMUksdUJBQUMsVUFBSyx3QkFBcUIsNENBQTJDLHdCQUFxQixTQUFRLFdBQVUsaUJBQWdCLDZCQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUEwSTtBQUFBLGNBQU87QUFBQSxpQkFENUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQTtBQUFBLFlBQ0EsdUJBQUMsT0FBRSx3QkFBcUIsNENBQTJDLHdCQUFxQixTQUFRLFdBQVUsMkNBQXlDLGlHQUFuSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBO0FBQUE7QUFBQTtBQUFBLFFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYUE7QUFBQSxNQUVBLHVCQUFDLFNBQUksd0JBQXFCLDJDQUEwQyx3QkFBcUIsUUFBTyxXQUFVLDRDQUN2R1QsbUJBQVNVLElBQUksQ0FBQ0MsU0FBU0MsTUFBTTtBQUM1QixjQUFNQyxPQUFPRixRQUFRVjtBQUNyQixlQUNFLHVCQUFDLGFBQVUsd0JBQXFCLDRDQUEyQyx3QkFBcUIsUUFBMkIsT0FBT1csSUFBSSxLQUFLLFdBQVcsR0FBR0QsUUFBUU4sV0FBVyxJQUFJLGtCQUFnQk8sR0FBRywwQkFBdUIsWUFDeE47QUFBQSxpQ0FBQyxTQUFJLHdCQUFxQiw0Q0FBMkMsd0JBQXFCLFFBQU8sV0FBVywyRUFBMkVELFFBQVFOLFdBQVcsV0FBVyxrQkFBZ0JPLEdBQUcsMEJBQXVCLFlBQzdQLGlDQUFDLFFBQUssd0JBQXFCLDRDQUEyQyx3QkFBcUIsUUFBTyxXQUFXLFdBQVdELFFBQVFQLEtBQUssSUFBSSxrQkFBZ0JRLEdBQUcsMEJBQXVCLGNBQW5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTZMLEtBRC9MO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUE7QUFBQSxVQUNBLHVCQUFDLFFBQUcsd0JBQXFCLDRDQUEyQyx3QkFBcUIsUUFBTyxXQUFVLDhDQUE2QyxrQkFBZ0JBLEdBQUcsMEJBQXVCLFlBQVcsa0JBQWUsU0FBU0Qsa0JBQVFULFNBQTVPO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWtQO0FBQUEsVUFDbFAsdUJBQUMsT0FBRSx3QkFBcUIsNENBQTJDLHdCQUFxQixRQUFPLFdBQVUsaURBQWdELGtCQUFnQlUsR0FBRywwQkFBdUIsWUFBVyxrQkFBZSxlQUFlRCxrQkFBUVIsZUFBcFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZ1E7QUFBQSxhQUx0SlEsUUFBUVQsT0FBcEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU1BO0FBQUEsTUFFSixDQUFDLEtBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWFBO0FBQUEsU0E3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQThCQTtBQUFBLE9BaENGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FpQ0E7QUFFSjtBQUFDWSxLQXJDdUJSO0FBQWUsSUFBQVE7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJTaGllbGQiLCJTZWFyY2giLCJGaWxlU2VhcmNoIiwiRXllIiwiR2xvYmUiLCJCYXJDaGFydDMiLCJHbGFzc0NhcmQiLCJmZWF0dXJlcyIsImljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJib3JkZXJDb2xvciIsIkZlYXR1cmVzU2VjdGlvbiIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsIm1hcCIsImZlYXR1cmUiLCJpIiwiSWNvbiIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkZlYXR1cmVzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgU2hpZWxkLCBTZWFyY2gsIEZpbGVTZWFyY2gsIEV5ZSwgR2xvYmUsIEJhckNoYXJ0MyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgR2xhc3NDYXJkIGZyb20gJy4uL3VpLWN1c3RvbS9HbGFzc0NhcmQnO1xuXG5jb25zdCBmZWF0dXJlcyA9IFtcbntcbiAgaWNvbjogU2VhcmNoLFxuICB0aXRsZTogJ0FJIFdlYnNpdGUgVGhyZWF0IERldGVjdGlvbicsXG4gIGRlc2NyaXB0aW9uOiAnU2NhbiBzdXNwaWNpb3VzIFVSTHMsIGRldGVjdCBwaGlzaGluZywgZmFrZSBsb2dpbiBwYWdlcywgaGlkZGVuIHRyYWNrZXJzLCBhbmQgbWFsaWNpb3VzIHJlZGlyZWN0cyB3aXRoIHJlYWwtdGltZSBBSSBzY29yaW5nLicsXG4gIGNvbG9yOiAndGV4dC1uZW9uLWJsdWUnLFxuICBib3JkZXJDb2xvcjogJ2JvcmRlci1uZW9uLWJsdWUvMjAnXG59LFxue1xuICBpY29uOiBGaWxlU2VhcmNoLFxuICB0aXRsZTogJ0FwcGxpY2F0aW9uIFNhbmRib3gnLFxuICBkZXNjcmlwdGlvbjogJ1VwbG9hZCBhbmQgZGVlcCBBSSBpbnNwZWN0IC5hcGssIC5leGUsIC56aXAgZmlsZXMgd2l0aCBzYW5kYm94IGV4ZWN1dGlvbiwgbWFsd2FyZSBiZWhhdmlvciBhbmFseXNpcywgYW5kIHNweXdhcmUgZGV0ZWN0aW9uLicsXG4gIGNvbG9yOiAndGV4dC1uZW9uLXB1cnBsZScsXG4gIGJvcmRlckNvbG9yOiAnYm9yZGVyLW5lb24tcHVycGxlLzIwJ1xufSxcbntcbiAgaWNvbjogRXllLFxuICB0aXRsZTogJ1ByaXZhY3kgJiBUcmFja2VyIFByb3RlY3Rpb24nLFxuICBkZXNjcmlwdGlvbjogJ1JlYWwtdGltZSB0cmFja2VyIG1vbml0b3JpbmcsIGZpbmdlcnByaW50aW5nIGRldGVjdGlvbiwgY29va2llIGFuYWx5c2lzLCBjcmVkZW50aWFsIHRoZWZ0IHByZXZlbnRpb24sIGFuZCBhZCBibG9ja2luZy4nLFxuICBjb2xvcjogJ3RleHQtZW1lcmFsZC00MDAnLFxuICBib3JkZXJDb2xvcjogJ2JvcmRlci1lbWVyYWxkLTQwMC8yMCdcbn0sXG57XG4gIGljb246IEdsb2JlLFxuICB0aXRsZTogJ0Jyb3dzZXIgRXh0ZW5zaW9uJyxcbiAgZGVzY3JpcHRpb246ICdSZWFsLXRpbWUgbWFsaWNpb3VzIHNpdGUgYmxvY2tpbmcsIGFudGktcGhpc2hpbmcgYWxlcnRzLCBkb3dubG9hZCBwcm90ZWN0aW9uLCBhbmQgRE5TIGZpbHRlcmluZyBhY3Jvc3MgYWxsIG1ham9yIGJyb3dzZXJzLicsXG4gIGNvbG9yOiAndGV4dC1hbWJlci00MDAnLFxuICBib3JkZXJDb2xvcjogJ2JvcmRlci1hbWJlci00MDAvMjAnXG59LFxue1xuICBpY29uOiBCYXJDaGFydDMsXG4gIHRpdGxlOiAnQUkgU2VjdXJpdHkgRGFzaGJvYXJkJyxcbiAgZGVzY3JpcHRpb246ICdPdmVyYWxsIHByb3RlY3Rpb24gc2NvcmUsIHRocmVhdCBhbmFseXRpY3MsIHJlYWwtdGltZSBzY2FuIGxvZ3MsIEFJIHJlY29tbWVuZGF0aW9ucywgYW5kIHRocmVhdCBtYXAgdmlzdWFsaXphdGlvbi4nLFxuICBjb2xvcjogJ3RleHQtbmVvbi1ibHVlJyxcbiAgYm9yZGVyQ29sb3I6ICdib3JkZXItbmVvbi1ibHVlLzIwJ1xufSxcbntcbiAgaWNvbjogU2hpZWxkLFxuICB0aXRsZTogJ1JlcG9ydCBHZW5lcmF0aW9uJyxcbiAgZGVzY3JpcHRpb246ICdHZW5lcmF0ZSBQREYsIENTViwgSlNPTiByZXBvcnRzIHdpdGggdGhyZWF0IHNjb3JlcywgbWFsd2FyZSBpbmRpY2F0b3JzLCBwcml2YWN5IHJpc2sgc2NvcmVzLCBhbmQgQUktZ2VuZXJhdGVkIHN1bW1hcmllcy4nLFxuICBjb2xvcjogJ3RleHQtcm9zZS00MDAnLFxuICBib3JkZXJDb2xvcjogJ2JvcmRlci1yb3NlLTQwMC8yMCdcbn0sXG57XG4gIGljb246IFNlYXJjaCxcbiAgdGl0bGU6ICdFbWFpbCBCcmVhY2ggQ2hlY2tlcicsXG4gIGRlc2NyaXB0aW9uOiAnQ2hlY2sgaWYgeW91ciBlbWFpbCBhcHBlYXJlZCBpbiBrbm93biBkYXRhIGJyZWFjaGVzLiBQb3dlcmVkIGJ5IGdsb2JhbCBicmVhY2ggaW50ZWxsaWdlbmNlIHdpdGggZGV0YWlsZWQgcmVjb21tZW5kYXRpb25zLicsXG4gIGNvbG9yOiAndGV4dC1hbWJlci00MDAnLFxuICBib3JkZXJDb2xvcjogJ2JvcmRlci1hbWJlci00MDAvMjAnXG59XTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlc1NlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjYwOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0yNCBweC00IHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjo2MTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIGgtcHggYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS1wcmltYXJ5LzIwIHRvLXRyYW5zcGFyZW50XCIgLz5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjYyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxuICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246NjM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTE2XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjY5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlBsYXRmb3JtIEZlYXR1cmVzPC9zcGFuPlxuICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246NzA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgQ29tcGxldGUgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjcxOjIxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImdyYWRpZW50LXRleHRcIj5DeWJlciBEZWZlbnNlPC9zcGFuPiBTdWl0ZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjczOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgRXZlcnl0aGluZyB5b3UgbmVlZCB0byBwcm90ZWN0IHlvdXIgZGlnaXRhbCBwcmVzZW5jZSwgcG93ZXJlZCBieSBjdXR0aW5nLWVkZ2UgQUkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246Nzg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBJY29uID0gZmVhdHVyZS5pY29uO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246ODI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2ZlYXR1cmUudGl0bGV9IGRlbGF5PXtpICogMC4xfSBjbGFzc05hbWU9e2Ake2ZlYXR1cmUuYm9yZGVyQ29sb3J9YH0gZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJmZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjgzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy0xMiBoLTEyIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTQgJHtmZWF0dXJlLmJvcmRlckNvbG9yfSBib3JkZXJgfSBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImZlYXR1cmVzXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246ODQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTYgaC02ICR7ZmVhdHVyZS5jb2xvcn1gfSBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImZlYXR1cmVzXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjg2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJmZWF0dXJlc1wiIGRhdGEtYXJyLWZpZWxkPVwidGl0bGVcIj57ZmVhdHVyZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjo4NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZmVhdHVyZXNcIiBkYXRhLWFyci1maWVsZD1cImRlc2NyaXB0aW9uXCI+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L0dsYXNzQ2FyZD4pO1xuXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb24uanN4In0=