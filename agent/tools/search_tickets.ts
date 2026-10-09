import { defineTool } from "eve/tools";
import { z } from "zod";
import { tickets } from "../lib/sample-data";

export default defineTool({
  description: "Look up actual sample support tickets for a customer account.",
  inputSchema: z.object({ accountId: z.string().min(1) }),
  execute({ accountId }) {
    return tickets.filter(t => t.accountId === accountId.toUpperCase());
  },
});
