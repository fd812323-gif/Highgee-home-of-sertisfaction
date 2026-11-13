import { useState } from 'react';
import { Check, Minus, Plus, X } from 'lucide-react';
import { MenuItem } from '../types';
import { COMBINATION_ADDON_OPTIONS, PROTEIN_ADDON_OPTIONS } from '../data/menuData';
import { ResilientImage } from './ResilientImage';

interface FoodCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onConfirmAdd: (payload: {
    item: MenuItem;
    quantity: number;
    selectedProteins: string[];
    additionalCombinations: string[];
    specialInstructions: string;
  }) => void;
}

export function FoodCustomizerModal({ item, onClose, onConfirmAdd }: FoodCustomizerModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedProteins, setSelectedProteins] = useState<string[]>([]);
  const [selectedCombos, setSelectedCombos] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');

  if (!item) return null;

  const toggleProtein = (protein: string) => {
    setSelectedProteins((prev) =>
      prev.includes(protein) ? prev.filter((p) => p !== protein) : [...prev, protein]
    );
  };

  const toggleCombo = (combo: string) => {
    setSelectedCombos((prev) =>
      prev.includes(combo) ? prev.filter((c) => c !== combo) : [...prev, combo]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmAdd({
      item,
      quantity,
      selectedProteins,
      additionalCombinations: selectedCombos,
      specialInstructions: instructions.trim(),
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-title"
    >
      <div className="w-full sm:max-w-2xl max-h-[92vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-black/8">
          <div className="min-w-0">
            <p className="text-xs font-medium text-[#0D4A2A] truncate">{item.categoryLabel}</p>
            <h3 id="customizer-title" className="font-display text-xl font-semibold text-[#141A16] truncate">
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close customizer"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3C463F] hover:bg-black/5 cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto px-6 py-5 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-full sm:w-36 h-28 rounded-xl overflow-hidden bg-[#F3F1EC] shrink-0">
              <ResilientImage src={item.image} alt={item.name} />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[#4A554E] leading-relaxed">{item.description}</p>
              <p className="text-xs font-semibold text-[#0D4A2A]">
                ORDER TODAY, PAY ON DELIVERY.
              </p>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between py-3 border-y border-black/8">
            <span className="text-sm font-semibold text-[#141A16]">Quantity</span>
            <div className="inline-flex items-center gap-3 bg-[#F6F5F0] rounded-lg p-1 border border-black/8">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="w-9 h-9 rounded-md flex items-center justify-center bg-white text-[#141A16] hover:bg-[#0D4A2A] hover:text-white transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center text-sm font-bold tabular-nums">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="w-9 h-9 rounded-md flex items-center justify-center bg-white text-[#141A16] hover:bg-[#0D4A2A] hover:text-white transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Proteins */}
          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <h4 className="text-sm font-semibold text-[#141A16]">Select Protein(s) (Optional)</h4>
              <span className="text-xs text-[#5B665E] tabular-nums">
                {selectedProteins.length} selected
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PROTEIN_ADDON_OPTIONS.map((protein) => {
                const active = selectedProteins.includes(protein);
                return (
                  <button
                    key={protein}
                    type="button"
                    onClick={() => toggleProtein(protein)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium text-left flex items-center justify-between gap-2 border transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#0D4A2A] text-white border-[#0D4A2A]'
                        : 'bg-[#FAF9F6] text-[#28332C] border-black/10 hover:border-[#0D4A2A]/40'
                    }`}
                  >
                    <span className="truncate">{protein}</span>
                    {active && <Check className="w-3.5 h-3.5 shrink-0 text-[#E8A817]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Additional Food Combinations */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#141A16]">
              Additional Food Combinations (Optional)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {COMBINATION_ADDON_OPTIONS.map((combo) => {
                const active = selectedCombos.includes(combo);
                return (
                  <button
                    key={combo}
                    type="button"
                    onClick={() => toggleCombo(combo)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium text-left flex items-center justify-between gap-2 border transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#0D4A2A] text-white border-[#0D4A2A]'
                        : 'bg-[#FAF9F6] text-[#28332C] border-black/10 hover:border-[#0D4A2A]/40'
                    }`}
                  >
                    <span className="truncate">{combo}</span>
                    {active && <Check className="w-3.5 h-3.5 shrink-0 text-[#E8A817]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2">
            <label htmlFor="meal-instructions" className="block text-sm font-semibold text-[#141A16]">
              Special Instructions
            </label>
            <textarea
              id="meal-instructions"
              rows={2}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="E.g., Extra spicy pepper sauce, pack soup separately, less oil..."
              className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm text-[#141A16] placeholder:text-[#78827B] focus:outline-none focus:border-[#0D4A2A]"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-black/15 text-sm font-medium text-[#28332C] hover:bg-black/5 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#0D4A2A] text-white text-sm font-semibold hover:bg-[#08331D] transition-colors cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
