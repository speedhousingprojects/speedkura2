export interface Amenity {
  id: string;
  name: string;
  category: 'wellness' | 'social' | 'kids' | 'essentials';
  icon: string;
}

export interface FloorPlan {
  id: string;
  type: string;
  area: string;
  price: string;
  facing: string;
  features: string[];
  image: string;
  isPopular?: boolean;
}

export interface DistanceItem {
  destination: string;
  time: string;
  category: 'transit' | 'tech' | 'education' | 'healthcare';
}

export const PROJECT_INFO = {
  name: 'Codename Hi-Five',
  developer: 'Kura Homes',
  tagline: 'Your Home at Hyderabad’s ORR Exit-5',
  subheading: 'Luxurious 2 BHK & Duplex gated community homes starting from ₹55 Lakhs. Experience premium living with 70% open spaces, adjacent to Bowrampet reserve forests.',
  phone: '8008008946',
  phoneDisplay: '800 800 8946',
  whatsappUrl: 'https://wa.me/918008008946?text=Hi%2C%20I%20am%20interested%20in%20Codename%20Hi-Five%20by%20Kura%20Homes.%20Please%20send%20brochure%20and%20pricing%20breakdown.',
  location: 'Adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043',
  googleMapsUrl: 'https://maps.app.goo.gl/xA6RJPGZQS1HwaYA6',
  reraNumber: 'P02200002810',
  hmdaNumber: 'G1/DM/2237/BP/2021',
  startingPrice: '₹55 Lakhs',
  pricePerSft: '₹4,999/sft',
  totalAcres: '5.3 Acres',
  completionStatus: '90% Constructed',
};

export const QUICK_STATS = [
  { value: '5.3 Acres', label: 'Gated Township' },
  { value: '2 BHK & Duplex', label: 'Smart Layouts' },
  { value: '₹4,999/sft', label: 'Starting Price' },
  { value: '1,100 - 2,200', label: 'Sq.Ft Carpet Area' },
  { value: '1 Min', label: 'To ORR Exit 5' },
  { value: '90% Built', label: 'Possession Soon' },
];

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: '2bhk',
    type: '2 BHK Smart Suite',
    area: '1,100 – 1,350 Sq.Ft',
    price: 'Starting at ₹55 Lakhs*',
    facing: 'East / West Facing Choices',
    features: [
      '100% Vaastu compliant layout with zero wasted corridor space',
      'East & West facing entrance choices',
      'Cross-ventilated living space with grand balconies',
      'Smart utility room & modular kitchen provision'
    ],
    image: '/images/bedroom 1.webp',
    isPopular: true,
  },
  {
    id: 'duplex',
    type: 'Signature Duplex Suite',
    area: '1,900 – 2,200 Sq.Ft',
    price: 'Starting at ₹95 Lakhs*',
    facing: 'Double-Height Living & Terrace',
    features: [
      'Expansive double-height living room layout',
      'Private terrace deck with green forest views',
      'Master bedroom penthouse suites on upper level',
      'Dual covered car parking with EV point access'
    ],
    image: '/images/Master bedroom.webp',
  }
];

export const AMENITY_TABS = [
  { id: 'wellness', label: 'Wellness & Fitness', image: '/images/swimming pool.webp' },
  { id: 'social', label: 'Social & Leisure', image: '/images/club house 1.webp' },
  { id: 'kids', label: 'Kids & Sports', image: '/images/Basket ball court.webp' },
  { id: 'essentials', label: 'Convenience & Security', image: '/images/Aerial view 2.webp' },
];

