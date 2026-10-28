# Contact Center SonarCloud analysis

The manual workflow analyzes the existing `ajitkumar0828-spec_webex-js-sdk` project in `cisco-projects` on `next`.
Run `.github/workflows/build.yml` using **Actions > Run workflow > next**.
The job checks the exact fork and ref; there are no push or pull-request triggers.
Use Node 22.14.0 and the checked-in Yarn 3.4.1. Install with `--immutable`.

## Scope and coverage

`sonar-project.properties` is the authoritative scanner configuration. Production roots are explicit;
unit-test roots are separate. The report script also checks them against a fixed approved allowlist.
Only JS, JSX, TS, TSX, CSS and SCSS under those production roots are analyzed. Type declarations,
test/spec files, mocks, dependencies, generated bundles and archives are excluded.
Other SDK plugins, meetings, sample applications and test-fixtures are not production scope.

Coverage runs before the scanner, includes untested executable source, and preserves existing thresholds.
Each tested workspace writes a separate `coverage/sonar/<directory>/lcov.info`.
LCOV source paths are resolved against the repository and owning workspace, verified against the
production manifest, and rewritten to unique repository-relative paths.
The server export checks that tests have no production NCLOC and that every analyzed production file
belongs to the allowlist, then checks covered-line metrics for each imported LCOV report.

The `SONAR_COVERAGE=true` opt-in in the Contact Center Jest configuration adds collectCoverageFrom
and a dedicated coverage directory; normal unit tests keep their previous configuration.
The existing 85% global statement/branch/function/line thresholds remain intact.
Build tooling first, then recursively build Contact Center workspace dependencies.
The historical whole-repository snapshot in `reports/sonar/baseline-2026-10-28/` has 427,450 NCLOC,
no coverage and 1,516 distinct open issues. It is not comparable with the new Contact Center scope.
The old successful workflow targeted a different organization/project and does not validate this dashboard.

## Reports and validation

`scripts/sonar/report.py` uses the public SonarCloud Web API, optionally authenticated using
the environment only. It waits for the exact scanner CE task, verifies SUCCESS and the exact
SCM revision on the main branch, exports all issue/file pages, and detects truncation or duplicates.
CSV fields are quoted with the standard CSV writer and protected against spreadsheet formulas.
SCM authors/assignees and credentials are omitted.

Artifacts named `contact-center-sonar-<sha>` contain `reports/sonar/` and `coverage/sonar/`, retained
30 days. `latest/SUMMARY.md`, `issues.csv`, `issues.json`, metrics, branch/commit metadata,
file lists, server task/warnings and scope/LCOV validation evidence are included.
The workflow summary links the dashboard and run. Download the artifact to retain a local copy.
Quality gate ERROR fails the export step; NONE is reported as **Not computed**, never passed.
Test/build failures fail the workflow independently of the static analysis result.
Distinct issue counts differ from the sum of overlapping software-quality dimensions.

## Required service settings

Automatic analysis must be Off for this project; CI analysis reads sonar-project.properties and imports LCOV.
The existing main branch must be next. Keep the Sonar way gate and existing new-code definition.
Set SONAR_TOKEN only in this fork's GitHub Actions encrypted secrets. It must authorize analysis in
cisco-projects. Never put tokens in tracked files, reports, scanner arguments or chat.
Personal token expiry must be managed in SonarCloud; renew the secret before expiry.

See [the change log](sonar-change-log.md) for before/after settings, files and execution evidence.
Official references: [CI analysis](https://docs.sonarsource.com/sonarqube-cloud/analyzing-source-code/ci-based-analysis/github-actions-for-sonarcloud),
[JS/TS coverage](https://docs.sonarsource.com/sonarqube-cloud/analyzing-source-code/test-coverage/javascript-typescript-test-coverage).
