import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/ComparisonSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/ComparisonSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
import { Check, X, Minus } from "/node_modules/.vite/deps/lucide-react.js?v=ef8b20f3";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
const competitors = ["CYGUARD", "AdGuard DNS", "uBlock Origin", "VirusTotal", "Malwarebytes"];
const features = [
  { name: "AI-Powered Analysis", values: [true, false, false, "partial", "partial"] },
  { name: "Full Sandbox Support", values: [true, false, false, true, false] },
  { name: "Website Intelligence", values: [true, "partial", false, true, false] },
  { name: "Privacy Monitoring", values: [true, true, true, false, false] },
  { name: "Unified Dashboard", values: [true, false, false, false, true] },
  { name: "Browser Extension", values: [true, true, true, false, true] },
  { name: "Beginner-Friendly", values: [true, false, false, false, true] },
  { name: "Report Generation", values: [true, false, false, "partial", "partial"] }
];
function CellIcon({ value }) {
  if (value === true) return /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "components/landing/ComparisonSection:19:29", "data-dynamic-content": "false", className: "w-4 h-4 text-emerald-400" }, void 0, false, {
    fileName: "/app/src/components/landing/ComparisonSection.jsx",
    lineNumber: 38,
    columnNumber: 30
  }, this);
  if (value === false) return /* @__PURE__ */ jsxDEV(X, { "data-source-location": "components/landing/ComparisonSection:20:30", "data-dynamic-content": "false", className: "w-4 h-4 text-red-400/60" }, void 0, false, {
    fileName: "/app/src/components/landing/ComparisonSection.jsx",
    lineNumber: 39,
    columnNumber: 31
  }, this);
  return /* @__PURE__ */ jsxDEV(Minus, { "data-source-location": "components/landing/ComparisonSection:21:9", "data-dynamic-content": "false", className: "w-4 h-4 text-amber-400" }, void 0, false, {
    fileName: "/app/src/components/landing/ComparisonSection.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c = CellIcon;
export default function ComparisonSection() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/ComparisonSection:26:4", "data-dynamic-content": "true", className: "py-24 px-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/ComparisonSection:27:6", "data-dynamic-content": "true", className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/ComparisonSection:28:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/ComparisonSection:34:10", "data-dynamic-content": "false", className: "text-primary text-sm font-semibold uppercase tracking-widest", children: "Comparison" }, void 0, false, {
            fileName: "/app/src/components/landing/ComparisonSection.jsx",
            lineNumber: 53,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/ComparisonSection:35:10", "data-dynamic-content": "false", className: "text-3xl md:text-5xl font-bold mt-4 mb-4", children: [
            "Why Choose ",
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/ComparisonSection:36:23", "data-dynamic-content": "false", className: "gradient-text", children: "CYGUARD" }, void 0, false, {
              fileName: "/app/src/components/landing/ComparisonSection.jsx",
              lineNumber: 55,
              columnNumber: 24
            }, this),
            "?"
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/ComparisonSection.jsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/ComparisonSection:38:10", "data-dynamic-content": "false", className: "text-muted-foreground max-w-2xl mx-auto", children: "See how CYGUARD compares against the most popular cybersecurity tools." }, void 0, false, {
            fileName: "/app/src/components/landing/ComparisonSection.jsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/ComparisonSection.jsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/landing/ComparisonSection:43:8", "data-dynamic-content": "true", hover: false, className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { "data-source-location": "components/landing/ComparisonSection:44:10", "data-dynamic-content": "true", className: "w-full min-w-[600px]", children: [
      /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "components/landing/ComparisonSection:45:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "components/landing/ComparisonSection:46:14", "data-dynamic-content": "true", className: "border-b border-border", children: [
        /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/landing/ComparisonSection:47:16", "data-dynamic-content": "false", className: "text-left py-4 px-4 text-sm font-medium text-muted-foreground", children: "Feature" }, void 0, false, {
          fileName: "/app/src/components/landing/ComparisonSection.jsx",
          lineNumber: 66,
          columnNumber: 17
        }, this),
        competitors.map(
          (c, i) => /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/landing/ComparisonSection:49:18", "data-dynamic-content": "true", className: `py-4 px-3 text-center text-sm font-semibold ${i === 0 ? "text-primary" : "text-muted-foreground"}`, "data-arr-index": i, "data-arr-variable-name": "competitors", children: c }, c, false, {
            fileName: "/app/src/components/landing/ComparisonSection.jsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/landing/ComparisonSection.jsx",
        lineNumber: 65,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/components/landing/ComparisonSection.jsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "components/landing/ComparisonSection:55:12", "data-dynamic-content": "true", children: features.map(
        (feature, i) => /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "components/landing/ComparisonSection:57:16", "data-dynamic-content": "true", className: "border-b border-border/50 last:border-0", "data-arr-index": i, "data-arr-variable-name": "features", children: [
          /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/landing/ComparisonSection:58:18", "data-dynamic-content": "true", className: "py-3.5 px-4 text-sm text-foreground", "data-arr-index": i, "data-arr-variable-name": "features", "data-arr-field": "name", children: feature.name }, void 0, false, {
            fileName: "/app/src/components/landing/ComparisonSection.jsx",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          feature.values.map(
            (val, j) => /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/landing/ComparisonSection:60:20", "data-dynamic-content": "true", className: `py-3.5 px-3 text-center ${j === 0 ? "bg-primary/5" : ""}`, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/ComparisonSection:61:22", "data-dynamic-content": "true", className: "flex justify-center", children: /* @__PURE__ */ jsxDEV(CellIcon, { "data-source-location": "components/landing/ComparisonSection:61:59", "data-dynamic-content": "true", value: val }, void 0, false, {
              fileName: "/app/src/components/landing/ComparisonSection.jsx",
              lineNumber: 80,
              columnNumber: 154
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/ComparisonSection.jsx",
              lineNumber: 80,
              columnNumber: 23
            }, this) }, j, false, {
              fileName: "/app/src/components/landing/ComparisonSection.jsx",
              lineNumber: 79,
              columnNumber: 17
            }, this)
          )
        ] }, feature.name, true, {
          fileName: "/app/src/components/landing/ComparisonSection.jsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/components/landing/ComparisonSection.jsx",
        lineNumber: 74,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/ComparisonSection.jsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/components/landing/ComparisonSection.jsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/ComparisonSection.jsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/components/landing/ComparisonSection.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
_c2 = ComparisonSection;
var _c, _c2;
$RefreshReg$(_c, "CellIcon");
$RefreshReg$(_c2, "ComparisonSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/ComparisonSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/ComparisonSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0I2Qjs7Ozs7Ozs7Ozs7Ozs7OztBQWxCN0IsT0FBT0EsV0FBVztBQUNsQixTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLE9BQU9DLEdBQUdDLGFBQWE7QUFDaEMsT0FBT0MsZUFBZTtBQUV0QixNQUFNQyxjQUFjLENBQUMsV0FBVyxlQUFlLGlCQUFpQixjQUFjLGNBQWM7QUFDNUYsTUFBTUMsV0FBVztBQUFBLEVBQ2pCLEVBQUVDLE1BQU0sdUJBQXVCQyxRQUFRLENBQUMsTUFBTSxPQUFPLE9BQU8sV0FBVyxTQUFTLEVBQUU7QUFBQSxFQUNsRixFQUFFRCxNQUFNLHdCQUF3QkMsUUFBUSxDQUFDLE1BQU0sT0FBTyxPQUFPLE1BQU0sS0FBSyxFQUFFO0FBQUEsRUFDMUUsRUFBRUQsTUFBTSx3QkFBd0JDLFFBQVEsQ0FBQyxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssRUFBRTtBQUFBLEVBQzlFLEVBQUVELE1BQU0sc0JBQXNCQyxRQUFRLENBQUMsTUFBTSxNQUFNLE1BQU0sT0FBTyxLQUFLLEVBQUU7QUFBQSxFQUN2RSxFQUFFRCxNQUFNLHFCQUFxQkMsUUFBUSxDQUFDLE1BQU0sT0FBTyxPQUFPLE9BQU8sSUFBSSxFQUFFO0FBQUEsRUFDdkUsRUFBRUQsTUFBTSxxQkFBcUJDLFFBQVEsQ0FBQyxNQUFNLE1BQU0sTUFBTSxPQUFPLElBQUksRUFBRTtBQUFBLEVBQ3JFLEVBQUVELE1BQU0scUJBQXFCQyxRQUFRLENBQUMsTUFBTSxPQUFPLE9BQU8sT0FBTyxJQUFJLEVBQUU7QUFBQSxFQUN2RSxFQUFFRCxNQUFNLHFCQUFxQkMsUUFBUSxDQUFDLE1BQU0sT0FBTyxPQUFPLFdBQVcsU0FBUyxFQUFFO0FBQUM7QUFHakYsU0FBU0MsU0FBUyxFQUFFQyxNQUFNLEdBQUc7QUFDM0IsTUFBSUEsVUFBVSxLQUFNLFFBQU8sdUJBQUMsU0FBTSx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUsOEJBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMEk7QUFDckssTUFBSUEsVUFBVSxNQUFPLFFBQU8sdUJBQUMsS0FBRSx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUsNkJBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcUk7QUFDakssU0FBTyx1QkFBQyxTQUFNLHdCQUFxQiw2Q0FBNEMsd0JBQXFCLFNBQVEsV0FBVSw0QkFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1STtBQUNoSjtBQUFDQyxLQUpRRjtBQU1ULHdCQUF3Qkcsb0JBQW9CO0FBQzFDLFNBQ0UsdUJBQUMsYUFBUSx3QkFBcUIsNkNBQTRDLHdCQUFxQixRQUFPLFdBQVUsY0FDOUcsaUNBQUMsU0FBSSx3QkFBcUIsNkNBQTRDLHdCQUFxQixRQUFPLFdBQVUscUJBQzFHO0FBQUE7QUFBQSxNQUFDLE9BQU87QUFBQSxNQUFQO0FBQUEsUUFBVyx3QkFBcUI7QUFBQSxRQUE0Qyx3QkFBcUI7QUFBQSxRQUNsRyxTQUFTLEVBQUVDLFNBQVMsR0FBR0MsR0FBRyxHQUFHO0FBQUEsUUFDN0IsYUFBYSxFQUFFRCxTQUFTLEdBQUdDLEdBQUcsRUFBRTtBQUFBLFFBQ2hDLFVBQVUsRUFBRUMsTUFBTSxLQUFLO0FBQUEsUUFDdkIsV0FBVTtBQUFBLFFBRVI7QUFBQSxpQ0FBQyxVQUFLLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQVEsV0FBVSxnRUFBK0QsMEJBQTlLO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXdMO0FBQUEsVUFDeEwsdUJBQUMsUUFBRyx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUsNENBQTBDO0FBQUE7QUFBQSxZQUMxSSx1QkFBQyxVQUFLLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQVEsV0FBVSxpQkFBZ0IsdUJBQS9IO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXNJO0FBQUEsWUFBTztBQUFBLGVBRDFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUE7QUFBQSxVQUNBLHVCQUFDLE9BQUUsd0JBQXFCLDhDQUE2Qyx3QkFBcUIsU0FBUSxXQUFVLDJDQUF5QyxzRkFBcko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBO0FBQUE7QUFBQSxNQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWFBO0FBQUEsSUFFQSx1QkFBQyxhQUFVLHdCQUFxQiw2Q0FBNEMsd0JBQXFCLFFBQU8sT0FBTyxPQUFPLFdBQVUsbUJBQzlILGlDQUFDLFdBQU0sd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFBTyxXQUFVLHdCQUM3RztBQUFBLDZCQUFDLFdBQU0sd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFDNUYsaUNBQUMsUUFBRyx3QkFBcUIsOENBQTZDLHdCQUFxQixRQUFPLFdBQVUsMEJBQzFHO0FBQUEsK0JBQUMsUUFBRyx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUsaUVBQWdFLHVCQUE3SztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW9MO0FBQUEsUUFDbkxWLFlBQVlXO0FBQUFBLFVBQUksQ0FBQ0MsR0FBR0MsTUFDckIsdUJBQUMsUUFBRyx3QkFBcUIsOENBQTZDLHdCQUFxQixRQUFlLFdBQVcsK0NBQStDQSxNQUFNLElBQUksaUJBQWlCLHVCQUF1QixJQUFJLGtCQUFnQkEsR0FBRywwQkFBdUIsZUFDL1BELGVBRGtHQSxHQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVFO0FBQUEsUUFDRjtBQUFBLFdBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU9BLEtBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVNBO0FBQUEsTUFDQSx1QkFBQyxXQUFNLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQzNGWCxtQkFBU1U7QUFBQUEsUUFBSSxDQUFDRyxTQUFTRCxNQUN4Qix1QkFBQyxRQUFHLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQTBCLFdBQVUsMkNBQTBDLGtCQUFnQkEsR0FBRywwQkFBdUIsWUFDL007QUFBQSxpQ0FBQyxRQUFHLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSx1Q0FBc0Msa0JBQWdCQSxHQUFHLDBCQUF1QixZQUFXLGtCQUFlLFFBQVFDLGtCQUFRWixRQUF0TztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUEyTztBQUFBLFVBQzFPWSxRQUFRWCxPQUFPUTtBQUFBQSxZQUFJLENBQUNJLEtBQUtDLE1BQzVCLHVCQUFDLFFBQUcsd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFBZSxXQUFXLDJCQUEyQkEsTUFBTSxJQUFJLGlCQUFpQixFQUFFLElBQ3ZLLGlDQUFDLFNBQUksd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFBTyxXQUFVLHVCQUFzQixpQ0FBQyxZQUFTLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sT0FBT0QsT0FBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbUgsS0FBdFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBeVAsS0FEeEpDLEdBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUk7QUFBQSxVQUNKO0FBQUEsYUFOcUdGLFFBQVFaLE1BQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFPRTtBQUFBLE1BQ0YsS0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBV0E7QUFBQSxTQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBdUJBLEtBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F5QkE7QUFBQSxPQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMENBLEtBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E0Q0E7QUFFSjtBQUFDZSxNQWhEdUJWO0FBQWlCLElBQUFELElBQUFXO0FBQUEsYUFBQVgsSUFBQTtBQUFBLGFBQUFXLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkNoZWNrIiwiWCIsIk1pbnVzIiwiR2xhc3NDYXJkIiwiY29tcGV0aXRvcnMiLCJmZWF0dXJlcyIsIm5hbWUiLCJ2YWx1ZXMiLCJDZWxsSWNvbiIsInZhbHVlIiwiX2MiLCJDb21wYXJpc29uU2VjdGlvbiIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsIm1hcCIsImMiLCJpIiwiZmVhdHVyZSIsInZhbCIsImoiLCJfYzIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ29tcGFyaXNvblNlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IENoZWNrLCBYLCBNaW51cyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgR2xhc3NDYXJkIGZyb20gJy4uL3VpLWN1c3RvbS9HbGFzc0NhcmQnO1xuXG5jb25zdCBjb21wZXRpdG9ycyA9IFsnQ1lHVUFSRCcsICdBZEd1YXJkIEROUycsICd1QmxvY2sgT3JpZ2luJywgJ1ZpcnVzVG90YWwnLCAnTWFsd2FyZWJ5dGVzJ107XG5jb25zdCBmZWF0dXJlcyA9IFtcbnsgbmFtZTogJ0FJLVBvd2VyZWQgQW5hbHlzaXMnLCB2YWx1ZXM6IFt0cnVlLCBmYWxzZSwgZmFsc2UsICdwYXJ0aWFsJywgJ3BhcnRpYWwnXSB9LFxueyBuYW1lOiAnRnVsbCBTYW5kYm94IFN1cHBvcnQnLCB2YWx1ZXM6IFt0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlXSB9LFxueyBuYW1lOiAnV2Vic2l0ZSBJbnRlbGxpZ2VuY2UnLCB2YWx1ZXM6IFt0cnVlLCAncGFydGlhbCcsIGZhbHNlLCB0cnVlLCBmYWxzZV0gfSxcbnsgbmFtZTogJ1ByaXZhY3kgTW9uaXRvcmluZycsIHZhbHVlczogW3RydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZV0gfSxcbnsgbmFtZTogJ1VuaWZpZWQgRGFzaGJvYXJkJywgdmFsdWVzOiBbdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZV0gfSxcbnsgbmFtZTogJ0Jyb3dzZXIgRXh0ZW5zaW9uJywgdmFsdWVzOiBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWVdIH0sXG57IG5hbWU6ICdCZWdpbm5lci1GcmllbmRseScsIHZhbHVlczogW3RydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWVdIH0sXG57IG5hbWU6ICdSZXBvcnQgR2VuZXJhdGlvbicsIHZhbHVlczogW3RydWUsIGZhbHNlLCBmYWxzZSwgJ3BhcnRpYWwnLCAncGFydGlhbCddIH1dO1xuXG5cbmZ1bmN0aW9uIENlbGxJY29uKHsgdmFsdWUgfSkge1xuICBpZiAodmFsdWUgPT09IHRydWUpIHJldHVybiA8Q2hlY2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb246MTk6MjlcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz47XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHJldHVybiA8WCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjoyMDozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcmVkLTQwMC82MFwiIC8+O1xuICByZXR1cm4gPE1pbnVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NvbXBhcmlzb25TZWN0aW9uOjIxOjlcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWFtYmVyLTQwMFwiIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wYXJpc29uU2VjdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjoyNjo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMjQgcHgtNFwiPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjoyNzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb246Mjg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTE2XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb246MzQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+Q29tcGFyaXNvbjwvc3Bhbj5cbiAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb246MzU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgV2h5IENob29zZSA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjozNjoyM1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0XCI+Q1lHVUFSRDwvc3Bhbj4/XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjozODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIFNlZSBob3cgQ1lHVUFSRCBjb21wYXJlcyBhZ2FpbnN0IHRoZSBtb3N0IHBvcHVsYXIgY3liZXJzZWN1cml0eSB0b29scy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NvbXBhcmlzb25TZWN0aW9uOjQzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgIDx0YWJsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjo0NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctZnVsbCBtaW4tdy1bNjAwcHhdXCI+XG4gICAgICAgICAgICA8dGhlYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb246NDU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPHRyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NvbXBhcmlzb25TZWN0aW9uOjQ2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjo0NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHktNCBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+RmVhdHVyZTwvdGg+XG4gICAgICAgICAgICAgICAge2NvbXBldGl0b3JzLm1hcCgoYywgaSkgPT5cbiAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb246NDk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2N9IGNsYXNzTmFtZT17YHB5LTQgcHgtMyB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgJHtpID09PSAwID8gJ3RleHQtcHJpbWFyeScgOiAndGV4dC1tdXRlZC1mb3JlZ3JvdW5kJ31gfSBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImNvbXBldGl0b3JzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjfVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjo1NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpKSA9PlxuICAgICAgICAgICAgICA8dHIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb246NTc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2ZlYXR1cmUubmFtZX0gY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWJvcmRlci81MCBsYXN0OmJvcmRlci0wXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJmZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NvbXBhcmlzb25TZWN0aW9uOjU4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMy41IHB4LTQgdGV4dC1zbSB0ZXh0LWZvcmVncm91bmRcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImZlYXR1cmVzXCIgZGF0YS1hcnItZmllbGQ9XCJuYW1lXCI+e2ZlYXR1cmUubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAge2ZlYXR1cmUudmFsdWVzLm1hcCgodmFsLCBqKSA9PlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjo2MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17an0gY2xhc3NOYW1lPXtgcHktMy41IHB4LTMgdGV4dC1jZW50ZXIgJHtqID09PSAwID8gJ2JnLXByaW1hcnkvNScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NvbXBhcmlzb25TZWN0aW9uOjYxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPjxDZWxsSWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Db21wYXJpc29uU2VjdGlvbjo2MTo1OVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPXt2YWx9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L0dsYXNzQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb24uanN4In0=