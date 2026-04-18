export type SupportPath = {
  description: string;
  kicker: string;
  metric: string;
  title: string;
};

export type SupportTopic = {
  details: string[];
  emailSubject: string;
  summary: string;
  title: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export const supportPaths: SupportPath[] = [
  {
    description:
      "Help with saved entries, gratitude logs, prompt responses, sync issues, and restoring personal writing across devices.",
    kicker: "Journal and gratitude",
    metric: "Entry recovery",
    title: "Keep reflective writing safe, synced, and easy to recover.",
  },
  {
    description:
      "Explain how the insights tab updates, what activity affects it, and why the feed or summaries may look different over time.",
    kicker: "Insights feed",
    metric: "Pattern clarity",
    title: "Make Rhodie insights feel useful instead of confusing.",
  },
  {
    description:
      "Resolve task board, due date, recurring task, and calendar sync issues so routines and responsibilities stay visible.",
    kicker: "Tasks and calendar",
    metric: "Structure support",
    title: "Keep planning tools aligned with the user’s real schedule.",
  },
  {
    description:
      "Handle restore purchases, Rhodie Pro access, billing questions, and account-level issues like sign-in, deletion, and subscription visibility.",
    kicker: "Account and billing",
    metric: "Access continuity",
    title: "Support secure access and paid features without back-and-forth.",
  },
];

export const supportTopics: Record<string, SupportTopic> = {
  account: {
    details: [
      "The email tied to the account",
      "Whether the issue is sign-in, account sync, or account deletion",
      "The device and OS version currently in use",
    ],
    emailSubject: "Rhodie account support",
    summary:
      "Sign-in problems, account recovery, sync confusion, and secure account deletion requests.",
    title: "Account access",
  },
  features: {
    details: [
      "Which area is affected: journal, gratitude, insights, tasks, or calendar",
      "A short description of what the user expected to happen",
      "One screenshot or screen recording if available",
    ],
    emailSubject: "Rhodie feature support",
    summary:
      "Questions about how Rhodie behaves, what a feature means, or why something no longer feels consistent.",
    title: "Feature guidance",
  },
  billing: {
    details: [
      "The platform used for purchase",
      "Approximate charge date and subscription type",
      "Whether restore purchase has already been attempted",
    ],
    emailSubject: "Rhodie billing support",
    summary:
      "Restore purchases, plan confusion, billing problems, and subscription visibility issues.",
    title: "Billing and plans",
  },
};

export const faqItems: FaqItem[] = [
  {
    question: "How do I recover missing journal or gratitude entries?",
    answer:
      "First confirm you are signed into the correct Rhodie account and connected to the internet. If your entries still do not appear, email support with your device model, OS version, and the approximate date and time the entry was created.",
  },
  {
    question: "Why is my insight page not updating?",
    answer:
      "The insights tab depends on recent activity from journaling, gratitude, and planning. Update the app, reopen it after a minute, and make sure your account is fully synced before contacting support.",
  },
  {
    question: "My planner or calendar looks off. What should I check first?",
    answer:
      "Refresh the planner view, confirm your timezone is correct, and check whether the issue involves recurring tasks or calendar sync. If you email support, include one example task and the schedule you expected.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can request deletion from inside the app account area or email support from the address tied to your Rhodie account. Include your full name and sign-in platform so the request can be verified safely.",
  },
];

export const supportMoments = [
  "Rhodie-specific help for journaling, gratitude, tasks, calendar, and insights",
  "Clear routing for account, billing, and Rhodie Pro subscription issues",
  "One direct support flow that collects the details needed to reproduce issues",
  "Fast guidance for the routine tools users rely on every day",
];
