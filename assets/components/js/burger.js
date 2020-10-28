import * as C from '../js/constants.js';

const burger = () => {
  let isOpened = false;
  document.querySelector('.header').addEventListener('click', (e) => {
    const item = e.target;
    
    if (item.classList.contains(C.BURGER) || item.classList.contains(C.BURGER_ICON)) {
      if (!isOpened) {
        document.querySelector(`.${C.MENU}`).classList.toggle(C.MENU_DISPLAY);
        isOpened = true;
        setTimeout(() => {
          document.querySelector(`.${C.BURGER}`).classList.toggle(C.BURGER_ACTIVE);
          document.querySelector(`.${C.MENU}`).classList.toggle(C.MENU_ACTIVE);
          document.getElementById(C.BLACKOUT).classList.toggle(C.BLACKOUT);
          document.getElementById(C.LOGO).classList.toggle(C.LOGO_ACTIVE);
          document.body.classList.toggle(C.NOSCROLL);
        }, 100);
      } else {
        document.querySelector(`.${C.BURGER}`).classList.toggle(C.BURGER_ACTIVE);
        document.querySelector(`.${C.MENU}`).classList.toggle(C.MENU_ACTIVE);
        document.getElementById(C.BLACKOUT).classList.toggle(C.BLACKOUT);
        document.getElementById(C.LOGO).classList.toggle(C.LOGO_ACTIVE);
        document.body.classList.toggle(C.NOSCROLL);
        setTimeout(() => {
          document.querySelector(`.${C.MENU}`).classList.toggle(C.MENU_DISPLAY);
          isOpened = false;
        }, 100);
      }
    }

  });
}

export default burger;
