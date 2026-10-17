import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCT_LIST, MANUFACTURER_DIVISIONS, THERAPEUTIC_CATEGORIES } from '../data/mockData';
import { ArrowRight, Search, ShieldCheck, Tag, Package, Building2, FileCheck2, Filter } from 'lucide-react';

interface ProductCatalogSectionProps {
  onOpenQuoteModal: (query?: string) => void;
  filteredQuery?: string;
}

export const ProductCatalogSection: React.FC<ProductCatalogSectionProps> = ({
  onOpenQuoteModal,
  filteredQuery = '',
}) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(filteredQuery);
  const [selectedMfg, setSelectedMfg] = useState('All Manufacturers');
  const [selectedCat, setSelectedCat] = useState('All Categories');
  const [visibleCount, setVisibleCount] = useState(15);

  const filteredProducts = useMemo(() => {
    return PRODUCT_LIST.filter((p) => {
      const query = (search || '').toLowerCase();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.mfg && p.mfg.toLowerCase().includes(query)) ||
        (p.division && p.division.toLowerCase().includes(query)) ||
        (p.strength && p.strength.toLowerCase().includes(query));

      const matchesMfg =
        selectedMfg === 'All Manufacturers' ||
        (p.division && p.division.toLowerCase().includes(selectedMfg.toLowerCase())) ||
        (p.mfg && p.mfg.toLowerCase().includes(selectedMfg.toLowerCase()));

      const matchesCat = selectedCat === 'All Categories' || p.category === selectedCat;

      return matchesSearch && matchesMfg && matchesCat;
    });
  }, [search, selectedMfg, selectedCat]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-14 sm:py-20 bg-[#FBFAF6]" aria-label="Product Portfolio">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#0284C7] pl-5 sm:pl-6 max-w-[880px] mb-8">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#0369A1] font-bold mb-2">
            02 · Regulated Formulations · Direct Manufacturer Sourcing
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0369A1] leading-[1.2] mb-3">
            Hospital-Grade &amp; Critical-Care Portfolio.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            Supplying intensive care units, oncology departments, and hospital pharmacies nationwide with authorized lines from premier pharmaceutical manufacturers including{' '}
            <strong className="text-[#0369A1] font-semibold">Senores Pharmaceuticals</strong>,{' '}
            <strong className="text-[#0369A1] font-semibold">Concord Biotech (INCA)</strong>,{' '}
            <strong className="text-[#0369A1] font-semibold">Mankind Pharma (Saviour)</strong>,{' '}
            <strong className="text-[#0369A1] font-semibold">Vitabionics Healthcare</strong>,{' '}
            <strong className="text-[#0369A1] font-semibold">Biohelix Life Science</strong>, and{' '}
            <strong className="text-[#0369A1] font-semibold">Aviral Pharmaceuticals</strong>.
            Every delivery includes authentic batch Certificates of Analysis (CoAs) and GST tax invoices.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-[#BAE6FD] rounded-2xl p-4 sm:p-5 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#0284C7] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by brand name, active molecule, strength, or manufacturer..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#BAE6FD] text-sm text-[#082F49] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/40 focus:border-[#0284C7] bg-[#F8FAFC]"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-ui text-[#0369A1] shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>
                Showing <strong>{filteredProducts.length}</strong> Products
              </span>
            </div>
          </div>

          {/* Manufacturer Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-mono-ui text-[#64748B] mr-2">Manufacturer:</span>
            {MANUFACTURER_DIVISIONS.map((mfg) => (
              <button
                key={mfg}
                onClick={() => setSelectedMfg(mfg)}
                className={`text-xs px-3 py-1.5 rounded-lg font-mono-ui transition-all cursor-pointer ${
                  selectedMfg === mfg
                    ? 'bg-[#0284C7] text-white font-semibold shadow-xs'
                    : 'bg-[#F0F9FF] text-[#0369A1] hover:bg-[#E0F2FE] border border-[#BAE6FD]/60'
                }`}
              >
                {mfg}
              </button>
            ))}
          </div>

          {/* Therapeutic Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-[#BAE6FD]/50">
            <span className="text-xs font-mono-ui text-[#64748B] mr-2">Therapeutic Area:</span>
            {THERAPEUTIC_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`text-xs px-2.5 py-1 rounded-md font-mono-ui transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#0369A1] text-white font-semibold'
                    : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              className="group bg-white border border-[#BAE6FD] rounded-xl p-4 flex flex-col justify-between hover:border-[#0284C7] hover:shadow-lg transition-all duration-200 cursor-pointer relative"
            >
              <div>
                {/* Product Image Container */}
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#F0F9FF] mb-3 border border-[#BAE6FD]/60 relative">
                  <img
                    src={product.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {product.division && (
                    <span className="absolute bottom-1.5 left-1.5 bg-[#082F49]/85 backdrop-blur-xs text-white text-[9px] font-mono-ui px-2 py-0.5 rounded uppercase tracking-wider font-medium">
                      {product.division}
                    </span>
                  )}
                </div>

                {/* Category Meta */}
                <span className="block font-mono-ui text-[10px] uppercase tracking-[0.1em] text-[#0284C7] font-bold mb-1">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="font-editorial text-base sm:text-[17px] font-bold text-[#082F49] leading-snug mb-1 group-hover:text-[#0284C7] transition-colors">
                  {product.name}
                </h3>

                {/* Molecule / Short Description */}
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-2 mb-2.5">
                  {product.description}
                </p>

                {/* Metadata Pills */}
                <div className="space-y-1 mb-2">
                  {product.strength && (
                    <div className="text-[11px] font-mono-ui text-[#0369A1] flex items-center gap-1.5 bg-[#F0F9FF] px-2 py-0.5 rounded">
                      <Tag className="w-3 h-3 text-[#0284C7] shrink-0" />
                      <span className="truncate">{product.strength}</span>
                    </div>
                  )}
                  {product.packaging && (
                    <div className="text-[11px] font-mono-ui text-[#475569] flex items-center gap-1.5 bg-slate-50 px-2 py-0.5 rounded">
                      <Package className="w-3 h-3 text-[#64748B] shrink-0" />
                      <span className="truncate">{product.packaging}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price / Quote Callout */}
              <div className="mt-3 pt-2.5 border-t border-[#BAE6FD]/60 flex items-center justify-between text-xs font-mono-ui">
                <div>
                  {product.mrp ? (
                    <div>
                      <span className="text-[10px] text-[#64748B] block">MRP ₹{product.mrp}</span>
                      {product.price && (
                        <span className="text-emerald-700 font-bold text-xs">B2B: ₹{product.price}</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-[#0369A1] font-semibold text-[11px]">B2B Tender Pack</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#0284C7] group-hover:translate-x-0.5 transition-transform text-[11px] font-bold">
                    Details →
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuoteModal(product.name);
                    }}
                    className="bg-[#E0F2FE] hover:bg-[#0284C7] text-[#0284C7] hover:text-white px-2 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More & Go to Products Page */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          {visibleCount < filteredProducts.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 15)}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] font-semibold text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs"
            >
              <span>Load More Products ({filteredProducts.length - visibleCount} remaining)</span>
            </button>
          )}

          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm px-7 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm shadow-[#0284C7]/20"
          >
            <span>View Dedicated Products Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
