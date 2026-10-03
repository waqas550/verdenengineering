/**
 * Editable site content.
 * Change navigation, services, partners and contact details here.
 * Components read this file so copy can be updated without editing layout code.
 *
 * Partner logos:
 * Replace the labeled placeholder files in /public/images/partners/ with official
 * SVG or PNG logos from each partner, then point `logo.src` at the new file.
 * Those placeholders are not photographs and are not produced by the image script.
 *
 * Partner descriptions are taken from the partners' own sites.
 * Fields in square brackets are unknown facts — replace them before launch.
 */

export const iconNames = [
  "Activity",
  "BarChart3",
  "Building2",
  "Cable",
  "ClipboardCheck",
  "Cog",
  "Cpu",
  "DraftingCompass",
  "Eye",
  "Factory",
  "FileCheck",
  "FlaskConical",
  "Gauge",
  "HardHat",
  "LineChart",
  "Network",
  "PenTool",
  "Scan",
  "ShieldCheck",
  "Sun",
  "Workflow",
  "Wrench",
  "Zap",
] as const;

export type IconName = (typeof iconNames)[number];

export type PartnerKey = "srReg" | "euroteam";

export type Partner = {
  key: PartnerKey;
  name: string;
  country: string;
  countryCode: string;
  website: string;
  websiteLabel: string;
  brings: string;
  /** Two-sentence summary used on the home and about lockups. */
  description: string;
  bullets: string[];
  /** Partners-page profile. Each item is one paragraph. */
  positioning: string[];
  delivers: string[];
  categories?: string[];
  /** Service-page callout. Omit the partner from a service that has no genuine link. */
  serviceParagraphs: string[];
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ProcessStep = {
  number: string;
  icon: IconName;
  title: string;
  body: string;
};

export type Capability = {
  icon: IconName;
  title: string;
  body: string;
};

export type ServiceSlug = "energy" | "construction" | "refineries" | "ai-automation";

export type Service = {
  slug: ServiceSlug;
  number: string;
  label: string;
  navLabel: string;
  title: string;
  href: string;
  icon: IconName;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    image: string;
    alt: string;
    overline: string;
    title: string;
    intro: string;
  };
  capabilities: Capability[];
  delivery: ProcessStep[];
  partnerKey?: PartnerKey;
  secondaryImage?: {
    src: string;
    alt: string;
  };
};

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (value && /^https?:\/\/[^/\s]+/i.test(value) && !value.includes("[")) {
    return value.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Verden Engineering",
  legalName: "Verden Engineering",
  url: resolveSiteUrl(),
  logo: {
    src: "/brand/verden-logo.webp",
    alt: "Verden Engineering",
    width: 841,
    height: 217,
  },
  contact: {
    email: "[EMAIL]",
    phone: "[PHONE]",
    address: "[ADDRESS]",
    registration: "[COMPANY_REGISTRATION]",
  },
  seo: {
    defaultTitle: "Verden Engineering — Engineering for energy, industry and infrastructure",
    defaultDescription:
      "Verden Engineering supports energy providers, construction projects, refineries and industrial operations, with Swiss and German partnerships.",
    heroAlt: "Oil refinery beside the water",
  },
  navigation: {
    about: { label: "About", href: "/about" },
    services: { label: "Services", href: "/#services" },
    partners: { label: "Partners", href: "/partners" },
    contact: { label: "Contact", href: "/contact" },
    cta: { label: "Start a conversation", href: "/contact" },
  },
  legalNav: [
    { label: "Imprint", href: "/imprint" },
    { label: "Privacy", href: "/privacy" },
  ],
  cta: {
    title: "Have a technical challenge? Let's scope it together.",
    label: "Start a conversation",
    href: "/contact",
  },
  hero: {
    overline: "ENGINEERING · ENERGY · AUTOMATION",
    title: "Engineering solutions for energy, industry and infrastructure.",
    subtitle:
      "Verden Engineering supports energy providers, construction projects, refineries and industrial operations — from technical expertise to AI-driven automation, backed by Swiss and German partnerships.",
    primaryCta: { label: "Explore our services", href: "/#services" },
    secondaryCta: { label: "Talk to an engineer", href: "/contact" },
    image: "/images/hero-refinery.webp",
    imageAlt: "Oil refinery beside the water",
  },
  trust: {
    label: "Working in partnership with",
    lead: "Specialist depth on catalytic reforming and on construction chemicals, through one contact.",
  },
  aboutPreview: {
    overline: "ABOUT",
    title: "An engineering partner for the energy transition and digital industry",
    paragraphs: [
      "Verden Engineering works across energy systems, construction, refineries and process industry, and the automation of industrial operations. The brief is technical: define the problem, engineer a response, and stay with the interfaces that decide whether it can be built and run.",
      "Swiss RR Engineering Group and Euroteam Bauchemie sit behind that offer: catalytic reforming on one side, construction chemicals on the other. Neither partnership is a project record.",
    ],
    link: { label: "About the company", href: "/about" },
    image: "/images/about-industrial.webp",
    imageAlt: "Engineers at an industrial site. Illustrative photograph — not Verden Engineering staff.",
    imageCaption: "Illustrative photograph. These people are not Verden Engineering employees.",
  },
  aboutPage: {
    metaTitle: "About us",
    metaDescription:
      "How Verden Engineering works across energy, construction, process industry and industrial automation, with Swiss and German partners.",
    overline: "ABOUT",
    title: "An engineering partner for the energy transition and digital industry",
    intro:
      "A technical practice for energy, construction, process plant and industrial automation — extended by partnerships in Switzerland and Germany.",
    paragraphs: [
      "Verden Engineering is an industrial engineering company. We support energy providers, construction projects, refineries and industrial operations with engineering work they can build from, supervise and hand to an operations team.",
      "The company is not presenting a project portfolio, client list or headcount. What is on offer is a way of working, four fields of technical capability, and two European partnerships that bring additional expertise into a brief.",
    ],
    principles: [
      {
        number: "01",
        title: "Start from the asset",
        body: "The plant, the site or the system as it exists comes before a preferred product. Constraints, interfaces and the operating duty set the scope.",
      },
      {
        number: "02",
        title: "Write it so it can be built",
        body: "Engineering output is there to be used: options, interfaces, assumptions and the decisions a project team still has to take.",
      },
      {
        number: "03",
        title: "Add European expertise where it belongs",
        body: "Swiss RR Engineering Group joins a reforming brief. Euroteam Bauchemie joins a construction-chemicals brief. Each stays in that field.",
      },
    ],
  },
  processIntro: {
    overline: "OUR APPROACH",
    title: "How we work",
    intro:
      "Four steps, used in place of a project gallery. Each engagement is scoped on its own facts.",
  },
  industriesIntro: {
    overline: "SECTORS",
    title: "Industries",
    intro: "The fields this practice is set up to support.",
  },
  partnersPage: {
    metaTitle: "Partners | Verden Engineering — Swiss RR Engineering Group (CH) & Euroteam Bauchemie (DE)",
    metaDescription:
      "Swiss RR Engineering Group for catalytic reforming, Euroteam Bauchemie for construction chemicals. One contact at Verden Engineering.",
    overline: "PARTNERS",
    title: "European partnerships, local execution.",
    intro: [
      "Verden Engineering remains the contact.",
      "Swiss RR Engineering Group covers catalytic reforming. Euroteam Bauchemie covers construction chemicals.",
      "You brief us. We bring in the specialist the brief needs.",
      "Accountability for the engagement stays with Verden Engineering.",
    ],
    stepsTitle: "How a partnership works for you",
    steps: [
      {
        number: "01",
        title: "You brief us",
        body: "The reformer, the structure or the joint, described as it is.",
      },
      {
        number: "02",
        title: "We bring in the right specialist",
        body: "Swiss RR Engineering Group for catalytic reforming. Euroteam Bauchemie for construction chemicals.",
      },
      {
        number: "03",
        title: "One contact, full accountability",
        body: "Verden Engineering stays the contact for the engagement.",
      },
    ],
    deliversLabel: "What this partnership delivers to our clients",
    categoriesLabel: "Product categories",
    ctaTitle: "Have a reforming unit or a structure to specify?",
  },
  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Contact Verden Engineering to scope an engineering, construction, process or automation question.",
    overline: "CONTACT",
    title: "Start a conversation.",
    intro:
      "Send a short note about the asset, the site or the system. We reply to scope the technical question — this form does not create a contract.",
  },
  contactForm: {
    name: "Name",
    company: "Company",
    email: "Email",
    message: "Message",
    consent:
      "I agree that Verden Engineering may use the details in this form to reply to my enquiry.",
    privacyLink: "Privacy policy",
    submit: "Send message",
    sending: "Sending…",
    success: "Message received. We will reply to the email address you entered.",
    error: "The message could not be sent. Please try again, or write to [EMAIL].",
  },
  homeContact: {
    overline: "CONTACT",
    title: "Tell us what needs engineering.",
    intro: "Share the outline of the problem. A conversation can establish whether we are the right practice for it.",
  },
  footer: {
    blurb:
      "Industrial engineering for energy, construction, process industry and automation, with partnerships in Switzerland and Germany.",
    servicesTitle: "Services",
    contactTitle: "Contact",
    partnerLine: "Working with",
  },
  notFound: {
    overline: "404",
    title: "This page does not exist.",
    body: "The address may be mistyped, or the page may have been moved.",
    home: "Back to home",
    contact: "Contact",
  },
};

