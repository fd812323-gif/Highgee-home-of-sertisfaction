import { MenuCategoryMeta, MenuItem, SpaService } from '../types';
import { BRAND_IMAGES } from './assets';

export const MENU_CATEGORIES: MenuCategoryMeta[] = [
  {
    id: 'rice',
    code: 'A',
    label: 'Rice and rice combinations',
    shortLabel: 'Rice & Combos',
    description: 'Smoky party Jollof, fragrant fried rice, Ofada, coconut rice, and signature pairings.',
  },
  {
    id: 'swallow',
    code: 'B',
    label: 'Swallow and traditional meals',
    shortLabel: 'Swallows',
    description: 'Smooth, freshly prepared Nigerian swallows crafted to pair with rich traditional soups.',
  },
  {
    id: 'soups',
    code: 'C',
    label: 'Nigerian soups',
    shortLabel: 'Nigerian Soups',
    description: 'Slow-simmered regional Nigerian soups cooked with authentic spices, palm oil, and stock.',
  },
  {
    id: 'special',
    code: 'D',
    label: 'Nigerian special meals',
    shortLabel: 'Special Meals',
    description: 'Homemade porridge, spicy pepper soups, Abacha, Nkwobi, Moi Moi, Gizdodo, and pasta.',
  },
  {
    id: 'proteins',
    code: 'E',
    label: 'Proteins and extras',
    shortLabel: 'Proteins & Extras',
    description: 'Order tender meats, whole fish, and seafood separately or add them to any meal.',
  },
  {
    id: 'snacks',
    code: 'F',
    label: 'Snacks and small chops',
    shortLabel: 'Snacks & Chops',
    description: 'Crispy HIGHGEE Plantain Chips, spiced beef snacks, pastries, and party small chops.',
  },
  {
    id: 'drinks',
    code: 'G',
    label: 'Drinks',
    shortLabel: 'Drinks',
    description: 'Chilled Zobo, classic Chapman, Kunu, fresh fruit juices, smoothies, and refreshments.',
  },
];

export const PROTEIN_ADDON_OPTIONS: string[] = [
  'Grilled Chicken',
  'Fried Chicken',
  'Stewed Chicken',
  'Turkey',
  'Fried Turkey',
  'Beef',
  'Goat Meat',
  'Cow Meat',
  'Assorted Meat',
  'Shaki',
  'Ponmo',
  'Kpomo',
  'Cow Leg',
  'Fish',
  'Grilled Fish',
  'Fried Fish',
  'Titus Fish',
  'Croaker Fish',
  'Catfish',
  'Stockfish',
  'Smoked Fish',
  'Boiled Egg',
  'Fried Egg',
  'Sausage',
  'Prawns',
  'Shrimps',
  'Gizzard',
  'Snail',
];

export const COMBINATION_ADDON_OPTIONS: string[] = [
  'Fried Plantain (Dodo)',
  'Moi Moi',
  'Coleslaw',
  'Extra Stew / Pepper Sauce',
  'Beans',
  'Boiled Egg',
];

