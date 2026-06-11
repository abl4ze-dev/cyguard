import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/ScanCenter.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/ScanCenter.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3049f6b1"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=3049f6b1";
import { Search, Upload } from "/node_modules/.vite/deps/lucide-react.js?v=68d8ce9e";
import URLScanner from "/src/components/scan/URLScanner.jsx";
import FileScanner from "/src/components/scan/FileScanner.jsx";
export default function ScanCenter() {
  _s();
  const [tab, setTab] = useState("url");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("tab") === "file") setTab("file");
  }, []);
  const tabs = [
    { id: "url", label: "URL Scanner", icon: Search },
    { id: "file", label: "File Analysis", icon: Upload }
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/ScanCenter:21:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/ScanCenter:22:6",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/ScanCenter:27:8", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Scan Center" }, void 0, false, {
            fileName: "/app/src/pages/ScanCenter.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/ScanCenter:28:8", "data-dynamic-content": "false", className: "text-muted-foreground mt-1", children: "AI-powered threat detection & analysis" }, void 0, false, {
            fileName: "/app/src/pages/ScanCenter.jsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/ScanCenter.jsx",
        lineNumber: 41,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/ScanCenter:32:6", "data-dynamic-content": "true", className: "flex gap-2 mb-8 p-1 rounded-xl bg-secondary/30 w-fit", children: tabs.map(
      ({ id, label, icon: Icon }) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          "data-source-location": "pages/ScanCenter:34:10",
          "data-dynamic-content": "true",
          onClick: () => setTab(id),
          className: `flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === id ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`,
          "data-collection-item-field": "label",
          "data-collection-item-id": id,
          children: [
            /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/ScanCenter:43:12", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/ScanCenter.jsx",
              lineNumber: 62,
              columnNumber: 13
            }, this),
            label
          ]
        },
        id,
        true,
        {
          fileName: "/app/src/pages/ScanCenter.jsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/app/src/pages/ScanCenter.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    tab === "url" ? /* @__PURE__ */ jsxDEV(URLScanner, { "data-source-location": "pages/ScanCenter:49:23", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/ScanCenter.jsx",
      lineNumber: 68,
      columnNumber: 24
    }, this) : /* @__PURE__ */ jsxDEV(FileScanner, { "data-source-location": "pages/ScanCenter:49:40", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/ScanCenter.jsx",
      lineNumber: 68,
      columnNumber: 116
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/ScanCenter.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
_s(ScanCenter, "YbKkPjDK5gv9jfoJQE2jlEqW9JQ=");
_c = ScanCenter;
var _c;
$RefreshReg$(_c, "ScanCenter");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/ScanCenter.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/ScanCenter.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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YWQiLCJVUkxTY2FubmVyIiwiRmlsZVNjYW5uZXIiLCJTY2FuQ2VudGVyIiwiX3MiLCJ0YWIiLCJzZXRUYWIiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsInRhYnMiLCJpZCIsImxhYmVsIiwiaWNvbiIsIm9wYWNpdHkiLCJ5IiwibWFwIiwiSWNvbiIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNjYW5DZW50ZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTZWFyY2gsIFVwbG9hZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgVVJMU2Nhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3NjYW4vVVJMU2Nhbm5lcic7XG5pbXBvcnQgRmlsZVNjYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zY2FuL0ZpbGVTY2FubmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NhbkNlbnRlcigpIHtcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKCd1cmwnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgaWYgKHBhcmFtcy5nZXQoJ3RhYicpID09PSAnZmlsZScpIHNldFRhYignZmlsZScpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdGFicyA9IFtcbiAgeyBpZDogJ3VybCcsIGxhYmVsOiAnVVJMIFNjYW5uZXInLCBpY29uOiBTZWFyY2ggfSxcbiAgeyBpZDogJ2ZpbGUnLCBsYWJlbDogJ0ZpbGUgQW5hbHlzaXMnLCBpY29uOiBVcGxvYWQgfV07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TY2FuQ2VudGVyOjIxOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC00IG1kOnAtOCBtYXgtdy01eGwgbXgtYXV0b1wiPlxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TY2FuQ2VudGVyOjIyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIFxuICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TY2FuQ2VudGVyOjI3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiPlNjYW4gQ2VudGVyPC9oMT5cbiAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TY2FuQ2VudGVyOjI4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTFcIj5BSS1wb3dlcmVkIHRocmVhdCBkZXRlY3Rpb24gJiBhbmFseXNpczwvcD5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgey8qIFRhYnMgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2NhbkNlbnRlcjozMjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBtYi04IHAtMSByb3VuZGVkLXhsIGJnLXNlY29uZGFyeS8zMCB3LWZpdFwiPlxuICAgICAgICB7dGFicy5tYXAoKHsgaWQsIGxhYmVsLCBpY29uOiBJY29uIH0pID0+XG4gICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TY2FuQ2VudGVyOjM0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAga2V5PXtpZH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKGlkKX1cbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNSBweS0yLjUgcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgIHRhYiA9PT0gaWQgP1xuICAgICAgICAnYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3ctbGcgc2hhZG93LXByaW1hcnkvMjAnIDpcbiAgICAgICAgJ3RleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQnfWBcbiAgICAgICAgfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2NhbkNlbnRlcjo0MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7dGFiID09PSAndXJsJyA/IDxVUkxTY2FubmVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2NhbkNlbnRlcjo0OToyM1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPiA6IDxGaWxlU2Nhbm5lciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NjYW5DZW50ZXI6NDk6NDBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz59XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvU2NhbkNlbnRlci5qc3gifQ==