# PERFORMANCE

Budget und Umsetzung (v1, CSS-2.5D):
- Animation nur über `transform` (Compositor), keine Layout-/Paint-Animation
- 9-s-Zyklus, 86 % Ruhe, 14 % Bewegung; max. 1,5° / 3 px; keine Skalierung
- läuft nur bei Zeiger/Fokus im Bereich; pausiert bei `document.hidden` und Fensterwechsel
- `prefers-reduced-motion` → keine Animation; Schalter „Bewegung: reduziert“
- kein Canvas, kein WebGL, kein `requestAnimationFrame`, keine Timer-Schleifen
- Gesamtgröße `site/` siehe Messung unten

## Messungen
(werden beim Test ergänzt)