const RICE_ITEMS: Array<[string, string]> = [
  ['Jollof Rice', 'Classic West African tomato-infused rice simmered in aromatic thyme, bay leaf, and rich stock.'],
  ['Nigerian Fried Rice', 'Fragrant golden long-grain rice stir-fried with sweet corn, crisp carrots, green peas, and liver.'],
  ['White Rice', 'Fluffy steamed long-grain parboiled rice ready to pair with stew, soup, or grilled proteins.'],
  ['Coconut Rice', 'Richly simmered rice cooked in fresh creamy coconut milk with herbs and gentle spices.'],
  ['Native Rice', 'Traditional palm-oil rice infused with locust beans (iru), smoked fish, and indigenous herbs.'],
  ['Ofada Rice', 'Locally harvested aromatic Nigerian brown rice served ready for classic Ayamase or Ofada sauce.'],
  ['Rice and Beans', 'Hearty, wholesome blend of tender honey beans and fluffy white rice for satisfying nutrition.'],
  ['Rice and Stew', 'Steamed white rice generously paired with rich, slow-fried Nigerian tomato and pepper stew.'],
  ['Basmati Rice', 'Extra-long fragrant basmati grains steamed light and delicate for refined Nigerian pairings.'],
  ['Party Jollof Rice', 'Authentic smoky firewood-style Nigerian party Jollof with deep roasted pepper flavour.'],
  ['Special Fried Rice', 'Loaded Nigerian fried rice enriched with seasoned prawns, mixed vegetables, and savoury spices.'],
  ['Vegetable Rice', 'Colourful steamed rice tossed with fresh leafy greens, bell peppers, and mild garden seasoning.'],
  ['Rice with Plantain', 'Your choice of savoury rice paired with sweet, golden caramelised fried plantain slices.'],
  ['Rice with Beans and Plantain', 'Complete Nigerian comfort plate combining steamed rice, stewed beans, and sweet fried plantain.'],
  ['Jollof Rice with Chicken', 'Smoky Nigerian Jollof rice served alongside seasoned, tender roasted or fried chicken.'],
  ['Fried Rice with Chicken', 'Flavourful vegetable fried rice accompanied by succulent, golden spiced chicken.'],
  ['Jollof Rice with Turkey', 'Signature smoky Jollof rice paired with a generous cut of seasoned, crispy-skinned turkey.'],
  ['Rice with Beef and Stew', 'Fluffy white rice served with rich Nigerian pepper stew and tender slow-braised beef.'],
];

const SWALLOW_ITEMS: Array<[string, string]> = [
  ['Eba', 'Smoothly turned golden or white garri swallow with a firm, clean texture for rich soups.'],
  ['Pounded Yam', 'Silky, stretchy hand-pounded style yam swallow crafted fresh for traditional soups.'],
  ['Amala', 'Velvety roasted yam flour swallow loved for its deep earthy flavour with Ewedu and Gbegiri.'],
  ['Fufu', 'Soft, smooth fermented cassava swallow prepared cleanly for comforting Nigerian soup bowls.'],
  ['Semo', 'Light, golden semolina swallow whipped smooth to pair effortlessly with any soup.'],
  ['Wheat', 'Wholesome whole-wheat swallow prepared soft and smooth for a lighter traditional meal.'],
  ['Starch', 'Authentic Delta-style golden cassava starch swallow with signature elasticity for Banga and Owo.'],
  ['Tuwo Shinkafa', 'Soft mashed northern Nigerian rice swallow crafted to complement rich groundnut or okra soups.'],
  ['Tuwo Masara', 'Smooth, comforting cornmeal swallow prepared fresh to pair with traditional Northern soups.'],
  ['Plantain Fufu', 'Nutritious unripe plantain flour swallow whipped smooth for a wholesome traditional pairing.'],
];

const SOUP_ITEMS: Array<[string, string]> = [
  ['Egusi Soup', 'Rich melon seed soup cooked with leafy spinach, palm oil, crayfish, and traditional seasoning.'],
  ['Ogbono Soup', 'Velvety wild mango seed draw soup simmered with aromatic crayfish and authentic local spices.'],
  ['Okra Soup', 'Freshly chopped okra simmered in flavourful stock with palm oil, locust beans, and spice.'],
  ['Efo Riro', 'Vibrant Yoruba spinach stew sautéed in rich red bell pepper sauce, locust beans, and palm oil.'],
  ['Vegetable Soup', 'Hearty Nigerian green vegetable medley cooked rich with palm oil and roasted pepper base.'],
  ['Bitterleaf Soup', 'Traditional Igbo Ofe Onugbu thickened with cocoyam and steeped in washed bitterleaf aroma.'],
  ['Oha Soup', 'Delicate Eastern delicacy made with tender oha leaves, cocoyam thickener, and uziza spice.'],
  ['Banga Soup', 'Fragrant palm nut fruit soup infused with bevelled spices, oburunbebe stick, and rich stock.'],
  ['Afang Soup', 'Deeply nourishing Cross River soup blending pounded afang leaves with tender waterleaf.'],
  ['Edikang Ikong', 'Generous Calabar vegetable soup packed with fluted pumpkin (ugwu) and fresh waterleaf.'],
  ['Groundnut Soup', 'Creamy roasted peanut soup slow-cooked with aromatic herbs, crayfish, and warm pepper.'],
  ['Nsala Soup', 'Aromatic white pepper soup thickened with yam and scented with utazi leaves and crayfish.'],
  ['Gbegiri', 'Silky, slow-simmered peeled honey bean soup seasoned traditionally for Amala pairings.'],
  ['Ewedu', 'Smooth, vibrant jute leaf draw soup whisked light with locust beans for classic Abula bowls.'],
  ['Owo Soup', 'Rich Benin-style palm oil and tomato thickened soup with unique native spices.'],
  ['Native Palm Oil Soup', 'Traditional unrefined red palm oil soup simmered with local herbs and smoky dried fish notes.'],
  ['Seafood Okra', 'Lavish okra draw soup brimming with fresh prawns, calamari, fish, and coastal spices.'],
  ['White Soup', 'Clean, palm-oil-free traditional Ofe Nsala bursting with aromatic uziza and yam richness.'],
];

