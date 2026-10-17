import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/productData';
import {
  ShieldCheck,
  ThermometerSnowflake,
  FileCheck2,
  Package,
  Building2,
  Tag,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Activity,
  Layers,
  Clock,
  Sparkles,
  AlertCircle,
  FileText,
  BadgeCheck,
  Stethoscope,
  Pill,
  Microscope,
  AlertTriangle,
  HeartPulse,
  Share2,
  Check,
} from 'lucide-react';

interface ProductDetailProps {
  onOpenQuoteModal?: (productName?: string) => void;
  onOpenMeetingModal?: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  onOpenQuoteModal,
  onOpenMeetingModal,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);

  const product = useMemo(() => {
    return id ? getProductById(id) : undefined;
  }, [id]);

  const relatedProducts = useMemo(() => {
    return product ? getRelatedProducts(product.id, 4) : [];
  }, [product]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} · Specifications, Pharmacology & Clinical Guidelines · Jadon Pharmaceuticals`;
    } else {
      document.title = 'Product Not Found · Jadon Pharmaceuticals';
    }
    window.scrollTo(0, 0);
  }, [product]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  if (!product) {
    return (
      <div className="flex-1 bg-[#FBFAF6] py-20 px-4">
        <div className="max-w-md mx-auto bg-white border border-[#BAE6FD] rounded-2xl p-8 text-center shadow-sm">
          <AlertCircle className="w-12 h-12 text-[#0284C7] mx-auto mb-4" />
          <h1 className="font-editorial text-2xl font-bold text-[#082F49] mb-2">
            Formulation Not Found
          </h1>
          <p className="text-sm text-[#475569] mb-6 leading-relaxed">
            The requested product identifier does not match any current formulation in our registered catalog.
          </p>
          <div className="flex flex-col gap-2">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#0284C7] text-white font-mono-ui text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#0369A1] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Browse All Formulations</span>
            </Link>
            <Link
              to="/"
              className="text-xs font-mono-ui text-[#0284C7] hover:underline py-1"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isColdChain =
    product.storageConditions?.toLowerCase().includes('2°c') ||
    product.category.toLowerCase().includes('plasma') ||
    product.category.toLowerCase().includes('antifungal');

  return (
    <div className="flex-1 bg-[#FBFAF6] text-[#082F49]">
      {/* 1. Breadcrumb & Status Header */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-[#FBFAF6] border-b border-[#BAE6FD]/60 pt-6 pb-8">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-ui text-[#475569]">
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-[#0284C7] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#0284C7]" />
              <Link to="/products" className="hover:text-[#0284C7] transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="text-[#0369A1] font-semibold truncate max-w-xs sm:max-w-md" aria-current="page">
                {product.name}
              </span>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#BAE6FD] text-[#0369A1] hover:bg-[#F0F9FF] transition-colors text-[11px] font-mono-ui cursor-pointer shadow-2xs"
              title="Copy share link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied' : 'Share Spec'}</span>
            </button>
          </nav>

          {/* Quick Badges Strip */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-mono-ui text-xs font-semibold">
              <Tag className="w-3.5 h-3.5 text-[#0284C7]" />
              {product.category}
            </span>

            {product.division && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#BAE6FD] text-[#082F49] font-mono-ui text-xs font-semibold shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#0284C7]" />
                {product.division}
              </span>
            )}

            {product.regulatorySchedule && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-mono-ui text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                {product.regulatorySchedule}
              </span>
            )}

            {isColdChain && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-900 font-mono-ui text-xs font-semibold">
                <ThermometerSnowflake className="w-3.5 h-3.5 text-[#0284C7] animate-pulse" />
                Active 2°C–8°C Cold-Chain Lane
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Product Specification Hero Section */}
      <section className="py-10 sm:py-14 border-b border-[#BAE6FD]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Product Image & Compliance Badges */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#BAE6FD] rounded-2xl overflow-hidden shadow-sm p-4 relative group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F0F9FF] relative border border-[#BAE6FD]/60">
                  <img
                    src={product.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono-ui text-[11px]">
                    <span className="bg-[#082F49]/80 backdrop-blur-xs px-2.5 py-1 rounded-md font-semibold">
                      SKU: {product.code}
                    </span>
                    <span className="bg-emerald-600/90 backdrop-blur-xs px-2.5 py-1 rounded-md font-semibold flex items-center gap-1">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Original Manufacturer Batch
                    </span>
                  </div>
                </div>

                {/* Quality Safeguards Micro Strip */}
                <div className="mt-4 pt-3 border-t border-[#BAE6FD]/60 grid grid-cols-2 gap-2 text-[11px] font-mono-ui text-[#334155]">
                  <div className="flex items-center gap-1.5 bg-[#F8FAFC] p-2 rounded-lg">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>CoA Included in Invoice</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#F8FAFC] p-2 rounded-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>CDSCO Wholesale-819-A</span>
                  </div>
                </div>
              </div>

              {/* Manufacturer Information Card */}
              <div className="mt-6 bg-white border border-[#BAE6FD] rounded-2xl p-5 shadow-xs">
                <span className="text-[10px] font-mono-ui uppercase tracking-wider text-[#0284C7] font-bold block mb-1">
                  Principal Manufacturer &amp; Sourcing
                </span>
                <h3 className="font-editorial text-lg font-bold text-[#082F49] mb-1">
                  {product.mfg || 'Authorized Primary Manufacturer'}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed mb-3">
                  Procured exclusively via authorized wholesale distribution agreements. Every consignment originates directly from audited WHO-GMP / US-FDA production sites with zero secondary market exposure.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono-ui text-[#0369A1] font-semibold border-t border-[#BAE6FD]/50 pt-2.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Central Depot Dispatch · Gwalior (M.P.)</span>
                </div>
              </div>

              {/* Quick Jump Links to Clinical Sections */}
              <div className="mt-4 bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-ui">
                <span className="text-[#0369A1] font-semibold flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5 text-[#0284C7]" />
                  Clinical Navigation:
                </span>
                <div className="flex items-center gap-3">
                  <a href="#clinical-indications" className="text-[#0284C7] hover:underline font-medium">
                    Indications ↓
                  </a>
                  <span className="text-[#BAE6FD]">|</span>
                  <a href="#pharmacological-action" className="text-[#0284C7] hover:underline font-medium">
                    Pharmacology ↓
                  </a>
                  <span className="text-[#BAE6FD]">|</span>
                  <a href="#clinical-guidelines" className="text-[#0284C7] hover:underline font-medium">
                    Guidelines ↓
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Quick Specs & Quotation Actions */}
            <div className="lg:col-span-7">
              {/* Product Headline */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082F49] tracking-tight leading-[1.15] mb-3">
                {product.name}
              </h1>

              {/* Molecule / Active Ingredients */}
              <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-6 font-medium">
                {product.description}
              </p>

              {/* Commercial Box */}
              <div className="bg-gradient-to-br from-[#F0F9FF] to-white border border-[#BAE6FD] rounded-2xl p-6 mb-8 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#BAE6FD]/70">
                  <div>
                    <span className="text-xs font-mono-ui text-[#64748B] block mb-1">
                      Institutional Pricing &amp; Rates
                    </span>
                    <div className="flex items-baseline gap-3">
                      {product.mrp && (
                        <div>
                          <span className="text-xs text-[#64748B]">MRP: </span>
                          <span className="text-xl sm:text-2xl font-bold font-mono-ui text-[#082F49]">
                            ₹{product.mrp}
                          </span>
                        </div>
                      )}
                      {product.price && (
                        <div className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                          <span className="text-xs text-emerald-700 font-mono-ui">B2B Rate: </span>
                          <span className="text-xl sm:text-2xl font-bold font-mono-ui text-emerald-800">
                            ₹{product.price}
                          </span>
                        </div>
                      )}
                      {!product.mrp && !product.price && (
                        <span className="text-lg font-bold font-editorial text-[#0369A1]">
                          Rate Contract / Tender Pricing Available
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-mono-ui text-[#475569] space-y-1 sm:text-right">
                    <div>GST Rate: <strong>{product.gstPct || '5%'}</strong></div>
                    {product.hsnCode && <div>HSN Code: <strong>{product.hsnCode}</strong></div>}
                    <div className="text-emerald-700 font-semibold">Dispatch SLA: 24–48 Hours</div>
                  </div>
                </div>

                {/* Direct Action Triggers */}
                <div className="pt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal && onOpenQuoteModal(product.name)}
                    className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-md font-mono-ui"
                  >
                    <span>Request Wholesale Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {onOpenMeetingModal && (
                    <button
                      type="button"
                      onClick={onOpenMeetingModal}
                      className="inline-flex items-center gap-2 bg-white hover:bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD] font-semibold text-sm px-5 py-3.5 rounded-xl transition-all cursor-pointer font-mono-ui shadow-2xs"
                    >
                      <span>Book Formulary Meeting</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Formulation Specifications Grid Table */}
              <div className="bg-white border border-[#BAE6FD] rounded-2xl overflow-hidden shadow-xs">
                <div className="bg-[#F8FAFC] border-b border-[#BAE6FD] px-5 py-3 flex items-center justify-between">
                  <h2 className="font-editorial text-base font-bold text-[#082F49]">
                    Technical &amp; Packaging Specifications
                  </h2>
                  <span className="text-[11px] font-mono-ui text-[#0284C7] font-semibold">
                    CDSCO Regulated
                  </span>
                </div>

                <div className="divide-y divide-[#BAE6FD]/50 text-xs sm:text-sm">
                  {product.strength && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 px-5 py-3.5">
                      <span className="font-mono-ui text-[#64748B] text-xs">Strength</span>
                      <span className="col-span-2 sm:col-span-3 font-semibold text-[#082F49]">
                        {product.strength}
                      </span>
                    </div>
                  )}

                  {product.dosageForm && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 px-5 py-3.5 bg-[#FAFBFD]">
                      <span className="font-mono-ui text-[#64748B] text-xs">Dosage Form</span>
                      <span className="col-span-2 sm:col-span-3 font-semibold text-[#082F49]">
                        {product.dosageForm}
                      </span>
                    </div>
                  )}

                  {product.packaging && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 px-5 py-3.5">
                      <span className="font-mono-ui text-[#64748B] text-xs">Packaging</span>
                      <span className="col-span-2 sm:col-span-3 font-semibold text-[#082F49]">
                        {product.packaging}
                      </span>
                    </div>
                  )}

                  {product.routeOfAdministration && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 px-5 py-3.5 bg-[#FAFBFD]">
                      <span className="font-mono-ui text-[#64748B] text-xs">Administration Route</span>
                      <span className="col-span-2 sm:col-span-3 font-semibold text-[#082F49]">
                        {product.routeOfAdministration}
                      </span>
                    </div>
                  )}

                  {product.storageConditions && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 px-5 py-3.5">
                      <span className="font-mono-ui text-[#64748B] text-xs">Storage Conditions</span>
                      <span className="col-span-2 sm:col-span-3 text-[#334155] font-medium">
                        {product.storageConditions}
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-3 sm:grid-cols-4 px-5 py-3.5 bg-[#FAFBFD]">
                    <span className="font-mono-ui text-[#64748B] text-xs">Origin</span>
                    <span className="col-span-2 sm:col-span-3 font-semibold text-[#082F49]">
                      {product.countryOfOrigin || 'India (CDSCO / GMP Certified)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED MEDICAL CONDITIONS & TREATMENT INDICATIONS SECTION */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#BAE6FD]/60" id="clinical-indications">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-mono-ui text-xs tracking-wider uppercase mb-3 font-semibold">
              <Stethoscope className="w-3.5 h-3.5 text-[#0284C7]" />
              Clinical Pharmacotherapy &amp; Indications
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#082F49] tracking-tight leading-tight mb-4">
              Target Medical Conditions &amp; Treatment Indications
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Approved clinical conditions, institutional diagnoses, and therapeutic indications for {product.name}.
              Supplied strictly for registered hospital pharmacies, critical care units, and institutional healthcare formularies.
            </p>
          </div>

          {/* High-Contrast Badges for Therapeutic Classification */}
          {product.therapeuticClass && product.therapeuticClass.length > 0 && (
            <div className="mb-8 p-5 bg-[#F8FAFC] border border-[#BAE6FD] rounded-2xl">
              <span className="text-xs font-mono-ui uppercase tracking-wider text-[#64748B] font-bold block mb-3">
                Therapeutic Classification &amp; Pharmacological Category:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {product.therapeuticClass.map((cls, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#082F49] text-white font-mono-ui text-xs font-semibold shadow-xs"
                  >
                    <Activity className="w-3.5 h-3.5 text-[#38BDF8]" />
                    {cls}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Specific Medical Conditions Treated Grid (High-Contrast Cards) */}
          <div className="mb-10">
            <h3 className="font-editorial text-xl font-bold text-[#082F49] mb-4 flex items-center gap-2">
              <Pill className="w-5 h-5 text-[#0284C7]" />
              <span>Documented Clinical Conditions Treated</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.indications && product.indications.map((indication, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-[#BAE6FD] hover:border-[#0284C7] rounded-xl p-5 shadow-xs transition-all flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#082F49] group-hover:bg-[#0284C7] text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs mt-0.5 font-mono-ui transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono-ui uppercase tracking-widest text-[#0284C7] font-bold block mb-1">
                      Therapeutic Indication
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-[#082F49] leading-snug">
                      {indication}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Administration Pearls & Target Hospital Departments */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Key Clinical Administration Highlights */}
            {product.clinicalHighlights && product.clinicalHighlights.length > 0 && (
              <div className="lg:col-span-7 bg-[#F0F9FF]/70 border border-[#BAE6FD] rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-[#0284C7]" />
                  <h3 className="font-editorial text-xl font-bold text-[#082F49]">
                    Clinical &amp; Administration Considerations
                  </h3>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#334155]">
                  {product.clinicalHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-[#0284C7]/15 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span className="leading-relaxed font-medium">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Right: Target Hospital Departments */}
            {product.targetDepartments && product.targetDepartments.length > 0 && (
              <div className="lg:col-span-5 bg-white border border-[#BAE6FD] rounded-2xl p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-[#0284C7]" />
                  <h3 className="font-editorial text-xl font-bold text-[#082F49]">
                    Primary Hospital Units
                  </h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  Commonly requisitioned across specialized departmental formularies:
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {product.targetDepartments.map((dept, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#082F49] text-white font-mono-ui text-xs font-semibold shadow-2xs"
                    >
                      {dept}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-[#BAE6FD]/60 text-xs font-mono-ui text-[#475569] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Regulatory Category:</span>
                    <span className="font-semibold text-[#082F49]">{product.regulatorySchedule || 'Schedule H'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Storage Classification:</span>
                    <span className="font-semibold text-[#082F49]">{isColdChain ? '2°C–8°C Cold-Chain' : 'Controlled Room Temp (<25°C)'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. EXPANDED PRIMARY PHARMACOLOGICAL ACTION & MOLECULAR PROFILE SECTION */}
      {product.pharmacology && (
        <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#BAE6FD]/60" id="pharmacological-action">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-mono-ui text-xs tracking-wider uppercase mb-3 font-semibold">
                <Activity className="w-3.5 h-3.5 text-[#0284C7]" />
                Primary Pharmacological Action &amp; Molecular Profile
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#082F49] tracking-tight leading-tight mb-4">
                Mechanism of Action, Dynamics &amp; Kinetics
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Biochemical mechanism of action, receptor binding affinity, pharmacodynamic response profile, and clinical pharmacokinetic parameters for {product.name}.
              </p>
            </div>

            {/* Primary Mechanism of Action (MOA) Hero Card */}
            <div className="bg-white border-2 border-[#0284C7] rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="bg-[#082F49] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Microscope className="w-5 h-5 text-[#38BDF8]" />
                  <h3 className="font-editorial text-lg sm:text-xl font-bold">
                    Primary Mechanism of Action (MOA)
                  </h3>
                </div>
                <span className="text-[11px] font-mono-ui bg-[#0284C7] px-3 py-1 rounded-md font-semibold">
                  Cellular &amp; Molecular Pathway
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-[#082F49] leading-relaxed font-medium mb-6">
                  {product.pharmacology.mechanismOfAction}
                </p>

                {/* Target Receptors & Antimicrobial Spectrum */}
                {product.pharmacology.targetSpectrumOrReceptors && product.pharmacology.targetSpectrumOrReceptors.length > 0 && (
                  <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl p-4 sm:p-5">
                    <span className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-bold block mb-2.5">
                      Target Receptors, Enzymes &amp; Pathogen Spectrum:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {product.pharmacology.targetSpectrumOrReceptors.map((target, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#BAE6FD] text-[#082F49] font-mono-ui text-xs font-semibold shadow-2xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pharmacodynamics Callout */}
                {product.pharmacology.pharmacodynamics && (
                  <div className="mt-5 pt-5 border-t border-[#BAE6FD]/60 flex items-start gap-3 text-xs sm:text-sm text-[#334155]">
                    <HeartPulse className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#082F49] font-mono-ui text-xs uppercase tracking-wider mr-2">
                        Pharmacodynamics:
                      </strong>
                      <span>{product.pharmacology.pharmacodynamics}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pharmacokinetic Parameters 4-Card Matrix */}
            {product.pharmacology.pharmacokinetics && (
              <div>
                <h3 className="font-editorial text-xl font-bold text-[#082F49] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#0284C7]" />
                  <span>Clinical Pharmacokinetic Parameters (PK Profile)</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Half-Life */}
                  <div className="bg-white border border-[#BAE6FD] rounded-xl p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-3">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono-ui uppercase tracking-wider text-[#64748B] font-bold block mb-1">
                        Elimination Half-Life (t½)
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#082F49] leading-snug">
                        {product.pharmacology.pharmacokinetics.halfLife || 'Not established'}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono-ui text-[#0284C7] font-semibold mt-3 pt-2 border-t border-[#BAE6FD]/40">
                      Circulatory Clearance
                    </span>
                  </div>

                  {/* Protein Binding */}
                  <div className="bg-white border border-[#BAE6FD] rounded-xl p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-3">
                        <Layers className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono-ui uppercase tracking-wider text-[#64748B] font-bold block mb-1">
                        Protein Binding
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#082F49] leading-snug">
                        {product.pharmacology.pharmacokinetics.proteinBinding || 'Low systemic binding'}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono-ui text-[#0284C7] font-semibold mt-3 pt-2 border-t border-[#BAE6FD]/40">
                      Plasma Fractionation
                    </span>
                  </div>

                  {/* Metabolism */}
                  <div className="bg-white border border-[#BAE6FD] rounded-xl p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-3">
                        <Activity className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono-ui uppercase tracking-wider text-[#64748B] font-bold block mb-1">
                        Metabolism &amp; Biotransformation
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#082F49] leading-snug">
                        {product.pharmacology.pharmacokinetics.metabolism || 'Cellular breakdown'}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono-ui text-[#0284C7] font-semibold mt-3 pt-2 border-t border-[#BAE6FD]/40">
                      Hepatic / Enzymatic
                    </span>
                  </div>

                  {/* Elimination */}
                  <div className="bg-white border border-[#BAE6FD] rounded-xl p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-3">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono-ui uppercase tracking-wider text-[#64748B] font-bold block mb-1">
                        Elimination &amp; Excretion
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#082F49] leading-snug">
                        {product.pharmacology.pharmacokinetics.elimination || 'Renal / Biliary clearance'}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono-ui text-[#0284C7] font-semibold mt-3 pt-2 border-t border-[#BAE6FD]/40">
                      Excretion Pathway
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. EXPANDED EVIDENCE-BASED CLINICAL GUIDELINES & PATIENT SAFETY SECTION */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#BAE6FD]/60" id="clinical-guidelines">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-mono-ui text-xs tracking-wider uppercase mb-3 font-semibold">
              <FileCheck2 className="w-3.5 h-3.5 text-[#0284C7]" />
              Evidence-Based Guidelines &amp; Institutional Protocols
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#082F49] tracking-tight leading-tight mb-4">
              Clinical Guidelines &amp; Hospital Formulary Protocols
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Standardized hospital dosing regimens, international consensus guidelines, organ clearance adjustments, and critical safety parameters for {product.name}.
            </p>
          </div>

          {/* Dosing Guidelines Cards */}
          {product.dosingGuidelines && product.dosingGuidelines.length > 0 && (
            <div className="mb-10">
              <h3 className="font-editorial text-xl font-bold text-[#082F49] mb-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#0284C7]" />
                <span>Evidence-Based Dosing Protocols</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {product.dosingGuidelines.map((guideline, i) => (
                  <div
                    key={i}
                    className="bg-[#F8FAFC] border-2 border-[#BAE6FD] hover:border-[#0284C7] rounded-xl p-5 shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      {guideline.badge && (
                        <span className="inline-block px-2.5 py-1 rounded-md bg-[#082F49] text-white font-mono-ui text-[11px] font-semibold mb-3">
                          {guideline.badge}
                        </span>
                      )}
                      <h4 className="font-editorial text-base sm:text-lg font-bold text-[#082F49] mb-2 leading-snug">
                        {guideline.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                        {guideline.detail}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#BAE6FD]/60 flex items-center justify-between text-[11px] font-mono-ui text-[#0284C7]">
                      <span>Hospital Standard</span>
                      <span className="font-semibold">Regimen {i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Organ Dose Adjustment, Monitoring Parameters & Contraindications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Renal/Hepatic Adjustment & Monitoring Parameters */}
            <div className="lg:col-span-7 space-y-6">
              {/* Renal & Hepatic Dose Modifications */}
              {product.renalHepaticAdjustment && (
                <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
                    <h3 className="font-editorial text-xl font-bold text-[#082F49]">
                      Renal &amp; Hepatic Dose Adjustments
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium">
                    {product.renalHepaticAdjustment}
                  </p>
                </div>
              )}

              {/* Safety & Laboratory Monitoring Parameters */}
              {product.monitoringParameters && product.monitoringParameters.length > 0 && (
                <div className="bg-white border border-[#BAE6FD] rounded-2xl p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Activity className="w-5 h-5 text-[#0284C7]" />
                    <h3 className="font-editorial text-xl font-bold text-[#082F49]">
                      Essential Laboratory &amp; Clinical Monitoring
                    </h3>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#334155]">
                    {product.monitoringParameters.map((param, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs font-mono-ui">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed font-medium">{param}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Contraindications & High-Contrast Safety Warnings */}
            <div className="lg:col-span-5">
              {product.contraindications && product.contraindications.length > 0 ? (
                <div className="bg-rose-50/70 border-2 border-rose-200 rounded-2xl p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-4">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    <h3 className="font-editorial text-xl font-bold text-rose-950">
                      Contraindications &amp; Safety Warnings
                    </h3>
                  </div>
                  <p className="text-xs text-rose-800 leading-relaxed mb-4">
                    Do not administer in the presence of the following documented clinical contraindications or high-risk drug interactions:
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-rose-900">
                    {product.contraindications.map((contra, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white/80 p-3 rounded-xl border border-rose-200">
                        <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                        <span className="leading-relaxed font-medium">{contra}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-rose-200 text-[11px] font-mono-ui text-rose-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                    <span>Schedule H / H1 Hospital Pharmacy Safeguard</span>
                  </div>
                </div>
              ) : (
                <div className="bg-[#F8FAFC] border border-[#BAE6FD] rounded-2xl p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
                    <h3 className="font-editorial text-xl font-bold text-[#082F49]">
                      Institutional Dispensing Safeguards
                    </h3>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    Strictly dispensed against verified institutional purchase order or registered medical practitioner prescription.
                  </p>
                  <div className="space-y-2 text-xs font-mono-ui text-[#082F49]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>100% Batch Traceability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Original Manufacturer CoA Attached</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>CDSCO Wholesale License 819-A Compliance</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Sourcing & Central Depot Assurance */}
              <div className="mt-6 bg-[#082F49] text-white rounded-2xl p-6 shadow-sm">
                <span className="text-[10px] font-mono-ui uppercase tracking-wider text-[#38BDF8] font-bold block mb-1">
                  Institutional Sourcing Assurance
                </span>
                <h4 className="font-editorial text-lg font-bold mb-2">
                  Direct Consignment from Central Depot
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  All consignments for {product.name} are dispatched under verified chain of custody directly from our WHO-GDP compliant depot in Gwalior, Madhya Pradesh.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal(product.name)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono-ui text-xs font-semibold py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Request Institutional Stock Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Supply Chain Integrity & Gwalior Hub Guarantee */}
      <section className="py-14 sm:py-18 bg-[#FBFAF6] border-b border-[#BAE6FD]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#BAE6FD] rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#082F49] mb-1">
                    Direct Sourcing Exclusively
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Zero secondary or speculative stock. Procured directly from authorized manufacturing plants under strict commercial agreements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                  <ThermometerSnowflake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#082F49] mb-1">
                    Calibrated Thermal Shippers
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Continuous multi-probe temperature loggers inside phase-change shippers ensure zero thermal excursions from Gwalior Depot to your receiving dock.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#082F49] mb-1">
                    Manufacturer CoA Included
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Every batch release is backed by the authentic Certificate of Analysis from the analytical testing laboratory, verifying potency and sterility.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Verification Banner */}
            <div className="mt-8 pt-6 border-t border-[#BAE6FD]/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono-ui text-[#082F49]">
                <BadgeCheck className="w-4 h-4 text-[#0284C7]" />
                <span>CDSCO Wholesale Drug License: <strong>Wholesale-819-A</strong> · Form 20B &amp; 21B Authorized</span>
              </div>
              <Link
                to="/certificates"
                className="inline-flex items-center gap-1.5 text-xs font-mono-ui font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
              >
                <span>Inspect Regulatory Certificates &amp; Licenses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Formulations from Same Division/Category */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-[#BAE6FD]/60">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold block mb-1">
                  Therapeutic Portfolio
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#082F49]">
                  Related Hospital Formulations
                </h2>
              </div>
              <Link
                to="/products"
                className="text-xs font-mono-ui text-[#0284C7] hover:text-[#0369A1] font-semibold flex items-center gap-1.5"
              >
                <span>View All ({product.category})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/products/${rel.id}`)}
                  className="bg-white border border-[#BAE6FD] hover:border-[#0284C7] rounded-xl p-4 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#F0F9FF] mb-3 border border-[#BAE6FD]/60 relative">
                      <img
                        src={rel.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80'}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {rel.division && (
                        <span className="absolute bottom-1.5 left-1.5 bg-[#082F49]/80 text-white text-[9px] font-mono-ui px-2 py-0.5 rounded font-medium">
                          {rel.division}
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] font-mono-ui uppercase tracking-wider text-[#0284C7] font-bold block mb-1">
                      {rel.category}
                    </span>

                    <h3 className="font-editorial text-base font-bold text-[#082F49] leading-snug mb-1 group-hover:text-[#0284C7] transition-colors">
                      {rel.name}
                    </h3>

                    <p className="text-xs text-[#475569] line-clamp-2 mb-3">
                      {rel.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#BAE6FD]/60 flex items-center justify-between text-xs font-mono-ui">
                    <span className="text-[#0369A1] font-semibold">
                      {rel.strength || rel.code}
                    </span>
                    <span className="text-[#0284C7] group-hover:translate-x-1 transition-transform font-bold">
                      View Details →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Institutional RFQ Bottom Band */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0369A1] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#E0F2FE] font-mono-ui text-xs tracking-wider uppercase mb-5 border border-white/20">
              <Sparkles className="w-4 h-4" />
              Direct Institutional Sourcing Desk
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Procure {product.name} for Your Institution
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8">
              Send our commercial desk your required lot volume and institutional delivery dock address.
              We provide formal rate contracts, batch release certificates, and logistics schedules within 24 hours.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenQuoteModal && onOpenQuoteModal(product.name)}
                className="inline-flex items-center gap-2 bg-white text-[#0369A1] hover:bg-[#F0F9FF] font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-md font-mono-ui text-sm"
              >
                <span>Request Wholesale Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#0284C7]/40 hover:bg-[#0284C7]/60 text-white font-medium px-5 py-3.5 rounded-xl border border-white/30 transition-all cursor-pointer font-mono-ui text-sm"
              >
                <span>Back to Catalog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
