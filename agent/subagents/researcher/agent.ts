import { defineAgent } from "eve";

// A declared subagent has a separate prompt and tool scope;
// it does not implicitly inherit all parent capabilities.
export default defineAgent({
  description: "Investigate complex operational issues, organize evidence, and return a risk assessment without modifying records.",
});
