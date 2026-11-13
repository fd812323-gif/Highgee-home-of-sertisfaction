import { useEffect, useState } from 'react';
import { CartItem, MenuCategoryId, MenuItem, PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartDrawer } from './components/CartDrawer';
import { FoodCustomizerModal } from './components/FoodCustomizerModal';
import { SpaBookingModal } from './components/SpaBookingModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { HireUsPage } from './pages/HireUsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { PrivacyPage } from './pages/PrivacyPage';

const CART_STORAGE_KEY = 'highgee_cart_v1';

function readInitialPage(): PageRoute {
  const hash = window.location.hash.replace('#', '') as PageRoute;
  if (hash === 'menu' || hash === 'hire-us' || hash === 'about' || hash === 'privacy') {
    return hash;
  }
  return 'home';
}

function readStoredCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(readInitialPage);
  const [activeMenuCategory, setActiveMenuCategory] = useState<MenuCategoryId>('all');
  const [cart, setCart] = useState<CartItem[]>(readStoredCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [spaModalState, setSpaModalState] = useState<{ open: boolean; service?: string }>({
    open: false,
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage quota errors
    }
  }, [cart]);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(readInitialPage());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, category?: MenuCategoryId) => {
    if (category) {
      setActiveMenuCategory(category);
    }
    setCurrentPage(page);
    window.history.replaceState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickAdd = (item: MenuItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (c) =>
          c.menuItemId === item.id &&
          c.selectedProteins.length === 0 &&
          c.additionalCombinations.length === 0 &&
          !c.specialInstructions
      );
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [
        ...prev,
        {
          cartItemId: `${item.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          menuItemId: item.id,
          name: item.name,
          categoryLabel: item.categoryLabel,
          image: item.image,
          quantity: 1,
          selectedProteins: [],
          additionalCombinations: [],
          specialInstructions: '',
        },
      ];
    });
  };

  const handleConfirmCustomizedAdd = (payload: {
    item: MenuItem;
    quantity: number;
    selectedProteins: string[];
    additionalCombinations: string[];
    specialInstructions: string;
  }) => {
    const { item, quantity, selectedProteins, additionalCombinations, specialInstructions } = payload;
    setCart((prev) => [
      ...prev,
      {
        cartItemId: `${item.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        menuItemId: item.id,
        name: item.name,
        categoryLabel: item.categoryLabel,
        image: item.image,
        quantity,
        selectedProteins,
        additionalCombinations,
        specialInstructions,
      },
    ]);
  };

  const handleUpdateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
    );
  };

  const handleUpdateItemDetails = (
    cartItemId: string,
    updates: Partial<Pick<CartItem, 'selectedProteins' | 'additionalCombinations' | 'specialInstructions'>>
  ) => {
    setCart((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, ...updates } : item))
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#141A16]">
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onQuickAdd={handleQuickAdd}
            onCustomize={(item) => setCustomizingItem(item)}
            onOpenSpaBooking={(service) => setSpaModalState({ open: true, service })}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            activeCategory={activeMenuCategory}
            onSelectCategory={setActiveMenuCategory}
            onQuickAdd={handleQuickAdd}
            onCustomize={(item) => setCustomizingItem(item)}
          />
        )}

        {currentPage === 'hire-us' && <HireUsPage />}

        {currentPage === 'about' && <AboutUsPage onNavigate={handleNavigate} />}

        {currentPage === 'privacy' && <PrivacyPage />}
      </main>

      <Footer onNavigate={(page) => handleNavigate(page)} />

      <FloatingWhatsApp />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onUpdateItemDetails={handleUpdateItemDetails}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCart([])}
        onNavigate={(page) => handleNavigate(page)}
      />

      {customizingItem && (
        <FoodCustomizerModal
          key={customizingItem.id}
          item={customizingItem}
          onClose={() => setCustomizingItem(null)}
          onConfirmAdd={handleConfirmCustomizedAdd}
        />
      )}

      {spaModalState.open && (
        <SpaBookingModal
          key={spaModalState.service || 'default-spa'}
          isOpen={spaModalState.open}
          initialService={spaModalState.service}
          onClose={() => setSpaModalState({ open: false })}
        />
      )}
    </div>
  );
}
