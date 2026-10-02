// ────────────────────────────────────────────────────────────────────────
// SECOND SHIFT — single source of truth for all site copy, stats, links,
// sponsors and image paths. Edit this file to change content anywhere on
// the site without touching component code.
// ────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Second Shift",
  tagline: "Compete. Connect. Belong.",
  positioning: "Building the Future of Corporate Sports",
  mission:
    "Turning sport into stronger teams and a more connected workplace.",
  url: "https://secondshiftclub.com",
  webApp: "https://app.secondshiftclub.com/",
  location: "Jaipur, Rajasthan",
  email: "info@secondshiftclub.com", // TODO: replace once the new domain/inbox is live
  phone: "+91 72970 91286",
  phoneHref: "tel:+917297091286",
  whatsapp: "https://wa.me/917297091286",
  instagram: "https://instagram.com/secondshift.club",
  linkedin: "https://in.linkedin.com/company/secondshift-co",
};

// Only 5 primary nav items, per the latest IA — the last one is styled as
// the header's CTA pill rather than a plain text link.
export const nav = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Corporate", href: "/corporate" },
  { label: "Dashboard", href: "/dashboard" },
];

export const navCta = { label: "Let's Plan Your Event", href: "/plan-your-event" };

export const hero = {
  tag: "SPORTS, CURATED FOR EVERY OCCASION.",
  headline: ["COMPETE.", "CONNECT.", "BELONG."],
  subheadline:
    "Curating sports experiences that bring people together, bringing working professionals together through sports.",
  cta: { label: "Partner With Us", href: "/corporate" },
  // Rotating hero slides — image + label crossfade together every few seconds.
  slides: [
    {
      label: "Football",
      image: {
        src: "/images/sports/football-net.png",
        alt: "Second Shift player striking the ball mid-action on a Sunday League football pitch",
      },
    },
    {
      label: "Cricket",
      image: {
        src: "/images/sports/cricket-players1.jpg",
        alt: "Two Second Shift cricketers talking mid-pitch during a night match",
      },
    },
    {
      label: "Pickleball",
      image: {
        src: "/images/sports/pickleball-action1.png",
        alt: "Two Second Shift players at the net during a pickleball doubles match",
      },
    },
    {
      label: "Padel",
      image: {
        src: "/images/our-work/padel-open1.png",
        alt: "Padel Open 2026 winners holding their trophies on the Rally X padel court",
      },
    },
  ],
  marquee: [
    "CORPORATE SPORTS EVENTS",
    "LEAGUES & TOURNAMENTS",
    "SPORTS EXPERIENCES",
    "COMMUNITY",
  ],
};

export const moreThanSport = {
  eyebrow: "SPORTS EVENT MANAGEMENT · JAIPUR, RAJASTHAN",
  headline: "MORE THAN JUST SPORT.",
  body:
    "Second Shift is a sports events and experiences company dedicated to bringing people together through the power of sport. From corporate sporting events and tournaments to community-driven leagues, we design and deliver engaging experiences that foster connection, encourage healthy competition, and inspire a lasting passion for the game.",
};

export const stats = {
  eyebrow: "PROOF ON THE GROUND",
  headline: "NUMBERS THAT SPEAK FOR THEMSELVES",
  primary: [
    { value: 5, suffix: "M+", label: "Social Media Views" },
    { value: 350, suffix: "+", label: "Players Onboarded" },
    { value: 200, suffix: "+", label: "Matches Conducted" },
    { value: 10, suffix: "+", label: "Sponsors Backing Us" },
  ],
  secondary: [
    "Sports Experiences",
    "Curation",
    "End to End Execution",
    "3000+ Social Community",
  ],
};

