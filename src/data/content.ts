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
  location: "Rajasthan, India",
  email: "hello@secondshiftclub.com", // TODO: replace with real inbox
  whatsapp: "https://wa.me/919999999999", // TODO: replace with real WhatsApp number
  instagram: "https://instagram.com/secondshift.club",
  linkedin: "https://linkedin.com/company/secondshift.co", // TODO: confirm real LinkedIn URL
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Sunday League", href: "/league" },
  { label: "Corporate", href: "/corporate" },
  { label: "App", href: "/#app" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  tag: "SECOND SHIFT | SUNDAY LEAGUE | PROVEN SPORTS ECOSYSTEM",
  headline: ["COMPETE.", "CONNECT.", "BELONG."],
  subheadline:
    "Rajasthan's leading multi-sport amateur league, bringing working professionals together through Football, Cricket & Pickleball.",
  ctaPrimary: { label: "Join the League", href: "/league" },
  ctaSecondary: { label: "Partner With Us", href: "/corporate" },
  image: {
    src: "/images/sports/football-action.jpg",
    alt: "Second Shift player striking the ball mid-action on a Sunday League football pitch",
  },
  marquee: [
    "FOOTBALL",
    "CRICKET",
    "PICKLEBALL",
    "COMMUNITY",
    "CORPORATE SPORTS",
  ],
};

export const stats = {
  headline: "NUMBERS THAT SPEAK FOR THEMSELVES",
  primary: [
    { value: 5, suffix: "M+", label: "Social Media Views" },
    { value: 300, suffix: "+", label: "Athletes Onboarded" },
    { value: 160, suffix: "+", label: "Matches Conducted" },
    { value: 10, suffix: "+", label: "Sponsors Backing Us" },
  ],
  secondary: [
    "3 Sports | 3 Leagues | 1 Community",
    "Ages 20 to 45",
    "15-Week Consecutive League",
    "3000+ Social Community",
  ],
};

export const about = {
  tag: "THE SUNDAY LEAGUE - WHERE IT ALL BEGAN",
  headline: "BUILDING A COMMUNITY THROUGH COMPETITIVE AMATEUR SPORT.",
  body:
    "It started as a way for working professionals to trade the 9-to-6 for a Sunday morning kickabout — a break from the desk, a reason to move, a team to belong to. What began as one football game between friends has grown into Rajasthan's leading multi-sport amateur league: three sports, three leagues, one community that keeps showing up, season after season.",
  images: {
    goalkeeper: {
      src: "/images/gallery/goalkeeper-dive.jpg",
      alt: "Goalkeeper diving to make a save during a Second Shift Sunday League football match",
    },
    teamHuddle: {
      src: "/images/gallery/team-picnic-celebration.jpg",
      alt: "Second Shift team celebrating together after a match, sharing drinks under the trees",
    },
    teamSponsorWall: {
      src: "/images/gallery/team-sponsor-wall.png",
      alt: "Second Shift team posing in front of the Sunday League sponsor step-and-repeat wall",
    },
  },
};

export const sports = {
  headline: "300 ATHLETES. ONE COMMUNITY. ENDLESS MEMORIES.",
  list: [
    {
      key: "football",
      name: "Football",
      description:
        "7-a-side turf football, played every Sunday. Fast, physical, and fiercely competitive.",
      image: {
        src: "/images/sports/football-action.jpg",
        alt: "Second Shift footballer taking a shot on goal during a match",
      },
    },
    {
      key: "cricket",
      name: "Cricket",
      description:
        "Box cricket under lights, built for working professionals who still want to bat, bowl and bicker about the umpire.",
      image: {
        src: "/images/sports/cricket-players.jpg",
        alt: "Two Second Shift cricketers talking mid-pitch during a night match",
      },
    },
    {
      key: "pickleball",
      name: "Pickleball",
      description:
        "The fastest-growing racquet sport, now Rajasthan's newest office obsession — doubles, drama and all.",
      image: {
        src: "/images/sports/pickleball-action.jpg",
        alt: "Two Second Shift players at the net during a pickleball doubles match",
      },
    },
  ],
};

