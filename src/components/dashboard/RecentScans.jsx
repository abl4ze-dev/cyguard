import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/RecentScans.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/RecentScans.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { base44 } from "/src/api/base44Client.js";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=95e257e8";
import { Shield, AlertTriangle, CheckCircle, Clock, ExternalLink } from "/node_modules/.vite/deps/lucide-react.js?v=76f08321";
import { Badge } from "/src/components/ui/badge.jsx";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=c96743a3";
const statusConfig = {
  safe: { icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-400/10", label: "Safe" },
  warning: { icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-400/10", label: "Warning" },
  danger: { icon: Shield, color: "text-red-400", bg: "bg-red-400/10", label: "Danger" },
  scanning: { icon: Clock, color: "text-primary", bg: "bg-primary/10", label: "Scanning" },
  error: { icon: AlertTriangle, color: "text-muted-foreground", bg: "bg-muted", label: "Error" }
};
export default function RecentScans() {
  _s();
  const { data: scans = [] } = useQuery({
    queryKey: ["recentScans"],
    queryFn: () => base44.entities.ScanResult.list("-created_date", 5)
  });
  return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/dashboard/RecentScans:24:4", "data-dynamic-content": "true", hover: false, children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RecentScans:25:6", "data-dynamic-content": "false", className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RecentScans:26:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/RecentScans:27:10", "data-dynamic-content": "false", className: "text-lg font-semibold text-foreground", children: "Recent Scans" }, void 0, false, {
          fileName: "/app/src/components/dashboard/RecentScans.jsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RecentScans:28:10", "data-dynamic-content": "false", className: "text-sm text-muted-foreground", children: "Latest scan results" }, void 0, false, {
          fileName: "/app/src/components/dashboard/RecentScans.jsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/RecentScans.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/dashboard/RecentScans:30:8", "data-dynamic-content": "false", to: "/reports", className: "text-xs text-primary hover:underline", children: "View All" }, void 0, false, {
        fileName: "/app/src/components/dashboard/RecentScans.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/RecentScans.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    scans.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RecentScans:34:8", "data-dynamic-content": "false", className: "text-center py-8 text-muted-foreground text-sm", children: [
      /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "components/dashboard/RecentScans:35:10", "data-dynamic-content": "false", className: "w-8 h-8 mx-auto mb-2 opacity-40" }, void 0, false, {
        fileName: "/app/src/components/dashboard/RecentScans.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      "No scans yet. Start your first scan!"
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/RecentScans.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RecentScans:39:8", "data-dynamic-content": "true", className: "space-y-3", "data-collection-id": "ScanResult", children: scans.map((scan) => {
      const config = statusConfig[scan.status] || statusConfig.scanning;
      const Icon = config.icon;
      return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RecentScans:44:14", "data-dynamic-content": "true", className: "flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors", "data-collection-item-id": scan?.id, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RecentScans:45:16", "data-dynamic-content": "true", className: `p-2 rounded-lg ${config.bg}`, children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "components/dashboard/RecentScans:46:18", "data-dynamic-content": "true", className: `w-4 h-4 ${config.color}` }, void 0, false, {
          fileName: "/app/src/components/dashboard/RecentScans.jsx",
          lineNumber: 65,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/RecentScans.jsx",
          lineNumber: 64,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RecentScans:48:16", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RecentScans:49:18", "data-dynamic-content": "true", className: "text-sm font-medium text-foreground truncate", "data-collection-item-field": "target", "data-collection-item-id": scan?.id, children: scan.target }, void 0, false, {
            fileName: "/app/src/components/dashboard/RecentScans.jsx",
            lineNumber: 68,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RecentScans:50:18", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", children: scan.scan_type === "url" ? "URL Scan" : "File Scan" }, void 0, false, {
            fileName: "/app/src/components/dashboard/RecentScans.jsx",
            lineNumber: 69,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/RecentScans.jsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RecentScans:52:16", "data-dynamic-content": "true", className: "text-right", children: [
          /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/RecentScans:53:18", "data-dynamic-content": "true", variant: "outline", className: `${config.color} border-current/20 text-xs`, "data-collection-item-field": "label", "data-collection-item-id": config?.id, children: config.label }, void 0, false, {
            fileName: "/app/src/components/dashboard/RecentScans.jsx",
            lineNumber: 72,
            columnNumber: 19
          }, this),
          scan.threat_score !== void 0 && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RecentScans:57:20", "data-dynamic-content": "true", className: "text-xs font-mono text-muted-foreground mt-1", "data-collection-item-field": "threat_score", "data-collection-item-id": scan?.id, children: [
            scan.threat_score,
            "/100"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/RecentScans.jsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/RecentScans.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, this)
      ] }, scan.id, true, {
        fileName: "/app/src/components/dashboard/RecentScans.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/src/components/dashboard/RecentScans.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/RecentScans.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
_s(RecentScans, "dCbrPR76P7jF3Qr8zxHMqE3Pnd0=", false, function() {
  return [useQuery];
});
_c = RecentScans;
var _c;
$RefreshReg$(_c, "RecentScans");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/RecentScans.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/RecentScans.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQSxhQWdCRTtBQUFBLElBRU4sQ0FBQyxLQXZCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBd0JFO0FBQUEsT0F2Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXlDQTtBQUVKO0FBQUNkLEdBbER1QkQsYUFBVztBQUFBLFVBQ0puQixRQUFRO0FBQUE7QUFBQSxLQURmbUI7QUFBVyxJQUFBb0I7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJiYXNlNDQiLCJ1c2VRdWVyeSIsIlNoaWVsZCIsIkFsZXJ0VHJpYW5nbGUiLCJDaGVja0NpcmNsZSIsIkNsb2NrIiwiRXh0ZXJuYWxMaW5rIiwiQmFkZ2UiLCJHbGFzc0NhcmQiLCJMaW5rIiwic3RhdHVzQ29uZmlnIiwic2FmZSIsImljb24iLCJjb2xvciIsImJnIiwibGFiZWwiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwic2Nhbm5pbmciLCJlcnJvciIsIlJlY2VudFNjYW5zIiwiX3MiLCJkYXRhIiwic2NhbnMiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJlbnRpdGllcyIsIlNjYW5SZXN1bHQiLCJsaXN0IiwibGVuZ3RoIiwibWFwIiwic2NhbiIsImNvbmZpZyIsInN0YXR1cyIsIkljb24iLCJpZCIsInRhcmdldCIsInNjYW5fdHlwZSIsInRocmVhdF9zY29yZSIsInVuZGVmaW5lZCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlJlY2VudFNjYW5zLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSAnQC9hcGkvYmFzZTQ0Q2xpZW50JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFNoaWVsZCwgQWxlcnRUcmlhbmdsZSwgQ2hlY2tDaXJjbGUsIENsb2NrLCBFeHRlcm5hbExpbmsgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYmFkZ2UnO1xuaW1wb3J0IEdsYXNzQ2FyZCBmcm9tICcuLi91aS1jdXN0b20vR2xhc3NDYXJkJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3Qgc3RhdHVzQ29uZmlnID0ge1xuICBzYWZlOiB7IGljb246IENoZWNrQ2lyY2xlLCBjb2xvcjogJ3RleHQtZW1lcmFsZC00MDAnLCBiZzogJ2JnLWVtZXJhbGQtNDAwLzEwJywgbGFiZWw6ICdTYWZlJyB9LFxuICB3YXJuaW5nOiB7IGljb246IEFsZXJ0VHJpYW5nbGUsIGNvbG9yOiAndGV4dC1hbWJlci00MDAnLCBiZzogJ2JnLWFtYmVyLTQwMC8xMCcsIGxhYmVsOiAnV2FybmluZycgfSxcbiAgZGFuZ2VyOiB7IGljb246IFNoaWVsZCwgY29sb3I6ICd0ZXh0LXJlZC00MDAnLCBiZzogJ2JnLXJlZC00MDAvMTAnLCBsYWJlbDogJ0RhbmdlcicgfSxcbiAgc2Nhbm5pbmc6IHsgaWNvbjogQ2xvY2ssIGNvbG9yOiAndGV4dC1wcmltYXJ5JywgYmc6ICdiZy1wcmltYXJ5LzEwJywgbGFiZWw6ICdTY2FubmluZycgfSxcbiAgZXJyb3I6IHsgaWNvbjogQWxlcnRUcmlhbmdsZSwgY29sb3I6ICd0ZXh0LW11dGVkLWZvcmVncm91bmQnLCBiZzogJ2JnLW11dGVkJywgbGFiZWw6ICdFcnJvcicgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZW50U2NhbnMoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2NhbnMgPSBbXSB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbJ3JlY2VudFNjYW5zJ10sXG4gICAgcXVlcnlGbjogKCkgPT4gYmFzZTQ0LmVudGl0aWVzLlNjYW5SZXN1bHQubGlzdCgnLWNyZWF0ZWRfZGF0ZScsIDUpXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjI0OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9PlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjI1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjI2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2NhbnM6Mjc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZFwiPlJlY2VudCBTY2FuczwvaDM+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTY2FuczoyODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkxhdGVzdCBzY2FuIHJlc3VsdHM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjMwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdG89XCIvcmVwb3J0c1wiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZVwiPlZpZXcgQWxsPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtzY2Fucy5sZW5ndGggPT09IDAgP1xuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjM0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOCB0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbVwiPlxuICAgICAgICAgIDxTaGllbGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTY2FuczozNToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IG14LWF1dG8gbWItMiBvcGFjaXR5LTQwXCIgLz5cbiAgICAgICAgICBObyBzY2FucyB5ZXQuIFN0YXJ0IHlvdXIgZmlyc3Qgc2NhbiFcbiAgICAgICAgPC9kaXY+IDpcblxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjM5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIiBkYXRhLWNvbGxlY3Rpb24taWQ9XCJTY2FuUmVzdWx0XCI+XG4gICAgICAgICAge3NjYW5zLm1hcCgoc2NhbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHN0YXR1c0NvbmZpZ1tzY2FuLnN0YXR1c10gfHwgc3RhdHVzQ29uZmlnLnNjYW5uaW5nO1xuICAgICAgICAgIGNvbnN0IEljb24gPSBjb25maWcuaWNvbjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjQ0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtzY2FuLmlkfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBwLTMgcm91bmRlZC14bCBiZy1zZWNvbmRhcnkvMzAgaG92ZXI6Ymctc2Vjb25kYXJ5LzUwIHRyYW5zaXRpb24tY29sb3JzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NjYW4/LmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2NhbnM6NDU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyAke2NvbmZpZy5iZ31gfT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2NhbnM6NDY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTQgaC00ICR7Y29uZmlnLmNvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjQ4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2NhbnM6NDk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZCB0cnVuY2F0ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGFyZ2V0XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NjYW4/LmlkfT57c2Nhbi50YXJnZXR9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTY2Fuczo1MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3NjYW4uc2Nhbl90eXBlID09PSAndXJsJyA/ICdVUkwgU2NhbicgOiAnRmlsZSBTY2FuJ308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zOjUyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2NhbnM6NTM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT17YCR7Y29uZmlnLmNvbG9yfSBib3JkZXItY3VycmVudC8yMCB0ZXh0LXhzYH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjb25maWc/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICB7c2Nhbi50aHJlYXRfc2NvcmUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2NhbnM6NTc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGhyZWF0X3Njb3JlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NjYW4/LmlkfT57c2Nhbi50aHJlYXRfc2NvcmV9LzEwMDwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG5cbiAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvR2xhc3NDYXJkPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNjYW5zLmpzeCJ9