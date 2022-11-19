const getRandomPositiveInteger = function (first, second) {
  if (first < 0 || second < 0){
    return NaN;
  }
  const min = Math.ceil(Math.min(first, second));
  const max = Math.floor(Math.max(first, second));
  return Math.floor(Math.random() * (max - min + 1)) + min; // Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

const getRandomCoordinates = function (first, second, accuracy = 1) {
  if (first < 0 || second < 0 || accuracy < 0) {
    return NaN;
  }
  const min = Math.min(first, second);
  const max = Math.max(first, second);
  const result = Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min); // Источник: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
  return first === second ? first.toFixed(accuracy) : result.toFixed(accuracy);
};

const getUniqItemsFromArray = function (elements) {
  const result = [];
  for (let i = 0; i <= getRandomPositiveInteger(0,elements.length - 1); i++){
    const item = elements[getRandomPositiveInteger(0,elements.length - 1)];
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const createTextContent = function (element,className,content) {
  if (content === '') {
    element.querySelector(`.${className}`).classList.add('visually-hidden');
  } else {
    element.querySelector(`.${className}`).textContent = content;
  }
};

const createAdressContent = function (element,className,content) {
  if (content === '') {
    element.querySelector(`.${className}`).classList.add('visually-hidden');
  } else {
    element.querySelector(`.${className}`).textContent = `${content.lan}, ${content.lng}`;
  }
};

const createFeatureList = function (element,className,featuresList) {
  if (featuresList !== undefined) {
    const featuresListItem = element.querySelectorAll(`.${className}`);
    featuresListItem.forEach((featuresListElement) => {
      const isNecessary = featuresList.some((feature) => featuresListElement.classList.contains(`popup__feature--${feature}`));
      if (!isNecessary){
        featuresListElement.remove();
      }
    });
  } else {
    element.querySelector(`.${className}`).classList.add('visually-hidden');
  }
};

const createPhotoList = function (element,className,photoList) {
  if (photoList !== undefined) {
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
  } else {
    element.querySelector(`.${className}`).classList.add('visually-hidden');
  }
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'rgba(255, 255, 128, .5)';
  alertContainer.style.fontSize = '14px';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const disableSubmitButton = function () {
  const submitButton = document.querySelector('.ad-form__submit');
  submitButton.setAttribute('disabled', 'disabled');
  submitButton.textContent = 'Отправляю..';
};

const enableSubmitButton = function () {
  const submitButton = document.querySelector('.ad-form__submit');
  submitButton.removeAttribute('disabled');
  submitButton.textContent = 'Опубликовать';
};

export {enableSubmitButton, disableSubmitButton, isEscapeKey, isEnterKey, showAlert, getRandomPositiveInteger, getRandomCoordinates, getRandomArrayElement, getUniqItemsFromArray, createPhotoList, createFeatureList, createAdressContent, createTextContent};
