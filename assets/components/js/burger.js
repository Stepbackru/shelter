import * as C from '../js/constants.js';

const burger = () => {
  document.querySelector('.header').addEventListener('click', (e) => {
    const item = e.target;
    
    if (item.classList.contains(C.BURGER) || item.classList.contains(C.BURGER_ICON)) {
      document.querySelector(`.${C.BURGER}`).classList.toggle(C.BURGER_ACTIVE);
    }

  });
}

export default burger;
