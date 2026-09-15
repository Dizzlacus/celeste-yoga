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
  name: 'Alma',
  legalName: 'Alma',
  // Domain and email still point at the previous brand until the new ones are
  // registered; update here and in public/CNAME together.
  url: 'https://celesteyoga.co.uk',
  email: 'celestehyoga@gmail.com',
  instagram: 'https://www.instagram.com/alma.yogancl/',
  instagramHandle: 'alma.yogancl',
  description:
    'Alma — Rocket™, Ashtanga and Vinyasa yoga with Celeste in Newcastle. An inclusive space to come as you are and do what you can.',
  founderName: 'Celeste',
  founderImage: aboutImage.src,
  addressLocality: 'Newcastle',
  addressRegion: 'Tyne and Wear',
  addressCountry: 'GB',
  areaServed: 'Newcastle upon Tyne',
  priceRange: '££',
  sameAs: ['https://www.instagram.com/alma.yogancl/'],
  privacyLastUpdated: '15 September 2026',
  ogImage: heroImage.src,
  locale: 'en_GB',
} as const;

export const yogaStyles = ['Rocket Yoga', 'Ashtanga Yoga', 'Vinyasa Yoga'];

// Add student testimonials here to populate aggregateRating/review structured data.
export const reviews: Review[] = [];

export interface UpcomingEvent {
  title: string;
  description: string[];
  date: string;
  /** Calendar date as YYYY-MM-DD in Europe/London. Events stay visible on that day. */
  startsOn: string;
  time: string;
  location: string;
  cost: string;
  bookingUrl: string;
  imageAlt: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: 'Autumn Equinox Mini Retreat',
    description: [
      'Acknowledging the Autumn Equinox with this mini evening retreat where we will explore a well-balanced practice, guided journaling and breath work before settling into a cosy extended Savasana. Spaces are limited and all materials provided — however if you wish to bring your own journal and mat please feel free.',
    ],
    date: 'Sunday 20th September',
    startsOn: '2026-09-20',
    time: '5–7pm',
    location: 'Modern Yoga, Gosforth',
    cost: '£25.00pp',
    bookingUrl: 'https://buy.stripe.com/7sY4gy35I4embqZ0kybAs02',
    imageAlt: 'Yoga retreat atmosphere',
  },
  {
    title: 'Move & Mingle',
    description: [
      'Move and Mingle is a new event that includes a balanced Yoga practice that filters into a social so you can connect with like-minded people. You are welcome to come alone or with someone — let us remember what it is like to appreciate human connection! To top these events off I have teamed up with local businesses so we can get tasty goodies at each event.',
      'These events will run bi-monthly / monthly — please keep an eye on the schedule as locations and themes will change.',
    ],
    date: 'Saturday 10th October',
    startsOn: '2026-10-10',
    time: '11.15am – 1.15pm',
    location: 'Modern Yoga, Gosforth',
    cost: '£20.00pp',
    bookingUrl: 'https://buy.stripe.com/00w3cugWy6mudz76IWbAs00',
    imageAlt: 'Yoga practice and community gathering',
  },
  {
    title: 'Winter Wind Down Retreat Day',
    description: [
      'Back for a 2nd year, this wind down for winter is a full day retreat and will include two contrasting practices, guest teachers, a soundbath, lunch, snacks and all refreshments.',
    ],
    date: 'Saturday 28th November',
    startsOn: '2026-11-28',
    time: '10am–4pm',
    location: 'Gosforth Garden Village',
    cost: '£75.00',
    bookingUrl: 'https://buy.stripe.com/00w8wO49M4emgLj3wKbAs03',
    imageAlt: 'Full day winter yoga retreat',
  },
];

export function londonToday(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/London' }).format(new Date());
}

export function isCurrentOrUpcoming(event: UpcomingEvent): boolean {
  return event.startsOn >= londonToday();
}

export const currentEvents = upcomingEvents
  .filter(isCurrentOrUpcoming)
  .sort((a, b) => a.startsOn.localeCompare(b.startsOn));

// Homepage community section — only when Move & Mingle is today or still upcoming.
export const featuredEvent = currentEvents.find((event) => event.title === 'Move & Mingle');

export const classSchedule: ClassDay[] = [
  {
    day: 'Tues',
    classes: [{ name: 'Vinyasa @ Dance City', time: '5.30pm' }],
  },
  {
    day: 'Weds',
    classes: [{ name: 'Vinyasa @ Modern Yoga', time: '12.00pm' }],
  },
  {
    day: 'Thurs',
    classes: [{ name: 'Rocket Yoga @ Modern Yoga', time: '6.00pm' }],
  },
  {
    day: 'Fri',
    classes: [
      { name: 'Dynamic @ Hotpod Jesmond', time: '4.00pm' },
      { name: 'Rocket Yoga @ Hot Yoga Ncl', time: '5.45pm' },
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
