const adPriceSlider = document.querySelector('.ad-form__slider');
const adPrice = document.querySelector('#price');

noUiSlider.create(adPriceSlider, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
  step: 1,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

adPriceSlider.noUiSlider.on('update', () => {
  adPrice.value = adPriceSlider.noUiSlider.get();
});
