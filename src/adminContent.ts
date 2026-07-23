import { PROJECTS } from './data';
import type { Project } from './types';
import defaultProfileImage from './assets/images/ashutosh_profile_correct.jpg';

export interface PortfolioContent {
  profileName: string;
  profileRole: string;
  profileLocation: string;
  profileImage: string;
  projects: Project[];
}

export const STORAGE_KEY = 'ashutosh-portfolio-content-v1';
export const ADMIN_SESSION_KEY = 'ashutosh-portfolio-admin-session';

export const DEFAULT_CONTENT: PortfolioContent = {
  profileName: 'Ashutosh Gupta',
  profileRole: 'Digital Marketing Executive',
  profileLocation: 'New Delhi, India',
  profileImage: defaultProfileImage,
  projects: PROJECTS,
};

export function cloneDefaultContent(): PortfolioContent {
  return JSON.parse(JSON.stringify(DEFAULT_CONTENT)) as PortfolioContent;
}

export function loadPortfolioContent(): PortfolioContent {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return cloneDefaultContent();
    const parsed = JSON.parse(raw) as Partial<PortfolioContent>;
    return {
      ...cloneDefaultContent(),
      ...parsed,
      projects: Array.isArray(parsed.projects) ? parsed.projects : cloneDefaultContent().projects,
    };
  } catch {
    return cloneDefaultContent();
  }
}

export function savePortfolioContent(content: PortfolioContent): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event('portfolio-content-updated'));
}

export function resetPortfolioContent(): void {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event('portfolio-content-updated'));
}

export async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function imageFileToDataUrl(
  file: File,
  maxWidth: number,
  maxHeight: number,
  quality = 0.86,
): Promise<string> {
  if (!file.type.startsWith('image/')) {
    throw new Error('Please select an image file.');
  }

  const source = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Could not read the image.'));
    reader.readAsDataURL(file);
  });

  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Could not process the image.'));
    img.src = source;
  });

  const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Image processing is not supported in this browser.');
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL('image/jpeg', quality);
}