export const AMENITIES: Record<string, string[]> = {
  wellness: [
    'Rooftop Infinity Swimming Pool',
    'Fully Equipped Air-Conditioned Gymnasium',
    'Yoga, Meditation & Aerobics Deck',
    'Landscaped Jogging & Walking Track',
    'Steam, Sauna & Wellness Spa Facility',
    'Reflexology Acupressure Pathways',
  ],
  social: [
    'Luxe Co-Working & Conference Studio',
    'Grand Multipurpose Banquet Hall',
    'Double-Height Reception Foyer',
    'Fully-Furnished Luxury Guest Suites',
    'Amphitheatre for Community Gatherings',
    'Rooftop Barbecue & Party Terrace',
  ],
  kids: [
    'Traffic-Free Children’s Play Arena',
    'Professional Net Cricket Practice Pitch',
    'Half Basketball & Badminton Courts',
    'Dedicated Kids Cycling Track',
    'Indoor Games Room (Table Tennis, Billiards)',
    'Toddler Splash Pool & Sand Pit',
  ],
  essentials: [
    'EV Fast-Charging Charging Stations',
    'Multi-Tier 24/7 Security with CCTV Surveillance',
    '100% DG Power Backup for Common Areas & Homes',
    'Convenience Supermarket & Pharmacy Space',
    'High-Speed Automatic Passenger Elevators',
    'Centralized Water Softening & STP Plant',
  ],
};

export const DISTANCE_MATRIX = [
  { destination: 'ORR Exit No. 5 (Dundigal/Bowrampet)', time: '1 Min', distance: '500 meters' },
  { destination: 'Oakridge & Silver Oaks International Schools', time: '8 Mins', distance: '4.2 km' },
  { destination: 'Tech Mahindra & Genome Valley Hubs', time: '15 Mins', distance: '11 km' },
  { destination: 'Miyapur Metro Station', time: '18 Mins', distance: '13 km' },
  { destination: 'Hitec City / Financial District (via ORR)', time: '25 Mins', distance: '24 km' },
  { destination: 'Rajiv Gandhi International Airport (via ORR)', time: '40 Mins', distance: '48 km' },
];

export const PERSPECTIVES = [
  {
    title: 'Why ORR Exit-5 Corridor?',
    desc: 'An in-depth look at proximity metrics to international schools, pharmaceutical parks, and the ORR loop transit advantage.',
    videoSrc: '/videos/why-this-location.mp4',
  },
  {
    title: 'Investment Appreciation Value',
    desc: 'Comparing entry pricing of ORR 5 at ₹4,999/sq.ft with older corridors of ORR 3 (₹9K-10K/sq.ft) and historical growth curves.',
    videoSrc: '/videos/investment.mp4',
  },
  {
    title: 'Vaastu & Spaces Philosophy',
    desc: 'Our chief architect explains the Vaastu-compliant flow, cross-ventilated bedroom placements, and zero-corridor design.',
    videoSrc: '/videos/Design.mp4',
  },
];

// Compatibility aliases
export const BRAND = {
  name: PROJECT_INFO.name,
  developer: PROJECT_INFO.developer,
  tagline: PROJECT_INFO.tagline,
  rera: PROJECT_INFO.reraNumber,
  hmda: PROJECT_INFO.hmdaNumber,
  phone: PROJECT_INFO.phoneDisplay,
  phoneAlt: '800 800 8972',
  whatsapp: '918008008946',
  email: 'senareddy.kura@speedhousing.in',
  address: PROJECT_INFO.location,
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.968607142475!2d78.3752!3d17.5568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBowrampet!5e0!3m2!1sen!2sin!4v1700000000000',
};

export const FOOTER_DATA = {
  callout: '500+ homes booked at CODENAME HI-FIVE. It\'s your turn now.',
  address: PROJECT_INFO.location,
  hmda: PROJECT_INFO.hmdaNumber,
  rera: PROJECT_INFO.reraNumber,
};

export const ASSETS = {
  logos: {
    kuraHomes: '/logos/kura-homes-logo-2.png',
    hiFive: '/logos/hifive-logo.jpeg',
  },
  videos: {
    hero: '/videos/hero-video.mp4',
    construction: '/videos/sanarelli_progress_web.mp4',
  },
  images: {
    heroBg: '/images/Front view.webp',
  },
};

export const NAV_LINKS = [
  { label: 'Overview', href: '#hero' },
  { label: 'Homes & Plans', href: '#pricing' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Progress', href: '#progress' },
];
