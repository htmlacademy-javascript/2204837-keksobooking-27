import {renderData, resetMap} from './map.js';
import {showMessage} from './messages.js';
import {showAlert,enableSubmitButton} from './util.js';

const getAds = function () {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => renderData(ads))
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
        // disableSubmitButton();
        showMessage('success');//показать сообщение об успешной отправке
        evt.target.reset();//очистака форм
        resetMap();
        enableSubmitButton();
      } else {
        showMessage('error');
        enableSubmitButton();
      }
    })
    .catch(() => {
      showMessage('error');
      enableSubmitButton();// показать сообщение об ошибке(сообщение исчезает по кнопке, esc, по нажатию на серое поле) ПОЛЯ НЕ УДАЛЯЮТСЯ
    });
};

export {getAds,postAd};

