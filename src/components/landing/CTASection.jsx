import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/CTASection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/CTASection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=ef8b20f3";
import { ArrowRight, Shield } from "/node_modules/.vite/deps/lucide-react.js?v=ef8b20f3";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
export default function CTASection() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/CTASection:9:4", "data-dynamic-content": "true", className: "py-24 px-4 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:10:6", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/3 to-transparent" }, void 0, false, {
      fileName: "/app/src/components/landing/CTASection.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/CTASection:11:6",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-4xl mx-auto text-center relative z-10",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:17:8", "data-dynamic-content": "false", className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-8", children: /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "components/landing/CTASection:18:10", "data-dynamic-content": "false", className: "w-8 h-8 text-primary" }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 37,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/CTASection:20:8", "data-dynamic-content": "false", className: "text-3xl md:text-5xl font-bold mb-6", children: [
            "Cybersecurity Made ",
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/CTASection:21:29", "data-dynamic-content": "false", className: "gradient-text", children: "Simple & Intelligent" }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 40,
              columnNumber: 30
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/CTASection:23:8", "data-dynamic-content": "false", className: "text-lg text-muted-foreground mb-10 max-w-2xl mx-auto", children: "Start protecting your digital life today. Free scans, AI-powered analysis, and enterprise-grade security — accessible for everyone." }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:26:8", "data-dynamic-content": "false", className: "flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/CTASection:27:10", "data-dynamic-content": "false", to: "/dashboard", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/CTASection:28:12", "data-dynamic-content": "false", size: "lg", children: [
              "Get Started Free",
              /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "components/landing/CTASection:30:14", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                fileName: "/app/src/components/landing/CTASection.jsx",
                lineNumber: 49,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 47,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/CTASection:33:10", "data-dynamic-content": "false", to: "/scan", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/CTASection:34:12", "data-dynamic-content": "false", variant: "secondary", size: "lg", children: "Try a Free Scan" }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 53,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/CTASection:38:10", "data-dynamic-content": "false", to: "/how-it-works", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/CTASection:39:12", "data-dynamic-content": "false", variant: "ghost", size: "lg", children: "How It Works" }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 58,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 57,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/CTASection:43:10", "data-dynamic-content": "false", to: "/breach-checker", children: /* @__PURE__ */ jsxDEV(NeonButton, { "data-source-location": "components/landing/CTASection:44:12", "data-dynamic-content": "false", variant: "ghost", size: "lg", children: "Check Email Breaches" }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 63,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 62,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/CTASection.jsx",
        lineNumber: 30,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/CTASection.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
_c = CTASection;
var _c;
$RefreshReg$(_c, "CTASection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/CTASection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/CTASection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUEsbUJBSUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXNCQTtBQUFBO0FBQUE7QUFBQSxNQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFzQ0E7QUFBQSxPQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBeUNBO0FBRUo7QUFBQ0MsS0E3Q3VCSjtBQUFVLElBQUFJO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiTGluayIsIkFycm93UmlnaHQiLCJTaGllbGQiLCJOZW9uQnV0dG9uIiwiQ1RBU2VjdGlvbiIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNUQVNlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEFycm93UmlnaHQsIFNoaWVsZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgTmVvbkJ1dHRvbiBmcm9tICcuLi91aS1jdXN0b20vTmVvbkJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENUQVNlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjo5OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0yNCBweC00IHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NUQVNlY3Rpb246MTA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWIgZnJvbS10cmFuc3BhcmVudCB2aWEtbmVvbi1ibHVlLzMgdG8tdHJhbnNwYXJlbnRcIiAvPlxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoxMTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgIGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoxNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTE2IGgtMTYgcm91bmRlZC0yeGwgYmctcHJpbWFyeS8xMCBib3JkZXIgYm9yZGVyLXByaW1hcnkvMjAgbWItOFwiPlxuICAgICAgICAgIDxTaGllbGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoxODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoyMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCBtYi02XCI+XG4gICAgICAgICAgQ3liZXJzZWN1cml0eSBNYWRlIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NUQVNlY3Rpb246MjE6MjlcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZ3JhZGllbnQtdGV4dFwiPlNpbXBsZSAmIEludGVsbGlnZW50PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjIzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItMTAgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICBTdGFydCBwcm90ZWN0aW5nIHlvdXIgZGlnaXRhbCBsaWZlIHRvZGF5LiBGcmVlIHNjYW5zLCBBSS1wb3dlcmVkIGFuYWx5c2lzLCBhbmQgZW50ZXJwcmlzZS1ncmFkZSBzZWN1cml0eSDigJQgYWNjZXNzaWJsZSBmb3IgZXZlcnlvbmUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjI2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjI3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgPE5lb25CdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoyODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWQgRnJlZVxuICAgICAgICAgICAgICA8QXJyb3dSaWdodCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjMwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgPC9OZW9uQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjMzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL3NjYW5cIj5cbiAgICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NUQVNlY3Rpb246MzQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICBUcnkgYSBGcmVlIFNjYW5cbiAgICAgICAgICAgIDwvTmVvbkJ1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjozODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB0bz1cIi9ob3ctaXQtd29ya3NcIj5cbiAgICAgICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NUQVNlY3Rpb246Mzk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgIEhvdyBJdCBXb3Jrc1xuICAgICAgICAgICAgPC9OZW9uQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjQzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL2JyZWFjaC1jaGVja2VyXCI+XG4gICAgICAgICAgICA8TmVvbkJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjQ0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICBDaGVjayBFbWFpbCBCcmVhY2hlc1xuICAgICAgICAgICAgPC9OZW9uQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9zZWN0aW9uPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uLmpzeCJ9