export const execution = {
  tag: "FROM CONCEPT TO COMPETITION. END-TO-END EXECUTION.",
  headline: "FROM CONCEPT TO COMPETITION. END-TO-END EXECUTION.",
  subheadline: "Planning, venues, operations, technology, branding & on-ground management.",
  capabilities: [
    { key: "planning", label: "Planning", icon: "ClipboardList" },
    { key: "venues", label: "Venues", icon: "MapPin" },
    { key: "operations", label: "Operations", icon: "Settings2" },
    { key: "technology", label: "Technology", icon: "Smartphone" },
    { key: "branding", label: "Branding", icon: "Sparkles" },
    { key: "onGround", label: "On-Ground Management", icon: "Users" },
  ],
  sponsorActivations: [
    {
      src: "/images/corporate/redbull-activation.png",
      alt: "Red Bull branded activation car with a giant can rig at a Second Shift event",
    },
    {
      src: "/images/corporate/hydrofuel-activation.jpg",
      alt: "Hydrofuel sponsor hydration stall set up at a Second Shift event",
    },
  ],
};

export const experience = {
  headline: "THE EXPERIENCE BEYOND THE GAME",
  subline:
    "Community, engagement, content, food, music, branding & memorable moments.",
  badge: "MEMORIES CREATED",
  images: {
    action: {
      src: "/images/sports/football-action.jpg",
      alt: "Second Shift player mid-kick during a Sunday League football match",
    },
    trophy: {
      src: "/images/gallery/pickleball-champion-podium.jpg",
      alt: "Second Shift Sunday League Season 1 Pickleball Champions holding their trophies on the podium",
    },
    cricketChat: {
      src: "/images/sports/cricket-players.jpg",
      alt: "Two batters chatting mid-pitch during a Second Shift cricket match",
    },
  },
};

export const corporate = {
  label: "TAILORED CORPORATE SPORTS",
  headline: "END-TO-END SPORTS EXPERIENCES, BUILT FOR THE MODERN WORKPLACE.",
  partner: "RALLY",
  closingLine: "A SIGNATURE EXPERIENCE, DELIVERED WITHOUT COMPROMISE.",
  cta: { label: "Plan Your Corporate League", href: "/corporate#contact" },
  heroImage: {
    src: "/images/corporate/corporate-action-hero.jpg",
    alt: "Second Shift corporate sports player sprinting on a turf pitch, presented in partnership with Rally",
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
        alt: "Live food counters and festive tents set up at a Second Shift corporate event",
      },
    },
    {
      key: "content",
      title: "Professional Content & Coverage",
      description:
        "Post-Match Interviews, Drone Coverage, Live Streaming",
      image: {
        src: "/images/corporate/content-coverage.jpg",
        alt: "Aerial drone view of a turf football match at a Second Shift corporate event",
      },
    },
    {
      key: "film",
      title: "Signature Event Film",
      description: "A professionally produced short film capturing the event",
      image: {
        src: "/images/corporate/event-film.jpg",
        alt: "Videographer filming players during a Second Shift corporate event",
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
      key: "starter",
      name: "Starter League",
      description: "A single-sport league for one company, built for team bonding.",
      features: ["1 sport", "Up to 8 teams", "Standard kit", "Digital fixtures & standings"],
    },
    {
      key: "signature",
      name: "Signature League",
      description: "Our most popular format — multi-sport, multi-week, fully branded.",
      features: [
        "2–3 sports",
        "Up to 16 teams",
        "Complete player welcome kit",
        "Live content & coverage",
      ],
    },
    {
      key: "enterprise",
      name: "Enterprise Championship",
      description: "A flagship, multi-company tournament with full production value.",
      features: [
        "Multi-sport championship",
        "Unlimited teams",
        "Drone + signature event film",
        "Full sponsor activation management",
      ],
    },
  ], // TODO: confirm final package names, inclusions and pricing
  faqs: [
    {
      question: "How many employees do we need to take part?",
      answer:
        "We've run leagues for teams as small as 40 people and as large as 300+. We'll help you structure the right format for your headcount.",
    },
    {
      question: "Can we mix sports within one corporate league?",
      answer:
        "Yes — most of our corporate leagues run Football, Cricket and Pickleball in parallel so every kind of employee has a way to get involved.",
    },
    {
      question: "Do you handle venues and equipment?",
      answer:
        "Completely. Venue booking, turf, nets, balls, scoring, referees — it's all part of our end-to-end execution.",
    },
    {
      question: "What's the typical lead time to plan a corporate league?",
      answer:
        "We recommend 3–4 weeks for a single-day tournament and 6–8 weeks for a multi-week league, though we've turned things around faster.",
    },
    {
      question: "Can sponsors be involved in our corporate event?",
      answer:
        "Yes — we regularly manage sponsor activations (hydration stations, branded vehicles, sampling booths) inside corporate leagues.",
    },
  ],
};

