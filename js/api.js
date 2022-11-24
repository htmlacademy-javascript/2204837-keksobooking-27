import {renderData, resetMap} from './map.js';
import {showMessage} from './messages.js';
import {showAlert, enableSubmitButton} from './util.js';
import {getFilteredOffers, setOnFilterChange, OFFERS_COUNT} from './filter.js';
import {debounce} from './debounce.js';

const getAds = function () {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then(
      (response) => response.json())
    .then((ads) => {
      getFilteredOffers(ads);
      renderData(ads.slice(0,OFFERS_COUNT));
      setOnFilterChange(debounce(() => renderData(getFilteredOffers(ads))));
    })
    .catch(() => {showAlert('Ошибка загрузки объявлений..');});
};

const postAd = function (formData,evt) {
  fetch('https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        showMessage('success');
        evt.target.reset();
        resetMap();
        enableSubmitButton();
      } else {
        showMessage('error');
        enableSubmitButton();
      }
    })
    .catch(() => {
      showMessage('error');
      enableSubmitButton();
    });
};

export {getAds,postAd};

