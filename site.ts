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
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
];

export const proofStats = [
  { value: '15+ years', label: 'Marketing & GTM leadership across climate, deep tech and consumer companies' },
  { value: '0 → 1', label: 'Marketing functions built from the ground up, twice' },
  { value: '250% YoY', label: 'Growth building my own brand from launch through national distribution' },
  { value: '150+', label: 'Retail and wholesale partners secured for a self-founded consumer brand' },
  { value: 'Up to 700%', label: 'Marketing ROI achieved on specific campaigns and channels' },
];

export const engagementModels = [
  {
    title: 'Fractional leadership',
    description: 'Senior marketing, GTM or communications leadership embedded in the team, on an ongoing part-time basis.',
  },
  {
    title: 'Strategic projects',
    description: 'Focused engagements around positioning, product marketing, GTM strategy, launches or market entry.',
  },
  {
    title: 'Interim leadership',
    description: 'Hands-on marketing leadership during periods of growth, transition or team building — full-time, for a defined period.',
  },
];

export const howIHelp = [
  {
    number: '01',
    title: 'Shape the story',
    description:
      'Turn complex products into clear, differentiated positioning and messaging that customers, partners and investors can understand — and care about.',
    tags: ['Positioning', 'Messaging', 'Value Proposition', 'Narrative'],
  },
  {
    number: '02',
    title: 'Build the go-to-market path',
    description:
      'Identify the customers, markets and use cases that matter most, then build a focused path from product to market.',
    tags: ['GTM Strategy', 'ICP & Segmentation', 'Market Entry', 'Launch Strategy'],
  },
  {
    number: '03',
    title: 'Turn strategy into action',
    description:
      'Carry the thinking through into the content, communications, sales tools and market activity needed to create momentum.',
    tags: ['Sales Enablement', 'Content', 'Communications', 'Events'],
  },
];

export type CaseStudySection = {
  heading: string;
  items: { title: string; body: string }[];
};

