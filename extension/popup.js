// CYGUARD Shield — Popup v2.5
// Real-time threat detection with live polling + push updates
'use strict';

let selThreat  = 'phishing';
let whitelist  = [];
let liveInterval = null;

const $   = id => document.getElementById(id);
const msg = (data, cb) => {
  try {
    chrome.runtime.sendMessage(data, resp => {
      if (chrome.runtime.lastError) { if (cb) cb(null); return; }
      if (cb) cb(resp);
    });
  } catch(e) { if (cb) cb(null); }
};
const show = el => el && el.classList.remove('hidden');
const hide = el => el && el.classList.add('hidden');

/* ══════════════════════════════════════════
   THEME
══════════════════════════════════════════ */
function initTheme() {
  chrome.storage.local.get('cgTheme', d => applyTheme(d.cgTheme || 'dark'));
}
function applyTheme(t) {
  document.body.className = t;
  const icon = $('themeIcon');
  if (!icon) return;
  icon.innerHTML = t === 'dark'
    ? '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}
$('themeBtn').addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
  chrome.storage.local.set({ cgTheme: next });
});

/* ══════════════════════════════════════════
   TABS
══════════════════════════════════════════ */
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const p = $(`tab-${btn.dataset.tab}`);
    if (p) p.classList.add('active');
    if (btn.dataset.tab === 'scan') startLiveTracking();
    else stopLiveTracking();
  });
});

/* ══════════════════════════════════════════
   SCORE RING — canvas drawing
══════════════════════════════════════════ */
function drawRing(score, color) {
  const c = $('scoreCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const cx = 32, cy = 32, r = 26;
  ctx.clearRect(0, 0, 64, 64);

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.07)';
  ctx.lineWidth = 5;
  ctx.stroke();

  if (score > 0) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + (score / 100) * Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  if (score === -1) {
    const time = Date.now() / 1000;
    ctx.beginPath();
    ctx.arc(cx, cy, r, time % (Math.PI * 2), (time % (Math.PI * 2)) + 1.2);
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();
  }
}

