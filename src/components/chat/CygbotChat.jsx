import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/chat/CygbotChat.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/chat/CygbotChat.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=82de9d48";
import { Shield, X, Send, Loader2, Bot, User, MessageSquare } from "/node_modules/.vite/deps/lucide-react.js?v=76f08321";
import { base44 } from "/src/api/base44Client.js";
const INITIAL_MESSAGE = {
  role: "assistant",
  content: "Hello! I'm Cygbot, your AI cybersecurity assistant. I can help you with:\n\n- Identifying phishing & scam sites\n- Understanding malware threats\n- Privacy & data protection tips\n- Browser security best practices\n- Reading your scan results\n\nHow can I help you stay secure today?"
};
const SYSTEM_CONTEXT = `You are Cygbot, an expert AI cybersecurity assistant for CYGUARD — an AI-powered cybersecurity platform. 
You specialize in: phishing detection, malware analysis, privacy protection, browser security, data leaks, ransomware, 
social engineering, DNS security, threat intelligence, and safe browsing practices.
Be professional, concise, and educational. Always prioritize user safety.
If asked about non-security topics, gently redirect to cybersecurity.
Do NOT use markdown bold (**text**) formatting in your responses. Write in plain text only. Use plain dashes for lists.`;
export default function CygbotChat() {
  _s();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setLoading(true);
    const conversationHistory = updated.map((m) => `${m.role === "user" ? "User" : "Cygbot"}: ${m.content}`).join("\n");
    const response = await base44.integrations.Core.InvokeLLM({
      prompt: `${SYSTEM_CONTEXT}

Conversation so far:
${conversationHistory}

Respond as Cygbot to the latest user message. Be helpful, accurate, and security-focused.`
    });
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setLoading(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(
      motion.button,
      {
        "data-source-location": "components/chat/CygbotChat:68:6",
        "data-dynamic-content": "true",
        onClick: () => setOpen(true),
        className: `fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple shadow-lg shadow-neon-blue/30 flex items-center justify-center transition-all ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`,
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        "aria-label": "Open Cygbot",
        children: [
          /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "components/chat/CygbotChat:75:8", "data-dynamic-content": "false", className: "w-6 h-6 text-white" }, void 0, false, {
            fileName: "/app/src/components/chat/CygbotChat.jsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/chat/CygbotChat:76:8", "data-dynamic-content": "false", className: "absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-background animate-pulse" }, void 0, false, {
            fileName: "/app/src/components/chat/CygbotChat.jsx",
            lineNumber: 95,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/chat/CygbotChat.jsx",
        lineNumber: 87,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "components/chat/CygbotChat:80:6", "data-dynamic-content": "true", children: open && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/chat/CygbotChat:82:10",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 40, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 40, scale: 0.95 },
        transition: { duration: 0.2 },
        className: "fixed bottom-6 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)] h-[540px] flex flex-col glass-strong rounded-2xl border border-border/60 shadow-2xl overflow-hidden",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:90:12", "data-dynamic-content": "true", className: "flex items-center justify-between px-4 py-3 border-b border-border/50 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:91:14", "data-dynamic-content": "false", className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:92:16", "data-dynamic-content": "false", className: "w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "components/chat/CygbotChat:93:18", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 112,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 111,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:95:16", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/chat/CygbotChat:96:18", "data-dynamic-content": "false", className: "text-sm font-semibold text-foreground", children: "Cygbot" }, void 0, false, {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 115,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/chat/CygbotChat:97:18", "data-dynamic-content": "false", className: "text-xs text-emerald-400 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/chat/CygbotChat:98:20", "data-dynamic-content": "false", className: "w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" }, void 0, false, {
                    fileName: "/app/src/components/chat/CygbotChat.jsx",
                    lineNumber: 117,
                    columnNumber: 21
                  }, this),
                  "Cybersecurity AI"
                ] }, void 0, true, {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 116,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 114,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/chat/CygbotChat.jsx",
              lineNumber: 110,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "components/chat/CygbotChat:103:14",
                "data-dynamic-content": "true",
                onClick: () => setOpen(false),
                className: "p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors",
                children: /* @__PURE__ */ jsxDEV(X, { "data-source-location": "components/chat/CygbotChat:107:16", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 126,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 122,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/chat/CygbotChat.jsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:112:12", "data-dynamic-content": "true", className: "flex-1 overflow-y-auto px-4 py-3 space-y-3", children: [
            messages.map(
              (msg, i) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:114:16", "data-dynamic-content": "true", className: `flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: [
                msg.role === "assistant" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:116:20", "data-dynamic-content": "false", className: "w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "components/chat/CygbotChat:117:22", "data-dynamic-content": "false", className: "w-3 h-3 text-primary" }, void 0, false, {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 136,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 135,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    "data-source-location": "components/chat/CygbotChat:120:18",
                    "data-dynamic-content": "true",
                    className: `max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === "user" ? "bg-primary/20 text-foreground rounded-br-sm" : "bg-secondary/60 text-foreground rounded-bl-sm"}`,
                    "data-collection-item-field": "content",
                    "data-collection-item-id": msg?.id || msg?._id,
                    children: msg.content
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/chat/CygbotChat.jsx",
                    lineNumber: 139,
                    columnNumber: 19
                  },
                  this
                ),
                msg.role === "user" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:130:20", "data-dynamic-content": "false", className: "w-6 h-6 rounded-md bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxDEV(User, { "data-source-location": "components/chat/CygbotChat:131:22", "data-dynamic-content": "false", className: "w-3 h-3 text-muted-foreground" }, void 0, false, {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 150,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 149,
                  columnNumber: 15
                }, this)
              ] }, i, true, {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 133,
                columnNumber: 13
              }, this)
            ),
            loading && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:137:16", "data-dynamic-content": "false", className: "flex gap-2 justify-start", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:138:18", "data-dynamic-content": "false", className: "w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Shield, { "data-source-location": "components/chat/CygbotChat:139:20", "data-dynamic-content": "false", className: "w-3 h-3 text-primary" }, void 0, false, {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 158,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 157,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:141:18", "data-dynamic-content": "false", className: "px-3 py-2 rounded-xl bg-secondary/60 rounded-bl-sm", children: /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "components/chat/CygbotChat:142:20", "data-dynamic-content": "false", className: "w-4 h-4 text-primary animate-spin" }, void 0, false, {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 161,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/src/components/chat/CygbotChat.jsx",
                lineNumber: 160,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/chat/CygbotChat.jsx",
              lineNumber: 156,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:146:14", "data-dynamic-content": "true", ref: bottomRef }, void 0, false, {
              fileName: "/app/src/components/chat/CygbotChat.jsx",
              lineNumber: 165,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/chat/CygbotChat.jsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:150:12", "data-dynamic-content": "true", className: "px-3 py-3 border-t border-border/50", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/chat/CygbotChat:151:14", "data-dynamic-content": "true", className: "flex items-end gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  "data-source-location": "components/chat/CygbotChat:152:16",
                  "data-dynamic-content": "true",
                  ref: inputRef,
                  value: input,
                  onChange: (e) => setInput(e.target.value),
                  onKeyDown: handleKeyDown,
                  placeholder: "Ask Cygbot about cyber threats...",
                  rows: 1,
                  className: "flex-1 resize-none bg-secondary/50 border border-border text-foreground text-sm rounded-xl px-3 py-2.5 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 max-h-24 overflow-y-auto",
                  style: { minHeight: "40px" }
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 171,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  "data-source-location": "components/chat/CygbotChat:162:16",
                  "data-dynamic-content": "true",
                  onClick: sendMessage,
                  disabled: !input.trim() || loading,
                  className: "w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-opacity hover:opacity-90",
                  children: /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "components/chat/CygbotChat:167:18", "data-dynamic-content": "false", className: "w-4 h-4 text-white" }, void 0, false, {
                    fileName: "/app/src/components/chat/CygbotChat.jsx",
                    lineNumber: 186,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/chat/CygbotChat.jsx",
                  lineNumber: 181,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/chat/CygbotChat.jsx",
              lineNumber: 170,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/chat/CygbotChat:170:14", "data-dynamic-content": "false", className: "text-xs text-muted-foreground text-center mt-2", children: "Shift+Enter for new line · Enter to send" }, void 0, false, {
              fileName: "/app/src/components/chat/CygbotChat.jsx",
              lineNumber: 189,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/chat/CygbotChat.jsx",
            lineNumber: 169,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/chat/CygbotChat.jsx",
        lineNumber: 101,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/components/chat/CygbotChat.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/chat/CygbotChat.jsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
_s(CygbotChat, "PYBdXDZUsSw4ETspZyqF8ySVuuM=");
_c = CygbotChat;
var _c;
$RefreshReg$(_c, "CygbotChat");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/chat/CygbotChat.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/chat/CygbotChat.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFrQkE7QUFBQSxZQUNBLHVCQUFDLE9BQUUsd0JBQXFCLHFDQUFvQyx3QkFBcUIsU0FBUSxXQUFVLGtEQUFpRCx3REFBcEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBNEw7QUFBQSxlQXBCOUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFxQkE7QUFBQTtBQUFBO0FBQUEsTUF6Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMEZFLEtBNUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E4RkE7QUFBQSxPQTVHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNkdBO0FBRUo7QUFBQ1AsR0EvSnVCRCxZQUFVO0FBQUEsS0FBVkE7QUFBVSxJQUFBZ0Q7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIlNoaWVsZCIsIlgiLCJTZW5kIiwiTG9hZGVyMiIsIkJvdCIsIlVzZXIiLCJNZXNzYWdlU3F1YXJlIiwiYmFzZTQ0IiwiSU5JVElBTF9NRVNTQUdFIiwicm9sZSIsImNvbnRlbnQiLCJTWVNURU1fQ09OVEVYVCIsIkN5Z2JvdENoYXQiLCJfcyIsIm9wZW4iLCJzZXRPcGVuIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImlucHV0Iiwic2V0SW5wdXQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImJvdHRvbVJlZiIsImlucHV0UmVmIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJmb2N1cyIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJzZW5kTWVzc2FnZSIsInRleHQiLCJ0cmltIiwidXNlck1zZyIsInVwZGF0ZWQiLCJjb252ZXJzYXRpb25IaXN0b3J5IiwibWFwIiwibSIsImpvaW4iLCJyZXNwb25zZSIsImludGVncmF0aW9ucyIsIkNvcmUiLCJJbnZva2VMTE0iLCJwcm9tcHQiLCJwcmV2IiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0Iiwic2NhbGUiLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwibXNnIiwiaSIsImlkIiwiX2lkIiwidGFyZ2V0IiwidmFsdWUiLCJtaW5IZWlnaHQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDeWdib3RDaGF0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFNoaWVsZCwgWCwgU2VuZCwgTG9hZGVyMiwgQm90LCBVc2VyLCBNZXNzYWdlU3F1YXJlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gJ0AvYXBpL2Jhc2U0NENsaWVudCc7XG5cbmNvbnN0IElOSVRJQUxfTUVTU0FHRSA9IHtcbiAgcm9sZTogJ2Fzc2lzdGFudCcsXG4gIGNvbnRlbnQ6IFwiSGVsbG8hIEknbSBDeWdib3QsIHlvdXIgQUkgY3liZXJzZWN1cml0eSBhc3Npc3RhbnQuIEkgY2FuIGhlbHAgeW91IHdpdGg6XFxuXFxuLSBJZGVudGlmeWluZyBwaGlzaGluZyAmIHNjYW0gc2l0ZXNcXG4tIFVuZGVyc3RhbmRpbmcgbWFsd2FyZSB0aHJlYXRzXFxuLSBQcml2YWN5ICYgZGF0YSBwcm90ZWN0aW9uIHRpcHNcXG4tIEJyb3dzZXIgc2VjdXJpdHkgYmVzdCBwcmFjdGljZXNcXG4tIFJlYWRpbmcgeW91ciBzY2FuIHJlc3VsdHNcXG5cXG5Ib3cgY2FuIEkgaGVscCB5b3Ugc3RheSBzZWN1cmUgdG9kYXk/XCJcbn07XG5cbmNvbnN0IFNZU1RFTV9DT05URVhUID0gYFlvdSBhcmUgQ3lnYm90LCBhbiBleHBlcnQgQUkgY3liZXJzZWN1cml0eSBhc3Npc3RhbnQgZm9yIENZR1VBUkQg4oCUIGFuIEFJLXBvd2VyZWQgY3liZXJzZWN1cml0eSBwbGF0Zm9ybS4gXG5Zb3Ugc3BlY2lhbGl6ZSBpbjogcGhpc2hpbmcgZGV0ZWN0aW9uLCBtYWx3YXJlIGFuYWx5c2lzLCBwcml2YWN5IHByb3RlY3Rpb24sIGJyb3dzZXIgc2VjdXJpdHksIGRhdGEgbGVha3MsIHJhbnNvbXdhcmUsIFxuc29jaWFsIGVuZ2luZWVyaW5nLCBETlMgc2VjdXJpdHksIHRocmVhdCBpbnRlbGxpZ2VuY2UsIGFuZCBzYWZlIGJyb3dzaW5nIHByYWN0aWNlcy5cbkJlIHByb2Zlc3Npb25hbCwgY29uY2lzZSwgYW5kIGVkdWNhdGlvbmFsLiBBbHdheXMgcHJpb3JpdGl6ZSB1c2VyIHNhZmV0eS5cbklmIGFza2VkIGFib3V0IG5vbi1zZWN1cml0eSB0b3BpY3MsIGdlbnRseSByZWRpcmVjdCB0byBjeWJlcnNlY3VyaXR5LlxuRG8gTk9UIHVzZSBtYXJrZG93biBib2xkICgqKnRleHQqKikgZm9ybWF0dGluZyBpbiB5b3VyIHJlc3BvbnNlcy4gV3JpdGUgaW4gcGxhaW4gdGV4dCBvbmx5LiBVc2UgcGxhaW4gZGFzaGVzIGZvciBsaXN0cy5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDeWdib3RDaGF0KCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW0lOSVRJQUxfTUVTU0FHRV0pO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBib3R0b21SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKSwgMTAwKTtcbiAgICB9XG4gIH0sIFtvcGVuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBib3R0b21SZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH0sIFttZXNzYWdlcywgbG9hZGluZ10pO1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBpbnB1dC50cmltKCk7XG4gICAgaWYgKCF0ZXh0IHx8IGxvYWRpbmcpIHJldHVybjtcbiAgICBzZXRJbnB1dCgnJyk7XG5cbiAgICBjb25zdCB1c2VyTXNnID0geyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHRleHQgfTtcbiAgICBjb25zdCB1cGRhdGVkID0gWy4uLm1lc3NhZ2VzLCB1c2VyTXNnXTtcbiAgICBzZXRNZXNzYWdlcyh1cGRhdGVkKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgY29udmVyc2F0aW9uSGlzdG9yeSA9IHVwZGF0ZWQuXG4gICAgbWFwKChtKSA9PiBgJHttLnJvbGUgPT09ICd1c2VyJyA/ICdVc2VyJyA6ICdDeWdib3QnfTogJHttLmNvbnRlbnR9YCkuXG4gICAgam9pbignXFxuJyk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgcHJvbXB0OiBgJHtTWVNURU1fQ09OVEVYVH1cXG5cXG5Db252ZXJzYXRpb24gc28gZmFyOlxcbiR7Y29udmVyc2F0aW9uSGlzdG9yeX1cXG5cXG5SZXNwb25kIGFzIEN5Z2JvdCB0byB0aGUgbGF0ZXN0IHVzZXIgbWVzc2FnZS4gQmUgaGVscGZ1bCwgYWNjdXJhdGUsIGFuZCBzZWN1cml0eS1mb2N1c2VkLmBcbiAgICB9KTtcblxuICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgeyByb2xlOiAnYXNzaXN0YW50JywgY29udGVudDogcmVzcG9uc2UgfV0pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2VuZE1lc3NhZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEZsb2F0aW5nIEJ1dHRvbiAqL31cbiAgICAgIDxtb3Rpb24uYnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6Njg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgYm90dG9tLTYgcmlnaHQtNiB6LTUwIHctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1uZW9uLWJsdWUgdG8tbmVvbi1wdXJwbGUgc2hhZG93LWxnIHNoYWRvdy1uZW9uLWJsdWUvMzAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgJHtvcGVuID8gJ29wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lJyA6ICdvcGFjaXR5LTEwMCd9YH1cbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIEN5Z2JvdFwiPlxuICAgICAgICBcbiAgICAgICAgPFNoaWVsZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0Ojc1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdDo3Njo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMSAtcmlnaHQtMSB3LTQgaC00IGJnLWVtZXJhbGQtNDAwIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItYmFja2dyb3VuZCBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgIDwvbW90aW9uLmJ1dHRvbj5cblxuICAgICAgey8qIENoYXQgUGFuZWwgKi99XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6ODA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICB7b3BlbiAmJlxuICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjgyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA0MCwgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwLCBzY2FsZTogMSB9fVxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IDQwLCBzY2FsZTogMC45NSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTYgcmlnaHQtNiB6LTUwIHctWzM3MHB4XSBtYXgtdy1bY2FsYygxMDB2dy0ycmVtKV0gaC1bNTQwcHhdIGZsZXggZmxleC1jb2wgZ2xhc3Mtc3Ryb25nIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYm9yZGVyLzYwIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjkwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHktMyBib3JkZXItYiBib3JkZXItYm9yZGVyLzUwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1uZW9uLWJsdWUvMTAgdG8tbmVvbi1wdXJwbGUvMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjkxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6OTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWxnIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tbmVvbi1ibHVlLzMwIHRvLW5lb24tcHVycGxlLzMwIGJvcmRlciBib3JkZXItcHJpbWFyeS8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPFNoaWVsZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjkzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6OTU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0Ojk2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5DeWdib3Q8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0Ojk3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1lbWVyYWxkLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0Ojk4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTQwMCBpbmxpbmUtYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICBDeWJlcnNlY3VyaXR5IEFJXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6MTAzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgcm91bmRlZC1sZyB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS81MCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8WCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjEwNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE1lc3NhZ2VzICovfVxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjExMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcHgtNCBweS0zIHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGkpID0+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6MTE0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9e2BmbGV4IGdhcC0yICR7bXNnLnJvbGUgPT09ICd1c2VyJyA/ICdqdXN0aWZ5LWVuZCcgOiAnanVzdGlmeS1zdGFydCd9YH0+XG4gICAgICAgICAgICAgICAgICB7bXNnLnJvbGUgPT09ICdhc3Npc3RhbnQnICYmXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdDoxMTY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiByb3VuZGVkLW1kIGJnLXByaW1hcnkvMTAgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNoaWVsZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjExNzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6MTIwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWF4LXctWzgwJV0gcHgtMyBweS0yIHJvdW5kZWQteGwgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWQgd2hpdGVzcGFjZS1wcmUtd3JhcCAke1xuICAgICAgICAgICAgICBtc2cucm9sZSA9PT0gJ3VzZXInID9cbiAgICAgICAgICAgICAgJ2JnLXByaW1hcnkvMjAgdGV4dC1mb3JlZ3JvdW5kIHJvdW5kZWQtYnItc20nIDpcbiAgICAgICAgICAgICAgJ2JnLXNlY29uZGFyeS82MCB0ZXh0LWZvcmVncm91bmQgcm91bmRlZC1ibC1zbSd9YFxuICAgICAgICAgICAgICB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY29udGVudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXttc2c/LmlkIHx8IG1zZz8uX2lkfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge21zZy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7bXNnLnJvbGUgPT09ICd1c2VyJyAmJlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6MTMwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTYgcm91bmRlZC1tZCBiZy1zZWNvbmRhcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VXNlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjEzMToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7bG9hZGluZyAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjEzNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdDoxMzg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiByb3VuZGVkLW1kIGJnLXByaW1hcnkvMTAgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNoaWVsZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjEzOToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdDoxNDE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicHgtMyBweS0yIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5LzYwIHJvdW5kZWQtYmwtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlcjIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdDoxNDI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnkgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9jaGF0L0N5Z2JvdENoYXQ6MTQ2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcmVmPXtib3R0b21SZWZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIElucHV0ICovfVxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjE1MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB4LTMgcHktMyBib3JkZXItdCBib3JkZXItYm9yZGVyLzUwXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdDoxNTE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjE1MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc2sgQ3lnYm90IGFib3V0IGN5YmVyIHRocmVhdHMuLi5cIlxuICAgICAgICAgICAgICByb3dzPXsxfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcmVzaXplLW5vbmUgYmctc2Vjb25kYXJ5LzUwIGJvcmRlciBib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCB0ZXh0LXNtIHJvdW5kZWQteGwgcHgtMyBweS0yLjUgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5LzQwIG1heC1oLTI0IG92ZXJmbG93LXktYXV0b1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogJzQwcHgnIH19IC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdDoxNjI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpbnB1dC50cmltKCkgfHwgbG9hZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1uZW9uLWJsdWUgdG8tbmVvbi1wdXJwbGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCBkaXNhYmxlZDpvcGFjaXR5LTQwIHRyYW5zaXRpb24tb3BhY2l0eSBob3ZlcjpvcGFjaXR5LTkwXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8U2VuZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvY2hhdC9DeWdib3RDaGF0OjE2NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdDoxNzA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1jZW50ZXIgbXQtMlwiPlNoaWZ0K0VudGVyIGZvciBuZXcgbGluZSDCtyBFbnRlciB0byBzZW5kPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8Lz4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2NoYXQvQ3lnYm90Q2hhdC5qc3gifQ==