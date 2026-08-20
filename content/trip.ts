/**
 * Every piece of editable trip content lives here.
 * Edit this file to change the site copy. You should not need to touch any JSX.
 *
 * Images are all placeholders from /public/images. Swap the paths for real
 * photos when you have them; the layouts do not care about the filenames.
 */

/* ---------------------------------------------------------------- trip facts */

export const TRIP = {
  groom: "Sherwin",
  /** Working title. Change this one string and it updates everywhere. */
  name: "Operation Send-Off",
  /** Short word rendered as the giant hero type. Keep it to 3 or 4 characters. */
  heroWord: "GOA",
  destination: "Goa, India",
  /** ISO datetime the countdown ticks down to. Local time. */
  startDate: "2026-08-29T09:00:00",
  endDate: "2026-09-01T20:00:00",
  /** Human readable range shown under the hero. */
  dateRange: "29 August to 1 September 2026",
} as const;

/* ---------------------------------------------------------------- the mission */

export const MISSION = {
  /** Three lines that rotate as you scroll through the mission section. */
  titles: [
    "One last ride.",
    "Four days of Goa.",
    "Then he is off the market.",
  ],
  /** Roast-y intro paragraph. Word-by-word reveal on scroll, so keep it punchy. */
  body:
    "Sherwin has spent years telling us he would settle down eventually, and somehow he actually went and did it. " +
    "So fourteen of us are dragging him to Goa for four days: sunburn, questionable decisions, and a group photo where at " +
    "least three people are blinking. He gets one last unsupervised weekend. We get the stories. Everyone wins except his liver.",
} as const;

/* ------------------------------------------------------------------- the crew */

export type CrewMember = {
  name: string;
  role: string;
  image: string;
  /** Bento grid footprint. Mix of sizes keeps the layout interesting. */
  span: string;
};

export const CREW: CrewMember[] = [
  {
    name: "Sherwin",
    role: "The Groom, Guest of Dishonour",
    image: "/images/4312e1bb-e030-4528-b6df-8a6ea69fe384.png",
    span: "col-span-2 row-span-2",
  },
  {
    name: "Shrinivas",
    role: "Chief Planning Officer",
    image: "/images/b2401fa5-4eac-465f-b1f9-014aadc182ee.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Jaideep",
    role: "Treasurer, Keeper of the Spreadsheet",
    image: "/images/dd1b32a8-3722-4ea2-8808-10d53532809d.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Ankur",
    role: "Head of Bad Ideas",
    image: "/images/61af06cc-84d0-4031-a0ed-76fc43b1c1e1.png",
    span: "col-span-1 row-span-2",
  },
  {
    name: "Nirag",
    role: "Designated Driver (unwillingly)",
    image: "/images/249083d2-c49c-4c06-a125-376284d90c42.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Poornesh",
    role: "Official Photographer",
    image: "/images/7638f650-8586-4403-8c13-141921a04f9d.png",
    span: "col-span-2 row-span-1",
  },
  {
    name: "Rakshit",
    role: "Chief Liability Officer",
    image: "/images/5b3bdb95-fac7-4d22-aa97-98b5d547b2db.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Suraj",
    role: "Morning Alarm, Unpaid",
    image: "/images/634f7bae-77a5-49d0-a0ab-5271a6194e66.png",
    span: "col-span-1 row-span-2",
  },
  {
    name: "Ankit",
    role: "Head of Snacks and Logistics",
    image: "/images/09ffa8fd-cdd1-453f-9aa2-d6c702a1f4b5.png",
    span: "col-span-2 row-span-1",
  },
  {
    name: "Udai",
    role: "Negotiator, Haggles With Everyone",
    image: "/images/040e36b1-d16f-474b-a712-a9979e6ab479.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Rajat",
    role: "DJ and Aux Cable Dictator",
    image: "/images/hero-side-1.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Sol",
    role: "The Brother, Legally Responsible",
    image: "/images/hero-side-2.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Rahul",
    role: "Last One Awake, First One Missing",
    image: "/images/hero-side-3.png",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Jinendar",
    role: "Voice of Reason (ignored)",
    image: "/images/hero-side-4.png",
    span: "col-span-1 row-span-1",
  },
];

/* ------------------------------------------------------------------ the stats */

export const TRIP_STATS = [
  { label: "Days", value: "4" },
  { label: "Cities", value: "2" },
  { label: "Kilometres", value: "580" },
  { label: "Regrets", value: "0" },
] as const;