/* ══════════════════════════════════════════
   REAL-TIME SCAN DISPLAY
══════════════════════════════════════════ */
function displayReport(report) {
  if (!report) {
    $('siteDomain').textContent  = 'No active tab';
    $('siteVerdict').textContent = 'Open a website to scan';
    $('scoreLabel').textContent  = '--';
    $('statusTxt').textContent   = 'Ready';
    $('statusBanner').className  = 'status-banner';
    drawRing(0, '#334155');
    return;
  }

  const analysis = report.analysis || {};
  const score    = analysis.score ?? 0;
  const cat      = analysis.category || 'safe';
  const threats  = analysis.threats || [];

  let hostname = '—';
  try { hostname = new URL(report.url).hostname.replace(/^www\./, ''); } catch {}

  $('siteDomain').textContent = hostname;
  if ($('blockDomain')) $('blockDomain').textContent = hostname;

  if (cat === 'scanning') {
    $('siteVerdict').textContent = 'Analyzing page in real-time...';
    $('scoreLabel').textContent  = '...';
    $('scoreLabel').style.color  = '#6366f1';
    $('statusTxt').textContent   = 'Scanning';
    $('statusBanner').className  = 'status-banner scanning';
    $('statusPill').textContent  = '';
    $('threatList').classList.add('hidden');
    drawRing(-1, '#6366f1');
    return;
  }

  if (cat === 'system') {
    $('siteVerdict').textContent = 'Browser / system page';
    $('scoreLabel').textContent  = '—';
    $('scoreLabel').style.color  = '#475569';
    $('statusTxt').textContent   = 'N/A';
    $('statusBanner').className  = 'status-banner';
    $('statusPill').textContent  = '';
    drawRing(0, '#334155');
    $('threatList').classList.add('hidden');
    return;
  }

  if (cat === 'disabled') {
    $('siteVerdict').textContent = 'Protection is disabled';
    $('scoreLabel').textContent  = 'OFF';
    $('scoreLabel').style.color  = '#475569';
    $('statusTxt').textContent   = 'Protection Off';
    $('statusBanner').className  = 'status-banner';
    $('statusPill').textContent  = '';
    drawRing(0, '#334155');
    $('threatList').classList.add('hidden');
    return;
  }

  let ringColor, bannerClass, pillText, verdictText;

  if (cat === 'danger') {
    ringColor   = '#ef4444';
    bannerClass = 'status-banner danger';
    pillText    = '⚠ DANGER';
    verdictText = `${analysis.label || 'Threat Detected'} · Score: ${score}/100`;
    $('scoreLabel').style.color = '#ef4444';
  } else if (cat === 'warning') {
    ringColor   = '#f59e0b';
    bannerClass = 'status-banner warning';
    pillText    = '⚠ WARNING';
    verdictText = `${analysis.label || 'Suspicious'} · Score: ${score}/100`;
    $('scoreLabel').style.color = '#f59e0b';
  } else {
    ringColor   = '#10b981';
    bannerClass = 'status-banner safe';
    pillText    = '✓ SAFE';
    verdictText = analysis.label || 'No threats detected';
    $('scoreLabel').style.color = '#10b981';
  }

  $('scoreLabel').textContent  = score > 0 ? score : '✓';
  $('siteVerdict').textContent = verdictText;
  $('statusTxt').textContent   = analysis.label || (cat === 'safe' ? 'Safe' : cat === 'warning' ? 'Warning' : 'Danger');
  $('statusBanner').className  = bannerClass;
  $('statusPill').textContent  = pillText;

  drawRing(score, ringColor);

  const tList = $('threatList');
  if (threats.length > 0) {
    tList.innerHTML = '';
    tList.classList.remove('hidden');
    threats.forEach(t => {
      const row = document.createElement('div');
      row.className = `threat-item threat-${t.severity || 'medium'}`;
      row.innerHTML = `
        <span class="t-icon">${t.type === 'phishing' ? '🎣' : t.type === 'malware' ? '🦠' : t.type === 'scam' ? '💰' : t.type === 'adult' ? '🔞' : '⚠'}</span>
        <span class="t-label">${t.label}</span>
        <span class="t-sev">${t.severity || 'medium'}</span>
      `;
      tList.appendChild(row);
    });
  } else {
    tList.classList.add('hidden');
  }

  msg({ type: 'GET_PAGE_BLOCK_COUNT' }, cnt => {
    if ($('blockPageCount')) $('blockPageCount').textContent = cnt?.count || 0;
  });
}

/* ══════════════════════════════════════════
   LIVE TRACKING
══════════════════════════════════════════ */
function runScan() {
  $('siteVerdict').textContent = 'Analyzing...';
  $('scoreLabel').textContent  = '...';
  $('scoreLabel').style.color  = '#6366f1';
  $('statusTxt').textContent   = 'Scanning';
  $('statusBanner').className  = 'status-banner scanning';
  drawRing(-1, '#6366f1');

  msg({ type: 'GET_TAB_REPORT' }, report => {
    displayReport(report);
  });
}

function startLiveTracking() {
  stopLiveTracking();
  runScan();
  liveInterval = setInterval(() => {
    if (document.querySelector('.tab[data-tab="scan"]')?.classList.contains('active')) {
      msg({ type: 'GET_TAB_REPORT' }, report => displayReport(report));
    }
  }, 1500);
}

function stopLiveTracking() {
  if (liveInterval) { clearInterval(liveInterval); liveInterval = null; }
}

chrome.runtime.onMessage.addListener((msg_data) => {
  if (msg_data.type === 'TAB_ANALYSIS_UPDATE' || msg_data.type === 'TAB_SWITCHED') {
    msg({ type: 'GET_TAB_REPORT' }, report => displayReport(report));
  }
});

const rb = $('rescanBtn');
if (rb) rb.addEventListener('click', runScan);

