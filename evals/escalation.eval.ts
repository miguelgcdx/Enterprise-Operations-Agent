import { defineEval } from "eve/evals";

// Behavioral eval: should consult recorded support tickets
// for an escalation instead of fabricating ticket numbers.
export default defineEval({
  description: "Escalation workflow consults tickets.",
  async test(t) {
    await t.send("Investigate ACME support escalations using the ticket records. Do not modify data.");
    t.succeeded();
    t.calledTool("search_tickets");
  },
});
