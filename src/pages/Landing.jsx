import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Landing.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Landing.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import HeroSection from "/src/components/landing/HeroSection.jsx";
import FeaturesSection from "/src/components/landing/FeaturesSection.jsx";
import ComparisonSection from "/src/components/landing/ComparisonSection.jsx";
import CTASection from "/src/components/landing/CTASection.jsx";
import Footer from "/src/components/landing/Footer.jsx";
import LandingAIDetectorTeaser from "/src/components/landing/LandingAIDetectorTeaser.jsx";
import OpenSourceSection from "/src/components/landing/OpenSourceSection.jsx?t=1781205748381";
export default function Landing() {
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Landing:12:4", "data-dynamic-content": "false", children: [
    /* @__PURE__ */ jsxDEV(HeroSection, { "data-source-location": "pages/Landing:13:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Landing.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FeaturesSection, { "data-source-location": "pages/Landing:14:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Landing.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(LandingAIDetectorTeaser, { "data-source-location": "pages/Landing:15:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Landing.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ComparisonSection, { "data-source-location": "pages/Landing:16:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Landing.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(OpenSourceSection, { "data-source-location": "pages/Landing:17:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Landing.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CTASection, { "data-source-location": "pages/Landing:18:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Landing.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-source-location": "pages/Landing:19:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Landing.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Landing.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
_c = Landing;
var _c;
$RefreshReg$(_c, "Landing");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Landing.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Landing.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFaTixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGlCQUFpQjtBQUN4QixPQUFPQyxxQkFBcUI7QUFDNUIsT0FBT0MsdUJBQXVCO0FBQzlCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxZQUFZO0FBQ25CLE9BQU9DLDZCQUE2QjtBQUNwQyxPQUFPQyx1QkFBdUI7QUFFOUIsd0JBQXdCQyxVQUFVO0FBQ2hDLFNBQ0UsdUJBQUMsU0FBSSx3QkFBcUIsc0JBQXFCLHdCQUFxQixTQUNsRTtBQUFBLDJCQUFDLGVBQVksd0JBQXFCLHNCQUFxQix3QkFBcUIsV0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFtRjtBQUFBLElBQ25GLHVCQUFDLG1CQUFnQix3QkFBcUIsc0JBQXFCLHdCQUFxQixXQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXVGO0FBQUEsSUFDdkYsdUJBQUMsMkJBQXdCLHdCQUFxQixzQkFBcUIsd0JBQXFCLFdBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBK0Y7QUFBQSxJQUMvRix1QkFBQyxxQkFBa0Isd0JBQXFCLHNCQUFxQix3QkFBcUIsV0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF5RjtBQUFBLElBQ3pGLHVCQUFDLHFCQUFrQix3QkFBcUIsc0JBQXFCLHdCQUFxQixXQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXlGO0FBQUEsSUFDekYsdUJBQUMsY0FBVyx3QkFBcUIsc0JBQXFCLHdCQUFxQixXQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtGO0FBQUEsSUFDbEYsdUJBQUMsVUFBTyx3QkFBcUIsc0JBQXFCLHdCQUFxQixXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQThFO0FBQUEsT0FQaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFBO0FBRUo7QUFBQ0MsS0FadUJEO0FBQU8sSUFBQUM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJIZXJvU2VjdGlvbiIsIkZlYXR1cmVzU2VjdGlvbiIsIkNvbXBhcmlzb25TZWN0aW9uIiwiQ1RBU2VjdGlvbiIsIkZvb3RlciIsIkxhbmRpbmdBSURldGVjdG9yVGVhc2VyIiwiT3BlblNvdXJjZVNlY3Rpb24iLCJMYW5kaW5nIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTGFuZGluZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb24nO1xuaW1wb3J0IEZlYXR1cmVzU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uJztcbmltcG9ydCBDb21wYXJpc29uU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvQ29tcGFyaXNvblNlY3Rpb24nO1xuaW1wb3J0IENUQVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL0NUQVNlY3Rpb24nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyJztcbmltcG9ydCBMYW5kaW5nQUlEZXRlY3RvclRlYXNlciBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvTGFuZGluZ0FJRGV0ZWN0b3JUZWFzZXInO1xuaW1wb3J0IE9wZW5Tb3VyY2VTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZGluZy9PcGVuU291cmNlU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0xhbmRpbmc6MTI6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgIDxIZXJvU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0xhbmRpbmc6MTM6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPEZlYXR1cmVzU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0xhbmRpbmc6MTQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPExhbmRpbmdBSURldGVjdG9yVGVhc2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTGFuZGluZzoxNTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICA8Q29tcGFyaXNvblNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9MYW5kaW5nOjE2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgIDxPcGVuU291cmNlU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0xhbmRpbmc6MTc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPENUQVNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9MYW5kaW5nOjE4OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgIDxGb290ZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9MYW5kaW5nOjE5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9MYW5kaW5nLmpzeCJ9