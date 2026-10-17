import {
  NavItem,
  StatItem,
  ProductItem,
  ServiceItem,
  MarketItem,
  ShipmentPattern,
  InsightArticle,
  LeadershipProfile,
  StructureStep,
} from '../types';
import { PHARMA_PRODUCTS } from './productData';
export {
  MANUFACTURER_DIVISIONS,
  THERAPEUTIC_CATEGORIES,
  DOSAGE_FORMS,
  PHARMA_PRODUCTS,
  enrichProduct,
  getProductById,
  getRelatedProducts,
} from './productData';

export const COMPANY_INFO = {
  name: 'Jadon Pharmaceuticals India Private Limited',
  shortName: 'Jadon Pharmaceuticals',
  licenseNo: 'Wholesale-819-A',
  regulator: 'CDSCO-Authorized Wholesale Operations',
  location: 'Gwalior, Madhya Pradesh, India',
  coldChain: '2°C–8°C Active Temperature Monitoring',
  partners: ['Senores Pharmaceuticals', 'Concord Biotech (INCA)'],
  email: 'inquiry@jadonpharma.com',
  phone: '+91 (0) 751-000-0000',
  hours: 'Mon–Sat · 09:30–18:30 IST · Dedicated Institutional Desk',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Services', href: '/services' },
  { label: 'Markets', href: '/markets' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Meeting', href: '/book-a-meeting', isCta: true },
];

export const TRUST_BAR_ITEMS = [
  'Wholesale License: Wholesale-819-A',
  'CDSCO-Authorized Wholesale Distribution',
  'WHO-GDP Compliant Hub · Gwalior (M.P.)',
  '2°C–8°C Active Cold-Chain Monitored',
  'Distribution Partner: Senores Pharma & Concord Biotech (INCA)',
  'PAN-India Institutional Supply',
];

export const HERO_STATS: StatItem[] = [
  { value: 'Wholesale-819-A', label: 'CDSCO Wholesale Drug License' },
  { value: '2°C–8°C', label: 'Active Cold-Chain Monitoring' },
  { value: 'PAN-India', label: 'Hospitals, Clinics & Pharmacies' },
  { value: '100% Traceable', label: 'Batch CoAs & GST Invoiced' },
];

export const TRUST_BADGES = [
  'Wholesale License Wholesale-819-A',
  'CDSCO Regulated Distribution',
  'WHO-GDP Compliant Gwalior Depot',
  '2°C–8°C Active Telemetry Monitored',
  'Authorized: Senores & Concord Biotech',
  'Drug License + GST Verified Buyers',
];

export const LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    name: 'Aman Jadon',
    role: 'Executive Director · Strategic Direction & Alliances',
    focus: [
      'Strategic direction and overall corporate growth',
      'Institutional pharmaceutical supply networks',
      'Manufacturer and healthcare-provider partnerships',
      'Logistics modernization and regulatory standards',
    ],
    bio: 'Steering long-term strategic direction and institutional alliances for Jadon Pharmaceuticals, cultivating key distribution relationships with premier manufacturers and modernizing logistics infrastructure across Indian healthcare networks.',
  },
  {
    name: 'Achal Jadon',
    role: 'Director of Operations & Supply Chain Logistics',
    focus: [
      'Daily operations and supply chain logistics',
      'Hospital, institutional, and pharmacy distribution',
      'Cold-chain integrity (2°C–8°C) & WHO-GDP compliance',
      'Gwalior warehouse workflows and tech integration',
    ],
    bio: 'Directing operational workflows at our central Gwalior distribution hub, ensuring stringent 2°C–8°C cold-chain integrity, end-to-end batch traceability, inventory precision, and seamless multi-destination dispatch.',
  },
  {
    name: 'Radhe Shyam Jadon',
    role: 'Senior Director · Governance & Regulatory Affairs',
    focus: [
      'Corporate governance and institutional experience',
      'Statutory compliance and pharmaceutical business ethics',
      'Comprehensive quality assurance frameworks',
      'Long-term organizational guidance & stewardship',
    ],
    bio: 'Providing foundational institutional guidance and compliance oversight, ensuring Jadon Pharmaceuticals operates with uncompromising regulatory fidelity, strict ethical standards, and high-trust institutional governance.',
  },
];

export const STRUCTURE_STEPS: StructureStep[] = [
  {
    step: '01',
    title: 'WHO-GMP Manufacturers',
    subtitle: 'Authorized Direct Sourcing',
    details:
      'Direct distribution alliances with leading pharmaceutical manufacturers including Senores Pharmaceuticals and Concord Biotech (INCA), securing authentic hospital-grade formulations.',
  },
  {
    step: '02',
    title: 'Jadon Pharmaceuticals Hub',
    subtitle: 'Gwalior (M.P.) Central Depot',
    details:
      'Centralized wholesale facility operating under strict WHO-GDP compliance and Drug License Wholesale-819-A, featuring regulated quarantine, batch sorting, and quality controls.',
  },
  {
    step: '03',
    title: 'Active Cold-Chain & Storage',
    subtitle: '2°C–8°C Monitored Logistics',
    details:
      'Active telemetry refrigeration and temperature-validated packaging ensuring unbroken cold-chain transit for plasma derivatives, critical care injectables, and biologicals.',
  },
  {
    step: '04',
    title: 'PAN-India Clinical Handover',
    subtitle: 'Hospitals, Clinics & Pharmacies',
    details:
      'Verified delivery to licensed institutional buyers with complete batch traceability, manufacturer Certificate of Analysis (CoA), and GST tax invoices.',
  },
];

export const PRODUCT_LIST: ProductItem[] = PHARMA_PRODUCTS;

