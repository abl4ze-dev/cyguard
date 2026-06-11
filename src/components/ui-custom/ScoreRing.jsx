import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui-custom/ScoreRing.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui-custom/ScoreRing.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
export default function ScoreRing({ score = 0, size = 120, strokeWidth = 8, label = "Score", "data-collection-item-id": __dataCollectionItemId }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = score / 100 * circumference;
  const getColor = () => {
    if (score >= 80) return { stroke: "#10b981", bg: "#10b981" };
    if (score >= 50) return { stroke: "#f59e0b", bg: "#f59e0b" };
    return { stroke: "#ef4444", bg: "#ef4444" };
  };
  const color = getColor();
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/ui-custom/ScoreRing:17:4", "data-dynamic-content": "true", className: "relative flex flex-col items-center gap-2", "data-collection-item-id": __dataCollectionItemId, children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/ui-custom/ScoreRing:18:6", "data-dynamic-content": "true", className: "relative", style: { width: size, height: size }, children: [
      /* @__PURE__ */ jsxDEV("svg", { "data-source-location": "components/ui-custom/ScoreRing:19:8", "data-dynamic-content": "true", width: size, height: size, className: "-rotate-90", children: [
        /* @__PURE__ */ jsxDEV(
          "circle",
          {
            "data-source-location": "components/ui-custom/ScoreRing:20:10",
            "data-dynamic-content": "true",
            cx: size / 2,
            cy: size / 2,
            r: radius,
            fill: "none",
            stroke: "hsl(222 30% 16%)",
            strokeWidth
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/ui-custom/ScoreRing.jsx",
            lineNumber: 39,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.circle,
          {
            "data-source-location": "components/ui-custom/ScoreRing:24:10",
            "data-dynamic-content": "true",
            cx: size / 2,
            cy: size / 2,
            r: radius,
            fill: "none",
            stroke: color.stroke,
            strokeWidth,
            strokeLinecap: "round",
            strokeDasharray: circumference,
            initial: { strokeDashoffset: circumference },
            animate: { strokeDashoffset: circumference - progress },
            transition: { duration: 1.5, ease: "easeOut" },
            style: { filter: `drop-shadow(0 0 6px ${color.stroke}40)` }
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/ui-custom/ScoreRing.jsx",
            lineNumber: 43,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/ui-custom/ScoreRing.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/ui-custom/ScoreRing:35:8", "data-dynamic-content": "true", className: "absolute inset-0 flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxDEV(
        motion.span,
        {
          "data-source-location": "components/ui-custom/ScoreRing:36:10",
          "data-dynamic-content": "true",
          className: "text-2xl font-bold font-mono",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.5 },
          style: { color: color.bg },
          "data-collection-item-field": "score",
          "data-collection-item-id": __dataCollectionItemId,
          children: score
        },
        void 0,
        false,
        {
          fileName: "/app/src/components/ui-custom/ScoreRing.jsx",
          lineNumber: 55,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/src/components/ui-custom/ScoreRing.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/ui-custom/ScoreRing.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/ui-custom/ScoreRing:47:6", "data-dynamic-content": "true", className: "text-xs text-muted-foreground font-medium uppercase tracking-wider", "data-collection-item-field": "label", "data-collection-item-id": __dataCollectionItemId, children: label }, void 0, false, {
      fileName: "/app/src/components/ui-custom/ScoreRing.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/ui-custom/ScoreRing.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
_c = ScoreRing;
var _c;
$RefreshReg$(_c, "ScoreRing");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui-custom/ScoreRing.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui-custom/ScoreRing.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQTtBQUFBO0FBQUEsYUFVQTtBQUFBLFNBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E0QkE7QUFBQSxJQUNBLHVCQUFDLFVBQUssd0JBQXFCLHVDQUFzQyx3QkFBcUIsUUFBTyxXQUFVLHNFQUFxRSw4QkFBMkIsU0FBUSwyQkFBeUJJLHdCQUF5QkQsbUJBQWpRO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdVE7QUFBQSxPQTlCelE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQStCQTtBQUVKO0FBQUNtQixLQTlDdUJ2QjtBQUFTLElBQUF1QjtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIlNjb3JlUmluZyIsInNjb3JlIiwic2l6ZSIsInN0cm9rZVdpZHRoIiwibGFiZWwiLCJfX2RhdGFDb2xsZWN0aW9uSXRlbUlkIiwicmFkaXVzIiwiY2lyY3VtZmVyZW5jZSIsIk1hdGgiLCJQSSIsInByb2dyZXNzIiwiZ2V0Q29sb3IiLCJzdHJva2UiLCJiZyIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzdHJva2VEYXNob2Zmc2V0IiwiZHVyYXRpb24iLCJlYXNlIiwiZmlsdGVyIiwib3BhY2l0eSIsImRlbGF5IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2NvcmVSaW5nLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjb3JlUmluZyh7IHNjb3JlID0gMCwgc2l6ZSA9IDEyMCwgc3Ryb2tlV2lkdGggPSA4LCBsYWJlbCA9ICdTY29yZScsIFwiZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWRcIjogX19kYXRhQ29sbGVjdGlvbkl0ZW1JZCB9KSB7XG4gIGNvbnN0IHJhZGl1cyA9IChzaXplIC0gc3Ryb2tlV2lkdGgpIC8gMjtcbiAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xuICBjb25zdCBwcm9ncmVzcyA9IHNjb3JlIC8gMTAwICogY2lyY3VtZmVyZW5jZTtcblxuICBjb25zdCBnZXRDb2xvciA9ICgpID0+IHtcbiAgICBpZiAoc2NvcmUgPj0gODApIHJldHVybiB7IHN0cm9rZTogJyMxMGI5ODEnLCBiZzogJyMxMGI5ODEnIH07XG4gICAgaWYgKHNjb3JlID49IDUwKSByZXR1cm4geyBzdHJva2U6ICcjZjU5ZTBiJywgYmc6ICcjZjU5ZTBiJyB9O1xuICAgIHJldHVybiB7IHN0cm9rZTogJyNlZjQ0NDQnLCBiZzogJyNlZjQ0NDQnIH07XG4gIH07XG4gIGNvbnN0IGNvbG9yID0gZ2V0Q29sb3IoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpLWN1c3RvbS9TY29yZVJpbmc6MTc6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvdWktY3VzdG9tL1Njb3JlUmluZzoxODo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBzdHlsZT17eyB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplIH19PlxuICAgICAgICA8c3ZnIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy91aS1jdXN0b20vU2NvcmVSaW5nOjE5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSBjbGFzc05hbWU9XCItcm90YXRlLTkwXCI+XG4gICAgICAgICAgPGNpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvdWktY3VzdG9tL1Njb3JlUmluZzoyMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgY3g9e3NpemUgLyAyfSBjeT17c2l6ZSAvIDJ9IHI9e3JhZGl1c31cbiAgICAgICAgICBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImhzbCgyMjIgMzAlIDE2JSlcIiBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9IC8+XG4gICAgICAgICAgXG4gICAgICAgICAgPG1vdGlvbi5jaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpLWN1c3RvbS9TY29yZVJpbmc6MjQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGN4PXtzaXplIC8gMn0gY3k9e3NpemUgLyAyfSByPXtyYWRpdXN9XG4gICAgICAgICAgZmlsbD1cIm5vbmVcIiBzdHJva2U9e2NvbG9yLnN0cm9rZX0gc3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PXtjaXJjdW1mZXJlbmNlfVxuICAgICAgICAgIGluaXRpYWw9e3sgc3Ryb2tlRGFzaG9mZnNldDogY2lyY3VtZmVyZW5jZSB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgc3Ryb2tlRGFzaG9mZnNldDogY2lyY3VtZmVyZW5jZSAtIHByb2dyZXNzIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41LCBlYXNlOiAnZWFzZU91dCcgfX1cbiAgICAgICAgICBzdHlsZT17eyBmaWx0ZXI6IGBkcm9wLXNoYWRvdygwIDAgNnB4ICR7Y29sb3Iuc3Ryb2tlfTQwKWAgfX0gLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpLWN1c3RvbS9TY29yZVJpbmc6MzU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8bW90aW9uLnNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpLWN1c3RvbS9TY29yZVJpbmc6MzY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBmb250LW1vbm9cIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNSB9fVxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBjb2xvci5iZyB9fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInNjb3JlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7c2NvcmV9XG4gICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy91aS1jdXN0b20vU2NvcmVSaW5nOjQ3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PntsYWJlbH08L3NwYW4+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy91aS1jdXN0b20vU2NvcmVSaW5nLmpzeCJ9