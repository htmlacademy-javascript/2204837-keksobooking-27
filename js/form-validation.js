const adForm = document.querySelector('.ad-form');
const titlePattern = /^[,a-zа-яё\s]{30,100}$/i;
const pricePattern = /^[0-9]{1,6}$/;

const pristine = new Pristine (adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid',
});

Pristine.addMessages('ru', {
  required: 'Обязательное поле'
});

Pristine.setLocale('ru');

const validateAdFormTitle = function (value) {
  return titlePattern.test(value);
};

const validateAdFormPrice = function (value) {
  return pricePattern.test(value) && value <= 100000;
};

const validateAdFormRooms = function (value) {
  const select = adForm.querySelector('#capacity');
  switch(value){
    case '1':
      return select.value === '1';
    case '2':
      return select.value === '1' || select.value === '2';
    case '3':
      return select.value === '1' || select.value === '2' || select.value === '3';
    case '100':
      return select.value === '0';
  }
};

const validateAdFormCapacity = function (value) {
  const rooms = adForm.querySelector('#room_number');
  const countRooms = Number(rooms.value);
  if (Number(value) !== 0) {
    return Number(value) <= countRooms && countRooms !== 100;
  } else {
    return countRooms === 100;
  }
};

pristine.addValidator(
  adForm.querySelector('#room_number'),
  validateAdFormRooms,
  'Неподходящее число комнат',
);

pristine.addValidator(
  adForm.querySelector('#capacity'),
  validateAdFormCapacity,
  'Неподходящее число гостей',
);

pristine.addValidator(
  adForm.querySelector('#title'),
  validateAdFormTitle,
  'От 30 до 100 символов'
);

pristine.addValidator(
  adForm.querySelector('#price'),
  validateAdFormPrice,
  'До 100000 ₽/ночь'
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if(!isValid){
    //console.log('Форма невалидна');
  }
});
