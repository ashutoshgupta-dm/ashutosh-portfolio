/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SocialLink {
  platform: 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'youtube';
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'social' | 'seo' | 'website' | 'content';
  imageUrl: string;
  description: string;
  role: string;
  tools: string[];
  clientBrief: string;
  deliverables: string[];
  keyActions: string[];
  results?: string;
  additionalNotes?: string;
  myWorkPoints?: string[];
  websiteUrl?: string;
  socialLinks?: SocialLink[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  toolsUsed: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  details?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
  iconName: string;
}


