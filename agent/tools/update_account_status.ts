import { defineTool } from "eve/tools";
import { always } from "eve/tools/approval";
import { z } from "zod";
import { accounts } from "../lib/sample-data";

// Every call must be approved by a person before execute() runs.
export default defineTool({
  description: "Change an account's status after explicit human approval. Demo-only in-memory store.",
  approval: always(),
  inputSchema: z.object({
    accountId: z.string().min(1),
    status: z.enum(["active", "at-risk", "review-needed"]),
    reason: z.string().min(8),
  }),
  execute({ accountId, status, reason }) {
    const account = accounts[accountId.toUpperCase()];
    if (!account) return { error: "Account not found" };
    account.status = status;
    return { success: true, account, reason, persistence: "in-memory demo only" };
  },
});
