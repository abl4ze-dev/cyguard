import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Reports.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Reports.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3049f6b1"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=3049f6b1";
import { base44 } from "/src/api/base44Client.js";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=cc9a851a";
import { FileText, Shield, AlertTriangle, CheckCircle, Clock, Search, Download } from "/node_modules/.vite/deps/lucide-react.js?v=68d8ce9e";
import { Badge } from "/src/components/ui/badge.jsx";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import { format } from "/node_modules/.vite/deps/date-fns.js?v=6e580e67";
const statusConfig = {
  safe: { icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-400/10", label: "Safe" },
  warning: { icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-400/10", label: "Warning" },
  danger: { icon: Shield, color: "text-red-400", bg: "bg-red-400/10", label: "Danger" },
  scanning: { icon: Clock, color: "text-primary", bg: "bg-primary/10", label: "Scanning" },
  error: { icon: AlertTriangle, color: "text-muted-foreground", bg: "bg-muted", label: "Error" }
};
export default function Reports() {
  _s();
  const { data: scans = [], isLoading } = useQuery({
    queryKey: ["allScansReports"],
    queryFn: () => base44.entities.ScanResult.list("-created_date", 50)
  });
  const [search, setSearch] = React.useState("");
  const filtered = scans.filter(
    (s) => s.target?.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:31:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/Reports:32:6",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Reports:37:8", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Reports & Analytics" }, void 0, false, {
            fileName: "/app/src/pages/Reports.jsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Reports:38:8", "data-dynamic-content": "false", className: "text-muted-foreground mt-1", children: "Complete history of all security scans" }, void 0, false, {
            fileName: "/app/src/pages/Reports.jsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/Reports.jsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:42:6", "data-dynamic-content": "true", className: "relative mb-6", children: [
      /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/Reports:43:8", "data-dynamic-content": "false", className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }, void 0, false, {
        fileName: "/app/src/pages/Reports.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          "data-source-location": "pages/Reports:44:8",
          "data-dynamic-content": "true",
          type: "text",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search scans...",
          className: "w-full pl-11 pr-4 py-3 rounded-xl bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/Reports.jsx",
          lineNumber: 63,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/Reports.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    isLoading ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:55:8", "data-dynamic-content": "false", className: "flex items-center justify-center py-20", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:56:10", "data-dynamic-content": "false", className: "w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" }, void 0, false, {
      fileName: "/app/src/pages/Reports.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Reports.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this) : filtered.length === 0 ? /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Reports:59:8", "data-dynamic-content": "true", hover: false, className: "text-center py-16", children: [
      /* @__PURE__ */ jsxDEV(FileText, { "data-source-location": "pages/Reports:60:10", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-muted-foreground/40" }, void 0, false, {
        fileName: "/app/src/pages/Reports.jsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Reports:61:10", "data-dynamic-content": "true", className: "text-muted-foreground", children: scans.length === 0 ? "No scans yet. Start scanning to see reports here." : "No results match your search." }, void 0, false, {
        fileName: "/app/src/pages/Reports.jsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Reports.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:64:8", "data-dynamic-content": "true", className: "space-y-3", "data-collection-id": "ScanResult", children: filtered.map((scan) => {
      const config = statusConfig[scan.status] || statusConfig.scanning;
      const Icon = config.icon;
      return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Reports:69:14", "data-dynamic-content": "true", delay: 0, className: "!p-4", "data-collection-item-id": scan?.id, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:70:16", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row sm:items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:71:18", "data-dynamic-content": "true", className: `p-2.5 rounded-xl ${config.bg} flex-shrink-0 w-fit`, children: /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/Reports:72:20", "data-dynamic-content": "true", className: `w-5 h-5 ${config.color}` }, void 0, false, {
          fileName: "/app/src/pages/Reports.jsx",
          lineNumber: 91,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Reports.jsx",
          lineNumber: 90,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:74:18", "data-dynamic-content": "true", className: "flex-1 min-w-0", "data-collection-item-field": "ai_summary", "data-collection-item-id": scan?.id, children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:75:20", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Reports:76:22", "data-dynamic-content": "true", className: "text-sm font-medium text-foreground truncate", "data-collection-item-field": "target", "data-collection-item-id": scan?.id, children: scan.target }, void 0, false, {
              fileName: "/app/src/pages/Reports.jsx",
              lineNumber: 95,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/Reports:77:22", "data-dynamic-content": "true", variant: "outline", className: "text-xs capitalize", "data-collection-item-field": "scan_type", "data-collection-item-id": scan?.id, children: scan.scan_type }, void 0, false, {
              fileName: "/app/src/pages/Reports.jsx",
              lineNumber: 96,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Reports.jsx",
            lineNumber: 94,
            columnNumber: 21
          }, this),
          scan.ai_summary && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Reports:80:22", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-1 line-clamp-1", "data-collection-item-field": "ai_summary", "data-collection-item-id": scan?.id, children: scan.ai_summary }, void 0, false, {
            fileName: "/app/src/pages/Reports.jsx",
            lineNumber: 99,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Reports:82:20", "data-dynamic-content": "true", className: "text-xs text-muted-foreground mt-1", children: scan.created_date ? format(new Date(scan.created_date), "MMM d, yyyy • h:mm a") : "" }, void 0, false, {
            fileName: "/app/src/pages/Reports.jsx",
            lineNumber: 101,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Reports.jsx",
          lineNumber: 93,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:86:18", "data-dynamic-content": "true", className: "flex items-center gap-4 flex-shrink-0", children: [
          scan.threat_score !== void 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Reports:88:22", "data-dynamic-content": "true", className: "text-right", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Reports:89:24", "data-dynamic-content": "false", className: "text-xs text-muted-foreground", children: "Threat Score" }, void 0, false, {
              fileName: "/app/src/pages/Reports.jsx",
              lineNumber: 108,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Reports:90:24", "data-dynamic-content": "true", className: `text-lg font-bold font-mono ${scan.threat_score > 60 ? "text-red-400" : scan.threat_score > 30 ? "text-amber-400" : "text-emerald-400"}`, "data-collection-item-field": "threat_score", "data-collection-item-id": scan?.id, children: scan.threat_score }, void 0, false, {
              fileName: "/app/src/pages/Reports.jsx",
              lineNumber: 109,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Reports.jsx",
            lineNumber: 107,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/Reports:97:20", "data-dynamic-content": "true", className: `${config.bg} ${config.color} border-0`, "data-collection-item-field": "label", "data-collection-item-id": config?.id, children: config.label }, void 0, false, {
            fileName: "/app/src/pages/Reports.jsx",
            lineNumber: 116,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Reports.jsx",
          lineNumber: 105,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Reports.jsx",
        lineNumber: 89,
        columnNumber: 17
      }, this) }, scan.id, false, {
        fileName: "/app/src/pages/Reports.jsx",
        lineNumber: 88,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "/app/src/pages/Reports.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Reports.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
_s(Reports, "sVDsUt91WAWqB5+m/KmMI5ozv9g=", false, function() {
  return [useQuery];
});
_c = Reports;
var _c;
$RefreshReg$(_c, "Reports");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Reports.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Reports.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsImJhc2U0NCIsInVzZVF1ZXJ5IiwiRmlsZVRleHQiLCJTaGllbGQiLCJBbGVydFRyaWFuZ2xlIiwiQ2hlY2tDaXJjbGUiLCJDbG9jayIsIlNlYXJjaCIsIkRvd25sb2FkIiwiQmFkZ2UiLCJHbGFzc0NhcmQiLCJmb3JtYXQiLCJzdGF0dXNDb25maWciLCJzYWZlIiwiaWNvbiIsImNvbG9yIiwiYmciLCJsYWJlbCIsIndhcm5pbmciLCJkYW5nZXIiLCJzY2FubmluZyIsImVycm9yIiwiUmVwb3J0cyIsIl9zIiwiZGF0YSIsInNjYW5zIiwiaXNMb2FkaW5nIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZW50aXRpZXMiLCJTY2FuUmVzdWx0IiwibGlzdCIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJzIiwidGFyZ2V0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm9wYWNpdHkiLCJ5IiwiZSIsInZhbHVlIiwibGVuZ3RoIiwibWFwIiwic2NhbiIsImNvbmZpZyIsInN0YXR1cyIsIkljb24iLCJpZCIsInNjYW5fdHlwZSIsImFpX3N1bW1hcnkiLCJjcmVhdGVkX2RhdGUiLCJEYXRlIiwidGhyZWF0X3Njb3JlIiwidW5kZWZpbmVkIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUmVwb3J0cy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSAnQC9hcGkvYmFzZTQ0Q2xpZW50JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IEZpbGVUZXh0LCBTaGllbGQsIEFsZXJ0VHJpYW5nbGUsIENoZWNrQ2lyY2xlLCBDbG9jaywgU2VhcmNoLCBEb3dubG9hZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9iYWRnZSc7XG5pbXBvcnQgR2xhc3NDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL0dsYXNzQ2FyZCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IHN0YXR1c0NvbmZpZyA9IHtcbiAgc2FmZTogeyBpY29uOiBDaGVja0NpcmNsZSwgY29sb3I6ICd0ZXh0LWVtZXJhbGQtNDAwJywgYmc6ICdiZy1lbWVyYWxkLTQwMC8xMCcsIGxhYmVsOiAnU2FmZScgfSxcbiAgd2FybmluZzogeyBpY29uOiBBbGVydFRyaWFuZ2xlLCBjb2xvcjogJ3RleHQtYW1iZXItNDAwJywgYmc6ICdiZy1hbWJlci00MDAvMTAnLCBsYWJlbDogJ1dhcm5pbmcnIH0sXG4gIGRhbmdlcjogeyBpY29uOiBTaGllbGQsIGNvbG9yOiAndGV4dC1yZWQtNDAwJywgYmc6ICdiZy1yZWQtNDAwLzEwJywgbGFiZWw6ICdEYW5nZXInIH0sXG4gIHNjYW5uaW5nOiB7IGljb246IENsb2NrLCBjb2xvcjogJ3RleHQtcHJpbWFyeScsIGJnOiAnYmctcHJpbWFyeS8xMCcsIGxhYmVsOiAnU2Nhbm5pbmcnIH0sXG4gIGVycm9yOiB7IGljb246IEFsZXJ0VHJpYW5nbGUsIGNvbG9yOiAndGV4dC1tdXRlZC1mb3JlZ3JvdW5kJywgYmc6ICdiZy1tdXRlZCcsIGxhYmVsOiAnRXJyb3InIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcG9ydHMoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2NhbnMgPSBbXSwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlLZXk6IFsnYWxsU2NhbnNSZXBvcnRzJ10sXG4gICAgcXVlcnlGbjogKCkgPT4gYmFzZTQ0LmVudGl0aWVzLlNjYW5SZXN1bHQubGlzdCgnLWNyZWF0ZWRfZGF0ZScsIDUwKVxuICB9KTtcblxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGZpbHRlcmVkID0gc2NhbnMuZmlsdGVyKChzKSA9PlxuICBzLnRhcmdldD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjMxOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC00IG1kOnAtOCBtYXgtdy02eGwgbXgtYXV0b1wiPlxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjMyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIFxuICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjM3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiPlJlcG9ydHMgJiBBbmFseXRpY3M8L2gxPlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6Mzg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMVwiPkNvbXBsZXRlIGhpc3Rvcnkgb2YgYWxsIHNlY3VyaXR5IHNjYW5zPC9wPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICB7LyogU2VhcmNoICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6NDI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTZcIj5cbiAgICAgICAgPFNlYXJjaCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6NDM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTQgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgLz5cbiAgICAgICAgPGlucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVwb3J0czo0NDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHNjYW5zLi4uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTExIHByLTQgcHktMyByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS8zMCBib3JkZXIgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzUwIHRleHQtc21cIiAvPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmVzdWx0cyAqL31cbiAgICAgIHtpc0xvYWRpbmcgP1xuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6NTU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yMFwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjU2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctOCBoLTggYm9yZGVyLTIgYm9yZGVyLXByaW1hcnkvMjAgYm9yZGVyLXQtcHJpbWFyeSByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgPC9kaXY+IDpcbiAgICAgIGZpbHRlcmVkLmxlbmd0aCA9PT0gMCA/XG4gICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVwb3J0czo1OTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xNlwiPlxuICAgICAgICAgIDxGaWxlVGV4dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6NjA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMiBoLTEyIG14LWF1dG8gbWItMyB0ZXh0LW11dGVkLWZvcmVncm91bmQvNDBcIiAvPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVwb3J0czo2MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntzY2Fucy5sZW5ndGggPT09IDAgPyAnTm8gc2NhbnMgeWV0LiBTdGFydCBzY2FubmluZyB0byBzZWUgcmVwb3J0cyBoZXJlLicgOiAnTm8gcmVzdWx0cyBtYXRjaCB5b3VyIHNlYXJjaC4nfTwvcD5cbiAgICAgICAgPC9HbGFzc0NhcmQ+IDpcblxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6NjQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiIGRhdGEtY29sbGVjdGlvbi1pZD1cIlNjYW5SZXN1bHRcIj5cbiAgICAgICAgICB7ZmlsdGVyZWQubWFwKChzY2FuKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gc3RhdHVzQ29uZmlnW3NjYW4uc3RhdHVzXSB8fCBzdGF0dXNDb25maWcuc2Nhbm5pbmc7XG4gICAgICAgICAgY29uc3QgSWNvbiA9IGNvbmZpZy5pY29uO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVwb3J0czo2OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c2Nhbi5pZH0gZGVsYXk9ezB9IGNsYXNzTmFtZT1cIiFwLTRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Nhbj8uaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjcwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjcxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgcC0yLjUgcm91bmRlZC14bCAke2NvbmZpZy5iZ30gZmxleC1zaHJpbmstMCB3LWZpdGB9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6NzI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTUgaC01ICR7Y29uZmlnLmNvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjc0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImFpX3N1bW1hcnlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Nhbj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVwb3J0czo3NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVwb3J0czo3NjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kIHRydW5jYXRlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0YXJnZXRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Nhbj8uaWR9PntzY2FuLnRhcmdldH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVwb3J0czo3NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC14cyBjYXBpdGFsaXplXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzY2FuX3R5cGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Nhbj8uaWR9PntzY2FuLnNjYW5fdHlwZX08L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3NjYW4uYWlfc3VtbWFyeSAmJlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjgwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMSBsaW5lLWNsYW1wLTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImFpX3N1bW1hcnlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Nhbj8uaWR9PntzY2FuLmFpX3N1bW1hcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6ODI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3NjYW4uY3JlYXRlZF9kYXRlID8gZm9ybWF0KG5ldyBEYXRlKHNjYW4uY3JlYXRlZF9kYXRlKSwgJ01NTSBkLCB5eXl5IOKAoiBoOm1tIGEnKSA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjg2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2Nhbi50aHJlYXRfc2NvcmUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6ODg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6ODk6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5UaHJlYXQgU2NvcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JlcG9ydHM6OTA6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LWxnIGZvbnQtYm9sZCBmb250LW1vbm8gJHtcbiAgICAgICAgICAgICAgICAgICAgc2Nhbi50aHJlYXRfc2NvcmUgPiA2MCA/ICd0ZXh0LXJlZC00MDAnIDogc2Nhbi50aHJlYXRfc2NvcmUgPiAzMCA/ICd0ZXh0LWFtYmVyLTQwMCcgOiAndGV4dC1lbWVyYWxkLTQwMCd9YFxuICAgICAgICAgICAgICAgICAgICB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGhyZWF0X3Njb3JlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NjYW4/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NjYW4udGhyZWF0X3Njb3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXBvcnRzOjk3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgJHtjb25maWcuYmd9ICR7Y29uZmlnLmNvbG9yfSBib3JkZXItMGB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibGFiZWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y29uZmlnPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0dsYXNzQ2FyZD4pO1xuXG4gICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9SZXBvcnRzLmpzeCJ9