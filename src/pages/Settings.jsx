import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Settings.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3049f6b1"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Settings.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3049f6b1"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=3049f6b1";
import { Settings as SettingsIcon, User, Shield, Bell, Globe, Moon, LogOut, Key, Sun, ChevronRight, Database } from "/node_modules/.vite/deps/lucide-react.js?v=68d8ce9e";
import { base44 } from "/src/api/base44Client.js";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=0c595644";
import GlassCard from "/src/components/ui-custom/GlassCard.jsx";
import NeonButton from "/src/components/ui-custom/NeonButton.jsx";
import { useTheme } from "/src/lib/ThemeContext.jsx";
function IOSToggle({ enabled, onChange, "data-collection-item-id": __dataCollectionItemId }) {
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      "data-source-location": "pages/Settings:12:4",
      "data-dynamic-content": "true",
      onClick: onChange,
      className: `relative w-12 h-7 rounded-full transition-all duration-300 ${enabled ? "bg-emerald-500" : "bg-secondary border border-border"}`,
      "data-collection-item-id": __dataCollectionItemId,
      children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Settings:16:6",
          "data-dynamic-content": "true",
          className: "w-5 h-5 rounded-full bg-white shadow-md absolute top-1",
          animate: { left: enabled ? 26 : 4 },
          transition: { type: "spring", stiffness: 600, damping: 35 }
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 35,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/app/src/pages/Settings.jsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  );
}
_c = IOSToggle;
export default function Settings() {
  _s();
  const [user, setUser] = useState(null);
  const { theme, toggle: toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    realTimeProtection: true,
    emailAlerts: true,
    autoScan: false,
    trackerBlocking: true,
    adBlocking: true,
    adultFilter: true,
    dnsFiltering: true
  });
  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {
    });
  }, []);
  const toggle = (key) => setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  const settingSections = [
    {
      title: "Protection",
      icon: Shield,
      items: [
        { key: "realTimeProtection", label: "Real-time Protection", desc: "Continuously monitor for threats" },
        { key: "autoScan", label: "Auto-scan Downloads", desc: "Automatically scan downloaded files" },
        { key: "trackerBlocking", label: "Tracker Blocking", desc: "Block third-party trackers" },
        { key: "adBlocking", label: "Ad Blocking", desc: "Block ads using AdGuard filter lists" },
        { key: "adultFilter", label: "Adult Content Filter", desc: "Block adult sites via AdGuard Family DNS" },
        { key: "dnsFiltering", label: "DNS Filtering", desc: "Route through AdGuard DNS (94.140.14.14)" }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { key: "emailAlerts", label: "Email Alerts", desc: "Receive threat alerts via email" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:67:4", "data-dynamic-content": "true", className: "min-h-screen p-4 md:p-8 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "pages/Settings:68:6", "data-dynamic-content": "true", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Settings:69:8", "data-dynamic-content": "false", className: "text-2xl md:text-3xl font-bold text-foreground", children: "Settings" }, void 0, false, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:70:8", "data-dynamic-content": "false", className: "text-muted-foreground mt-1", children: "Configure your security preferences" }, void 0, false, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Settings.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Settings:74:6", "data-dynamic-content": "true", hover: false, className: "mb-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:75:8", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:76:10", "data-dynamic-content": "true", className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold shadow-lg", children: user?.full_name?.[0]?.toUpperCase() || "U" }, void 0, false, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:79:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:80:12", "data-dynamic-content": "true", className: "text-base font-semibold text-foreground", children: user?.full_name || "User" }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:81:12", "data-dynamic-content": "true", className: "text-sm text-muted-foreground", children: user?.email || "" }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 98,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Settings.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Settings.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Settings:87:6", "data-dynamic-content": "true", hover: false, className: "mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:88:8", "data-dynamic-content": "true", className: "flex items-center gap-2 mb-4", children: [
        theme === "dark" ? /* @__PURE__ */ jsxDEV(Moon, { "data-source-location": "pages/Settings:89:30", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 108,
          columnNumber: 31
        }, this) : /* @__PURE__ */ jsxDEV(Sun, { "data-source-location": "pages/Settings:89:74", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 108,
          columnNumber: 148
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Settings:90:10", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground uppercase tracking-wider", children: "Appearance" }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:92:8", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:93:10", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:94:12", "data-dynamic-content": "false", className: "text-sm font-medium text-foreground", children: "Dark Mode" }, void 0, false, {
            fileName: "/app/src/pages/Settings.jsx",
            lineNumber: 113,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:95:12", "data-dynamic-content": "false", className: "text-xs text-muted-foreground", children: "Use dark theme interface" }, void 0, false, {
            fileName: "/app/src/pages/Settings.jsx",
            lineNumber: 114,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(IOSToggle, { "data-source-location": "pages/Settings:97:10", "data-dynamic-content": "true", enabled: theme === "dark", onChange: toggleTheme }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Settings.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Settings:102:6", "data-dynamic-content": "true", hover: false, className: "mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:103:8", "data-dynamic-content": "false", className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxDEV(Key, { "data-source-location": "pages/Settings:104:10", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Settings:105:10", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground uppercase tracking-wider", children: "Security Tools" }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:107:8", "data-dynamic-content": "true", className: "space-y-1", children: [
        { to: "/breach-checker", label: "Breach Checker", desc: "Check if your email was in data breaches" },
        { to: "/privacy", label: "Privacy Center", desc: "Manage AdGuard DNS and protection modules" },
        { to: "/extension", label: "Browser Extension", desc: "Download CYGUARD Shield with AdGuard DNS" }
      ].map(
        (link, __arrIdx__) => /* @__PURE__ */ jsxDEV(
          Link,
          {
            "data-source-location": "pages/Settings:113:12",
            "data-dynamic-content": "true",
            to: link.to,
            className: "flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group",
            "data-arr-index": __arrIdx__,
            children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:115:14", "data-dynamic-content": "true", "data-arr-index": __arrIdx__, children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:116:16", "data-dynamic-content": "true", className: "text-sm font-medium text-foreground", "data-arr-index": __arrIdx__, "data-arr-field": "label", children: link.label }, void 0, false, {
                  fileName: "/app/src/pages/Settings.jsx",
                  lineNumber: 135,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:117:16", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", "data-arr-index": __arrIdx__, "data-arr-field": "desc", children: link.desc }, void 0, false, {
                  fileName: "/app/src/pages/Settings.jsx",
                  lineNumber: 136,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Settings.jsx",
                lineNumber: 134,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(ChevronRight, { "data-source-location": "pages/Settings:119:14", "data-dynamic-content": "false", className: "w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors", "data-arr-index": __arrIdx__ }, void 0, false, {
                fileName: "/app/src/pages/Settings.jsx",
                lineNumber: 138,
                columnNumber: 15
              }, this)
            ]
          },
          link.to,
          true,
          {
            fileName: "/app/src/pages/Settings.jsx",
            lineNumber: 132,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Settings.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    settingSections.map((section, __arrIdx__) => {
      const Icon = section.icon;
      return /* @__PURE__ */ jsxDEV(GlassCard, { "data-source-location": "pages/Settings:129:10", "data-dynamic-content": "true", hover: false, className: "mb-4", "data-arr-index": __arrIdx__, "data-arr-variable-name": "settingSections", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:130:12", "data-dynamic-content": "true", className: "flex items-center gap-2 mb-4", "data-arr-index": __arrIdx__, "data-arr-variable-name": "settingSections", children: [
          /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/Settings:131:14", "data-dynamic-content": "false", className: "w-4 h-4 text-primary", "data-arr-index": __arrIdx__, "data-arr-variable-name": "settingSections" }, void 0, false, {
            fileName: "/app/src/pages/Settings.jsx",
            lineNumber: 150,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Settings:132:14", "data-dynamic-content": "true", className: "text-sm font-semibold text-foreground uppercase tracking-wider", "data-arr-index": __arrIdx__, "data-arr-variable-name": "settingSections", "data-arr-field": "title", children: section.title }, void 0, false, {
            fileName: "/app/src/pages/Settings.jsx",
            lineNumber: 151,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:134:12", "data-dynamic-content": "true", className: "space-y-4", "data-arr-index": __arrIdx__, "data-arr-variable-name": "settingSections", children: section.items.map(
          (item) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:136:16", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:137:18", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:138:20", "data-dynamic-content": "true", className: "text-sm font-medium text-foreground", "data-collection-item-field": "label", "data-collection-item-id": item?.id || item?._id, children: item.label }, void 0, false, {
                fileName: "/app/src/pages/Settings.jsx",
                lineNumber: 157,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Settings:139:20", "data-dynamic-content": "true", className: "text-xs text-muted-foreground", "data-collection-item-field": "desc", "data-collection-item-id": item?.id || item?._id, children: item.desc }, void 0, false, {
                fileName: "/app/src/pages/Settings.jsx",
                lineNumber: 158,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Settings.jsx",
              lineNumber: 156,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(IOSToggle, { "data-source-location": "pages/Settings:141:18", "data-dynamic-content": "true", enabled: settings[item.key], onChange: () => toggle(item.key) }, void 0, false, {
              fileName: "/app/src/pages/Settings.jsx",
              lineNumber: 160,
              columnNumber: 19
            }, this)
          ] }, item.key, true, {
            fileName: "/app/src/pages/Settings.jsx",
            lineNumber: 155,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/Settings.jsx",
          lineNumber: 153,
          columnNumber: 13
        }, this)
      ] }, section.title, true, {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 148,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Settings:150:6", "data-dynamic-content": "true", className: "mt-4", children: /* @__PURE__ */ jsxDEV(
      NeonButton,
      {
        "data-source-location": "pages/Settings:151:8",
        "data-dynamic-content": "true",
        variant: "ghost",
        className: "text-destructive hover:text-destructive hover:bg-destructive/10",
        onClick: () => base44.auth.logout(),
        children: [
          /* @__PURE__ */ jsxDEV(LogOut, { "data-source-location": "pages/Settings:156:10", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/Settings.jsx",
            lineNumber: 175,
            columnNumber: 11
          }, this),
          "Sign Out"
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/Settings.jsx",
        lineNumber: 170,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/pages/Settings.jsx",
      lineNumber: 169,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Settings.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
_s(Settings, "I/h7fwJ5oc9c6+s/1G1G8WRmCmY=", false, function() {
  return [useTheme];
});
_c2 = Settings;
var _c, _c2;
$RefreshReg$(_c, "IOSToggle");
$RefreshReg$(_c2, "Settings");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Settings.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Settings.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQSxlQUxuRW1CLEtBQUtuQixLQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU1FO0FBQUEsUUFDRixLQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFVQTtBQUFBLFdBZnVGaUIsUUFBUWQsT0FBakc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWdCQTtBQUFBLElBRUosQ0FBQztBQUFBLElBR0QsdUJBQUMsU0FBSSx3QkFBcUIsd0JBQXVCLHdCQUFxQixRQUFPLFdBQVUsUUFDckY7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUFXLHdCQUFxQjtBQUFBLFFBQXVCLHdCQUFxQjtBQUFBLFFBQzdFLFNBQVE7QUFBQSxRQUNSLFdBQVU7QUFBQSxRQUNWLFNBQVMsTUFBTXBDLE9BQU82QixLQUFLMEIsT0FBTztBQUFBLFFBRWhDO0FBQUEsaUNBQUMsVUFBTyx3QkFBcUIseUJBQXdCLHdCQUFxQixTQUFRLFdBQVUsYUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBcUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUx2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPQSxLQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FTQTtBQUFBLE9BNUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E2RkE7QUFFSjtBQUFDekMsR0F6SXVCMUIsVUFBUTtBQUFBLFVBRVNnQixRQUFRO0FBQUE7QUFBQSxNQUZ6QmhCO0FBQVEsSUFBQXlCLElBQUEyQztBQUFBLGFBQUEzQyxJQUFBO0FBQUEsYUFBQTJDLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiU2V0dGluZ3MiLCJTZXR0aW5nc0ljb24iLCJVc2VyIiwiU2hpZWxkIiwiQmVsbCIsIkdsb2JlIiwiTW9vbiIsIkxvZ091dCIsIktleSIsIlN1biIsIkNoZXZyb25SaWdodCIsIkRhdGFiYXNlIiwiYmFzZTQ0IiwiTGluayIsIkdsYXNzQ2FyZCIsIk5lb25CdXR0b24iLCJ1c2VUaGVtZSIsIklPU1RvZ2dsZSIsImVuYWJsZWQiLCJvbkNoYW5nZSIsIl9fZGF0YUNvbGxlY3Rpb25JdGVtSWQiLCJsZWZ0IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJfYyIsIl9zIiwidXNlciIsInNldFVzZXIiLCJ0aGVtZSIsInRvZ2dsZSIsInRvZ2dsZVRoZW1lIiwic2V0dGluZ3MiLCJzZXRTZXR0aW5ncyIsInJlYWxUaW1lUHJvdGVjdGlvbiIsImVtYWlsQWxlcnRzIiwiYXV0b1NjYW4iLCJ0cmFja2VyQmxvY2tpbmciLCJhZEJsb2NraW5nIiwiYWR1bHRGaWx0ZXIiLCJkbnNGaWx0ZXJpbmciLCJhdXRoIiwibWUiLCJ0aGVuIiwiY2F0Y2giLCJrZXkiLCJwcmV2Iiwic2V0dGluZ1NlY3Rpb25zIiwidGl0bGUiLCJpY29uIiwiaXRlbXMiLCJsYWJlbCIsImRlc2MiLCJvcGFjaXR5IiwieSIsImZ1bGxfbmFtZSIsInRvVXBwZXJDYXNlIiwiZW1haWwiLCJ0byIsIm1hcCIsImxpbmsiLCJfX2FycklkeF9fIiwic2VjdGlvbiIsIkljb24iLCJpdGVtIiwiaWQiLCJfaWQiLCJsb2dvdXQiLCJfYzIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2V0dGluZ3MuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTZXR0aW5ncyBhcyBTZXR0aW5nc0ljb24sIFVzZXIsIFNoaWVsZCwgQmVsbCwgR2xvYmUsIE1vb24sIExvZ091dCwgS2V5LCBTdW4sIENoZXZyb25SaWdodCwgRGF0YWJhc2UgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSAnQC9hcGkvYmFzZTQ0Q2xpZW50JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBHbGFzc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy91aS1jdXN0b20vR2xhc3NDYXJkJztcbmltcG9ydCBOZW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvdWktY3VzdG9tL05lb25CdXR0b24nO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAL2xpYi9UaGVtZUNvbnRleHQnO1xuXG5mdW5jdGlvbiBJT1NUb2dnbGUoeyBlbmFibGVkLCBvbkNoYW5nZSwgXCJkYXRhLWNvbGxlY3Rpb24taXRlbS1pZFwiOiBfX2RhdGFDb2xsZWN0aW9uSXRlbUlkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTI6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgb25DbGljaz17b25DaGFuZ2V9XG4gICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgdy0xMiBoLTcgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke2VuYWJsZWQgPyAnYmctZW1lcmFsZC01MDAnIDogJ2JnLXNlY29uZGFyeSBib3JkZXIgYm9yZGVyLWJvcmRlcid9YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PlxuICAgICAgXG4gICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjE2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93LW1kIGFic29sdXRlIHRvcC0xXCJcbiAgICAgIGFuaW1hdGU9e3sgbGVmdDogZW5hYmxlZCA/IDI2IDogNCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiA2MDAsIGRhbXBpbmc6IDM1IH19IC8+XG4gICAgICBcbiAgICA8L2J1dHRvbj4pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyB0aGVtZSwgdG9nZ2xlOiB0b2dnbGVUaGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZSh7XG4gICAgcmVhbFRpbWVQcm90ZWN0aW9uOiB0cnVlLFxuICAgIGVtYWlsQWxlcnRzOiB0cnVlLFxuICAgIGF1dG9TY2FuOiBmYWxzZSxcbiAgICB0cmFja2VyQmxvY2tpbmc6IHRydWUsXG4gICAgYWRCbG9ja2luZzogdHJ1ZSxcbiAgICBhZHVsdEZpbHRlcjogdHJ1ZSxcbiAgICBkbnNGaWx0ZXJpbmc6IHRydWVcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBiYXNlNDQuYXV0aC5tZSgpLnRoZW4oc2V0VXNlcikuY2F0Y2goKCkgPT4ge30pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlID0gKGtleSkgPT4gc2V0U2V0dGluZ3MoKHByZXYpID0+ICh7IC4uLnByZXYsIFtrZXldOiAhcHJldltrZXldIH0pKTtcblxuICBjb25zdCBzZXR0aW5nU2VjdGlvbnMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1Byb3RlY3Rpb24nLFxuICAgIGljb246IFNoaWVsZCxcbiAgICBpdGVtczogW1xuICAgIHsga2V5OiAncmVhbFRpbWVQcm90ZWN0aW9uJywgbGFiZWw6ICdSZWFsLXRpbWUgUHJvdGVjdGlvbicsIGRlc2M6ICdDb250aW51b3VzbHkgbW9uaXRvciBmb3IgdGhyZWF0cycgfSxcbiAgICB7IGtleTogJ2F1dG9TY2FuJywgbGFiZWw6ICdBdXRvLXNjYW4gRG93bmxvYWRzJywgZGVzYzogJ0F1dG9tYXRpY2FsbHkgc2NhbiBkb3dubG9hZGVkIGZpbGVzJyB9LFxuICAgIHsga2V5OiAndHJhY2tlckJsb2NraW5nJywgbGFiZWw6ICdUcmFja2VyIEJsb2NraW5nJywgZGVzYzogJ0Jsb2NrIHRoaXJkLXBhcnR5IHRyYWNrZXJzJyB9LFxuICAgIHsga2V5OiAnYWRCbG9ja2luZycsIGxhYmVsOiAnQWQgQmxvY2tpbmcnLCBkZXNjOiAnQmxvY2sgYWRzIHVzaW5nIEFkR3VhcmQgZmlsdGVyIGxpc3RzJyB9LFxuICAgIHsga2V5OiAnYWR1bHRGaWx0ZXInLCBsYWJlbDogJ0FkdWx0IENvbnRlbnQgRmlsdGVyJywgZGVzYzogJ0Jsb2NrIGFkdWx0IHNpdGVzIHZpYSBBZEd1YXJkIEZhbWlseSBETlMnIH0sXG4gICAgeyBrZXk6ICdkbnNGaWx0ZXJpbmcnLCBsYWJlbDogJ0ROUyBGaWx0ZXJpbmcnLCBkZXNjOiAnUm91dGUgdGhyb3VnaCBBZEd1YXJkIEROUyAoOTQuMTQwLjE0LjE0KScgfV1cblxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOb3RpZmljYXRpb25zJyxcbiAgICBpY29uOiBCZWxsLFxuICAgIGl0ZW1zOiBbXG4gICAgeyBrZXk6ICdlbWFpbEFsZXJ0cycsIGxhYmVsOiAnRW1haWwgQWxlcnRzJywgZGVzYzogJ1JlY2VpdmUgdGhyZWF0IGFsZXJ0cyB2aWEgZW1haWwnIH1dXG5cbiAgfV07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczo2Nzo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtNCBtZDpwLTggbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6Njg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgPGgxIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6Njk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+U2V0dGluZ3M8L2gxPlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjcwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTFcIj5Db25maWd1cmUgeW91ciBzZWN1cml0eSBwcmVmZXJlbmNlczwvcD5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgey8qIFByb2ZpbGUgKi99XG4gICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6NzQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6NzU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjc2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeSB0by1hY2NlbnQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtYm9sZCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIHt1c2VyPy5mdWxsX25hbWU/LlswXT8udG9VcHBlckNhc2UoKSB8fCAnVSd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjc5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjgwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+e3VzZXI/LmZ1bGxfbmFtZSB8fCAnVXNlcid9PC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczo4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3VzZXI/LmVtYWlsIHx8ICcnfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dsYXNzQ2FyZD5cblxuICAgICAgey8qIEFwcGVhcmFuY2UgKi99XG4gICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6ODc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhvdmVyPXtmYWxzZX0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6ODg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTRcIj5cbiAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IDxNb29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6ODk6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnlcIiAvPiA6IDxTdW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczo4OTo3NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeVwiIC8+fVxuICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjkwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+QXBwZWFyYW5jZTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6OTI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczo5MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6OTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmRcIj5EYXJrIE1vZGU8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjk1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VXNlIGRhcmsgdGhlbWUgaW50ZXJmYWNlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJT1NUb2dnbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczo5NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGVuYWJsZWQ9e3RoZW1lID09PSAnZGFyayd9IG9uQ2hhbmdlPXt0b2dnbGVUaGVtZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dsYXNzQ2FyZD5cblxuICAgICAgey8qIFF1aWNrIGxpbmtzICovfVxuICAgICAgPEdsYXNzQ2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjEwMjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaG92ZXI9e2ZhbHNlfSBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczoxMDM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0zXCI+XG4gICAgICAgICAgPEtleSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjEwNDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTA1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+U2VjdXJpdHkgVG9vbHM8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjEwNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAge1tcbiAgICAgICAgICB7IHRvOiAnL2JyZWFjaC1jaGVja2VyJywgbGFiZWw6ICdCcmVhY2ggQ2hlY2tlcicsIGRlc2M6ICdDaGVjayBpZiB5b3VyIGVtYWlsIHdhcyBpbiBkYXRhIGJyZWFjaGVzJyB9LFxuICAgICAgICAgIHsgdG86ICcvcHJpdmFjeScsIGxhYmVsOiAnUHJpdmFjeSBDZW50ZXInLCBkZXNjOiAnTWFuYWdlIEFkR3VhcmQgRE5TIGFuZCBwcm90ZWN0aW9uIG1vZHVsZXMnIH0sXG4gICAgICAgICAgeyB0bzogJy9leHRlbnNpb24nLCBsYWJlbDogJ0Jyb3dzZXIgRXh0ZW5zaW9uJywgZGVzYzogJ0Rvd25sb2FkIENZR1VBUkQgU2hpZWxkIHdpdGggQWRHdWFyZCBETlMnIH1dLlxuICAgICAgICAgIG1hcCgobGluaywgX19hcnJJZHhfXykgPT5cbiAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjExMzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17bGluay50b30gdG89e2xpbmsudG99XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMyByb3VuZGVkLXhsIGhvdmVyOmJnLXNlY29uZGFyeS81MCB0cmFuc2l0aW9uLWNvbG9ycyBncm91cFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjExNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjExNjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1mb3JlZ3JvdW5kXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLWZpZWxkPVwibGFiZWxcIj57bGluay5sYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczoxMTc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cImRlc2NcIj57bGluay5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczoxMTk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW11dGVkLWZvcmVncm91bmQgZ3JvdXAtaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dsYXNzQ2FyZD5cblxuICAgICAgey8qIFNldHRpbmdzIFNlY3Rpb25zICovfVxuICAgICAge3NldHRpbmdTZWN0aW9ucy5tYXAoKHNlY3Rpb24sIF9fYXJySWR4X18pID0+IHtcbiAgICAgICAgY29uc3QgSWNvbiA9IHNlY3Rpb24uaWNvbjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8R2xhc3NDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTI5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtzZWN0aW9uLnRpdGxlfSBob3Zlcj17ZmFsc2V9IGNsYXNzTmFtZT1cIm1iLTRcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInNldHRpbmdTZWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjEzMDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTRcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInNldHRpbmdTZWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjEzMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeVwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwic2V0dGluZ1NlY3Rpb25zXCIgLz5cbiAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTMyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInNldHRpbmdTZWN0aW9uc1wiIGRhdGEtYXJyLWZpZWxkPVwidGl0bGVcIj57c2VjdGlvbi50aXRsZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTM0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzZXR0aW5nU2VjdGlvbnNcIj5cbiAgICAgICAgICAgICAge3NlY3Rpb24uaXRlbXMubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTM2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpdGVtLmtleX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTM3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTM4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkIHx8IGl0ZW0/Ll9pZH0+e2l0ZW0ubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjEzOToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXNjXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkIHx8IGl0ZW0/Ll9pZH0+e2l0ZW0uZGVzY308L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxJT1NUb2dnbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TZXR0aW5nczoxNDE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBlbmFibGVkPXtzZXR0aW5nc1tpdGVtLmtleV19IG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGUoaXRlbS5rZXkpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HbGFzc0NhcmQ+KTtcblxuICAgICAgfSl9XG5cbiAgICAgIHsvKiBMb2dvdXQgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTUwOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIDxOZW9uQnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU2V0dGluZ3M6MTUxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWRlc3RydWN0aXZlIGhvdmVyOnRleHQtZGVzdHJ1Y3RpdmUgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvMTBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBiYXNlNDQuYXV0aC5sb2dvdXQoKX0+XG4gICAgICAgICAgXG4gICAgICAgICAgPExvZ091dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1NldHRpbmdzOjE1NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICBTaWduIE91dFxuICAgICAgICA8L05lb25CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9TZXR0aW5ncy5qc3gifQ==