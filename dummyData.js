// dummyData.js
// Sample data used for initial UI testing before Firebase is wired up.
// Replace this with live Firestore queries once the backend is ready.

export const shops = [
  {
    id: 'shop1',
    name: 'مجوهرات الأمانة',
    area: 'سوق الذهب',
    phone: '+9647701234567',
    whatsapp: '+9647701234567',
    logoUrl: 'https://placehold.co/200x200/FFD700/1a1a1a?text=شعار',
    locationUrl: 'https://maps.google.com/?q=31.9,44.6',
  },
  {
    id: 'shop2',
    name: 'مجوهرات الفردوس',
    area: 'شارع النهر',
    phone: '+9647709876543',
    whatsapp: '+9647709876543',
    logoUrl: 'https://placehold.co/200x200/FFD700/1a1a1a?text=شعار',
    locationUrl: 'https://maps.google.com/?q=33.3,44.4',
  },
  {
    id: 'shop3',
    name: 'دار الذهب الملكي',
    area: 'سوق الصاغة',
    phone: '+9647711122334',
    whatsapp: '+9647711122334',
    logoUrl: 'https://placehold.co/200x200/FFD700/1a1a1a?text=شعار',
    locationUrl: 'https://maps.google.com/?q=30.5,47.8',
  },
  {
    id: 'shop4',
    name: 'مجوهرات اللؤلؤة',
    area: 'المنصور',
    phone: '+9647705556677',
    whatsapp: '+9647705556677',
    logoUrl: 'https://placehold.co/200x200/FFD700/1a1a1a?text=شعار',
    locationUrl: 'https://maps.google.com/?q=33.3,44.3',
  },
];

export const products = [
  {
    id: 'p1',
    shopId: 'shop1',
    imageUrl: 'https://placehold.co/300x300/f5deb3/1a1a1a?text=قطعة+ذهب',
    weight: '15 غرام',
    karat: 'عيار 21',
    type: 'قلادة',
  },
  {
    id: 'p2',
    shopId: 'shop1',
    imageUrl: 'https://placehold.co/300x300/f5deb3/1a1a1a?text=قطعة+ذهب',
    weight: '8 غرام',
    karat: 'عيار 18',
    type: 'سوار',
  },
  {
    id: 'p3',
    shopId: 'shop1',
    imageUrl: 'https://placehold.co/300x300/f5deb3/1a1a1a?text=قطعة+ذهب',
    weight: '3 غرام',
    karat: 'عيار 21',
    type: 'خاتم',
  },
  {
    id: 'p4',
    shopId: 'shop2',
    imageUrl: 'https://placehold.co/300x300/f5deb3/1a1a1a?text=قطعة+ذهب',
    weight: '20 غرام',
    karat: 'عيار 22',
    type: 'طقم عروس',
  },
  {
    id: 'p5',
    shopId: 'shop2',
    imageUrl: 'https://placehold.co/300x300/f5deb3/1a1a1a?text=قطعة+ذهب',
    weight: '5 غرام',
    karat: 'عيار 21',
    type: 'حلق',
  },
  {
    id: 'p6',
    shopId: 'shop3',
    imageUrl: 'https://placehold.co/300x300/f5deb3/1a1a1a?text=قطعة+ذهب',
    weight: '12 غرام',
    karat: 'عيار 21',
    type: 'سلسال',
  },
  {
    id: 'p7',
    shopId: 'shop4',
    imageUrl: 'https://placehold.co/300x300/f5deb3/1a1a1a?text=قطعة+ذهب',
    weight: '4 غرام',
    karat: 'عيار 18',
    type: 'خاتم',
  },
];

// Helper to fetch a shop's products — mirrors how you'll later query Firestore
// with a `where('shopId', '==', id)` clause.
export const getProductsByShopId = (shopId) =>
  products.filter((p) => p.shopId === shopId);

