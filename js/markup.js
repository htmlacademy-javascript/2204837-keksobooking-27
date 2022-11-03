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

adExample.forEach((ad) => {
  const adElement = adTemplate.cloneNode('true');
  const featuresList = adElement.querySelector('.popup__features');
  const featuresListItem = featuresList.querySelectorAll('.popup__feature');
  adElement.querySelector('.popup__title').textContent = ad.order.title;
  adElement.querySelector('.popup__text--address').textContent = ad.order.address;
  adElement.querySelector('.popup__text--price').textContent = `${ad.order.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = apType[ad.order.type];
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.order.rooms} комнаты для ${ad.order.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.order.checkin}, выезд до ${ad.order.checkout}`;
  featuresListItem.forEach((featuresListElement) => {
    const isNecessary = ad.order.features.some((feature) => featuresListElement.classList.contains(`popup__feature--${feature}`));
    if (!isNecessary){
      featuresListElement.remove();
    }
  });
  if (ad.order.description) {
    adElement.querySelector('.popup__description').textContent = ad.order.description;
  } else {
    adElement.querySelector('.popup__description').classList.add('visually-hidden');
  }
  const adPhotos = adElement.querySelector('.popup__photos');
  const adPhoto = adPhotos.querySelector('.popup__photo');
  adPhoto.src = ad.order.photos[0];
  for (let i = 1; i < ad.order.photos.length; i++) {
    const newAdPhoto = adPhoto.cloneNode('true');
    newAdPhoto.src = ad.order.photos[i];
    adPhotos.appendChild(newAdPhoto);
  }
  adElement.querySelector('.popup__avatar').src = ad.author.avatar;
  mapConvas.appendChild(adElement);
});
