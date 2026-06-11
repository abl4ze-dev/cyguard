// CYGUARD Shield — Background Service Worker v2.5
// Robust real-time threat detection with live scoring per tab
'use strict';

/* ══════════════════════════════════════════
   THREAT INTELLIGENCE DATABASES
══════════════════════════════════════════ */

// Verified safe domains — zero threat score
const SAFE_DOMAINS = new Set([
  'google.com','youtube.com','github.com','microsoft.com','apple.com',
  'amazon.com','facebook.com','twitter.com','instagram.com','reddit.com',
  'stackoverflow.com','wikipedia.org','linkedin.com','netflix.com','spotify.com',
  'cloudflare.com','mozilla.org','w3.org','npmjs.com','nodejs.org',
  'react.dev','tailwindcss.com','vercel.com','netlify.com','stripe.com',
  'paypal.com','ebay.com','walmart.com','target.com','bestbuy.com',
  'nytimes.com','bbc.com','cnn.com','reuters.com','theguardian.com',
  'medium.com','substack.com','notion.so','slack.com','zoom.us',
  'dropbox.com','drive.google.com','docs.google.com','maps.google.com',
  'mail.google.com','outlook.com','office.com','teams.microsoft.com',
  'discord.com','twitch.tv','tiktok.com','snapchat.com','pinterest.com',
  'adobe.com','figma.com','canva.com','shopify.com','wordpress.com',
  'base44.com','openai.com','anthropic.com','huggingface.co',
]);

// Known malicious/phishing domains
const MALICIOUS_DOMAINS = new Set([
  'ai-crypto-giveaway2026.xyz','paypal-security-verify26.tk',
  'windows12-activator.net','getfreevbucks2026.io',
  'ai-support-alert-microsoft.click','claude-ai-free-unlimited.net',
  'deepfake-id-verify.pro','chrome-extension-update26.xyz',
  'free-bitcoin-generator.net','crypto-doubler2026.com',
  'microsoftsupport-alert.com','appleid-verify-account.com',
  'netflix-password-reset.tk','amazon-prize-winner2026.ml',
]);

// Adult domains
const ADULT_DOMAINS = new Set([
  // Major global sites
  'pornhub.com','xvideos.com','xnxx.com','redtube.com','youporn.com',
  'tube8.com','spankbang.com','xhamster.com','brazzers.com','bangbros.com',
  'realitykings.com','naughtyamerica.com','mofos.com','teamskeet.com',
  'wankz.com','tnaflix.com','beeg.com','motherless.com','stripchat.com',
  'chaturbate.com','bongacams.com','livejasmin.com','cam4.com',
  'myfreecams.com','onlyfans.com','faphouse.com','nhentai.net',
  'hentaihaven.xxx','rule34.xxx','gelbooru.com','literotica.com',
  'adultfriendfinder.com','slutload.com','extremetube.com',
  'keezmovies.com','porntrex.com','drtuber.com','xporn.com','fuq.com',
  'streamate.com','cams.com','jasmin.com','imlive.com','sexier.com',
  'flirt4free.com','camcontacts.com','porndig.com','hdzog.com',
  'pinayflix.app','pinayxxx.com','filipinaxxx.com','asiansextube.com',
  'sex.com','e621.net',
  // User-requested additions
  'sexvideo.com','faketaxi.com','sexvideo.ph',
  'pinayflix.tv','kantotflix.tv','katorsex.com',
  'pilipinay.com','vivamax.net',
]);

const ADULT_KEYWORDS = [
  'pornhub','xvideos','xnxx','redtube','youporn','tube8','spankbang',
  'xhamster','brazzers','bangbros','naughtyamerica','mofos','teamskeet',
  'tnaflix','beeg','motherless','stripchat','chaturbate','bongacams',
  'livejasmin','myfreecams','onlyfans','nhentai','hentaihaven','rule34',
  'gelbooru','literotica','slutload','extremetube','keezmovies','porntrex',
  'drtuber','xporn','streamate','sexier','flirt4free','imlive','porndig',
  'pinayflix','pinayxxx','filipinaxxx','asiansextube','camcontacts',
  // User-requested keywords
  'sexvideo','faketaxi','kantotflix','katorsex','pilipinay','vivamax',
  'pinayflix','kantot','telserye','boldstar',
];

