import { useState } from 'react';
import { Minus, Plus, ShoppingBag, Trash2, X, Edit3, Check } from 'lucide-react';
import { CartItem, PageRoute } from '../types';
import { buildWhatsAppUrl } from '../data/assets';
import { COMBINATION_ADDON_OPTIONS, PROTEIN_ADDON_OPTIONS } from '../data/menuData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './BrandMark';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, quantity: number) => void;
  onUpdateItemDetails: (
    cartItemId: string,
    updates: Partial<Pick<CartItem, 'selectedProteins' | 'additionalCombinations' | 'specialInstructions'>>
  ) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onNavigate: (page: PageRoute) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onUpdateItemDetails,
  onRemoveItem,
  onClearCart,
  onNavigate,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [formError, setFormError] = useState('');
  const [orderDispatchedUrl, setOrderDispatchedUrl] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const buildOrderMessage = () => {
    const lines: string[] = [
      'HIGHGEE FOOD ORDER',
      '',
      `Customer Name: ${customerName.trim()}`,
      `Phone Number: ${phoneNumber.trim()}`,
      `Delivery Address: ${deliveryAddress.trim()}`,
      '',
      'ORDER DETAILS:',
    ];

    items.forEach((item, index) => {
      lines.push(`${index + 1}. ${item.name}`);
      lines.push(`- Quantity: ${item.quantity}`);
      lines.push(
        `- Selected protein: ${
          item.selectedProteins.length > 0 ? item.selectedProteins.join(', ') : 'None'
        }`
      );
      lines.push(
        `- Additional food combinations: ${
          item.additionalCombinations.length > 0
            ? item.additionalCombinations.join(', ')
            : 'None'
        }`
      );
      lines.push(
        `- Special instructions: ${
          item.specialInstructions.trim() ? item.specialInstructions.trim() : 'None'
        }`
      );
      lines.push('');
    });

    lines.push('Payment Method: PAY ON DELIVERY.');
    lines.push('');
    lines.push('Please confirm my order and delivery availability.');

    return lines.join('\n');
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    if (!customerName.trim() || !phoneNumber.trim() || !deliveryAddress.trim()) {
      setFormError('Please enter your name, phone number, and delivery address to continue.');
      return;
    }

    setFormError('');
    const url = buildWhatsAppUrl(buildOrderMessage());
    setOrderDispatchedUrl(url);

    // Open WhatsApp via synthetic anchor element to avoid window.open restrictions
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/55 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      <div className="w-full max-w-lg bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#0D4A2A]" />
            <h2 id="cart-drawer-title" className="font-display text-xl font-semibold text-[#141A16]">
              Your Order Cart
            </h2>
            <span className="text-xs font-semibold text-[#0D4A2A] tabular-nums">
              ({totalCount} {totalCount === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3C463F] hover:bg-black/5 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Payment Policy Strip */}
        <div className="px-6 py-2.5 bg-[#0D4A2A] text-white flex items-center justify-between gap-2 text-xs font-semibold tracking-wide">
          <span className="text-[#E8A817]">ORDER TODAY, PAY ON DELIVERY.</span>
          <span className="text-white/80">WhatsApp Checkout</span>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#F3F1EC] flex items-center justify-center text-[#0D4A2A]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display text-lg font-semibold text-[#141A16]">
                  Your cart is currently empty
                </h3>
                <p className="text-sm text-[#5B665E] max-w-xs mx-auto">
                  Explore our Nigerian meals, soups, swallows, proteins, and snacks to start your
                  order.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigate('menu');
                }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0D4A2A] text-white text-sm font-semibold hover:bg-[#08331D] transition-colors cursor-pointer"
              >
                Explore Our Menu
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => {
                  const isEditing = editingItemId === item.cartItemId;
                  return (
                    <div
                      key={item.cartItemId}
                      className="p-4 rounded-xl border border-black/10 bg-[#FAF9F6] space-y-3"
                    >
                      <div className="flex gap-3.5">
                        <div className="w-18 h-18 rounded-lg overflow-hidden bg-white shrink-0">
                          <ResilientImage src={item.image} alt={item.name} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-[11px] font-medium text-[#5B665E]">
                                {item.categoryLabel}
                              </p>
                              <h4 className="text-sm font-semibold text-[#141A16] leading-snug">
                                {item.name}
                              </h4>
                            </div>
                            <button
                              type="button"
                              onClick={() => onRemoveItem(item.cartItemId)}
                              aria-label={`Remove ${item.name} from cart`}
                              className="p-1.5 rounded-md text-[#6E7770] hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="mt-2 space-y-1 text-xs text-[#4A554E]">
                            <p>
                              <span className="font-semibold text-[#141A16]">Proteins:</span>{' '}
                              {item.selectedProteins.length > 0
                                ? item.selectedProteins.join(', ')
                                : 'None selected'}
                            </p>
                            {item.additionalCombinations.length > 0 && (
                              <p>
                                <span className="font-semibold text-[#141A16]">Combinations:</span>{' '}
                                {item.additionalCombinations.join(', ')}
                              </p>
                            )}
                            {item.specialInstructions && (
                              <p>
                                <span className="font-semibold text-[#141A16]">Notes:</span>{' '}
                                {item.specialInstructions}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quantity + Edit Row */}
                      <div className="flex items-center justify-between pt-2 border-t border-black/6">
                        <div className="inline-flex items-center gap-2 bg-white rounded-lg p-1 border border-black/10">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                            aria-label={`Decrease quantity for ${item.name}`}
                            className="w-8 h-8 rounded flex items-center justify-center text-[#141A16] hover:bg-[#0D4A2A] hover:text-white transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                            aria-label={`Increase quantity for ${item.name}`}
                            className="w-8 h-8 rounded flex items-center justify-center text-[#141A16] hover:bg-[#0D4A2A] hover:text-white transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setEditingItemId(isEditing ? null : item.cartItemId)
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D4A2A] hover:underline cursor-pointer"
                        >
                          {isEditing ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Done Editing
                            </>
                          ) : (
                            <>
                              <Edit3 className="w-3.5 h-3.5" />
                              Edit Proteins / Notes
                            </>
                          )}
                        </button>
                      </div>

                      {/* Inline Edit Panel */}
                      {isEditing && (
                        <div className="pt-3 border-t border-black/10 space-y-3">
                          <div>
                            <p className="text-xs font-semibold text-[#141A16] mb-1.5">
                              Select Proteins
                            </p>
                            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                              {PROTEIN_ADDON_OPTIONS.map((protein) => {
                                const selected = item.selectedProteins.includes(protein);
                                return (
                                  <button
                                    key={protein}
                                    type="button"
                                    onClick={() => {
                                      const next = selected
                                        ? item.selectedProteins.filter((p) => p !== protein)
                                        : [...item.selectedProteins, protein];
                                      onUpdateItemDetails(item.cartItemId, {
                                        selectedProteins: next,
                                      });
                                    }}
                                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium border cursor-pointer ${
                                      selected
                                        ? 'bg-[#0D4A2A] text-white border-[#0D4A2A]'
                                        : 'bg-white text-[#28332C] border-black/12'
                                    }`}
                                  >
                                    {protein}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-[#141A16] mb-1.5">
                              Additional Combinations
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {COMBINATION_ADDON_OPTIONS.map((combo) => {
                                const selected = item.additionalCombinations.includes(combo);
                                return (
                                  <button
                                    key={combo}
                                    type="button"
                                    onClick={() => {
                                      const next = selected
                                        ? item.additionalCombinations.filter((c) => c !== combo)
                                        : [...item.additionalCombinations, combo];
                                      onUpdateItemDetails(item.cartItemId, {
                                        additionalCombinations: next,
                                      });
                                    }}
                                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium border cursor-pointer ${
                                      selected
                                        ? 'bg-[#0D4A2A] text-white border-[#0D4A2A]'
                                        : 'bg-white text-[#28332C] border-black/12'
                                    }`}
                                  >
                                    {combo}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor={`notes-${item.cartItemId}`}
                              className="block text-xs font-semibold text-[#141A16] mb-1"
                            >
                              Special Instructions
                            </label>
                            <input
                              id={`notes-${item.cartItemId}`}
                              type="text"
                              value={item.specialInstructions}
                              onChange={(e) =>
                                onUpdateItemDetails(item.cartItemId, {
                                  specialInstructions: e.target.value,
                                })
                              }
                              placeholder="Any cooking or packaging preference..."
                              className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-xs text-[#141A16] focus:outline-none focus:border-[#0D4A2A]"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-xs font-medium text-[#6E7770] hover:text-red-700 cursor-pointer"
                >
                  Clear all items
                </button>
              </div>

              {/* Delivery Form */}
              <form
                id="whatsapp-checkout-form"
                onSubmit={handleCheckoutSubmit}
                className="p-4 rounded-xl border border-[#0D4A2A]/15 bg-white space-y-3.5"
              >
                <div className="space-y-0.5">
                  <h3 className="text-sm font-semibold text-[#141A16]">Delivery Details</h3>
                  <p className="text-xs text-[#5B665E]">
                    No online payment required. Payment is collected on delivery.
                  </p>
                </div>

                <div>
                  <label htmlFor="cart-name" className="block text-xs font-medium text-[#28332C] mb-1">
                    Customer Name *
                  </label>
                  <input
                    id="cart-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm text-[#141A16] focus:outline-none focus:border-[#0D4A2A]"
                  />
                </div>

                <div>
                  <label htmlFor="cart-phone" className="block text-xs font-medium text-[#28332C] mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="cart-phone"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 0803 000 0000"
                    className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm text-[#141A16] focus:outline-none focus:border-[#0D4A2A]"
                  />
                </div>

                <div>
                  <label htmlFor="cart-address" className="block text-xs font-medium text-[#28332C] mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    id="cart-address"
                    required
                    rows={2}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Street address, landmark, and area"
                    className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm text-[#141A16] focus:outline-none focus:border-[#0D4A2A]"
                  />
                </div>

                {formError && (
                  <p className="text-xs font-medium text-red-700" role="alert">
                    {formError}
                  </p>
                )}

                {orderDispatchedUrl && (
                  <div className="p-3 rounded-lg bg-[#0D4A2A]/8 border border-[#0D4A2A]/20 text-xs text-[#0D4A2A] space-y-1.5">
                    <p className="font-semibold">Your order message is ready for WhatsApp.</p>
                    <a
                      href={orderDispatchedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-bold underline"
                    >
                      Tap here to open WhatsApp directly
                    </a>
                  </div>
                )}
              </form>
            </>
          )}
        </div>

        {/* Footer Checkout CTA */}
        {items.length > 0 && (
          <div className="p-5 border-t border-black/10 bg-white space-y-2">
            <button
              type="submit"
              form="whatsapp-checkout-form"
              className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1FB858] text-[#052411] font-bold text-sm flex items-center justify-center gap-2.5 shadow-sm transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" monochrome />
              <span>CHECKOUT VIA WHATSAPP</span>
            </button>
            <p className="text-center text-[11px] font-medium text-[#5B665E]">
              Payment Method: PAY ON DELIVERY · Confirm availability on WhatsApp
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
