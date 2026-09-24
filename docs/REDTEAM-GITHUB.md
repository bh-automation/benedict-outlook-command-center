# Red Team – GitHub/Hosting (25 Punkte × 0/1/2 = 50, Freigabe ≥ 46, 0 kritische Fehler)

Stand: 24.09.2026, vor Veröffentlichung von 1.0.0. Endergebnis steht in den Release-Notes von v1.0.0.

| # | Prüfung | Punkte | Beleg |
|---|---|---|---|
| 1 | Repository enthält keine Maildaten/Adressen | 2 | Validator: keine E-Mail-Adressen in `site/`; Screenshots und Tests nur mit fiktiven Daten („Muster, Max“, `example.invalid`) |
| 2 | Keine Geheimnisse (Validator + Secret Scanning) | 2 | Validator-Muster; Secret scanning + Push protection aktiv |
| 3 | Pages nur über Actions nach Validierung | 2 | `pages.yml`: validate → build → deploy (`needs`) |
| 4 | HTTPS erzwungen | 2 | github.io erzwingt HTTPS; alle Manifest-URLs HTTPS (Validator) |
| 5 | Manifest: nur eine Herkunft, nur HTTPS | 2 | Validator |
| 6 | Berechtigung = ReadWriteItem | 2 | Validator; Installationshinweis in Outlook nannte keine weitergehende Berechtigung |
| 7 | Einziges externes Skript = Office.js | 2 | Validator + E2E (Netzwerkmitschnitt) |
| 8 | CSP aktiv, kein Inline-Skript | 2 | Meta-CSP `default-src 'none'`; E2E zeigt, dass die CSP String-Auswertung blockiert |
| 9 | Keine Netzwerk-APIs im Code | 2 | Validator (fetch, XHR, sendBeacon, WebSocket, EventSource) |
| 10 | Keine Analytics/Web-Fonts | 2 | Validator |
| 11 | Actions auf Commit-SHA gepinnt | 2 | Validator; Actions-Richtlinie „SHA-Pinning Pflicht“ |
| 12 | Nur actions/* und github/* | 2 | Validator; Actions-Richtlinie „nur GitHub-eigene Actions“ |
| 13 | Workflow-Rechte minimal | 2 | `permissions` je Job; GITHUB_TOKEN standardmäßig read; `persist-credentials: false` |
| 14 | CodeQL ohne offene Befunde | 2 | CodeQL #1 grün, 0 Alerts (nach neuem Push erneut prüfen) |
| 15 | Dependabot aktiv | 2 | Alerts + Security updates aktiv, Version updates für Actions (Läufe #1/#2 grün) |
| 16 | Ruleset main: kein Force-Push, kein Löschen | offen | Anlegen durch Besitzer (Weboberfläche verweigerte die Aktion aus der Automatisierung) |
| 17 | Pflicht-Statuscheck | 1 | Deployment ist an Validierung gebunden; Push-Pflichtcheck bewusst nicht gesetzt (würde Web-Upload im Ein-Personen-Repo blockieren) |
| 18 | Lineare Historie | offen | Teil des Rulesets |
| 19 | Besitzer nicht ausgesperrt | 2 | Ruleset ohne Status-/PR-Pflicht → direkte Commits bleiben möglich |
| 20 | 2FA am Konto (Besitzer) | 0 | Kontoeinstellungen (gelesen 24.09.2026): „not enabled yet“ → Empfehlung: aktivieren (nur durch den Besitzer) |
| 21 | Pages-URL lädt ohne Mixed Content | 2 | nur HTTPS-/relative URLs, kein `http://` (Validator) |
| 22 | Keine unerwarteten Netzwerkanfragen | 2 | E2E: einzige externe Anfrage = Office.js |
| 23 | Rollback dokumentiert und getestet | offen | dokumentiert; Test = Add-in entfernen und neu installieren nach Veröffentlichung |
| 24 | Tag v1.0.0 gesetzt | offen | letzter Schritt (Release) |
| 25 | Doku vollständig (README, SECURITY, PERMISSIONS, PERFORMANCE, ROLLBACK) | 2 | vorhanden, dazu CHANGELOG, INSTALLATION-LOG, Recherche, Plattform |

Zwischenstand: **39/50**, 4 Prüfungen offen (max. 8 Punkte → höchstens 47, mit 2FA 49). Ohne Ruleset höchstens 43 → Ruleset ist Pflicht für die Freigabe.

Kritisch: Geheimnis im Repo · Maildaten veröffentlicht · Rechte > ReadWriteItem · fremdes Skript/CDN · Deployment ohne Validierung → **keiner gefunden**.
