import React from 'react';
import { Link } from 'react-router-dom';
import { TRUST_BAR_ITEMS } from '../data/mockData';

export const TrustBar: React.FC = () => {
  return (
    <div
      id="trust-bar"
      className="bg-[#0284C7] text-white/95 py-2.5 border-b border-[#BAE6FD]/30"
      role="region"
      aria-label="Trust credentials"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs tracking-[0.06em] font-medium font-sans-ui">
        {TRUST_BAR_ITEMS.map((item, idx) => (
          <React.Fragment key={item}>
            <Link
              to="/certificates"
              className="inline-flex items-center gap-1.5 whitespace-nowrap hover:text-white hover:underline transition-all group"
              title="Inspect regulatory credentials & certificates"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A451] group-hover:scale-125 transition-transform" />
              <span>{item}</span>
            </Link>
            {idx < TRUST_BAR_ITEMS.length - 1 && (
              <span className="hidden lg:inline text-white/30">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
