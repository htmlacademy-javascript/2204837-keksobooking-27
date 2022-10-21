function getRandomPositiveInteger(first, second) {
  if (first < 0 || second < 0){
    return NaN;
  }
  const min = Math.ceil(Math.min(first, second));
  const max = Math.floor(Math.max(first, second));
  return Math.floor(Math.random() * (max - min + 1)) + min; // Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

function getRandomCoordinates(first, second, accuracy = 1) {
  if (first < 0 || second < 0 || accuracy < 0) {
    return NaN;
  }
  const min = Math.min(first, second);
  const max = Math.max(first, second);
  const result = Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min); // Источник: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
  return first === second ? first.toFixed(accuracy) : result.toFixed(accuracy);
}

function getUniqItemsFromArray(elements) {
  const result = [];
  for (let i = 0; i <= getRandomPositiveInteger(0,elements.length - 1); i++){
    const item = elements[getRandomPositiveInteger(0,elements.length - 1)];
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

export {getRandomPositiveInteger, getRandomCoordinates, getRandomArrayElement, getUniqItemsFromArray};