// Threat indicators with weights
const THREAT_RULES = [
  { pattern: /paypal.{0,20}(secure|verify|login|signin|confirm)/i, weight: 55, type: 'phishing', label: 'PayPal Phishing' },
  { pattern: /apple.{0,20}(verify|account|id|login)/i, weight: 50, type: 'phishing', label: 'Apple ID Phishing' },
  { pattern: /microsoft.{0,20}(alert|support|verify|update)/i, weight: 50, type: 'phishing', label: 'Microsoft Phishing' },
  { pattern: /netflix.{0,20}(password|reset|verify|update)/i, weight: 50, type: 'phishing', label: 'Netflix Phishing' },
  { pattern: /amazon.{0,20}(prize|winner|gift|reward)/i, weight: 55, type: 'phishing', label: 'Amazon Scam' },
  { pattern: /bank.{0,20}(login|secure|verify|account)/i, weight: 45, type: 'phishing', label: 'Banking Phishing' },
  { pattern: /crypto.{0,15}(giveaway|doubler|free|generator)/i, weight: 70, type: 'scam', label: 'Crypto Scam' },
  { pattern: /bitcoin.{0,15}(free|generator|doubler|giveaway)/i, weight: 70, type: 'scam', label: 'Bitcoin Scam' },
  { pattern: /free.{0,12}(bitcoin|ethereum|crypto|nft)/i, weight: 65, type: 'scam', label: 'Crypto Scam' },
  { pattern: /windows.{0,15}(activat|crack|keygen|patch)/i, weight: 65, type: 'malware', label: 'Crack/Keygen Site' },
  { pattern: /(free.{0,10}download|crack.{0,10}download|keygen)/i, weight: 50, type: 'malware', label: 'Malware Download' },
  { pattern: /activator.{0,10}(download|free|windows|office)/i, weight: 60, type: 'malware', label: 'Fake Activator' },
  { pattern: /tech.{0,12}support.{0,12}(alert|warning|call|virus)/i, weight: 60, type: 'scam', label: 'Tech Support Scam' },
  { pattern: /virus.{0,12}(detected|found|alert|warning)/i, weight: 55, type: 'scam', label: 'Fake Virus Alert' },
  { pattern: /\.(tk|ml|ga|cf|gq|xyz|top|club|work|click|loan|review|stream|gdn|bid|trade|win|date|racing)$/i, weight: 20, type: 'suspicious', label: 'Suspicious TLD' },
  { pattern: /\d{4,}\./i, weight: 10, type: 'suspicious', label: 'Numeric Subdomain' },
  { pattern: /(-secure-|-verify-|-login-|-account-|-update-)/i, weight: 25, type: 'phishing', label: 'Suspicious Path' },
  { pattern: /(secure|verify|login|signin|account).{0,20}\.(tk|ml|ga|xyz|click)/i, weight: 45, type: 'phishing', label: 'Phishing TLD Combo' },
  { pattern: /free.{0,10}(vbucks|robux|gems|coins|points)/i, weight: 60, type: 'scam', label: 'Gaming Scam' },
  { pattern: /getfree.{0,15}(vbucks|robux|gems|fortnite)/i, weight: 65, type: 'scam', label: 'Gaming Scam' },
];

function isAdultDomain(hostname) {
  const h = hostname.toLowerCase();
  const bare = h.replace(/^www\./, '');
  if (ADULT_DOMAINS.has(bare) || ADULT_DOMAINS.has(h)) return true;
  return ADULT_KEYWORDS.some(kw => bare.includes(kw));
}

function isSafeDomain(hostname) {
  const bare = hostname.toLowerCase().replace(/^www\./, '');
  if (SAFE_DOMAINS.has(bare)) return true;
  for (const sd of SAFE_DOMAINS) {
    if (bare.endsWith('.' + sd)) return true;
  }
  return false;
}

