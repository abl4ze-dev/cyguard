var _s = $RefreshSig$();
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=82de9d48"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport0_react);
const MOBILE_BREAKPOINT = 768;
export function useIsMobile() {
  _s();
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVlBLFdBQVc7QUFFdkIsTUFBTUMsb0JBQW9CO0FBRW5CLGdCQUFTQyxjQUFjO0FBQUFDLEtBQUE7QUFDNUIsUUFBTSxDQUFDQyxVQUFVQyxXQUFXLElBQUlMLE1BQU1NLFNBQVNDLE1BQVM7QUFFeERQLFFBQU1RLFVBQVUsTUFBTTtBQUNwQixVQUFNQyxNQUFNQyxPQUFPQyxXQUFXLGVBQWVWLG9CQUFvQixDQUFDLEtBQUs7QUFDdkUsVUFBTVcsV0FBV0EsTUFBTTtBQUNyQlAsa0JBQVlLLE9BQU9HLGFBQWFaLGlCQUFpQjtBQUFBLElBQ25EO0FBQ0FRLFFBQUlLLGlCQUFpQixVQUFVRixRQUFRO0FBQ3ZDUCxnQkFBWUssT0FBT0csYUFBYVosaUJBQWlCO0FBQ2pELFdBQU8sTUFBTVEsSUFBSU0sb0JBQW9CLFVBQVVILFFBQVE7QUFBQSxFQUN6RCxHQUFHLEVBQUU7QUFFTCxTQUFPLENBQUMsQ0FBQ1I7QUFDWDtBQUFDRCxHQWRlRCxhQUFXIiwibmFtZXMiOlsiUmVhY3QiLCJNT0JJTEVfQlJFQUtQT0lOVCIsInVzZUlzTW9iaWxlIiwiX3MiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VFZmZlY3QiLCJtcWwiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwib25DaGFuZ2UiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidXNlLW1vYmlsZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1PQklMRV9CUkVBS1BPSU5UID0gNzY4O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSXNNb2JpbGUoKSB7XG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke01PQklMRV9CUkVBS1BPSU5UIC0gMX1weClgKTtcbiAgICBjb25zdCBvbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgTU9CSUxFX0JSRUFLUE9JTlQpO1xuICAgIH07XG4gICAgbXFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb25DaGFuZ2UpO1xuICAgIHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgTU9CSUxFX0JSRUFLUE9JTlQpO1xuICAgIHJldHVybiAoKSA9PiBtcWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBvbkNoYW5nZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gISFpc01vYmlsZTtcbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2hvb2tzL3VzZS1tb2JpbGUuanN4In0=