/* ══════════════════════════════════════════
   STATS
══════════════════════════════════════════ */
function loadStats() {
  msg({ type: 'GET_STATS' }, s => {
    if (!s) return;
    if ($('cAds'))      $('cAds').textContent      = (s.adsBlocked     || 0).toLocaleString();
    if ($('cTrackers')) $('cTrackers').textContent = (s.trackersBlocked || 0).toLocaleString();
    if ($('cThreats'))  $('cThreats').textContent  = (s.threatsDetected || 0).toLocaleString();
    if ($('cScanned'))  $('cScanned').textContent  = (s.sitesScanned    || 0).toLocaleString();
  });
}

/* ══════════════════════════════════════════
   MODULE TOGGLES
══════════════════════════════════════════ */
function initModules() {
  chrome.storage.local.get('cgModules', d => {
    const m = d.cgModules || { ads:true, trackers:true, malware:true, adult:true };
    if ($('togAds'))      $('togAds').checked      = m.ads;
    if ($('togTrackers')) $('togTrackers').checked = m.trackers;
    if ($('togMalware'))  $('togMalware').checked  = m.malware;
    if ($('togAdult'))    $('togAdult').checked    = m.adult !== false;
  });
  ['togAds','togTrackers','togMalware','togAdult'].forEach(id => {
    const el = $(id);
    if (!el) return;
    el.addEventListener('change', () => {
      const m = {
        ads:      $('togAds')?.checked      || false,
        trackers: $('togTrackers')?.checked || false,
        malware:  $('togMalware')?.checked  || false,
        adult:    $('togAdult')?.checked    || false,
      };
      chrome.storage.local.set({ cgModules: m });
      msg({ type: 'UPDATE_MODULES', modules: m });
    });
  });
}

/* ══════════════════════════════════════════
   MAIN TOGGLE
══════════════════════════════════════════ */
const togMain = $('togMain');
if (togMain) togMain.addEventListener('change', () => {
  msg({ type: 'SET_MAIN_PROTECTION', enabled: togMain.checked });
  setTimeout(runScan, 300);
});

/* ══════════════════════════════════════════
   ACTIONS
══════════════════════════════════════════ */
const actBlock = $('actBlockManual');
if (actBlock) actBlock.addEventListener('click', () => {
  chrome.tabs.query({ active:true, currentWindow:true }, tabs => {
    if (!tabs[0]) return;
    let host = '';
    try { host = new URL(tabs[0].url).hostname.replace(/^www\./, ''); } catch { return; }
    msg({ type: 'MANUAL_BLOCK', domain: host }, res => {
      showToast(res?.blocked ? `Blocked: ${host}` : `Unblocked: ${host}`);
      setTimeout(runScan, 400);
    });
  });
});

const actLog = $('actFilterLog');
if (actLog) actLog.addEventListener('click', () => {
  msg({ type: 'GET_FILTER_LOG' }, data => {
    const log  = data?.log || [];
    const body = $('logBody');
    if (!body) return;
    body.innerHTML = '';
    if (!log.length) {
      body.innerHTML = '<div style="padding:14px;text-align:center;font-size:11px;color:#475569">No filter log entries yet</div>';
    } else {
      log.slice(0, 80).forEach(e => {
        const row = document.createElement('div');
        row.className = `log-entry ${e.blocked ? 'blocked' : 'allowed'}`;
        const time = e.ts ? new Date(e.ts).toLocaleTimeString() : '';
        row.innerHTML = `<span class="domain">${e.domain}</span><span class="rule">${e.rule}</span><span style="font-size:9px;color:#475569;margin-left:auto;">${time}</span>`;
        body.appendChild(row);
      });
    }
    const modal = $('logModal');
    if (modal) modal.classList.add('open');
  });
});

const logClose = $('logClose');
if (logClose) logClose.addEventListener('click', () => $('logModal')?.classList.remove('open'));
const logModal = $('logModal');
if (logModal) logModal.addEventListener('click', e => { if (e.target === logModal) logModal.classList.remove('open'); });

