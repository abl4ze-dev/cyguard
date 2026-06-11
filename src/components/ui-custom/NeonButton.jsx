import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui-custom/NeonButton.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui-custom/NeonButton.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { cn } from "/src/lib/utils.js";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=ef8b20f3";
export default function NeonButton({ children, variant = "primary", className, size = "md", ...props }) {
  const variants = {
    primary: "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/40",
    secondary: "glass border-primary/20 text-foreground hover:border-primary/50 hover:bg-primary/5",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };
  return /* @__PURE__ */ jsxDEV(
    motion.button,
    {
      "data-source-location": "components/ui-custom/NeonButton:19:4",
      "data-dynamic-content": "true",
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      className: cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      ),
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "/app/src/components/ui-custom/NeonButton.jsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  );
}
_c = NeonButton;
var _c;
$RefreshReg$(_c, "NeonButton");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui-custom/NeonButton.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui-custom/NeonButton.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JJOzs7Ozs7Ozs7Ozs7Ozs7O0FBbEJKLE9BQU9BLFdBQVc7QUFDbEIsU0FBU0MsVUFBVTtBQUNuQixTQUFTQyxjQUFjO0FBRXZCLHdCQUF3QkMsV0FBVyxFQUFFQyxVQUFVQyxVQUFVLFdBQVdDLFdBQVdDLE9BQU8sTUFBTSxHQUFHQyxNQUFNLEdBQUc7QUFDdEcsUUFBTUMsV0FBVztBQUFBLElBQ2ZDLFNBQVM7QUFBQSxJQUNUQyxXQUFXO0FBQUEsSUFDWEMsT0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNQyxRQUFRO0FBQUEsSUFDWkMsSUFBSTtBQUFBLElBQ0pDLElBQUk7QUFBQSxJQUNKQyxJQUFJO0FBQUEsRUFDTjtBQUVBLFNBQ0U7QUFBQSxJQUFDLE9BQU87QUFBQSxJQUFQO0FBQUEsTUFBYyx3QkFBcUI7QUFBQSxNQUF1Qyx3QkFBcUI7QUFBQSxNQUNoRyxZQUFZLEVBQUVDLE9BQU8sS0FBSztBQUFBLE1BQzFCLFVBQVUsRUFBRUEsT0FBTyxLQUFLO0FBQUEsTUFDeEIsV0FBV2hCO0FBQUFBLFFBQ1Q7QUFBQSxRQUNBUSxTQUFTSixPQUFPO0FBQUEsUUFDaEJRLE1BQU1OLElBQUk7QUFBQSxRQUNWRDtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJRTtBQUFBQSxNQUVESjtBQUFBQTtBQUFBQSxJQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVlBO0FBRUo7QUFBQ2MsS0E1QnVCZjtBQUFVLElBQUFlO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiY24iLCJtb3Rpb24iLCJOZW9uQnV0dG9uIiwiY2hpbGRyZW4iLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwic2l6ZSIsInByb3BzIiwidmFyaWFudHMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZ2hvc3QiLCJzaXplcyIsInNtIiwibWQiLCJsZyIsInNjYWxlIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmVvbkJ1dHRvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5lb25CdXR0b24oeyBjaGlsZHJlbiwgdmFyaWFudCA9ICdwcmltYXJ5JywgY2xhc3NOYW1lLCBzaXplID0gJ21kJywgLi4ucHJvcHMgfSkge1xuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBwcmltYXJ5OiAnYmctZ3JhZGllbnQtdG8tciBmcm9tLW5lb24tYmx1ZSB0by1uZW9uLXB1cnBsZSB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctbmVvbi1ibHVlLzIwIGhvdmVyOnNoYWRvdy1uZW9uLWJsdWUvNDAnLFxuICAgIHNlY29uZGFyeTogJ2dsYXNzIGJvcmRlci1wcmltYXJ5LzIwIHRleHQtZm9yZWdyb3VuZCBob3Zlcjpib3JkZXItcHJpbWFyeS81MCBob3ZlcjpiZy1wcmltYXJ5LzUnLFxuICAgIGdob3N0OiAndGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnkvNTAnXG4gIH07XG5cbiAgY29uc3Qgc2l6ZXMgPSB7XG4gICAgc206ICdweC00IHB5LTIgdGV4dC1zbScsXG4gICAgbWQ6ICdweC02IHB5LTMgdGV4dC1zbScsXG4gICAgbGc6ICdweC04IHB5LTQgdGV4dC1iYXNlJ1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5idXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpLWN1c3RvbS9OZW9uQnV0dG9uOjE5OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDIgfX1cbiAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45OCB9fVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnLFxuICAgICAgdmFyaWFudHNbdmFyaWFudF0sXG4gICAgICBzaXplc1tzaXplXSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfT5cbiAgICAgIFxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbW90aW9uLmJ1dHRvbj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL3VpLWN1c3RvbS9OZW9uQnV0dG9uLmpzeCJ9