export const digitalLayer = {
  headline: "THE DIGITAL LAYER BEHIND THE LEAGUE",
  features: [
    "Live fixtures",
    "Real-time standings",
    "Match results",
    "Player profiles",
  ],
  cta: { label: "Visit the Web App", href: "https://app.secondshiftclub.com/" },
  fixtures: [
    { home: "Pew Pew FC", away: "Penaldo FC", time: "23 AUG · 07:00" },
    { home: "Super Xaviers", away: "Retired FC", time: "23 AUG · 07:50" },
    { home: "Sporting Boys", away: "Power Rangers", time: "23 AUG · 07:50" },
    { home: "Old Guards FC", away: "MSMSV FC", time: "23 AUG · 08:40" },
    { home: "Naga Union FC", away: "Kryptonite FC", time: "23 AUG · 08:40" },
  ],
  standings: [
    { pos: 1, team: "Darbar 11", p: 7, w: 7, d: 0, l: 0, pts: 14 },
    { pos: 2, team: "Kaint Krew", p: 7, w: 6, d: 0, l: 1, pts: 12 },
    { pos: 3, team: "SORT", p: 7, w: 5, d: 0, l: 2, pts: 10 },
    { pos: 4, team: "Nicotine Ninjas", p: 7, w: 3, d: 0, l: 4, pts: 6 },
    { pos: 5, team: "SMC", p: 7, w: 3, d: 0, l: 4, pts: 6 },
    { pos: 6, team: "Lawyers XI", p: 7, w: 2, d: 0, l: 5, pts: 4 },
    { pos: 7, team: "Third Shift", p: 7, w: 1, d: 0, l: 6, pts: 2 },
    { pos: 8, team: "Hydro Daddies", p: 7, w: 1, d: 0, l: 6, pts: 2 },
  ],
  upcomingMatch: {
    sport: "FOOTBALL",
    date: "SUN 23 AUG · 09:30 AM",
    home: { code: "LST", captain: "Ananya Shukla" },
    away: { code: "LB", captain: "Ayush Chandwani" },
    ground: "Ground 1",
  },
  previousScores: [
    { home: "TS", homeScore: "60/6", away: "DAR", awayScore: "81/2", date: "09 AUG · 22:00" },
    { home: "KK", homeScore: "114/5", away: "HD", awayScore: "51/6", date: "09 AUG · 21:00" },
  ],
};

