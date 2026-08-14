# Development Workflow

## Change and Push Cadence

Every three completed changes, the current work must be committed and pushed to the `origin` GitHub remote.

A completed change is a logical, independently reviewable improvement, such as a feature, bug fix, configuration change, refactor, or documentation update. Several file edits supporting one improvement count as one change.

Before each push:

1. Review the diff and confirm no secrets or generated local files are staged.
2. Run the checks relevant to the affected area.
3. Create a clear commit message describing the three changes.
4. Push the commit to the active branch on `origin`.

If a change needs an earlier push for collaboration, backup, review, or deployment, it may be pushed before the third change.

## Task Handover

Every completed task must end with a concise recommended next step, including why it is the highest-priority follow-up.

## RAG Development Direction

The application uses retrieval-augmented generation (RAG). AI responses must retrieve only authorized, research-scoped context and must distinguish retrieved facts from model interpretation.
