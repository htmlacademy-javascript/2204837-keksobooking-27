
const createTextContent = (element,className,content) => {
  if (content === '') {
    element.querySelector(`.${className}`).classList.add('visually-hidden');
  } else {
    element.querySelector(`.${className}`).textContent = content;
  }
};

const createFeatureList = (element,className,featuresList) => {
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

const createPhotoList = (element,className,photoList) => {
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

const disableSubmitButton = () => {
  const submitButton = document.querySelector('.ad-form__submit');
  submitButton.setAttribute('disabled', 'disabled');
  submitButton.textContent = 'Отправляю..';
};

const enableSubmitButton = () => {
  const submitButton = document.querySelector('.ad-form__submit');
  submitButton.removeAttribute('disabled');
  submitButton.textContent = 'Опубликовать';
};

export {enableSubmitButton, disableSubmitButton, isEscapeKey, isEnterKey, showAlert, createPhotoList, createFeatureList, createTextContent};
