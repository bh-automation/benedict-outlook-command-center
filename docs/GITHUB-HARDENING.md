# GitHub-Härtung

Reihenfolge so gewählt, dass der Besitzer sich beim Erst-Setup nicht aussperrt.

1. **Pages:** Settings → Pages → Source = **GitHub Actions**.
2. **Environment `github-pages`:** Deployment-Branches auf `main` begrenzen (wird von Pages automatisch angelegt).
3. **Ruleset für `main`** (Settings → Rules → Rulesets → New branch ruleset, Ziel: Default branch):
   - Restrict deletions ✔
   - Block force pushes ✔
   - Require linear history ✔
   - Require status checks to pass: `validate` (Workflow Validate) und `Analyze`/`analyze` (CodeQL) – erst nach dem ersten erfolgreichen Lauf auswählbar
   - Require a pull request before merging: optional; bei Ein-Personen-Repo ohne Pflicht-Review (0 Approvals), sonst Aussperrung
4. **Code security:** Dependabot alerts ✔, Dependabot security updates ✔, Secret scanning ✔, Push protection ✔ (bei öffentlichen Repos kostenlos).
5. **Actions:** Settings → Actions → General → „Allow actions created by GitHub“ (nur `actions/*`, `github/*`); Workflow permissions = **Read repository contents**.
6. **Konto:** Zwei-Faktor-Authentifizierung für das GitHub-Konto aktivieren (macht der Besitzer selbst).