/* ══════════════════════════════════════════
   WHITELIST
══════════════════════════════════════════ */
function renderWhitelist() {
  const list  = $('wlList');
  const empty = $('wlEmpty');
  if (!list) return;
  list.innerHTML = '';
  if (!whitelist.length) { show(empty); return; }
  hide(empty);
  whitelist.forEach((d, i) => {
    const row = document.createElement('div');
    row.className = 'wl-item';
    row.innerHTML = `<span>${d}</span><button class="rm-btn" data-i="${i}" title="Remove">✕</button>`;
    list.appendChild(row);
  });
  list.querySelectorAll('.rm-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      whitelist.splice(+btn.dataset.i, 1);
      chrome.storage.local.set({ cgWhitelist: whitelist });
      msg({ type: 'UPDATE_WHITELIST', whitelist });
      renderWhitelist();
    });
  });
}

const wlAdd = $('wlAddBtn');
if (wlAdd) wlAdd.addEventListener('click', () => {
  const inp = $('wlInput');
  if (!inp) return;
  const val = inp.value.trim().replace(/^https?:\/\//i,'').replace(/\/.*$/,'');
  if (!val || whitelist.includes(val)) { inp.value = ''; return; }
  whitelist.push(val);
  chrome.storage.local.set({ cgWhitelist: whitelist });
  msg({ type: 'UPDATE_WHITELIST', whitelist });
  renderWhitelist();
  inp.value = '';
});

const wlInp = $('wlInput');
if (wlInp) wlInp.addEventListener('keydown', e => { if (e.key === 'Enter' && wlAdd) wlAdd.click(); });

function loadWhitelist() {
  chrome.storage.local.get('cgWhitelist', d => {
    whitelist = d.cgWhitelist || [];
    renderWhitelist();
  });
}

/* ══════════════════════════════════════════
   REPORT
══════════════════════════════════════════ */
document.querySelectorAll('#chipGroup .chip').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('#chipGroup .chip').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
    selThreat = c.dataset.val;
  });
});

const repBtn = $('reportBtn');
if (repBtn) repBtn.addEventListener('click', () => {
  const urlVal = $('reportUrl')?.value.trim();
  const fb     = $('reportFb');
  const cap    = $('captchaCheck');

  if (!urlVal) {
    if (fb) { fb.className='fb err'; fb.textContent='Please enter a URL.'; show(fb); }
    return;
  }
  if (!cap?.checked) {
    if (fb) { fb.className='fb err'; fb.textContent='Please confirm this is a genuine report.'; show(fb); }
    return;
  }

  repBtn.disabled = true;
  msg({ type: 'REPORT_SITE', url: urlVal, category: selThreat }, () => {
    repBtn.disabled = false;
    if (fb) { fb.className='fb ok'; fb.textContent='Submitted. Added to CYGUARD threat database.'; show(fb); }
    const ru = $('reportUrl');
    if (ru) ru.value = '';
    if (cap) cap.checked = false;
    setTimeout(() => { if (fb) fb.className = 'fb hidden'; }, 4500);
  });
});

chrome.tabs.query({ active:true, currentWindow:true }, tabs => {
  const ru = $('reportUrl');
  if (ru && tabs[0]?.url && !tabs[0].url.startsWith('chrome://')) ru.value = tabs[0].url;
});

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
function showToast(text) {
  const fb = document.createElement('div');
  fb.style.cssText = 'position:fixed;bottom:38px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#00d4ff,#7c3aed);color:#050910;padding:7px 16px;border-radius:9px;font-size:11px;font-weight:800;z-index:9999;white-space:nowrap;pointer-events:none;';
  fb.textContent = text;
  document.body.appendChild(fb);
  setTimeout(() => fb.remove(), 2800);
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initModules();
  loadStats();
  loadWhitelist();
  startLiveTracking();
});