const SPECIAL_ITEMS: Array<[string, string]> = [
  ['Beans and Plantain', 'Honey-sweet stewed brown beans paired with soft, caramelised golden fried plantain.'],
  ['Beans and Bread', 'Richly stewed Nigerian ewa agoyin-style or palm-oil beans paired with soft fresh bread.'],
  ['Yam Porridge', 'Creamy mashed puna yam simmered in rich pepper sauce, palm oil, crayfish, and greens.'],
  ['Plantain Porridge', 'Tender ripe and unripe plantain chunks cooked in aromatic palm oil broth with fresh vegetables.'],
  ['Vegetable Yam', 'Steamed yam cubes folded into vibrant sautéed greens, onions, and spicy pepper sauce.'],
  ['Fried Yam and Sauce', 'Crisp golden yam batons served alongside bold, smoky Nigerian tomato and egg pepper sauce.'],
  ['Boiled Yam and Egg Sauce', 'Tender boiled white yam slices paired with fluffy scrambled eggs in fresh tomato-pepper sauce.'],
  ['Fried Plantain and Egg', 'Sweet golden fried plantain served with savoury, peppered Nigerian omelette.'],
  ['Moi Moi', 'Silky steamed black-eyed pea pudding blended with red bell peppers, onions, and spices.'],
  ['Akara', 'Light, golden crispy bean fritters whipped airy and fried fresh to order.'],
  ['Agidi', 'Cool, smooth moulded corn pudding wrapped fresh to accompany pepper soup or Moi Moi.'],
  ['Abacha', 'Authentic Eastern African salad tossed in ugba, palm oil sauce, garden eggs, and utazi leaves.'],
  ['Nkwobi', 'Richly spiced cow foot delicacy emulsified in thick palm oil, potash, and aromatic utazi.'],
  ['Isi Ewu', 'Traditional spiced goat head delicacy finished with ehuru, onions, and fresh utazi strips.'],
  ['Pepper Soup', 'Steaming, aromatic Nigerian broth infused with calabash nutmeg, uda, and fiery scotch bonnet.'],
  ['Goat Meat Pepper Soup', 'Tender slow-simmered goat cuts in fragrant, warming Nigerian pepper soup broth.'],
  ['Chicken Pepper Soup', 'Succulent chicken pieces poached in light, deeply spiced traditional pepper soup.'],
  ['Fish Pepper Soup', 'Fresh catfish or croaker simmered delicately with scent leaf and traditional pepper soup spices.'],
  ['Jollof Spaghetti', 'Savory spaghetti cooked directly in smoky Nigerian tomato, pepper, and herb reduction.'],
  ['Stir-fried Spaghetti', 'Wok-tossed spaghetti with crisp colourful vegetables, soy essence, and Nigerian spices.'],
  ['Indomie Special', 'Street-style upgraded Nigerian noodles stir-fried with peppers, green onions, and veggies.'],
  ['Nigerian Native Pasta', 'Rich palm-oil infused pasta cooked with iru, dried fish notes, scent leaf, and local peppers.'],
  ['Gizdodo', 'Irresistible medley of tender peppered chicken gizzards and sweet fried plantain in bell pepper sauce.'],
];

