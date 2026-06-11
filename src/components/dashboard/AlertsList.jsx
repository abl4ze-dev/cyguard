import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/AlertsList.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/AlertsList.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { base44 } from "/src/api/base44Client.js";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=ef8b20f3";
import { AlertTriangle, Bug, Eye, Lock, Skull, Zap } from "/node_modules/.vite/deps/lucide-react.js?v=ef8b20f3";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
const categoryIcons = {
  phishing: AlertTriangle,
  malware: Bug,
  tracker: Eye,
  privacy: Lock,
  scam: Skull,
  exploit: Zap
};
const severityColors = {
  critical: "text-red-400 bg-red-400/10 border-red-400/20",
  high: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  medium: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  low: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
};
export default function AlertsList() {
  _s();
  const { data: alerts = [] } = useQuery({
    queryKey: ["alerts"],
    queryFn: () => base44.entities.ThreatAlert.filter({ resolved: false }, "-created_date", 5)
  });
  return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/dashboard/AlertsList:30:4", "data-dynamic-content": "true", hover: false, children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AlertsList:31:6", "data-dynamic-content": "true", className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AlertsList:32:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/AlertsList:33:10", "data-dynamic-content": "false", className: "text-lg font-semibold text-foreground", children: "Active Alerts" }, void 0, false, {
          fileName: "/app/src/components/dashboard/AlertsList.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AlertsList:34:10", "data-dynamic-content": "false", className: "text-sm text-muted-foreground", children: "Unresolved threats" }, void 0, false, {
          fileName: "/app/src/components/dashboard/AlertsList.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/AlertsList.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/AlertsList:36:8", "data-dynamic-content": "true", className: "text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full", children: [
        alerts.length,
        " active"
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/AlertsList.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/AlertsList.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    alerts.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AlertsList:42:8", "data-dynamic-content": "false", className: "text-center py-8 text-muted-foreground text-sm", children: [
      /* @__PURE__ */ jsxDEV(Lock, { "data-source-location": "components/dashboard/AlertsList:43:10", "data-dynamic-content": "false", className: "w-8 h-8 mx-auto mb-2 opacity-40" }, void 0, false, {
        fileName: "/app/src/components/dashboard/AlertsList.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      "No active threats. You're protected!"
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/AlertsList.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AlertsList:47:8", "data-dynamic-content": "true", className: "space-y-3", "data-collection-id": "ThreatAlert", children: alerts.map((alert) => {
      const Icon = categoryIcons[alert.category] || AlertTriangle;
      const sevClass = severityColors[alert.severity] || severityColors.low;
      return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AlertsList:52:14", "data-dynamic-content": "true", className: "flex items-start gap-3 p-3 rounded-xl bg-secondary/30", "data-collection-item-id": alert?.id, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AlertsList:53:16", "data-dynamic-content": "true", className: `p-2 rounded-lg border ${sevClass}`, children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "components/dashboard/AlertsList:54:18", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/src/components/dashboard/AlertsList.jsx",
          lineNumber: 73,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/AlertsList.jsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AlertsList:56:16", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AlertsList:57:18", "data-dynamic-content": "true", className: "text-sm font-medium text-foreground", "data-collection-item-field": "title", "data-collection-item-id": alert?.id, children: alert.title }, void 0, false, {
            fileName: "/app/src/components/dashboard/AlertsList.jsx",
            lineNumber: 76,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AlertsList:58:18", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-0.5 line-clamp-1", "data-collection-item-field": "description", "data-collection-item-id": alert?.id, children: alert.description }, void 0, false, {
            fileName: "/app/src/components/dashboard/AlertsList.jsx",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AlertsList:59:18", "data-dynamic-content": "true", className: "flex items-center gap-2 mt-1.5", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/AlertsList:60:20", "data-dynamic-content": "true", className: `text-[10px] uppercase font-bold tracking-wider ${sevClass.split(" ")[0]}`, "data-collection-item-field": "severity", "data-collection-item-id": alert?.id, children: alert.severity }, void 0, false, {
              fileName: "/app/src/components/dashboard/AlertsList.jsx",
              lineNumber: 79,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/AlertsList:63:20", "data-dynamic-content": "false", className: "text-[10px] text-muted-foreground", children: "•" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AlertsList.jsx",
              lineNumber: 82,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/AlertsList:64:20", "data-dynamic-content": "true", className: "text-[10px] text-muted-foreground capitalize", "data-collection-item-field": "category", "data-collection-item-id": alert?.id, children: alert.category }, void 0, false, {
              fileName: "/app/src/components/dashboard/AlertsList.jsx",
              lineNumber: 83,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AlertsList.jsx",
            lineNumber: 78,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/AlertsList.jsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, alert.id, true, {
        fileName: "/app/src/components/dashboard/AlertsList.jsx",
        lineNumber: 71,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/src/components/dashboard/AlertsList.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/AlertsList.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
_s(AlertsList, "3MLBGmPiBkoemZrBRwvJbncjQW0=", false, function() {
  return [useQuery];
});
_c = AlertsList;
var _c;
$RefreshReg$(_c, "AlertsList");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/AlertsList.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/AlertsList.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUEsU0EwQ0E7QUFFSjtBQUFDaEIsR0FuRHVCRCxZQUFVO0FBQUEsVUFDRnBCLFFBQVE7QUFBQTtBQUFBLEtBRGhCb0I7QUFBVSxJQUFBcUI7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJiYXNlNDQiLCJ1c2VRdWVyeSIsIkFsZXJ0VHJpYW5nbGUiLCJCdWciLCJFeWUiLCJMb2NrIiwiU2t1bGwiLCJaYXAiLCJHbGFzc0NhcmQiLCJjYXRlZ29yeUljb25zIiwicGhpc2hpbmciLCJtYWx3YXJlIiwidHJhY2tlciIsInByaXZhY3kiLCJzY2FtIiwiZXhwbG9pdCIsInNldmVyaXR5Q29sb3JzIiwiY3JpdGljYWwiLCJoaWdoIiwibWVkaXVtIiwibG93IiwiQWxlcnRzTGlzdCIsIl9zIiwiZGF0YSIsImFsZXJ0cyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImVudGl0aWVzIiwiVGhyZWF0QWxlcnQiLCJmaWx0ZXIiLCJyZXNvbHZlZCIsImxlbmd0aCIsIm1hcCIsImFsZXJ0IiwiSWNvbiIsImNhdGVnb3J5Iiwic2V2Q2xhc3MiLCJzZXZlcml0eSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwbGl0IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQWxlcnRzTGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gJ0AvYXBpL2Jhc2U0NENsaWVudCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBBbGVydFRyaWFuZ2xlLCBCdWcsIEV5ZSwgTG9jaywgU2t1bGwsIFphcCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgR2xhc3NDYXJkIGZyb20gJy4uL3VpLWN1c3RvbS9HbGFzc0NhcmQnO1xuXG5jb25zdCBjYXRlZ29yeUljb25zID0ge1xuICBwaGlzaGluZzogQWxlcnRUcmlhbmdsZSxcbiAgbWFsd2FyZTogQnVnLFxuICB0cmFja2VyOiBFeWUsXG4gIHByaXZhY3k6IExvY2ssXG4gIHNjYW06IFNrdWxsLFxuICBleHBsb2l0OiBaYXBcbn07XG5cbmNvbnN0IHNldmVyaXR5Q29sb3JzID0ge1xuICBjcml0aWNhbDogJ3RleHQtcmVkLTQwMCBiZy1yZWQtNDAwLzEwIGJvcmRlci1yZWQtNDAwLzIwJyxcbiAgaGlnaDogJ3RleHQtb3JhbmdlLTQwMCBiZy1vcmFuZ2UtNDAwLzEwIGJvcmRlci1vcmFuZ2UtNDAwLzIwJyxcbiAgbWVkaXVtOiAndGV4dC1hbWJlci00MDAgYmctYW1iZXItNDAwLzEwIGJvcmRlci1hbWJlci00MDAvMjAnLFxuICBsb3c6ICd0ZXh0LWVtZXJhbGQtNDAwIGJnLWVtZXJhbGQtNDAwLzEwIGJvcmRlci1lbWVyYWxkLTQwMC8yMCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0c0xpc3QoKSB7XG4gIGNvbnN0IHsgZGF0YTogYWxlcnRzID0gW10gfSA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogWydhbGVydHMnXSxcbiAgICBxdWVyeUZuOiAoKSA9PiBiYXNlNDQuZW50aXRpZXMuVGhyZWF0QWxlcnQuZmlsdGVyKHsgcmVzb2x2ZWQ6IGZhbHNlIH0sICctY3JlYXRlZF9kYXRlJywgNSlcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdDozMDo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfT5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbGVydHNMaXN0OjMxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdDozMjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FsZXJ0c0xpc3Q6MzM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZFwiPkFjdGl2ZSBBbGVydHM8L2gzPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdDozNDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlVucmVzb2x2ZWQgdGhyZWF0czwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdDozNjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1vbm8gdGV4dC1wcmltYXJ5IGJnLXByaW1hcnkvMTAgcHgtMiBweS0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgIHthbGVydHMubGVuZ3RofSBhY3RpdmVcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHthbGVydHMubGVuZ3RoID09PSAwID9cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbGVydHNMaXN0OjQyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOCB0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbVwiPlxuICAgICAgICAgIDxMb2NrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdDo0MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IG14LWF1dG8gbWItMiBvcGFjaXR5LTQwXCIgLz5cbiAgICAgICAgICBObyBhY3RpdmUgdGhyZWF0cy4gWW91J3JlIHByb3RlY3RlZCFcbiAgICAgICAgPC9kaXY+IDpcblxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FsZXJ0c0xpc3Q6NDc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiIGRhdGEtY29sbGVjdGlvbi1pZD1cIlRocmVhdEFsZXJ0XCI+XG4gICAgICAgICAge2FsZXJ0cy5tYXAoKGFsZXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgSWNvbiA9IGNhdGVnb3J5SWNvbnNbYWxlcnQuY2F0ZWdvcnldIHx8IEFsZXJ0VHJpYW5nbGU7XG4gICAgICAgICAgY29uc3Qgc2V2Q2xhc3MgPSBzZXZlcml0eUNvbG9yc1thbGVydC5zZXZlcml0eV0gfHwgc2V2ZXJpdHlDb2xvcnMubG93O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdDo1MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17YWxlcnQuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTMgcC0zIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzMwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2FsZXJ0Py5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FsZXJ0c0xpc3Q6NTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyBib3JkZXIgJHtzZXZDbGFzc31gfT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdDo1NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdDo1NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FsZXJ0c0xpc3Q6NTc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGl0bGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17YWxlcnQ/LmlkfT57YWxlcnQudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbGVydHNMaXN0OjU4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMC41IGxpbmUtY2xhbXAtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVzY3JpcHRpb25cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17YWxlcnQ/LmlkfT57YWxlcnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FsZXJ0c0xpc3Q6NTk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbGVydHNMaXN0OjYwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciAke3NldkNsYXNzLnNwbGl0KCcgJylbMF19YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzZXZlcml0eVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXthbGVydD8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIHthbGVydC5zZXZlcml0eX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FsZXJ0c0xpc3Q6NjM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+4oCiPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FsZXJ0c0xpc3Q6NjQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LW11dGVkLWZvcmVncm91bmQgY2FwaXRhbGl6ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY2F0ZWdvcnlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17YWxlcnQ/LmlkfT57YWxlcnQuY2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG5cbiAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvR2xhc3NDYXJkPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL0FsZXJ0c0xpc3QuanN4In0=