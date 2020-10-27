import * as C from '../js/constants.js';

const menu = () => {
  const links = [...document.querySelectorAll(`.${C.MENU_LINK}`)];
  const newLinks = links.slice(2);

  document.querySelector(`.${C.MENU}`).addEventListener('click', (e) => {
    const item = e.target;

    newLinks.forEach(el => {
      if (item.innerText === el.innerText) {
        e.preventDefault();
      }
    });
  });
}

export default menu;
