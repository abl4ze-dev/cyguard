import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Dashboard.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Dashboard.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3049f6b1"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=3049f6b1";
import { Shield, Scan, Bug, Eye, Activity, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=68d8ce9e";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=0c595644";
import { base44 } from "/src/api/base44Client.js";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=cc9a851a";
import StatCard from "/src/components/ui-custom/StatCard.jsx";
import ThreatChart from "/src/components/dashboard/ThreatChart.jsx";
import RecentScans from "/src/components/dashboard/RecentScans.jsx";
import AlertsList from "/src/components/dashboard/AlertsList.jsx";
import ProtectionStatus from "/src/components/dashboard/ProtectionStatus.jsx";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
export default function Dashboard() {
  _s();
  const { data: scans = [] } = useQuery({
    queryKey: ["allScans"],
    queryFn: () => base44.entities.ScanResult.list("-created_date", 100)
  });
  const { data: alerts = [] } = useQuery({
    queryKey: ["allAlerts"],
    queryFn: () => base44.entities.ThreatAlert.list("-created_date", 100)
  });
  const totalScans = scans.length;
  const threatsDetected = scans.filter((s) => s.status === "danger" || s.status === "warning").length;
  const activeAlerts = alerts.filter((a) => !a.resolved).length;
  const safeScans = scans.filter((s) => s.status === "safe").length;
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:31:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/Dashboard:32:6",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "mb-8",
        children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:37:8", "data-dynamic-content": "false", className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:38:10", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Dashboard:39:12", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Security Dashboard" }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:40:12", "data-dynamic-content": "false", className: "text-muted-foreground mt-1", children: "Real-time threat monitoring & analytics" }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 59,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 57,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "pages/Dashboard:42:10", "data-dynamic-content": "false", to: "/scan", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "pages/Dashboard:43:12", "data-dynamic-content": "false", size: "md", children: [
            /* @__PURE__ */ jsxDEV(Scan, { "data-source-location": "pages/Dashboard:44:14", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            "New Scan",
            /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "pages/Dashboard:46:14", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 65,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 62,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:53:6", "data-dynamic-content": "true", className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
      /* @__PURE__ */ jsxDEV(StatCard, { "data-source-location": "pages/Dashboard:54:8", "data-dynamic-content": "true", icon: Scan, label: "Total Scans", value: totalScans, trend: "+12% this week", trendUp: true, delay: 0 }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(StatCard, { "data-source-location": "pages/Dashboard:55:8", "data-dynamic-content": "true", icon: Bug, label: "Threats Found", value: threatsDetected, trend: "-5% this week", trendUp: false, delay: 0.1 }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(StatCard, { "data-source-location": "pages/Dashboard:56:8", "data-dynamic-content": "true", icon: Shield, label: "Active Alerts", value: activeAlerts, delay: 0.2 }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(StatCard, { "data-source-location": "pages/Dashboard:57:8", "data-dynamic-content": "true", icon: Eye, label: "Safe Scans", value: safeScans, trend: "98% safe rate", trendUp: true, delay: 0.3 }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Dashboard.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:61:6", "data-dynamic-content": "false", className: "grid lg:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxDEV(ThreatChart, { "data-source-location": "pages/Dashboard:62:8", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(ProtectionStatus, { "data-source-location": "pages/Dashboard:63:8", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Dashboard.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:67:6", "data-dynamic-content": "false", className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxDEV(RecentScans, { "data-source-location": "pages/Dashboard:68:8", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(AlertsList, { "data-source-location": "pages/Dashboard:69:8", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Dashboard.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Dashboard.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
_s(Dashboard, "OaJPsNYi9VnO2E4U/gQKq1CaNG0=", false, function() {
  return [useQuery, useQuery];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Dashboard.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Dashboard.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUEsV0FHQTtBQUFBLElBR0EsdUJBQUMsU0FBSSx3QkFBcUIsd0JBQXVCLHdCQUFxQixTQUFRLFdBQVUsNkJBQ3RGO0FBQUEsNkJBQUMsZUFBWSx3QkFBcUIsd0JBQXVCLHdCQUFxQixXQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXFGO0FBQUEsTUFDckYsdUJBQUMsY0FBVyx3QkFBcUIsd0JBQXVCLHdCQUFxQixXQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW9GO0FBQUEsU0FGdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUdBO0FBQUEsT0F2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXdDQTtBQUVKO0FBQUNuQixHQTNEdUJELFdBQVM7QUFBQSxVQUNGUCxVQUtDQSxRQUFRO0FBQUE7QUFBQSxLQU5oQk87QUFBUyxJQUFBdUI7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJTaGllbGQiLCJTY2FuIiwiQnVnIiwiRXllIiwiQWN0aXZpdHkiLCJBcnJvd1JpZ2h0IiwiTGluayIsImJhc2U0NCIsInVzZVF1ZXJ5IiwiU3RhdENhcmQiLCJUaHJlYXRDaGFydCIsIlJlY2VudFNjYW5zIiwiQWxlcnRzTGlzdCIsIlByb3RlY3Rpb25TdGF0dXMiLCJOZW9uQnV0dG9uIiwiRGFzaGJvYXJkIiwiX3MiLCJkYXRhIiwic2NhbnMiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJlbnRpdGllcyIsIlNjYW5SZXN1bHQiLCJsaXN0IiwiYWxlcnRzIiwiVGhyZWF0QWxlcnQiLCJ0b3RhbFNjYW5zIiwibGVuZ3RoIiwidGhyZWF0c0RldGVjdGVkIiwiZmlsdGVyIiwicyIsInN0YXR1cyIsImFjdGl2ZUFsZXJ0cyIsImEiLCJyZXNvbHZlZCIsInNhZmVTY2FucyIsIm9wYWNpdHkiLCJ5IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRGFzaGJvYXJkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTaGllbGQsIFNjYW4sIEJ1ZywgRXllLCBBY3Rpdml0eSwgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tICdAL2FwaS9iYXNlNDRDbGllbnQnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IFN0YXRDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL1N0YXRDYXJkJztcbmltcG9ydCBUaHJlYXRDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydCc7XG5pbXBvcnQgUmVjZW50U2NhbnMgZnJvbSAnLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2NhbnMnO1xuaW1wb3J0IEFsZXJ0c0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvQWxlcnRzTGlzdCc7XG5pbXBvcnQgUHJvdGVjdGlvblN0YXR1cyBmcm9tICcuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9Qcm90ZWN0aW9uU3RhdHVzJztcbmltcG9ydCBOZW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL05lb25CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2NhbnMgPSBbXSB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbJ2FsbFNjYW5zJ10sXG4gICAgcXVlcnlGbjogKCkgPT4gYmFzZTQ0LmVudGl0aWVzLlNjYW5SZXN1bHQubGlzdCgnLWNyZWF0ZWRfZGF0ZScsIDEwMClcbiAgfSk7XG5cbiAgY29uc3QgeyBkYXRhOiBhbGVydHMgPSBbXSB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbJ2FsbEFsZXJ0cyddLFxuICAgIHF1ZXJ5Rm46ICgpID0+IGJhc2U0NC5lbnRpdGllcy5UaHJlYXRBbGVydC5saXN0KCctY3JlYXRlZF9kYXRlJywgMTAwKVxuICB9KTtcblxuICBjb25zdCB0b3RhbFNjYW5zID0gc2NhbnMubGVuZ3RoO1xuICBjb25zdCB0aHJlYXRzRGV0ZWN0ZWQgPSBzY2Fucy5maWx0ZXIoKHMpID0+IHMuc3RhdHVzID09PSAnZGFuZ2VyJyB8fCBzLnN0YXR1cyA9PT0gJ3dhcm5pbmcnKS5sZW5ndGg7XG4gIGNvbnN0IGFjdGl2ZUFsZXJ0cyA9IGFsZXJ0cy5maWx0ZXIoKGEpID0+ICFhLnJlc29sdmVkKS5sZW5ndGg7XG4gIGNvbnN0IHNhZmVTY2FucyA9IHNjYW5zLmZpbHRlcigocykgPT4gcy5zdGF0dXMgPT09ICdzYWZlJykubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozMTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtNCBtZDpwLTggbWF4LXctN3hsIG14LWF1dG9cIj5cbiAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjMyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjM3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+U2VjdXJpdHkgRGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xXCI+UmVhbC10aW1lIHRocmVhdCBtb25pdG9yaW5nICYgYW5hbHl0aWNzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL3NjYW5cIj5cbiAgICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgICA8U2NhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgTmV3IFNjYW5cbiAgICAgICAgICAgICAgPEFycm93UmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8L05lb25CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgey8qIFN0YXRzIEdyaWQgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjUzOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IG1iLThcIj5cbiAgICAgICAgPFN0YXRDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjU0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpY29uPXtTY2FufSBsYWJlbD1cIlRvdGFsIFNjYW5zXCIgdmFsdWU9e3RvdGFsU2NhbnN9IHRyZW5kPVwiKzEyJSB0aGlzIHdlZWtcIiB0cmVuZFVwPXt0cnVlfSBkZWxheT17MH0gLz5cbiAgICAgICAgPFN0YXRDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjU1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpY29uPXtCdWd9IGxhYmVsPVwiVGhyZWF0cyBGb3VuZFwiIHZhbHVlPXt0aHJlYXRzRGV0ZWN0ZWR9IHRyZW5kPVwiLTUlIHRoaXMgd2Vla1wiIHRyZW5kVXA9e2ZhbHNlfSBkZWxheT17MC4xfSAvPlxuICAgICAgICA8U3RhdENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NTY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGljb249e1NoaWVsZH0gbGFiZWw9XCJBY3RpdmUgQWxlcnRzXCIgdmFsdWU9e2FjdGl2ZUFsZXJ0c30gZGVsYXk9ezAuMn0gLz5cbiAgICAgICAgPFN0YXRDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjU3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBpY29uPXtFeWV9IGxhYmVsPVwiU2FmZSBTY2Fuc1wiIHZhbHVlPXtzYWZlU2NhbnN9IHRyZW5kPVwiOTglIHNhZmUgcmF0ZVwiIHRyZW5kVXA9e3RydWV9IGRlbGF5PXswLjN9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENoYXJ0cyAmIFN0YXR1cyAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NjE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIGdhcC02IG1iLThcIj5cbiAgICAgICAgPFRocmVhdENoYXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjYyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgPFByb3RlY3Rpb25TdGF0dXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NjM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSZWNlbnQgQWN0aXZpdHkgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjY3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICA8UmVjZW50U2NhbnMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6Njg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICA8QWxlcnRzTGlzdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo2OTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9EYXNoYm9hcmQuanN4In0=