// In-memory demonstration data, NOT a company CRM.
// Replace the backing store with authenticated tenant-scoped persistence in production.
export type Account = {
  id: string;
  name: string;
  status: "active" | "at-risk" | "review-needed";
  owner: string;
  renewalDays: number;
};

export type Ticket = {
  id: string;
  accountId: string;
  severity: "low" | "medium" | "high";
  summary: string;
  state: "open" | "resolved";
};

export const accounts: Record<string, Account> = {
  ACME: { id: "ACME", name: "Acme Logistics", status: "at-risk", owner: "Sam", renewalDays: 19 },
  NOVA: { id: "NOVA", name: "Nova Manufacturing", status: "active", owner: "Alex", renewalDays: 84 },
};

export const tickets: Ticket[] = [
  { id: "T-101", accountId: "ACME", severity: "high", summary: "Sync fails for nightly CRM import", state: "open" },
  { id: "T-102", accountId: "ACME", severity: "medium", summary: "Dashboard numbers not matching export", state: "open" },
  { id: "T-103", accountId: "NOVA", severity: "low", summary: "Request additional filtering", state: "resolved" },
];
