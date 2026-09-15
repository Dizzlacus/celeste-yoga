import { getImage } from 'astro:assets';
import heroPhoto from '../assets/images/celeste-mobile-hero.jpg';

export async function getHeroImages() {
  const [avif, webp, fallback] = await Promise.all([
    getImage({ src: heroPhoto, format: 'avif', width: heroPhoto.width }),
    getImage({ src: heroPhoto, format: 'webp', width: heroPhoto.width }),
    getImage({ src: heroPhoto, width: heroPhoto.width }),
  ]);

  return { avif, webp, fallback };
}
