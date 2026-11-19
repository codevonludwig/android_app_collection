(function () {
  var T = {
    en: {
      site: "Claude Code Apps",
      note: "Made with Claude Code. Install at your own risk.",
      h1a: "Free", h1b: "apps", h1c: "for Android.",
      sub: "Tap a card, grab the APK, play.",
      landSub: "Free Android games and handy tools, made with Claude Code.",
      games: "Games", gamesSub: "Puzzles, cards and arcade – free APKs for Android.",
      tools: "Tools", toolsSub: "Useful helpers: BenchPad (phone as USB trackpad + keyboard) and PhoneHub (all your phone's stats).",
      toolsH: "Tools", toolsIntro: "Small hobby tools. Some come with hardware – open a tool for the full description and downloads.",
      home: "Home", apps: "apps", app: "app", h1: "Free apps for Android", backTools: "← Tools", open: "Open", dlApp: "Download app", dlFw: "Download firmware",
      dl: "Download", info: "Info", back: "← All games", version: "Version",
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
      guideBtn: "To the apps"
    },
    de: {
      site: "Claude Code Apps",
      note: "Mit Claude Code erstellt. Installation auf eigene Gefahr.",
      h1a: "Gratis", h1b: "Apps", h1c: "für Android.",
      sub: "Karte antippen, APK laden, spielen.",
      landSub: "Gratis Android-Spiele und nützliche Werkzeuge, mit Claude Code erstellt.",
      games: "Spiele", gamesSub: "Rätsel, Karten und Arcade – gratis APKs für Android.",
      tools: "Werkzeuge", toolsSub: "Nützliche Helfer: BenchPad (Handy als USB-Trackpad + Tastatur) und PhoneHub (alle Werte deines Handys).",
      toolsH: "Werkzeuge", toolsIntro: "Kleine Hobby-Werkzeuge. Manche gehören zu Hardware – öffne ein Werkzeug für die ganze Beschreibung und die Downloads.",
      home: "Start", apps: "Apps", app: "App", h1: "Gratis-Apps für Android", backTools: "← Werkzeuge", open: "Öffnen", dlApp: "App herunterladen", dlFw: "Firmware herunterladen",
      dl: "Herunterladen", info: "Info", back: "← Alle Spiele", version: "Version",
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
      guideBtn: "Zu den Apps"
    }
  };

  var ICON = {
    puzzle: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><path d="M17.25 14v6.5M14 17.25h6.5"/>',
    logic: '<rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>',
    cards: '<rect x="3.5" y="5.5" width="10" height="14" rx="2" transform="rotate(-8 8.5 12.5)"/><rect x="10.5" y="4.5" width="10" height="14" rx="2" transform="rotate(8 15.5 11.5)"/>',
    arcade: '<rect x="2" y="7" width="20" height="11" rx="5.5"/><path d="M7.5 10.5v4M5.5 12.5h4"/><circle cx="15" cy="13.8" r=".6"/><circle cx="17.6" cy="11.2" r=".6"/>',
    tools: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    install: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14"/>',
    dl: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14"/>'
  };
  function icon(n) { return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[n] + "</svg>"; }

  var q = new URLSearchParams(location.search);
  var stored = null; try { stored = localStorage.getItem("lang"); } catch (e) {}
  var lang = q.get("lang") || stored || ((navigator.language || "en").slice(0, 2) === "de" ? "de" : "en");
  if (!T[lang]) lang = "en";
  var t = T[lang], CATS = window.CATS, all = window.APPS.concat(window.TOOLS);
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  function shot(a, n) {
    return '<div class="shot"><img loading="lazy" src="shots/' + a.id + "/" + n + '.png" alt="' + esc(a.name) + " " + n +
      '" onload="if(this.naturalWidth>this.naturalHeight)this.parentNode.classList.add(\'land\')" onerror="this.parentNode.remove()"></div>';
  }
  window.setLang = function (l) { try { localStorage.setItem("lang", l); } catch (e) {} q.set("lang", l); location.search = q.toString(); };

  function href(p) { return p + (p.indexOf("?") < 0 ? "?" : "&") + "lang=" + lang; }
  function dl(a) { return "downloads/" + a.file; }
  function inCat(id) { return all.filter(function (a) { return a.cat === id; }); }
  function catOf(id) { return CATS.filter(function (c) { return c.id === id; })[0]; }
  function detailHref(a) { return href(a.page || "app.html?app=" + a.id); }

  // Top bar: brand, optional back link, language switch.
  function header(back) {
    return '<header class="top"><div class="bar">' +
      (back ? '<a class="backl" href="' + href(back[0]) + '"><span aria-hidden="true">‹</span> ' + esc(back[1]) + "</a>"
            : '<a class="brand" href="' + href("index.html") + '">' + t.site + "</a>") +
      '<div class="lang" role="group" aria-label="Language">' +
      ["de", "en"].map(function (l) {
        return '<button type="button"' + (l === lang ? ' class="on"' : "") + ' onclick="setLang(\'' + l + '\')" aria-pressed="' + (l === lang) +
          '" aria-label="' + (l === "de" ? "Deutsch" : "English") + '">' + l.toUpperCase() + "</button>";
      }).join("") + "</div></div></header>";
  }
  var foot = '<footer class="foot">' + esc(t.note) + "</footer>";
  function steps(l) { return '<ol class="steps">' + l.map(function (s) { return "<li><b>" + s[0] + "</b><span>" + s[1] + "</span></li>"; }).join("") + "</ol>"; }
  function list(l) { return "<ul>" + l.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }

  var root = document.getElementById("root");
  var page = document.body.dataset.page;
  document.documentElement.lang = lang;

  // Old addresses: games.html / tools.html now live on the landing page.
  if (page === "games" || page === "tools") { location.replace(href(page === "tools" ? "cat.html?c=tools" : "index.html")); return; }

  if (page === "index") {
    document.title = t.site;
    root.innerHTML = header() + '<main><h1 class="hero">' + t.h1 + '</h1><div class="cats">' +
      CATS.map(function (c) {
        var l = inCat(c.id);
        return '<a class="tile" href="' + href("cat.html?c=" + c.id) + '">' + icon(c.id) + "<b>" + esc(c.name[lang]) + "</b><small>" +
          l.map(function (a) { return esc(a.name); }).join(", ") + '</small><span class="count">' + l.length + "</span></a>";
      }).join("") +
      '<a class="tile alt" href="' + href("install.html") + '">' + icon("install") + "<b>" + t.guideTitle + "</b><small>" + t.guideSub + "</small></a>" +
      "</div></main>" + foot;
  } else if (page === "cat") {
    var c = catOf(q.get("c")) || CATS[0], apps = inCat(c.id);
    document.title = c.name[lang] + " – " + t.site;
    root.innerHTML = header(["index.html", t.home]) + '<main><h1 class="pt">' + icon(c.id) + esc(c.name[lang]) + '</h1><div class="list">' +
      apps.map(function (a) {
        return '<article class="item"><a class="main" href="' + detailHref(a) + '"><span class="emo" aria-hidden="true">' + a.emoji + "</span><span><b>" + esc(a.name) +
          ' <i>' + a.version + "</i></b><small>" + esc(a.short[lang]) + "</small></span></a>" +
          (a.file ? '<a class="get" href="' + dl(a) + '" download aria-label="' + t.dl + " " + esc(a.name) + '" title="' + t.dl + '">' + icon("dl") + "</a>"
                  : '<a class="get" href="' + detailHref(a) + '" aria-label="' + t.open + " " + esc(a.name) + '" title="' + t.open + '"><span aria-hidden="true">›</span></a>') +
          "</article>";
      }).join("") + "</div></main>" + foot;
  } else if (page === "benchpad") {
    var B = window.BENCHPAD, b = B[lang];
    document.title = "BenchPad – " + t.site;
    var table = function (cols, rows) { return '<div class="tblw"><table class="tbl"><tr><th>' + cols[0] + "</th><th>" + cols[1] + "</th></tr>" + rows.map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("") + "</table></div>"; };
    var dlBox = function (file, label, note, btn) {
      return '<div class="dlbox"><b>' + label + '</b><code>' + file + '</code><small>' + note + '</small><a class="btn main" href="downloads/' + file + '" download>' + btn + "</a></div>";
    };
    root.innerHTML = header(["cat.html?c=tools", catOf("tools").name[lang]]) +
      '<main class="detail"><h1 class="pt"><span class="emo" aria-hidden="true">🖱️</span>BenchPad</h1><p class="ver">' + t.version + " " + B.version + " · " + b.tag + "</p><p>" + b.intro + "</p>" +
      '<div class="row"><a class="btn main" href="#downloads">' + b.dlH + '</a><a class="btn" href="#flash">' + b.flashH + "</a></div>" +
      "<h3>" + b.howH + "</h3><p>" + b.how + "</p>" +
      "<h3>" + b.useCasesH + "</h3>" + list(b.useCases) +
      "<h3>" + b.featH + "</h3>" + list(b.feat) +
      "<h3>" + b.needH + "</h3>" + list(b.need) +
      '<div class="board"><b>' + b.boardH + "</b> " + b.board + "</div>" +
      '<h3 id="downloads">' + b.dlH + '</h3><div class="dls">' +
      dlBox(B.apk, b.dlApk, b.apkNote.replace("{install}", href("install.html")), t.dlApp) +
      dlBox(B.bin, b.dlBin, b.binNote, t.dlFw) + "</div>" +
      '<h3 id="flash">' + b.flashH + "</h3><p>" + b.flashIntro + "</p>" +
      "<h4>" + b.webH + "</h4><p>" + b.webIntro + "</p>" + steps(b.web) +
      "<h4>" + b.cliH + "</h4>" + steps(b.flash) + "<h4>" + b.tipsH + "</h4>" + list(b.flashTips.map(function (x) { return x.replace("{sha}", B.binSha); })) +
      "<h3>" + b.useH + "</h3>" + steps(b.use) +
      "<h3>" + b.ledH + "</h3>" + table(b.ledCol, b.ledRows) + table(b.btnCol, b.btnRows) +
      '<div class="warn"><b>' + t.riskH + ".</b> " + b.risk + "</div></main>" + foot;
  } else if (page === "app") {
    var a = all.filter(function (x) { return x.id === q.get("app") && x.file && x.long; })[0] || window.APPS[0];
    document.title = a.name + " – " + t.site;
    var sh = ""; for (var i = 1; i <= 5; i++) sh += shot(a, i);
    root.innerHTML = header(["cat.html?c=" + a.cat, catOf(a.cat).name[lang]]) +
      '<main class="detail"><h1 class="pt"><span class="emo" aria-hidden="true">' + a.emoji + "</span>" + esc(a.name) + '</h1><p class="ver">' + t.version + " " + a.version + "</p>" +
      '<div class="row"><a class="btn main" href="' + dl(a) + '" download>' + icon("dl") + t.dl + '</a><a class="btn" href="' + href("install.html") + '">' + t.guideTitle + "</a></div>" +
      "<p>" + esc(a.long[lang]) + '</p><h3>' + t.shots + '</h3><div class="gallery">' + sh + "</div></main>" + foot;
  } else if (page === "install") {
    document.title = t.guideH + " – " + t.site;
    root.innerHTML = header(["index.html", t.home]) +
      '<main class="detail"><h1 class="pt">' + icon("install") + t.guideH + "</h1><p>" + t.guideIntro + "</p>" + steps(t.steps) +
      "<h3>" + t.tipsH + "</h3>" + list(t.tips) +
      '<div class="warn"><b>' + t.riskH + ".</b> " + t.risk + '</div><div class="row"><a class="btn main" href="' + href("index.html") + '">' + t.guideBtn + "</a></div></main>" + foot;
  }
})();
