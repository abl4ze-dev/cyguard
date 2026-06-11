import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/ThreatChart.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ef8b20f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/ThreatChart.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=ef8b20f3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "/node_modules/.vite/deps/recharts.js?v=ef8b20f3";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
const data = [
  { name: "Mon", threats: 12, scans: 45 },
  { name: "Tue", threats: 8, scans: 52 },
  { name: "Wed", threats: 15, scans: 38 },
  { name: "Thu", threats: 5, scans: 61 },
  { name: "Fri", threats: 22, scans: 47 },
  { name: "Sat", threats: 9, scans: 33 },
  { name: "Sun", threats: 3, scans: 28 }
];
const CustomTooltip = ({ active, payload, label, id }) => {
  if (active && payload && payload.length) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:18:6", "data-dynamic-content": "true", className: "glass-strong rounded-xl px-4 py-3 border border-border", "data-collection-id": "payload", children: [
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ThreatChart:19:8", "data-dynamic-content": "true", className: "text-xs font-medium text-foreground mb-1", "data-collection-item-field": "label", "data-collection-item-id": id, children: label }, void 0, false, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      payload.map(
        (p) => /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ThreatChart:21:10", "data-dynamic-content": "true", className: "text-xs", style: { color: p.color }, "data-collection-item-field": "name", "data-collection-item-id": p?.id || p?._id, children: [
          p.name,
          ": ",
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/ThreatChart:22:22", "data-dynamic-content": "true", className: "font-mono font-bold", "data-collection-item-field": "value", "data-collection-item-id": p?.id || p?._id, children: p.value }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 41,
            columnNumber: 23
          }, this)
        ] }, p.name, true, {
          fileName: "/app/src/components/dashboard/ThreatChart.jsx",
          lineNumber: 40,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/ThreatChart.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this);
  }
  return null;
};
_c = CustomTooltip;
export default function ThreatChart() {
  return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "components/dashboard/ThreatChart:33:4", "data-dynamic-content": "true", hover: false, className: "col-span-full lg:col-span-2", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:34:6", "data-dynamic-content": "false", className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:35:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/ThreatChart:36:10", "data-dynamic-content": "false", className: "text-lg font-semibold text-foreground", children: "Threat Analytics" }, void 0, false, {
          fileName: "/app/src/components/dashboard/ThreatChart.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ThreatChart:37:10", "data-dynamic-content": "false", className: "text-sm text-muted-foreground", children: "Weekly scan activity" }, void 0, false, {
          fileName: "/app/src/components/dashboard/ThreatChart.jsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:39:8", "data-dynamic-content": "false", className: "flex items-center gap-4 text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:40:10", "data-dynamic-content": "false", className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:41:12", "data-dynamic-content": "false", className: "w-2 h-2 rounded-full bg-neon-blue" }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/ThreatChart:42:12", "data-dynamic-content": "false", className: "text-muted-foreground", children: "Scans" }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/ThreatChart.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:44:10", "data-dynamic-content": "false", className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:45:12", "data-dynamic-content": "false", className: "w-2 h-2 rounded-full bg-neon-purple" }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/ThreatChart:46:12", "data-dynamic-content": "false", className: "text-muted-foreground", children: "Threats" }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/ThreatChart.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/ThreatChart.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ThreatChart:50:6", "data-dynamic-content": "true", className: "h-64", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "components/dashboard/ThreatChart:51:8", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(AreaChart, { "data-source-location": "components/dashboard/ThreatChart:52:10", "data-dynamic-content": "true", data, children: [
      /* @__PURE__ */ jsxDEV("defs", { "data-source-location": "components/dashboard/ThreatChart:53:12", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("linearGradient", { "data-source-location": "components/dashboard/ThreatChart:54:14", "data-dynamic-content": "false", id: "scanGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/dashboard/ThreatChart:55:16", "data-dynamic-content": "false", offset: "5%", stopColor: "#00d4ff", stopOpacity: 0.3 }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/dashboard/ThreatChart:56:16", "data-dynamic-content": "false", offset: "95%", stopColor: "#00d4ff", stopOpacity: 0 }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 75,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/ThreatChart.jsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("linearGradient", { "data-source-location": "components/dashboard/ThreatChart:58:14", "data-dynamic-content": "false", id: "threatGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/dashboard/ThreatChart:59:16", "data-dynamic-content": "false", offset: "5%", stopColor: "#7c3aed", stopOpacity: 0.3 }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/dashboard/ThreatChart:60:16", "data-dynamic-content": "false", offset: "95%", stopColor: "#7c3aed", stopOpacity: 0 }, void 0, false, {
            fileName: "/app/src/components/dashboard/ThreatChart.jsx",
            lineNumber: 79,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/ThreatChart.jsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "components/dashboard/ThreatChart:63:12", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "hsl(222 30% 16%)" }, void 0, false, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "components/dashboard/ThreatChart:64:12", "data-dynamic-content": "false", dataKey: "name", stroke: "hsl(215 20% 45%)", fontSize: 12, tickLine: false, axisLine: false }, void 0, false, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 83,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "components/dashboard/ThreatChart:65:12", "data-dynamic-content": "false", stroke: "hsl(215 20% 45%)", fontSize: 12, tickLine: false, axisLine: false }, void 0, false, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Tooltip, { "data-source-location": "components/dashboard/ThreatChart:66:12", "data-dynamic-content": "true", content: /* @__PURE__ */ jsxDEV(CustomTooltip, { "data-source-location": "components/dashboard/ThreatChart:66:30", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 85,
        columnNumber: 121
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Area, { "data-source-location": "components/dashboard/ThreatChart:67:12", "data-dynamic-content": "false", type: "monotone", dataKey: "scans", stroke: "#00d4ff", fill: "url(#scanGrad)", strokeWidth: 2 }, void 0, false, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Area, { "data-source-location": "components/dashboard/ThreatChart:68:12", "data-dynamic-content": "false", type: "monotone", dataKey: "threats", stroke: "#7c3aed", fill: "url(#threatGrad)", strokeWidth: 2 }, void 0, false, {
        fileName: "/app/src/components/dashboard/ThreatChart.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/ThreatChart.jsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/ThreatChart.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/ThreatChart.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/ThreatChart.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
_c2 = ThreatChart;
var _c, _c2;
$RefreshReg$(_c, "CustomTooltip");
$RefreshReg$(_c2, "ThreatChart");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/ThreatChart.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/ThreatChart.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LHdCQUFxQixRQUFPLFNBQVMsdUJBQUMsaUJBQWMsd0JBQXFCLDBDQUF5Qyx3QkFBcUIsV0FBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF5RyxLQUFyTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXlOO0FBQUEsTUFDek4sdUJBQUMsUUFBSyx3QkFBcUIsMENBQXlDLHdCQUFxQixTQUFRLE1BQUssWUFBVyxTQUFRLFNBQVEsUUFBTyxXQUFVLE1BQUssa0JBQWlCLGFBQWEsS0FBckw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF1TDtBQUFBLE1BQ3ZMLHVCQUFDLFFBQUssd0JBQXFCLDBDQUF5Qyx3QkFBcUIsU0FBUSxNQUFLLFlBQVcsU0FBUSxXQUFVLFFBQU8sV0FBVSxNQUFLLG9CQUFtQixhQUFhLEtBQXpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMkw7QUFBQSxTQWhCN0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWlCQSxLQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBbUJBLEtBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FxQkE7QUFBQSxPQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBdUNBO0FBRUo7QUFBQ0MsTUEzQ3VCRDtBQUFXLElBQUFELElBQUFFO0FBQUEsYUFBQUYsSUFBQTtBQUFBLGFBQUFFLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkFyZWFDaGFydCIsIkFyZWEiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiR2xhc3NDYXJkIiwiZGF0YSIsIm5hbWUiLCJ0aHJlYXRzIiwic2NhbnMiLCJDdXN0b21Ub29sdGlwIiwiYWN0aXZlIiwicGF5bG9hZCIsImxhYmVsIiwiaWQiLCJsZW5ndGgiLCJtYXAiLCJwIiwiY29sb3IiLCJfaWQiLCJ2YWx1ZSIsIl9jIiwiVGhyZWF0Q2hhcnQiLCJfYzIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGhyZWF0Q2hhcnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcmVhQ2hhcnQsIEFyZWEsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCBHbGFzc0NhcmQgZnJvbSAnLi4vdWktY3VzdG9tL0dsYXNzQ2FyZCc7XG5cbmNvbnN0IGRhdGEgPSBbXG57IG5hbWU6ICdNb24nLCB0aHJlYXRzOiAxMiwgc2NhbnM6IDQ1IH0sXG57IG5hbWU6ICdUdWUnLCB0aHJlYXRzOiA4LCBzY2FuczogNTIgfSxcbnsgbmFtZTogJ1dlZCcsIHRocmVhdHM6IDE1LCBzY2FuczogMzggfSxcbnsgbmFtZTogJ1RodScsIHRocmVhdHM6IDUsIHNjYW5zOiA2MSB9LFxueyBuYW1lOiAnRnJpJywgdGhyZWF0czogMjIsIHNjYW5zOiA0NyB9LFxueyBuYW1lOiAnU2F0JywgdGhyZWF0czogOSwgc2NhbnM6IDMzIH0sXG57IG5hbWU6ICdTdW4nLCB0aHJlYXRzOiAzLCBzY2FuczogMjggfV07XG5cblxuY29uc3QgQ3VzdG9tVG9vbHRpcCA9ICh7IGFjdGl2ZSwgcGF5bG9hZCwgbGFiZWwsIGlkIH0pID0+IHtcbiAgaWYgKGFjdGl2ZSAmJiBwYXlsb2FkICYmIHBheWxvYWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydDoxODo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ2xhc3Mtc3Ryb25nIHJvdW5kZWQteGwgcHgtNCBweS0zIGJvcmRlciBib3JkZXItYm9yZGVyXCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwicGF5bG9hZFwiPlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjE5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZm9yZWdyb3VuZCBtYi0xXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpZH0+e2xhYmVsfTwvcD5cbiAgICAgICAge3BheWxvYWQubWFwKChwKSA9PlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjIxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtwLm5hbWV9IGNsYXNzTmFtZT1cInRleHQteHNcIiBzdHlsZT17eyBjb2xvcjogcC5jb2xvciB9fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cD8uaWQgfHwgcD8uX2lkfT5cbiAgICAgICAgICAgIHtwLm5hbWV9OiA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjIyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidmFsdWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cD8uaWQgfHwgcD8uX2lkfT57cC52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+KTtcblxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhyZWF0Q2hhcnQoKSB7XG4gIHJldHVybiAoXG4gICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjMzOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgbGc6Y29sLXNwYW4tMlwiPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjM0OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjM1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6MzY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZFwiPlRocmVhdCBBbmFseXRpY3M8L2gzPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6Mzc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5XZWVrbHkgc2NhbiBhY3Rpdml0eTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydDozOTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHRleHQteHNcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6NDA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjQxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMiBoLTIgcm91bmRlZC1mdWxsIGJnLW5lb24tYmx1ZVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjQyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlNjYW5zPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydDo0NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6NDU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctbmVvbi1wdXJwbGVcIiAvPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydDo0NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5UaHJlYXRzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjUwOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJoLTY0XCI+XG4gICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6NTE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICA8QXJlYUNoYXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6NTI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhPXtkYXRhfT5cbiAgICAgICAgICAgIDxkZWZzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6NTM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjU0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGlkPVwic2NhbkdyYWRcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj5cbiAgICAgICAgICAgICAgICA8c3RvcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjU1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIG9mZnNldD1cIjUlXCIgc3RvcENvbG9yPVwiIzAwZDRmZlwiIHN0b3BPcGFjaXR5PXswLjN9IC8+XG4gICAgICAgICAgICAgICAgPHN0b3AgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydDo1NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBvZmZzZXQ9XCI5NSVcIiBzdG9wQ29sb3I9XCIjMDBkNGZmXCIgc3RvcE9wYWNpdHk9ezB9IC8+XG4gICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjU4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGlkPVwidGhyZWF0R3JhZFwiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMFwiIHkyPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxzdG9wIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6NTk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgb2Zmc2V0PVwiNSVcIiBzdG9wQ29sb3I9XCIjN2MzYWVkXCIgc3RvcE9wYWNpdHk9ezAuM30gLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjYwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIG9mZnNldD1cIjk1JVwiIHN0b3BDb2xvcj1cIiM3YzNhZWRcIiBzdG9wT3BhY2l0eT17MH0gLz5cbiAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6NjM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiaHNsKDIyMiAzMCUgMTYlKVwiIC8+XG4gICAgICAgICAgICA8WEF4aXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydDo2NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBkYXRhS2V5PVwibmFtZVwiIHN0cm9rZT1cImhzbCgyMTUgMjAlIDQ1JSlcIiBmb250U2l6ZT17MTJ9IHRpY2tMaW5lPXtmYWxzZX0gYXhpc0xpbmU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPFlBeGlzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6NjU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc3Ryb2tlPVwiaHNsKDIxNSAyMCUgNDUlKVwiIGZvbnRTaXplPXsxMn0gdGlja0xpbmU9e2ZhbHNlfSBheGlzTGluZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8VG9vbHRpcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1RocmVhdENoYXJ0OjY2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY29udGVudD17PEN1c3RvbVRvb2x0aXAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydDo2NjozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn0gLz5cbiAgICAgICAgICAgIDxBcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvVGhyZWF0Q2hhcnQ6Njc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInNjYW5zXCIgc3Ryb2tlPVwiIzAwZDRmZlwiIGZpbGw9XCJ1cmwoI3NjYW5HcmFkKVwiIHN0cm9rZVdpZHRoPXsyfSAvPlxuICAgICAgICAgICAgPEFyZWEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydDo2ODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwidGhyZWF0c1wiIHN0cm9rZT1cIiM3YzNhZWRcIiBmaWxsPVwidXJsKCN0aHJlYXRHcmFkKVwiIHN0cm9rZVdpZHRoPXsyfSAvPlxuICAgICAgICAgIDwvQXJlYUNoYXJ0PlxuICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0dsYXNzQ2FyZD4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9UaHJlYXRDaGFydC5qc3gifQ==