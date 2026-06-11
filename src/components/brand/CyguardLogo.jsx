import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/brand/CyguardLogo.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/brand/CyguardLogo.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
export default function CyguardLogo({ size = "md", showText = true, "data-collection-item-id": __dataCollectionItemId }) {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-3xl" },
    xl: { icon: 64, text: "text-4xl" }
  };
  const s = sizes[size] || sizes.md;
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/brand/CyguardLogo:13:4", "data-dynamic-content": "true", className: "flex items-center gap-2.5", "data-collection-item-id": __dataCollectionItemId, children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/brand/CyguardLogo:14:6", "data-dynamic-content": "true", className: "relative", children: [
      /* @__PURE__ */ jsxDEV("svg", { "data-source-location": "components/brand/CyguardLogo:15:8", "data-dynamic-content": "true", width: s.icon, height: s.icon, viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxDEV("defs", { "data-source-location": "components/brand/CyguardLogo:16:10", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("linearGradient", { "data-source-location": "components/brand/CyguardLogo:17:12", "data-dynamic-content": "false", id: "shieldGrad", x1: "10", y1: "5", x2: "54", y2: "59", gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/brand/CyguardLogo:18:14", "data-dynamic-content": "false", offset: "0%", stopColor: "#00d4ff" }, void 0, false, {
              fileName: "/app/src/components/brand/CyguardLogo.jsx",
              lineNumber: 37,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/brand/CyguardLogo:19:14", "data-dynamic-content": "false", offset: "100%", stopColor: "#7c3aed" }, void 0, false, {
              fileName: "/app/src/components/brand/CyguardLogo.jsx",
              lineNumber: 38,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/brand/CyguardLogo.jsx",
            lineNumber: 36,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("linearGradient", { "data-source-location": "components/brand/CyguardLogo:21:12", "data-dynamic-content": "false", id: "shieldInner", x1: "16", y1: "12", x2: "48", y2: "52", gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/brand/CyguardLogo:22:14", "data-dynamic-content": "false", offset: "0%", stopColor: "#00d4ff", stopOpacity: "0.2" }, void 0, false, {
              fileName: "/app/src/components/brand/CyguardLogo.jsx",
              lineNumber: 41,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/brand/CyguardLogo:23:14", "data-dynamic-content": "false", offset: "100%", stopColor: "#7c3aed", stopOpacity: "0.1" }, void 0, false, {
              fileName: "/app/src/components/brand/CyguardLogo.jsx",
              lineNumber: 42,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/brand/CyguardLogo.jsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/brand/CyguardLogo.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "path",
          {
            "data-source-location": "components/brand/CyguardLogo:27:10",
            "data-dynamic-content": "false",
            d: "M32 4L8 16V32C8 46.4 18.4 59.2 32 62C45.6 59.2 56 46.4 56 32V16L32 4Z",
            fill: "url(#shieldInner)",
            stroke: "url(#shieldGrad)",
            strokeWidth: "2.5",
            strokeLinejoin: "round"
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/brand/CyguardLogo.jsx",
            lineNumber: 46,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "path",
          {
            "data-source-location": "components/brand/CyguardLogo:30:10",
            "data-dynamic-content": "false",
            d: "M38 22C36.4 20.8 34.4 20 32 20C26.5 20 22 24.5 22 30V34C22 39.5 26.5 44 32 44C34.4 44 36.4 43.2 38 42",
            stroke: "url(#shieldGrad)",
            strokeWidth: "3",
            strokeLinecap: "round",
            fill: "none"
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/brand/CyguardLogo.jsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("circle", { "data-source-location": "components/brand/CyguardLogo:33:10", "data-dynamic-content": "false", cx: "42", cy: "32", r: "2.5", fill: "#00d4ff", opacity: "0.8" }, void 0, false, {
          fileName: "/app/src/components/brand/CyguardLogo.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/brand/CyguardLogo.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          "data-source-location": "components/brand/CyguardLogo:35:8",
          "data-dynamic-content": "true",
          className: "absolute inset-0 rounded-full blur-lg opacity-30",
          style: { background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }
        },
        void 0,
        false,
        {
          fileName: "/app/src/components/brand/CyguardLogo.jsx",
          lineNumber: 54,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/components/brand/CyguardLogo.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    showText && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/brand/CyguardLogo:39:8", "data-dynamic-content": "true", className: `${s.text} font-inter font-bold tracking-tight`, children: [
      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/brand/CyguardLogo:40:10", "data-dynamic-content": "false", className: "gradient-text", children: "CY" }, void 0, false, {
        fileName: "/app/src/components/brand/CyguardLogo.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/brand/CyguardLogo:41:10", "data-dynamic-content": "false", className: "text-foreground", children: "GUARD" }, void 0, false, {
        fileName: "/app/src/components/brand/CyguardLogo.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/brand/CyguardLogo.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/brand/CyguardLogo.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
_c = CyguardLogo;
var _c;
$RefreshReg$(_c, "CyguardLogo");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/brand/CyguardLogo.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/brand/CyguardLogo.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QXFDLHdCQUFxQixTQUFRLElBQUcsTUFBSyxJQUFHLE1BQUssR0FBRSxPQUFNLE1BQUssV0FBVSxTQUFRLFNBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbUo7QUFBQSxXQWxCcko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW1CQTtBQUFBLE1BQ0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUFJLHdCQUFxQjtBQUFBLFVBQW9DLHdCQUFxQjtBQUFBLFVBQU8sV0FBVTtBQUFBLFVBQ3BHLE9BQU8sRUFBRU0sWUFBWSx1REFBdUQ7QUFBQTtBQUFBLFFBRDVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUM4RTtBQUFBLFNBdEJoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBdUJBO0FBQUEsSUFDQ1YsWUFDRCx1QkFBQyxVQUFLLHdCQUFxQixxQ0FBb0Msd0JBQXFCLFFBQU8sV0FBVyxHQUFHUyxFQUFFSixJQUFJLHdDQUMzRztBQUFBLDZCQUFDLFVBQUssd0JBQXFCLHNDQUFxQyx3QkFBcUIsU0FBUSxXQUFVLGlCQUFnQixrQkFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF5SDtBQUFBLE1BQ3pILHVCQUFDLFVBQUssd0JBQXFCLHNDQUFxQyx3QkFBcUIsU0FBUSxXQUFVLG1CQUFrQixxQkFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE4SDtBQUFBLFNBRmxJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHRTtBQUFBLE9BN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0ErQkE7QUFFSjtBQUFDTSxLQTNDdUJiO0FBQVcsSUFBQWE7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJDeWd1YXJkTG9nbyIsInNpemUiLCJzaG93VGV4dCIsIl9fZGF0YUNvbGxlY3Rpb25JdGVtSWQiLCJzaXplcyIsInNtIiwiaWNvbiIsInRleHQiLCJtZCIsImxnIiwieGwiLCJzIiwiYmFja2dyb3VuZCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkN5Z3VhcmRMb2dvLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDeWd1YXJkTG9nbyh7IHNpemUgPSAnbWQnLCBzaG93VGV4dCA9IHRydWUsIFwiZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWRcIjogX19kYXRhQ29sbGVjdGlvbkl0ZW1JZCB9KSB7XG4gIGNvbnN0IHNpemVzID0ge1xuICAgIHNtOiB7IGljb246IDI4LCB0ZXh0OiAndGV4dC1sZycgfSxcbiAgICBtZDogeyBpY29uOiAzNiwgdGV4dDogJ3RleHQteGwnIH0sXG4gICAgbGc6IHsgaWNvbjogNDgsIHRleHQ6ICd0ZXh0LTN4bCcgfSxcbiAgICB4bDogeyBpY29uOiA2NCwgdGV4dDogJ3RleHQtNHhsJyB9XG4gIH07XG4gIGNvbnN0IHMgPSBzaXplc1tzaXplXSB8fCBzaXplcy5tZDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2JyYW5kL0N5Z3VhcmRMb2dvOjEzOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvYnJhbmQvQ3lndWFyZExvZ286MTQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxzdmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2JyYW5kL0N5Z3VhcmRMb2dvOjE1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB3aWR0aD17cy5pY29ufSBoZWlnaHQ9e3MuaWNvbn0gdmlld0JveD1cIjAgMCA2NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxkZWZzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9icmFuZC9DeWd1YXJkTG9nbzoxNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvYnJhbmQvQ3lndWFyZExvZ286MTc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaWQ9XCJzaGllbGRHcmFkXCIgeDE9XCIxMFwiIHkxPVwiNVwiIHgyPVwiNTRcIiB5Mj1cIjU5XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgICAgIDxzdG9wIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9icmFuZC9DeWd1YXJkTG9nbzoxODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMwMGQ0ZmZcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvYnJhbmQvQ3lndWFyZExvZ286MTk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiM3YzNhZWRcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvYnJhbmQvQ3lndWFyZExvZ286MjE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaWQ9XCJzaGllbGRJbm5lclwiIHgxPVwiMTZcIiB5MT1cIjEyXCIgeDI9XCI0OFwiIHkyPVwiNTJcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICAgICAgPHN0b3AgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2JyYW5kL0N5Z3VhcmRMb2dvOjIyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiIzAwZDRmZlwiIHN0b3BPcGFjaXR5PVwiMC4yXCIgLz5cbiAgICAgICAgICAgICAgPHN0b3AgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2JyYW5kL0N5Z3VhcmRMb2dvOjIzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjN2MzYWVkXCIgc3RvcE9wYWNpdHk9XCIwLjFcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgey8qIFNoaWVsZCAqL31cbiAgICAgICAgICA8cGF0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvYnJhbmQvQ3lndWFyZExvZ286Mjc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgZD1cIk0zMiA0TDggMTZWMzJDOCA0Ni40IDE4LjQgNTkuMiAzMiA2MkM0NS42IDU5LjIgNTYgNDYuNCA1NiAzMlYxNkwzMiA0WlwiXG4gICAgICAgICAgZmlsbD1cInVybCgjc2hpZWxkSW5uZXIpXCIgc3Ryb2tlPVwidXJsKCNzaGllbGRHcmFkKVwiIHN0cm9rZVdpZHRoPVwiMi41XCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XG4gICAgICAgICAgey8qIEMgbGV0dGVyICovfVxuICAgICAgICAgIDxwYXRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9icmFuZC9DeWd1YXJkTG9nbzozMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBkPVwiTTM4IDIyQzM2LjQgMjAuOCAzNC40IDIwIDMyIDIwQzI2LjUgMjAgMjIgMjQuNSAyMiAzMFYzNEMyMiAzOS41IDI2LjUgNDQgMzIgNDRDMzQuNCA0NCAzNi40IDQzLjIgMzggNDJcIlxuICAgICAgICAgIHN0cm9rZT1cInVybCgjc2hpZWxkR3JhZClcIiBzdHJva2VXaWR0aD1cIjNcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgey8qIERvdCBhY2NlbnQgKi99XG4gICAgICAgICAgPGNpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvYnJhbmQvQ3lndWFyZExvZ286MzM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY3g9XCI0MlwiIGN5PVwiMzJcIiByPVwiMi41XCIgZmlsbD1cIiMwMGQ0ZmZcIiBvcGFjaXR5PVwiMC44XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2JyYW5kL0N5Z3VhcmRMb2dvOjM1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtZnVsbCBibHVyLWxnIG9wYWNpdHktMzBcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzAwZDRmZiAwJSwgdHJhbnNwYXJlbnQgNzAlKScgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dUZXh0ICYmXG4gICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvYnJhbmQvQ3lndWFyZExvZ286Mzk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YCR7cy50ZXh0fSBmb250LWludGVyIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGB9PlxuICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9icmFuZC9DeWd1YXJkTG9nbzo0MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0XCI+Q1k8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2JyYW5kL0N5Z3VhcmRMb2dvOjQxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZFwiPkdVQVJEPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICB9XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9icmFuZC9DeWd1YXJkTG9nby5qc3gifQ==