export const partners: Partner[] = [
  {
    key: "srReg",
    name: "Swiss RR Engineering Group",
    country: "Switzerland",
    countryCode: "CH",
    website: "https://www.srreg.ch",
    websiteLabel: "srreg.ch",
    brings: "Catalytic reforming optimisation.",
    description:
      "Swiss RR Engineering Group optimises catalytic reforming units in petroleum refineries. Their product, REF-TEC, is a patented mathematical model that sets operating parameters for the reformer already in operation.",
    bullets: [
      "An assessment of the existing unit, then optimisation inside the current production scheme.",
      "Coverage of semi-regenerative and continuous-regeneration reformers from any licensor.",
      "Training and support included; they state the unit keeps producing during the work.",
    ],
    positioning: [
      "Swiss RR Engineering Group is a team of engineers and analysts focused on petroleum refineries. Since 2005 the work has been the catalytic reforming unit: assess it, and improve how the existing unit runs.",
      "In 2017 they registered a patent for REF-TEC. It is an offline software package that determines operating parameters for reformers already in service.",
      "They state it works with semi-regenerative, continuous-regeneration, cyclic and hybrid units, from any licensor, without replacing the control system.",
      "Their published results on unnamed SR and CCR units in the Middle East and Eastern Europe are a reformate increase of 2 to 5.5 percent, a higher octane number, and a shift in reformate and by-product mix. The homepage also states a 2 percent hydrogen-yield claim, and a 2–5 percent output claim, including where other optimisation software is already installed.",
    ],
    delivers: [
      "A model built only for catalytic reforming, not a general refinery simulator.",
      "Operating parameters that take in the unit, the catalyst, the feedstock, octane and hydrogen demand.",
      "A service offer: assessment, optimisation on the existing scheme, staff training and support.",
      "Their stated condition that production continues through the optimisation.",
    ],
    serviceParagraphs: [
      "Swiss RR Engineering Group is the reforming partner. The product is REF-TEC, a patented offline model that sets operating parameters for the catalytic reforming unit already installed.",
      "The service is an assessment of that unit, optimisation inside the current scheme, and training and support. It covers semi-regenerative, continuous-regeneration, cyclic and hybrid units from any licensor, and they state the unit keeps running during the work.",
    ],
    logo: {
      src: "/images/partners/sr-reg.webp",
      alt: "Placeholder logo for Swiss RR Engineering Group. Replace with the official logo.",
      width: 600,
      height: 240,
    },
  },
  {
    key: "euroteam",
    name: "Euroteam Bauchemie",
    country: "Germany",
    countryCode: "DE",
    website: "https://euroteam-bauchemie.de/en/",
    websiteLabel: "euroteam-bauchemie.de",
    brings: "Construction-chemical systems.",
    description:
      "Euroteam Bauchemie develops and produces construction-chemical systems in Altlandsberg, Germany. The core range is high-polysulphide joint sealants and joint tapes for chemical, mechanical and weather load, alongside concrete-repair mortars, profiles, primers and coatings.",
    bullets: [
      "Materials specified for joints and surfaces that see chemicals, traffic or weather, with published building-authority approvals on defined products.",
      "Concrete repair and surface lining for existing structures, not only new work.",
      "The manufacturer’s own mixing equipment, plus a processing course for their WHG systems.",
    ],
    positioning: [
      "Euroteam Bauchemie GmbH develops and produces construction chemicals in Germany. Their own line is that the products are for structures under extreme chemical, mechanical and weather stress, with a high polysulphide content, tested chemical resistance, and systems approved by the building authorities.",
      "Production, warehouse and shipping are at An der Mühle 1, 15345 Altlandsberg. A training centre is at Johannes Scheiffele-Straße 1, 89407 Dillingen.",
      "A MENA sales office is in Dubai. They run a one-day course that ends in a product authorisation for defined WHG systems.",
      "Their petrochemical document names refineries, tank farms and chemical plants as applications for specific joint sealants. It includes a section on concrete repair and lining.",
    ],
    delivers: [
      "Joint sealants and joint tapes, including polysulphide systems with stated service life over 10 years and cold-vulcanising repair into existing sealant.",
      "Concrete-repair mortars, including EUROREPAIR PC 96 WHG, a building-authority-approved epoxy mortar they publish for LAU systems, with compressive strength stated as 96 N/mm².",
      "Surface linings and a drivable WHG joint profile for liquid-tight areas.",
      "Manufacturer processing equipment, Jointmaster and SVV units, and a WHG processing course.",
    ],
    categories: [
      "Joint sealants",
      "Joint profiles",
      "Adhesives and adhesive mortars",
      "Sealing tapes",
      "Primers",
      "Epoxy coatings",
      "Polyurethane coatings",
      "PU binder for natural stone carpets",
      "Concrete substitutes",
      "Composite materials",
      "Auxiliary materials",
    ],
    serviceParagraphs: [
      "Euroteam Bauchemie is the construction-chemicals partner. They develop and produce the systems in Germany.",
    ],
    logo: {
      src: "/images/partners/euroteam.webp",
      alt: "Placeholder logo for Euroteam Bauchemie. Replace with the official logo.",
      width: 600,
      height: 240,
    },
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "ClipboardCheck",
    title: "Assess & audit",
    body: "We start from the plant, the site or the system as it is: duty, constraints, available data and what a useful outcome looks like.",
  },
  {
    number: "02",
    icon: "PenTool",
    title: "Design & engineer",
    body: "That picture becomes a technical approach — scope, options, interfaces and documents a project team can build from.",
  },
  {
    number: "03",
    icon: "Wrench",
    title: "Implement & integrate",
    body: "We support execution and the point where new work meets equipment, contractors and an operating routine that already exists.",
  },
  {
    number: "04",
    icon: "LineChart",
    title: "Optimize & maintain",
    body: "After the work is in place we support tuning, a maintenance logic and the next increment, if one is justified.",
  },
];