const PROTEIN_ITEMS: Array<[string, string]> = [
  ['Grilled Chicken', 'Herb-marinated chicken flame-grilled until smoky, juicy, and golden brown.'],
  ['Fried Chicken', 'Crisp, deeply seasoned Nigerian fried chicken cooked golden and tender inside.'],
  ['Stewed Chicken', 'Tender chicken simmered in rich tomato-pepper stew for deep flavour penetration.'],
  ['Turkey', 'Generous cut of seasoned turkey cooked tender and juicy to elevate any meal.'],
  ['Fried Turkey', 'Crispy-edged golden fried turkey glazed lightly in savoury pepper seasoning.'],
  ['Beef', 'Slow-braised lean beef cuts seasoned with onions, thyme, and traditional Nigerian spices.'],
  ['Goat Meat', 'Succulent bone-in goat meat braised rich and tender with aromatic herbs.'],
  ['Cow Meat', 'Hearty, well-seasoned cow meat cuts simmered until fork-tender.'],
  ['Assorted Meat', 'Generous traditional mix of tender beef, tripe, and cow skin cooked in spiced stock.'],
  ['Shaki', 'Cleanly prepared, slow-simmered honeycomb beef tripe with rich chewy bite.'],
  ['Ponmo', 'Tender, well-cooked Nigerian cow skin prized for soaking up soups and pepper stews.'],
  ['Kpomo', 'Plump, seasoned braised cow skin prepared soft and flavourful for soups or sides.'],
  ['Cow Leg', 'Slow-cooked gelatinous cow leg cut packed with deep marrow richness.'],
  ['Fish', 'Freshly seasoned fish cut prepared cleanly to pair with rice, swallow, or soups.'],
  ['Grilled Fish', 'Whole or cut fish char-grilled with suya-inspired herbs, garlic, and citrus zest.'],
  ['Fried Fish', 'Crisp golden pan-fried fish marinated with ginger, garlic, and pepper.'],
  ['Titus Fish', 'Rich, savoury Atlantic mackerel cooked tender in spices or crisp-fried to order.'],
  ['Croaker Fish', 'Firm, flaky fresh croaker seasoned with coastal herbs and grilled or fried cleanly.'],
  ['Catfish', 'Fresh Nigerian point-and-kill style catfish prized for pepper soups and grilling.'],
  ['Stockfish', 'Authentic cured Norwegian stockfish simmered tender for deep traditional soup umami.'],
  ['Smoked Fish', 'Wood-smoked catfish fillets adding unmistakable traditional aroma to soups and rice.'],
  ['Boiled Egg', 'Cleanly peeled farm-fresh boiled egg ready to enrich rice, Indomie, or salads.'],
  ['Fried Egg', 'Golden pan-fried egg cooked fresh to pair with plantain, yam, or noodles.'],
  ['Sausage', 'Juicy browned sausages sliced or whole as a savoury side protein.'],
  ['Prawns', 'Jumbo coastal prawns sautéed quickly in garlic, ginger, and mild chili butter.'],
  ['Shrimps', 'Tender, sweet shrimps tossed in light aromatic seasoning for rice or seafood soups.'],
  ['Gizzard', 'Peppered and crisp-fried chicken gizzards tossed in sweet onions and bell peppers.'],
  ['Snail', 'Jumbo, cleanly washed African land snails braised in rich pepper sauce and onions.'],
];

