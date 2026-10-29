# Contact Center SonarCloud change log

Scans: 28 October 2026. Audit finalized: 29 October 2026 (Asia/Kolkata).

All repository writes target `ajitkumar0828-spec/webex-js-sdk:next`. Changes were based on fork commit `ec6e23e8155f237aab03825335c3a9c609bbfbe4` in an isolated checkout. Original working copies and archive artifacts were preserved. Application implementation and lockfiles were not changed.

## Files and reasons

| File | Change and reason |
|---|---|
| `.github/workflows/build.yml` | Replace SDK automatic/push scan behavior with a manual-only fork/next guarded workflow; full Git history, locked Node/Yarn install, workspace build, tests/coverage, official scanner, verified report and artifact. |
| `docs/sonar-change-log.md` | Record every changed file, setting, publication commit and workflow outcome, including invalid/failed attempts. |
| `docs/sonar-contact-center.md` | Document execution, scope, coverage methods, credentials, reports and failure interpretation. |
| `packages/@webex/contact-center/jest.config.js` | Opt-in SONAR_COVERAGE includes untested src files and isolates LCOV output; preserve the existing V8 provider and all four 85% thresholds. |
| `reports/sonar/baseline-2026-10-28/SUMMARY.md` | Preserve the old whole-repository baseline before scope replacement; explicitly unsuitable for direct comparison with Contact Center results. |
| `reports/sonar/baseline-2026-10-28/analysis.json` | Preserve the old whole-repository baseline before scope replacement; explicitly unsuitable for direct comparison with Contact Center results. |
| `reports/sonar/baseline-2026-10-28/branches.json` | Preserve the old whole-repository baseline before scope replacement; explicitly unsuitable for direct comparison with Contact Center results. |
| `reports/sonar/baseline-2026-10-28/files.json` | Preserve the old whole-repository baseline before scope replacement; explicitly unsuitable for direct comparison with Contact Center results. |
| `reports/sonar/baseline-2026-10-28/issues.csv` | Preserve the old whole-repository baseline before scope replacement; explicitly unsuitable for direct comparison with Contact Center results. |
| `reports/sonar/baseline-2026-10-28/issues.json` | Preserve the old whole-repository baseline before scope replacement; explicitly unsuitable for direct comparison with Contact Center results. |
| `reports/sonar/baseline-2026-10-28/summary.json` | Preserve the old whole-repository baseline before scope replacement; explicitly unsuitable for direct comparison with Contact Center results. |
| `reports/sonar/baseline-2026-10-28/warnings-observed.json` | Preserve the old whole-repository baseline before scope replacement; explicitly unsuitable for direct comparison with Contact Center results. |
| `scripts/sonar/coverage.cjs` | Run original workspace unit commands, retain their exits, isolate workspace LCOV and include untested production files; collect diagnostic Jest coverage after Widgets type-check failures without marking them passed. |
| `scripts/sonar/report.py` | Validate source/test allowlist and normalized LCOV; verify exact server task, commit and main branch; paginate issues/files, escape CSV, check coverage imports and export metrics/gate/warnings. |
| `scripts/sonar/test_report.py` | Five regression tests for pagination/count/duplicates, CSV escaping/formulas, LCOV ambiguity/traversal/incomplete records, and test filters hiding production source. |
| `sonar-project.properties` | Correct organization/project; explicit approved source/test roots, UTF-8, package TypeScript configs, exclusions and LCOV paths. Test patterns are prefixed with test roots to avoid excluding production files. |

## Service settings

