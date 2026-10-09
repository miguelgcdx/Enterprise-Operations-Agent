import { defineTool } from "eve/tools";
import { z } from "zod";
import { accounts } from "../lib/sample-data";

// Authored tools execute in the trusted app runtime, not inside the sandbox.
export default defineTool({
  description: "Read a sample customer account from the operations dataset.",
  inputSchema: z.object({ accountId: z.string().min(1) }),
  execute({ accountId }) {
    return accounts[accountId.toUpperCase()] ?? { error: "Account not found" };
  },
});