export const industries: { icon: IconName; title: string }[] = [
  { icon: "Zap", title: "Energy & Utilities" },
  { icon: "Factory", title: "Oil & Gas & Refining" },
  { icon: "Cog", title: "Manufacturing" },
  { icon: "FlaskConical", title: "Chemicals" },
  { icon: "HardHat", title: "Construction & Infrastructure" },
];

export const services: Service[] = [
  {
    slug: "energy",
    number: "01",
    label: "ENERGY",
    navLabel: "Energy",
    title: "Energy",
    href: "/services/energy",
    icon: "Zap",
    summary:
      "Technical support for power systems, efficiency programmes and the practical integration of new energy assets. The work stays with the infrastructure a provider or an industrial site actually operates.",
    metaTitle: "Energy engineering",
    metaDescription:
      "Power systems, efficiency audits, renewable integration, grid support and monitoring from Verden Engineering.",
    hero: {
      image: "/images/energy-grid.webp",
      alt: "Electricity transmission pylons and overhead lines",
      overline: "01 — ENERGY",
      title: "Energy systems, efficiency and infrastructure.",
      intro:
        "Engineering support for power systems, efficiency and the interfaces between existing infrastructure and new energy assets.",
    },
    secondaryImage: {
      src: "/images/energy-solar.webp",
      alt: "Solar panels at a solar farm",
    },
    capabilities: [
      {
        icon: "Cable",
        title: "Power systems and infrastructure",
        body: "We support the technical definition of power systems that serve industrial sites and energy infrastructure. Load, redundancy, interfaces and the constraints of an operating asset are part of the same scope.",
      },
      {
        icon: "Gauge",
        title: "Energy efficiency audits",
        body: "We review where energy is used and where it is lost, then separate operational fixes from changes that need engineering. Findings are written so a client can decide what is worth doing first.",
      },
      {
        icon: "Sun",
        title: "Renewable integration feasibility",
        body: "We assess whether on-site generation or a changed supply arrangement can sit beside an existing system. The result is a feasibility view: connection points, constraints and the questions still open.",
      },
      {
        icon: "Network",
        title: "Grid and distribution engineering",
        body: "We support distribution and site-electrical scopes, including the interface with a utility or a campus network. Capacity, protection and the operating regime are treated together.",
      },
      {
        icon: "Activity",
        title: "Monitoring solutions",
        body: "We specify monitoring that an operations team can use: the points, the alarms and a clear picture of performance. The aim is a better view of consumption and plant behaviour.",
      },
    ],
    delivery: [
      {
        number: "01",
        icon: "ClipboardCheck",
        title: "Assess the duty",
        body: "Define the system boundary, the demand and the decision the work has to support.",
      },
      {
        number: "02",
        icon: "PenTool",
        title: "Set the engineering scope",
        body: "Lay out options, interfaces and the information the client team still needs to provide.",
      },
      {
        number: "03",
        icon: "Wrench",
        title: "Support implementation",
        body: "Stay with design development and the questions that appear once work is underway.",
      },
      {
        number: "04",
        icon: "LineChart",
        title: "Hand over for operation",
        body: "Leave monitoring points, assumptions and maintenance implications in a form operators can use.",
      },
    ],
  },
  {
    slug: "construction",
    number: "02",
    label: "CONSTRUCTION",
    navLabel: "Construction",
    title: "Construction chemicals",
    href: "/services/construction",
    icon: "HardHat",
    summary:
      "We specify joint sealants, repair mortars and surface linings for structures under chemical, mechanical and weather load. The system is chosen for the structure in front of us.",
    metaTitle: "Construction chemicals",
    metaDescription:
      "Joint sealants, concrete repair and liquid-tight linings for structures under chemical, mechanical and weather load.",
    hero: {
      image: "/images/construction-steel.webp",
      alt: "Steel frame of a building under construction",
      overline: "02 — CONSTRUCTION",
      title: "The material on a structure that has to last.",
      intro:
        "We specify construction-chemical systems for joints and surfaces under chemical, mechanical and weather stress. The brief is the structure as it stands, including a repair that has to meet what is already there.",
    },
    capabilities: [
      {
        icon: "FlaskConical",
        title: "Polysulphide joint sealants",
        body: "Pourable and stable (gun-grade) sealants with a high polymer content, specified for chemical resistance and for a cold-vulcanising repair into existing polysulphide. Petrochemical systems are published at about −50 °C to +120 °C, with a stated service life over 10 years.",
      },
      {
        icon: "Building2",
        title: "Repair of existing concrete",
        body: "A two-component epoxy mortar for concrete, reinforced concrete and precast, including joint edges and upstands. The WHG mortar is published at 96 N/mm², with asphalt repair, crack filling and an anchor adhesive that carries an ETA for cracked and non-cracked concrete.",
      },
      {
        icon: "ShieldCheck",
        title: "Profiles, tapes and linings",
        body: "Drivable joint profiles for liquid-tight slabs, joint tapes for movement and floor-to-wall connections, and surface linings for catch basins. Defined systems are published with building-authority approvals.",
      },
      {
        icon: "Factory",
        title: "Where the systems are used",
        body: "Airfields, traffic routes, rail joints, warehouses, chemical and petrochemical plants, tank farms and building-construction joints. Fast-curing grades are specified where a closure has to be short.",
      },
    ],
    delivery: [
      {
        number: "01",
        icon: "ClipboardCheck",
        title: "Read the structure",
        body: "Movement, chemical exposure, temperature and the condition of the concrete or asphalt already in place.",
      },
      {
        number: "02",
        icon: "PenTool",
        title: "Specify the system",
        body: "Sealant, tape, profile, mortar or lining, with the primer and the approvals published for that system.",
      },
      {
        number: "03",
        icon: "Wrench",
        title: "Support the installation",
        body: "We support the published method on site. Fast-curing grades shorten a traffic or airfield closure, and mixing uses the equipment supplied with the system.",
      },
    ],
  },
  {
    slug: "refineries",
    number: "03",
    label: "REFINERIES",
    navLabel: "Refineries",
    title: "Catalytic reforming",
    href: "/services/refineries",
    icon: "Factory",
    summary:
      "Operating-point optimisation for an existing catalytic reformer. Hydrogen, reformate and octane are recalculated while the unit stays on line.",
    metaTitle: "Catalytic reforming",
    metaDescription:
      "Optimise an existing catalytic reformer for hydrogen, reformate and octane, without a shutdown or a new reactor.",
    hero: {
      image: "/images/refinery-pipes.webp",
      alt: "Industrial process plant with piping, platforms and vessels",
      overline: "03 — REFINERIES",
      title: "More from the catalytic reformer you already run.",
      intro:
        "We recalculate the operating point of an existing catalytic reforming unit: hydrogen, reformate and octane. The reactor stays in service.",
    },
    capabilities: [
      {
        icon: "FlaskConical",
        title: "A model for reforming only",
        body: "The calculation describes catalytic reforming reactions. Catalyst type and current activity are inputs, with the feed.",
      },
      {
        icon: "Factory",
        title: "The reformer you have",
        body: "Semi-regenerative, continuous regeneration, cyclic and hybrid units. The licensor does not decide whether the work can be done.",
      },
      {
        icon: "Gauge",
        title: "Yield, octane, hydrogen",
        body: "Operating parameters are set against the octane target and the hydrogen the rest of the refinery needs.",
      },
      {
        icon: "Activity",
        title: "The unit keeps running",
        body: "The study is an offline calculation. Existing controls stay in place, and production continues through the work.",
      },
    ],
    delivery: [
      {
        number: "01",
        icon: "ClipboardCheck",
        title: "Read the unit",
        body: "Duty, catalyst, feedstock, product targets and the constraints the reactor already has.",
      },
      {
        number: "02",
        icon: "LineChart",
        title: "Set the protocol",
        body: "Operating parameters for that unit, including a change of feedstock.",
      },
      {
        number: "03",
        icon: "PenTool",
        title: "Hand it to operations",
        body: "Training and support so the people who run the reformer can hold the new point.",
      },
    ],
  },
  {
    slug: "ai-automation",
    number: "04",
    label: "AI AUTOMATION",
    navLabel: "AI automation",
    title: "AI automation",
    href: "/services/ai-automation",
    icon: "Cpu",
    summary:
      "Automation and a careful layer of intelligence on top of industrial equipment that is already running. PLC and SCADA integration, predictive maintenance, vision inspection and operational dashboards.",
    metaTitle: "AI automation for industry",
    metaDescription:
      "Industrial automation, PLC and SCADA integration, predictive maintenance, computer vision and operations dashboards from Verden Engineering.",
    hero: {
      image: "/images/automation-control-room.webp",
      alt: "Electrical control panels in an industrial plant",
      overline: "04 — AI AUTOMATION",
      title: "Automation and AI for industrial operations.",
      intro:
        "We add automation, and intelligence where it earns a place, on top of the control systems and workflows a plant already uses.",
    },
    secondaryImage: {
      src: "/images/automation-robot.webp",
      alt: "Robotic arm on a factory production line",
    },
    capabilities: [
      {
        icon: "Workflow",
        title: "Industrial process automation",
        body: "We automate process tasks where the control problem can be defined and the operating team stays in charge. The starting point is the process, not a catalogue of software.",
      },
      {
        icon: "Cpu",
        title: "PLC and SCADA integration",
        body: "We integrate AI-assisted functions with PLC and SCADA systems so new logic sits beside control equipment the plant already trusts. The line between advice and automatic action is set explicitly.",
      },
      {
        icon: "Activity",
        title: "Predictive maintenance",
        body: "We use operating and maintenance data to flag equipment that is moving away from its normal behaviour. The output is a prompt a planner can act on, with the limits of the data stated.",
      },
      {
        icon: "Scan",
        title: "Computer vision quality control",
        body: "We apply camera-based inspection where a visual check is repetitive and the accept or reject rule can be defined. A person remains able to override the result.",
      },
      {
        icon: "FileCheck",
        title: "Workflow digitalization",
        body: "We replace fragmented paper handovers with digital workflows for inspections, permits and shift information. The test is a shorter path through the work, not another portal.",
      },
      {
        icon: "BarChart3",
        title: "Data dashboards for operations",
        body: "We build dashboards from signals a plant already has, aimed at decisions a shift or a manager actually takes. Each view has an owner and a definition of what good looks like.",
      },
    ],
    delivery: [
      {
        number: "01",
        icon: "ClipboardCheck",
        title: "Find the decision",
        body: "Name the operating decision, the data that exists, and what must stay under human control.",
      },
      {
        number: "02",
        icon: "PenTool",
        title: "Design the layer",
        body: "Specify the automation or model, its interface to PLC or SCADA, and how failure is handled.",
      },
      {
        number: "03",
        icon: "Wrench",
        title: "Integrate on the plant",
        body: "Implement against the live system, with the operations team involved before anything is left running.",
      },
      {
        number: "04",
        icon: "LineChart",
        title: "Tune and keep",
        body: "Watch performance, adjust thresholds and agree who maintains the system after handover.",
      },
    ],
  },
];

