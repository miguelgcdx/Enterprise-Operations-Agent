import { defineAgent } from "eve";

// Root agent configuration. Instructions are kept separately
// in instructions.md so the agent's operating procedures are editable.
export default defineAgent({
  // Choose a provider/model in eve's terminal UI via /model or /login.
  description: "Enterprise operations coordinator for account escalations, research, and follow-ups.",
});
