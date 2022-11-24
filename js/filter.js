const OFFERS_COUNT = 10;
const Price = {
  MIDDLE: 10000,
  HIGH: 50000,
};

const filterElement = document.querySelector('.map__filters');
const housingTypeField = filterElement.querySelector('#housing-type');
const housingPriceField = filterElement.querySelector('#housing-price');
const housingRoomsField = filterElement.querySelector('#housing-rooms');
const housingGuestsField = filterElement.querySelector('#housing-guests');
const featureCheckboxs = filterElement.querySelectorAll('.map__checkbox');

const filterByType = (offer, type) => type === 'any' || offer.offer.type === type;

const filterByPrice = (offer, price) => {
  switch (price) {
    case 'any':
      return true;
    case 'low':
      return offer.offer.price <= Price.MIDDLE;
    case 'middle':
      return offer.offer.price >= Price.MIDDLE && offer.offer.price <= Price.HIGH;
    case 'high':
      return offer.offer.price >= Price.HIGH;
  }
};

const filterByRooms = (offer, rooms) => rooms === 'any' || offer.offer.rooms === Number(rooms);

const filterByGuests = (offer, guests) => guests === 'any' || offer.offer.guests === Number(guests);

const filterByFeatures = (offer, features) => {
  if (!features.length) {
    return true;
  }
  if (!offer.offer.features) {
    return false;
  }
  return features.every((feature) => offer.offer.features.includes(feature));
};

const getFilteredOffers = (offers) => {
  const selectedType = housingTypeField.value;
  const selectedPrece = housingPriceField.value;
  const selectedRooms = housingRoomsField.value;
  const selectedGuests = housingGuestsField.value;

  const selectedFeature = [];
  featureCheckboxs.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedFeature.push(checkbox.value);
    }
  });

  const filteredOffers = [];
  for (const offer of offers) {
    if (filteredOffers.length >= OFFERS_COUNT) {
      break;
    }
    if (
      filterByType(offer, selectedType) &&
      filterByPrice(offer, selectedPrece) &&
      filterByRooms(offer, selectedRooms) &&
      filterByGuests(offer, selectedGuests) &&
      filterByFeatures(offer,selectedFeature)
    )
    {
      filteredOffers.push(offer);
    }
  }
  return filteredOffers;
};

const setOnFilterChange = (cb) => {
  filterElement.addEventListener('change', () => cb ());
};

export {setOnFilterChange, getFilteredOffers, OFFERS_COUNT};
