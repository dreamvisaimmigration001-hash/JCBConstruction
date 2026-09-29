import {
  Project,
  ServiceItem,
  ExpertiseItem,
  TimelineMilestone,
  NewsArticle,
  JobListing,
  OfficeLocation,
} from '../types';

export const JCB_STATS = [
  { value: '1985', label: 'Founded' },
  { value: '100+', label: 'Employees' },
  { value: 'TORONTO & NATIONAL', label: 'Canadian Reach' },
  { value: '40+', label: 'Years of Experience' },
];

export const CORE_VALUES = [
  {
    number: '01',
    title: 'DO BETTER',
    tagline: 'Continuous pursuit of excellence',
    quote:
      'Although perfection is out of the question, we believe it is always possible to do better.',
    description:
      'We challenge traditional routines, interrogate construction assumptions, and constantly refine our preconstruction, safety protocols, and on-site coordination to elevate project outcomes.',
  },
  {
    number: '02',
    title: 'BE PART OF THE SOLUTION',
    tagline: 'Pragmatic collaborative problem solving',
    quote:
      'Constantly seeking to simplify results, solve problems and make life easier for clients, partners and communities.',
    description:
      'Major construction projects face unforeseen complexities. JCB approaches every challenge transparently with immediate, actionable alternatives, safeguarding schedules and fiscal integrity.',
  },
  {
    number: '03',
    title: 'MAKE A DIFFERENCE',
    tagline: 'Enduring positive community impact',
    quote:
      'Every action has consequences. We aim to build something positive.',
    description:
      'From reducing environmental footprints through mass timber and sustainable waste diversion to cultivating an inclusive employee ownership culture, we build for long-term societal value.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'construction-management',
    code: '01',
    title: 'CONSTRUCTION MANAGEMENT',
    shortDesc:
      'Collaborative project involvement from the beginning, working with designers and professionals to optimize the future space, identify potential issues and explore savings opportunities.',
    fullDesc:
      'The Construction Management model integrates JCB into the earliest preconstruction phase. Acting as your fiduciary construction partner, we collaborate directly with architects, engineers, and municipal stakeholders to run continuous value-engineering, optimize materials, and fast-track procurement before ground is broken.',
    advantages: [
      'Early cost certainty & dynamic budget modeling',
      'Value-engineering without compromising architectural vision',
      'Fast-tracking: tendering trade packages during design evolution',
      'Transparent open-book accounting and subcontractor bidding',
      'Comprehensive risk mitigation and schedule preservation',
    ],
    bestFor:
      'Complex institutional, commercial, and multi-residential builds with tight delivery schedules or evolving architectural requirements.',
    processSteps: [
      {
        step: 'Phase 01',
        title: 'Preconstruction & Constructability Analysis',
        description:
          'BIM clash detection, site logistics planning, baseline cost estimating, and proactive value engineering.',
      },
      {
        step: 'Phase 02',
        title: 'Trade Packaging & Procurement',
        description:
          'Competitive open-book tendering across qualified Canadian subcontractors to maximize cost efficiency.',
      },
      {
        step: 'Phase 03',
        title: 'On-Site Execution & Quality Control',
        description:
          'Rigorous site supervision, weekly milestone tracking, ISO 9001 compliance, and zero-compromise safety management.',
      },
      {
        step: 'Phase 04',
        title: 'Commissioning & Handover',
        description:
          'System commissioning, occupancy permits, operational training, and comprehensive digital handover documentation.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'turnkey',
    code: '02',
    title: 'TURNKEY CONSTRUCTION',
    shortDesc:
      'A single partner managing the project from concept through inauguration, with close monitoring of quality, budget, schedule and communication.',
    fullDesc:
      'With JCB Turnkey Construction (Design-Build), clients receive a unified single point of accountability. JCB assumes end-to-end responsibility for programming, architectural coordination, engineering oversight, municipal approvals, construction, and commissioning—delivering complete peace of mind.',
    advantages: [
      'Single point of contractual responsibility',
      'Streamlined communication and reduced client administrative burden',
      'Guaranteed maximum price and guaranteed completion milestones',
      'Elimination of finger-pointing between design and construction teams',
      'Accelerated total project duration from vision to occupancy',
    ],
    bestFor:
      'Industrial facilities, commercial distribution hubs, and corporate developers seeking guaranteed performance under single-source accountability.',
    processSteps: [
      {
        step: 'Phase 01',
        title: 'Programming & Concept Validation',
        description:
          'Aligning operational objectives, spatial criteria, municipal zoning, and budgetary ceilings.',
      },
      {
        step: 'Phase 02',
        title: 'Integrated Design & Engineering',
        description:
          'Directing architectural and engineering partners under unified constructability and sustainability targets.',
      },
      {
        step: 'Phase 03',
        title: 'Guaranteed Delivery & Construction',
        description:
          'Flawless on-site management with real-time digital milestone tracking and proactive variance control.',
      },
      {
        step: 'Phase 04',
        title: 'Turnkey Commissioning & Launch',
        description:
          'Immediate turnkey operations readiness, complete with warranties, staff training, and ongoing post-occupancy care.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fixed-price',
    code: '03',
    title: 'FIXED-PRICE CONSTRUCTION',
    shortDesc:
      'For clearly defined projects, JCB executes according to the established concept, budget and schedule with a fixed price.',
    fullDesc:
      'When plans, specifications, and engineering schedules are fully defined, JCB executes under a traditional stipulated sum (fixed-price) contract. Drawing on 40+ years of estimating precision and deep supplier relationships across Quebec and Ontario, we guarantee disciplined delivery without scope surprises.',
    advantages: [
      'Strict cost ceiling and fiscal predictability',
      'Transparent contract documentation and established milestones',
      'Leverage of JCB’s extensive regional subcontractor network',
      'Uncompromising quality adhering strictly to project specifications',
      'Rigorous project management enforcing established deadlines',
    ],
    bestFor:
      'Public tenders, institutional contracts, and corporate developments with finalized, approved architectural and engineering construction documents.',
    processSteps: [
      {
        step: 'Phase 01',
        title: 'Detailed Scope Review & Tendering',
        description:
          'Comprehensive specification analysis and competitive market pricing from vetted trade contractors.',
      },
      {
        step: 'Phase 02',
        title: 'Contract Baseline & Schedule Lockdown',
        description:
          'Formalizing milestone deliverables, critical path schedules, and material lead-time procurement.',
      },
      {
        step: 'Phase 03',
        title: 'Precision Site Execution',
        description:
          'Daily field superintendent supervision, strict quality assurance checks, and tight safety enforcement.',
      },
      {
        step: 'Phase 04',
        title: 'Final Closeout & Deficiency Clearance',
        description:
          'Expedited deficiency rectification, comprehensive operational manuals, and prompt project closeout.',
      },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  },
];

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'new-construction',
    code: '01',
    title: 'NEW CONSTRUCTION',
    category: 'Structural Development',
    description:
      'Ground-up construction of flagship institutional, industrial, commercial, and multi-residential structures engineered for generational durability and environmental performance.',
    keyAspects: [
      'Site preparation, earthworks, and complex deep foundations',
      'Structural steel, mass timber, and reinforced concrete frameworks',
      'Advanced building envelope integration with high thermal performance',
      'Commissioning of high-efficiency mechanical, electrical, and plumbing (MEP)',
    ],
    deliverables: [
      'Turnkey handover with zero outstanding deficiencies',
      'BIM-grounded as-built digital twin documentation',
      'Generational durability and optimized operational efficiency',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'expansion',
    code: '02',
    title: 'BUILDING EXPANSION',
    category: 'Facility Growth',
    description:
      'Seamless expansion of operational campuses, production plants, and educational facilities with zero disruption to active daily operations.',
    keyAspects: [
      'Phased construction sequencing around operational facilities',
      'Structural tie-ins, load transfers, and seismic upgrades',
      'Utility capacity expansions and central plant integration',
      'Vibration, noise, and dust isolation protocols',
    ],
    deliverables: [
      '100% operational continuity during adjacent heavy construction',
      'Seamless architectural transitions between existing and new wings',
      'Future-proofed utility infrastructure for further growth',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'major-renovation',
    code: '03',
    title: 'MAJOR RENOVATION',
    category: 'Asset Modernization',
    description:
      'Comprehensive structural, architectural, and MEP transformation of existing properties into high-performance contemporary environments.',
    keyAspects: [
      'Heavy structural modifications, load-bearing column reconfigurations',
      'Modern building code and accessibility compliance upgrades',
      'Replacement of obsolete central HVAC and electrical infrastructure',
      'Acoustic insulation enhancements and interior architectural refinement',
    ],
    deliverables: [
      'Maximized asset appraisal and tenant attraction',
      'Substantial reduction in ongoing utility consumption',
      'Modernized occupant experience and flexible floor plates',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bim-approach',
    code: '04',
    title: 'BIM APPROACH',
    category: 'Digital Engineering',
    description:
      'Building Information Modeling (BIM) workflows that simulate constructability in 3D/4D, eliminating clashes in digital space before steel and concrete are placed.',
    keyAspects: [
      'LOD 300 to LOD 500 digital modeling coordination',
      'Multi-trade clash detection across structural, MEP, and envelope models',
      '4D schedule simulation and 5D cost forecasting',
      'Laser scanning and reality capture verification during site progress',
    ],
    deliverables: [
      '95%+ reduction in field change orders and unexpected clashes',
      'Precise prefabrication timelines and accelerated on-site assembly',
      'Rich digital asset model for long-term facility management',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sustainable-construction',
    code: '05',
    title: 'SUSTAINABLE CONSTRUCTION',
    category: 'Eco-Engineering',
    description:
      'Low-carbon building strategies encompassing mass timber construction, LEED/WELL certification standards, and construction waste diversion exceeding 85%.',
    keyAspects: [
      'Engineered mass timber (glulam and CLT) structural implementation',
      'Embodied carbon reduction and low-VOC non-toxic materials',
      'Net-zero energy readiness and high-performance building envelopes',
      'LEED, BOMA BEST, and Zero Carbon Building certification leadership',
    ],
    deliverables: [
      'Certified sustainable landmark structures with reduced life-cycle impact',
      'Significantly lower operational carbon emissions and heating loads',
      'Healthy, daylight-optimized interior work and living spaces',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'building-envelope',
    code: '06',
    title: 'BUILDING ENVELOPE',
    category: 'Enclosure Engineering',
    description:
      'Specialized engineering and installation of high-efficiency curtain walls, rainscreen systems, thermal break barriers, and waterproof roofing assemblies.',
    keyAspects: [
      'High-performance triple-glazed unitized curtain wall systems',
      'Continuous thermal insulation and air-vapor barrier integrity testing',
      'Architectural metal panel, terracotta, and architectural precast facades',
      'Rooftop water retention and green roof installations',
    ],
    deliverables: [
      'Elimination of thermal bridging and moisture intrusion risks',
      'Extended building lifecycle with reduced facade maintenance',
      'Striking architectural exterior identity in urban skylines',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'interior-retrofit',
    code: '07',
    title: 'INTERIOR RETROFIT',
    category: 'Workplace Architecture',
    description:
      'High-precision fit-outs for Canadian enterprise headquarters, research laboratories, innovation centers, and institutional facilities.',
    keyAspects: [
      'Bespoke architectural millwork, glass partitions, and acoustic baffling',
      'Mission-critical server room, lab infrastructure, and cleanroom fit-outs',
      'Smart lighting controls, automated shading, and integrated AV infrastructure',
      'Rapid-deployment project schedules accommodating lease expirations',
    ],
    deliverables: [
      'Inspiring, highly productive environments aligned with brand culture',
      'Seamless integration of hybrid workplace technology and collaboration zones',
      'Strict adherence to accelerated move-in deadlines',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'building-restoration',
    code: '08',
    title: 'BUILDING RESTORATION',
    category: 'Heritage & Preservation',
    description:
      'Meticulous restoration and structural stabilization of historic Canadian masonry, heritage facades, and complex civic infrastructure.',
    keyAspects: [
      'Historical stone masonry repair, repointing, and heritage conservation',
      'Structural underpinning, foundation reinforcement, and seismic anchoring',
      'Harmonization of historic preservation standards with modern life-safety codes',
      'Specialized craft trades coordinated with municipal heritage boards',
    ],
    deliverables: [
      'Preservation of architectural heritage for future generations',
      'Enhanced structural integrity meeting 21st-century seismic codes',
      'Full statutory and municipal heritage approval clearances',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'college-sainte-anne',
    title: 'Collège Sainte-Anne',
    sector: 'institutional',
    location: 'Lachine / Dorval, QC',
    year: '2023',
    contractType: 'Construction Management',
    scope: 'Campus Expansion & Innovative Learning Pavilion',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'A landmark educational pavilion featuring cutting-edge collaborative spaces, mass timber structural elements, and a high-performance glazed envelope built while keeping the active campus completely operational.',
    challenge:
      'Executing heavy structural excavation and envelope assembly on a dense, active secondary school campus with hundreds of students and faculty members present daily.',
    solution:
      'JCB implemented strict acoustic windows, separate secure logistics access, and a multi-phase delivery schedule that shifted high-impact activities outside school operating hours.',
    keyStats: [
      { label: 'Built Area', value: '45,000 sq.ft.' },
      { label: 'Schedule Variance', value: '0 Days (On Time)' },
      { label: 'Safety Record', value: 'Zero Lost Time Incidents' },
    ],
    tags: ['Institutional', 'Campus Expansion', 'BIM', 'Mass Timber'],
  },
  {
    id: 'wood-project-ftq',
    title: 'Wood Project — Fonds immobilier FTQ',
    sector: 'commercial',
    location: 'Greater Montreal, QC',
    year: '2022',
    contractType: 'Turnkey Construction',
    scope: 'Sustainable Mass Timber Office Building',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'A pioneering commercial office showcase utilizing exposed glue-laminated timber beams and Cross-Laminated Timber (CLT) floor slabs, embodying sustainable carbon-sequestering construction in Quebec.',
    challenge:
      'Coordinating moisture control and protection of prefabricated timber elements during variable Canadian seasonal weather conditions, while maintaining tight tolerances.',
    solution:
      'Comprehensive 3D BIM pre-modeling ensured millimeter-accurate off-site CNC milling of structural components, coupled with real-time on-site atmospheric sheltering protocols.',
    keyStats: [
      { label: 'Carbon Sequestered', value: '420 Metric Tons' },
      { label: 'Waste Diversion', value: '92%' },
      { label: 'Structure Delivery', value: '3 Weeks Ahead of Plan' },
    ],
    tags: ['Mass Timber', 'LEED Target', 'Commercial Office', 'Sustainable'],
  },
  {
    id: 'canadian-national-hq',
    title: 'New Headquarters of Canadian National',
    sector: 'commercial',
    location: 'Downtown Montreal, QC',
    year: '2021',
    contractType: 'Construction Management',
    scope: 'Major Corporate Interior Retrofit & Modernization',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'High-end multi-floor corporate headquarters transformation for one of Canada’s largest transportation enterprises, incorporating state-of-the-art collaborative workspaces, executive boardrooms, and smart building controls.',
    challenge:
      'Executing multi-floor demolitions, structural slab openings for internal monumental staircases, and acoustic fit-outs in a fully occupied Class-A skyscraper.',
    solution:
      'Flawless off-hours material hoisting via exterior freight elevator, strict acoustic dampening, and rapid pre-tendering of custom architectural millwork and glass wall systems.',
    keyStats: [
      { label: 'Floors Renovated', value: '6 Complete Levels' },
      { label: 'Total Footprint', value: '110,000 sq.ft.' },
      { label: 'Client Handover', value: 'Phased Zero Interruption' },
    ],
    tags: ['Corporate Interior', 'Class-A Office', 'Construction Management'],
  },
  {
    id: '936-sainte-catherine-east',
    title: '936 Sainte-Catherine East',
    sector: 'commercial',
    location: 'Montreal, QC',
    year: '2023',
    contractType: 'Turnkey Construction',
    scope: 'Urban Heritage Redevelopment & Commercial Hub',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'A sophisticated urban regeneration project along Montreal’s primary commercial artery, preserving historic masonry while reconstructing the internal structural matrix for modern retail and office tenants.',
    challenge:
      'Stabilizing an 80-year-old exterior masonry facade on a bustling pedestrian corridor with heavy municipal transit requirements.',
    solution:
      'Custom exterior steel shoring exoskeleton combined with micro-pile underpinning allowed JCB to safely reconstruct inner floor slabs without damaging the historic streetwall.',
    keyStats: [
      { label: 'Heritage Preservation', value: '100% Facade Restored' },
      { label: 'Energy Performance', value: '+35% Efficiency Gain' },
    ],
    tags: ['Urban Redevelopment', 'Heritage Preservation', 'Retail'],
  },
  {
    id: 'bdc-business-centre',
    title: 'BDC Business Centre',
    sector: 'institutional',
    location: 'Greater Montreal & Quebec Region',
    year: '2022',
    contractType: 'Fixed-Price Construction',
    scope: 'Financial Centre Network Modernization',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'Turnkey modernization of client advisory centers for the Business Development Bank of Canada (BDC), prioritizing transparent client consultation suites, acoustic privacy, and national brand identity consistency.',
    challenge:
      'Strict adherence to high-security banking physical partitions, vault integration, and compliance with federal institutional accessibility regulations.',
    solution:
      'Standardized procurement frameworks and tight fixed-price execution that delivered the project on budget and ahead of scheduled grand openings.',
    keyStats: [
      { label: 'Cost Variance', value: '$0.00 Fixed Price Budget' },
      { label: 'Sound Rating', value: 'STC 55 Acoustic Isolation' },
    ],
    tags: ['Institutional', 'Financial Services', 'Acoustic Engineering'],
  },
  {
    id: 'podium-600-de-la-gauchetiere',
    title: 'Podium of 600 De la Gauchetière',
    sector: 'commercial',
    location: 'Downtown Montreal, QC',
    year: '2024',
    contractType: 'Construction Management',
    scope: 'Skyscraper Podium & Architectural Revitalization',
    featured: true,
    heroImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'Structural redevelopment of the podium levels at one of Montreal’s tallest commercial office towers, replacing brutalist concrete parapets with expansive glazed atriums and public thoroughfares.',
    challenge:
      'Modifying primary structural post-tensioned transfer slabs above active underground metro station passages and continuous vehicular loading docks.',
    solution:
      'Advanced 3D deflection monitoring sensors and precision carbon-fiber structural reinforcement enabled surgical slab cutouts with complete structural safety.',
    keyStats: [
      { label: 'Glazed Envelope', value: '28,000 sq.ft.' },
      { label: 'Transit Disruption', value: 'Zero Subway Stoppages' },
    ],
    tags: ['Commercial', 'Infrastructure', 'Major Renovation', 'Envelope'],
  },
  {
    id: 'abb-industrial-campus',
    title: 'ABB Industrial Campus & Technology Hub',
    sector: 'industrial',
    location: 'Saint-Laurent, QC',
    year: '2021',
    contractType: 'Turnkey Construction',
    scope: 'High-Tech Industrial & Clean Assembly Facility',
    featured: false,
    heroImage:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'Specialized manufacturing and research facility designed with high-capacity slab bearing loads, heavy overhead cranes, and anti-static ESD cleanrooms.',
    challenge:
      'Accommodating massive dynamic vibration loads while adhering to cleanroom air particulate tolerances.',
    solution:
      'Isolated foundation pads and dedicated clean-air makeup systems engineered in early design collaboration with industrial machinery teams.',
    keyStats: [
      { label: 'Facility Size', value: '180,000 sq.ft.' },
      { label: 'Overhead Cranes', value: '4 x 25-Ton Capacity' },
    ],
    tags: ['Industrial', 'Advanced Manufacturing', 'Turnkey'],
  },
  {
    id: 'saint-laurent-multi-res',
    title: 'Saint-Laurent Modern Living Complex',
    sector: 'multi-residential',
    location: 'Montreal, QC',
    year: '2023',
    contractType: 'Construction Management',
    scope: 'Urban Multi-Residential Community',
    featured: false,
    heroImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'Contemporary residential complex comprising 160 modern rental units, shared rooftop amenity terraces, and two levels of underground concrete parking.',
    challenge:
      'High water table and proximity to neighboring municipal residential structures requiring silent sheet-piling and zero-settlement guarantees.',
    solution:
      'Comprehensive secant pile wall barrier combined with continuous piezometric water table monitoring.',
    keyStats: [
      { label: 'Residential Units', value: '160 Units' },
      { label: 'Underground Levels', value: '2 Levels (210 Stalls)' },
    ],
    tags: ['Multi-Residential', 'Concrete Structure', 'Urban'],
  },
  {
    id: 'mont-joli-development',
    title: 'Mont-Joli Commercial & Multi-Residential Complex',
    sector: 'multi-residential',
    location: 'Mont-Joli, QC',
    year: '2024',
    contractType: 'Construction Management',
    scope: 'Mixed-Use Regional Development',
    featured: false,
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    ],
    summary:
      'Major regional mixed-use hub bringing high-quality rental units and ground-floor commercial services to support economic dynamism and local community growth.',
    challenge:
      'Regional supply chain coordination and extreme winter construction conditions in Eastern Quebec.',
    solution:
      'Off-site prefabrication of thermal envelope panels and winter enclosure staging allowing interior trades to proceed without cold-weather halts.',
    keyStats: [
      { label: 'Units', value: '84 Units + Retail' },
      { label: 'Thermal Envelope', value: 'R-35 Superior Envelope' },
    ],
    tags: ['Multi-Residential', 'Commercial', 'Regional Development'],
  },
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: '1985',
    title: 'Founding of JCB General Contractors',
    description:
      'J. Carol Boutet and partners Louis Lavigne and Jean-François Gravel establish JCB General Contractors with a vision of transparent, precision-led construction management.',
    category: 'founding',
  },
  {
    year: '1992',
    title: 'Custom-Built Head Office in Brossard',
    description:
      'Rapid company growth prompts JCB to construct and relocate to its custom-built corporate head office on Rue Isabelle in Brossard, Quebec, which serves as headquarters to this day.',
    category: 'expansion',
  },
  {
    year: '1997',
    title: 'ISO 9001 Quality Certification',
    description:
      'JCB becomes one of the early Canadian general contractors to attain ISO 9001 certification, standardizing quality assurance, documentation, and continuous process improvement across all job sites.',
    category: 'certification',
  },
  {
    year: '2008',
    title: 'Creation of Environmental Committee',
    description:
      'Formalizing JCB’s commitment to sustainable building, an internal environmental steering committee is established to drive LEED certifications and on-site waste diversion.',
    category: 'innovation',
  },
  {
    year: '2013',
    title: 'Retirement of Founder J. Carol Boutet',
    description:
      'After nearly three decades of inspiring leadership, founder J. Carol Boutet retires, paving the way for a smooth leadership transition among executive partners.',
    category: 'governance',
  },
  {
    year: '2015',
    title: '30th Anniversary & New Generation of Partners',
    description:
      'Celebrating 30 years of building excellence, JCB expands its partnership equity to welcome dynamic leaders committed to technological modernization.',
    category: 'governance',
  },
  {
    year: '2019',
    title: 'Evolution to JCB Construction Canada',
    description:
      'Reflecting pan-Canadian project expansion and growing multi-provincial client relationships, JCB General Contractors formally becomes JCB Construction Canada.',
    category: 'expansion',
  },
  {
    year: '2020',
    title: 'Opening of Toronto Office in Concord',
    description:
      'To service expanding institutional and commercial clients across Ontario, JCB opens its dedicated Toronto office on Keele Street in Concord.',
    category: 'expansion',
  },
  {
    year: '2023',
    title: 'Alexandre-Stéphane Boucher Named President-General Manager',
    description:
      'Alexandre-Stéphane Boucher is appointed President-General Manager, championing client-centric problem solving, digital BIM integration, and human-first management.',
    category: 'governance',
  },
  {
    year: '2024',
    title: 'Launch of Employee Share Ownership Program',
    description:
      'Empowering team members to directly share in company success, JCB launches an employee share ownership plan, reinforcing long-term talent retention and pride in execution.',
    category: 'governance',
  },
  {
    year: '2026',
    title: 'Jean-Christophe Caron Appointed VP Preconstruction',
    description:
      'Jean-Christophe Caron is appointed Vice President, Preconstruction, consolidating JCB’s leadership in early project optimization, cost modeling, and value engineering.',
    category: 'governance',
  },
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'mont-joli-development',
    title: 'New Multi-Residential and Commercial Development in Mont-Joli',
    date: 'February 18, 2026',
    category: 'Project Announcement',
    readTime: '4 min read',
    summary:
      'JCB Construction Canada announces the groundbreaking of a major mixed-use development combining contemporary rental units and community-oriented retail in Mont-Joli.',
    content: [
      'JCB Construction Canada is proud to announce its selection as the lead construction management partner for an ambitious mixed-use complex in Mont-Joli.',
      'The multi-phase development addresses regional housing requirements while incorporating sustainable building envelopes and energy-efficient mechanical infrastructure.',
      '“Our team is thrilled to deploy our construction management expertise in Eastern Quebec, working closely with local subcontractors and municipal authorities,” said Alexandre-Stéphane Boucher, President-General Manager.',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    highlight: '84 multi-residential units with high-performance envelope.',
  },
  {
    id: 'soroosh-sharifpoor-ontario',
    title: 'JCB Construction Canada Appoints Soroosh Sharifpoor as Regional Director, Ontario',
    date: 'January 22, 2026',
    category: 'Leadership Appointment',
    readTime: '3 min read',
    summary:
      'With over 18 years of institutional and commercial construction leadership across the Greater Toronto Area, Soroosh Sharifpoor joins JCB to lead Ontario operations.',
    content: [
      'In a major step reinforcing its footprint in Ontario, JCB Construction Canada has appointed Soroosh Sharifpoor, P.Eng., as Regional Director for Ontario operations based at the Concord office.',
      'Soroosh brings profound experience overseeing complex hospital expansions, university campuses, and commercial developments across the GTA.',
      '“JCB’s culture of problem-solving and client partnership resonates deeply with what Ontario developers and institutions are looking for today,” noted Sharifpoor.',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Accelerating commercial and institutional execution in the GTA.',
  },
  {
    id: 'jean-christophe-caron-vp',
    title: 'Jean-Christophe Caron Appointed Vice President, Preconstruction',
    date: 'November 14, 2025',
    category: 'Corporate Milestone',
    readTime: '3 min read',
    summary:
      'Consolidating JCB’s preconstruction capabilities, Jean-Christophe Caron will head estimation, BIM feasibility, and client value-engineering initiatives.',
    content: [
      'JCB Construction Canada is pleased to announce the appointment of Jean-Christophe Caron as Vice President, Preconstruction.',
      'Having contributed to JCB’s major commercial successes over the past decade, Caron will oversee pre-bid analysis, BIM modeling integration, and early procurement planning across Montreal and Toronto.',
      '“A successful build is won in preconstruction. Jean-Christophe brings the analytical rigor and subcontractor relationships that protect our clients’ capital from day one,” said Alexandre-Stéphane Boucher.',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Championing early project optimization and cost certainty.',
  },
  {
    id: 'employee-share-ownership',
    title: 'Empowering Our People: The Launch of JCB Employee Share Ownership Program',
    date: 'September 10, 2025',
    category: 'Company Culture',
    readTime: '4 min read',
    summary:
      'JCB launches an employee equity participation model, turning project managers, superintendents, and team members into company shareholders.',
    content: [
      'As JCB passes the milestone of 100+ team members across Quebec and Ontario, the executive leadership team has officially inaugurated an Employee Share Ownership Program.',
      'The initiative aligns long-term company governance with the passion and dedication of the professionals who deliver projects on the ground every day.',
      '“When our people have a personal stake in the company, every project is managed with unprecedented care, vigilance, and pride,” stated the board.',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    highlight: '100+ professionals building collective ownership.',
  },
  {
    id: 'podium-600-milestone',
    title: 'Structural Milestone Reached at Podium of 600 De la Gauchetière',
    date: 'June 30, 2025',
    category: 'Project Milestone',
    readTime: '3 min read',
    summary:
      'Complex post-tensioned transfer slab work completed above busy Montreal transit corridors without a single disruption to subway operations.',
    content: [
      'The engineering and site management team at JCB Construction Canada has completed the structural phase of the Podium revitalization at 600 De la Gauchetière in downtown Montreal.',
      'Working around sensitive underground transit arteries, the team successfully installed heavy glazed atriums and architectural public connections.',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Zero subway stoppages during complex urban slab openings.',
  },
];

export const JOB_LISTINGS: JobListing[] = [
  {
    id: 'sr-project-manager',
    title: 'Senior Project Manager — Major Commercial & Institutional',
    department: 'Project Management',
    location: 'Montréal (Brossard)',
    type: 'Full-time',
    experience: '8+ Years',
    description:
      'Lead large-scale construction management and turnkey projects from early preconstruction budgeting through final occupancy across Greater Montreal.',
    responsibilities: [
      'Manage multi-disciplinary teams including superintendents, project coordinators, and site engineers',
      'Oversee contractual agreements, subcontracts, and financial forecasting with open-book transparency',
      'Maintain direct, proactive communication with client executives and architectural teams',
      'Enforce strict adherence to ISO 9001 quality standards and CNESST safety regulations',
    ],
    requirements: [
      'Degree in Construction Engineering, Civil Engineering, or Architecture',
      '8+ years of Canadian general contracting experience on projects exceeding $15M',
      'Fluency in French and English (bilingual environment)',
      'Proven expertise in Construction Management contracts and schedule software (Primavera/MS Project)',
    ],
  },
  {
    id: 'site-superintendent',
    title: 'Site Superintendent — Major Projects',
    department: 'Field Operations',
    location: 'Montréal (Brossard)',
    type: 'Full-time',
    experience: '10+ Years',
    description:
      'Direct all field operations, trade contractors, safety protocols, and daily construction sequencing on marquee urban projects.',
    responsibilities: [
      'Direct daily on-site trade sequencing, material logistics, and quality assurance inspections',
      'Champion JCB’s Zero Accident safety culture and lead weekly safety toolbox briefings',
      'Anticipate constructability bottlenecks and coordinate with project managers to resolve field RFIs',
      'Maintain daily site logs, weather records, and lookahead schedules',
    ],
    requirements: [
      '10+ years on-site supervisory experience with a recognized Canadian general contractor',
      'Mastery of structural concrete, steel erection, and multi-trade interior coordination',
      'Valid ASP Construction safety certification',
      'Strong leadership, dispute resolution, and communicative skills',
    ],
  },
  {
    id: 'preconstruction-estimator',
    title: 'Senior Preconstruction Estimator',
    department: 'Estimation & Preconstruction',
    location: 'Toronto (Concord)',
    type: 'Full-time',
    experience: '6+ Years',
    description:
      'Prepare detailed quantity takeoffs, trade tenders, and conceptual cost models for commercial, industrial, and institutional bids across Ontario.',
    responsibilities: [
      'Prepare comprehensive conceptual estimates and detailed trade tenders',
      'Analyze architectural and engineering drawings to identify value-engineering opportunities',
      'Cultivate and expand JCB’s database of vetted trade subcontractors in Ontario',
      'Participate in client preconstruction alignment meetings and scope reviews',
    ],
    requirements: [
      'Degree in Construction Economics, Civil Engineering, or Quantity Surveying',
      '6+ years estimating experience in the Ontario ICI (Industrial, Commercial, Institutional) sector',
      'Proficiency in takeoff software (Planswift, OST, Procore)',
      'Deep knowledge of the Ontario construction market and current trade rates',
    ],
  },
  {
    id: 'bim-vdc-coordinator',
    title: 'BIM / VDC Coordinator',
    department: 'Digital Engineering',
    location: 'Hybrid / On-Site',
    type: 'Full-time',
    experience: '3+ Years',
    description:
      'Drive 3D/4D digital coordination, clash detection matrices, and reality capture across active projects in Quebec and Ontario.',
    responsibilities: [
      'Federate architectural, structural, and MEP Revit models for comprehensive clash analysis',
      'Facilitate bi-weekly BIM coordination meetings with trade engineers and modelers',
      'Translate BIM models into 4D construction schedule visualizations',
      'Perform on-site 3D laser scans for as-built verification against digital design',
    ],
    requirements: [
      'Diploma or degree in Architecture, BIM Management, or Architectural Technology',
      '3+ years active BIM coordination experience on commercial or institutional projects',
      'Advanced proficiency in Autodesk Revit, Navisworks Manage, and BIM 360 / ACC',
      'Strong analytical mindset and collaborative presentation capabilities',
    ],
  },
  {
    id: 'hse-coordinator',
    title: 'Health, Safety & Environment (HSE) Coordinator',
    department: 'Safety & Environment',
    location: 'Montréal (Brossard)',
    type: 'Full-time',
    experience: '4+ Years',
    description:
      'Oversee environmental compliance, job-site hazard assessments, and worker health and safety across all active JCB sites in Quebec.',
    responsibilities: [
      'Conduct regular, rigorous site safety audits and environmental compliance inspections',
      'Investigate incidents, analyze root causes, and implement preventive action plans',
      'Lead ongoing training programs for field personnel, including fall protection and WHMIS',
      'Track sustainability metrics and construction waste diversion reports',
    ],
    requirements: [
      'Certification in Occupational Health and Safety (OHS / ASP)',
      '4+ years field safety experience in Canadian commercial/industrial construction',
      'Thorough knowledge of Quebec occupational health and safety legislation',
      'Proactive, educational approach to safety leadership',
    ],
  },
];

export const CAREER_BENEFITS = [
  {
    title: 'Professional Growth & Mentorship',
    description:
      'Structured onboarding, continuous technical training, and one-on-one mentorship from seasoned construction directors.',
  },
  {
    title: 'Employee Share Ownership',
    description:
      'Opportunity for employees to become shareholders, directly participating in company growth and financial dividends.',
  },
  {
    title: 'Work-Life Balance & Flexibility',
    description:
      'Respect for personal time, flexible hours, hybrid work models where applicable, and generous annual vacation allocations.',
  },
  {
    title: 'Comprehensive Health & Wellness',
    description:
      'Top-tier group health, dental, vision, and disability insurance with an Employee & Family Assistance Program (EFAP).',
  },
  {
    title: 'Vibrant Team Culture & Socials',
    description:
      'Annual corporate retreats, summer golf outings, charity cycling events, and milestone celebration dinners.',
  },
  {
    title: 'Leading-Edge Technology',
    description:
      'Access to state-of-the-art hardware, Procore cloud project management, and cutting-edge BIM modeling software.',
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: 'Toronto Office',
    role: 'Canadian Regional Office & Operations',
    address: [
      '8888 Keele St., Unit 9',
      'Concord, Ontario',
      'L4K 2N2',
      'Canada',
    ],
    phone: '(905) 669-8151',
    email: 'toronto@jcb.ca',
    hours: 'Monday – Friday: 8:00 AM – 5:00 PM EST',
    mapCoords: { lat: 43.8182, lng: -79.4975 },
  },
];

export const DEPARTMENTS = [
  {
    name: 'Estimation & Tenders',
    desc: 'For drawing submissions, bidding packages, and preconstruction proposals.',
    email: 'estimation@jcb.ca',
    phone: '(905) 669-8151 ext. 204',
  },
  {
    name: 'Business Development',
    desc: 'For prospective clients, partnerships, and future development opportunities.',
    email: 'dev@jcb.ca',
    phone: '(905) 669-8151 ext. 201',
  },
  {
    name: 'Human Resources',
    desc: 'For career inquiries, internships, and spontaneous applications.',
    email: 'rh@jcb.ca',
    phone: '(905) 669-8151 ext. 230',
  },
  {
    name: 'Media Relations',
    desc: 'For press inquiries, editorial photography, and official communications.',
    email: 'presse@jcb.ca',
    phone: '(905) 669-8151 ext. 215',
  },
  {
    name: 'General Inquiries',
    desc: 'For administrative questions, supplier verification, and general information.',
    email: 'info@jcb.ca',
    phone: '(905) 669-8151',
  },
];