export const socialProof = {
  headline: "5M+ DIGITAL IMPRESSIONS | 3000+ SOCIAL COMMUNITY",
  reels: [
    {
      key: "bsc",
      title: "Bombay Shaving Company × Second Shift",
      views: "3.7M views",
      image: {
        src: "/images/gallery/reel-bombay-shaving.jpg",
        alt: "Preview frame from the Bombay Shaving Company x Second Shift Instagram reel",
      },
      href: "https://instagram.com/secondshift.club", // TODO: replace with direct reel URL
    },
    {
      key: "drone",
      title: "Drone Compilation",
      views: "301K views",
      image: {
        src: "/images/gallery/reel-drone-compilation.jpg",
        alt: "Aerial drone still of a Second Shift football match with birds flying over the pitch",
      },
      href: "https://instagram.com/secondshift.club", // TODO: replace with direct reel URL
    },
    {
      key: "perks",
      title: "Sunday League Perks",
      views: "516K views",
      image: {
        src: "/images/gallery/reel-sunday-league-perks.jpg",
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
    quote:
      "TODO: Replace with a real quote from a Second Shift player about what the Sunday League means to them.",
    name: "Player Name", // TODO
    role: "Sunday League Player", // TODO
  },
  {
    quote:
      "TODO: Replace with a real quote from an HR/People lead about running a corporate event with Second Shift.",
    name: "HR Lead Name", // TODO
    role: "HR Head, Company Name", // TODO
  },
  {
    quote:
      "TODO: Replace with a real quote from a sponsor/brand partner about activating with Second Shift.",
    name: "Brand Manager Name", // TODO
    role: "Brand Manager, Sponsor Name", // TODO
  },
];

export const league = {
  headline: "THE SUNDAY LEAGUE",
  subheadline:
    "Rajasthan's leading multi-sport amateur league — Football, Cricket & Pickleball, built for working professionals who refuse to stop competing.",
  format: {
    headline: "15 WEEKS. 3 SPORTS. ONE SEASON.",
    body:
      "Every season runs for 15 consecutive weeks across Football, Cricket and Pickleball. Teams are drafted from the community, fixtures run every Sunday, and the season builds to a live finals day with a podium, medals and bragging rights.",
    points: [
      "15-week consecutive league format",
      "Football, Cricket & Pickleball run in parallel",
      "Ages 20 to 45, all skill levels welcome",
      "Live fixtures & standings on the Second Shift web app",
    ],
  },
  registerSteps: [
    { step: "01", title: "Apply", description: "Fill out the registration form with your details and preferred sport(s)." },
    { step: "02", title: "Get Drafted", description: "We slot you into a team based on skill level, schedule and sport." },
    { step: "03", title: "Play Every Sunday", description: "Show up, compete, and track your team's progress on the app." },
    { step: "04", title: "Battle for the Podium", description: "Top teams advance to finals day for medals and glory." },
  ],
  gallery: [
    { src: "/images/gallery/goalkeeper-dive.jpg", alt: "Goalkeeper diving mid-air to make a save" },
    { src: "/images/gallery/team-picnic-celebration.jpg", alt: "Team celebrating together after a match" },
    { src: "/images/gallery/team-sponsor-wall.png", alt: "Team posing at the sponsor step-and-repeat wall" },
    { src: "/images/gallery/player-of-the-match.jpg", alt: "Player holding the Player of the Match trophy" },
    { src: "/images/gallery/pickleball-champion-podium.jpg", alt: "Season 1 Pickleball Champions on the podium" },
    { src: "/images/sports/football-action.jpg", alt: "Player striking the ball during a football match" },
    { src: "/images/sports/cricket-players.jpg", alt: "Two cricketers talking mid-pitch" },
    { src: "/images/sports/pickleball-action.jpg", alt: "Two players at the net during a pickleball match" },
  ],
};

export const contactForm = {
  interests: [
    "Join League",
    "Corporate Event",
    "Sponsorship",
    "Other",
  ],
};

export const footerLinks = {
  quickLinks: [
    { label: "About", href: "/#about" },
    { label: "Sunday League", href: "/league" },
    { label: "Corporate", href: "/corporate" },
    { label: "Web App", href: "https://app.secondshiftclub.com/" },
    { label: "Contact", href: "/#contact" },
  ],
};