export const refineriesPage = {
  outcomes: [
    {
      label: "Hydrogen",
      body: "For the hydrotreaters, from the reformer as it stands.",
    },
    {
      label: "Reformate",
      body: "Output and the split of the components.",
    },
    {
      label: "Octane",
      body: "The product target the unit is asked to hold.",
    },
    {
      label: "Catalyst life",
      body: "How hard the reactor is pushed to get there.",
    },
  ],
  problem: {
    overline: "THE UNIT",
    title: "The reactor is already built. The question is how it is run.",
    paragraphs: [
      "Catalytic reforming sets the hydrogen the hydrotreaters can use, and the octane of the reformate. Feedstock and product demand move; the reactor does not.",
      "A revamp, a catalyst change or a general plant model asks for capital, and often for time offline. This scope stays on the reformer and the control system already in place.",
    ],
  },
  pillars: {
    overline: "THE CALCULATION",
    title: "Four facts the work is built on.",
    items: [
      {
        number: "01",
        title: "Reforming only",
        body: "The model describes catalytic reforming reactions, not a general refinery model with the kinetics adjusted afterwards. Catalyst type and current activity go in with the feed.",
      },
      {
        number: "02",
        title: "Any licensor",
        body: "Semi-regenerative, continuous regeneration, cyclic and hybrid units are in scope. Existing controls, and any optimiser already installed, stay in place.",
      },
      {
        number: "03",
        title: "The products",
        body: "Parameters are set for the octane target and the hydrogen the rest of the site needs. The result breaks out reformate and dry gas, including a new feedstock.",
      },
      {
        number: "04",
        title: "No shutdown for the study",
        body: "The calculation is offline. Production continues while the operating protocol is worked out, and a hardware project is not required to find the point.",
      },
    ],
  },
  method: {
    overline: "THE ENGAGEMENT",
    title: "From the unit data to a protocol operations can hold.",
    note: "The figures are calculated for the reformer in front of us. They are not copied from another plant.",
  },
};

