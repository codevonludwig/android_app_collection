// BenchPad page content (English + German). Rendered by site.js on benchpad.html.
// Files: downloads/BenchPad-1.1.apk (Android app), downloads/BenchPad-fw-1.0.bin (merged firmware image, flash at 0x0;
// unchanged since app 1.0, app 1.1 works with it).
window.BENCHPAD = {
  apk: "BenchPad-1.1.apk", bin: "BenchPad-fw-1.0.bin", version: "1.1",
  binSha: "08eaf71f990471ccbee27a46aa2233e27dd6c70f427f07ac4b2d4f600ed4d872",
  en: {
    tag: "Your phone as a wireless USB trackpad + keyboard for any device",
    intro: "BenchPad turns your Android phone into a wireless trackpad and keyboard for anything that accepts a USB mouse and keyboard: a PC across the room, a game console, a Raspberry Pi, a TV box, a lab instrument … It has two parts: a small <b>ESP32-S3 USB dongle</b> that you plug into the device, and the <b>BenchPad Android app</b> that talks to the dongle over Bluetooth Low Energy.",
    howH: "How it works",
    how: "<pre class=\"diagram\">[Android app] ──Bluetooth LE──▶ [ESP32-S3 dongle] ──USB──▶ [PC, console, Pi, TV box, instrument …]</pre>To the device the dongle is an ordinary USB keyboard + mouse: no drivers, no software to install, no Bluetooth needed on the device. It is boot-protocol compatible, so it also works in many BIOS/UEFI setup screens. All keyboard layout logic lives in the app; the dongle only plays the key and mouse reports it receives.",
    useCasesH: "Where you can use it",
    useCases: [
      "<b>PCs and laptops</b> from across the room: a media PC on the TV, a presentation (arrow keys for slides), a computer you don't want to walk over to.",
      "<b>Game consoles</b> that accept a USB keyboard and mouse: type in browsers, search fields and chats, navigate menus. Whether a game itself supports mouse and keyboard depends on the console and the game.",
      "<b>Single-board computers</b> such as a Raspberry Pi: first-time setup, a quick fix on a headless box, kiosk and display projects.",
      "<b>TVs and streaming / Android TV boxes</b> with a USB port: much faster typing of passwords and searches than with the remote.",
      "<b>Servers, NAS and mini PCs</b> in a rack or cupboard: no need to carry a keyboard and mouse over, also works in BIOS/UEFI setup.",
      "<b>Measurement and lab instruments</b> (spectrum analyzers, oscilloscopes, VNAs …) that run Windows or Linux inside – what BenchPad was originally built for.",
      "<b>Machines with an embedded PC:</b> 3D printers, CNC and industrial controllers, digital signage, info terminals, car head units and more – anything with a screen and a USB socket."
    ],
    featH: "What it can do",
    feat: [
      "<b>Trackpad:</b> move, tap to click, two-finger tap = right click, two-finger scroll (vertical and horizontal), three-finger tap = middle click, tap-and-drag, drag lock, optional button bar, volume keys as mouse buttons. Sensitivity, acceleration and scroll speed are adjustable.",
      "<b>Keys panel:</b> Esc, Tab, Enter, arrows, F1–F12, Home/End, PgUp/PgDn, Del and more; sticky modifiers (Ctrl, Shift, Alt, AltGr, Win: tap = once, double tap = locked) that also work with clicks and scrolling, e.g. Ctrl+scroll to zoom; common combos such as Ctrl+C / Ctrl+V and Ctrl+Alt+Del.",
      "<b>Text panel:</b> type or paste a longer text on the phone and send it in one go (optionally followed by Enter). US or German keyboard layout (set per dongle), three typing speeds, cancel at any time.",
      "<b>Live typing:</b> every key you type on the phone's keyboard goes straight to the device – also right on the trackpad screen (portrait): open the keyboard there and type and point at the same time.",
      "<b>Macros:</b> save sequences of text, keys and combos, pauses and mouse clicks and run them with one tap – from their own tab or as buttons in the keys panel. With repeat count and an optional “ask before running”.",
      "<b>Your own keys panel:</b> put the key groups in the order you like and hide the ones you don't need.",
      "<b>Several dongles:</b> keeps a list of known dongles with your own names and reconnects automatically to the last one.",
      "<b>Safe on disconnect:</b> if the Bluetooth link drops, the dongle releases all keys and buttons, so nothing stays pressed.",
      "Caps/Num Lock indicators, diagnostics screen, English and German, light and dark theme."
    ],
    needH: "What you need",
    need: [
      "<b>An ESP32-S3 board: Waveshare ESP32-S3-Zero</b> (or an identical clone) – see the box below.",
      "An Android phone with Android 10 or newer and Bluetooth LE. On Android 10 and 11, Location must be switched on for Bluetooth scanning (an Android rule; the app does not use your location).",
      "A USB-C to USB-A adapter or cable, because most devices have USB-A sockets.",
      "A computer (Windows, macOS or Linux) with Python 3 to flash the firmware once."
    ],
    boardH: "Which board is the firmware for?",
    board: "The firmware file is built <b>only for the Waveshare ESP32-S3-Zero</b> (chip ESP32-S3FH4R2, 4 MB flash, 2 MB PSRAM, one native USB-C port) and identical clones. It expects the WS2812 RGB status LED on GPIO21 and the BOOT button on GPIO0. It will <b>not</b> run on ESP32, ESP32-S2, ESP32-C3/C6 or other chips. Other ESP32-S3 boards with at least 4 MB flash may start, but the LED and button will probably not work – not tested.",
    dlH: "Downloads",
    dlApk: "Android app", dlBin: "Firmware for ESP32-S3-Zero",
    apkNote: "Install the app like the games: see the <a href=\"{install}\">install guide</a>.",
    binNote: "Merged image (bootloader + partition table + app), flash it at address <code>0x0</code>. Flash mode DIO, 80 MHz, 4 MB.",
    flashH: "Flashing the dongle",
    flashIntro: "You only do this once (and again for a firmware update). The board has only one USB port, which the BenchPad firmware takes over as keyboard + mouse, so the board must be put into <b>download mode</b> by hand first. There are two ways: directly in the browser (nothing to install) or with esptool on the command line.",
    webH: "Option 1: in the browser (no install)",
    webIntro: "Uses Espressif's official web flasher <a href=\"https://espressif.github.io/esptool-js/\" target=\"_blank\" rel=\"noopener\">esptool-js</a>. It needs a browser with Web Serial: <b>Chrome, Edge, Opera or another Chromium browser</b> on a computer (not Firefox, not Safari).",
    web: [
      ["Download the firmware", "Download <code>BenchPad-fw-1.0.bin</code> from the <a href=\"#downloads\">Downloads</a> above."],
      ["Put the board into download mode", "Hold the <b>BOOT</b> button, plug the board into the computer (or, if it is already plugged in, tap <b>RESET</b> while holding BOOT), then let go of BOOT. The LED stays off."],
      ["Open the web flasher and connect", "Open <a href=\"https://espressif.github.io/esptool-js/\" target=\"_blank\" rel=\"noopener\">espressif.github.io/esptool-js</a>, leave the baudrate at 921600 and click <b>Connect</b>. Pick the board in the browser's list (e.g. “USB JTAG/serial debug unit” or a <code>ttyACM</code> / <code>COM</code> port) and confirm. The log should show “ESP32-S3”."],
      ["Choose the file and address", "Set <b>Flash Address</b> to <code>0x0</code> (important – not 0x1000 or 0x10000) and choose <code>BenchPad-fw-1.0.bin</code> under <b>File</b>. Leave Flash Mode / Frequency / Size as they are."],
      ["Program", "Click <b>Program</b> and wait until the progress bar is full and the log says it has finished. Then click <b>Disconnect</b>."],
      ["Start the firmware", "Tap <b>RESET</b> (or unplug and replug the board). The LED now blinks blue or purple: BenchPad is running."]
    ],
    cliH: "Option 2: esptool on the command line",
    tipsH: "Tips",
    flash: [
      ["Install esptool", "You need Python 3. In a terminal run:<pre>pip install esptool</pre>(or <code>pipx install esptool</code>). Check it with <code>esptool version</code>."],
      ["Put the board into download mode", "Hold the <b>BOOT</b> button, plug the board into the computer (or, if it is already plugged in, tap <b>RESET</b> while holding BOOT), then let go of BOOT. The LED stays off."],
      ["Find the port", "<b>Linux:</b> usually <code>/dev/ttyACM0</code> (check with <code>ls /dev/ttyACM*</code>). If you get “permission denied”, add yourself to the <code>dialout</code> group (<code>sudo usermod -aG dialout $USER</code>, then log out and in) or, on Arch-based systems, <code>uucp</code>.<br><b>Windows:</b> a COM port, e.g. <code>COM5</code> (Device Manager → Ports).<br><b>macOS:</b> <code>/dev/cu.usbmodem…</code> (check with <code>ls /dev/cu.usbmodem*</code>)."],
      ["Flash the firmware", "In the folder with the downloaded file run (replace the port with yours):<pre>esptool --chip esp32s3 --port /dev/ttyACM0 write-flash 0x0 BenchPad-fw-1.0.bin</pre>With an older esptool (version 4 and earlier) the command is <code>esptool.py --chip esp32s3 --port /dev/ttyACM0 write_flash 0x0 BenchPad-fw-1.0.bin</code>. It should end with “Hash of data verified”."],
      ["Start the firmware", "Tap <b>RESET</b> (or unplug and replug the board). The LED now blinks blue or purple: BenchPad is running. The serial port disappears, because the board is now a USB keyboard + mouse."]
    ],
    flashTips: [
      "For a completely clean start you can erase the board first: in the browser with <b>Erase Flash</b> after Connect, or with <code>esptool --chip esp32s3 --port /dev/ttyACM0 erase-flash</code> (download mode again afterwards), then flash as above.",
      "“No serial data received” or “Failed to connect”: the board is not in download mode. Put it into download mode again and retry. No port in the browser list usually has the same cause – or a charge-only USB cable.",
      "Linux (browser and command line): if the port cannot be opened, add yourself to the <code>dialout</code> group (see step 3 of option 2).",
      "Firmware update later: same steps with the new file. Pairings may be lost; then pair the phone again.",
      "Check the download (optional): SHA-256 of BenchPad-fw-1.0.bin is <code>{sha}</code>."
    ],
    useH: "First use",
    use: [
      ["Plug in the dongle", "Plug the flashed dongle into the device you want to control. It shows up as a USB keyboard + mouse; no driver needed."],
      ["Pair", "A fresh dongle is ready to pair (LED blinks purple). Open the BenchPad app, allow Bluetooth (and on Android 10/11 location), tap your dongle <code>BenchPad-XXXX</code> and confirm pairing."],
      ["Control", "The LED turns solid green when the phone is connected and the device has accepted the USB device. Use the Trackpad, Keys and Text panes."]
    ],
    ledH: "LED and BOOT button",
    ledRows: [
      ["Blue, short blink every 2 s", "Waiting for the phone (advertising)"],
      ["Purple, fast blink", "Pairing window open – a new phone can pair"],
      ["Green, solid", "Phone connected, USB working"],
      ["Yellow, solid with short dips", "Phone connected, but USB not (yet) accepted by the device"],
      ["Red, 3 fast flashes", "All pairings deleted"]
    ],
    btnRows: [
      ["BOOT short press", "Opens the pairing window for 60 s (to pair another phone)"],
      ["BOOT held 5 s", "Deletes all pairings and opens the pairing window"]
    ],
    ledCol: ["LED", "Meaning"], btnCol: ["Button", "Effect"],
    risk: "BenchPad is a hobby project, provided as-is without any warranty. Flashing and use at your own risk. Check that USB devices are allowed on your device (e.g. at work or on lab equipment) before plugging anything in.",
    back: "← Tools"
  },
  de: {
    tag: "Dein Handy als kabelloses USB-Trackpad + Tastatur für jedes Gerät",
    intro: "BenchPad macht dein Android-Handy zu einem kabellosen Trackpad und einer Tastatur für alles, was eine USB-Maus und -Tastatur annimmt: ein PC am anderen Ende des Raums, eine Spielkonsole, ein Raspberry Pi, eine TV-Box, ein Messgerät … Es besteht aus zwei Teilen: einem kleinen <b>ESP32-S3-USB-Dongle</b>, den du in das Gerät steckst, und der <b>BenchPad-Android-App</b>, die per Bluetooth Low Energy mit dem Dongle spricht.",
    howH: "So funktioniert es",
    how: "<pre class=\"diagram\">[Android-App] ──Bluetooth LE──▶ [ESP32-S3-Dongle] ──USB──▶ [PC, Konsole, Pi, TV-Box, Messgerät …]</pre>Für das Gerät ist der Dongle eine ganz normale USB-Tastatur + Maus: keine Treiber, keine Software, kein Bluetooth am Gerät nötig. Er ist Boot-Protokoll-kompatibel und funktioniert daher auch in vielen BIOS-/UEFI-Setups. Die gesamte Tastaturlayout-Logik steckt in der App; der Dongle spielt nur die empfangenen Tasten- und Mausdaten ab.",
    useCasesH: "Wofür du es nutzen kannst",
    useCases: [
      "<b>PCs und Laptops</b> vom anderen Ende des Raums: ein Medien-PC am Fernseher, eine Präsentation (Pfeiltasten für die Folien), ein Rechner, zu dem du nicht hinlaufen willst.",
      "<b>Spielkonsolen</b>, die eine USB-Tastatur und -Maus annehmen: Tippen in Browser, Suchfeldern und Chats, Menüs bedienen. Ob ein Spiel selbst Maus und Tastatur unterstützt, hängt von Konsole und Spiel ab.",
      "<b>Einplatinencomputer</b> wie der Raspberry Pi: Ersteinrichtung, schnelle Korrekturen an einem Gerät ohne Tastatur, Kiosk- und Anzeigeprojekte.",
      "<b>Fernseher und Streaming- / Android-TV-Boxen</b> mit USB-Anschluss: Passwörter und Suchen viel schneller eintippen als mit der Fernbedienung.",
      "<b>Server, NAS und Mini-PCs</b> im Rack oder Schrank: keine Tastatur und Maus mehr hintragen, funktioniert auch im BIOS-/UEFI-Setup.",
      "<b>Mess- und Laborgeräte</b> (Spektrumanalysatoren, Oszilloskope, Netzwerkanalysatoren …), die intern mit Windows oder Linux laufen – dafür wurde BenchPad ursprünglich gebaut.",
      "<b>Maschinen mit eingebautem PC:</b> 3D-Drucker, CNC- und Industriesteuerungen, Digital Signage, Infoterminals, Autoradios und mehr – alles mit Bildschirm und USB-Buchse."
    ],
    featH: "Was es kann",
    feat: [
      "<b>Trackpad:</b> bewegen, Tippen = Klick, Zwei-Finger-Tippen = Rechtsklick, Zwei-Finger-Scrollen (senkrecht und waagerecht), Drei-Finger-Tippen = Mittelklick, Tippen-und-Ziehen, Zieh-Sperre, optionale Tastenleiste, Lautstärketasten als Maustasten. Empfindlichkeit, Beschleunigung und Scrollgeschwindigkeit sind einstellbar.",
      "<b>Tasten-Bereich:</b> Esc, Tab, Enter, Pfeile, F1–F12, Pos1/Ende, Bild↑/Bild↓, Entf und mehr; einrastende Modifier (Strg, Umschalt, Alt, AltGr, Win: einmal tippen = einmal, doppelt = gesperrt), die auch mit Klicks und Scrollen funktionieren, z. B. Strg+Scrollen zum Zoomen; gängige Kombinationen wie Strg+C / Strg+V und Strg+Alt+Entf.",
      "<b>Text-Bereich:</b> längeren Text auf dem Handy tippen oder einfügen und in einem Rutsch senden (optional mit Enter danach). US- oder deutsches Tastaturlayout (pro Dongle einstellbar), drei Tippgeschwindigkeiten, jederzeit abbrechbar.",
      "<b>Live-Tippen:</b> jede Taste, die du auf der Handytastatur tippst, geht direkt ans Gerät – auch direkt im Trackpad (Hochformat): Tastatur dort öffnen und gleichzeitig tippen und zeigen.",
      "<b>Makros:</b> Abfolgen aus Text, Tasten und Kombinationen, Pausen und Mausklicks speichern und mit einem Tipp abspielen – im eigenen Tab oder als Tasten im Tasten-Bereich. Mit Wiederholungen und optionaler Rückfrage vor dem Start.",
      "<b>Eigener Tasten-Bereich:</b> Tastengruppen in die gewünschte Reihenfolge bringen und nicht benötigte ausblenden.",
      "<b>Mehrere Dongles:</b> Liste bekannter Dongles mit eigenen Namen, verbindet sich automatisch mit dem zuletzt genutzten.",
      "<b>Sicher bei Verbindungsabbruch:</b> reißt die Bluetooth-Verbindung ab, lässt der Dongle alle Tasten und Maustasten los – nichts bleibt gedrückt.",
      "Anzeige für Feststell-/Num-Taste, Diagnose-Bildschirm, Deutsch und Englisch, helles und dunkles Design."
    ],
    needH: "Was du brauchst",
    need: [
      "<b>Ein ESP32-S3-Board: Waveshare ESP32-S3-Zero</b> (oder ein baugleicher Klon) – siehe Kasten unten.",
      "Ein Android-Handy mit Android 10 oder neuer und Bluetooth LE. Unter Android 10 und 11 muss für die Bluetooth-Suche der Standort eingeschaltet sein (eine Android-Vorgabe; die App nutzt deinen Standort nicht).",
      "Einen USB-C-auf-USB-A-Adapter oder ein Kabel, denn die meisten Geräte haben USB-A-Buchsen.",
      "Einen Computer (Windows, macOS oder Linux) mit Python 3, um die Firmware einmal aufzuspielen."
    ],
    boardH: "Für welches Board ist die Firmware?",
    board: "Die Firmware-Datei ist <b>nur für das Waveshare ESP32-S3-Zero</b> gebaut (Chip ESP32-S3FH4R2, 4 MB Flash, 2 MB PSRAM, ein nativer USB-C-Anschluss) und baugleiche Klone. Sie erwartet die WS2812-RGB-Status-LED an GPIO21 und die BOOT-Taste an GPIO0. Sie läuft <b>nicht</b> auf ESP32, ESP32-S2, ESP32-C3/C6 oder anderen Chips. Andere ESP32-S3-Boards mit mindestens 4 MB Flash starten eventuell, aber LED und Taste funktionieren dann wahrscheinlich nicht – nicht getestet.",
    dlH: "Downloads",
    dlApk: "Android-App", dlBin: "Firmware für ESP32-S3-Zero",
    apkNote: "Die App installierst du wie die Spiele: siehe <a href=\"{install}\">Installationsanleitung</a>.",
    binNote: "Komplettes Image (Bootloader + Partitionstabelle + App), an Adresse <code>0x0</code> flashen. Flash-Modus DIO, 80 MHz, 4 MB.",
    flashH: "Dongle flashen",
    flashIntro: "Das machst du nur einmal (und erneut bei einem Firmware-Update). Das Board hat nur einen USB-Anschluss, den die BenchPad-Firmware als Tastatur + Maus übernimmt. Deshalb musst du das Board vorher von Hand in den <b>Download-Modus</b> bringen. Es gibt zwei Wege: direkt im Browser (nichts zu installieren) oder mit esptool auf der Kommandozeile.",
    webH: "Weg 1: im Browser (ohne Installation)",
    webIntro: "Nutzt den offiziellen Web-Flasher von Espressif, <a href=\"https://espressif.github.io/esptool-js/\" target=\"_blank\" rel=\"noopener\">esptool-js</a>. Dafür brauchst du einen Browser mit Web Serial: <b>Chrome, Edge, Opera oder einen anderen Chromium-Browser</b> auf einem Computer (nicht Firefox, nicht Safari).",
    web: [
      ["Firmware herunterladen", "Lade <code>BenchPad-fw-1.0.bin</code> oben unter <a href=\"#downloads\">Downloads</a> herunter."],
      ["Board in den Download-Modus bringen", "<b>BOOT</b>-Taste gedrückt halten, Board an den Computer anstecken (oder, wenn es schon steckt, bei gehaltener BOOT-Taste kurz <b>RESET</b> drücken), dann BOOT loslassen. Die LED bleibt aus."],
      ["Web-Flasher öffnen und verbinden", "Öffne <a href=\"https://espressif.github.io/esptool-js/\" target=\"_blank\" rel=\"noopener\">espressif.github.io/esptool-js</a>, lass die Baudrate auf 921600 und klicke <b>Connect</b>. Wähle das Board in der Liste des Browsers (z. B. „USB JTAG/serial debug unit“ oder einen <code>ttyACM</code>- / <code>COM</code>-Port) und bestätige. Im Log sollte „ESP32-S3“ stehen."],
      ["Datei und Adresse wählen", "Setze <b>Flash Address</b> auf <code>0x0</code> (wichtig – nicht 0x1000 oder 0x10000) und wähle unter <b>File</b> die Datei <code>BenchPad-fw-1.0.bin</code>. Flash Mode / Frequency / Size so lassen."],
      ["Programmieren", "Klicke <b>Program</b> und warte, bis der Fortschrittsbalken voll ist und das Log das Ende meldet. Dann <b>Disconnect</b> klicken."],
      ["Firmware starten", "Kurz <b>RESET</b> drücken (oder Board ab- und wieder anstecken). Die LED blinkt jetzt blau oder lila: BenchPad läuft."]
    ],
    cliH: "Weg 2: esptool auf der Kommandozeile",
    tipsH: "Tipps",
    flash: [
      ["esptool installieren", "Du brauchst Python 3. Im Terminal:<pre>pip install esptool</pre>(oder <code>pipx install esptool</code>). Prüfen mit <code>esptool version</code>."],
      ["Board in den Download-Modus bringen", "<b>BOOT</b>-Taste gedrückt halten, Board an den Computer anstecken (oder, wenn es schon steckt, bei gehaltener BOOT-Taste kurz <b>RESET</b> drücken), dann BOOT loslassen. Die LED bleibt aus."],
      ["Port finden", "<b>Linux:</b> meist <code>/dev/ttyACM0</code> (prüfen mit <code>ls /dev/ttyACM*</code>). Bei „Permission denied“ dich zur Gruppe <code>dialout</code> hinzufügen (<code>sudo usermod -aG dialout $USER</code>, dann ab- und wieder anmelden) bzw. bei Arch-basierten Systemen <code>uucp</code>.<br><b>Windows:</b> ein COM-Port, z. B. <code>COM5</code> (Geräte-Manager → Anschlüsse).<br><b>macOS:</b> <code>/dev/cu.usbmodem…</code> (prüfen mit <code>ls /dev/cu.usbmodem*</code>)."],
      ["Firmware flashen", "Im Ordner mit der heruntergeladenen Datei ausführen (Port durch deinen ersetzen):<pre>esptool --chip esp32s3 --port /dev/ttyACM0 write-flash 0x0 BenchPad-fw-1.0.bin</pre>Mit einem älteren esptool (Version 4 und früher) lautet der Befehl <code>esptool.py --chip esp32s3 --port /dev/ttyACM0 write_flash 0x0 BenchPad-fw-1.0.bin</code>. Am Ende sollte „Hash of data verified“ stehen."],
      ["Firmware starten", "Kurz <b>RESET</b> drücken (oder Board ab- und wieder anstecken). Die LED blinkt jetzt blau oder lila: BenchPad läuft. Der serielle Port verschwindet, weil das Board jetzt eine USB-Tastatur + Maus ist."]
    ],
    flashTips: [
      "Für einen ganz sauberen Start kannst du das Board vorher löschen: im Browser nach Connect mit <b>Erase Flash</b> oder mit <code>esptool --chip esp32s3 --port /dev/ttyACM0 erase-flash</code> (danach wieder Download-Modus), dann wie oben flashen.",
      "„No serial data received“ oder „Failed to connect“: Das Board ist nicht im Download-Modus. Erneut in den Download-Modus bringen und nochmal versuchen. Erscheint im Browser kein Port in der Liste, ist meist dasselbe die Ursache – oder ein reines Ladekabel.",
      "Linux (Browser und Kommandozeile): Lässt sich der Port nicht öffnen, dich zur Gruppe <code>dialout</code> hinzufügen (siehe Schritt 3 von Weg 2).",
      "Späteres Firmware-Update: gleiche Schritte mit der neuen Datei. Kopplungen können dabei verloren gehen; dann das Handy neu koppeln.",
      "Download prüfen (optional): SHA-256 von BenchPad-fw-1.0.bin ist <code>{sha}</code>."
    ],
    useH: "Erste Benutzung",
    use: [
      ["Dongle einstecken", "Den geflashten Dongle in das Gerät stecken, das du bedienen willst. Er meldet sich als USB-Tastatur + Maus; kein Treiber nötig."],
      ["Koppeln", "Ein frischer Dongle ist kopplungsbereit (LED blinkt lila). BenchPad-App öffnen, Bluetooth (und unter Android 10/11 Standort) erlauben, deinen Dongle <code>BenchPad-XXXX</code> antippen und die Kopplung bestätigen."],
      ["Bedienen", "Die LED leuchtet dauerhaft grün, wenn das Handy verbunden ist und das Gerät den Dongle angenommen hat. Nutze die Bereiche Trackpad, Tasten und Text."]
    ],
    ledH: "LED und BOOT-Taste",
    ledRows: [
      ["Blau, kurzes Blinken alle 2 s", "Wartet auf das Handy"],
      ["Lila, schnelles Blinken", "Kopplungsfenster offen – ein neues Handy kann koppeln"],
      ["Grün, dauerhaft", "Handy verbunden, USB läuft"],
      ["Gelb, dauerhaft mit kurzen Aussetzern", "Handy verbunden, aber USB vom Gerät (noch) nicht angenommen"],
      ["Rot, 3× schnell", "Alle Kopplungen gelöscht"]
    ],
    btnRows: [
      ["BOOT kurz drücken", "Öffnet das Kopplungsfenster für 60 s (um ein weiteres Handy zu koppeln)"],
      ["BOOT 5 s halten", "Löscht alle Kopplungen und öffnet das Kopplungsfenster"]
    ],
    ledCol: ["LED", "Bedeutung"], btnCol: ["Taste", "Wirkung"],
    risk: "BenchPad ist ein Hobbyprojekt, bereitgestellt ohne jegliche Gewährleistung. Flashen und Nutzung auf eigene Gefahr. Prüfe vor dem Einstecken, ob USB-Geräte an deinem Gerät erlaubt sind (z. B. bei der Arbeit oder an Laborgeräten).",
    back: "← Werkzeuge"
  }
};
