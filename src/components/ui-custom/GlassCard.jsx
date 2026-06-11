import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui-custom/GlassCard.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui-custom/GlassCard.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
import { cn } from "/src/lib/utils.js";
export default function GlassCard({ children, className, glow, hover = true, delay = 0, ...props }) {
  const glowClass = glow === "blue" ? "glow-blue" : glow === "purple" ? "glow-purple" : "";
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/ui-custom/GlassCard:9:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay },
      whileHover: hover ? { y: -4, transition: { duration: 0.2 } } : void 0,
      className: cn(
        "glass rounded-2xl p-5",
        glowClass,
        hover && "transition-all duration-300 hover:border-primary/30 hover:shadow-lg",
        className
      ),
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "/app/src/components/ui-custom/GlassCard.jsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
_c = GlassCard;
var _c;
$RefreshReg$(_c, "GlassCard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui-custom/GlassCard.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui-custom/GlassCard.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBUUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSSixPQUFPQSxXQUFXO0FBQ2xCLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsVUFBVTtBQUVuQix3QkFBd0JDLFVBQVUsRUFBRUMsVUFBVUMsV0FBV0MsTUFBTUMsUUFBUSxNQUFNQyxRQUFRLEdBQUcsR0FBR0MsTUFBTSxHQUFHO0FBQ2xHLFFBQU1DLFlBQVlKLFNBQVMsU0FBUyxjQUFjQSxTQUFTLFdBQVcsZ0JBQWdCO0FBRXRGLFNBQ0U7QUFBQSxJQUFDLE9BQU87QUFBQSxJQUFQO0FBQUEsTUFBVyx3QkFBcUI7QUFBQSxNQUFxQyx3QkFBcUI7QUFBQSxNQUMzRixTQUFTLEVBQUVLLFNBQVMsR0FBR0MsR0FBRyxHQUFHO0FBQUEsTUFDN0IsYUFBYSxFQUFFRCxTQUFTLEdBQUdDLEdBQUcsRUFBRTtBQUFBLE1BQ2hDLFVBQVUsRUFBRUMsTUFBTSxLQUFLO0FBQUEsTUFDdkIsWUFBWSxFQUFFQyxVQUFVLEtBQUtOLE1BQU07QUFBQSxNQUNuQyxZQUFZRCxRQUFRLEVBQUVLLEdBQUcsSUFBSUcsWUFBWSxFQUFFRCxVQUFVLElBQUksRUFBRSxJQUFJRTtBQUFBQSxNQUMvRCxXQUFXZDtBQUFBQSxRQUNUO0FBQUEsUUFDQVE7QUFBQUEsUUFDQUgsU0FBUztBQUFBLFFBQ1RGO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBLEdBQUlJO0FBQUFBLE1BRURMO0FBQUFBO0FBQUFBLElBZEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZUE7QUFFSjtBQUFDYSxLQXJCdUJkO0FBQVMsSUFBQWM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJjbiIsIkdsYXNzQ2FyZCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZ2xvdyIsImhvdmVyIiwiZGVsYXkiLCJwcm9wcyIsImdsb3dDbGFzcyIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsImR1cmF0aW9uIiwidHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkdsYXNzQ2FyZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdsYXNzQ2FyZCh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGdsb3csIGhvdmVyID0gdHJ1ZSwgZGVsYXkgPSAwLCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IGdsb3dDbGFzcyA9IGdsb3cgPT09ICdibHVlJyA/ICdnbG93LWJsdWUnIDogZ2xvdyA9PT0gJ3B1cnBsZScgPyAnZ2xvdy1wdXJwbGUnIDogJyc7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvdWktY3VzdG9tL0dsYXNzQ2FyZDo5OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXkgfX1cbiAgICB3aGlsZUhvdmVyPXtob3ZlciA/IHsgeTogLTQsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMiB9IH0gOiB1bmRlZmluZWR9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICdnbGFzcyByb3VuZGVkLTJ4bCBwLTUnLFxuICAgICAgZ2xvd0NsYXNzLFxuICAgICAgaG92ZXIgJiYgJ3RyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlcjpib3JkZXItcHJpbWFyeS8zMCBob3ZlcjpzaGFkb3ctbGcnLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9PlxuICAgICAgXG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tb3Rpb24uZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvdWktY3VzdG9tL0dsYXNzQ2FyZC5qc3gifQ==