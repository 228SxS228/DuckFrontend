export const PRICING = {
  pool: {
    group: [
      { title: "Разовое групповое посещение", price: "850" },
      { title: "Абонемент (4 групповых занятия)", price: "3140" },
      { title: "Абонемент (8 групповых занятий)", price: "5960" },
    ],
    individual: [
      { title: "Разовое индивидуальное занятие", price: "1600" },
      { title: "Абонемент (4 индивидуальных занятия)", price: "5950" },
      { title: "Абонемент (8 индивидуальных занятий)", price: "10900" },
      { title: "Абонемент (12 индивидуальных занятий)", price: "15900" },
    ],
  },
  poolpro: {
    group: [
      { title: "Разовое групповое посещение", price: "1080" },
      { title: "Абонемент (4 групповых занятия)", price: "3940" },
      { title: "Абонемент (8 групповых занятий)", price: "7560" },
    ],
    individual: [
      { title: "Разовое индивидуальное занятие", price: "1750" },
      { title: "Абонемент (4 индивидуальных занятия)", price: "6400" },
      { title: "Абонемент (8 индивидуальных занятия)", price: "11720" },
      { title: "Абонемент (12 индивидуальных занятий)", price: "17200" },
    ],
  },
} as const;

// Для TimeTablePage (плоский список)
export const getPricingPlans = (type: "pool" | "poolpro") => {
  const poolPricing = PRICING[type];
  return [
    ...poolPricing.group.map((item) => ({
      title: item.title,
      price: item.price,
    })),
    ...poolPricing.individual.map((item) => ({
      title: item.title,
      price: item.price,
    })),
  ];
};
