import { useState } from 'react';
import { Check, Plus, SlidersHorizontal } from 'lucide-react';
import { MenuItem } from '../types';
import { ResilientImage } from './ResilientImage';

interface ProductCardProps {
  item: MenuItem;
  onQuickAdd: (item: MenuItem) => void;
  onCustomize: (item: MenuItem) => void;
}

export function ProductCard({ item, onQuickAdd, onCustomize }: ProductCardProps) {
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = () => {
    onQuickAdd(item);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article className="group bg-white rounded-2xl border border-black/8 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(13,74,42,0.08)]">
      <div className="relative aspect-[4/3] bg-[#F3F1EC] overflow-hidden">
        <ResilientImage
          src={item.image}
          alt={item.name}
          fallbackLabel={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-1.5">
          <p className="text-xs font-medium text-[#0D4A2A]/80 tracking-wide">
            {item.categoryLabel}
          </p>
          <h3 className="text-base font-semibold text-[#141A16] leading-snug">{item.name}</h3>
          <p className="text-sm text-[#4A554E] leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="pt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`flex-1 py-2.5 px-4 min-h-[40px] rounded-xl text-xs font-semibold tracking-wide inline-flex items-center justify-center gap-1.5 transition-colors duration-150 cursor-pointer whitespace-nowrap ${
              justAdded
                ? 'bg-[#E8A817] text-[#08331D]'
                : 'bg-[#0D4A2A] text-white hover:bg-[#08331D]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 shrink-0" />
                <span>ADDED TO CART</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 shrink-0" />
                <span>ADD TO CART</span>
              </>
            )}
          </button>

          {item.supportsProteinPairing && (
            <button
              type="button"
              onClick={() => onCustomize(item)}
              aria-label={`Customise proteins and notes for ${item.name}`}
              title="Add Protein / Customise"
              className="px-3 py-2.5 min-h-[40px] rounded-xl border border-[#0D4A2A]/20 text-[#0D4A2A] hover:bg-[#0D4A2A]/6 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Customise</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
