/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Service, Education, SkillCategory } from './types';
import anandPlasticsLogo from './assets/images/anand_plastics_cover.jpg';
import kovarkCover from './assets/images/kovark_cover.jpg';
import signxpressCover from './assets/images/signxpress_cover.jpg';
import satnamCover from './assets/images/satnam_cover.jpg';
import votecCover from './assets/images/votec_cover.jpg';
import akashCover from './assets/images/akash_blowers_cover.jpg';

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
    subtitle: 'SEO & Social Media',
    category: 'social',
    imageUrl: anandPlasticsLogo,
    description: 'Anand Plastics, established in 1990, supplies high-quality acrylic, polycarbonate, PVC and other interior and exterior materials. The company is known for durable products, reliable service and customized solutions.',
    role: 'Digital Marketing Executive',
    tools: ['Canva', 'WordPress', 'SEO'],
    clientBrief: '',
    deliverables: [],
    keyActions: [],
    myWorkPoints: ['Search Engine Optimization', 'Social Media Optimization'],
    websiteUrl: 'https://anandplastics.com',
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/anandplastics' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/anandplastics' }
    ]
  },
  {
    id: 'proj-kovark',
    title: 'Kovark',
    subtitle: 'SEO & Social Media',
    category: 'social',
    imageUrl: kovarkCover,
    description: 'Kovark provides flexible coworking spaces, private offices, and meeting rooms for modern professionals and businesses. It offers reliable facilities, transparent pricing, and a productive work environment.',
    role: 'Digital Marketing Executive',
    tools: ['Canva', 'WordPress', 'SEO'],
    clientBrief: '',
    deliverables: [],
    keyActions: [],
    myWorkPoints: ['Search Engine Optimization', 'Social Media Optimization'],
    websiteUrl: 'https://kovark.com',
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com/kovark' },
      { platform: 'facebook', url: 'https://facebook.com/kovark' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/kovark' }
    ]
  },
  {
    id: 'proj-signxpress',
    title: 'Signxpress India',
    subtitle: 'SEO & Social Media',
    category: 'seo',
    imageUrl: signxpressCover,
    description: 'Signxpress India provides PU tactile tiles, Braille signage, and road safety products. The company is known for durable, customized, and quality-tested accessibility solutions.',
    role: 'Digital Marketing Executive',
    tools: ['Canva', 'WordPress', 'SEO'],
    clientBrief: '',
    deliverables: [],
    keyActions: [],
    myWorkPoints: ['Social Media Optimization', 'Search Engine Optimization'],
    websiteUrl: 'https://signxpressindia.com',
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com/signxpressindia' },
      { platform: 'instagram', url: 'https://instagram.com/signxpressindia' },
      { platform: 'youtube', url: 'https://youtube.com/@signxpressindia' }
    ]
  },
  {
    id: 'proj-satnam-overseas',
    title: 'Satnam Overseas',
    subtitle: 'Social Media Design',
    category: 'content',
    imageUrl: satnamCover,
    description: 'Satnam Overseas manufactures and supplies high-quality non-woven shopping and carry bags. Established in 2013, the company is known for durable products, multiple sizes, and customized designs.',
    role: 'Creative Designer',
    tools: ['Canva', 'Content Writing'],
    clientBrief: '',
    deliverables: [],
    keyActions: [],
    myWorkPoints: ['Social Media Post Design', 'Content Creation'],
    websiteUrl: 'https://satnamoverseas.com',
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com/satnamoverseas' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/satnamoverseas' }
    ]
  },
  {
    id: 'proj-votec-consulting',
    title: 'VOTEC Group',
    subtitle: 'Business & Technology Consulting',
    category: 'website',
    imageUrl: votecCover,
    description: 'VOTEC Group provides business, process, and technology consulting services. The company helps businesses improve productivity, streamline operations, reduce costs, and build effective IT solutions.',
    role: 'Creative Content Executive',
    tools: ['Canva', 'Content Writing'],
    clientBrief: '',
    deliverables: [],
    keyActions: [],
    myWorkPoints: ['Social Media Post Design', 'Content Creation'],
    websiteUrl: 'https://votecconsulting.com',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/votecconsulting' },
      { platform: 'twitter', url: 'https://twitter.com/votecconsulting' }
    ]
  },
  {
    id: 'proj-akash-blowers',
    title: 'AKASH Blowers',
    subtitle: 'SEO & WordPress',
    category: 'seo',
    imageUrl: akashCover,
    description: 'AKASH Blowers is a leading manufacturer of industrial blowers and vacuum systems with over 45 years of experience. The company is known for durable products, advanced engineering, reliable service, and high-performance solutions.',
    role: 'SEO & WordPress Executive',
    tools: ['WordPress', 'SEO', 'Canva'],
    clientBrief: '',
    deliverables: [],
    keyActions: [],
    myWorkPoints: ['Search Engine Optimization', 'WordPress Management'],
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
