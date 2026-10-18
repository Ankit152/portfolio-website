/**
 * ────────────────────────────────────────────────────────────────
 *  SITE CONTENT
 * ────────────────────────────────────────────────────────────────
 *  This is the one file you need to touch to update the site.
 *  Nothing here controls layout or styling — just words, numbers,
 *  links, and image paths. Components read from this file.
 *
 *  To swap a photo: replace the file in /public/images and update
 *  the `src` path below (or point `src` at a remote URL and add
 *  that host to next.config.js under images.remotePatterns).
 * ────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Ankit Kurmi',
  role: 'Site Reliability Engineer, Red Hat',
  location: 'India',
  email: 'ankitkurmi152@gmail.com', // ← replace with real email
  heroHeadline: 'I build systems that stay reliable when everything else gets complicated.',
  heroSub:
    "Site Reliability Engineer, open-source contributor, and perpetual learner. I work at the intersection of cloud infrastructure, distributed systems, observability, and software engineering.",
  currentlyThinking:
    'distributed systems, observability, open source & the next thing worth learning.',
  footerLine: 'Built with curiosity. Deployed with care.',
};

export const socials = {
  email: 'mailto:ankitkurmi152@gmail.com', // ← replace
  github: 'https://github.com/ankitkurmi', // ← replace
  linkedin: 'https://linkedin.com/in/ankitk152', // ← replace
  instagram: 'https://instagram.com/sugarshutter', // ← replace — photography
  youtube: 'https://youtube.com/@nerdykeys', // ← replace — music
};

export const about = {
  paragraphs: [
    "I started out the way most engineers do — curious, and mildly obsessed with knowing why things work. That curiosity didn't stay academic for long. It turned into building and operating cloud infrastructure that other engineers depend on without ever thinking about it, which is exactly the point.",
    "Most of my working life happens somewhere between Kubernetes operators, distributed backends, and the dashboards that tell you the truth about both. I've spent years around systems that manage thousands of clusters — the kind of scale where a small inefficiency stops being small, and a quiet bug becomes everyone's Tuesday.",
    "I like building things. I like understanding why they break even more.",
    "That's not a tagline — it's roughly how I spend my time. Reliability engineering, at its core, is applied curiosity: you're always asking what happens next, what happens at 3am, what happens when the thing you didn't think about happens. I find that question genuinely interesting, which probably explains the rest of this website.",
  ],
};

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  problem: string;
  build: string;
  stack: string[];
  outcome: { metric: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'sli-slo',
    title: 'An SLI/SLO framework for a production package operator',
    category: 'Reliability Engineering',
    problem:
      'A production operator had no formal definition of "healthy." Incidents were noticed by customers before they were noticed by us.',
    build:
      'Designed and shipped an SLI/SLO framework — defining the right signals, setting realistic objectives, and wiring alerting to actually match user impact instead of raw system noise.',
    stack: ['Prometheus', 'Grafana', 'Go', 'Kubernetes'],
    outcome: [
      { metric: '~40%', label: 'faster incident detection' },
      { metric: '99.9%', label: 'availability maintained' },
    ],
  },
  {
    id: 'addon-operator',
    title: 'Lifecycle management across the OpenShift Addon Operator ecosystem',
    category: 'Kubernetes & OpenShift',
    problem:
      'Managing service lifecycles consistently across a large, fast-growing OpenShift fleet is a coordination problem disguised as an engineering one.',
    build:
      'Worked across the Addon Operator ecosystem to manage lifecycle behavior for services running across a large multi-cluster footprint, backed by a serious automated test investment.',
    stack: ['Go', 'Kubernetes Operators', 'OpenShift', 'CI/CD'],
    outcome: [
      { metric: '10,000+', label: 'clusters under lifecycle management' },
      { metric: '100+', label: 'automated tests written' },
    ],
  },
  {
    id: 'vuln-automation',
    title: 'Vulnerability lifecycle automation across 15+ Go operators',
    category: 'Security & Automation',
    problem:
      'CVE response across many independent operators was manual, slow, and inconsistent — exactly where automation earns its keep.',
    build:
      'Built automated tooling to detect, triage, and drive vulnerability remediation across a fleet of Go-based Kubernetes operators, replacing tribal knowledge with a repeatable process.',
    stack: ['Go', 'Kubernetes', 'CI/CD', 'Security tooling'],
    outcome: [
      { metric: '~93%', label: 'reduction in MTTR for critical CVEs' },
      { metric: '200+', label: 'critical vulnerabilities resolved' },
    ],
  },
  {
    id: 'distributed-backend',
    title: 'Go/PostgreSQL microservices at global cluster scale',
    category: 'Distributed Backend Systems',
    problem:
      'Backend services managing a growing global fleet needed to stay fast and correct as both traffic and cluster count climbed.',
    build:
      'Built and optimized Go/PostgreSQL microservices involved in managing global cluster infrastructure, with a close eye on query patterns, API latency, and request-path efficiency.',
    stack: ['Go', 'PostgreSQL', 'REST APIs', 'AWS'],
    outcome: [
      { metric: '15,000+', label: 'global clusters managed' },
      { metric: '~30%', label: 'API performance improvement' },
      { metric: '3M+', label: 'daily requests handled' },
    ],
  },
  {
    id: 'observability',
    title: 'Observability that tells the truth without shouting',
    category: 'Observability',
    problem:
      'Alert fatigue is its own reliability problem — teams stop trusting signals that cry wolf.',
    build:
      'Built observability and SLI/SLO systems using Prometheus, Grafana, Jaeger, and OpenTelemetry, tuned to reduce noise while catching real degradation earlier.',
    stack: ['Prometheus', 'Grafana', 'Jaeger', 'OpenTelemetry'],
    outcome: [
      { metric: 'Lower', label: 'alert noise' },
      { metric: 'Earlier', label: 'detection of real issues' },
    ],
  },
];

export type ContributionEntry = {
  date: string; // human readable
  project: string;
  description: string;
  link?: string;
  tag: 'merged' | 'mentorship' | 'recognition';
};

export const openSource = {
  intro:
    "Open source is where I learned to write code that other people actually have to read. It's also just a good way to spend a weekend.",
  contributions: <ContributionEntry[]>[
    {
      date: '2025',
      project: 'OpenEverest',
      description:
        'Contributed dynamic load balancer annotation support, released in v1.13 and recognized in the project\'s official blog.',
      tag: 'recognition',
    },
    {
      date: '2024',
      project: 'Jaeger & OpenTelemetry',
      description:
        'LFX Mentee — worked directly with maintainers on distributed tracing tooling used across the cloud-native ecosystem.',
      tag: 'mentorship',
    },
    {
      date: 'Ongoing',
      project: 'OpenShift Addon Operator',
      description:
        'Contributions to lifecycle management tooling and test coverage for the Addon Operator ecosystem.',
      tag: 'merged',
    },
    {
      date: 'Ongoing',
      project: 'CNCF projects',
      description:
        'Smaller patches and issue triage across other cloud-native projects as time (and curiosity) allows.',
      tag: 'merged',
    },
  ],
  projects: ['OpenShift Addon Operator', 'OpenTelemetry', 'Jaeger', 'OpenEverest'],
};

export const research = {
  intro: "I don't just use technology. I like understanding it.",
  interests: [
    'Distributed systems',
    'Databases at scale',
    'Cloud-native infrastructure',
    'Observability',
    'Reliability engineering',
    'AI / deep learning',
    'Networking',
    'Systems engineering',
  ],
  entries: [
    {
      title: 'Fuzzy-logic-based routing protocols',
      place: 'IIT Kharagpur',
      description:
        'Research work exploring fuzzy-logic approaches to routing decisions in dynamic network conditions.',
    },
    {
      title: 'Deep learning classification',
      place: 'Jadavpur University',
      description:
        'Internship work applying deep learning models to classification problems.',
    },
  ],
};

export const photography = {
  identity: 'Sugar Shutter',
  intro:
    "I started photographing things I found interesting and never really stopped. Three frames made it into the Cog India Photo Fest 2025, selected from roughly 100,000 submissions — my first exhibition memento, and a nice reminder that noticing things is a skill worth keeping.",
  // Placeholder abstract SVGs ship in /public/images/photography — swap
  // each `src` for a real photo (jpg/png/webp) whenever you're ready.
  gallery: [
    { src: '/images/photography/frame-01.svg', alt: 'Street light study, long exposure' },
    { src: '/images/photography/frame-02.svg', alt: 'Mountain ridge at first light' },
    { src: '/images/photography/frame-03.svg', alt: 'Architectural geometry, harsh shadow' },
    { src: '/images/photography/frame-04.svg', alt: 'Portrait, natural window light' },
    { src: '/images/photography/frame-05.svg', alt: 'Reflection study, wet pavement' },
    { src: '/images/photography/frame-06.svg', alt: 'Night market, motion and stillness' },
  ],
};

export const music = {
  project: 'Nerdy Keys',
  description:
    'A small YouTube project where I record piano covers and the occasional original — proof that the same brain that debugs Go services also just wants to play something that sounds nice.',
};

export const travel = {
  intro: 'A running, incomplete list of places worth remembering.',
  // Replace with real places/photos
  places: [
    { name: 'Ladakh', note: 'High-altitude roads and very patient yaks.' },
    { name: 'Kerala backwaters', note: 'The quietest internet connection I have ever had.' },
    { name: 'Northeast India', note: 'Still working through the list here.' },
  ],
};

export const curiosity = {
  intro: "Things I've picked up, poked at, or fallen down a rabbit hole over:",
  items: [
    'Mechanical keyboards (obviously)',
    'Film photography basics',
    'Home network tinkering',
    'Chess openings I will never play correctly under pressure',
    'Vintage rifles and marksmanship fundamentals',
    'Whatever conference talk queue I have not finished yet',
  ],
};

export const community = {
  intro:
    'Building things is only half of it — the other half is helping other people understand how, and getting to learn from what they build too.',
  items: [
    {
      title: 'Hackathon judging',
      description: 'Evaluated technical projects at student and community hackathons.',
    },
    {
      title: 'Speaking',
      description: 'Talks and panel participation at technology and community events.',
    },
    {
      title: 'Mentoring',
      description: 'Helping students navigate early careers in infrastructure and open source.',
    },
    {
      title: 'CNCF & ACM involvement',
      description: 'Active participation in cloud-native and ACM community events.',
    },
  ],
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
};

export const certifications: Certification[] = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services' },
  { name: 'HashiCorp Certified: Terraform Associate (003)', issuer: 'HashiCorp' },
  { name: 'Certified Kubernetes Application Developer (CKAD)', issuer: 'CNCF', year: undefined },
];

export type TimelineStage = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineStage[] = [
  {
    year: 'Then',
    title: 'Student',
    description: 'Curious about how things worked, more than what grade came from knowing it.',
  },
  {
    year: '',
    title: 'Research Intern',
    description: 'Fuzzy-logic routing at IIT Kharagpur, deep learning at Jadavpur University.',
  },
  {
    year: '',
    title: 'Engineer',
    description: 'Started building backend systems and getting comfortable with production.',
  },
  {
    year: '',
    title: 'Open-Source Contributor',
    description: 'Started contributing upstream — OpenEverest, Jaeger, OpenTelemetry.',
  },
  {
    year: '',
    title: 'Site Reliability Engineer',
    description: 'Red Hat — reliability, observability, and Kubernetes at real scale.',
  },
  {
    year: 'Now',
    title: 'Community Contributor',
    description: 'Speaking, mentoring, judging — sharing what I learn along the way.',
  },
];

export const skills = {
  languages: ['Go', 'Python', 'TypeScript'],
  infra: ['Kubernetes', 'OpenShift', 'Terraform', 'AWS'],
  data: ['PostgreSQL'],
  observability: ['Prometheus', 'Grafana', 'Jaeger', 'OpenTelemetry'],
};

export const terminalCommands = {
  whoami:
    "Ankit Kurmi — SRE at Red Hat. Builds distributed systems by day, photographs light by whenever it looks interesting.",
  projects: 'See the "Things I\'ve built" section — SLI/SLO frameworks, operator lifecycle tooling, vulnerability automation, and a few million requests a day.',
  'open-source': 'OpenEverest, OpenShift Addon Operator, Jaeger, OpenTelemetry. LFX Mentee, 2023–2024.',
  photography: 'Sugar Shutter. Three frames at Cog India Photo Fest 2025, out of ~100,000 submissions.',
  contact: `Email: ${profile.email} · GitHub, LinkedIn, Instagram, YouTube linked in the footer.`,
  help: 'Try: whoami, projects, open-source, photography, contact, clear',
};
