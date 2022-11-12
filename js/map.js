import {generateData} from './data.js';
import {createPhotoList, createFeatureList, createAdressContent, createTextContent} from './util.js';
import {enabledForm} from './form-status.js';

const apType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
const map = L.map('map-canvas').setView({lat: 35.689855,lng: 139.753925,}, 10);
const markerMainGroup = L.layerGroup().addTo(map);
const markerAdGroup = L.layerGroup().addTo(map);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

map.on('load',enabledForm());

const mainPinIcon = L.icon({
  iconUrl:'/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const basicPinIcon = L.icon({
  iconUrl:'/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: 35.689855,
    lng: 139.753925,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(markerMainGroup);

mainPinMarker.on('moveend', (evt) => {
  const adAdress = document.querySelector('#address');
  const coord = evt.target.getLatLng();
  const lat = coord.lat.toFixed(5);
  const lng = coord.lng.toFixed(5);
  adAdress.value = `${lat}, ${lng}`;
});

const createCustomPopup = function (ad) {
  const adTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = adTemplate.cloneNode('true');
  createTextContent(popupElement,'popup__avatar',ad.author.avatar);
  createTextContent(popupElement,'popup__title',ad.order.title);
  createAdressContent(popupElement,'popup__text--address',ad.order.address);
  createTextContent(popupElement,'popup__type',apType[ad.order.type]);
  createTextContent(popupElement,'popup__description',ad.order.description);
  createTextContent(popupElement,'popup__text--price',`${ad.order.price} ₽/ночь`);
  createTextContent(popupElement,'popup__text--capacity',`${ad.order.rooms} комнаты для ${ad.order.guests} гостей`);
  createTextContent(popupElement,'popup__text--time',`Заезд после ${ad.order.checkin}, выезд до ${ad.order.checkout}`);
  createFeatureList(popupElement,'popup__feature',ad.order.features);
  createPhotoList(popupElement,'popup__photo',ad.order.photos);
  return popupElement;
};

generateData().forEach((element) => {
  const adLan = element.order.address.lan;
  const adLng = element.order.address.lng;
  const pinMarker = L.marker(
    {
      lat: adLan,
      lng: adLng,
    },
    {
      icon: basicPinIcon,
    }
  );
  pinMarker.addTo(markerAdGroup).bindPopup(createCustomPopup(element));
});
