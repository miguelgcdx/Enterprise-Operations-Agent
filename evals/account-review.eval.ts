import { defineEval } from "eve/evals";

// Behavioral eval: checks that the model uses source data rather than
// inventing an account health assessment.
export default defineEval({
  description: "Account review uses the account record.",
  async test(t) {
    await t.send("Look up the sample ACME account and tell me its status and renewal timeframe.");
    t.succeeded();
    t.calledTool("get_account");
  },
});
