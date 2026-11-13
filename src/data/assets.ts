import heroNigerianFeast from '../assets/images/hero_nigerian_feast_1794584029162.jpg';
import catRiceDishes from '../assets/images/cat_rice_dishes_1794584029238.jpg';
import catSwallowsSoups from '../assets/images/cat_swallows_soups_1794584029671.jpg';
import catSpecialMeals from '../assets/images/cat_special_meals_1794584030113.jpg';
import catProteinsGrill from '../assets/images/cat_proteins_grill_1794584030620.jpg';
import catSnacksDrinks from '../assets/images/cat_snacks_drinks_1794584030477.jpg';
import highgeePlantainChips from '../assets/images/highgee_plantain_chips_1794584029639.jpg';
import highgeeBeefSnacks from '../assets/images/highgee_beef_snacks_1794584030971.jpg';
import highgeeSpaTherapy from '../assets/images/highgee_spa_therapy_1794584031573.jpg';
import highgeeCateringEvents from '../assets/images/highgee_catering_events_1794584032031.jpg';

export const BRAND_IMAGES = {
  heroFeast: heroNigerianFeast,
  riceDishes: catRiceDishes,
  swallowsSoups: catSwallowsSoups,
  specialMeals: catSpecialMeals,
  proteinsGrill: catProteinsGrill,
  snacksDrinks: catSnacksDrinks,
  plantainChips: highgeePlantainChips,
  beefSnacks: highgeeBeefSnacks,
  spaTherapy: highgeeSpaTherapy,
  cateringEvents: highgeeCateringEvents,
};

export const PROMO_FLYERS = {
  foods: '/assets/aistudio/IMG-20261113-WA0027_a73d80ad.jpg',
  chips: '/assets/aistudio/IMG-20261113-WA0028_f48f66ba.jpg',
  beef: '/assets/aistudio/IMG-20261113-WA0026_b55a8a67.jpg',
  spa: '/assets/aistudio/IMG-20261113-WA0025_3bd851aa.jpg',
};

export const WHATSAPP_NUMBER_DISPLAY = '+234 901 064 8224';
export const WHATSAPP_NUMBER_COMPACT = '+234901 064 8224';
export const WHATSAPP_BASE_URL = 'https://wa.me/2349010648224';

export function buildWhatsAppUrl(message?: string): string {
  if (!message) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
