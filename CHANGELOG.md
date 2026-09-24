# CHANGELOG

## 1.0.0 – Release-Kandidat (24.09.2026)
### Funktion
- Aufgabenbereich „Precision Workspace“: Absender, Betreff, Kategorien der geöffneten Nachricht; 5 Status-Aktionen (ACTION, WAITING, PROJECT, DONE, REFERENCE), nur Kategorien
- Ein Status pro Nachricht; erneuter Klick entfernt ihn; fachliche Kategorien bleiben unberührt
- Precision Lattice (CSS-2.5D): 9-s-Zyklus, 86 % Ruhe, max. 1,5° / 3 px; läuft nur bei Zeiger/Fokus; Reduced-Motion und Schalter „Bewegung: reduziert“

### Behoben nach dem ersten Realtest in Outlook
- **Veralteter Bereich nach Nachrichtenwechsel:** Manifest um `VersionOverridesV1_1` mit `SupportsPinning` erweitert (Voraussetzung für das `ItemChanged`-Ereignis). Vorher blieb der Bereich offen und zeigte weiter die zuerst geöffnete Nachricht.
- Aktion hält die Nachricht fest: Wechselt die Auswahl während einer Aktion, landen Hinzufügen und Entfernen an derselben Nachricht (Hinweis „an der zuvor geöffneten Nachricht“).
- Späte Antworten einer vorherigen Nachricht werden verworfen; beim Laden einer neuen Nachricht wird der alte Status sofort ausgeblendet und die Aktionen sind bis zum Laden gesperrt.
- Statusmeldung erscheint erst, wenn die Anzeige den neuen Stand zeigt.
- Startseite `index.html` (vorher 404 auf der Pages-Wurzel).

### Qualität
- Validator prüft zusätzlich: V1_0/V1_1-Struktur, `SupportsPinning`, Mailbox 1.5, alle `resid` definiert, Menüband-URL = SourceLocation, nur `MessageReadCommandSurface`
- E2E: 39 Prüfungen (u. a. Nachrichtenwechsel, Wettlauf beim Wechsel, Klick während Laden), Gegenproben ohne die Schutzmechanismen schlagen fehl
- GitHub Pages über Actions, CodeQL, Dependabot, Actions auf Commit-SHA gepinnt
