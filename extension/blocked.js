(function () {
  var params = new URLSearchParams(location.search);
  var type   = params.get('type')  || 'threat';
  var host   = params.get('host')  || 'this website';
  var score  = parseInt(params.get('score') || '70', 10);
  var orig   = params.get('orig')  || '';

  // Domain
  document.getElementById('domainText').textContent = host;

  // Threat badge
  var badge = document.getElementById('threatBadge');
  if (type === 'adult') {
    badge.className = 'threat-badge threat-adult';
    badge.textContent = 'Adult Content Blocked';
  } else if (type === 'manual') {
    badge.className = 'threat-badge threat-manual';
    badge.textContent = 'Manually Blocked';
  } else {
    badge.className = 'threat-badge threat-threat';
    badge.textContent = 'Threat Detected';
  }

  // Score bar
  document.getElementById('scoreBar').style.width = score + '%';
  document.getElementById('scoreNum').textContent  = score + '/100';

  // Why body
  var whyMap = {
    adult:   'This website contains <strong>adult content</strong>. The adult content filter in CYGUARD Shield is currently enabled. To allow access, disable the Adult Content filter in the Protect tab.',
    phishing:'CYGUARD Shield detected active <strong>phishing indicators</strong> on this page — it may be impersonating a legitimate service to steal your credentials or personal data.',
    malware: 'This domain has been flagged for distributing <strong>malware, ransomware, or malicious scripts</strong>. Visiting it may compromise your device or data.',
    scam:    'This website has been identified as a <strong>scam</strong> by the CYGUARD community threat intelligence database.',
    manual:  'This domain has been <strong>manually blocked</strong> by you. To unblock it, open the CYGUARD Shield popup and manage your blocked sites list.',
    threat:  'CYGUARD Shield identified this website as a <strong>potential security threat</strong> based on domain reputation, content analysis, and community reports.'
  };
  var whyEl = document.getElementById('whyBody');
  whyEl.innerHTML = whyMap[type] || whyMap['threat'];

  // Footer timestamp
  var ts = document.getElementById('footerTs');
  if (ts) ts.textContent = new Date().toLocaleTimeString();

  // Go Back button — close tab or go back in history
  document.getElementById('btnBack').addEventListener('click', function () {
    // Try to close tab first (works if opened by extension), else go back
    try {
      window.close();
    } catch (e) {}
    // If window.close() didn't work (tab wasn't opened by script), navigate back
    if (history.length > 1) {
      history.go(-1);
    } else {
      location.replace('chrome://newtab/');
    }
  });

  // Proceed anyway — navigate directly to the original URL
  document.getElementById('btnProceed').addEventListener('click', function () {
    if (orig) {
      location.replace(decodeURIComponent(orig));
    }
  });
})();