/* ══════════════════════════════════════════
   REAL-TIME ANALYSIS ENGINE
══════════════════════════════════════════ */
function analyzeUrl(url) {
  let hostname = '';
  let fullUrl = url;

  try {
    const u = new URL(url);
    hostname = u.hostname.toLowerCase();
    fullUrl = url.toLowerCase();
  } catch {
    return { score: 0, category: 'safe', threats: [], label: 'Safe', details: {} };
  }

  const bare = hostname.replace(/^www\./, '');

  if (isSafeDomain(hostname)) {
    return { score: 0, category: 'safe', threats: [], label: 'Verified Safe', details: { ssl: true, domainType: 'trusted' } };
  }

  if (MALICIOUS_DOMAINS.has(bare)) {
    return {
      score: 98, category: 'danger', label: 'Known Threat',
      threats: [{ type: 'blacklist', severity: 'critical', label: 'CYGUARD Blacklist Match' }],
      details: { ssl: false, domainType: 'malicious' }
    };
  }

  if (isAdultDomain(hostname)) {
    return {
      score: 85, category: 'danger', label: 'Adult Content',
      threats: [{ type: 'adult', severity: 'high', label: 'Adult/Explicit Content' }],
      details: { ssl: false, domainType: 'adult' }
    };
  }

  let score = 0;
  const threats = [];

  for (const rule of THREAT_RULES) {
    if (rule.pattern.test(fullUrl)) {
      score += rule.weight;
      threats.push({ type: rule.type, severity: rule.weight >= 50 ? 'high' : 'medium', label: rule.label });
    }
  }

  if (/\d{3,}/.test(bare)) score += 12;
  if (bare.split('.').some(p => p.length > 30)) score += 15;

  const subdomainCount = hostname.split('.').length - 2;
  if (subdomainCount >= 3) score += 15;
  if (subdomainCount >= 5) score += 20;

  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    score += 40;
    threats.push({ type: 'suspicious', severity: 'high', label: 'IP Address URL' });
  }

  const brandPatterns = [
    { brand: 'paypal', real: 'paypal.com' },
    { brand: 'apple', real: 'apple.com' },
    { brand: 'microsoft', real: 'microsoft.com' },
    { brand: 'google', real: 'google.com' },
    { brand: 'amazon', real: 'amazon.com' },
    { brand: 'netflix', real: 'netflix.com' },
    { brand: 'facebook', real: 'facebook.com' },
    { brand: 'instagram', real: 'instagram.com' },
    { brand: 'twitter', real: 'twitter.com' },
    { brand: 'coinbase', real: 'coinbase.com' },
    { brand: 'binance', real: 'binance.com' },
  ];
  for (const b of brandPatterns) {
    if (bare.includes(b.brand) && !bare.endsWith(b.real) && bare !== b.real) {
      score += 45;
      threats.push({ type: 'phishing', severity: 'critical', label: `${b.brand.charAt(0).toUpperCase() + b.brand.slice(1)} Lookalike` });
      break;
    }
  }

  score = Math.min(100, score);
  const deduped = threats.filter((t, i, a) => a.findIndex(x => x.label === t.label) === i);

  let category, label;
  if (score >= 65)      { category = 'danger';  label = 'Threat Detected'; }
  else if (score >= 30) { category = 'warning'; label = 'Suspicious'; }
  else                  { category = 'safe';    label = 'Safe'; }

  return { score, category, label, threats: deduped, details: { domainType: category === 'safe' ? 'unknown' : 'suspicious', subdomains: subdomainCount } };
}

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let stats        = { adsBlocked:0, trackersBlocked:0, malwareBlocked:0, sitesScanned:0, threatsDetected:0 };
let whitelist    = [];
let manualBlocks = new Set();
let modules      = { ads:true, trackers:true, malware:true, adult:true };
let mainEnabled  = true;
let filterLog    = [];
let pageBlockCounts = {};

const tabAnalysis = new Map();

function saveStats() { chrome.storage.local.set({ cgStats: stats }); }

function addLog(domain, rule, blocked) {
  filterLog.unshift({ domain, rule, blocked, ts: Date.now() });
  if (filterLog.length > 300) filterLog.length = 300;
}

