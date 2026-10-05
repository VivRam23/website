import raw from './portfolio.json';

/**
 * All /portfolio content lives in portfolio.json (edit that file to change the page).
 * This file only describes its shape, so mistakes are caught when the JSON is edited.
 */

export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Static version shown to visitors who prefer reduced motion (for animated images). */
  staticSrc?: string;
  /** External link, used for the video still. */
  href?: string;
  linkLabel?: string;
  /** Caps the rendered width (px) of tall images. */
  maxWidth?: number;
};

export type CaseSection = {
  label?: string;
  text?: string;
  paragraphs?: string[];
  items?: string[];
};

export type PortfolioCase = {
  id: string;
  company: string;
  role?: string;
  title: string;
  outcome: string;
  toggleLabel: string;
  lead: PortfolioImage;
  sections: CaseSection[];
  /** Each row is one image, or two side by side. */
  media: PortfolioImage[][];
};

export type PortfolioData = {
  meta: { title: string; description: string };
  intro: { eyebrow: string; heading: string; text: string };
  cases: PortfolioCase[];
  contact: { heading: string; note: string };
};

// Assigning (not casting) makes TypeScript verify the JSON matches the schema above.
export const portfolio: PortfolioData = raw;
