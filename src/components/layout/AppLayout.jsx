import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/layout/AppLayout.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/layout/AppLayout.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Outlet } from "/node_modules/.vite/deps/react-router-dom.js?v=ef8b20f3";
import Navbar from "/src/components/layout/Navbar.jsx";
import { useTheme } from "/src/lib/ThemeContext.jsx";
import CygbotChat from "/src/components/chat/CygbotChat.jsx";
export default function AppLayout() {
  _s();
  const { theme } = useTheme();
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/layout/AppLayout:10:4", "data-dynamic-content": "true", className: `${theme} min-h-screen bg-background grid-pattern`, children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-source-location": "components/layout/AppLayout:11:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/components/layout/AppLayout.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { "data-source-location": "components/layout/AppLayout:12:6", "data-dynamic-content": "false", className: "pt-14", children: /* @__PURE__ */ jsxDEV(Outlet, { "data-source-location": "components/layout/AppLayout:13:8", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/components/layout/AppLayout.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/layout/AppLayout.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CygbotChat, { "data-source-location": "components/layout/AppLayout:15:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/components/layout/AppLayout.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/layout/AppLayout.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
_s(AppLayout, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
  return [useTheme];
});
_c = AppLayout;
var _c;
$RefreshReg$(_c, "AppLayout");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/layout/AppLayout.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/layout/AppLayout.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVk4sT0FBT0EsV0FBVztBQUNsQixTQUFTQyxjQUFjO0FBQ3ZCLE9BQU9DLFlBQVk7QUFDbkIsU0FBU0MsZ0JBQWdCO0FBQ3pCLE9BQU9DLGdCQUFnQjtBQUV2Qix3QkFBd0JDLFlBQVk7QUFBQUMsS0FBQTtBQUNsQyxRQUFNLEVBQUVDLE1BQU0sSUFBSUosU0FBUztBQUMzQixTQUNFLHVCQUFDLFNBQUksd0JBQXFCLG9DQUFtQyx3QkFBcUIsUUFBTyxXQUFXLEdBQUdJLEtBQUssNENBQzFHO0FBQUEsMkJBQUMsVUFBTyx3QkFBcUIsb0NBQW1DLHdCQUFxQixXQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRGO0FBQUEsSUFDNUYsdUJBQUMsVUFBSyx3QkFBcUIsb0NBQW1DLHdCQUFxQixTQUFRLFdBQVUsU0FDbkcsaUNBQUMsVUFBTyx3QkFBcUIsb0NBQW1DLHdCQUFxQixXQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRGLEtBRDlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0EsdUJBQUMsY0FBVyx3QkFBcUIsb0NBQW1DLHdCQUFxQixXQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdHO0FBQUEsT0FMbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1BO0FBRUo7QUFBQ0QsR0FYdUJELFdBQVM7QUFBQSxVQUNiRixRQUFRO0FBQUE7QUFBQSxLQURKRTtBQUFTLElBQUFHO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiT3V0bGV0IiwiTmF2YmFyIiwidXNlVGhlbWUiLCJDeWdib3RDaGF0IiwiQXBwTGF5b3V0IiwiX3MiLCJ0aGVtZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcExheW91dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0AvbGliL1RoZW1lQ29udGV4dCc7XG5pbXBvcnQgQ3lnYm90Q2hhdCBmcm9tICdAL2NvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwTGF5b3V0KCkge1xuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xheW91dC9BcHBMYXlvdXQ6MTA6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YCR7dGhlbWV9IG1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kIGdyaWQtcGF0dGVybmB9PlxuICAgICAgPE5hdmJhciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L0FwcExheW91dDoxMTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICA8bWFpbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L0FwcExheW91dDoxMjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInB0LTE0XCI+XG4gICAgICAgIDxPdXRsZXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xheW91dC9BcHBMYXlvdXQ6MTM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEN5Z2JvdENoYXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xheW91dC9BcHBMYXlvdXQ6MTU6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0FwcExheW91dC5qc3gifQ==