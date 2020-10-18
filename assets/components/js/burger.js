import * as C from '../js/constants.js';

const burger = () => {
  document.querySelector('.header').addEventListener('click', (e) => {
    const item = e.target;
    
    if (item.classList.contains(C.BURGER) || item.classList.contains(C.BURGER_ICON)) {
      document.querySelector(`.${C.BURGER}`).classList.toggle(C.BURGER_ACTIVE);
      document.querySelector(`.${C.MENU}`).classList.toggle(C.MENU_ACTIVE);
      document.getElementById(C.BLACKOUT).classList.toggle(C.BLACKOUT);
      document.getElementById(C.LOGO).classList.toggle(C.LOGO_ACTIVE);
      document.body.classList.toggle(C.NOSCROLL);
    }

  });
}

export default burger;
