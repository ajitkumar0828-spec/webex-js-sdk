# Contact Center SonarCloud change log — 2026-10-28

All repository changes target the user's fork and next branch. Setup commits use [skip ci].
Application implementation and lockfiles are outside this change.

| File | Change and reason |
|---|---|
| sonar-project.properties | Target cisco-projects/ajitkumar0828-spec_webex-js-sdk; restrict production/test roots, UTF-8, TS configs and LCOV. |
| .github/workflows/build.yml | Manual-only, fork/next guard, full history, pinned Node/Yarn, locked install, builds, coverage, official scanner, processing verification and report artifacts. |
| scripts/sonar/coverage.cjs | Run original workspace unit commands, preserve exit status and isolate coverage output. |
| scripts/sonar/report.py | Validate scope and LCOV, verify server commit/main branch, paginate exports, escape CSV, record metrics/gate/warnings. |
| scripts/sonar/test_report.py | Validate multi-page export, duplicate detection, CSV quoting/formulas and same-named LCOV sources. |
| docs/sonar-contact-center.md | Explain scope, commands, failure semantics and report interpretation. |
| docs/sonar-change-log.md | Maintain this file/setting/execution audit. |
| packages/@webex/contact-center/jest.config.js | SONAR_COVERAGE opt-in includes untested sources; retain 85% thresholds and normal test configuration. |
| reports/sonar/baseline-2026-10-28/* | Preserve historical whole-repo Markdown/CSV/JSON before narrowing scope; explicitly non-comparable. |

| Setting | Before | After / verification |
|---|---|---|
| Sonar automatic analysis | On | Off; changed in project Analysis method on 2026-10-28. |
| Sonar main branch | next | next; verified isMain=true via API. |
| Project organization | cisco-projects dashboard | cisco-projects retained. |
| Quality gate | Sonar way | Retained. |
| New-code definition | Existing project setting | Retained. |
| Analysis trigger | push next and pull_request, plus automatic | Manual workflow only. |
| Runtime | No dependency/test runtime in scanner workflow | Node 22.14.0, Yarn 3.4.1. |
| GitHub SONAR_TOKEN | Existing secret, authorization to be checked by scanner | Credential values never recorded; execution evidence below tracks authorization. |

## Execution evidence

Base fork next: `ec6e23e8155f237aab03825335c3a9c609bbfbe4`.
Configuration commit and workflow run URLs are added after publication.
Local isolated validation: 1,404 tests in 42 suites passed; LCOV normalized successfully.

Snapshots of settings and final downloaded run evidence are retained locally under reports/sonar.

## Published setup commits

The system Git account was denied push access (403). With explicit user approval, the same tested files were committed using the signed-in Chrome account. Every setup commit includes [skip ci].

- [bcfcf83b62](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/bcfcf83b6285f57ec5688367ce42dfcea6d02443) — chore(sonar): make SDK scans manual with coverage and reports [skip ci]
- [85b510017d](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/85b510017d5ce3d40cd37257a86935f59a668f40) — chore(sonar): restrict SDK analysis to Contact Center [skip ci]
- [3509633952](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/350963395206d9684bae5981904391954e6425a2) — chore(sonar): include untested SDK source in coverage [skip ci]
- [2c5ba83534](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/2c5ba835340d258d127df65caf89267ccba8dbd5) — chore(sonar): add scripts/sonar/coverage.cjs [skip ci]
- [c71f9d08ad](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/c71f9d08adc9531fcc3089223933c9aac06e6448) — chore(sonar): add scripts/sonar/report.py [skip ci]
- [c3f23bde88](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/c3f23bde88d5447df1332a56397394f07e0d22f7) — chore(sonar): add scripts/sonar/test_report.py [skip ci]
