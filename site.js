(function () {
  var T = {
    en: {
      site: "Claude Code Apps",
      note: "Made with Claude Code. Install at your own risk.",
      h1a: "Free", h1b: "apps", h1c: "for Android.",
      sub: "Tap a card, grab the APK, play.",
      dl: "Download", info: "Info", back: "← All apps", version: "Version",
      dlv: "Download v", shots: "Screenshots",
      guideTitle: "How to install", guideSub: "New to apps outside the Play Store? Read this first.",
      guideH: "How to install these apps",
      guideIntro: "These apps are not in the Google Play Store, so Android asks for a few extra confirmations. This is normal and takes about a minute.",
      steps: [
        ["Download the APK", "Tap “Download” on the app you want. If your browser warns that this type of file can be harmful, tap “Download anyway” / “OK”. The file ends in .apk."],
        ["Open the file", "Tap “Open” in the download notification, or open the Files / Downloads app and tap the .apk file."],
        ["Allow installing from this source", "Android will say that your phone is not allowed to install unknown apps from this source. Tap “Settings” and switch on “Allow from this source” for your browser (or Files app). Then press Back to return to the installer."],
        ["Tap “Install”", "Confirm with “Install”. If Google Play Protect shows a warning about an unrecognised app, tap “More details” and then “Install anyway”."],
        ["Open and play", "When it says “App installed”, tap “Open”. The app now sits in your app list like any other."]
      ],
      tipsH: "Good to know",
      tips: [
        "If you see “App not installed”, an older copy that was signed differently may be on your phone. Uninstall that copy first (this removes its saved data) and try again.",
        "Updating: just download and install the newer version over the old one.",
        "Afterwards you can switch “Install unknown apps” off again in Settings → Apps → Special access.",
        "Menus are named a bit differently on every phone brand. Use the search field in Settings and look for “unknown apps”."
      ],
      riskH: "Own risk", risk: "You install these apps at your own risk. They are hobby projects provided as-is, without any warranty.",
      guideBtn: "Download an app"
    },
    de: {
      site: "Claude Code Apps",
      note: "Mit Claude Code erstellt. Installation auf eigene Gefahr.",
      h1a: "Gratis", h1b: "Apps", h1c: "für Android.",
      sub: "Karte antippen, APK laden, spielen.",
      dl: "Herunterladen", info: "Info", back: "← Alle Apps", version: "Version",
      dlv: "Herunterladen v", shots: "Screenshots",
      guideTitle: "So installierst du", guideSub: "Neu bei Apps außerhalb des Play Stores? Erst hier lesen.",
      guideH: "So installierst du diese Apps",
      guideIntro: "Diese Apps sind nicht im Google Play Store, daher fragt Android ein paar Mal extra nach. Das ist normal und dauert etwa eine Minute.",
      steps: [
        ["APK herunterladen", "Tippe bei der gewünschten App auf „Herunterladen“. Warnt dein Browser, dass diese Dateiart schädlich sein kann, tippe auf „Trotzdem herunterladen“ / „OK“. Die Datei endet auf .apk."],
        ["Datei öffnen", "Tippe in der Download-Benachrichtigung auf „Öffnen“ oder öffne die App „Dateien“ / „Downloads“ und tippe auf die .apk-Datei."],
        ["Installation aus dieser Quelle erlauben", "Android meldet, dass dein Handy keine unbekannten Apps aus dieser Quelle installieren darf. Tippe auf „Einstellungen“ und aktiviere „Aus dieser Quelle zulassen“ für deinen Browser (oder die Dateien-App). Gehe dann mit „Zurück“ zum Installer."],
        ["„Installieren“ tippen", "Bestätige mit „Installieren“. Zeigt Google Play Protect eine Warnung zu einer unbekannten App, tippe auf „Weitere Details“ und dann auf „Trotzdem installieren“."],
        ["Öffnen und spielen", "Bei „App installiert“ tippe auf „Öffnen“. Die App liegt jetzt wie jede andere in deiner App-Liste."]
      ],
      tipsH: "Gut zu wissen",
      tips: [
        "Erscheint „App nicht installiert“, ist evtl. eine ältere, anders signierte Version auf dem Handy. Deinstalliere diese zuerst (die gespeicherten Daten gehen dabei verloren) und versuche es erneut.",
        "Update: Neue Version einfach laden und über die alte installieren.",
        "Danach kannst du „Unbekannte Apps installieren“ unter Einstellungen → Apps → Spezieller Zugriff wieder ausschalten.",
        "Die Menüs heißen je nach Hersteller etwas anders. Nutze die Suche in den Einstellungen und suche nach „unbekannte Apps“."
      ],
      riskH: "Auf eigene Gefahr", risk: "Du installierst diese Apps auf eigene Gefahr. Es sind Hobbyprojekte, bereitgestellt ohne jegliche Gewährleistung.",
      guideBtn: "Eine App laden"
    }
  };

  var FLAG = {
    de: '<svg viewBox="0 0 5 3" aria-hidden="true"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#d00"/><rect y="2" width="5" height="1" fill="#ffce00"/></svg>',
    en: '<svg viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0 0L60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0L60 30M60 0L0 30" stroke="#c8102e" stroke-width="2.5"/><path d="M30 0V30M0 15H60" stroke="#fff" stroke-width="10"/><path d="M30 0V30M0 15H60" stroke="#c8102e" stroke-width="6"/></svg>'
  };

  var q = new URLSearchParams(location.search);
  var lang = q.get("lang") || localStorage.getItem("lang") || ((navigator.language || "en").slice(0, 2) === "de" ? "de" : "en");
  if (!T[lang]) lang = "en";
  var t = T[lang], apps = window.APPS;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  function shot(a, n) {
    return '<div class="shot"><img src="shots/' + a.id + "/" + n + '.png" alt="' + esc(a.name) + " " + n +
      '" style="color:transparent;font-size:0" onload="if(this.naturalWidth>this.naturalHeight)this.parentNode.classList.add(\'land\')" onerror="this.remove()"></div>';
  }
  function setLang(l) { localStorage.setItem("lang", l); q.set("lang", l); location.search = q.toString(); }
  window.setLang = setLang;

  function header(extra) {
    return '<header><div class="topbar"><a class="brand" href="index.html">✦ ' + t.site + '</a>' +
      '<div class="flags" role="group" aria-label="Language">' +
      ["de", "en"].map(function (l) {
        return '<button type="button" class="flag' + (l === lang ? " on" : "") + '" onclick="setLang(\'' + l + '\')" aria-label="' + (l === "de" ? "Deutsch" : "English") +
          '" aria-pressed="' + (l === lang) + '" title="' + (l === "de" ? "Deutsch" : "English") + '">' + FLAG[l] + "</button>";
      }).join("") + '</div></div>' + (extra || "") + "</header>";
  }
  var noteHtml = '<p class="note">⚠ ' + esc(t.note) + "</p>";
  function appLink(a, base) { return base + "?app=" + a.id + "&lang=" + lang; }
  function href(p) { return p + (p.indexOf("?") < 0 ? "?" : "&") + "lang=" + lang; }
  function dl(a) { return "downloads/" + a.file; }

  var root = document.getElementById("root");
  var page = document.body.dataset.page;
  document.documentElement.lang = lang;

  if (page === "index") {
    document.title = t.site;
    root.innerHTML = header('<h1>' + t.h1a + " <mark>" + t.h1b + "</mark><br>" + t.h1c + "</h1>" +
      '<p class="sub">' + t.sub + "</p>" +
      '<a class="guide" href="' + href("install.html") + '"><span class="gi">📲</span><span><b>' + t.guideTitle + '</b><small>' + t.guideSub + '</small></span><span class="ga">→</span></a>' +
      noteHtml) +
      '<main><div class="grid">' + apps.map(function (a) {
        return '<article class="card" style="--c:' + a.color + '33"><h2>' + a.emoji + " " + esc(a.name) + "</h2>" + shot(a, 1) +
          "<p>" + esc(a.short[lang]) + '</p><div class="row"><a class="btn main" href="' + dl(a) + '" download>' + t.dl + '</a><a class="btn" href="' + href("app.html?app=" + a.id) + '">' + t.info + "</a></div></article>";
      }).join("") + "</div></main>";
  } else if (page === "app") {
    var a = apps.filter(function (x) { return x.id === q.get("app"); })[0] || apps[0];
    document.title = a.name + " – " + t.site;
    var sh = ""; for (var i = 1; i <= 5; i++) sh += shot(a, i);
    root.innerHTML = header(noteHtml + '<a class="back" href="' + href("index.html") + '">' + t.back + "</a>") +
      '<main><div class="detail" style="--c:' + a.color + '33"><h1>' + a.emoji + " " + esc(a.name) + '</h1><p class="ver">' + t.version + " " + a.version + "</p><p>" + esc(a.long[lang]) +
      '</p><h3>' + t.shots + '</h3><div class="gallery">' + sh + '</div><div class="row"><a class="btn main" href="' + dl(a) + '" download>' + t.dlv + a.version + '</a><a class="btn" href="' + href("install.html") + '">' + t.guideTitle + "</a></div></div></main>";
  } else if (page === "install") {
    document.title = t.guideH + " – " + t.site;
    root.innerHTML = header(noteHtml + '<a class="back" href="' + href("index.html") + '">' + t.back + "</a>") +
      '<main><div class="detail" style="--c:#ffe14d55"><h1>📲 ' + t.guideH + "</h1><p>" + t.guideIntro + '</p><ol class="steps">' +
      t.steps.map(function (s) { return "<li><b>" + s[0] + "</b><span>" + s[1] + "</span></li>"; }).join("") + "</ol>" +
      "<h3>" + t.tipsH + "</h3><ul>" + t.tips.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" +
      '<div class="warn"><b>⚠ ' + t.riskH + "</b> " + t.risk + '</div><div class="row"><a class="btn main" href="' + href("index.html") + '">' + t.guideBtn + "</a></div></div></main>";
  }
})();
