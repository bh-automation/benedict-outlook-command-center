# Red Team – GitHub/Hosting (25 Punkte × 0/1/2 = 50, Freigabe ≥ 46, 0 kritische Fehler)

| # | Prüfung | Punkte | Beleg |
|---|---|---|---|
| 1 | Repository enthält keine Maildaten/Adressen | | |
| 2 | Keine Geheimnisse (Validator + Secret Scanning) | | |
| 3 | Pages nur über Actions nach Validierung | | |
| 4 | HTTPS erzwungen | | |
| 5 | Manifest: nur eine Herkunft, nur HTTPS | | |
| 6 | Berechtigung = ReadWriteItem | | |
| 7 | Einziges externes Skript = Office.js | | |
| 8 | CSP aktiv, kein Inline-Skript | | |
| 9 | Keine Netzwerk-APIs im Code | | |
| 10 | Keine Analytics/Web-Fonts | | |
| 11 | Actions auf Commit-SHA gepinnt | | |
| 12 | Nur actions/* und github/* | | |
| 13 | Workflow-Rechte minimal | | |
| 14 | CodeQL ohne offene Befunde | | |
| 15 | Dependabot aktiv | | |
| 16 | Ruleset main: kein Force-Push, kein Löschen | | |
| 17 | Pflicht-Statuscheck | | |
| 18 | Lineare Historie | | |
| 19 | Besitzer nicht ausgesperrt | | |
| 20 | 2FA am Konto (Besitzer) | | |
| 21 | Pages-URL lädt ohne Mixed Content | | |
| 22 | Keine unerwarteten Netzwerkanfragen | | |
| 23 | Rollback dokumentiert und getestet | | |
| 24 | Tag v1.0.0 gesetzt | | |
| 25 | Doku vollständig (README, SECURITY, PERMISSIONS, PERFORMANCE, ROLLBACK) | | |

Kritisch: Geheimnis im Repo · Maildaten veröffentlicht · Rechte > ReadWriteItem · fremdes Skript/CDN · Deployment ohne Validierung.