export const about = {
  tag: "THE SUNDAY LEAGUE - WHERE IT ALL BEGAN",
  headline: "SPORTS, CURATED FOR EVERY OCCASION.",
  body:
    "Every great sporting experience starts with a vision and comes to life through the details. At Second Shift, we handle everything from concept development and event planning to on-ground coordination and execution, ensuring every experience runs seamlessly. Our approach combines thoughtful design, strategic organisation and a genuine understanding of what makes sport memorable, creating events that are as effortless to participate in as they are exciting to be part of.",
  images: {
    goalkeeper: {
      src: "/images/gallery/goalkeeper-dive.jpg",
      alt: "Goalkeeper diving to make a save during a Second Shift Sunday League football match",
    },
    teamHuddle: {
      src: "/images/sports/ab1.png",
      alt: "Second Shift team celebrating together after a match, sharing drinks under the trees",
    },
    teamSponsorWall: {
      src: "/images/sports/about1.png",
      alt: "Second Shift team posing in front of the Sunday League sponsor step-and-repeat wall",
    },
  },
};

// Used by the "Our Work" flagship widget (tap to switch between sports).
export const sports = {
  list: [
    {
      key: "football",
      name: "Football",
      description:
        "5-a-side turf football, played every Sunday. Fast, physical, and fiercely competitive.",
      image: {
        src: "/images/sports/football-net.png",
        alt: "Second Shift footballer taking a shot on goal during a match",
      },
    },
    {
      key: "cricket",
      name: "Cricket",
      description:
        "Box cricket under lights, built for working professionals who still want to bat, bowl and bicker about the umpire.",
      image: {
        src: "/images/sports/cricket-batting1.png",
        alt: "Second Shift cricketer playing a big shot during a box cricket match",
      },
    },
    {
      key: "pickleball",
      name: "Pickleball",
      description:
        "The fastest-growing racquet sport, now Rajasthan's newest office obsession — doubles, drama and all.",
      image: {
        src: "/images/sports/pickleball-action1.png",
        alt: "Two Second Shift players at the net during a pickleball doubles match",
      },
    },
  ],
};

export const execution = {
  headline: "FROM CONCEPT TO COMPETITION. END-TO-END EXECUTION.",
  subheadline:
    "From event planning and venue management to operations, merchandise, on-ground branding and officials, we handle every detail from Curation to Execution.",
  capabilities: [
    { key: "planning", label: "Planning", icon: "ClipboardList" },
    { key: "venues", label: "Venues", icon: "MapPin" },
    { key: "operations", label: "Operations", icon: "Settings2" },
    { key: "matchOfficials", label: "Match Officials", icon: "Whistle" },
    { key: "branding", label: "Branding", icon: "Sparkles" },
    { key: "onGround", label: "On-Ground Management", icon: "Users" },
  ],
  sponsorActivations: [
    {
      src: "/images/corporate/redbull-activation.png",
      alt: "Red Bull branded activation car with a giant can rig at a Second Shift event",
    },
    {
      src: "/images/sports/abcde1.png",
      alt: "Branded Second Shift hydration station with water bottles at a corporate sports event",
    },
  ],
};

export const founders = {
  headline: "PEOPLE BEHIND SECOND SHIFT",
  subline: "Three people, one shared belief, sport has a place in every busy life.",
  list: [
    {
      name: "Jahaan Sethi",
      role: "Co-Founder",
      image: {
        src: "/images/founders/jahaan.JPG",
        alt: "Jahaan Sethi, Co-Founder of Second Shift",
      },
    },
    {
      name: "Manan Shyamdasani",
      role: "Co-Founder",
      image: {
        src: "/images/founders/manhan.JPG",
        alt: "Manan Shyamdasani, Co-Founder of Second Shift",
      },
    },
    {
      name: "Sarthak Sharma",
      role: "Co-Founder",
      image: {
        src: "/images/founders/sarthak.JPG",
        alt: "Sarthak Sharma, Co-Founder of Second Shift",
      },
    },
  ],
};

export const experience = {
  headline: "THE EXPERIENCE BEYOND THE GAME",
  subline:
    "From live DJ sets and commentary to food, beverages and branded hydration stations, we curate every detail to make the experience memorable, both on and off the field.",
  badge: "MEMORIES CREATED",
  images: {
    action: {
      src: "/images/sports/football-net.png",
      alt: "Second Shift player mid-kick during a Sunday League football match",
    },
    trophy: {
      src: "/images/sports/abcdef1.png",
      alt: "Second Shift Sunday League Season 1 Pickleball Champions holding their trophies on the podium",
    },
    cricketChat: {
      src: "/images/sports/IMG_9664.jpg",
      alt: "Two batters chatting mid-pitch during a Second Shift cricket match",
    },
  },
};

