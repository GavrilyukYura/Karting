'use strict';

const btnContainer = document.getElementById('List');

const btns = btnContainer.getElementsByClassName('nav__item');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(event) {
    event.preventDefault();

    const current = document.getElementsByClassName('nav__item--is-active');

    current[0].className = current[0].className
      .replace(' nav__item--is-active', '');
    this.className += ' nav__item--is-active';
  });
}
