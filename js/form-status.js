const adForm = document.querySelector('.ad-form');
const interactiveAdElements = adForm.querySelectorAll('.ad-form__element');
const filterForm = document.querySelector('.map__filters');
const interactiveFilterElements = filterForm.querySelectorAll('.map__filter');

const disabledForm = function () {
  filterForm.classList.add('map__filters--disabled');
  interactiveFilterElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
  adForm.classList.add('ad-form--disabled');
  interactiveAdElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
};

disabledForm();

const enabledForm = function() {
  filterForm.classList.remove('map__filters--disabled');
  interactiveFilterElements.forEach((element) => element.removeAttribute('disabled'));
  adForm.classList.remove('ad-form--disabled');
  interactiveAdElements.forEach((element) => element.removeAttribute('disabled'));
};

enabledForm();