export const corporate = {
  label: "TAILORED CORPORATE SPORTS",
  headline: "END-TO-END SPORTS EXPERIENCES, BUILT FOR THE MODERN WORKPLACE.",
  closingLine: "A SIGNATURE EXPERIENCE, DELIVERED WITHOUT COMPROMISE.",
  cta: { label: "Let's Plan Your Event", href: "/plan-your-event" },
  heroImage: {
    src: "/images/corporate/corporate-action-hero.jpg",
    alt: "Post-match interview with a Player of the Match award in front of the Second Shift sponsor wall",
  },
  challenge: {
    eyebrow: "THE CHALLENGE",
    heading: "EMPLOYEE ATTRITION & DISCONNECTION",
    body: "With SHRM reporting a 12% median annual voluntary attrition rate, employee engagement and strong team connections remain important workplace priorities.",
  },
  solution: {
    eyebrow: "OUR SOLUTION",
    heading: "BUILD STRONGER TEAMS THROUGH SPORT",
    body: "Curated sporting experiences that bring employees together, encourage engagement and strengthen workplace connections.",
  },
  offerings: [
    {
      key: "kit",
      title: "Complete Player Welcome Kit",
      description: "T-Shirt, Cap, Tote Bag, Sweatband, Hand Towel",
      image: {
        src: "/images/corporate/welcome-kit.jpg",
        alt: "Second Shift branded navy and white player welcome kit t-shirt",
      },
    },
    {
      key: "fnb",
      title: "Elevated F&B Experience",
      description: "Live Food Counters, Wider Variety of Options, Dinner",
      image: {
        src: "/images/corporate/fnb-experience.jpg",
        alt: "Branded Second Shift Hydration Station with a Coca-Cola cooler at a corporate sports event",
      },
    },
    {
      key: "content",
      title: "Professional Content & Coverage",
      description: "Post-Match Interviews, Drone Coverage, Live Streaming",
      image: {
        src: "/images/corporate/content-coverage.jpg",
        alt: "Post-match interview with a player in front of the Second Shift sponsor wall",
      },
    },
    {
      key: "film",
      title: "Signature Event Film",
      description: "A professionally produced short film capturing the event",
      image: {
        src: "/images/corporate/event-film.jpg",
        alt: "Second Shift team posing together in front of the sponsor wall after a signature event",
      },
    },
  ],
  process: [
    {
      key: "consult",
      title: "Consult",
      description:
        "We map your team size, sport preferences, budget and goals to shape the right format.",
    },
    {
      key: "plan",
      title: "Plan",
      description:
        "Venue, schedule, branding, F&B and kit are locked in — every detail accounted for.",
    },
    {
      key: "execute",
      title: "Execute",
      description:
        "Full on-ground management: officiating, operations, hospitality and tech, handled end-to-end.",
    },
    {
      key: "capture",
      title: "Capture",
      description:
        "Drone coverage, post-match interviews and professional photography document every moment.",
    },
    {
      key: "celebrate",
      title: "Celebrate",
      description:
        "Awards, a signature event film and a wrap-up your team will talk about long after the final whistle.",
    },
  ],
  packages: [
    {
      key: "silver",
      tier: "Silver Package",
      name: "The Essential Sports Experience",
      note: "We can curate any sporting experience according to your requirement.",
      includesNote: null,
      categories: [
        { title: "Sports & Operations", items: ["Formats", "Scheduling", "Scoring", "Umpires", "Referee", "Commentator"] },
        { title: "F&B", items: ["Hydration", "Snacks", "Breakfast", "Lunch", "High Tea"] },
        { title: "On-Ground Branding", items: ["Banners", "Standees", "Court-Side & Company Branding"] },
        { title: "Content & Technology", items: ["Photography", "Social Content", "DJ", "Sports Anchor"] },
        { title: "Manpower & Execution", items: ["Support Staff", "Event Operations", "End-to-End Execution"] },
        { title: "Ceremony & Engagement", items: ["Closing Ceremony", "Trophies", "Prizes", "Goodies", "Recognition"] },
      ],
    },
    {
      key: "gold",
      tier: "Gold Package",
      name: "Elevated Experience",
      note: null,
      includesNote: "Includes everything from the Silver package, plus the following add-ons:",
      categories: [
        { title: "Digital Experience", items: ["Web App", "Live Scoreboards", "Digital Fixtures & Results"] },
        { title: "Player Experience", items: ["Custom Team Jerseys & Player Merchandise"] },
        { title: "Premium Branding", items: ["Photobooth", "Branded Entry Arch", "Backdrop Wall"] },
        { title: "Enhanced Content", items: ["Multiple Photographers", "GoPro Shots", "Full Event Coverage"] },
        { title: "Player Recognition", items: ["Man of the Match Awards Every Game", "Individual Recognition"] },
        { title: "Rewards", items: ["Premium Prizes & Goodies", "Enhanced Closing Ceremony"] },
      ],
    },
    {
      key: "platinum",
      tier: "Platinum Package",
      name: "Ultimate Corporate Sports Experience",
      note: null,
      includesNote: "Includes everything from the Silver & Gold package, plus the following add-ons:",
      categories: [
        { title: "Complete Player Welcome Kit", items: ["T-Shirt", "Cap", "Tote Bag", "Sweatband", "Hand Towel"] },
        { title: "Elevated F&B Experience", items: ["Live Food Counters", "Wider Variety of Options", "Dinner"] },
        { title: "Professional Content & Coverage", items: ["Professional Post-Match Interviews", "Drone Coverage", "Live Streaming"] },
        { title: "Signature Event Film", items: ["Professionally Produced Short Film Capturing the Event"] },
      ],
    },
  ], // TODO: confirm final pricing for each package
  faqs: [
    {
      question: "How many employees do we need to take part?",
      answer:
        "We can run leagues for teams as small as 50 people and as large as 500+ headcount. We'll help you structure the right format either way.",
    },
    {
      question: "Do you handle venues and equipment?",
      answer:
        "Completely. Venue booking, turf, nets, balls, scoring, referees — it's all part of our end-to-end execution.",
    },
    {
      question: "What's the typical lead time to plan a corporate event?",
      answer:
        "We recommend 3–4 weeks for a 2-day event and 5–6 weeks for a multi-week league, though we've turned things around faster when needed.",
    },
    {
      question: "Can sponsors be involved in our corporate event?",
      answer:
        "Yes — we regularly manage sponsor activations (hydration stations, branded vehicles, sampling booths) inside corporate leagues.",
    },
  ],
};

