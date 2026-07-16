import aboutImage from '../assets/images/about.jpg';
import heroImage from '../assets/images/celeste-hero.jpg';

export interface YogaClass {
  name: string;
  time: string;
}

export interface ClassDay {
  day: string;
  classes: YogaClass[];
}

export interface Review {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export const site = {
  name: 'Celeste Yoga',
  legalName: 'Celeste Yoga',
  url: 'https://celesteyoga.co.uk',
  email: 'Celestehyoga@gmail.com',
  description:
    'Celeste Yoga — Rocket™, Ashtanga and Vinyasa classes in Newcastle. An inclusive space to come as you are and do what you can.',
  founderName: 'Celeste',
  founderImage: aboutImage.src,
  addressLocality: 'Newcastle',
  addressRegion: 'Tyne and Wear',
  addressCountry: 'GB',
  areaServed: 'Newcastle upon Tyne',
  priceRange: '££',
  // Add social profile URLs here as they become available (Instagram, etc.).
  sameAs: [] as string[],
  ogImage: heroImage.src,
  locale: 'en_GB',
} as const;

export const yogaStyles = ['Rocket Yoga', 'Ashtanga Yoga', 'Vinyasa Yoga'];

// Add student testimonials here to populate aggregateRating/review structured data.
export const reviews: Review[] = [];

export const classSchedule: ClassDay[] = [
  {
    day: 'Tues',
    classes: [{ name: 'Vinyasa @ Dance City', time: '5.30pm' }],
  },
  {
    day: 'Weds',
    classes: [
      { name: 'Vinyasa @ Modern Yoga', time: '12.00pm' },
      { name: 'Vinyasa @ Smarter Fitness', time: '6.00pm' },
      { name: 'Nurturing Flow @ Hotpod Jesmond', time: '8.30pm' },
    ],
  },
  {
    day: 'Thurs',
    classes: [{ name: 'Rocket Yoga @ Modern Yoga', time: '6.00pm' }],
  },
  {
    day: 'Fri',
    classes: [
      { name: 'Hot Flow @ Hot Yoga Ncl', time: '10.45am' },
      { name: 'Hotpod Flow @ Hotpod Jesmond', time: '4.00pm' },
    ],
  },
  {
    day: 'Sat',
    classes: [
      { name: 'Vinyasa @ Smarter Fitness', time: '8.00am' },
      { name: 'Vinyasa @ Modern Yoga', time: '10.00am' },
    ],
  },
  {
    day: 'Sun',
    classes: [{ name: 'Hotpod Flow @ Hotpod Jesmond', time: '8.30am & 10.00am' }],
  },
];
