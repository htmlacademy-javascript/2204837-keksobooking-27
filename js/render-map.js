import {generateData} from './data.js';

const mapConvas = document.querySelector('.map__canvas');
const adTemplate = document.querySelector('#card').content.querySelector('.popup');
const adExample = generateData();
const apType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const createTextContent = function (element,className,content) {
  if (content === '') {
    element.querySelector(`.${className}`).classList.add('visually-hidden');
  } else {
    element.querySelector(`.${className}`).textContent = content;
  }
};

const createFeatureList = function (element,className,featuresList) {
  const featuresListItem = element.querySelectorAll(`.${className}`);
  featuresListItem.forEach((featuresListElement) => {
    const isNecessary = featuresList.some((feature) => featuresListElement.classList.contains(`popup__feature--${feature}`));
    if (!isNecessary){
      featuresListElement.remove();
    }
  });
};

const createPhotoList = function (element,className,photoList) {
  const fragmentPhoto = document.createDocumentFragment();
  const adPhoto = element.querySelector(`.${className}`);
  const parentElement = adPhoto.parentNode;
  adPhoto.src = photoList[0];
  fragmentPhoto.appendChild(adPhoto);
  for (let i = 1; i < photoList.length; i++) {
    const newAdPhoto = adPhoto.cloneNode('true');
    newAdPhoto.src = photoList[i];
    fragmentPhoto.appendChild(newAdPhoto);
  }
  parentElement.appendChild(fragmentPhoto);
};

const renderMarkup = function () {
  const fragment = document.createDocumentFragment();
  adExample.forEach((ad) => {
    const adElement = adTemplate.cloneNode('true');
    createTextContent(adElement,'popup__avatar',ad.author.avatar);
    createTextContent(adElement,'popup__title',ad.order.title);
    createTextContent(adElement,'popup__text--address',ad.order.address);
    createTextContent(adElement,'popup__type',apType[ad.order.type]);
    createTextContent(adElement,'popup__description',ad.order.description);
    createTextContent(adElement,'popup__text--price',`${ad.order.price} ₽/ночь`);
    createTextContent(adElement,'popup__text--capacity',`${ad.order.rooms} комнаты для ${ad.order.guests} гостей`);
    createTextContent(adElement,'popup__text--time',`Заезд после ${ad.order.checkin}, выезд до ${ad.order.checkout}`);
    createFeatureList(adElement,'popup__feature',ad.order.features);
    createPhotoList(adElement,'popup__photo',ad.order.photos);
    fragment.appendChild(adElement);
  });
  mapConvas.appendChild(fragment);
};

renderMarkup();