/* ── Restore persisted state ── */
chrome.storage.local.get([
  'cgStats','cgWhitelist','cgModules','cgMainEnabled','cgManualBlocks','cgInitialized'
], d => {
  if (d.cgStats)        Object.assign(stats, d.cgStats);
  if (d.cgWhitelist)    whitelist = d.cgWhitelist;
  if (d.cgMainEnabled !== undefined) mainEnabled = d.cgMainEnabled;
  if (d.cgManualBlocks) manualBlocks = new Set(d.cgManualBlocks);

  if (!d.cgInitialized) {
    modules = { ads:true, trackers:true, malware:true, adult:true };
    chrome.storage.local.set({ cgModules: modules, cgInitialized: true });
  } else if (d.cgModules) {
    Object.assign(modules, d.cgModules);
  }
});

/* ══════════════════════════════════════════
   ADULT BLOCKING
══════════════════════════════════════════ */
chrome.webNavigation.onBeforeNavigate.addListener(details => {
  if (details.frameId !== 0) return;
  if (!mainEnabled || !modules.adult) return;
  if (!details.url || details.url.startsWith('chrome') || details.url.includes('blocked.html') || details.url.includes('extension://')) return;

  let hostname = '';
  try { hostname = new URL(details.url).hostname; } catch { return; }
  const bare = hostname.replace(/^www\./, '');

  if (whitelist.some(w => bare === w || bare.endsWith('.' + w))) return;

  if (isAdultDomain(hostname)) {
    const blockedUrl = chrome.runtime.getURL(
      `blocked.html?type=adult&host=${encodeURIComponent(bare)}&score=100&orig=${encodeURIComponent(details.url)}`
    );
    chrome.tabs.update(details.tabId, { url: blockedUrl });
    stats.threatsDetected++;
    pageBlockCounts[details.tabId] = (pageBlockCounts[details.tabId] || 0) + 1;
    saveStats();
    addLog(bare, 'Adult Content Filter', true);
    tabAnalysis.set(details.tabId, {
      url: details.url,
      analysis: { score: 100, category: 'danger', label: 'Adult Content Blocked', threats: [{ type: 'adult', severity: 'critical', label: 'Adult/Explicit Content' }] },
      ts: Date.now(), blocked: true
    });
    try { chrome.action.setBadgeText({ text: '🔞', tabId: details.tabId }); chrome.action.setBadgeBackgroundColor({ color: '#ec4899', tabId: details.tabId }); } catch {}
  }
});

