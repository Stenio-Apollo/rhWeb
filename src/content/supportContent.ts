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
      "Help users recover drafts, understand sync issues, and keep reflective writing from disappearing when they need it most.",
    kicker: "Journal entries",
    metric: "Draft recovery",
    title: "Protect the space where someone is honest.",
  },
  {
    description:
      "Keep gratitude streaks consistent with support around reminders, edits, missed days, and restoring recent logs.",
    kicker: "Daily gratitude",
    metric: "Habit continuity",
    title: "Support routines that stabilize the day.",
  },
  {
    description:
      "Clarify what insights are showing, why patterns change, and how the app turns check-ins into useful perspective.",
    kicker: "Insights",
    metric: "Pattern clarity",
    title: "Make the app feel understandable, not opaque.",
  },
  {
    description:
      "Resolve planner issues around recurring tasks, calendar timing, overdue flows, and keeping mental health habits visible.",
    kicker: "Tasks and calendar",
    metric: "Structure support",
    title: "Help routines stay intact when life gets noisy.",
  },
];

export const supportTopics: Record<string, SupportTopic> = {
  account: {
    details: [
      "The email tied to the account",
      "Whether the issue is sign-in, reset, or account deletion",
      "The device and OS version currently in use",
    ],
    emailSubject: "Rhodie account support",
    summary:
      "Access recovery, password resets, email changes, and secure account deletion requests.",
    title: "Account access",
  },
  features: {
    details: [
      "Which area is affected: journal, gratitude, insights, or planner",
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
      "Start by confirming you are signed into the correct account and on a stable connection. If entries still do not appear, send support your device model, OS version, and the approximate time the content was created.",
  },
  {
    question: "Why is my insight page not updating?",
    answer:
      "Insights rely on recent activity from journaling, gratitude, and planning behavior. Update the app, reopen it after a minute, and make sure background refresh permissions are available before contacting support.",
  },
  {
    question: "My planner or calendar looks off. What should I check first?",
    answer:
      "Refresh the planner view and verify your device timezone. If recurring tasks are involved, include one example task and its intended schedule in your support email so the issue can be reproduced.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Send an email from the address connected to your account to s3.gerlin@gmail.com with the subject Account Deletion Request. Include your full name and sign-up platform so the request can be verified and handled safely.",
  },
];

export const supportMoments = [
  "A calm support path for users who already feel overloaded",
  "Clear issue routing without making people guess where to click",
  "A single support email flow with better context collection",
  "Fast answers for common mental-health routine blockers",
];
