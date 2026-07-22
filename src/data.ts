/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Service, Education, SkillCategory } from './types';
import anandPlasticsLogo from './assets/images/anand_plastics_logo_1784205714289.jpg';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'marketing',
    title: 'Marketing & Strategy',
    iconName: 'Megaphone',
    items: [
      'Social Media Management',
      'Content Calendar Planning',
      'Lead Generation Support',
      'Client Communication',
      'Meta Ads Support'
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Analytics',
    iconName: 'TrendingUp',
    items: [
      'Search Engine Optimization',
      'On-page SEO',
      'Website Optimization',
      'Google Search Console',
      'Google Analytics',
      'Keyword Research'
    ]
  },
  {
    id: 'design',
    title: 'Design & Content',
    iconName: 'Palette',
    items: [
      'Canva',
      'Social Media Post Design',
      'Product Poster Design',
      'Caption Writing',
      'Blog Writing',
      'Website Content'
    ]
  },
  {
    id: 'web',
    title: 'Website & Tools',
    iconName: 'Globe',
    items: [
      'WordPress',
      'Elementor',
      'Website Updates',
      'MS Excel',
      'ChatGPT',
      'AI Productivity Tools'
    ]
  },
  {
    id: 'video',
    title: 'Video Editing',
    iconName: 'Video',
    items: [
      'CapCut',
      'Filmora',
      'VN Editor',
      'Short-form Video Editing',
      'Captions & Overlays',
      'Reels & YouTube Shorts'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    title: 'Digital Marketing Executive',
    company: 'Online Bano Agency',
    period: 'Nov 2025 - Present (1 Year)',
    location: 'New Delhi, India',
    description: 'Working as an early-career digital marketing professional inside a fast-paced agency. Responsible for translating diverse business goals into visually appealing social media content, on-page SEO architectures, and responsive web assets.',
    bulletPoints: [
      'Managed active client social media pages, curated content calendars, and scheduled consistent weekly postings.',
      'Designed high-engagement product posts, corporate posters, and promotional banner creatives using Canva.',
      'Supported search engine optimization (SEO) tasks, focusing on keyword integration, image alt-texts, and on-page structures.',
      'Updated and managed WordPress websites, applying changes using Elementor and editing layout content.',
      'Assisted senior marketers with setting up Meta Ads campaigns, capturing leads, and refining audience segments.',
      'Authored SEO-optimized product articles, client blog posts, social captions, and structured landing page copy.',
      'Edited dynamic short-form videos, Instagram reels, and YouTube shorts with timed captions and graphic overlays.',
      'Iterated layouts and copy options strictly according to client-specific requirements and direct agency feedback.'
    ],
    toolsUsed: ['Canva', 'WordPress', 'Google Search Console', 'Google Analytics', 'Meta Ads Manager', 'CapCut', 'Filmora']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-anand-plastics',
    title: 'Anand Plastics',
    subtitle: 'Social Content & SEO Support',
    category: 'social',
    imageUrl: anandPlasticsLogo,
    description: 'Delivered end-to-end social media post design, product-focused visual creatives, and Instagram branding support while improving search engine performance on WordPress.',
    role: 'Digital Marketing Executive',
    tools: ['Canva', 'WordPress', 'SEO'],
    clientBrief: 'The client requested high-impact, product-centric social media layouts to highlight plastic manufacturing specifications alongside a clean WordPress SEO structure to drive search query traffic.',
    deliverables: [
      'Custom Instagram grids and product showcase templates',
      'Optimized WordPress meta tags, image tags, and content placement',
      'Engaging post descriptions highlighting B2B product features'
    ],
    keyActions: [
      'Researched and integrated key industry search terms into the existing website layout.',
      'Designed clean product posters prioritizing product durability and usage information.',
      'Monitored keyword performance to support WordPress content updates.'
    ],
    myWorkPoints: [
      'Designed custom Instagram grids and product showcase templates highlighting manufacturing specifications.',
      'Optimized WordPress meta tags, header structures, and image alt-tags to improve Google search visibility.',
      'Drafted engaging post captions and B2B product descriptions to drive user interactions.'
    ],
    websiteUrl: 'https://anandplastics.com',
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/anandplastics' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/anandplastics' }
    ]
  },
  {
    id: 'proj-kovark',
    title: 'Kovark / A Kovark',
    subtitle: 'Instagram Page Support & Content Planning',
    category: 'social',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Executed active Instagram page support, digital poster design, strategic caption writing, and basic SEO content structure to boost user interactions.',
    role: 'Social Media Management & Design',
    tools: ['Canva', 'Content Writing', 'SEO'],
    clientBrief: 'Kovark needed consistent social brand styling to elevate its Instagram presence. The challenge was aligning caption copy to search trends while maintaining a casual, modern tone.',
    deliverables: [
      'Social media poster designs with structured grid layouts',
      'Targeted keyword-rich captions for search discovery',
      'Weekly content plans outlining key business offerings'
    ],
    keyActions: [
      'Drafted engaging captions matching the brand voice.',
      'Sourced aesthetic, brand-focused templates to showcase agency capabilities.',
      'Applied on-page SEO best practices during the overall content outline phases.'
    ],
    myWorkPoints: [
      'Created custom social media poster designs with structured grid layouts in Canva.',
      'Drafted targeted, keyword-rich captions and hashtag strategies for search discovery.',
      'Formulated weekly content plans outlining core agency and business offerings.'
    ],
    websiteUrl: 'https://kovark.com',
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/kovark' },
      { platform: 'facebook', url: 'https://facebook.com/kovark' }
    ]
  },
  {
    id: 'proj-signxpress',
    title: 'SignXpress India',
    subtitle: 'SEO Articles & Braille Product Posters',
    category: 'seo',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Designed corporate-grade product posters for Braille and accessibility signs, combined with publishing SEO-friendly informational product articles.',
    role: 'SEO & Product Design Specialist',
    tools: ['Canva', 'SEO Content', 'Keyword Research'],
    clientBrief: 'The objective was to clearly communicate technical features of tactile Braille signage while writing comprehensive, keyword-focused articles explaining regulatory compliance.',
    deliverables: [
      'Minimalist accessibility product visual aids',
      'Deep-dive SEO blogs focusing on signage compliance requirements',
      'Corporate blue-and-white brand guidelines alignment'
    ],
    keyActions: [
      'Performed initial keyword research to identify high-potential searches around accessible signage.',
      'Structured technical content clearly to appeal to both property managers and search engines.',
      'Designed posters visually explaining tactile dots and high-contrast lettering specs.'
    ],
    myWorkPoints: [
      'Designed minimalist accessibility product visual aids and product posters.',
      'Wrote and published deep-dive SEO-friendly compliance articles around Braille tactile signage guidelines.',
      'Aligned all marketing collateral with the client\'s corporate blue-and-white brand guidelines.'
    ],
    websiteUrl: 'https://signxpressindia.com',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/signxpress' }
    ]
  },
  {
    id: 'proj-satnam-overseas',
    title: 'Satnam Overseas',
    subtitle: 'Premium Product Design & Presentation',
    category: 'content',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Developed premium product creatives for eco-friendly non-woven bags, emphasizing feature highlights with brand-consistent corporate styling.',
    role: 'Creative Post Designer',
    tools: ['Canva', 'Social Media Design', 'Content Writing'],
    clientBrief: 'Satnam Overseas requested a series of elegant, professional product posts emphasizing environmental friendliness and durability, maintaining a blue-and-white theme.',
    deliverables: [
      'Eco-friendly product post banners and listings templates',
      'Concise, benefit-driven product copy focusing on eco-benefits',
      'Consistent, cohesive layout rules for multi-channel posts'
    ],
    keyActions: [
      'Selected specific typography to emphasize brand quality.',
      'Highlighted technical product specifications (GSM weight, handle durability) within designs.',
      'Crafted copy outlining bulk procurement opportunities.'
    ],
    myWorkPoints: [
      'Developed eco-friendly product banners and high-converting listing templates.',
      'Drafted benefit-driven product copy emphasizing non-woven material durability and eco-benefits.',
      'Established consistent multi-channel design layouts with prominent corporate branding.'
    ],
    websiteUrl: 'https://satnamoverseas.com',
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com/satnamoverseas' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/satnamoverseas' }
    ]
  },
  {
    id: 'proj-votec-consulting',
    title: 'VOTEC Consulting',
    subtitle: 'Corporate B2B Services Communication',
    category: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Structured and designed B2B technology consulting service posters highlighting SAP, Oracle, and IBM solutions integration pathways.',
    role: 'B2B Creative Content Executive',
    tools: ['Canva', 'B2B Design', 'Content Structuring'],
    clientBrief: 'The partner needed corporate B2B creatives to present high-end consulting solutions. Complex cloud integration pathways had to be presented clearly and professionaly.',
    deliverables: [
      'Service posters mapping SAP and IBM cloud solution benefits',
      'B2B slide templates for digital outreach',
      'Structured textual callouts showing corporate problem-solving capabilities'
    ],
    keyActions: [
      'Analyzed corporate service offerings to extract core value propositions.',
      'Utilized high-contrast typography and precise corporate alignments in Canva.',
      'Supported general web visibility by arranging structured digital copy.'
    ],
    myWorkPoints: [
      'Structured service posters mapping corporate benefits of SAP, Oracle, and IBM solutions.',
      'Designed premium B2B slide templates for digital outreach campaigns.',
      'Arranged structured digital copy and callouts demonstrating partner integration capabilities.'
    ],
    websiteUrl: 'https://votecconsulting.com',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/votecconsulting' },
      { platform: 'twitter', url: 'https://twitter.com/votecconsulting' }
    ]
  },
  {
    id: 'proj-akash-blowers',
    title: 'Akash Blowers',
    subtitle: 'SEO Optimization & WordPress Management',
    category: 'seo',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Improved web visibility and search engine optimization (SEO) for an industrial blower manufacturing business, while optimizing product catalog layouts on WordPress.',
    role: 'SEO & WordPress Executive',
    tools: ['WordPress', 'SEO', 'Canva'],
    clientBrief: 'Akash Blowers required technical on-page SEO optimization and strategic layout updates on WordPress to rank their heavy industrial blowers higher in B2B search results.',
    deliverables: [
      'Keyword-rich product descriptions and technical specification sheets',
      'Fully optimized meta tags, header tags, and alt-image details',
      'Custom visual banners designed for heavy-duty industrial blowers'
    ],
    keyActions: [
      'Conducted extensive B2B keyword research for industrial fan and centrifugal blower search terms.',
      'Revised WordPress page layouts to increase user engagement and inquiries.',
      'Created and integrated visual product banners matching the corporate blue theme.'
    ],
    myWorkPoints: [
      'Conducted extensive B2B keyword research and optimized product specification descriptions.',
      'Configured on-page SEO details including meta tags, header tags, and descriptive image alt-text.',
      'Designed and deployed corporate-branded visual catalog banners for heavy-duty industrial blowers.'
    ],
    websiteUrl: 'https://akashblowers.com',
    socialLinks: [
      { platform: 'youtube', url: 'https://youtube.com/@akashblowers' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-smm',
    title: 'Social Media Management',
    description: 'Full channel coordination to keep your brand active, professional, and visually engaging across platforms.',
    iconName: 'Megaphone',
    bullets: [
      'Strategic content calendars',
      'Consistent page aesthetics',
      'Audience interaction tracking',
      'Tailored hashtag architectures'
    ]
  },
  {
    id: 'srv-seo',
    title: 'SEO & Site Optimization',
    description: 'Helping your website align with user search intent, loading standards, and primary Google ranking criteria.',
    iconName: 'TrendingUp',
    bullets: [
      'Keyword mapping & intent alignment',
      'On-page content structures',
      'Image tagging & meta details',
      'Search Console health tracking'
    ]
  },
  {
    id: 'srv-wp',
    title: 'WordPress Web Updates',
    description: 'Safe, layout-consistent management of WordPress sites using page builders like Elementor.',
    iconName: 'Globe',
    bullets: [
      'New product page layouts',
      'Blog updates & meta parameters',
      'Elementor canvas edits',
      'Copy adjustments & links fixes'
    ]
  },
  {
    id: 'srv-design',
    title: 'Creative Post Design',
    description: 'Eye-catching, brand-aligned visual banners, digital flyers, and product posters crafted carefully using Canva.',
    iconName: 'Palette',
    bullets: [
      'High-contrast social templates',
      'Clear technical feature callouts',
      'Optimized digital layouts',
      'Color-palette consistent designs'
    ]
  },
  {
    id: 'srv-ads',
    title: 'Meta Ads Support',
    description: 'Setting up campaign essentials, organizing audience parameters, and designing highly conversion-focused creatives.',
    iconName: 'Percent',
    bullets: [
      'Ad creative design & tests',
      'Lead-generation form setups',
      'Targeting settings alignment',
      'Basic performance checks'
    ]
  },
  {
    id: 'srv-video',
    title: 'Short-Form Video Editing',
    description: 'Slicing engaging reels and shorts that hook viewers using modern mobile and desktop editor overlays.',
    iconName: 'Video',
    bullets: [
      'Quick cut transitions & pacing',
      'Subtitles & text highlights',
      'Audio & trend track alignment',
      'Clear visual call-to-actions'
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'edu-ba-honours',
    degree: 'B.A. Honours',
    institution: 'University of Delhi',
    period: '2023 - 2026',
    details: 'Pursuing academic studies focusing on communications, socio-economic analysis, and critical thinking.'
  },
  {
    id: 'edu-iti',
    degree: 'ITI Electronic Mechanic Certification',
    institution: 'ITI Pusa, New Delhi',
    details: 'Practical training focusing on hardware troubleshooting, structured signaling pathways, and electronics fundamentals, providing a strong technical edge.'
  },
  {
    id: 'edu-school',
    degree: 'Senior Secondary School No.1',
    institution: 'CBSE Board School, New Delhi',
    details: 'Completed standard high-school curriculum focusing on commerce, business basics, and academic communication.'
  }
];