export const dashboard = {
  headline: "THE DIGITAL LAYER BEHIND THE LEAGUE",
  features: [
    "Live Fixtures",
    "LeaderBoard",
    "Scoring",
    "Match Results",
    "Individual Stats",
    "Player Profiles",
  ],
  screenshots: [
    {
      src: "/images/dashboard/home.jpg",
      alt: "Second Shift club page in the app showing the Padel Open 2026 tournament summary",
    },
    {
      src: "/images/dashboard/standings.jpg",
      alt: "Padel Open 2026 standings screen with Group A and Group B tables",
    },
    {
      src: "/images/dashboard/matches.jpg",
      alt: "Padel Open 2026 matches screen with fixtures and results by date",
    },
  ],
};

export const appDownload = {
  ios: "https://apps.apple.com/in/app/swing-house-of-sports/id6788461449",
  android: "https://play.google.com/store/apps/details?id=com.ios.swing&pcampaignid=web_share",
};

export const socialProof = {
  eyebrow: "SOCIAL MEDIA PRESENCE",
  headline: "5M+ DIGITAL IMPRESSIONS | 3000+ SOCIAL COMMUNITY",
  reels: [
    {
      key: "bsc",
      title: "Bombay Shaving Company × Second Shift",
      views: "3.7M views",
      image: {
        src: "/images/gallery/reel-bombay-shaving2.png",
        alt: "Preview frame from the Bombay Shaving Company x Second Shift Instagram reel",
      },
      href: "https://instagram.com/secondshift.club", // TODO: replace with direct reel URL
    },
    {
      key: "drone",
      title: "Drone Compilation",
      views: "301K views",
      image: {
        src: "/images/gallery/reel-drone-compilation1.png",
        alt: "Aerial drone still of a Second Shift football match with birds flying over the pitch",
      },
      href: "https://instagram.com/secondshift.club", // TODO: replace with direct reel URL
    },
    {
      key: "perks",
      title: "Sunday League Perks",
      views: "516K views",
      image: {
        src: "/images/gallery/reel-sunday-league-perks1.png",
        alt: "Second Shift players posing in front of the Sunday League banner",
      },
      href: "https://instagram.com/secondshift.club", // TODO: replace with direct reel URL
    },
  ],
};