export const constructionPage = {
  categories: [
    "Joint sealants",
    "Joint profiles",
    "Adhesives and adhesive mortars",
    "Sealing tapes",
    "Primers",
    "Epoxy coatings",
    "Polyurethane coatings",
    "PU binder for natural stone carpets",
    "Concrete substitutes",
    "Composite materials",
    "Auxiliary materials",
  ],
  problem: {
    overline: "THE LOAD",
    title: "Water, chemicals, heat, traffic and movement decide joint and surface life.",
    paragraphs: [
      "A joint lives or fails on the chemical, the temperature and how far the slab moves. Standing water and traffic make the same demand of the surface around it.",
      "What is already built stays in the brief. A new sealant or mortar has to bond into the joint and the concrete that are there.",
    ],
  },
  pillars: {
    overline: "THE SYSTEMS",
    title: "Four facts the specification is built on.",
    items: [
      {
        number: "01",
        title: "Polysulphide joints",
        body: "We specify high-polysulphide sealants, pourable and stable (gun-grade), with a high polymer content, for chemical resistance and for a cold-vulcanising repair into existing polysulphide. On the petrochemical systems the stated range is about −50 °C to +120 °C, with a stated service life over 10 years.",
      },
      {
        number: "02",
        title: "Liquid-tight repair",
        body: "For existing concrete we specify a two-component epoxy mortar, including joint edges and upstands on concrete, reinforced concrete and precast. The WHG mortar is published at 96 N/mm² compressive strength, with asphalt repair, crack filling and an anchor adhesive that carries an ETA for cracked and non-cracked concrete.",
      },
      {
        number: "03",
        title: "Profiles and linings",
        body: "Drivable joint profiles are specified for liquid-tight slabs, in new build and in renovation. Joint tapes cover wide joints, movement and floor-to-wall connections in German WHG and LAU areas, and surface linings cover catch basins and difficult substrates, including an electrostatically dissipative version.",
      },
      {
        number: "04",
        title: "Where they are used",
        body: "Published fields include airfields, under kerosene, de-icing agents and hydraulic oils, plus traffic routes, rail joints and warehouses. Chemical and petrochemical plants, tank farms and building joints are included, with DIN 18540 cited for the tape.",
      },
    ],
  },
  method: {
    overline: "THE ENGAGEMENT",
    title: "From the structure in front of us to a system that can be installed.",
    note: "Defined systems are published with building-authority approvals. Those approvals and the published test values belong to the specified system, not to a Verden project list.",
  },
};

