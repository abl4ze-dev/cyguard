import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/Footer.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/Footer.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import CyguardLogo from "/src/components/brand/CyguardLogo.jsx";
export default function Footer() {
  return /* @__PURE__ */ jsxDEV("footer", { "data-source-location": "components/landing/Footer:6:4", "data-dynamic-content": "true", className: "border-t border-border py-12 px-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/Footer:7:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/Footer:8:8", "data-dynamic-content": "true", className: "grid md:grid-cols-4 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/Footer:9:10", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV(CyguardLogo, { "data-source-location": "components/landing/Footer:10:12", "data-dynamic-content": "false", size: "sm" }, void 0, false, {
          fileName: "/app/src/components/landing/Footer.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/Footer:11:12", "data-dynamic-content": "false", className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: "Intelligent Digital Security Detection & Privacy Protection Platform." }, void 0, false, {
          fileName: "/app/src/components/landing/Footer.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/landing/Footer.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      [
        { title: "Product", items: ["Dashboard", "Scan Center", "Browser Extension", "Privacy Center"] },
        { title: "Company", items: ["About", "Blog", "Careers", "Contact"] },
        { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"] }
      ].map(
        (col, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/Footer:20:12", "data-dynamic-content": "true", "data-arr-index": __arrIdx__, children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/landing/Footer:21:14", "data-dynamic-content": "true", className: "text-sm font-semibold text-foreground mb-3", "data-arr-index": __arrIdx__, "data-arr-field": "title", children: col.title }, void 0, false, {
            fileName: "/app/src/components/landing/Footer.jsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "components/landing/Footer:22:14", "data-dynamic-content": "true", className: "space-y-2", "data-arr-index": __arrIdx__, children: col.items.map(
            (item) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "components/landing/Footer:24:18", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/Footer:25:20", "data-dynamic-content": "true", className: "text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors", "data-collection-item-field": "item", children: item }, void 0, false, {
              fileName: "/app/src/components/landing/Footer.jsx",
              lineNumber: 44,
              columnNumber: 21
            }, this) }, item, false, {
              fileName: "/app/src/components/landing/Footer.jsx",
              lineNumber: 43,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/components/landing/Footer.jsx",
            lineNumber: 41,
            columnNumber: 15
          }, this)
        ] }, col.title, true, {
          fileName: "/app/src/components/landing/Footer.jsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      )
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/Footer.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/Footer:34:8", "data-dynamic-content": "false", className: "border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/Footer:35:10", "data-dynamic-content": "false", className: "text-xs text-muted-foreground", children: "© 2026 CYGUARD. All rights reserved." }, void 0, false, {
        fileName: "/app/src/components/landing/Footer.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/Footer:36:10", "data-dynamic-content": "false", className: "text-xs text-muted-foreground", children: "Cybersecurity Made Simple, Intelligent, and Accessible." }, void 0, false, {
        fileName: "/app/src/components/landing/Footer.jsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/Footer.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/Footer.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/components/landing/Footer.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/Footer.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/Footer.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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YXAiLCJjb2wiLCJfX2FycklkeF9fIiwiaXRlbSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkZvb3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDeWd1YXJkTG9nbyBmcm9tICcuLi9icmFuZC9DeWd1YXJkTG9nbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0Zvb3Rlcjo2OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItYm9yZGVyIHB5LTEyIHB4LTRcIj5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyOjc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyOjg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTggbWItOFwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyOjk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8Q3lndWFyZExvZ28gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyOjEwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Gb290ZXI6MTE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMyBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgSW50ZWxsaWdlbnQgRGlnaXRhbCBTZWN1cml0eSBEZXRlY3Rpb24gJiBQcml2YWN5IFByb3RlY3Rpb24gUGxhdGZvcm0uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1tcbiAgICAgICAgICB7IHRpdGxlOiAnUHJvZHVjdCcsIGl0ZW1zOiBbJ0Rhc2hib2FyZCcsICdTY2FuIENlbnRlcicsICdCcm93c2VyIEV4dGVuc2lvbicsICdQcml2YWN5IENlbnRlciddIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ0NvbXBhbnknLCBpdGVtczogWydBYm91dCcsICdCbG9nJywgJ0NhcmVlcnMnLCAnQ29udGFjdCddIH0sXG4gICAgICAgICAgeyB0aXRsZTogJ0xlZ2FsJywgaXRlbXM6IFsnUHJpdmFjeSBQb2xpY3knLCAnVGVybXMgb2YgU2VydmljZScsICdDb29raWUgUG9saWN5JywgJ0dEUFInXSB9XS5cbiAgICAgICAgICBtYXAoKGNvbCwgX19hcnJJZHhfXykgPT5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0Zvb3RlcjoyMDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Y29sLnRpdGxlfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+XG4gICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Gb290ZXI6MjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTNcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItZmllbGQ9XCJ0aXRsZVwiPntjb2wudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgPHVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0Zvb3RlcjoyMjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICB7Y29sLml0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0Zvb3RlcjoyNDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0Zvb3RlcjoyNToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWNvbG9yc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyOjM0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwdC04IGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0Zvb3RlcjozNToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPsKpIDIwMjYgQ1lHVUFSRC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyOjM2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+Q3liZXJzZWN1cml0eSBNYWRlIFNpbXBsZSwgSW50ZWxsaWdlbnQsIGFuZCBBY2Nlc3NpYmxlLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvRm9vdGVyLmpzeCJ9