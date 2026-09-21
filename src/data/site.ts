export const site = {
  name: 'Viviana Rames',
  domain: 'https://vivrames.com',
  email: 'hello@vivrames.com',
  linkedin: 'https://www.linkedin.com/in/vivianarames',
  tagline: 'Turn your mission into traction.',
  defaultDescription:
    'Viviana Rames is a senior marketing and GTM operator who helps companies with complex products and emerging technologies turn positioning, go-to-market strategy and communications into commercial momentum.',
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
];

export const proofStats = [
  { value: '15+ years', label: 'Marketing & GTM leadership' },
  { value: '2× 0→1', label: 'Marketing functions built from zero' },
  { value: '250% YoY', label: 'Revenue growth for own brand' },
  { value: '150+', label: 'Retail & wholesale partners built' },
  { value: '700% ROI', label: 'Campaign-level marketing return' },
];

export const engagement = {
  heading: 'Flexible ways to work together.',
  intro:
    'Different businesses need different levels of support. I can lead the marketing function, deliver a focused strategic project or step in during a transition.',
  models: [
    {
      title: 'Fractional leadership',
      description: 'Senior marketing leadership embedded in your business, connecting strategy, priorities and execution.',
    },
    {
      title: 'Strategic projects',
      description: 'Focused engagements around positioning, product marketing, go-to-market, launches or communications.',
    },
    {
      title: 'Interim leadership',
      description: 'Hands-on marketing leadership during a transition or while building the function.',
    },
  ],
};

export type Service = {
  number: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
};

export const servicesIntro = {
  headline: "From market clarity to commercial momentum.",
  intro:
    'I work across positioning, go-to-market, marketing and communications, connecting strategic direction with hands-on execution.',
};

export const services: Service[] = [
  {
    number: '01',
    slug: 'positioning-product-marketing',
    title: 'Positioning & Product Marketing',
    tagline: 'Make the value clear.',
    description: 'Define what makes a product matter, who it matters to and how to communicate it.',
    capabilities: [
      'Market and customer research',
      'Competitive positioning',
      'Value proposition and messaging',
      'Product narratives and marketing packages',
      'Brand strategy and creative direction',
    ],
  },
  {
    number: '02',
    slug: 'go-to-market-strategy',
    title: 'Go-to-Market Strategy',
    tagline: 'Find the path to market.',
    description: 'Identify the right opportunities and build a focused plan to reach them.',
    capabilities: [
      'Market assessment and segmentation',
      'Ideal customer profiles',
      'GTM strategy and roadmap',
      'Market entry and expansion',
      'Product launches',
    ],
  },
  {
    number: '03',
    slug: 'marketing-communications',
    title: 'Marketing & Communications',
    tagline: 'Build visibility and demand.',
    description: 'Translate strategy into coordinated marketing and communications that support commercial goals.',
    capabilities: [
      'Content and thought leadership',
      'PR and corporate communications',
      'Industry events and speaking opportunities',
      'Campaigns and demand generation',
      'Sales enablement',
    ],
  },
  {
    number: '04',
    slug: 'marketing-leadership',
    title: 'Marketing Leadership',
    tagline: 'Build the function. Lead the execution.',
    description:
      'Bring senior marketing leadership into the business, establish priorities and create the systems and team needed to deliver.',
    capabilities: [
      'Fractional marketing leadership',
      'Marketing strategy and planning',
      'Team and partner management',
      'Budgets, OKRs and performance tracking',
      'Cross-functional alignment and execution',
    ],
  },
];

export type SelectedWorkItem = {
  slug: string;
  name: string;
  url: string;
  logo: string | null;
  logoAlt: string;
  description: string;
};

export const selectedWork: SelectedWorkItem[] = [
  {
    slug: 'skytree',
    name: 'Skytree',
    url: 'https://skytree.eu',
    logo: '/images/logo-skytree-mono.png',
    logoAlt: 'Skytree logo',
    description:
      'Led global communications and supported North American go-to-market through positioning, messaging, PR, industry events and commercial communications.',
  },
  {
    slug: 'capture6',
    name: 'Capture6',
    url: 'https://capture6.com',
    logo: '/images/logo-capture6-mono.png',
    logoAlt: 'Capture6 logo',
    description:
      'Built and led the marketing function from the ground up, establishing positioning, GTM priorities, communications, sales enablement and performance tracking.',
  },
  {
    slug: 'crbon-labs',
    name: 'Crbon Labs',
    url: 'https://www.crbonlabs.com',
    logo: '/images/logo-crbonlabs-mono.png',
    logoAlt: 'Crbon Labs logo',
    description:
      'Defined the product positioning, messaging and value proposition, then built the full product marketing package and guided visual identity development with an external designer.',
  },
];
