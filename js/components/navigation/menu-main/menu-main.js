/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var toggler = document.querySelector('[data-drupal-selector="menu-main-toggle"]');
  var menu = document.querySelector('[data-drupal-selector="menu-main"]');

  function toggleMenu() {
    if (toggler) {
      toggler.classList.toggle('menu-main-toggle--active');
    }
    if (menu) {
      menu.classList.toggle('menu-main--active');
    }
    return false;
  }

  if (toggler) {
    toggler.addEventListener('click', toggleMenu);
  }
})();