export const partners = {
  headline: "BACKED BY",
  subheadline: "BRANDS BEHIND THE VISION",
  footerLine: "POWERED BY PARTNERS WHO BELIEVE IN THE MOVEMENT",
  list: [
    { name: "KheloMore", logo: "/images/partners/khelomore.png" },
    { name: "Bombay Shaving Company", logo: "/images/partners/bombay-shaving-company.png" },
    { name: "Phab", logo: "/images/partners/phab.png" },
    { name: "Hydrofuel", logo: "/images/partners/hydrofuel.png" },
    { name: "Aarima's Lab-chaa", logo: "/images/partners/aarimas-labchaa.png" },
    { name: "Swing", logo: "/images/partners/swing.png" },
    { name: "Glitch Bowls", logo: "/images/partners/glitch-bowls.png" },
    { name: "Saara Sethi Productions", logo: "/images/partners/saara-sethi-productions.png" },
    { name: "Playspace", logo: "/images/partners/playspace.png" },
  ],
};

export const testimonials = [
  {
    quote: "Great competition, great people, and an even better community.",
    name: "Rudraveer",
    role: "Sunday League Player",
  },
  {
    quote: "A seamless experience that brought our team closer.",
    name: "Yuvraj",
    role: "Round Table India",
  },
  {
    quote: "An energetic event and a great partnership with Second Shift.",
    name: "Rohitansh",
    role: "Red Bull",
  },
];

export const ourWork = {
  topHeadline: "OUR RECENT SPORTS EVENTS",
  flagshipLabel: "OUR FLAGSHIP: THE SUNDAY LEAGUE",
  headline: "THE SUNDAY LEAGUE",
  subheadline:
    "Curating sports experiences that bring people together through sports, built for working professionals who refuse to stop competing.",
  format: {
    headline: "15 WEEKS. 3 SPORTS. ONE SEASON.",
    body:
      "Our flagship amateur sports league brings working professionals together through 15 weeks of organised competition across football, cricket and pickleball. From team drafts and weekly fixtures to match-day operations and a live finals day, we manage the experience from start to finish.",
    points: [
      "15-week consecutive league format",
      "Football, Cricket & Pickleball run in parallel",
      "Ages 20 to 45, all skill levels welcome",
      "Live fixtures & standings on the Second Shift web app",
    ],
  },
  curatedExperiences: [
    {
      key: "padel",
      title: "Padel Open",
      body:
        "A professionally curated Weekend padel tournament by Second Shift, in collaboration with HEAD, bringing players together for a competitive and engaging sporting experience.",
      image: {
        src: "/images/our-work/padel-open1.png",
        alt: "Padel Open 2026 winners holding their trophies and prize baskets on the Rally X padel court",
      },
    },
    {
      key: "round-table",
      title: "Cricket League Curated for Round Table",
      body:
        "A 2 day box cricket event organised by Second Shift for Round Table India, delivering a seamless and engaging sporting experience from format to execution.",
      image: {
        src: "/images/our-work/round-table-cricket.jpg",
        alt: "Round Table India cricket teams mingling on the pitch after a Second Shift curated match",
      },
    },
    {
      key: "screening",
      title: "Sports Screening Experience",
      body:
        "A sports screening experience curated by Second Shift, bringing the community together to watch, connect and celebrate the game.",
      image: {
        src: "/images/our-work/sports-screening.jpg",
        alt: "Outdoor sports screening event with a big screen showing a live match to the community",
      },
    },
  ],
  gallery: [
    { src: "/images/gallery/pickleball-champions-banner.jpg", alt: "Sunday League Season 1 Pickleball Champions with the winners banner" },
    { src: "/images/gallery/pickleball-runnerup.jpg", alt: "Pickleball doubles runner-up pair holding their trophies and prize baskets" },
    { src: "/images/gallery/football-contest.jpg", alt: "Three players contesting the ball during a Second Shift football match" },
    { src: "/images/gallery/football-tackle-2.jpg", alt: "Players challenging for the ball during a Second Shift football match" },
    { src: "/images/gallery/padel-back.jpg", alt: "Player holding a HEAD padel racquet, back view, on a purple padel court" },
    { src: "/images/gallery/padel-action.jpg", alt: "Two players running for the ball during a padel doubles match" },
    { src: "/images/gallery/post-match-interview1.png", alt: "Player of the Match being interviewed pitch-side after a Second Shift match" },
    { src: "/images/gallery/goalkeeper-dive1.png", alt: "Goalkeeper diving mid-air to make a save" },
  ],
};

