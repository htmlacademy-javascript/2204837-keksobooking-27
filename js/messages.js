import {isEscapeKey, isEnterKey, enableSubmitButton} from './util.js';

const messageEvent = function () {
  if (isEscapeKey || isEnterKey) {
    document.body.lastChild.remove();
    window.removeEventListener('keydown', messageEvent);
    enableSubmitButton();
  }
};

const addEvent = function () {
  window.addEventListener('keydown', messageEvent);
  window.onclick = () => document.body.lastChild.remove();
};

const showMessage = function (className) {
  const template = document.querySelector(`#${className}`).content.querySelector(`.${className}`);
  const element = template.cloneNode('true');
  document.body.appendChild(element);
  addEvent();
};

export {showMessage};