export const MARQUEE_CATEGORIES = [
  'Critical Care Formulations',
  'Plasma & Albumin Derivatives',
  'Hospital-Grade Therapeutics',
  'Senores Pharmaceuticals Lines',
  'Concord Biotech (INCA) Specialty',
  'WHO-GDP Compliant Cold-Chain',
  '2°C–8°C Monitored Logistics',
  'Government & Military Procurement',
  'Tertiary Hospital Supply',
  'Super-Specialty Clinics',
  'Retail & Hospital Pharmacies',
  'Batch Traceability & CoA',
  'Wholesale License Wholesale-819-A',
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'serv-01',
    icon: '❄',
    title: 'Active Cold-Chain Storage & Transit',
    description:
      'WHO-GDP certified 2°C–8°C refrigerated warehousing in Gwalior (M.P.) with real-time IoT temperature data logging and calibrated insulated transit packouts.',
    linkText: 'Cold-Chain Protocol',
  },
  {
    id: 'serv-02',
    icon: 'Rx',
    title: 'Hospital & Institutional Distribution',
    description:
      'Direct scheduled supply to tertiary hospital departments, critical-care units, and pharmacy networks with genuine manufacturer CoAs and tax invoices.',
    linkText: 'Institutional Framework',
  },
  {
    id: 'serv-03',
    icon: '⚕',
    title: 'Government & Military Procurement',
    description:
      'Empaneled wholesale capacity for state healthcare departments, defense medical procurement, armed forces hospitals, and institutional healthcare tenders.',
    linkText: 'Tender Capabilities',
  },
  {
    id: 'serv-04',
    icon: '◈',
    title: 'Batch Traceability & Quality Assurance',
    description:
      'End-to-end chain of custody with CDSCO compliance under License Wholesale-819-A, verifying genuine batch sourcing from WHO-GMP certified facilities.',
    linkText: 'Compliance Dossier',
  },
];

export const TOP_MARKETS: MarketItem[] = [
  { id: 'm-01', name: 'Tertiary Hospitals', regulator: 'ICU & Specialty Inpatient', flagCode: 'TH' },
  { id: 'm-02', name: 'Military Healthcare', regulator: 'Defense Medical Services', flagCode: 'MH' },
  { id: 'm-03', name: 'Government Tenders', regulator: 'State Health Procurement', flagCode: 'GT' },
  { id: 'm-04', name: 'Private Clinics', regulator: 'Super-Specialty Centers', flagCode: 'PC' },
  { id: 'm-05', name: 'Hospital Pharmacies', regulator: 'Licensed In-House Desks', flagCode: 'HP' },
  { id: 'm-06', name: 'Retail Pharmacies', regulator: 'PAN-India Licensed Stores', flagCode: 'RP' },
  { id: 'm-07', name: 'Institutional Groups', regulator: 'Corporate Hospital Chains', flagCode: 'IG' },
  { id: 'm-08', name: 'Clinical Centers', regulator: 'Regulated Specialty Units', flagCode: 'CC' },
  { id: 'm-09', name: 'Regional Depots', regulator: 'WHO-GDP Transit Hubs', flagCode: 'RD' },
];

export const SHIPMENT_PATTERNS: ShipmentPattern[] = [
  {
    id: 'ship-01',
    route: 'GWALIOR CENTRAL DEPOT → TERTIARY HOSPITAL NETWORK',
    title: 'Critical Care Cold-Chain Corridor (2°C–8°C).',
    description:
      'Consignment of plasma derivatives and critical-care infusions dispatched with active IoT temperature sensors, recording zero excursion throughout transit.',
    entity: 'Leading Regional Tertiary Hospital Desk',
    meta: 'Wholesale-819-A Release · Calibrated Cold-Pack · Verified CoA',
  },
  {
    id: 'ship-02',
    route: 'MANUFACTURER PARTNER → JADON PHARMACEUTICALS WAREHOUSE',
    title: 'Senores & Concord Biotech (INCA) Specialty Sourcing.',
    description:
      'Direct authorized manufacturer intake received at Gwalior facility, quarantined, quality audited, and indexed into batch-traceable distribution inventory.',
    entity: 'Authorized Manufacturer Distribution Line',
    meta: 'Direct Manufacturer Invoiced · WHO-GDP Verified · Full Traceability',
  },
  {
    id: 'ship-03',
    route: 'CENTRAL WAREHOUSE → GOVERNMENT & MILITARY MEDICAL STORES',
    title: 'Institutional Healthcare Framework Supply.',
    description:
      'High-volume consignment fulfilled against institutional healthcare tender specifications, complete with batch-testing certificates, GST invoices, and port handover.',
    entity: 'Defense & State Healthcare Procurement Board',
    meta: 'Government Tender Batch · Legalized CoAs · Signed Delivery',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'ins-01',
    tag: 'REGULATORY COMPLIANCE · CDSCO STANDARDS',
    title: 'Wholesale Drug License Wholesale-819-A Governance',
    summary:
      'How Jadon Pharmaceuticals enforces statutory compliance, proper storage condition maintenance, and authorized B2B wholesale distribution across India.',
  },
  {
    id: 'ins-02',
    tag: 'COLD-CHAIN INTEGRITY · WHO-GDP PROTOCOL',
    title: '2°C–8°C Active Telemetry in Pharmaceutical Logistics',
    summary:
      'A deep dive into Gwalior warehouse cold-room calibration, temperature data logging, and active packout strategies for biologicals and plasma products.',
  },
  {
    id: 'ins-03',
    tag: 'INSTITUTIONAL BUYER ONBOARDING',
    title: 'Drug License & GST Compliance Requirements for Purchasers',
    summary:
      'Mandatory documentation protocols ensuring all supplies are delivered strictly to verified, licensed hospitals, clinics, and pharmacies.',
  },
];
