# Enterprise Operations Agent

An **eve** learning project for operational company agents: typed tools, human approval, specialist delegation, skills, schedules, durable sessions, and evals.

## Requirements

- Node.js 24+
- pnpm
- A model credential or subscription configured through eve's terminal UI

## Start

```bash
git clone https://github.com/miguelgcdx/Enterprise-Operations-Agent
cd Enterprise-Operations-Agent
pnpm install
pnpm dev
```

Use `/login` or `/model` in the eve TUI to configure a supported model and credential.

Try:

- `Look up the ACME account and its support tickets. Summarize the escalation.`
- `Delegate a root-cause investigation to the researcher subagent.`
- `Review which sample account is most at risk of renewal problems.`
- `Change ACME's status to review-needed and explain why.` (requires approval)

## Verification

```bash
pnpm build
pnpm exec eve eval
```

The second command requires a working model connection. Behavioral evals can vary because they use a real model.

## Files

- `agent/agent.ts`: root agent configuration
- `agent/instructions.md`: always-on instructions
- `agent/tools/`: typed account/ticket actions, including an approval-gated mutation
- `agent/skills/`: on-demand account review and escalation instructions
- `agent/subagents/researcher/`: delegated investigation specialist
- `agent/schedules/daily-review.ts`: weekday UTC scheduled prompt
- `evals/`: checks for tool usage

## Schedule

The daily review runs at **13:00 UTC on weekdays** in a configured production scheduler. It does not fire automatically under `eve dev`. Test it locally by calling:

```bash
curl -X POST http://localhost:2000/eve/v1/dev/schedules/daily-review
```

The standalone schedule does **not** ask for a human approval or modify records, because its session has no channel to receive the approval.

## Important limits

This repository is an **educational runnable scaffold**, **not a production-ready multi-tenant SaaS**.

- Accounts and tickets are in-memory sample data. Changes are lost on restart; they are not backed by a real CRM.
- It does not yet implement tenant-aware authentication, RBAC, database row-level security, secret brokering, persistent approval records, or a real Slack connector.
- `always()` protects the demo mutation, but real write tools also need authorization and tenant scoping inside `execute()`.
- Do not connect live company credentials or sensitive data until those boundaries have been implemented and tested.
- A future MCP connection can point at your existing sales MCP server when deployed with proper auth and tenant isolation. The earlier stdio-only local MCP launcher is not a remotely accessible URL.

The new eve framework changes rapidly; for exact installed-version behavior, consult `node_modules/eve/docs`.
