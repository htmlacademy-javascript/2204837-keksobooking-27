const AD_COUNT = 10;
const APARTMENT_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const APARTMENT_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.'];
const TEST_ADDRESS = ['Москва, ЦАО, р-н Арбат, Поварская ул., 8/1к1',
  'Москва, ЦАО, р-н Замоскворечье, Садовническая ул., 57С1',
  'Москва, ЦАО, р-н Арбат, Поварская ул., 8/1к1',
  'Москва, ЦАО, р-н Арбат, ул. Арбат, 24',
  'Москва, ЗАО, р-н Филевский парк, ул. Василисы Кожиной, 13',
  'Москва, ВАО, р-н Преображенское, Краснобогатырская ул., 90С1',
  'Москва, ЦАО, р-н Мещанский, м. Трубная, переулок Печатников, 19С1'];
const TEST_TITLE = ['Квартира в аренду',
  'Посуточная аренда',
  'Продам дом',
  'Продам квартиру'];
const TEST_DESCRIPTION = ['Сдается квартира со всей мебелью и техникой необходимой. Оплата за месяц + по счетчикам свет и вода . залог можно разбить по возможности на два платежа.',
  'Продается квартира со всей техникой и необходимой мебелью. Показ по договоренности. Комнаты раздельные.',
  'Сдается дом со всей необходимой техникой. Рассмотрим платежеспособных граждан на длительный срок, показ по договоренности. Оплата за месяц + по счетчикам свет и вода. Залог можно разбить по возможности на два платежа.'];

function getRandomPositiveInteger(first, second) {
  if (first < 0 || second < 0){
    return NaN;
  }
  const min = Math.ceil(Math.min(first, second));
  const max = Math.floor(Math.max(first, second));
  return Math.floor(Math.random() * (max - min + 1)) + min; // Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

function getRandomCoordinates(first, second, accuracy = 1) {
  if (first < 0 || second < 0 || accuracy < 0) {
    return NaN;
  }
  const min = Math.min(first, second);
  const max = Math.max(first, second);
  const result = Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min); // Источник: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
  return first === second ? first.toFixed(accuracy) : result.toFixed(accuracy);
}

getRandomPositiveInteger(5,10);
getRandomCoordinates(1.1,1.2,3);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

// на будущее посмотреть Set

function getUniqItemsFromArray(elements) {
  const result = [];
  for (let i = 0; i <= getRandomPositiveInteger(0,elements.length - 1); i++){
    const item = elements[getRandomPositiveInteger(0,elements.length - 1)];
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

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
// eslint-disable-next-line no-unused-vars
const generateData = Array.from({length: AD_COUNT}, (v, i) => createAdData(i + 1));

// console.log(generateData);
