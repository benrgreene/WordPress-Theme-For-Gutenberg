const parentMenus = document.querySelectorAll('.sub-menu');
const menuToggle  = document.querySelector('#menu-toggle');
const menu        = document.querySelector('.menu-primary-menu-container');

// set the menu's top to be equal to the height of the header for mobile styling
document.addEventListener("DOMContentLoaded", (event) =>{
  setTimeout(() => {
    let styles = document.createElement('style');
    let headerHeight = document.querySelector('.site-header').clientHeight;
    styles.innerHTML = `@media(max-width: 770px){ .site-header .menu { top: ${headerHeight}px; }}`;
    document.body.appendChild(styles);
}, 10);
});

// Variable for tracking whether the menu is displayed or hidden
let isDisplayed = false;

// Loop through the menu and add toggle buttons for all submenus
parentMenus.forEach(function(element) {
  var expandButton = document.createElement('button');  
  expandButton.innerHTML = '+';
  expandButton.dataset.isOpen = 'false';
  expandButton.classList.add('sub-menu__toggle');
  element.parentNode.prepend(expandButton);
});

// Toggle submenu open button being interacted with
const allButtons = document.querySelectorAll('.sub-menu__toggle');
allButtons.forEach(function(el, idx) {
  el.addEventListener('click', function(ev) {
    let subMenuOpen = el.dataset.isOpen;
    if('false' == subMenuOpen) {
      el.innerHTML = '-';
    } else {
      el.innerHTML = '+';
    }
    el.dataset.isOpen = ('true' == subMenuOpen) ? 'false' : 'true';
    el.parentNode.classList.toggle('menu-item--open');
  });
});

// Toggle opening/closing the menu
menuToggle.addEventListener('click', function(event) {
  isDisplayed = !isDisplayed;
  var displayClass = isDisplayed ? 'block' : 'none';
  if(isDisplayed) {
    menuToggle.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fas fa-bars"></i>`;
  }
  document.body.classList.toggle('nav-open');
});