export const planEvent = {
  headline: "READY TO PLAY YOUR SECOND SHIFT?",
  subheadline: "Tell us what you're planning and we'll take it from there.",
  cta: { label: "Host Your Sports Event", href: "#contact-form" },
};

export const contactForm = {
  interests: [
    "Corporate Events",
    "Private Leagues & Tournaments",
    "Sports Entertainment",
    "Sponsorships",
    "Others",
  ],
};

export const footerLinks = {
  quickLinks: [
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Corporate", href: "/corporate" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Web App", href: "https://swing-playcom/" },
    { label: "Let's Plan Your Event", href: "/plan-your-event" },
  ],
  legalLinks: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Admin Login", href: "/admin/login" },
  ],
};

// Shared header info for every legal/policy page.
export const legalMeta = {
  entity: "Sporting Revolution Ventures LLP (Second Shift)",
  effectiveDate: "28 September 2026",
  contactEmail: "shiftsecond287@gmail.com",
};

export const termsOfUse = {
  title: "Terms of Use",
  intro:
    "Welcome to Second Shift. By accessing our website, registering for an event or engaging our services, you agree to the following terms. These terms apply to your use of the Second Shift website, digital platform and services, including event registrations, sports experiences, tournaments and corporate event enquiries.",
  sections: [
        {
          heading: "01. Our Services",
          body: "Second Shift provides sports event planning, curation, coordination and execution services, including corporate sports events, tournaments, leagues, brand activations and community sporting experiences. Specific services and deliverables will be agreed upon separately with each client or participant.",
        },
        {
          heading: "02. Registration & Participation",
          body: "Participants must provide accurate registration details and meet the eligibility requirements specified for each event. Registration is subject to availability and is confirmed only upon completion of the applicable payment and registration process.",
        },
        {
          heading: "03. Event Planning & Changes",
          body: "Event formats, schedules, venues, fixtures and activities may be modified where necessary due to operational requirements, weather, safety considerations or other unforeseen circumstances. We will make reasonable efforts to communicate significant changes to affected participants and clients.",
        },
        {
          heading: "04. Conduct & Fair Play",
          body: "All participants are expected to demonstrate respect, sportsmanship and appropriate conduct. Harassment, abuse, discrimination, violence or unsportsmanlike behaviour may result in removal from an event without a refund, subject to the applicable event terms.",
        },
        {
          heading: "05. Health & Safety",
          body: "Participants are responsible for ensuring that they are physically fit to take part in their chosen activities and for following event safety instructions. Any known medical or safety concerns relevant to participation should be disclosed to the event organisers. Participants must use the required safety equipment and comply with venue rules.",
        },
        {
          heading: "06. Event Photography & Media",
          body: "We may capture photographs, videos and other media during events for documentation, portfolio, marketing and promotional purposes. Where required, we will seek appropriate consent from individuals before using identifiable images or footage, particularly where minors are involved. Participants may contact us regarding media use or concerns.",
        },
        {
          heading: "07. Personal Belongings",
          body: "Participants are responsible for their personal belongings and sporting equipment during events. We will take reasonable care in managing event facilities but are not responsible for loss, theft or damage, except where liability cannot legally be excluded.",
        },
        {
          heading: "08. Right to Refuse Participation",
          body: "We reserve the right to refuse or discontinue participation where necessary to protect the safety, integrity and smooth operation of an event, in accordance with applicable law and the relevant event terms.",
        },
        {
          heading: "09. Client Engagements & Deliverables",
          body: "Corporate events, brand partnerships and private tournaments may be governed by separate proposals, agreements, quotations or statements of work. The agreed scope, deliverables, fees, payment schedules and cancellation conditions in those documents will apply to the relevant engagement.",
        },
        {
          heading: "10. Website & Intellectual Property",
          body: "All original website content, branding, logos, designs, photographs and other materials owned by Second Shift are protected by applicable intellectual property laws. They may not be copied, reproduced or commercially used without prior written permission. Third-party names and marks remain the property of their respective owners.",
        },
        {
          heading: "11. Limitation of Liability",
          body: "To the extent permitted by applicable law, Second Shift will not be liable for indirect or consequential losses arising from participation in events or use of our website. Nothing in these terms excludes liability that cannot legally be excluded, including liability arising from negligence where exclusion is prohibited by law.",
        },
        {
          heading: "12. Contact & Updates",
          body: "We may update these terms from time to time to reflect changes in our services, operations or applicable laws. Updated terms will be published on our website with a revised effective date. Continued use of the website or services after changes take effect constitutes acceptance where legally permitted.",
        },
      ],
};