const SNACK_ITEMS: Array<[string, string]> = [
  ['HIGHGEE Plantain Chips', 'Signature crispy ripe or unripe plantain chips made with natural plantain, vegetable oil, and salt.'],
  ['Beef Snacks', 'Flavour-packed spiced Nigerian beef snacks crafted in HIGHGEE Kitchen for instant satisfaction.'],
  ['Chin Chin', 'Crunchy, lightly sweetened golden pastry cubes infused with warm nutmeg notes.'],
  ['Meat Pie', 'Flaky shortcrust pastry filled with seasoned minced beef, diced potatoes, and carrots.'],
  ['Chicken Pie', 'Golden baked buttery pastry stuffed with savoury minced chicken and sweet vegetables.'],
  ['Sausage Rolls', 'Soft, flaky golden pastry wrapped tightly around seasoned savoury sausage filling.'],
  ['Puff Puff', 'Pillow-soft, golden-brown sweet Nigerian fried dough balls served warm.'],
  ['Buns', 'Crisp-crusted, dense golden Nigerian buns with a rich nutmeg-scented crumb.'],
  ['Doughnuts', 'Light, airy ring doughnuts fried golden and dusted lightly for sweet snacking.'],
  ['Spring Rolls', 'Paper-thin crisp pastry rolls packed with seasoned shredded vegetables and herbs.'],
  ['Samosa', 'Golden triangular pastry pockets filled with spiced minced meat or savoury vegetables.'],
  ['Fish Rolls', 'Crisp fried pastry rolls generously filled with seasoned flaked mackerel.'],
  ['Scotch Eggs', 'Whole boiled egg wrapped in seasoned sausage meat, breaded, and fried golden.'],
  ['Small Chops', 'Party-ready platter combining puff puff, samosas, spring rolls, and peppered bites.'],
  ['Coconut Candy', 'Traditional caramelised shredded coconut bites cooked crisp and richly aromatic.'],
  ['Popcorn', 'Light, freshly popped corn kernels tossed gently for crisp everyday snacking.'],
  ['Banana Chips', 'Thinly sliced, sweet crisp banana chips fried golden for an effortless crunch.'],
  ['Yam Chips', 'Thick-cut crispy fried puna yam chips lightly salted and golden.'],
  ['Potato Chips', 'Thin, golden potato crisps fried fresh with a clean salted finish.'],
];

