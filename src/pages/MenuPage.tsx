import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { MenuCategoryId, MenuItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { ProductCard } from '../components/ProductCard';

interface MenuPageProps {
  activeCategory: MenuCategoryId;
  onSelectCategory: (cat: MenuCategoryId) => void;
  onQuickAdd: (item: MenuItem) => void;
  onCustomize: (item: MenuItem) => void;
}

export function MenuPage({
  activeCategory,
  onSelectCategory,
  onQuickAdd,
  onCustomize,
}: MenuPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryMeta =
    activeCategory === 'all'
      ? null
      : MENU_CATEGORIES.find((c) => c.id === activeCategory) || null;

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-[#0D4A2A] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8A817]">
            HIGHGEE Foods · Complete Nigerian Catalogue
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-balance">
                Explore Our Nigerian Menu
              </h1>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                Browse freshly prepared rice dishes, traditional swallows, rich Nigerian soups,
                special delicacies, proteins, snacks, and chilled drinks. Add any item to your cart
                and complete your order directly via WhatsApp.
              </p>
            </div>
            <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm">
              <span className="font-bold text-[#E8A817] block">ORDER TODAY, PAY ON DELIVERY.</span>
              <span className="text-white/80">All orders confirmed via WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Controls */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3.5">
          {/* Search Bar + Result Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-[#5B665E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Jollof rice, Egusi, Pounded Yam, Turkey, Samosa, Zobo..."
                aria-label="Search Nigerian food menu"
                className="w-full pl-10 pr-10 py-2.5 min-h-[42px] rounded-xl border border-black/15 bg-[#FAF9F6] text-sm text-[#141A16] placeholder:text-[#78827B] focus:outline-none focus:border-[#0D4A2A] focus:bg-white"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B665E] hover:text-[#141A16] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#4A554E] tabular-nums">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#0D4A2A]" />
              <span>
                Showing <strong className="text-[#141A16]">{filteredItems.length}</strong>{' '}
                {filteredItems.length === 1 ? 'dish' : 'dishes'}
              </span>
            </div>
          </div>

          {/* Clickable Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => onSelectCategory('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0D4A2A] text-white'
                  : 'bg-[#F3F1EC] text-[#28332C] hover:bg-[#0D4A2A]/10'
              }`}
            >
              All Categories ({MENU_ITEMS.length})
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#0D4A2A] text-white'
                      : 'bg-[#F3F1EC] text-[#28332C] hover:bg-[#0D4A2A]/10'
                  }`}
                >
                  {cat.code}. {cat.shortLabel}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Category Banner & Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {activeCategoryMeta && (
          <div className="p-5 rounded-2xl bg-white border border-[#0D4A2A]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h2 className="font-display text-2xl font-semibold text-[#141A16]">
                {activeCategoryMeta.code}. {activeCategoryMeta.label}
              </h2>
              <p className="text-sm text-[#4A554E]">{activeCategoryMeta.description}</p>
            </div>
            {activeCategoryMeta.id === 'proteins' && (
              <p className="text-xs font-semibold text-[#0D4A2A] max-w-xs">
                Order proteins standalone here, or click Customise on any meal to add them.
              </p>
            )}
          </div>
        )}

        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-black/8 space-y-4 px-6">
            <h3 className="font-display text-xl font-semibold text-[#141A16]">
              No matching dishes found
            </h3>
            <p className="text-sm text-[#5B665E] max-w-md mx-auto">
              We couldn&apos;t find &ldquo;{searchQuery}&rdquo; in{' '}
              {activeCategoryMeta ? activeCategoryMeta.label : 'the menu'}. Try another keyword or
              view all categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#0D4A2A] text-white text-sm font-semibold hover:bg-[#08331D] cursor-pointer"
            >
              Reset Menu Filters
            </button>
          </div>
        ) : activeCategory === 'all' && !searchQuery.trim() ? (
          // Grouped by Category A - G for effortless discovery
          <div className="space-y-14">
            {MENU_CATEGORIES.map((cat) => {
              const catItems = filteredItems.filter((item) => item.category === cat.id);
              return (
                <section key={cat.id} className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-black/10">
                    <div>
                      <p className="text-xs font-semibold text-[#0D4A2A] uppercase tracking-wider">
                        Category {cat.code}
                      </p>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#141A16]">
                        {cat.label}
                      </h2>
                    </div>
                    <p className="text-sm text-[#5B665E] max-w-md">{cat.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catItems.map((item) => (
                      <ProductCard
                        key={item.id}
                        item={item}
                        onQuickAdd={onQuickAdd}
                        onCustomize={onCustomize}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onQuickAdd={onQuickAdd}
                onCustomize={onCustomize}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