export function getService(slug: ServiceSlug): Service {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Unknown service: ${slug}`);
  }
  return service;
}

export function getPartner(key: PartnerKey): Partner {
  const partner = partners.find((item) => item.key === key);
  if (!partner) {
    throw new Error(`Unknown partner: ${key}`);
  }
  return partner;
}

export const imprint = {
  metaTitle: "Imprint",
  metaDescription: "Legal notice for Verden Engineering. Placeholder fields must be completed before publication.",
  overline: "LEGAL",
  title: "Imprint",
  notice:
    "This is a template legal notice. Replace every [PLACEHOLDER], confirm the responsible people, and have the text checked against the law of the country where the company is established before publication.",
  sections: [
    {
      heading: "Service provider",
      blocks: [
        { type: "p", text: "Verden Engineering" },
        { type: "p", text: "[ADDRESS]" },
        { type: "p", text: "[COMPANY_REGISTRATION]" },
      ],
    },
    {
      heading: "Contact",
      blocks: [
        { type: "p", text: "Email: [EMAIL]" },
        { type: "p", text: "Phone: [PHONE]" },
      ],
    },
    {
      heading: "Represented by",
      blocks: [
        {
          type: "p",
          text: "[MANAGING_DIRECTOR] — add the name of the person authorised to represent the company.",
        },
      ],
    },
    {
      heading: "Register and tax",
      blocks: [
        { type: "p", text: "Company register: [COMPANY_REGISTRATION]" },
        { type: "p", text: "VAT or tax identification: [VAT_ID]" },
      ],
    },
    {
      heading: "Responsible for content",
      blocks: [
        {
          type: "p",
          text: "[RESPONSIBLE_PERSON], [ADDRESS]. This is the person responsible for the editorial content of this website.",
        },
      ],
    },
    {
      heading: "Dispute resolution",
      blocks: [
        {
          type: "p",
          text: "The European Commission provides a platform for online dispute resolution at https://ec.europa.eu/consumers/odr. Verden Engineering is [WILLING / NOT WILLING] to participate in dispute resolution before a consumer arbitration board. Confirm this sentence with counsel. [DISPUTE_RESOLUTION]",
        },
      ],
    },
    {
      heading: "Liability",
      blocks: [
        {
          type: "p",
          text: "The contents of this website are prepared with care. They are general information about an engineering practice, not a binding offer and not professional advice for a specific asset. Liability for the accuracy, completeness and timeliness of the information is limited to the extent permitted by the applicable law.",
        },
        {
          type: "p",
          text: "This website links to the sites of Swiss RR Engineering Group and Euroteam Bauchemie. Those sites are operated by the respective partners. Verden Engineering is not responsible for their content.",
        },
      ],
    },
  ] satisfies LegalSection[],
};

export const privacy = {
  metaTitle: "Privacy policy",
  metaDescription:
    "How Verden Engineering handles personal data submitted through this website, including the contact form.",
  overline: "LEGAL",
  title: "Privacy policy",
  notice:
    "This is a GDPR-oriented template. It is not legal advice. Replace every [PLACEHOLDER] and have the final policy reviewed before publication. This site does not use advertising or analytics cookies.",
  sections: [
    {
      heading: "Controller",
      blocks: [
        {
          type: "p",
          text: "The controller for personal data collected through this website is Verden Engineering, [ADDRESS], email [EMAIL], phone [PHONE]. Company registration: [COMPANY_REGISTRATION].",
        },
      ],
    },
    {
      heading: "What we collect",
      blocks: [
        {
          type: "p",
          text: "If you use the contact form we process the name, company, email address and message you submit, together with the fact that you gave consent. We do not ask for special-category data. Please do not include it.",
        },
        {
          type: "p",
          text: "The host of this website may process technical logs (such as IP address, date and the requested page) for security and operation. Retention of those logs is [LOG_RETENTION].",
        },
      ],
    },
    {
      heading: "Why we process it",
      blocks: [
        {
          type: "p",
          text: "We use contact-form data to read and reply to your enquiry, and to keep a record of that correspondence. We do not use it to build a marketing list.",
        },
        {
          type: "ul",
          items: [
            "Taking steps at your request before entering a contract — Article 6(1)(b) GDPR.",
            "Consent, given through the required checkbox — Article 6(1)(a) GDPR. You may withdraw consent at any time by writing to [EMAIL]. Withdrawal does not affect the lawfulness of processing before withdrawal.",
            "Legitimate interests in securing and operating the website, where technical logs are kept — Article 6(1)(f) GDPR.",
          ],
        },
      ],
    },
    {
      heading: "How long we keep it",
      blocks: [
        {
          type: "p",
          text: "Enquiry correspondence is kept for [RETENTION_PERIOD], and longer only if a legal claim or a statutory duty requires it. Set this period before publication.",
        },
      ],
    },
    {
      heading: "Who receives it",
      blocks: [
        {
          type: "p",
          text: "Today the contact form is received by the site operator and is not forwarded to an external mailbox automatically. Before go-live, wire the form to an email service and name that processor here: [EMAIL_PROCESSOR].",
        },
        {
          type: "p",
          text: "We do not sell personal data. We share it if the law requires us to, or with a processor bound by a written agreement under Article 28 GDPR.",
        },
      ],
    },
    {
      heading: "International transfers",
      blocks: [
        {
          type: "p",
          text: "No international transfer is intended until an email or hosting provider outside your region is chosen. If that happens, record the country and the safeguard (for example standard contractual clauses) here: [TRANSFER_SAFEGUARD].",
        },
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "Subject to the GDPR and any national rules that apply, you can ask us for:",
        },
        {
          type: "ul",
          items: [
            "Access to the personal data we hold about you.",
            "Rectification of inaccurate data.",
            "Erasure, or restriction of processing, where the conditions are met.",
            "A portable copy of data you provided, where processing is based on consent or contract and is carried out by automated means.",
            "Objection to processing based on legitimate interests.",
            "Withdrawal of consent, where consent is the legal basis.",
          ],
        },
        {
          type: "p",
          text: "To exercise these rights, write to [EMAIL]. You may also lodge a complaint with a supervisory authority. The relevant authority for this company is [SUPERVISORY_AUTHORITY].",
        },
      ],
    },
    {
      heading: "Cookies",
      blocks: [
        {
          type: "p",
          text: "This website does not set analytics, advertising or social-media cookies. It does not use a cookie banner because there is no optional tracking to accept or refuse. If a strictly necessary cookie is introduced later (for example to remember a form draft), it will be listed here with its name, purpose and lifetime: [COOKIES].",
        },
      ],
    },
    {
      heading: "Automated decisions",
      blocks: [
        {
          type: "p",
          text: "Information sent through this website is not used for automated decision-making or profiling that produces legal effects.",
        },
      ],
    },
    {
      heading: "Changes",
      blocks: [
        {
          type: "p",
          text: "We will post any change to this policy on this page. Last updated: [LAST_UPDATED].",
        },
      ],
    },
  ] satisfies LegalSection[],
};
