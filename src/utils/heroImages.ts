import { getImage } from 'astro:assets';
import heroDesktop from '../assets/images/celeste-hero.jpg';
import heroMobile from '../assets/images/celeste-mobile-hero.jpg';

export async function getHeroImages() {
  const [mobileAvif, mobileWebp, desktopAvif, desktopWebp, desktopFallback] = await Promise.all([
    getImage({ src: heroMobile, format: 'avif', width: heroMobile.width }),
    getImage({ src: heroMobile, format: 'webp', width: heroMobile.width }),
    getImage({ src: heroDesktop, format: 'avif', width: heroDesktop.width }),
    getImage({ src: heroDesktop, format: 'webp', width: heroDesktop.width }),
    getImage({ src: heroDesktop, width: heroDesktop.width }),
  ]);

  return { mobileAvif, mobileWebp, desktopAvif, desktopWebp, desktopFallback };
}