export const privacyPolicy = {
  title: "Privacy Policy",
  intro:
    "We respect your privacy and are committed to handling your personal information responsibly. This policy explains what information we collect, how we use it and the choices available to you.",
  sections: [
        {
          heading: "01. Information We Collect",
          body: "Depending on how you interact with us, we may collect your name, phone number, email address, event registration details, payment status and other information you voluntarily provide through our website, forms or digital platform.",
        },
        {
          heading: "02. How We Use Your Information",
          body: "We use your information to: process event registrations and manage participation; coordinate events, schedules, fixtures and announcements; respond to enquiries from participants, corporate clients and partners; improve our website, digital platform and event experiences; and send promotional updates where you have agreed to receive them.",
        },
        {
          heading: "03. Payments",
          body: "Payments may be processed through third-party payment providers. We do not intend to collect or store your full payment card details through our website. Payment providers may process your information under their own privacy policies and terms.",
        },
        {
          heading: "04. Sharing of Information",
          body: "We do not sell your personal information. We may share relevant information with trusted service providers, event venues, operational partners or payment processors where necessary to deliver our services. We may also disclose information where required by law.",
        },
        {
          heading: "05. Photography & Event Media",
          body: "Photographs and videos may be captured during events for event coverage, documentation and promotional use. Where applicable, we will provide information about the intended use and obtain consent where required. You may contact us to raise concerns about identifiable media featuring you.",
        },
        {
          heading: "06. Data Security & Retention",
          body: "We take reasonable measures to protect the information we hold against unauthorised access, loss, misuse or disclosure. We retain personal information only for as long as necessary for the purposes described in this policy, unless a longer retention period is required or permitted by law.",
        },
        {
          heading: "07. Your Choices & Rights",
          body: "You may contact us to request access to, correction of or deletion of your personal information, or to withdraw consent where applicable. We will respond to requests in accordance with applicable law and may need to retain certain information for legal or operational reasons.",
        },
        {
          heading: "08. Cookies & Website Usage",
          body: "Our website uses cookies and similar technologies. This is covered in full in our dedicated Cookie Policy, which explains the categories of cookies we use, why we use them and how you can manage your preferences.",
        },
        {
          heading: "09. Contact Us",
          body: "For privacy-related requests, questions or concerns, contact us at: shiftsecond287@gmail.com",
        },
      ],
};

