export const scenarios = [
  {
    level: 'No Automation',
    animation: 'animation-no-automation', // Animation key
    decisions: [
      "bi:sign-stop-fill",
      "fluent:arrow-turn-right-16-regular",
    ],
  },
  {
    level: 'Driver Assistance',
    animation: 'animation-driver-assistance',
    decisions: [
      'Let the system assist, but maintain full control.',
      'Test the system with a non-critical task.',
    ],
  },
  {
    level: 'Partial Automation',
    animation: 'animation-partial-automation',
    decisions: [
      'Override the system’s actions.',
      'Let the system handle simple tasks.',
    ],
  },
  {
    level: 'Conditional Automation',
    animation: 'animation-conditional-automation',
    decisions: [
      'Intervene during adverse conditions.',
      'Let the system proceed cautiously.',
      'Transfer full control to the system.',
    ],
  },
  {
    level: 'High Automation',
    animation: 'animation-high-automation',
    decisions: [
      'Override the system during a failure.',
      'Trust the system entirely.',
    ],
  },
  {
    level: 'Full Automation',
    animation: 'animation-full-automation',
    decisions: [
      'Trust the car to handle everything.',
      'Monitor the system’s decisions.',
    ],
  },
];
