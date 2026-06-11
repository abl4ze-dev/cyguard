import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui-custom/StatCard.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui-custom/StatCard.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
export default function StatCard({ icon: Icon, label, value, trend, trendUp, delay = 0, id }) {
  return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/ui-custom/StatCard:6:4", "data-dynamic-content": "true", delay, className: "flex items-start justify-between", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/ui-custom/StatCard:7:6", "data-dynamic-content": "true", className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/ui-custom/StatCard:8:8", "data-dynamic-content": "true", className: "text-sm text-muted-foreground font-medium", "data-collection-item-field": "label", "data-collection-item-id": id, children: label }, void 0, false, {
        fileName: "/app/src/components/ui-custom/StatCard.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/ui-custom/StatCard:9:8", "data-dynamic-content": "true", className: "text-3xl font-bold font-mono text-foreground", "data-collection-item-field": "value", "data-collection-item-id": id, children: value }, void 0, false, {
        fileName: "/app/src/components/ui-custom/StatCard.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      trend && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/ui-custom/StatCard:11:10", "data-dynamic-content": "true", className: `text-xs font-medium ${trendUp ? "text-emerald-400" : "text-red-400"}`, "data-collection-item-field": "trend", "data-collection-item-id": id, children: [
        trendUp ? "↑" : "↓",
        " ",
        trend
      ] }, void 0, true, {
        fileName: "/app/src/components/ui-custom/StatCard.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/ui-custom/StatCard.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/ui-custom/StatCard:16:6", "data-dynamic-content": "false", className: "p-3 rounded-xl bg-primary/10 border border-primary/20", children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "components/ui-custom/StatCard:17:8", "data-dynamic-content": "false", className: "w-5 h-5 text-primary" }, void 0, false, {
      fileName: "/app/src/components/ui-custom/StatCard.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/ui-custom/StatCard.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/ui-custom/StatCard.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
_c = StatCard;
var _c;
$RefreshReg$(_c, "StatCard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui-custom/StatCard.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui-custom/StatCard.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBT1E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQUixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGVBQWU7QUFFdEIsd0JBQXdCQyxTQUFTLEVBQUVDLE1BQU1DLE1BQU1DLE9BQU9DLE9BQU9DLE9BQU9DLFNBQVNDLFFBQVEsR0FBR0MsR0FBRyxHQUFHO0FBQzVGLFNBQ0UsdUJBQUMsYUFBVSx3QkFBcUIscUNBQW9DLHdCQUFxQixRQUFPLE9BQWMsV0FBVSxvQ0FDdEg7QUFBQSwyQkFBQyxTQUFJLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFFBQU8sV0FBVSxhQUNsRztBQUFBLDZCQUFDLE9BQUUsd0JBQXFCLHFDQUFvQyx3QkFBcUIsUUFBTyxXQUFVLDZDQUE0Qyw4QkFBMkIsU0FBUSwyQkFBeUJBLElBQUtMLG1CQUEvTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXFOO0FBQUEsTUFDck4sdUJBQUMsT0FBRSx3QkFBcUIscUNBQW9DLHdCQUFxQixRQUFPLFdBQVUsZ0RBQStDLDhCQUEyQixTQUFRLDJCQUF5QkssSUFBS0osbUJBQWxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBd047QUFBQSxNQUN2TkMsU0FDRCx1QkFBQyxPQUFFLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFFBQU8sV0FBVyx1QkFBdUJDLFVBQVUscUJBQXFCLGNBQWMsSUFBSSw4QkFBMkIsU0FBUSwyQkFBeUJFLElBQ3BPRjtBQUFBQSxrQkFBVSxNQUFNO0FBQUEsUUFBSTtBQUFBLFFBQUVEO0FBQUFBLFdBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFRTtBQUFBLFNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFBO0FBQUEsSUFDQSx1QkFBQyxTQUFJLHdCQUFxQixzQ0FBcUMsd0JBQXFCLFNBQVEsV0FBVSx5REFDcEcsaUNBQUMsUUFBSyx3QkFBcUIsc0NBQXFDLHdCQUFxQixTQUFRLFdBQVUsMEJBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNkgsS0FEL0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsT0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBYUE7QUFFSjtBQUFDSSxLQWpCdUJUO0FBQVEsSUFBQVM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJHbGFzc0NhcmQiLCJTdGF0Q2FyZCIsImljb24iLCJJY29uIiwibGFiZWwiLCJ2YWx1ZSIsInRyZW5kIiwidHJlbmRVcCIsImRlbGF5IiwiaWQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTdGF0Q2FyZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHbGFzc0NhcmQgZnJvbSAnLi9HbGFzc0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0Q2FyZCh7IGljb246IEljb24sIGxhYmVsLCB2YWx1ZSwgdHJlbmQsIHRyZW5kVXAsIGRlbGF5ID0gMCwgaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxHbGFzc0NhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpLWN1c3RvbS9TdGF0Q2FyZDo2OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkZWxheT17ZGVsYXl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy91aS1jdXN0b20vU3RhdENhcmQ6Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy91aS1jdXN0b20vU3RhdENhcmQ6ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT57bGFiZWx9PC9wPlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvdWktY3VzdG9tL1N0YXRDYXJkOjk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBmb250LW1vbm8gdGV4dC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ2YWx1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpZH0+e3ZhbHVlfTwvcD5cbiAgICAgICAge3RyZW5kICYmXG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy91aS1jdXN0b20vU3RhdENhcmQ6MTE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXhzIGZvbnQtbWVkaXVtICR7dHJlbmRVcCA/ICd0ZXh0LWVtZXJhbGQtNDAwJyA6ICd0ZXh0LXJlZC00MDAnfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidHJlbmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9PlxuICAgICAgICAgICAge3RyZW5kVXAgPyAn4oaRJyA6ICfihpMnfSB7dHJlbmR9XG4gICAgICAgICAgPC9wPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpLWN1c3RvbS9TdGF0Q2FyZDoxNjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLXByaW1hcnkvMTAgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwXCI+XG4gICAgICAgIDxJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy91aS1jdXN0b20vU3RhdENhcmQ6MTc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0dsYXNzQ2FyZD4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL3VpLWN1c3RvbS9TdGF0Q2FyZC5qc3gifQ==