const DRINK_ITEMS: Array<[string, string]> = [
  ['Chapman', 'Classic Nigerian sparkling citrus refresher layered with cucumber, lemon, and bitters notes.'],
  ['Zobo', 'Chilled ruby-red hibiscus infusion brewed naturally with pineapple, ginger, and cloves.'],
  ['Kunu', 'Smooth, refreshing spiced millet and tiger-nut traditional Nigerian drink served chilled.'],
  ['Fresh Fruit Juice', 'Cold-pressed seasonal tropical fruit blend bursting with natural sweetness.'],
  ['Orange Juice', 'Pure, bright freshly squeezed Nigerian sweet orange juice served cold.'],
  ['Pineapple Juice', 'Golden freshly pressed pineapple juice with crisp tropical acidity.'],
  ['Watermelon Juice', 'Hydrating, naturally sweet chilled watermelon juice pressed fresh daily.'],
  ['Soft Drinks', 'Ice-cold carbonated sodas and classic refreshments ready alongside any meal.'],
  ['Bottled Water', 'Pure, chilled still spring water sealed fresh for clean hydration.'],
  ['Malt Drinks', 'Rich, non-alcoholic dark malted beverage served chilled for smooth nourishment.'],
  ['Yoghurt', 'Creamy, lightly sweetened chilled drinking yoghurt with smooth dairy richness.'],
  ['Smoothies', 'Thick, wholesome blended tropical fruit smoothies crafted fresh to order.'],
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildCategoryItems(
  entries: Array<[string, string]>,
  category: MenuCategoryMeta['id'],
  categoryLabel: string,
  image: string,
  supportsProteinPairing = false
): MenuItem[] {
  return entries.map(([name, description]) => {
    let itemImage = image;
    if (name === 'HIGHGEE Plantain Chips') itemImage = BRAND_IMAGES.plantainChips;
    if (name === 'Beef Snacks') itemImage = BRAND_IMAGES.beefSnacks;

    return {
      id: `${category}-${slugify(name)}`,
      name,
      category,
      categoryLabel,
      description,
      image: itemImage,
      supportsProteinPairing,
    };
  });
}

export const MENU_ITEMS: MenuItem[] = [
  ...buildCategoryItems(RICE_ITEMS, 'rice', 'Rice and rice combinations', BRAND_IMAGES.riceDishes, true),
  ...buildCategoryItems(SWALLOW_ITEMS, 'swallow', 'Swallow and traditional meals', BRAND_IMAGES.swallowsSoups, true),
  ...buildCategoryItems(SOUP_ITEMS, 'soups', 'Nigerian soups', BRAND_IMAGES.swallowsSoups, true),
  ...buildCategoryItems(SPECIAL_ITEMS, 'special', 'Nigerian special meals', BRAND_IMAGES.specialMeals, true),
  ...buildCategoryItems(PROTEIN_ITEMS, 'proteins', 'Proteins and extras', BRAND_IMAGES.proteinsGrill, false),
  ...buildCategoryItems(SNACK_ITEMS, 'snacks', 'Snacks and small chops', BRAND_IMAGES.snacksDrinks, false),
  ...buildCategoryItems(DRINK_ITEMS, 'drinks', 'Drinks', BRAND_IMAGES.snacksDrinks, false),
];

export const FEATURED_MENU_IDS = [
  'rice-party-jollof-rice',
  'soups-egusi-soup',
  'special-gizdodo',
  'proteins-grilled-fish',
  'snacks-highgee-plantain-chips',
  'drinks-chapman',
];

export const SPA_SERVICES: SpaService[] = [
  {
    id: 'full-body',
    title: 'Full Body Massage',
    focus: 'Head-to-toe restoration',
    description:
      'Comprehensive rhythmic bodywork designed to release deep muscular fatigue, improve circulation, and restore full-body calm.',
  },
  {
    id: 'relaxation',
    title: 'Relaxation Massage',
    focus: 'Calm & gentle flow',
    description:
      'Long, soothing strokes paired with warm aromatic oils to quiet a busy mind and invite restorative sleep.',
  },
  {
    id: 'therapeutic',
    title: 'Therapeutic Massage',
    focus: 'Targeted recovery',
    description:
      'Focused deep-tissue pressure tailored to stubborn knots, posture strain, and physical tension.',
  },
  {
    id: 'back-shoulder',
    title: 'Back and Shoulder Massage',
    focus: 'Upper-body relief',
    description:
      'Concentrated release across the neck, trapezius, and upper spine for professionals carrying daily desk or travel strain.',
  },
  {
    id: 'stress-relief',
    title: 'Stress Relief Massage',
    focus: 'Mental & physical reset',
    description:
      'Calibrated pressure and breathing-paced techniques aimed at melting away anxiety and restoring mental clarity.',
  },
  {
    id: 'spa-experience',
    title: 'Spa Relaxation Experience',
    focus: 'Complete sanctuary ritual',
    description:
      'An unhurried wellness session combining warm towels, ambient aromatics, and tailored massage therapy.',
  },
];

export const HIRE_SERVICES = [
  {
    title: 'Food catering',
    detail: 'Full-service Nigerian culinary spreads freshly cooked and presented for guests.',
  },
  {
    title: 'Private and family events',
    detail: 'Intimate home gatherings, anniversaries, naming ceremonies, and family feasts.',
  },
  {
    title: 'Birthday celebrations',
    detail: 'Party Jollof, small chops, proteins, and chilled drinks tailored for celebratory tables.',
  },
  {
    title: 'Weddings and parties',
    detail: 'Large-scale traditional and contemporary menus built for memorable Nigerian celebrations.',
  },
  {
    title: 'Corporate catering',
    detail: 'Reliable executive lunches, office retreats, conferences, and staff appreciation meals.',
  },
  {
    title: 'Bulk food orders',
    detail: 'Coolers and trays of soups, stews, rice dishes, and proteins prepared to order.',
  },
  {
    title: 'Special food preparation',
    detail: 'Custom homemade Nigerian dishes tailored to dietary, family, or event preferences.',
  },
  {
    title: 'Food supply arrangements',
    detail: 'Scheduled recurring meal deliveries, plantain chips, and beef snack supply.',
  },
  {
    title: 'Spa and massage appointments',
    detail: 'Private wellness bookings and relaxation sessions arranged through HIGHGEE Therapy.',
  },
];
