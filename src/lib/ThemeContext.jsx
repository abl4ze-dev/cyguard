import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/lib/ThemeContext.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=82de9d48"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/lib/ThemeContext.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const createContext = __vite__cjsImport3_react["createContext"]; const useContext = __vite__cjsImport3_react["useContext"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  _s();
  const [theme, setTheme] = useState(() => localStorage.getItem("cg_theme") || "dark");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
    localStorage.setItem("cg_theme", theme);
  }, [theme]);
  const toggle = () => setTheme((t) => t === "dark" ? "light" : "dark");
  return /* @__PURE__ */ jsxDEV(ThemeContext.Provider, { "data-source-location": "ThemeContext:23:4", "data-dynamic-content": "true", value: { theme, toggle }, children }, void 0, false, {
    fileName: "/app/src/lib/ThemeContext.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
_s(ThemeProvider, "15R0hiK08Y8PW7KgUVXklBqA4eA=");
_c = ThemeProvider;
export const useTheme = () => {
  _s2();
  return useContext(ThemeContext);
};
_s2(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
$RefreshReg$(_c, "ThemeProvider");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/lib/ThemeContext.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/lib/ThemeContext.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0JJOzs7Ozs7Ozs7Ozs7Ozs7OztBQXRCSixPQUFPQSxTQUFTQyxlQUFlQyxZQUFZQyxXQUFXQyxnQkFBZ0I7QUFFdEUsTUFBTUMsZUFBZUosY0FBYztBQUU1QixnQkFBU0ssY0FBYyxFQUFFQyxTQUFTLEdBQUc7QUFBQUMsS0FBQTtBQUMxQyxRQUFNLENBQUNDLE9BQU9DLFFBQVEsSUFBSU4sU0FBUyxNQUFNTyxhQUFhQyxRQUFRLFVBQVUsS0FBSyxNQUFNO0FBRW5GVCxZQUFVLE1BQU07QUFDZCxVQUFNVSxPQUFPQyxTQUFTQztBQUN0QixRQUFJTixVQUFVLFNBQVM7QUFDckJJLFdBQUtHLFVBQVVDLE9BQU8sTUFBTTtBQUM1QkosV0FBS0csVUFBVUUsSUFBSSxPQUFPO0FBQUEsSUFDNUIsT0FBTztBQUNMTCxXQUFLRyxVQUFVQyxPQUFPLE9BQU87QUFDN0JKLFdBQUtHLFVBQVVFLElBQUksTUFBTTtBQUFBLElBQzNCO0FBQ0FQLGlCQUFhUSxRQUFRLFlBQVlWLEtBQUs7QUFBQSxFQUN4QyxHQUFHLENBQUNBLEtBQUssQ0FBQztBQUVWLFFBQU1XLFNBQVNBLE1BQU1WLFNBQVMsQ0FBQ1csTUFBTUEsTUFBTSxTQUFTLFVBQVUsTUFBTTtBQUVwRSxTQUNFLHVCQUFDLGFBQWEsVUFBYixFQUFzQix3QkFBcUIscUJBQW9CLHdCQUFxQixRQUFPLE9BQU8sRUFBRVosT0FBT1csT0FBTyxHQUNoSGIsWUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFFSjtBQUFDQyxHQXRCZUYsZUFBYTtBQUFBLEtBQWJBO0FBd0JULGFBQU1nQixXQUFXQSxNQUFBO0FBQUFDLE1BQUE7QUFBQSxTQUFNckIsV0FBV0csWUFBWTtBQUFDO0FBQUNrQixJQUExQ0QsVUFBUTtBQUFBLElBQUFFO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsIl9zIiwidGhlbWUiLCJzZXRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb290IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRJdGVtIiwidG9nZ2xlIiwidCIsInVzZVRoZW1lIiwiX3MyIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGhlbWVDb250ZXh0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgoKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2dfdGhlbWUnKSB8fCAnZGFyaycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBpZiAodGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKCdsaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Jyk7XG4gICAgICByb290LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NnX3RoZW1lJywgdGhlbWUpO1xuICB9LCBbdGhlbWVdKTtcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRUaGVtZSgodCkgPT4gdCA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiVGhlbWVDb250ZXh0OjIzOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT17eyB0aGVtZSwgdG9nZ2xlIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPik7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpOyJdLCJmaWxlIjoiL2FwcC9zcmMvbGliL1RoZW1lQ29udGV4dC5qc3gifQ==