export type CaseStudyExample = {
  image: string;
  alt: string;
  caption: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  url: string;
  logo: string;
  role: string;
  theme: string;
  homepageSummary: string;
  tags: string[];
  challengeIntro: string;
  context: string;
  role_detail: string;
  challenges: string[];
  approach: CaseStudySection[];
  outcomes: string[];
  examples: CaseStudyExample[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'skytree',
    name: 'Skytree',
    url: 'https://skytree.eu',
    logo: '/images/logo-skytree.jpg',
    role: 'Go-to-Market & Strategic Communications',
    theme: 'Taking a complex European technology into North America',
    homepageSummary:
      'Repositioned a modular Direct Air Capture technology for a North American market, building the commercial narrative and go-to-market strategy behind its scale-up.',
    tags: ['Positioning', 'GTM', 'Product Marketing', 'Communications'],
    challengeIntro:
      'Skytree develops modular Direct Air Capture (DAC) machines designed for scalable carbon removal and utilization across industrial markets.',
    context:
      'Skytree develops modular Direct Air Capture (DAC) machines designed for scalable carbon removal and utilization across industrial markets.',
    role_detail:
      'I led global communications and North American go-to-market during a critical scale phase: expanding into North America, launching new commercial segments, and repositioning the company from an R&D-driven innovator to a commercially scalable DAC infrastructure provider.',
    challenges: [
      'A highly technical product in a crowded and evolving DAC market',
      'Multiple verticals — CEA, Food & Beverage, CCS, Oil & Gas — each requiring a differentiated value proposition',
      'Limited commercial narrative clarity across investor, policy and industrial stakeholders',
      'A need to establish Skytree as a credible North American brand',
      'A requirement to simultaneously drive pipeline growth, thought leadership and market education',
    ],
    approach: [
      {
        heading: 'Narrative & positioning',
        items: [
          { title: '', body: "Built Skytree's 2025 message architecture and global narrative foundation" },
          { title: '', body: 'Repositioned Skytree from standalone DAC machines to scalable DAC Parks' },
          { title: '', body: 'Developed differentiated messaging by vertical: DAC developers, Oil & Gas, Investors and CEA' },
          { title: '', body: 'Translated modularity into financial de-risking, phased deployment and capital efficiency' },
        ],
      },
      {
        heading: 'North America go-to-market',
        items: [
          { title: '', body: 'Developed a North American GTM strategy aligned to revenue and visibility targets' },
          { title: '', body: 'Prioritized target markets and stakeholder segments across Water Treatment, F&B, CCS and Oil & Gas' },
          { title: '', body: "Clarified positioning across Skytree's small-scale and industrial-scale product lines" },
          { title: '', body: 'Developed segment-specific commercial decks, including greenhouse market strategy' },
        ],
      },
      {
        heading: 'Campaign architecture — "1000x by 2050"',
        items: [
          { title: '', body: 'Designed a multi-channel content strategy positioning DAC Parks as the scalable pathway from 13Mt to 10Gt of carbon removal' },
          { title: '', body: 'Integrated PR, landing pages, webinars, blog, email and social into a unified narrative system' },
          { title: '', body: 'Embedded campaign messaging across website, sales materials and investor decks' },
          { title: '', body: 'Positioned Skytree as a thought leader in modular, capital-efficient DAC scalability' },
        ],
      },
    ],
    outcomes: [
      'Established Skytree as a credible North American DAC brand with increased visibility across priority markets',
      'Increased top-tier media coverage and high-level industry speaking opportunities',
      'Made the technological proposition of modular DAC commercially understandable for investors, partners and non-technical stakeholders',
      "Strengthened Skytree's perception as a scalable, capital-efficient modular DAC leader",
    ],
    examples: [
      {
        image: '/images/skytree-work-1-portfolio.jpg',
        alt: 'Skytree product portfolio architecture diagram',
        caption: 'Product portfolio architecture',
        description: 'Structured clear value propositions across small-scale and industrial DAC segments.',
      },
      {
        image: '/images/skytree-work-2-1000x.jpg',
        alt: 'Skytree "1000x by 2050" campaign visual',
        caption: '"1000x by 2050"',
        description: 'Reframed modular DAC as a scalable, capital-efficient pathway to 10Gt of carbon removal.',
      },
      {
        image: '/images/skytree-work-3-media.jpg',
        alt: 'Forbes feature on Skytree',
        caption: 'Global media coverage',
        description: 'Forbes feature reinforcing modular DAC as a scalable carbon removal pathway.',
      },
    ],
  },
  {
    slug: 'capture6',
    name: 'Capture6',
    url: 'https://capture6.com',
    logo: '/images/logo-capture6.jpg',
    role: 'Director of Marketing',
    theme: 'Building marketing from zero for an emerging technology',
    homepageSummary:
      'Joined as the first marketing hire and built the brand, positioning and go-to-market foundation for a water-positive carbon removal technology.',
    tags: ['Brand', 'Positioning', 'Communications', 'Commercialization'],
    challengeIntro:
      'Capture6 develops water-positive direct air capture technology that removes CO2 while increasing freshwater yield.',
    context:
      'Capture6 develops water-positive direct air capture technology that removes CO2 while increasing freshwater yield.',
    role_detail:
      "I joined as the first marketing hire as the company moved from validation to commercial deployment. The technology was credible; the market narrative wasn't yet defined.",
    challenges: [
      'Complex electrochemistry that was difficult to translate into commercial value',
      'Competing positioning across water, carbon and industrial markets',
      'No defined ICP or stakeholder prioritization',
      'Investor conversations that lacked a coherent commercial arc',
    ],
    approach: [
      {
        heading: 'Narrative & positioning',
        items: [
          { title: '', body: "Defined the company's positioning around water-integrated carbon removal" },
          { title: '', body: 'Built a messaging architecture that clarified value across water yield, carbon removal and industrial outputs' },
          { title: '', body: 'Reframed the technical story from process-first to outcome-first' },
        ],
      },
      {
        heading: 'Market & commercial structuring',
        items: [
          { title: '', body: 'Prioritized target markets and stakeholder segments to focus early commercial effort' },
          { title: '', body: 'Defined a differentiated brand position at the intersection of water infrastructure and carbon removal' },
          { title: '', body: 'Structured the early go-to-market around partnership-led deployment and industrial credibility' },
        ],
      },
      {
        heading: 'Brand & communication system',
        items: [
          { title: '', body: 'Designed the brand system and technical visual language' },
          { title: '', body: 'Built the website architecture and core commercial copy' },
          { title: '', body: 'Standardized messaging across investor, partner and public materials' },
        ],
      },
    ],
    outcomes: [
      "Elevated Capture6's positioning within the carbon removal ecosystem",
      'Clarified market positioning that supported progression of commercial projects and pilot deployments across multiple regions',
      'Increased brand visibility and credibility, driving inbound enquiries from partners and investors',
      'Aligned technical innovation with a coherent brand narrative during a key growth stage',
    ],
    examples: [
      {
        image: '/images/capture6-work-1-architecture.svg',
        alt: 'Capture6 integrated water-carbon architecture diagram',
        caption: 'Integrated water–carbon architecture',
        description: 'Infrastructure-embedded DAC model coupling brine treatment with freshwater recovery.',
      },
      {
        image: '/images/capture6-work-2-pathways.jpg',
        alt: 'Capture6 industrial value pathways diagram',
        caption: 'Industrial value pathways',
        description: 'Framed carbon removal as a multi-market industrial input, not a standalone process.',
      },
      {
        image: '/images/capture6-work-3-media.jpg',
        alt: 'Fast Company feature on Capture6',
        caption: 'Global media coverage',
        description: 'Fast Company feature reinforcing the wastewater-integrated carbon removal model.',
      },
    ],
  },
  {
    slug: 'brush-it-on',
    name: 'Brush It On',
    url: 'https://www.brushiton.org',
    logo: '/images/logo-brushiton.jpg',
    role: 'Co-Founder',
    theme: 'Building, scaling and exiting a mission-driven brand',
    homepageSummary:
      'Founded, scaled and successfully exited a sustainable personal care brand — from a single Indiegogo-funded product to 150+ retail partners nationally.',
    tags: ['Brand', 'Growth', 'Ecommerce', 'Partnerships'],
    challengeIntro:
      'Brush It On is a sustainable personal care brand created to reduce plastic waste through design-led, mission-driven alternatives.',
    context:
      'Brush It On is a sustainable personal care brand created to reduce plastic waste through design-led, mission-driven alternatives. Launched as a social enterprise committing 100% of profits to conservation causes, the brand began with a single bamboo toothbrush and expanded into a multi-category eco personal care portfolio.',
    role_detail: 'I founded, scaled, and successfully sold the business.',
    challenges: [
      'Entering a crowded consumer market dominated by low-cost, mass-produced products',
      'Building trust around a new brand with a strong mission commitment',
      'Launching with limited capital and no retail footprint',
      'Translating sustainability into aspirational lifestyle branding',
      'Balancing impact mission with commercial viability',
    ],
    approach: [
      {
        heading: 'Brand & positioning',
        items: [
          { title: '', body: 'Developed the full brand identity and sustainability-led value proposition' },
          { title: '', body: 'Built a mission-driven narrative rooted in conservation impact' },
          { title: '', body: 'Designed visual identity, packaging system and brand language' },
          { title: '', body: 'Positioned the brand as design-forward, not "eco-rustic"' },
        ],
      },
      {
        heading: 'Go-to-market & growth',
        items: [
          { title: '', body: 'Launched and successfully funded the initial product via Indiegogo' },
          { title: '', body: 'Built a multi-channel GTM across ecommerce, social, PR and retail' },
          { title: '', body: 'Secured distribution in 150+ retailers across Australia' },
          { title: '', body: 'Developed influencer and community-led brand advocacy' },
          { title: '', body: 'Scaled the product portfolio to 40+ SKUs' },
        ],
      },
      {
        heading: 'Commercial & operational scaling',
        items: [
          { title: '', body: 'Expanded from a single-SKU launch to a diversified eco personal care range' },
          { title: '', body: 'Built supplier, manufacturing and inventory systems' },
          { title: '', body: 'Structured retail expansion and wholesale strategy' },
          { title: '', body: 'Maintained mission commitment while scaling commercial footprint' },
        ],
      },
    ],
    outcomes: [
      'Grew distribution to 150+ retail locations across Australia',
      'Built a portfolio of 40+ mission-driven consumer products',
      'Successfully scaled and exited the business',
      'Established brand recognition within the Australian sustainability space',
    ],
    examples: [
      {
        image: '/images/brushiton-work-1-identity.jpg',
        alt: 'Brush It On brand identity and packaging',
        caption: 'Brand identity & mission narrative',
        description: 'Defined a conservation-first brand platform that embedded impact into every product, message and channel.',
      },
      {
        image: '/images/brushiton-work-2-retail.jpg',
        alt: 'Brush It On retail and community photos',
        caption: 'Community & retail expansion',
        description: 'Built a multi-channel growth engine across ecommerce, influencer partnerships and national retail distribution.',
      },
      {
        image: '/images/brushiton-work-3-indiegogo.jpg',
        alt: 'Brush It On Indiegogo campaign page',
        caption: 'Indiegogo launch',
        description: 'Validated product–market fit and funded the first production run through mission-led crowdfunding.',
      },
    ],
  },
];
