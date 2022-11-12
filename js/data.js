import {getRandomPositiveInteger, getRandomCoordinates, getUniqItemsFromArray, getRandomArrayElement} from './util.js';

const AD_COUNT = 4;
const APARTMENT_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel',''];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const APARTMENT_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TEST_ADDRESS = [
  {
    lan: '35.77964',
    lng: '139.54618',
  },
  {
    lan: '35.81189',
    lng: '139.96362',
  },
  {
    lan: '35.70133',
    lng: '139.86034',
  },
  {
    lan: '35.72213',
    lng: '139.99983',
  },
  {
    lan: '35.71864',
    lng: '139.32535',
  },
  {
    lan: '35.72733',
    lng: '139.59824',
  },
  {
    lan: '35.59867',
    lng: '139.67915',
  },
];
const TEST_TITLE = ['Квартира в аренду',
  'Посуточная аренда',
  'Аренда апартоментов',
  'Дом в аренду',
];
const TEST_DESCRIPTION = ['Сдается квартира со всей мебелью и техникой необходимой. Оплата за месяц + по счетчикам свет и вода . залог можно разбить по возможности на два платежа.',
  'Продается квартира со всей техникой и необходимой мебелью. Показ по договоренности. Комнаты раздельные.',
  '',
  'Сдается дом со всей необходимой техникой. Рассмотрим платежеспособных граждан на длительный срок, показ по договоренности. Оплата за месяц + по счетчикам свет и вода. Залог можно разбить по возможности на два платежа.',
];

const createAdData = (n) => ({
  author: {
    avatar: `img/avatars/user${n < 10 ? '0'.concat(n) : n}.png`
  },
  order: {
    title: getRandomArrayElement(TEST_TITLE),
    address: getRandomArrayElement(TEST_ADDRESS),
    price: getRandomPositiveInteger(2000,4000),
    type: getRandomArrayElement(APARTMENT_TYPE),
    rooms: getRandomPositiveInteger(1,4),
    guests: getRandomPositiveInteger(1,6),
    checkin: getRandomArrayElement(CHECK_TIME),
    checkout: getRandomArrayElement(CHECK_TIME),
    features: getUniqItemsFromArray(APARTMENT_FEATURES),
    description: getRandomArrayElement(TEST_DESCRIPTION),
    photos: getUniqItemsFromArray(PHOTOS)
  },
  location : {
    lat : getRandomCoordinates(35.65,35.7,5),
    lng : getRandomCoordinates(139.7,139.8,5)
  }
});

const generateData = () => ( Array.from({length: AD_COUNT}, (v, i) => createAdData(i + 1)));

export {generateData};
