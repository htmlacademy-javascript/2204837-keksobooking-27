function getMin (a, b) {
  return a < b ? a : b;
}

function getMax (a, b) {
  return a > b ? a : b;
}

function getRandomInt(first, second) {
  const min = Math.ceil(getMin(first, second));
  const max = Math.floor(getMax(first, second));
  return Math.floor(Math.random() * (max - min + 1)) + min; // Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

getRandomInt(5,10);

function getRandomCoordinates(first, second, accuracy) {
  const min = getMin(first, second);
  const max = getMax(first, second);
  const result = Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min); // Источник: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
  return first === second ? first.toFixed(accuracy) : result.toFixed(accuracy);
}

getRandomCoordinates(1.1,1.2,3);
