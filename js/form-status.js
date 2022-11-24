const adForm = document.querySelector('.ad-form');
const interactiveAdElements = adForm.querySelectorAll('.ad-form__element');
const filterForm = document.querySelector('.map__filters');
const interactiveFilterElements = filterForm.querySelectorAll('.map__filter');
const slider = adForm.querySelector('.ad-form__slider');

const disabledForm = () => {
  filterForm.classList.add('map__filters--disabled');
  interactiveFilterElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
  adForm.classList.add('ad-form--disabled');
  interactiveAdElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
  slider.setAttribute('disabled', 'disabled');
};

disabledForm();

const enabledForm = () => {
  filterForm.classList.remove('map__filters--disabled');
  interactiveFilterElements.forEach((element) => element.removeAttribute('disabled'));
  adForm.classList.remove('ad-form--disabled');
  interactiveAdElements.forEach((element) => element.removeAttribute('disabled'));
  slider.removeAttribute('disabled');
};

export {enabledForm,disabledForm};
