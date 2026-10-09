import { defineSchedule } from "eve/schedules";

// Five-field UTC cron expression. eve dev will NOT automatically
// run schedules; use the dev dispatch endpoint to test one.
export default defineSchedule({
  cron: "0 13 * * 1-5",
  markdown: [
    "Review the sample accounts for upcoming renewals and open escalations.",
    "Prepare a concise internal risk assessment only.",
    "Do not change account statuses or call approval-requiring tools:",
    "a markdown schedule has no human channel to resolve approvals.",
  ].join(" "),
});
