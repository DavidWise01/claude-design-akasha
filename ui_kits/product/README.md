# Product UI Kit — Bridge Burners

The internal app: case management, evidence intake, transcript review.

## Components

- `AppShell.jsx` — left sidebar (cases / inbox / archive) + top bar (search, user)
- `CaseList.jsx` — sortable table of cases with status stamps
- `CaseDetail.jsx` — header, evidence stack, transcript viewer with redactions
- `EvidenceComposer.jsx` — file evidence form (mono inputs + redaction toggle)
- `StatusPill.jsx` — shared stamp pill component

## Screens (interactive)

`index.html` boots into the case list. Clicking a row opens detail. Clicking
the "File evidence" button opens a composer drawer. Submitting adds a new case
row with a fresh case number and "In review" status. All state is local.
