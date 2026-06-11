import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/ProtectionStatus.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/ProtectionStatus.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
import { Shield, Wifi, Globe, Lock } from "/node_modules/.vite/deps/lucide-react.js?v=ef8b20f3";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import ScoreRing from "/src/components/ui-custom/ScoreRing.jsx";
const modules = [
  { icon: Globe, label: "Web Shield", active: true },
  { icon: Shield, label: "Malware Guard", active: true },
  { icon: Lock, label: "Privacy Block", active: true },
  { icon: Wifi, label: "DNS Filter", active: false }
];
export default function ProtectionStatus() {
  return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/dashboard/ProtectionStatus:16:4", "data-dynamic-content": "true", hover: false, className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/ProtectionStatus:17:6", "data-dynamic-content": "false", className: "text-lg font-semibold text-foreground mb-6 self-start", children: "Protection Status" }, void 0, false, {
      fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ProtectionStatus:19:6", "data-dynamic-content": "false", className: "relative mb-8", children: [
      /* @__PURE__ */ jsxDEV(ScoreRing, { "data-source-location": "components/dashboard/ProtectionStatus:20:8", "data-dynamic-content": "false", score: 87, size: 140, strokeWidth: 10, label: "Overall Score" }, void 0, false, {
        fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ProtectionStatus:21:8", "data-dynamic-content": "false", className: "absolute -top-1 -right-1", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ProtectionStatus:22:10", "data-dynamic-content": "false", className: "w-3 h-3 rounded-full bg-emerald-400 animate-pulse" }, void 0, false, {
        fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ProtectionStatus:26:6", "data-dynamic-content": "true", className: "w-full space-y-3", children: modules.map((mod, __arrIdx__) => {
      const Icon = mod.icon;
      return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ProtectionStatus:30:12", "data-dynamic-content": "true", className: "flex items-center justify-between p-2.5 rounded-xl bg-secondary/30", "data-arr-index": __arrIdx__, "data-arr-variable-name": "modules", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ProtectionStatus:31:14", "data-dynamic-content": "true", className: "flex items-center gap-2.5", "data-arr-index": __arrIdx__, "data-arr-variable-name": "modules", children: [
          /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "components/dashboard/ProtectionStatus:32:16", "data-dynamic-content": "false", className: "w-4 h-4 text-muted-foreground", "data-arr-index": __arrIdx__, "data-arr-variable-name": "modules" }, void 0, false, {
            fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
            lineNumber: 51,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/ProtectionStatus:33:16", "data-dynamic-content": "true", className: "text-sm text-foreground", "data-arr-index": __arrIdx__, "data-arr-variable-name": "modules", "data-arr-field": "label", children: mod.label }, void 0, false, {
            fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
            lineNumber: 52,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ProtectionStatus:35:14", "data-dynamic-content": "true", className: `w-8 h-5 rounded-full p-0.5 transition-colors ${mod.active ? "bg-emerald-500" : "bg-secondary"}`, "data-arr-index": __arrIdx__, "data-arr-variable-name": "modules", children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-source-location": "components/dashboard/ProtectionStatus:36:16",
            "data-dynamic-content": "true",
            className: "w-4 h-4 rounded-full bg-white",
            animate: { x: mod.active ? 12 : 0 },
            transition: { type: "spring", stiffness: 500, damping: 30 },
            "data-arr-index": __arrIdx__,
            "data-arr-variable-name": "modules"
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
            lineNumber: 55,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this)
      ] }, mod.label, true, {
        fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/ProtectionStatus.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
_c = ProtectionStatus;
var _c;
$RefreshReg$(_c, "ProtectionStatus");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/ProtectionStatus.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/ProtectionStatus.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFZLDBCQUF1QjtBQUFBO0FBQUEsVUFIaEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBR3lILEtBSjNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFNQTtBQUFBLFdBWHVHRCxJQUFJSixPQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWUE7QUFBQSxJQUVKLENBQUMsS0FsQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW1CQTtBQUFBLE9BN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E4QkE7QUFFSjtBQUFDVyxLQWxDdUJUO0FBQWdCLElBQUFTO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiU2hpZWxkIiwiV2lmaSIsIkdsb2JlIiwiTG9jayIsIkdsYXNzQ2FyZCIsIlNjb3JlUmluZyIsIm1vZHVsZXMiLCJpY29uIiwibGFiZWwiLCJhY3RpdmUiLCJQcm90ZWN0aW9uU3RhdHVzIiwibWFwIiwibW9kIiwiX19hcnJJZHhfXyIsIkljb24iLCJ4IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQcm90ZWN0aW9uU3RhdHVzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTaGllbGQsIFdpZmksIEdsb2JlLCBMb2NrIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBHbGFzc0NhcmQgZnJvbSAnLi4vdWktY3VzdG9tL0dsYXNzQ2FyZCc7XG5pbXBvcnQgU2NvcmVSaW5nIGZyb20gJy4uL3VpLWN1c3RvbS9TY29yZVJpbmcnO1xuXG5jb25zdCBtb2R1bGVzID0gW1xueyBpY29uOiBHbG9iZSwgbGFiZWw6ICdXZWIgU2hpZWxkJywgYWN0aXZlOiB0cnVlIH0sXG57IGljb246IFNoaWVsZCwgbGFiZWw6ICdNYWx3YXJlIEd1YXJkJywgYWN0aXZlOiB0cnVlIH0sXG57IGljb246IExvY2ssIGxhYmVsOiAnUHJpdmFjeSBCbG9jaycsIGFjdGl2ZTogdHJ1ZSB9LFxueyBpY29uOiBXaWZpLCBsYWJlbDogJ0ROUyBGaWx0ZXInLCBhY3RpdmU6IGZhbHNlIH1dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3RlY3Rpb25TdGF0dXMoKSB7XG4gIHJldHVybiAoXG4gICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1Byb3RlY3Rpb25TdGF0dXM6MTY6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1Byb3RlY3Rpb25TdGF0dXM6MTc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTYgc2VsZi1zdGFydFwiPlByb3RlY3Rpb24gU3RhdHVzPC9oMz5cblxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1Byb3RlY3Rpb25TdGF0dXM6MTk6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi04XCI+XG4gICAgICAgIDxTY29yZVJpbmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9Qcm90ZWN0aW9uU3RhdHVzOjIwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc2NvcmU9ezg3fSBzaXplPXsxNDB9IHN0cm9rZVdpZHRoPXsxMH0gbGFiZWw9XCJPdmVyYWxsIFNjb3JlXCIgLz5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1Byb3RlY3Rpb25TdGF0dXM6MjE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTFcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUHJvdGVjdGlvblN0YXR1czoyMjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTQwMCBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1Byb3RlY3Rpb25TdGF0dXM6MjY6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctZnVsbCBzcGFjZS15LTNcIj5cbiAgICAgICAge21vZHVsZXMubWFwKChtb2QsIF9fYXJySWR4X18pID0+IHtcbiAgICAgICAgICBjb25zdCBJY29uID0gbW9kLmljb247XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9Qcm90ZWN0aW9uU3RhdHVzOjMwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXttb2QubGFiZWx9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTIuNSByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS8zMFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwibW9kdWxlc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUHJvdGVjdGlvblN0YXR1czozMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjVcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIm1vZHVsZXNcIj5cbiAgICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1Byb3RlY3Rpb25TdGF0dXM6MzI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIm1vZHVsZXNcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUHJvdGVjdGlvblN0YXR1czozMzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1mb3JlZ3JvdW5kXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJtb2R1bGVzXCIgZGF0YS1hcnItZmllbGQ9XCJsYWJlbFwiPnttb2QubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1Byb3RlY3Rpb25TdGF0dXM6MzU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTggaC01IHJvdW5kZWQtZnVsbCBwLTAuNSB0cmFuc2l0aW9uLWNvbG9ycyAke21vZC5hY3RpdmUgPyAnYmctZW1lcmFsZC01MDAnIDogJ2JnLXNlY29uZGFyeSd9YH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJtb2R1bGVzXCI+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9Qcm90ZWN0aW9uU3RhdHVzOjM2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHJvdW5kZWQtZnVsbCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiBtb2QuYWN0aXZlID8gMTIgOiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiA1MDAsIGRhbXBpbmc6IDMwIH19IGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwibW9kdWxlc1wiIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KTtcblxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvR2xhc3NDYXJkPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb3RlY3Rpb25TdGF0dXMuanN4In0=