| Setting | Before | After / evidence |
|---|---|---|
| Sonar project / organization | Existing cisco-projects dashboard; SDK CI previously published to a different project/organization | Correct cisco-projects project key in root properties; exact task and revision verified. |
| Automatic analysis | Enabled; Widgets failed out of memory | Disabled for both selected projects on 28 October; setting screenshots retained locally. |
| Main branch | next | next retained and verified isMain=true through the server API. |
| Quality gate | Sonar way | Retained; exact returned conditions saved in quality-gate.json. |
| New-code definition | Previous version | Retained; period/date saved with gate evidence. |
| Workflow trigger | SDK push/PR workflow and Sonar automatic analysis; no correct Widgets CI scan | workflow_dispatch only, exact fork and refs/heads/next guard. |
| Runtime | Inconsistent scan environment | Node 22.14.0 / checked-in Yarn 3.4.1. |
| Coverage thresholds | Existing workspace thresholds | Preserved; untested production files added to collection. |
| GitHub SONAR_TOKEN | Existing token lacked access to cisco-projects. | User replaced it securely after the first authorization failure; final scan authorized successfully. No credential values were read or recorded. |
| Sonar project name | Repository dashboard name | Webex Contact Center SDK via scanner configuration. |

## Scan and report outcome

Scanned commit: `41a0c176067732908e35ef27d8312eb46237e50c`. [Workflow](https://github.com/ajitkumar0828-spec/webex-js-sdk/actions/runs/40676937231); [dashboard](https://sonarcloud.io/summary/overall?id=ajitkumar0828-spec_webex-js-sdk&branch=next); [artifact](https://github.com/ajitkumar0828-spec/webex-js-sdk/actions/runs/40676937231/artifacts/12810873868).

Analysis `b18c0e35-441e-4f6b-9c69-98afd4c20056` at `2026-10-28T11:08:56+0000`. Server processing SUCCESS; 65 production files and 43 separately classified test files; no unexpected or missing files and no production NCLOC assigned to tests. All tested-workspace LCOV imports verified.

Coverage 93.1%; line coverage 93.7%; branch coverage 89.0%; duplication 1.1%; 14 distinct open issues; 0 Sonar analysis warnings; quality gate OK. Workflow success.

The retained quality gate evaluates four new-code rating/hotspot conditions. The returned gate does not evaluate overall coverage or duplication, and a passing gate does not mean all existing issues are resolved. Legacy reliability/security/maintainability ratings and overlapping software-quality issue counts are retained in the report.

Build and original unit command passed. Local verification ran 1,404 tests in 42 suites with the existing 85% thresholds. The CI summary confirms the original unit command passed.

[First attempted SDK scan](https://github.com/ajitkumar0828-spec/webex-js-sdk/actions/runs/40674139419) failed before analysis with “Not authorized or organization not found.” It is not a valid new report. The user replaced SONAR_TOKEN; the final fresh run above succeeded.

SDK coverage retains the existing Jest V8 provider. Its LCOV records all 29,437 physical source lines, including type-only .ts files, and imports those counts unchanged. This is the existing instrumentation method; it should not be treated as an identical measure to Widgets Babel coverage.

The preserved historical SDK baseline has 427,450 NCLOC, no coverage, 1,516 distinct open issues and quality gate NONE (Not computed). It analyzed the whole repository and is unsuitable for direct comparison with this Contact Center result.

## Publication and validation audit

Shell Git used a different account and was denied push access. With the user’s explicit approval, the signed-in Chrome account published these exact files to the two forks. Every setup/correction/documentation commit uses [skip ci]; manual scans were dispatched separately. No inherited release workflow was intentionally started.

Five report-contract regression tests pass. Scope, LCOV path normalization, pagination/count/duplicate checks, CSV round-trip row counts, exact server commit and stable analysis checks passed. Production/test files match the approved manifest.

GitHub emitted an action-runtime warning (checkout/upload-artifact Node 20 forced to Node 24) and an ubuntu-latest migration notice. These are distinct from the zero Sonar analysis warnings. SDK Jest also reported a worker teardown warning during local validation.

Reports and normalized coverage evidence are available in the linked CI artifact. The browser client blocked the artifact ZIP host. Markdown, CSV and JSON reports were instead downloaded locally from public SonarCloud APIs, with explicit download-provenance.json. Local task verification used the public ce/component endpoint; CI used its exact authenticated ce/task. The actual CI unit-command status JSON was also saved from the rendered GitHub summary.

Local bundle: reports/sonar/2026-10-28/ in the user’s Widgets checkout. Latest report, original SDK baseline, package coverage, scope/import evidence, run links, artifact metadata, publication commits, patches and setting screenshots are retained there. Personal tokens were created with a 30-day expiry; rotate GitHub secrets before expiry.

The final audit-document commits occur after the scans and do not change analyzed production source. Their own hashes are recorded in the local publication audit and repository history; the exact scanned SHA remains the one above.

## Published configuration and correction commits

- [bcfcf83b62](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/bcfcf83b6285f57ec5688367ce42dfcea6d02443) — chore(sonar): make SDK scans manual with coverage and reports [skip ci]
- [85b510017d](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/85b510017d5ce3d40cd37257a86935f59a668f40) — chore(sonar): restrict SDK analysis to Contact Center [skip ci]
- [3509633952](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/350963395206d9684bae5981904391954e6425a2) — chore(sonar): include untested SDK source in coverage [skip ci]
- [2c5ba83534](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/2c5ba835340d258d127df65caf89267ccba8dbd5) — chore(sonar): add scripts/sonar/coverage.cjs [skip ci]
- [c71f9d08ad](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/c71f9d08adc9531fcc3089223933c9aac06e6448) — chore(sonar): add scripts/sonar/report.py [skip ci]
- [c3f23bde88](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/c3f23bde88d5447df1332a56397394f07e0d22f7) — chore(sonar): add scripts/sonar/test_report.py [skip ci]
- [c4a5803624](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/c4a5803624f2d92948b3d5c7612d17fb4b87b4cb) — chore(sonar): add docs/sonar-contact-center.md [skip ci]
- [7a5fa3b967](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/7a5fa3b967298aebff1b528e82b454a275f67103) — chore(sonar): add docs/sonar-change-log.md [skip ci]
- [9dcf9bbb03](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/9dcf9bbb0377c4f92f49fa7f073866337f405867) — chore(sonar): add reports/sonar/baseline-2026-10-28/SUMMARY.md [skip ci]
- [abd9e266c0](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/abd9e266c0a12c01423e137ccda2aa984f2744c4) — chore(sonar): add reports/sonar/baseline-2026-10-28/analysis.json [skip ci]
- [9605dd932d](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/9605dd932d72d8ecaf4b5fc84ffe432a671a02a8) — chore(sonar): add reports/sonar/baseline-2026-10-28/branches.json [skip ci]
- [72a18198ef](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/72a18198ef3948cf234c89c6a48dbed968a23134) — chore(sonar): add reports/sonar/baseline-2026-10-28/files.json [skip ci]
- [82a8fbeb47](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/82a8fbeb47c3e518ad934d5b2f3011f7857fca10) — chore(sonar): add reports/sonar/baseline-2026-10-28/issues.csv [skip ci]
- [4061e91f01](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/4061e91f015f3bdbe9852518f0fb66c0b5a21fe3) — chore(sonar): preserve SDK baseline issue JSON [skip ci]
- [a56ee7682b](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/a56ee7682b5570af4ed2ea50ba016af860674f62) — chore(sonar): add reports/sonar/baseline-2026-10-28/summary.json [skip ci]
- [0771995316](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/0771995316d6799174b2cda61ca1cf6911bf6d24) — chore(sonar): add reports/sonar/baseline-2026-10-28/warnings-observed.json [skip ci]
- [7f8d94bab3](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/7f8d94bab307358918c38a41345cb2bbbfac87c7) — fix(sonar): constrain SDK test inclusion paths [skip ci]
- [4a7f0b9e31](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/4a7f0b9e314a0dad41917d3b331e1d3e97e17862) — fix(sonar): verify source and unit-test components separately [skip ci]
- [41a0c17606](https://github.com/ajitkumar0828-spec/webex-js-sdk/commit/41a0c176067732908e35ef27d8312eb46237e50c) — test(sonar): prevent test filters from hiding production code [skip ci]
