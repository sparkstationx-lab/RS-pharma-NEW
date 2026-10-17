import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  PHARMA_PRODUCTS,
  MANUFACTURER_DIVISIONS,
  THERAPEUTIC_CATEGORIES,
  DOSAGE_FORMS,
} from '../data/productData';
import {
  Search,
  Filter,
  ShieldCheck,
  ThermometerSnowflake,
  FileCheck2,
  Package,
  Building2,
  Tag,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Download,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface ProductsProps {
  onOpenQuoteModal?: (productName?: string) => void;
  onOpenMeetingModal?: () => void;
}

export const Products: React.FC<ProductsProps> = ({
  onOpenQuoteModal,
  onOpenMeetingModal,
}) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedMfg, setSelectedMfg] = useState('All Manufacturers');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDosage, setSelectedDosage] = useState('All Forms');
  const [sortBy, setSortBy] = useState<'name' | 'mfg' | 'category'>('name');

  useEffect(() => {
    document.title = 'Pharmaceutical Products Catalog · Jadon Pharmaceuticals India Private Limited';
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    return PHARMA_PRODUCTS.filter((product) => {
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.code.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.strength && product.strength.toLowerCase().includes(query)) ||
        (product.mfg && product.mfg.toLowerCase().includes(query)) ||
        (product.division && product.division.toLowerCase().includes(query)) ||
        product.category.toLowerCase().includes(query);

      const matchesMfg =
        selectedMfg === 'All Manufacturers' ||
        (product.division && product.division.toLowerCase().includes(selectedMfg.toLowerCase())) ||
        (product.mfg && product.mfg.toLowerCase().includes(selectedMfg.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory;

      const matchesDosage =
        selectedDosage === 'All Forms' || product.dosageForm === selectedDosage;

      return matchesSearch && matchesMfg && matchesCategory && matchesDosage;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'mfg') return (a.mfg || '').localeCompare(b.mfg || '');
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });
  }, [search, selectedMfg, selectedCategory, selectedDosage, sortBy]);

  const handleQuoteClick = (prodName: string) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(prodName);
    }
  };

  return (
    <div className="flex-1 bg-[#FBFAF6] text-[#082F49]">
      {/* 1. Header Hero with Breadcrumb */}
      <section className="relative pt-8 pb-14 sm:pb-20 border-b border-[#BAE6FD]/60 bg-gradient-to-b from-[#F0F9FF] via-[#FBFAF6] to-[#FBFAF6]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono-ui text-[#475569]">
            <Link to="/" className="hover:text-[#0284C7] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-[#0284C7] font-semibold" aria-current="page">
              Products
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-mono-ui text-xs tracking-wider uppercase mb-5 font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
              Hospital-Grade Formulations · CDSCO Lic. Wholesale-819-A
            </span>

            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#082F49] leading-[1.12] mb-6">
              Critical Care, Hospital Injectables &amp; Specialty Formulations.
            </h1>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-6">
              Direct authorized distribution lines from premier pharmaceutical manufacturers including{' '}
              <strong className="text-[#0369A1] font-semibold">Senores Pharmaceuticals</strong>,{' '}
              <strong className="text-[#0369A1] font-semibold">Concord Biotech (INCA)</strong>,{' '}
              <strong className="text-[#0369A1] font-semibold">Mankind Pharma (Saviour)</strong>,{' '}
              <strong className="text-[#0369A1] font-semibold">Vitabionics Healthcare</strong>,{' '}
              <strong className="text-[#0369A1] font-semibold">Biohelix Life Science</strong>, and{' '}
              <strong className="text-[#0369A1] font-semibold">Aviral Pharmaceuticals</strong>.
              All batches are released with authentic manufacturer Certificates of Analysis (CoAs) and GST tax invoices.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono-ui text-[#0369A1]">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#BAE6FD] shadow-xs">
                <ThermometerSnowflake className="w-4 h-4 text-[#0284C7]" />
                <span className="font-semibold">2°C–8°C Active Cold-Chain Validated</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#BAE6FD] shadow-xs">
                <FileCheck2 className="w-4 h-4 text-[#0284C7]" />
                <span className="font-semibold">100% Batch CoA Traceability</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#BAE6FD] shadow-xs">
                <Building2 className="w-4 h-4 text-[#0284C7]" />
                <span className="font-semibold">Central Depot · Gwalior (M.P.)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Multifaceted Filtering Matrix */}
      <section className="py-8 bg-white border-b border-[#BAE6FD]/70 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-4">
          {/* Search bar & Sort Controls */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#0284C7] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by brand name (e.g. Meropenem, Senocoline, Colistimethate, Calcinics)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#BAE6FD] text-sm text-[#082F49] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/40 focus:border-[#0284C7] bg-[#F8FAFC]"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#082F49] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 justify-between lg:justify-end">
              <div className="flex items-center gap-2 text-xs font-mono-ui text-[#475569]">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#F8FAFC] border border-[#BAE6FD] rounded-lg px-2.5 py-1.5 text-xs text-[#082F49] focus:outline-none focus:ring-1 focus:ring-[#0284C7]"
                >
                  <option value="name">Product Name (A-Z)</option>
                  <option value="mfg">Manufacturer</option>
                  <option value="category">Therapeutic Category</option>
                </select>
              </div>

              <div className="text-xs font-mono-ui text-[#0369A1] font-semibold bg-[#E0F2FE] px-3 py-1.5 rounded-lg border border-[#BAE6FD]">
                {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Available
              </div>
            </div>
          </div>

          {/* Dosage Form Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono-ui">
            <span className="text-[#64748B] mr-1 shrink-0">Dosage Form:</span>
            {DOSAGE_FORMS.map((form) => (
              <button
                key={form}
                onClick={() => setSelectedDosage(form)}
                className={`px-3 py-1.5 rounded-lg shrink-0 transition-all cursor-pointer ${
                  selectedDosage === form
                    ? 'bg-[#0284C7] text-white font-semibold shadow-xs'
                    : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                }`}
              >
                {form}
              </button>
            ))}
          </div>

          {/* Manufacturer Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono-ui pt-1 border-t border-[#BAE6FD]/40">
            <span className="text-[#64748B] mr-1 shrink-0">Manufacturer / Division:</span>
            {MANUFACTURER_DIVISIONS.map((mfg) => (
              <button
                key={mfg}
                onClick={() => setSelectedMfg(mfg)}
                className={`px-3 py-1 rounded-md shrink-0 transition-all cursor-pointer ${
                  selectedMfg === mfg
                    ? 'bg-[#0369A1] text-white font-semibold'
                    : 'bg-white text-[#0369A1] hover:bg-[#E0F2FE] border border-[#BAE6FD]'
                }`}
              >
                {mfg}
              </button>
            ))}
          </div>

          {/* Therapeutic Categories Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono-ui pt-1 border-t border-[#BAE6FD]/40">
            <span className="text-[#64748B] mr-1 shrink-0">Therapeutic Area:</span>
            {THERAPEUTIC_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-md shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#082F49] text-white font-semibold'
                    : 'bg-white text-[#475569] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Products List View / Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-12 text-center max-w-md mx-auto my-12">
              <AlertCircle className="w-12 h-12 text-[#0284C7] mx-auto mb-4" />
              <h3 className="font-editorial text-2xl font-bold text-[#082F49] mb-2">No matching formulations</h3>
              <p className="text-sm text-[#475569] mb-6">
                We couldn't find any products matching your current search and filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedMfg('All Manufacturers');
                  setSelectedCategory('All Categories');
                  setSelectedDosage('All Forms');
                }}
                className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono-ui font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="bg-white border border-[#BAE6FD] rounded-2xl p-5 shadow-xs hover:border-[#0284C7] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Image & Division Tag */}
                    <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#F0F9FF] mb-3.5 border border-[#BAE6FD]/60 relative">
                      <img
                        src={product.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80'}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {product.division && (
                        <span className="absolute bottom-2 left-2 bg-[#082F49]/90 backdrop-blur-xs text-white text-[10px] font-mono-ui px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                          {product.division}
                        </span>
                      )}
                    </div>

                    {/* Category & Code */}
                    <div className="flex items-center justify-between text-[11px] font-mono-ui mb-1.5">
                      <span className="text-[#0284C7] font-bold uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="text-[#64748B] bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                        {product.code}
                      </span>
                    </div>

                    {/* Brand Name */}
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#082F49] leading-snug mb-2 group-hover:text-[#0284C7] transition-colors">
                      {product.name}
                    </h3>

                    {/* Generic / Description */}
                    <p className="text-xs text-[#475569] leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Strength & Packaging Chips */}
                    <div className="space-y-1.5 mb-4 text-xs font-mono-ui">
                      {product.strength && (
                        <div className="flex items-start gap-2 bg-[#F0F9FF] p-2 rounded-lg border border-[#BAE6FD]/40 text-[#0369A1]">
                          <Tag className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                          <span className="font-medium text-[11px] leading-tight">{product.strength}</span>
                        </div>
                      )}

                      {product.packaging && (
                        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200/60 text-[#475569]">
                          <Package className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                          <span className="text-[11px]">{product.packaging}</span>
                        </div>
                      )}

                      {product.mfg && (
                        <div className="flex items-center gap-2 text-[#64748B] text-[11px] px-1">
                          <Building2 className="w-3 h-3 text-[#0284C7] shrink-0" />
                          <span className="truncate">{product.mfg}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing & Inquiry Action Bottom Row */}
                  <div className="pt-3 border-t border-[#BAE6FD]/70 flex items-center justify-between gap-2">
                    <div>
                      {product.mrp && (
                        <div className="text-[11px] font-mono-ui">
                          <span className="text-[#64748B] block text-[10px]">
                            MRP: ₹{product.mrp}
                          </span>
                          {product.price && (
                            <span className="text-emerald-700 font-bold text-xs">
                              B2B Rate: ₹{product.price}
                            </span>
                          )}
                        </div>
                      )}
                      {!product.mrp && (
                        <span className="text-xs font-mono-ui text-[#0369A1] font-semibold">
                          Tender Inquiries Only
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[#0284C7] group-hover:translate-x-0.5 transition-transform text-xs font-mono-ui font-bold">
                        Details →
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuoteClick(product.name);
                        }}
                        className="inline-flex items-center gap-1 bg-[#E0F2FE] hover:bg-[#0284C7] text-[#0284C7] hover:text-white font-semibold text-xs px-2.5 py-1.5 rounded-lg transition-all cursor-pointer font-mono-ui"
                      >
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Sourcing & Regulatory Assurance Banner */}
      <section className="py-14 sm:py-18 bg-[#F0F9FF] border-t border-b border-[#BAE6FD]/70">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#BAE6FD] text-[#0284C7] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-editorial text-lg font-bold text-[#082F49] mb-1">
                  CDSCO Licensed Wholesale
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Operating under Wholesale License Wholesale-819-A (Form 20B/21B). Strict B2B supply exclusively to licensed hospital pharmacies and registered institutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#BAE6FD] text-[#0284C7] flex items-center justify-center shrink-0 shadow-xs">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-editorial text-lg font-bold text-[#082F49] mb-1">
                  Active 2°C–8°C Cold-Chain
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Calibrated temperature data loggers inside insulated thermal shippers. End-to-end telemetry monitored from Gwalior Depot to final receiving dock.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#BAE6FD] text-[#0284C7] flex items-center justify-center shrink-0 shadow-xs">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-editorial text-lg font-bold text-[#082F49] mb-1">
                  Batch Release &amp; CoA
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Every consignment travels with authentic manufacturer analytical release certificates, test documentation, and GST-compliant invoices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Institutional Tender CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0369A1] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#E0F2FE] font-mono-ui text-xs tracking-wider uppercase mb-4 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              Institutional Procurement Inquiries
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Need formulary rates or bulk institutional quotes?
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8">
              Send our commercial desk your required molecule list, monthly volume, and hospital delivery destination.
              We provide authorized pricing, batch release schedules, and compliance dossiers inside 24 hours.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleQuoteClick('')}
                className="inline-flex items-center gap-2 bg-white text-[#0369A1] hover:bg-[#F0F9FF] font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-md font-mono-ui text-sm"
              >
                <span>Submit Institutional RFP / Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenMeetingModal && (
                <button
                  type="button"
                  onClick={onOpenMeetingModal}
                  className="inline-flex items-center gap-2 bg-[#0284C7]/40 hover:bg-[#0284C7]/60 text-white font-medium px-5 py-3.5 rounded-xl border border-white/30 transition-all cursor-pointer font-mono-ui text-sm"
                >
                  <span>Book Consultation with Director</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