/* ══════════════════════════════════════════
   REAL-TIME TAB TRACKING
══════════════════════════════════════════ */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && !changeInfo.url.startsWith('chrome') && !changeInfo.url.includes('blocked.html')) {
    tabAnalysis.set(tabId, {
      url: changeInfo.url,
      analysis: { score: -1, category: 'scanning', label: 'Scanning...', threats: [] },
      ts: Date.now()
    });
    try { chrome.action.setBadgeText({ text: '...', tabId }); chrome.action.setBadgeBackgroundColor({ color: '#6366f1', tabId }); } catch {}
  }

  if (changeInfo.status !== 'complete') return;
  if (!tab.url) return;
  if (tab.url.startsWith('chrome') || tab.url.includes('blocked.html') || tab.url.includes('extension://')) {
    tabAnalysis.set(tabId, { url: tab.url, analysis: { score: 0, category: 'system', label: 'Browser Page', threats: [] }, ts: Date.now() });
    try { chrome.action.setBadgeText({ text: '', tabId }); } catch {}
    return;
  }

  if (!mainEnabled) {
    tabAnalysis.set(tabId, { url: tab.url, analysis: { score: 0, category: 'disabled', label: 'Protection Off', threats: [] }, ts: Date.now() });
    return;
  }

  let hostname = '';
  try { hostname = new URL(tab.url).hostname; } catch { return; }
  const bare = hostname.replace(/^www\./, '');

  if (whitelist.some(w => bare === w || bare.endsWith('.' + w))) {
    const result = { score: 0, category: 'safe', label: 'Whitelisted', threats: [] };
    tabAnalysis.set(tabId, { url: tab.url, analysis: result, ts: Date.now() });
    try { chrome.action.setBadgeText({ text: '✓', tabId }); chrome.action.setBadgeBackgroundColor({ color: '#10b981', tabId }); } catch {}
    return;
  }

  if (manualBlocks.has(bare)) {
    const blockedUrl = chrome.runtime.getURL(`blocked.html?type=manual&host=${encodeURIComponent(bare)}&score=100&orig=${encodeURIComponent(tab.url)}`);
    chrome.tabs.update(tabId, { url: blockedUrl });
    addLog(bare, 'Manual Block', true);
    tabAnalysis.set(tabId, { url: tab.url, analysis: { score: 100, category: 'danger', label: 'Manually Blocked', threats: [{ type: 'manual', severity: 'high', label: 'Manual Block' }] }, ts: Date.now(), blocked: true });
    try { chrome.action.setBadgeText({ text: '✗', tabId }); chrome.action.setBadgeBackgroundColor({ color: '#7c3aed', tabId }); } catch {}
    return;
  }

  stats.sitesScanned++;
  saveStats();

  const result = analyzeUrl(tab.url);
  tabAnalysis.set(tabId, { url: tab.url, analysis: result, ts: Date.now() });
  addLog(bare, result.label, result.category === 'danger');

  if (result.category === 'danger' && modules.malware && result.threats.every(t => t.type !== 'adult')) {
    stats.threatsDetected++;
    stats.malwareBlocked++;
    saveStats();
    const blockedUrl = chrome.runtime.getURL(`blocked.html?type=threat&host=${encodeURIComponent(bare)}&score=${result.score}&orig=${encodeURIComponent(tab.url)}`);
    chrome.tabs.update(tabId, { url: blockedUrl });
    addLog(bare, 'Threat Blocked', true);
    pageBlockCounts[tabId] = (pageBlockCounts[tabId] || 0) + 1;
    try { chrome.action.setBadgeText({ text: '⚠', tabId }); chrome.action.setBadgeBackgroundColor({ color: '#ef4444', tabId }); } catch {}
  } else if (result.category === 'warning') {
    try { chrome.action.setBadgeText({ text: '?', tabId }); chrome.action.setBadgeBackgroundColor({ color: '#f59e0b', tabId }); } catch {}
  } else if (result.category === 'safe') {
    try { chrome.action.setBadgeText({ text: '✓', tabId }); chrome.action.setBadgeBackgroundColor({ color: '#10b981', tabId }); } catch {}
  }

  try { chrome.runtime.sendMessage({ type: 'TAB_ANALYSIS_UPDATE', tabId, result, url: tab.url }, () => { void chrome.runtime.lastError; }); } catch(_){}
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
  try { chrome.runtime.sendMessage({ type: 'TAB_SWITCHED', tabId }, () => { void chrome.runtime.lastError; }); } catch(_){}
});

chrome.tabs.onRemoved.addListener(tabId => {
  tabAnalysis.delete(tabId);
  delete pageBlockCounts[tabId];
});

