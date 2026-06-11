import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/App.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { Toaster } from "/src/components/ui/toaster.jsx";
import { QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=cc9a851a";
import { queryClientInstance } from "/src/lib/query-client.js";
import { BrowserRouter as Router, Route, Routes } from "/node_modules/.vite/deps/react-router-dom.js?v=0c595644";
import PageNotFound from "/src/lib/PageNotFound.jsx";
import { AuthProvider, useAuth } from "/src/lib/AuthContext.jsx";
import UserNotRegisteredError from "/src/components/UserNotRegisteredError.jsx";
import { ThemeProvider } from "/src/lib/ThemeContext.jsx";
import AppLayout from "/src/components/layout/AppLayout.jsx";
import Landing from "/src/pages/Landing.jsx?t=1781201831124";
import Dashboard from "/src/pages/Dashboard.jsx";
import ScanCenter from "/src/pages/ScanCenter.jsx";
import Reports from "/src/pages/Reports.jsx";
import Privacy from "/src/pages/Privacy.jsx";
import Extension from "/src/pages/Extension.jsx?t=1781201957237";
import Settings from "/src/pages/Settings.jsx";
import FlaggedSites from "/src/pages/FlaggedSites.jsx";
import CyberNews from "/src/pages/CyberNews.jsx";
import AIDetector from "/src/pages/AIDetector.jsx";
import HowItWorks from "/src/pages/HowItWorks.jsx";
import BreachChecker from "/src/pages/BreachChecker.jsx";
const AuthenticatedApp = () => {
  _s();
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  if (isLoadingPublicSettings || isLoadingAuth) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "App:29:6", "data-dynamic-content": "false", className: "fixed inset-0 flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "App:30:8", "data-dynamic-content": "false", className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "App:31:10", "data-dynamic-content": "false", className: "w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "App:32:10", "data-dynamic-content": "false", className: "text-sm text-muted-foreground font-medium", children: "Loading CYGUARD..." }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/App.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this);
  }
  if (authError) {
    if (authError.type === "user_not_registered") {
      return /* @__PURE__ */ jsxDEV(UserNotRegisteredError, { "data-source-location": "App:40:13", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 59,
        columnNumber: 14
      }, this);
    } else if (authError.type === "auth_required") {
      navigateToLogin();
      return null;
    }
  }
  return /* @__PURE__ */ jsxDEV(Routes, { "data-source-location": "App:48:4", "data-dynamic-content": "true", children: [
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:49:6", "data-dynamic-content": "true", element: /* @__PURE__ */ jsxDEV(AppLayout, { "data-source-location": "App:49:22", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 68,
      columnNumber: 83
    }, this), children: [
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:50:8", "data-dynamic-content": "true", path: "/", element: /* @__PURE__ */ jsxDEV(Landing, { "data-source-location": "App:50:33", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 69,
        columnNumber: 94
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:51:8", "data-dynamic-content": "true", path: "/dashboard", element: /* @__PURE__ */ jsxDEV(Dashboard, { "data-source-location": "App:51:42", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 70,
        columnNumber: 103
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:52:8", "data-dynamic-content": "true", path: "/scan", element: /* @__PURE__ */ jsxDEV(ScanCenter, { "data-source-location": "App:52:37", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 71,
        columnNumber: 98
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:53:8", "data-dynamic-content": "true", path: "/reports", element: /* @__PURE__ */ jsxDEV(Reports, { "data-source-location": "App:53:40", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 72,
        columnNumber: 101
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:54:8", "data-dynamic-content": "true", path: "/privacy", element: /* @__PURE__ */ jsxDEV(Privacy, { "data-source-location": "App:54:40", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 73,
        columnNumber: 101
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:55:8", "data-dynamic-content": "true", path: "/extension", element: /* @__PURE__ */ jsxDEV(Extension, { "data-source-location": "App:55:42", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 74,
        columnNumber: 103
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:56:8", "data-dynamic-content": "true", path: "/settings", element: /* @__PURE__ */ jsxDEV(Settings, { "data-source-location": "App:56:41", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 75,
        columnNumber: 102
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:57:8", "data-dynamic-content": "true", path: "/flagged", element: /* @__PURE__ */ jsxDEV(FlaggedSites, { "data-source-location": "App:57:40", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 76,
        columnNumber: 101
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:58:8", "data-dynamic-content": "true", path: "/news", element: /* @__PURE__ */ jsxDEV(CyberNews, { "data-source-location": "App:58:37", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 77,
        columnNumber: 98
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:59:8", "data-dynamic-content": "true", path: "/ai-detector", element: /* @__PURE__ */ jsxDEV(AIDetector, { "data-source-location": "App:59:44", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 78,
        columnNumber: 105
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:60:8", "data-dynamic-content": "true", path: "/how-it-works", element: /* @__PURE__ */ jsxDEV(HowItWorks, { "data-source-location": "App:60:45", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 79,
        columnNumber: 106
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:61:8", "data-dynamic-content": "true", path: "/breach-checker", element: /* @__PURE__ */ jsxDEV(BreachChecker, { "data-source-location": "App:61:47", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 80,
        columnNumber: 108
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/App.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:63:6", "data-dynamic-content": "true", path: "*", element: /* @__PURE__ */ jsxDEV(PageNotFound, { "data-source-location": "App:63:31", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 82,
      columnNumber: 92
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/App.jsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
};
_s(AuthenticatedApp, "hc27/Ofx9hlCa4t19zXbf5czR38=", false, function() {
  return [useAuth];
});
_c = AuthenticatedApp;
function App() {
  return /* @__PURE__ */ jsxDEV(ThemeProvider, { "data-source-location": "App:70:4", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(AuthProvider, { "data-source-location": "App:71:6", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { "data-source-location": "App:72:8", "data-dynamic-content": "true", client: queryClientInstance, children: [
    /* @__PURE__ */ jsxDEV(Router, { "data-source-location": "App:73:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(AuthenticatedApp, { "data-source-location": "App:74:12", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 93,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 92,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, { "data-source-location": "App:76:10", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 95,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/App.jsx",
    lineNumber: 91,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/src/App.jsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/App.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "AuthenticatedApp");
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QixhQUFZLHdCQUFxQixTQUM1RCxpQ0FBQyxvQkFBaUIsd0JBQXFCLGFBQVksd0JBQXFCLFdBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBK0UsS0FEakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsSUFDQSx1QkFBQyxXQUFRLHdCQUFxQixhQUFZLHdCQUFxQixXQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXNFO0FBQUEsT0FKeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtBLEtBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9BLEtBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNBO0FBRUo7QUFBQytCLE1BYlFEO0FBZVQsZUFBZUE7QUFBSSxJQUFBRSxJQUFBRDtBQUFBLGFBQUFDLElBQUE7QUFBQSxhQUFBRCxLQUFBIiwibmFtZXMiOlsiVG9hc3RlciIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJxdWVyeUNsaWVudEluc3RhbmNlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiUGFnZU5vdEZvdW5kIiwiQXV0aFByb3ZpZGVyIiwidXNlQXV0aCIsIlVzZXJOb3RSZWdpc3RlcmVkRXJyb3IiLCJUaGVtZVByb3ZpZGVyIiwiQXBwTGF5b3V0IiwiTGFuZGluZyIsIkRhc2hib2FyZCIsIlNjYW5DZW50ZXIiLCJSZXBvcnRzIiwiUHJpdmFjeSIsIkV4dGVuc2lvbiIsIlNldHRpbmdzIiwiRmxhZ2dlZFNpdGVzIiwiQ3liZXJOZXdzIiwiQUlEZXRlY3RvciIsIkhvd0l0V29ya3MiLCJCcmVhY2hDaGVja2VyIiwiQXV0aGVudGljYXRlZEFwcCIsIl9zIiwiaXNMb2FkaW5nQXV0aCIsImlzTG9hZGluZ1B1YmxpY1NldHRpbmdzIiwiYXV0aEVycm9yIiwibmF2aWdhdGVUb0xvZ2luIiwidHlwZSIsIkFwcCIsIl9jMiIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9hc3RlclwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBxdWVyeUNsaWVudEluc3RhbmNlIH0gZnJvbSAnQC9saWIvcXVlcnktY2xpZW50JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gJy4vbGliL1BhZ2VOb3RGb3VuZCc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIsIHVzZUF1dGggfSBmcm9tICdAL2xpYi9BdXRoQ29udGV4dCc7XG5pbXBvcnQgVXNlck5vdFJlZ2lzdGVyZWRFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvVXNlck5vdFJlZ2lzdGVyZWRFcnJvcic7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQC9saWIvVGhlbWVDb250ZXh0JztcblxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0FwcExheW91dCc7XG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL3BhZ2VzL0xhbmRpbmcnO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL3BhZ2VzL0Rhc2hib2FyZCc7XG5pbXBvcnQgU2NhbkNlbnRlciBmcm9tICcuL3BhZ2VzL1NjYW5DZW50ZXInO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSAnLi9wYWdlcy9SZXBvcnRzLmpzeCc7XG5pbXBvcnQgUHJpdmFjeSBmcm9tICcuL3BhZ2VzL1ByaXZhY3knO1xuaW1wb3J0IEV4dGVuc2lvbiBmcm9tICcuL3BhZ2VzL0V4dGVuc2lvbic7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9wYWdlcy9TZXR0aW5ncyc7XG5pbXBvcnQgRmxhZ2dlZFNpdGVzIGZyb20gJy4vcGFnZXMvRmxhZ2dlZFNpdGVzLmpzeCc7XG5pbXBvcnQgQ3liZXJOZXdzIGZyb20gJy4vcGFnZXMvQ3liZXJOZXdzLmpzeCc7XG5pbXBvcnQgQUlEZXRlY3RvciBmcm9tICcuL3BhZ2VzL0FJRGV0ZWN0b3InO1xuaW1wb3J0IEhvd0l0V29ya3MgZnJvbSAnLi9wYWdlcy9Ib3dJdFdvcmtzJztcbmltcG9ydCBCcmVhY2hDaGVja2VyIGZyb20gJy4vcGFnZXMvQnJlYWNoQ2hlY2tlcic7XG5cbmNvbnN0IEF1dGhlbnRpY2F0ZWRBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nQXV0aCwgaXNMb2FkaW5nUHVibGljU2V0dGluZ3MsIGF1dGhFcnJvciwgbmF2aWdhdGVUb0xvZ2luIH0gPSB1c2VBdXRoKCk7XG5cbiAgaWYgKGlzTG9hZGluZ1B1YmxpY1NldHRpbmdzIHx8IGlzTG9hZGluZ0F1dGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDoyOTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjMwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjMxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCBib3JkZXItMiBib3JkZXItcHJpbWFyeS8yMCBib3JkZXItdC1wcmltYXJ5IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjMyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtXCI+TG9hZGluZyBDWUdVQVJELi4uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIGlmIChhdXRoRXJyb3IpIHtcbiAgICBpZiAoYXV0aEVycm9yLnR5cGUgPT09ICd1c2VyX25vdF9yZWdpc3RlcmVkJykge1xuICAgICAgcmV0dXJuIDxVc2VyTm90UmVnaXN0ZXJlZEVycm9yIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQwOjEzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+O1xuICAgIH0gZWxzZSBpZiAoYXV0aEVycm9yLnR5cGUgPT09ICdhdXRoX3JlcXVpcmVkJykge1xuICAgICAgbmF2aWdhdGVUb0xvZ2luKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3V0ZXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NDg6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgPFJvdXRlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQ5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBlbGVtZW50PXs8QXBwTGF5b3V0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQ5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fT5cbiAgICAgICAgPFJvdXRlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjUwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYW5kaW5nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjUwOjMzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NTE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhdGg9XCIvZGFzaGJvYXJkXCIgZWxlbWVudD17PERhc2hib2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo1MTo0MlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn0gLz5cbiAgICAgICAgPFJvdXRlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjUyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBwYXRoPVwiL3NjYW5cIiBlbGVtZW50PXs8U2NhbkNlbnRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo1MjozN1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn0gLz5cbiAgICAgICAgPFJvdXRlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjUzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBwYXRoPVwiL3JlcG9ydHNcIiBlbGVtZW50PXs8UmVwb3J0cyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo1Mzo0MFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn0gLz5cbiAgICAgICAgPFJvdXRlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBwYXRoPVwiL3ByaXZhY3lcIiBlbGVtZW50PXs8UHJpdmFjeSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo1NDo0MFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn0gLz5cbiAgICAgICAgPFJvdXRlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBwYXRoPVwiL2V4dGVuc2lvblwiIGVsZW1lbnQ9ezxFeHRlbnNpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NTU6NDJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo1Njo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIi9zZXR0aW5nc1wiIGVsZW1lbnQ9ezxTZXR0aW5ncyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo1Njo0MVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn0gLz5cbiAgICAgICAgPFJvdXRlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBwYXRoPVwiL2ZsYWdnZWRcIiBlbGVtZW50PXs8RmxhZ2dlZFNpdGVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU3OjQwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NTg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhdGg9XCIvbmV3c1wiIGVsZW1lbnQ9ezxDeWJlck5ld3MgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NTg6MzdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo1OTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIi9haS1kZXRlY3RvclwiIGVsZW1lbnQ9ezxBSURldGVjdG9yIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU5OjQ0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NjA6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhdGg9XCIvaG93LWl0LXdvcmtzXCIgZWxlbWVudD17PEhvd0l0V29ya3MgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NjA6NDVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo2MTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIi9icmVhY2gtY2hlY2tlclwiIGVsZW1lbnQ9ezxCcmVhY2hDaGVja2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjYxOjQ3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo2Mzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIipcIiBlbGVtZW50PXs8UGFnZU5vdEZvdW5kIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjYzOjMxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgIDwvUm91dGVzPik7XG5cbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo3MDo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICA8QXV0aFByb3ZpZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjcxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NzI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsaWVudD17cXVlcnlDbGllbnRJbnN0YW5jZX0+XG4gICAgICAgICAgPFJvdXRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo3MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxBdXRoZW50aWNhdGVkQXBwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjc0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgICAgPFRvYXN0ZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NzY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJmaWxlIjoiL2FwcC9zcmMvQXBwLmpzeCJ9