export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ClinicalGuidelineItem {
  title: string;
  detail: string;
  badge?: string;
}

export interface PharmacologicalProfile {
  mechanismOfAction: string;
  pharmacodynamics?: string;
  pharmacokinetics?: {
    halfLife?: string;
    proteinBinding?: string;
    metabolism?: string;
    elimination?: string;
  };
  targetSpectrumOrReceptors?: string[];
}

export interface ProductItem {
  id: string;
  category: string;
  name: string;
  description: string;
  image?: string;
  code: string;
  strength?: string;
  packaging?: string;
  mrp?: number | string;
  price?: number | string;
  mfg?: string;
  division?: string;
  gstPct?: string;
  hsnCode?: string;
  countryOfOrigin?: string;
  dosageForm?: string;
  indications?: string[];
  therapeuticClass?: string[];
  routeOfAdministration?: string;
  storageConditions?: string;
  regulatorySchedule?: string;
  clinicalHighlights?: string[];
  targetDepartments?: string[];
  pharmacology?: PharmacologicalProfile;
  dosingGuidelines?: ClinicalGuidelineItem[];
  renalHepaticAdjustment?: string;
  monitoringParameters?: string[];
  contraindications?: string[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
}

export interface MarketItem {
  id: string;
  name: string;
  regulator: string;
  flagCode: string;
}

export interface ShipmentPattern {
  id: string;
  route: string;
  title: string;
  description: string;
  entity: string;
  meta: string;
}

export interface InsightArticle {
  id: string;
  tag: string;
  title: string;
  summary: string;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  focus: string[];
  bio: string;
}

export interface StructureStep {
  step: string;
  title: string;
  subtitle: string;
  details: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  shortTitle: string;
  licenseNumber: string;
  category: 'drug-license' | 'quality-gdp' | 'cold-chain' | 'distribution-authorization' | 'tax-corporate';
  categoryLabel: string;
  issuingAuthority: string;
  validity: string;
  issueDate: string;
  status: 'Active & Verified' | 'Statutory Valid' | 'Renewed';
  scope: string;
  keyPoints: string[];
  authorizedPerson: string;
  sealColor?: string;
  isUploadedByUser?: boolean;
  uploadedImageUrl?: string;
  documentType: string;
  verificationBadge: string;
}