export const cookiePolicy = {
  title: "Cookie Policy",
  intro:
    "This Cookie Policy explains how Second Shift (Sporting Revolution Ventures LLP) uses cookies and similar technologies on our website and digital platform, and the choices available to you.",
  sections: [
    {
      heading: "01. What Are Cookies",
      body: "Cookies are small text files placed on your device when you visit a website. They help the site function correctly, remember your preferences, and give us a general understanding of how the site is used. We also use similar browser-storage technologies (such as local storage and session storage) for related purposes.",
    },
    {
      heading: "02. Strictly Necessary Cookies",
      body: "These are required for the website to function — for example, remembering that you've already seen our intro animation in the current session, or keeping the site secure. The website may not work as intended without these.",
    },
    {
      heading: "03. Functionality Cookies",
      body: "These remember choices you've made (such as a cookie-consent preference) so we don't ask again on every visit, and help us present a smoother experience across pages.",
    },
    {
      heading: "04. Performance & Analytics Cookies",
      body: "Where enabled, these help us understand how visitors use our website — which pages are popular, how people navigate between them, and where the experience could be improved. We use this information in aggregate; it is not used to personally identify you.",
    },
    {
      heading: "05. Third-Party Cookies",
      body: "Some pages link out to third-party services (for example, Instagram, our web app at app.secondshiftclub.com, or payment providers). If you interact with these, they may set their own cookies in accordance with their own policies, which we do not control.",
    },
    {
      heading: "06. Managing Your Cookie Preferences",
      body: "You can accept or manage cookies through the consent banner shown on your first visit, and at any time through your browser settings, which let you block or delete cookies. Blocking certain cookies may affect site functionality.",
    },
    {
      heading: "07. Changes to This Policy",
      body: "We may update this Cookie Policy from time to time to reflect changes in the technologies or services we use. Updates will be published on this page with a revised effective date.",
    },
    {
      heading: "08. Contact Us",
      body: "For questions about this Cookie Policy, contact us at: shiftsecond287@gmail.com",
    },
  ],
};

export const refundPolicy = {
  title: "Refund & Cancellation Policy",
  intro:
    "Our refund and cancellation terms depend on the type of service or event. The applicable terms will be communicated at the time of registration or agreed with the client before a corporate or private event is confirmed.",
      sections: [
        {
          heading: "01. Participant Registrations",
          body: "Unless otherwise stated in the specific event terms, confirmed registrations are non-refundable once payment has been processed. Please review the event details, eligibility criteria and schedule before registering.",
        },
        {
          heading: "02. Event Cancellation",
          body: "If Second Shift cancels an event, participants will be informed of the available refund or alternative arrangements. Refunds, where applicable, will be processed through the original payment method or another agreed method.",
        },
        {
          heading: "03. Event Changes",
          body: "Changes to event schedules, formats, fixtures or venues do not automatically qualify a participant for a refund, provided the event continues as planned in accordance with its stated terms. If a significant change affects your participation, contact us to discuss the options available under the relevant event policy.",
        },
        {
          heading: "04. No-Shows & Withdrawals",
          body: "If a participant is unable to attend after confirming registration, the registration fee is generally non-refundable and the slot may not be carried forward to another event. Any exceptions will be governed by the event-specific terms.",
        },
        {
          heading: "05. Duplicate Payments",
          body: "If you have made a duplicate payment for the same registration, please contact us with the relevant transaction details. Verified duplicate payments will be reviewed for a refund.",
        },
        {
          heading: "06. Slot Transfers",
          body: "Where permitted by the event organisers, participants may request a transfer of their registration to another eligible participant before the stated deadline. Transfers are subject to approval, eligibility requirements and any applicable administrative conditions.",
        },
        {
          heading: "07. Corporate & Private Event Cancellations",
          body: "For corporate events, brand activations and private tournaments, cancellation, postponement, payment and refund terms will be set out in the applicable written proposal or agreement. These may include advance payments, committed vendor costs and cancellation deadlines.",
        },
        {
          heading: "08. Refund Processing",
          body: "Approved refunds will be initiated within a reasonable period, subject to verification and the processing timelines of the relevant payment provider or bank. We will communicate any additional information required to process your request.",
        },
        {
          heading: "09. Contact for Refunds",
          body: "For registration, cancellation or refund queries, contact us at: shiftsecond287@gmail.com",
        },
      ],
};