/* ══════════════════════════════════════════
   MESSAGE HANDLER
══════════════════════════════════════════ */
chrome.runtime.onMessage.addListener((req, _sender, send) => {
  switch (req.type) {

    case 'GET_STATS':
      send(stats); return true;

    case 'GET_TAB_REPORT':
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (!tabs[0]) { send(null); return; }
        const cached = tabAnalysis.get(tabs[0].id);
        if (cached) {
          send({ ...cached, tabId: tabs[0].id });
        } else {
          const url = tabs[0].url || '';
          if (!url || url.startsWith('chrome') || url.includes('extension://')) {
            send({ url, analysis: { score: 0, category: 'system', label: 'Browser Page', threats: [] }, ts: Date.now() });
          } else {
            const result = analyzeUrl(url);
            tabAnalysis.set(tabs[0].id, { url, analysis: result, ts: Date.now() });
            send({ url, analysis: result, tabId: tabs[0].id, ts: Date.now() });
          }
        }
      });
      return true;

    case 'GET_PAGE_BLOCK_COUNT':
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        send({ count: pageBlockCounts[tabs[0]?.id] || 0 });
      });
      return true;

    case 'SET_MAIN_PROTECTION':
      mainEnabled = req.enabled;
      chrome.storage.local.set({ cgMainEnabled: mainEnabled });
      send({ ok: true }); return true;

    case 'UPDATE_MODULES':
      Object.assign(modules, req.modules);
      chrome.storage.local.set({ cgModules: modules });
      try {
        if (modules.adult) {
          chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: ['block_adult'], disableRulesetIds: [] });
        } else {
          chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: [], disableRulesetIds: ['block_adult'] });
        }
      } catch {}
      send({ ok: true }); return true;

    case 'UPDATE_WHITELIST':
      whitelist = req.whitelist || [];
      chrome.storage.local.set({ cgWhitelist: whitelist });
      send({ ok: true }); return true;

    case 'MANUAL_BLOCK':
      if (manualBlocks.has(req.domain)) {
        manualBlocks.delete(req.domain);
        chrome.storage.local.set({ cgManualBlocks: [...manualBlocks] });
        send({ blocked: false });
      } else {
        manualBlocks.add(req.domain);
        chrome.storage.local.set({ cgManualBlocks: [...manualBlocks] });
        stats.threatsDetected++;
        saveStats();
        addLog(req.domain, 'Manual Block', true);
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          if (tabs[0] && !tabs[0].url?.includes('blocked.html')) {
            let bare = '';
            try { bare = new URL(tabs[0].url).hostname.replace(/^www\./, ''); } catch {}
            const blockedUrl = chrome.runtime.getURL(`blocked.html?type=manual&host=${encodeURIComponent(bare)}&score=100&orig=${encodeURIComponent(tabs[0].url)}`);
            chrome.tabs.update(tabs[0].id, { url: blockedUrl });
          }
        });
        send({ blocked: true });
      }
      return true;

    case 'GET_FILTER_LOG':
      send({ log: filterLog }); return true;

    case 'REPORT_SITE': {
      stats.threatsDetected++;
      saveStats();
      chrome.storage.local.get('cgReports', d => {
        const r = d.cgReports || [];
        r.unshift({ url: req.url, category: req.category, ts: Date.now() });
        chrome.storage.local.set({ cgReports: r });
      });
      let domain = req.url;
      try { domain = new URL(req.url.startsWith('http') ? req.url : 'https://' + req.url).hostname.replace(/^www\./, ''); } catch {}
      addLog(domain, `Reported: ${req.category}`, true);

      const severityMap = { phishing:'critical', malware:'critical', scam:'high', adult:'high', spam:'medium', other:'medium' };
      const descMap = {
        phishing: `Community-reported phishing site.`,
        malware:  `Community-reported malware distributor.`,
        scam:     `Community-reported scam website.`,
        adult:    `Community-reported adult content website.`,
        spam:     `Community-reported spam domain.`,
        other:    `Community-reported suspicious website.`,
      };

      fetch('https://api.base44.com/api/apps/6a0da0da2884724c0bb23a29/entities/ReportedSite/filter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain })
      })
      .then(r => r.json())
      .then(existing => {
        if (existing && existing.length > 0) {
          const item = existing[0];
          fetch(`https://api.base44.com/api/apps/6a0da0da2884724c0bb23a29/entities/ReportedSite/${item.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ report_count: (item.report_count || 1) + 1 })
          }).catch(() => {});
        } else {
          fetch('https://api.base44.com/api/apps/6a0da0da2884724c0bb23a29/entities/ReportedSite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: req.url,
              domain,
              category: req.category || 'other',
              report_count: 1,
              description: descMap[req.category] || descMap.other,
              severity: severityMap[req.category] || 'medium',
              threat_score: req.category === 'phishing' || req.category === 'malware' ? 85 : 70,
              verified: false,
            })
          }).catch(() => {});
        }
      })
      .catch(() => {});

      send({ ok: true }); return true;
    }
  }
});
