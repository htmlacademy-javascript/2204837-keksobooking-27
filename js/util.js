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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

export {getRandomPositiveInteger, getRandomCoordinates, getRandomArrayElement, getUniqItemsFromArray, createPhotoList, createFeatureList, createAdressContent, createTextContent};
