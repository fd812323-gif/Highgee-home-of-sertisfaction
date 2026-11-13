export type PageRoute = 'home' | 'menu' | 'hire-us' | 'about' | 'privacy';

export type MenuCategoryId =
  | 'all'
  | 'rice'
  | 'swallow'
  | 'soups'
  | 'special'
  | 'proteins'
  | 'snacks'
  | 'drinks';

export interface MenuCategoryMeta {
  id: Exclude<MenuCategoryId, 'all'>;
  code: string;
  label: string;
  shortLabel: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategoryId, 'all'>;
  categoryLabel: string;
  description: string;
  image: string;
  supportsProteinPairing?: boolean;
}

export interface CartItem {
  cartItemId: string;
  menuItemId: string;
  name: string;
  categoryLabel: string;
  image: string;
  quantity: number;
  selectedProteins: string[];
  additionalCombinations: string[];
  specialInstructions: string;
}

export interface SpaService {
  id: string;
  title: string;
  description: string;
  focus: string;
}
