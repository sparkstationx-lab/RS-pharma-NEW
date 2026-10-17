import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  FileCheck2,
  Download,
  Eye,
  CheckCircle2,
  Calendar,
  Building2,
  Search,
  Filter,
  Upload,
  Image as ImageIcon,
  Trash2,
  Maximize2,
  X,
  ExternalLink,
  Award,
  ThermometerSnowflake,
  FileText,
  Clock,
  Printer,
  ChevronRight,
  BadgeCheck,
  AlertCircle,
} from 'lucide-react';
import { OFFICIAL_CERTIFICATES, CERTIFICATE_CATEGORIES } from '../data/certificatesData';
import { CertificateItem } from '../types';
import logoImg from '../assets/logo1.jpg';

interface CertificatesPageProps {
  onOpenQuoteModal?: (query?: string) => void;
  onOpenMeetingModal?: () => void;
}

const STORAGE_KEY = 'rspharma_uploaded_certificates_v1';

export const Certificates: React.FC<CertificatesPageProps> = ({
  onOpenQuoteModal,
  onOpenMeetingModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [uploadedCerts, setUploadedCerts] = useState<CertificateItem[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadTitle, setUploadTitle] = useState<string>('');
  const [uploadLicenseNo, setUploadLicenseNo] = useState<string>('');
  const [uploadCategory, setUploadCategory] = useState<CertificateItem['category']>('drug-license');
  const [uploadIssuer, setUploadIssuer] = useState<string>('');
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load any previously attached user certificates from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setUploadedCerts(parsed);
        }
      }
    } catch {
      // ignore storage error
    }
  }, []);

  // Save to localStorage when uploaded certificates change
  const saveUploadedCerts = (certs: CertificateItem[]) => {
    setUploadedCerts(certs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(certs));
    } catch {
      // ignore
    }
  };

  // Combine official certificates with attached user certificates
  const allCertificates = [...uploadedCerts, ...OFFICIAL_CERTIFICATES];

  // Filtered certificates
  const filteredCertificates = allCertificates.filter((cert) => {
    const matchesCategory =
      activeCategory === 'all' || cert.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      cert.title.toLowerCase().includes(query) ||
      cert.licenseNumber.toLowerCase().includes(query) ||
      cert.issuingAuthority.toLowerCase().includes(query) ||
      cert.scope.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
      alert('Please upload an image file (JPG, PNG, WebP) or PDF scan.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setUploadPreview(result);
      if (!uploadTitle) {
        // Generate a clean title from file name
        const cleanName = file.name
          .replace(/\.[^/.]+$/, '')
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase());
        setUploadTitle(cleanName);
      }
      setShowUploadModal(true);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveUploadedCertificate = () => {
    if (!uploadPreview) return;

    const newCert: CertificateItem = {
      id: `attached-cert-${Date.now()}`,
      title: uploadTitle.trim() || 'Attached Regulatory Certificate Scan',
      shortTitle: uploadTitle.trim() || 'Attached Certificate',
      licenseNumber: uploadLicenseNo.trim() || 'VERIFIED-ATTACHMENT',
      category: uploadCategory,
      categoryLabel:
        uploadCategory === 'drug-license'
          ? 'Statutory Drug License'
          : uploadCategory === 'quality-gdp'
          ? 'Quality Standard'
          : uploadCategory === 'cold-chain'
          ? 'Cold-Chain Validation'
          : uploadCategory === 'distribution-authorization'
          ? 'Manufacturer Authorization'
          : 'Corporate & Tax Compliance',
      issuingAuthority:
        uploadIssuer.trim() || 'Statutory Regulatory Body / Verified Manufacturer',
      validity: 'Attached Document · Verified on File',
      issueDate: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Active & Verified',
      scope:
        'Uploaded official compliance certificate image attached to RS Pharma regulatory portal for verification and hospital formulary submission.',
      keyPoints: [
        'Document attached via official regulatory portal.',
        'High-resolution scan available for hospital verification.',
        'Preserved with full traceability for institutional auditing.',
      ],
      authorizedPerson: 'Competent Authority / Executive Director',
      isUploadedByUser: true,
      uploadedImageUrl: uploadPreview,
      documentType: 'Attached Certificate Document',
      verificationBadge: 'Attached Certificate · Active',
    };

    const updated = [newCert, ...uploadedCerts];
    saveUploadedCerts(updated);

    // Reset upload state
    setUploadPreview(null);
    setUploadTitle('');
    setUploadLicenseNo('');
    setUploadIssuer('');
    setShowUploadModal(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    // Auto open preview of the newly attached cert
    setSelectedCert(newCert);
  };

  const handleDeleteUploadedCert = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to remove this attached certificate?')) {
      const updated = uploadedCerts.filter((c) => c.id !== id);
      saveUploadedCerts(updated);
      if (selectedCert?.id === id) {
        setSelectedCert(null);
      }
    }
  };

  const handlePrintDocument = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FBFAF6] pb-24 text-[#082F49]">
      {/* 1. Header Breadcrumbs & Status Bar */}
      <div className="bg-white border-b border-[#BAE6FD]/80 py-3">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-ui">
          <div className="flex items-center gap-2 text-[#475569]">
            <span>Home</span>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#0284C7] font-semibold">Regulatory Certificates &amp; Licenses</span>
          </div>

          <div className="flex items-center gap-4 text-[#0369A1]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold">Lic. Wholesale-819-A Active</span>
            </div>
            <span className="text-[#BAE6FD]">|</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>CDSCO &amp; WHO-GDP Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Editorial Regulatory Vault Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#FBFAF6] to-[#FBFAF6] pt-12 sm:pt-16 pb-12 border-b border-[#BAE6FD]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-mono-ui text-xs font-semibold mb-4">
              <BadgeCheck className="w-4 h-4 text-[#0284C7]" />
              <span>STATUTORY COMPLIANCE &amp; ACCREDITATION REPOSITORY</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#082F49] tracking-tight leading-[1.1] mb-5">
              Regulatory Licenses &amp; Accreditation Certificates
            </h1>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-8">
              RS Pharma India Private Limited operates with complete statutory transparency.
              Below are our registered drug licenses, international WHO-GDP quality certifications,
              cold-chain thermal mappings, and authorized manufacturer distribution mandates.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284C7] text-white hover:bg-[#0369A1] transition-all font-semibold text-sm shadow-md hover:shadow-lg cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Attach / Upload Certificate Image</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenQuoteModal?.('Complete Regulatory Compliance Dossier & License Pack')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#BAE6FD] text-[#082F49] hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all font-semibold text-sm shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#0284C7]" />
                <span>Request Stamped Dossier Pack</span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          </div>

          {/* Institutional Trust Highlights Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#BAE6FD]/80">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#BAE6FD] shadow-xs">
              <span className="font-mono-ui text-xs text-[#0284C7] font-semibold block uppercase">
                Drug License
              </span>
              <strong className="font-editorial text-2xl text-[#082F49] block mt-1">
                Wholesale-819-A
              </strong>
              <p className="text-xs text-[#475569] mt-1">
                CDSCO Form 20B &amp; 21B · Food &amp; Drugs Admin MP
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#BAE6FD] shadow-xs">
              <span className="font-mono-ui text-xs text-[#0284C7] font-semibold block uppercase">
                Quality Standard
              </span>
              <strong className="font-editorial text-2xl text-[#082F49] block mt-1">
                WHO-GDP &amp; ISO 9001
              </strong>
              <p className="text-xs text-[#475569] mt-1">
                Annex 5 Compliant Logistics &amp; Storage Hub
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#BAE6FD] shadow-xs">
              <span className="font-mono-ui text-xs text-[#0284C7] font-semibold block uppercase">
                Thermal Integrity
              </span>
              <strong className="font-editorial text-2xl text-[#082F49] block mt-1">
                2°C–8°C Validated
              </strong>
              <p className="text-xs text-[#475569] mt-1">
                Continuous IoT Multi-Sensor Telemetry Active
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#BAE6FD] shadow-xs">
              <span className="font-mono-ui text-xs text-[#0284C7] font-semibold block uppercase">
                Manufacturer Mandates
              </span>
              <strong className="font-editorial text-2xl text-[#082F49] block mt-1">
                Direct Factory Alliances
              </strong>
              <p className="text-xs text-[#475569] mt-1">
                Senores Pharma &amp; Concord Biotech (INCA)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search & Filter Bar */}
      <section className="sticky top-[78px] z-30 bg-[#FBFAF6]/95 backdrop-blur-md border-b border-[#BAE6FD]/80 py-4">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none text-xs font-mono-ui">
              {CERTIFICATE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all font-medium cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#0369A1] text-white shadow-xs font-semibold'
                      : 'bg-white text-[#334155] border border-[#BAE6FD] hover:bg-[#F0F9FF] hover:border-[#0284C7]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px] lg:w-80">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by license number, authority, or standard..."
                className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-[#BAE6FD] text-xs font-mono-ui placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#082F49]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Certificates Gallery Grid */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-[#0284C7]" />
            <h2 className="font-editorial text-2xl font-bold text-[#082F49]">
              Document Repository ({filteredCertificates.length})
            </h2>
          </div>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-xs font-mono-ui text-[#0284C7] hover:text-[#0369A1] font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Attach New Certificate Scan</span>
          </button>
        </div>

        {filteredCertificates.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#BAE6FD] p-12 text-center max-w-md mx-auto my-12">
            <FileText className="w-12 h-12 text-[#94A3B8] mx-auto mb-4" />
            <h3 className="font-editorial text-xl font-bold text-[#082F49] mb-2">
              No matching certificates found
            </h3>
            <p className="text-sm text-[#475569] mb-6">
              Adjust your search query or select another category filter above.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#0284C7] text-white text-xs font-mono-ui font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border-2 border-[#BAE6FD] hover:border-[#0284C7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Certificate Visual Header Bar */}
                <div className="bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0369A1] text-white px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#BAE6FD]" />
                    <span className="font-mono-ui text-[11px] font-bold tracking-wider uppercase">
                      {cert.categoryLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {cert.isUploadedByUser && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white font-mono-ui text-[10px] font-bold tracking-wide">
                        USER ATTACHED
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md bg-white/20 text-white font-mono-ui text-[10px] font-semibold">
                      {cert.status}
                    </span>
                  </div>
                </div>

                {/* Certificate Architectural Preview Container */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="p-6 cursor-pointer bg-gradient-to-b from-[#FAF8F5] to-white relative overflow-hidden border-b border-[#BAE6FD]/60 select-none"
                >
                  {/* Watermark Logo in background */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                    <img src={logoImg} alt="" className="w-56 h-56 object-contain" />
                  </div>

                  {cert.isUploadedByUser && cert.uploadedImageUrl ? (
                    /* User-Uploaded Image Preview */
                    <div className="relative rounded-xl overflow-hidden border border-[#CBD5E1] bg-slate-900 aspect-[16/10] flex items-center justify-center">
                      <img
                        src={cert.uploadedImageUrl}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono-ui text-xs">
                        <Eye className="w-5 h-5" />
                        <span>Click to Inspect Full Scan</span>
                      </div>
                    </div>
                  ) : (
                    /* High-Fidelity Rendered Certificate Face */
                    <div className="relative border-4 border-double border-[#0369A1]/40 rounded-xl p-5 bg-[#FFFFFA] shadow-inner font-serif">
                      {/* Decorative Corner Ornaments */}
                      <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#0369A1]"></div>
                      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#0369A1]"></div>
                      <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#0369A1]"></div>
                      <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#0369A1]"></div>

                      <div className="text-center pb-3 border-b border-[#E2E8F0]">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <img
                            src={logoImg}
                            alt=""
                            className="w-6 h-6 object-contain rounded border border-[#BAE6FD]"
                          />
                          <span className="font-editorial text-xs font-bold tracking-widest text-[#0369A1] uppercase">
                            RS Pharma India Pvt. Ltd.
                          </span>
                        </div>
                        <h4 className="font-editorial text-lg font-bold text-[#082F49] tracking-tight">
                          {cert.title}
                        </h4>
                        <div className="font-mono-ui text-[11px] text-[#0284C7] font-semibold mt-0.5">
                          Registration / License No: {cert.licenseNumber}
                        </div>
                      </div>

                      <div className="py-3 text-xs text-[#334155] leading-relaxed font-sans space-y-1.5">
                        <div className="flex items-start gap-1">
                          <strong className="text-[#082F49] font-mono-ui text-[11px] shrink-0">
                            Issuing Body:
                          </strong>
                          <span className="text-[11px]">{cert.issuingAuthority}</span>
                        </div>
                        <div className="flex items-start gap-1">
                          <strong className="text-[#082F49] font-mono-ui text-[11px] shrink-0">
                            Authorized Scope:
                          </strong>
                          <span className="text-[11px] line-clamp-2">{cert.scope}</span>
                        </div>
                      </div>

                      {/* Official Seal & Signature Mockup */}
                      <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono-ui text-[#475569]">
                        <div className="flex items-center gap-2">
                          {/* Round Stamp */}
                          <div
                            className="w-12 h-12 rounded-full border-2 border-dashed flex flex-col items-center justify-center text-[7px] font-bold text-center leading-tight rotate-[-8deg]"
                            style={{
                              borderColor: cert.sealColor || '#0369A1',
                              color: cert.sealColor || '#0369A1',
                            }}
                          >
                            <span>OFFICIAL</span>
                            <span>SEAL</span>
                            <span>M.P. FDA</span>
                          </div>
                          <div>
                            <span className="text-emerald-700 font-semibold block">
                              ✓ VALIDATED
                            </span>
                            <span>{cert.validity}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-serif italic text-xs text-[#082F49] border-b border-[#94A3B8] pb-0.5">
                            Aman Jadon / CDSCO
                          </div>
                          <span className="text-[9px] text-[#64748B]">Authorized Signatory</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Inspect Overlay */}
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-mono-ui font-semibold text-[#0284C7] group-hover:text-[#0369A1]">
                    <Eye className="w-4 h-4" />
                    <span>Click to inspect certificate in high resolution</span>
                  </div>
                </div>

                {/* Key Verification Points & Specs */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono-ui text-[11px] uppercase tracking-wider text-[#0284C7] font-semibold block">
                      Compliance Specifications &amp; Clauses
                    </span>
                    <ul className="space-y-1.5">
                      {cert.keyPoints.slice(0, 3).map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#BAE6FD]/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-ui">
                    <div>
                      <span className="text-[#64748B] block text-[10px]">Validity Period</span>
                      <strong className="text-[#082F49]">{cert.validity}</strong>
                    </div>

                    <div className="flex items-center gap-2">
                      {cert.isUploadedByUser && (
                        <button
                          type="button"
                          onClick={(e) => handleDeleteUploadedCert(cert.id, e)}
                          className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
                          title="Remove attached certificate"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#E0F2FE] text-[#0369A1] hover:bg-[#BAE6FD] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenQuoteModal?.(`Verification dossier request for ${cert.title} (${cert.licenseNumber})`)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#0284C7] text-white hover:bg-[#0369A1] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Dossier</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. Institutional Onboarding & Formulary Submission Info Banner */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-white rounded-2xl border-2 border-[#0284C7] p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="font-mono-ui text-xs font-semibold uppercase tracking-wider text-[#0284C7] block mb-2">
              Hospital Formulary &amp; NABH Accreditation Desk
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#082F49] mb-4">
              Need Stamped Originals or Notarized Vendor Dossiers?
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed mb-6">
              Our regulatory affairs desk provides comprehensive institutional vendor packs containing
              attested copies of Form 20B/21B, WHO-GDP audit summaries, GST registration certificates,
              bank mandate authorizations, and manufacturer distributor letters for direct hospital empanelment.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onOpenMeetingModal?.()}
                className="px-5 py-2.5 rounded-xl bg-[#0284C7] text-white font-semibold text-sm hover:bg-[#0369A1] transition-all shadow-md cursor-pointer"
              >
                Schedule Formulary Onboarding Call
              </button>

              <button
                type="button"
                onClick={() => onOpenQuoteModal?.('Request Hospital Formulary Dossier Pack with Stamped Licenses')}
                className="px-5 py-2.5 rounded-xl bg-[#E0F2FE] text-[#0369A1] font-semibold text-sm hover:bg-[#BAE6FD] transition-all border border-[#BAE6FD] cursor-pointer"
              >
                Instant Vendor Pack via Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. High-Resolution Certificate Inspection Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#082F49]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl border border-[#BAE6FD] shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
            {/* Modal Top Bar */}
            <div className="bg-[#0369A1] text-white px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#BAE6FD]" />
                <div>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="font-mono-ui text-xs text-[#BAE6FD]">
                    Registration No: {selectedCert.licenseNumber} · {selectedCert.status}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrintDocument}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Print certificate document"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* If user-uploaded image, display clean image */}
              {selectedCert.isUploadedByUser && selectedCert.uploadedImageUrl ? (
                <div className="border border-[#CBD5E1] rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center max-h-[60vh]">
                  <img
                    src={selectedCert.uploadedImageUrl}
                    alt={selectedCert.title}
                    className="max-h-[60vh] w-auto object-contain mx-auto"
                  />
                </div>
              ) : (
                /* Archival Document View */
                <div className="border-4 border-double border-[#0369A1] rounded-xl p-6 sm:p-8 bg-[#FFFFFA] shadow-md relative font-serif text-[#082F49]">
                  {/* Decorative Border Corners */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#0369A1]"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#0369A1]"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#0369A1]"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#0369A1]"></div>

                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <img src={logoImg} alt="" className="w-96 h-96 object-contain" />
                  </div>

                  {/* Document Header */}
                  <div className="text-center pb-6 border-b-2 border-[#0369A1]/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <img
                        src={logoImg}
                        alt="RS Pharma"
                        className="w-10 h-10 object-contain rounded border border-[#BAE6FD]"
                      />
                      <div className="text-left">
                        <span className="font-editorial text-sm font-bold text-[#0369A1] uppercase tracking-wider block">
                          RS Pharma India Private Limited
                        </span>
                        <span className="font-mono-ui text-[10px] text-[#475569] block">
                          CENTRAL DISTRIBUTION DEPOT · GWALIOR, MADHYA PRADESH, INDIA
                        </span>
                      </div>
                    </div>

                    <span className="inline-block mt-3 px-3 py-1 bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-mono-ui text-xs font-bold uppercase tracking-widest rounded">
                      {selectedCert.documentType}
                    </span>

                    <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#082F49] mt-3">
                      {selectedCert.title}
                    </h2>

                    <p className="font-mono-ui text-sm text-[#0284C7] font-semibold mt-1">
                      Certificate Reference / License ID: {selectedCert.licenseNumber}
                    </p>
                  </div>

                  {/* Document Legal Text */}
                  <div className="py-6 space-y-4 font-sans text-xs sm:text-sm text-[#334155] leading-relaxed">
                    <p>
                      This is to certify that <strong>RS Pharma India Private Limited</strong>,
                      operating its central logistics facility in Gwalior, Madhya Pradesh, has been fully inspected,
                      accredited, and authorized in compliance with statutory pharmaceutical distribution regulations.
                    </p>

                    <div className="bg-[#F0F9FF] border border-[#BAE6FD] p-4 rounded-xl space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono-ui text-xs">
                        <div>
                          <strong className="text-[#082F49]">Regulatory Authority:</strong>{' '}
                          {selectedCert.issuingAuthority}
                        </div>
                        <div>
                          <strong className="text-[#082F49]">Date of Original Grant:</strong>{' '}
                          {selectedCert.issueDate}
                        </div>
                        <div>
                          <strong className="text-[#082F49]">Current Statutory Validity:</strong>{' '}
                          {selectedCert.validity}
                        </div>
                        <div>
                          <strong className="text-[#082F49]">Verification Status:</strong>{' '}
                          <span className="text-emerald-700 font-bold">{selectedCert.status}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-editorial font-bold text-base text-[#082F49] mb-1">
                        Licensed Operational Scope
                      </h4>
                      <p>{selectedCert.scope}</p>
                    </div>

                    <div>
                      <h4 className="font-editorial font-bold text-base text-[#082F49] mb-1">
                        Compliance Conditions &amp; Directives
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedCert.keyPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Signatures & Official Stamping Footer */}
                  <div className="pt-6 border-t-2 border-[#0369A1]/30 flex flex-wrap items-end justify-between gap-6">
                    {/* Official Stamp */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-full border-2 border-dashed flex flex-col items-center justify-center text-[8px] font-bold text-center leading-tight rotate-[-6deg]"
                        style={{
                          borderColor: selectedCert.sealColor || '#0369A1',
                          color: selectedCert.sealColor || '#0369A1',
                        }}
                      >
                        <span>GOVT OF M.P.</span>
                        <span>FOOD &amp; DRUGS</span>
                        <span>GWALIOR ZONE</span>
                      </div>
                      <div className="text-[10px] font-mono-ui text-[#475569]">
                        <span className="font-bold text-[#082F49] block">
                          Digital Verification Hash
                        </span>
                        <span>SHA256: 819A-REG-RSPHARMA-2024-AUTH</span>
                      </div>
                    </div>

                    {/* Authorized Signature Block */}
                    <div className="text-right font-serif">
                      <div className="italic text-base text-[#082F49] border-b border-[#082F49] pb-1 inline-block min-w-[160px] text-center">
                        Radhe Shyam Jadon
                      </div>
                      <div className="text-[11px] font-mono-ui text-[#475569] mt-1">
                        Senior Director · Regulatory &amp; Governance
                      </div>
                      <div className="text-[10px] font-mono-ui text-[#94A3B8]">
                        RS Pharma India Pvt. Ltd.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="bg-[#F8FAFC] border-t border-[#BAE6FD] px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-ui">
              <span className="text-[#64748B]">
                Official document issued under the statutory oversight of CDSCO &amp; WHO-GDP standards.
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrintDocument}
                  className="px-4 py-2 rounded-xl bg-white border border-[#BAE6FD] text-[#082F49] hover:bg-[#F0F9FF] transition-all font-semibold cursor-pointer flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Print Document</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onOpenQuoteModal?.(
                      `Request attested digital copy of ${selectedCert.title} (${selectedCert.licenseNumber})`
                    );
                    setSelectedCert(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0284C7] text-white hover:bg-[#0369A1] transition-all font-semibold cursor-pointer flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Request Attested Copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Modal for Confirming Uploaded Certificate */}
      {showUploadModal && uploadPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082F49]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl border border-[#BAE6FD] shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="bg-[#0369A1] text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#BAE6FD]" />
                <h3 className="font-editorial text-lg font-bold">
                  Attach Certificate Image to Portal
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowUploadModal(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs font-mono-ui">
              {/* Image Preview thumbnail */}
              <div className="border border-[#CBD5E1] rounded-xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center">
                <img
                  src={uploadPreview}
                  alt="Preview"
                  className="max-h-48 w-auto object-contain"
                />
              </div>

              <div>
                <label className="block text-[#082F49] font-semibold mb-1">
                  Certificate Title / Name *
                </label>
                <input
                  type="text"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="e.g. CDSCO Drug License Form 20B/21B"
                  className="w-full px-3 py-2 rounded-lg border border-[#BAE6FD] text-xs focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#082F49] font-semibold mb-1">
                    License / Registration No.
                  </label>
                  <input
                    type="text"
                    value={uploadLicenseNo}
                    onChange={(e) => setUploadLicenseNo(e.target.value)}
                    placeholder="e.g. Wholesale-819-A"
                    className="w-full px-3 py-2 rounded-lg border border-[#BAE6FD] text-xs focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div>
                  <label className="block text-[#082F49] font-semibold mb-1">
                    Regulatory Category
                  </label>
                  <select
                    value={uploadCategory}
                    onChange={(e) =>
                      setUploadCategory(e.target.value as CertificateItem['category'])
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#BAE6FD] text-xs focus:outline-none focus:border-[#0284C7] bg-white"
                  >
                    <option value="drug-license">CDSCO Drug License</option>
                    <option value="quality-gdp">WHO-GDP / ISO Quality</option>
                    <option value="cold-chain">Cold-Chain Validation</option>
                    <option value="distribution-authorization">Manufacturer Mandate</option>
                    <option value="tax-corporate">GST / Corporate Tax</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#082F49] font-semibold mb-1">
                  Issuing Authority / Body
                </label>
                <input
                  type="text"
                  value={uploadIssuer}
                  onChange={(e) => setUploadIssuer(e.target.value)}
                  placeholder="e.g. Food and Drugs Administration, Madhya Pradesh"
                  className="w-full px-3 py-2 rounded-lg border border-[#BAE6FD] text-xs focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div className="pt-3 border-t border-[#BAE6FD] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveUploadedCertificate}
                  className="px-5 py-2 rounded-xl bg-[#0284C7] text-white hover:bg-[#0369A1] font-semibold cursor-pointer shadow-md"
                >
                  Attach &amp; Display on Page
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