/** Parallax media slot in the stats section. Drop a video URL in here later. */
export const STATS_VIDEO_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27eb7fb4-0105-4010-ac9e-0ac977a31b05_1-FZ89nvBAAsR3caRJbhYv7T2mjBofth.mp4";

/* -------------------------------------------------------------------- the plan */

export type TripDay = {
  day: number;
  date: string;
  title: string;
  summary: string;
  image: string;
};

export const DAYS: TripDay[] = [
  {
    day: 1,
    date: "Fri 29 Aug",
    title: "Landing and Losing Track",
    summary: "Arrivals, check in, and a beach shack that stays open far too late.",
    image: "/images/hero-side-1.png",
  },
  {
    day: 2,
    date: "Sat 30 Aug",
    title: "North Goa, Full Send",
    summary: "Late breakfast, water sports nobody trained for, then the big night out.",
    image: "/images/hero-side-2.png",
  },
  {
    day: 3,
    date: "Sun 31 Aug",
    title: "Recovery and Old Goa",
    summary: "Slow start, a cruise, and a dinner where the roasting officially begins.",
    image: "/images/hero-side-4.png",
  },
  {
    day: 4,
    date: "Mon 1 Sept",
    title: "The Reckoning",
    summary: "Breakfast, damage assessment, and the sad drive back to the airport.",
    image: "/images/interior-view.png",
  },
];

/* --------------------------------------------------------------- the reviews */

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
};

export const REVIEWS: Review[] = [
  {
    author: "Shrinivas",
    rating: 5,
    title: "Solid groom, would attend wedding again",
    body: "Reliable, generous, always picks up the phone. Ten years of friendship and he has let me down maybe twice. Both times involved a cricket match.",
  },
  {
    author: "Ankur",
    rating: 1,
    title: "Said he would be ready in five minutes",
    body: "That was in 2019. I am still in the car. Would not recommend for anything with a departure time.",
  },
  {
    author: "Poornesh",
    rating: 5,
    title: "Genuinely one of the good ones",
    body: "He will drive across the city to help you move a sofa and then refuse to take petrol money. Annoying man. Great friend.",
  },
  {
    author: "Rakshit",
    rating: 1,
    title: "Dangerous levels of confidence at karaoke",
    body: "No range. No rhythm. No awareness. Somehow still hogs the mic for forty minutes. One star, and that star is for the effort.",
  },
  {
    author: "Sol",
    rating: 2,
    title: "As a brother: mixed reviews",
    body: "Broke my PlayStation in 2011 and blamed the dog. We do not have a dog. Otherwise fine.",
  },
  {
    author: "Jinendar",
    rating: 5,
    title: "She is getting a good one",
    body: "Do not tell him I said this. It will ruin the whole weekend.",
  },
];

/* ----------------------------------------------------------- rules of the trip */

export const RULES = [
  "What happens in Goa gets posted in the group chat, not anywhere else.",
  "The groom does not pay for anything. He also does not get a vote.",
  "Everyone is in the group photo. No exceptions, no hiding behind Poornesh.",
  "Phones stay in pockets at dinner. Upload the photos later.",
  "If you are late, you are paying for the first round.",
  "No one gets left behind, no matter how convincing their argument is.",
] as const;

/* ---------------------------------------------------------- practical details */

export const PRACTICAL = {
  accommodation: {
    name: "TBD Villa, North Goa",
    address: "Address to be confirmed, Anjuna, Goa 403509",
    /** Swap for the real Google Maps share link once the booking is locked. */
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Anjuna+Goa",
  },
  emergencyContacts: [
    { name: "Shrinivas (trip lead)", phone: "+91 00000 00000" },
    { name: "Jaideep (money and bookings)", phone: "+91 00000 00000" },
  ],
  /** WhatsApp invite link for the group chat. */
  groupChatUrl: "https://chat.whatsapp.com/REPLACE_ME",
} as const;

/** Shared Drive folder. Set NEXT_PUBLIC_DRIVE_FOLDER_URL in .env.local and Vercel. */
export const DRIVE_FOLDER_URL = process.env.NEXT_PUBLIC_DRIVE_FOLDER_URL ?? "";

/* --------------------------------------------------------------- navigation */

export const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "The Crew", href: "/#crew" },
  { label: "The Plan", href: "/#plan" },
  { label: "Itinerary", href: "/itinerary" },
  { label: "Photos", href: "/photos" },
] as const;
