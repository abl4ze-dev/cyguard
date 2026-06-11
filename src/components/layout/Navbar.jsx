import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/layout/Navbar.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/layout/Navbar.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { Link, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=c96743a3";
import { Shield, Menu, X, Sun, Moon } from "/node_modules/.vite/deps/lucide-react.js?v=76f08321";
import { useTheme } from "/src/lib/ThemeContext.jsx";
import { cn } from "/src/lib/utils.js";
const navLinks = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/scan", label: "Scan" },
  { path: "/ai-detector", label: "AI Detector" },
  { path: "/how-it-works", label: "How It Works" },
  { path: "/reports", label: "Reports" },
  { path: "/privacy", label: "Privacy" },
  { path: "/flagged", label: "Flagged Sites" },
  { path: "/news", label: "Cyber News" },
  { path: "/extension", label: "Extension" },
  { path: "/breach-checker", label: "Breach Checker" },
  { path: "/settings", label: "Settings" }
];
export default function Navbar() {
  _s();
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxDEV("header", { "data-source-location": "components/layout/Navbar:27:4", "data-dynamic-content": "true", className: "fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/50", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/layout/Navbar:28:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 h-14 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/layout/Navbar:30:8", "data-dynamic-content": "false", to: "/", className: "flex items-center gap-2 font-bold text-base", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/layout/Navbar:31:10", "data-dynamic-content": "false", className: "w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "components/layout/Navbar:32:12", "data-dynamic-content": "false", className: "w-4 h-4 text-white" }, void 0, false, {
          fileName: "/app/src/components/layout/Navbar.jsx",
          lineNumber: 51,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/components/layout/Navbar.jsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/layout/Navbar:34:10", "data-dynamic-content": "false", className: "gradient-text font-black tracking-tight", children: "CYGUARD" }, void 0, false, {
          fileName: "/app/src/components/layout/Navbar.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/layout/Navbar.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { "data-source-location": "components/layout/Navbar:38:8", "data-dynamic-content": "true", className: "hidden md:flex items-center gap-0.5", children: navLinks.map(
        ({ path, label, id }) => /* @__PURE__ */ jsxDEV(
          Link,
          {
            "data-source-location": "components/layout/Navbar:40:12",
            "data-dynamic-content": "true",
            to: path,
            className: cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
              location.pathname === path ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            ),
            "data-collection-item-field": "label",
            "data-collection-item-id": id,
            children: label
          },
          path,
          false,
          {
            fileName: "/app/src/components/layout/Navbar.jsx",
            lineNumber: 59,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/components/layout/Navbar.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/layout/Navbar:56:8", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "components/layout/Navbar:57:10",
            "data-dynamic-content": "true",
            onClick: toggle,
            className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors",
            "aria-label": "Toggle theme",
            children: theme === "dark" ? /* @__PURE__ */ jsxDEV(Sun, { "data-source-location": "components/layout/Navbar:62:32", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/components/layout/Navbar.jsx",
              lineNumber: 81,
              columnNumber: 33
            }, this) : /* @__PURE__ */ jsxDEV(Moon, { "data-source-location": "components/layout/Navbar:62:62", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/components/layout/Navbar.jsx",
              lineNumber: 81,
              columnNumber: 146
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/layout/Navbar.jsx",
            lineNumber: 76,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "components/layout/Navbar:65:10",
            "data-dynamic-content": "true",
            className: "md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors",
            onClick: () => setMenuOpen((o) => !o),
            "aria-label": "Toggle menu",
            children: menuOpen ? /* @__PURE__ */ jsxDEV(X, { "data-source-location": "components/layout/Navbar:70:24", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/components/layout/Navbar.jsx",
              lineNumber: 89,
              columnNumber: 25
            }, this) : /* @__PURE__ */ jsxDEV(Menu, { "data-source-location": "components/layout/Navbar:70:52", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/components/layout/Navbar.jsx",
              lineNumber: 89,
              columnNumber: 136
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/layout/Navbar.jsx",
            lineNumber: 84,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/layout/Navbar.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/layout/Navbar.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    menuOpen && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/layout/Navbar:77:8", "data-dynamic-content": "true", className: "md:hidden glass-strong border-t border-border/50 px-4 py-3 flex flex-col gap-1", children: navLinks.map(
      ({ path, label, id }) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          "data-source-location": "components/layout/Navbar:79:12",
          "data-dynamic-content": "true",
          to: path,
          onClick: () => setMenuOpen(false),
          className: cn(
            "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
            location.pathname === path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          ),
          "data-collection-item-field": "label",
          "data-collection-item-id": id,
          children: label
        },
        path,
        false,
        {
          fileName: "/app/src/components/layout/Navbar.jsx",
          lineNumber: 98,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/app/src/components/layout/Navbar.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/layout/Navbar.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
_s(Navbar, "EsuwZ6oGylLz29T5O0pFX6a1CJM=", false, function() {
  return [useTheme, useLocation];
});
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/layout/Navbar.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/layout/Navbar.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQSxVQUNoQyxXQUFXVjtBQUFBQSxZQUNUO0FBQUEsWUFDQVEsU0FBU0ssYUFBYVgsT0FDdEIsK0JBQ0E7QUFBQSxVQUNGO0FBQUEsVUFBRyw4QkFBMkI7QUFBQSxVQUFRLDJCQUF5QlU7QUFBQUEsVUFFeERUO0FBQUFBO0FBQUFBLFFBVkZEO0FBQUFBLFFBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVlJO0FBQUEsSUFDSixLQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnQkU7QUFBQSxPQWxFSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBb0VBO0FBRUo7QUFBQ0csR0E1RXVCRCxRQUFNO0FBQUEsVUFDRkwsVUFDVE4sV0FBVztBQUFBO0FBQUEsS0FGTlc7QUFBTSxJQUFBVztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZUxvY2F0aW9uIiwiU2hpZWxkIiwiTWVudSIsIlgiLCJTdW4iLCJNb29uIiwidXNlVGhlbWUiLCJjbiIsIm5hdkxpbmtzIiwicGF0aCIsImxhYmVsIiwiTmF2YmFyIiwiX3MiLCJ0aGVtZSIsInRvZ2dsZSIsImxvY2F0aW9uIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsIm1hcCIsImlkIiwicGF0aG5hbWUiLCJvIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmF2YmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgU2hpZWxkLCBNZW51LCBYLCBTdW4sIE1vb24gfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAL2xpYi9UaGVtZUNvbnRleHQnO1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5cbmNvbnN0IG5hdkxpbmtzID0gW1xueyBwYXRoOiAnL2Rhc2hib2FyZCcsIGxhYmVsOiAnRGFzaGJvYXJkJyB9LFxueyBwYXRoOiAnL3NjYW4nLCBsYWJlbDogJ1NjYW4nIH0sXG57IHBhdGg6ICcvYWktZGV0ZWN0b3InLCBsYWJlbDogJ0FJIERldGVjdG9yJyB9LFxueyBwYXRoOiAnL2hvdy1pdC13b3JrcycsIGxhYmVsOiAnSG93IEl0IFdvcmtzJyB9LFxueyBwYXRoOiAnL3JlcG9ydHMnLCBsYWJlbDogJ1JlcG9ydHMnIH0sXG57IHBhdGg6ICcvcHJpdmFjeScsIGxhYmVsOiAnUHJpdmFjeScgfSxcbnsgcGF0aDogJy9mbGFnZ2VkJywgbGFiZWw6ICdGbGFnZ2VkIFNpdGVzJyB9LFxueyBwYXRoOiAnL25ld3MnLCBsYWJlbDogJ0N5YmVyIE5ld3MnIH0sXG57IHBhdGg6ICcvZXh0ZW5zaW9uJywgbGFiZWw6ICdFeHRlbnNpb24nIH0sXG57IHBhdGg6ICcvYnJlYWNoLWNoZWNrZXInLCBsYWJlbDogJ0JyZWFjaCBDaGVja2VyJyB9LFxueyBwYXRoOiAnL3NldHRpbmdzJywgbGFiZWw6ICdTZXR0aW5ncycgfV07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCB7IHRoZW1lLCB0b2dnbGUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyOjI3OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIGdsYXNzLXN0cm9uZyBib3JkZXItYiBib3JkZXItYm9yZGVyLzUwXCI+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyOjI4OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IGgtMTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L05hdmJhcjozMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtYm9sZCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyOjMxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkgdG8tYWNjZW50IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8U2hpZWxkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyOjMyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xheW91dC9OYXZiYXI6MzQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZ3JhZGllbnQtdGV4dCBmb250LWJsYWNrIHRyYWNraW5nLXRpZ2h0XCI+Q1lHVUFSRDwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIHsvKiBEZXNrdG9wIE5hdiAqL31cbiAgICAgICAgPG5hdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L05hdmJhcjozODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC0wLjVcIj5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKCh7IHBhdGgsIGxhYmVsLCBpZCB9KSA9PlxuICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyOjQwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgdG89e3BhdGh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICdweC0zIHB5LTEuNSByb3VuZGVkLWxnIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwnLFxuICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IHBhdGggP1xuICAgICAgICAgICAgJ2JnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGQnIDpcbiAgICAgICAgICAgICd0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS82MCdcbiAgICAgICAgICApfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgey8qIFRoZW1lIHRvZ2dsZSArIG1vYmlsZSBtZW51ICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyOjU2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xheW91dC9OYXZiYXI6NTc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS81MCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IDxTdW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xheW91dC9OYXZiYXI6NjI6MzJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+IDogPE1vb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xheW91dC9OYXZiYXI6NjI6NjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L05hdmJhcjo2NToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHAtMiByb3VuZGVkLWxnIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQgaG92ZXI6Ymctc2Vjb25kYXJ5LzUwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbigobykgPT4gIW8pfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbWVudVwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7bWVudU9wZW4gPyA8WCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L05hdmJhcjo3MDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gOiA8TWVudSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L05hdmJhcjo3MDo1MlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNb2JpbGUgTWVudSAqL31cbiAgICAgIHttZW51T3BlbiAmJlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L05hdmJhcjo3Nzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGdsYXNzLXN0cm9uZyBib3JkZXItdCBib3JkZXItYm9yZGVyLzUwIHB4LTQgcHktMyBmbGV4IGZsZXgtY29sIGdhcC0xXCI+XG4gICAgICAgICAge25hdkxpbmtzLm1hcCgoeyBwYXRoLCBsYWJlbCwgaWQgfSkgPT5cbiAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xheW91dC9OYXZiYXI6Nzk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgIHRvPXtwYXRofVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbihmYWxzZSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgJ3B4LTMgcHktMiByb3VuZGVkLWxnIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMnLFxuICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBwYXRoID9cbiAgICAgICAgICAnYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnknIDpcbiAgICAgICAgICAndGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnkvNTAnXG4gICAgICAgICl9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibGFiZWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9PlxuICAgICAgICAgIFxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvaGVhZGVyPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhci5qc3gifQ==