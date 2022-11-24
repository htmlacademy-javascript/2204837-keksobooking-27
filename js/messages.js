import {isEscapeKey, isEnterKey, enableSubmitButton} from './util.js';

const messageEvent = () => {
  if (isEscapeKey || isEnterKey) {
    document.body.lastChild.remove();
    window.removeEventListener('keydown', messageEvent);
    enableSubmitButton();
  }
};

const addEvent = () => {
  window.addEventListener('keydown', messageEvent);
  window.onclick = () => document.body.lastChild.remove();
};

const showMessage = (className) => {
  const template = document.querySelector(`#${className}`).content.querySelector(`.${className}`);
  const element = template.cloneNode('true');
  document.body.appendChild(element);
  addEvent();
};

export {showMessage};
