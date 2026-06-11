// CYGUARD Shield — Content Script v2.5
// Backup adult blocker: fires at document_start, covers cases webNavigation misses
(function () {
  'use strict';
  if (window.__cyg25) return;
  window.__cyg25 = true;

  const hostname = window.location.hostname.toLowerCase();
  const bare = hostname.replace(/^www\./, '');

  const ADULT_KEYWORDS = [
    'pornhub','xvideos','xnxx','redtube','youporn','tube8','spankbang',
    'xhamster','brazzers','bangbros','naughtyamerica','mofos','teamskeet',
    'wankz','tnaflix','beeg','motherless','stripchat','chaturbate',
    'bongacams','livejasmin','myfreecams','onlyfans','faphouse',
    'pinayflix','pinayxxx','filipinaxxx','asiansextube','nhentai',
    'rule34','gelbooru','literotica','slutload','extremetube',
    'keezmovies','porntrex','drtuber','xporn','fuq','streamate',
    'sexier','flirt4free','imlive','porndig','sex.com','camcontacts',
  ];

  function isAdult(h) {
    return ADULT_KEYWORDS.some(kw => h.includes(kw));
  }

  if (!isAdult(bare)) return;

  chrome.storage.local.get(['cgModules', 'cgWhitelist', 'cgMainEnabled'], d => {
    const main    = d.cgMainEnabled !== false;
    const modules = d.cgModules || { adult: true };
    const wl      = d.cgWhitelist || [];

    if (!main || !modules.adult) return;
    if (wl.some(w => bare === w || bare.endsWith('.' + w))) return;

    document.documentElement.style.cssText = 'visibility:hidden!important;overflow:hidden!important;';

    function showBlock() {
      if (!document.body) { requestAnimationFrame(showBlock); return; }

      document.documentElement.style.cssText = '';
      document.body.style.cssText = 'margin:0;padding:0;overflow:hidden;';

      while (document.body.firstChild) document.body.removeChild(document.body.firstChild);

      const ov = document.createElement('div');
      ov.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2147483647;background:#080d1a;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;';

      ov.innerHTML = `
        <div style="text-align:center;max-width:360px;padding:32px 24px;">
          <div style="font-size:13px;font-weight:900;letter-spacing:3px;color:#00d4ff;margin-bottom:4px;">CYGUARD</div>
          <div style="font-size:9px;font-weight:700;letter-spacing:4px;color:#475569;margin-bottom:24px;">SHIELD</div>
          <div style="font-size:48px;margin-bottom:16px;">🔞</div>
          <h2 style="color:#f1f5f9;font-size:18px;font-weight:800;margin-bottom:8px;">Adult Content Blocked</h2>
          <p style="color:#64748b;font-size:13px;margin-bottom:24px;">
            CYGUARD Shield blocked <strong style="color:#e2e8f0;">${bare}</strong> because it contains adult or explicit content.
          </p>
          <div style="display:flex;gap:10px;justify-content:center;">
            <button id="cyg-go-back" style="padding:10px 20px;background:#1e293b;border:1px solid #334155;border-radius:8px;color:#e2e8f0;font-size:12px;font-weight:700;cursor:pointer;">← Go Back</button>
            <button id="cyg-proceed" style="padding:10px 20px;background:transparent;border:1px solid #475569;border-radius:8px;color:#64748b;font-size:12px;cursor:pointer;">Proceed anyway</button>
          </div>
        </div>
      `;

      document.body.appendChild(ov);

      document.getElementById('cyg-go-back').onclick = () => {
        if (history.length > 1) history.back();
        else location.href = 'https://www.google.com';
      };
      document.getElementById('cyg-proceed').onclick = () => {
        ov.remove();
        document.documentElement.style.cssText = '';
      };
    }

    requestAnimationFrame(showBlock);
  });
})();
