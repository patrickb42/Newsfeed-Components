
(() => {
  const menu = document.getElementsByClassName('menu')[0];
  const menuButton = document.getElementsByClassName('menu-button')[0];

  const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence.
    menu.classList.toggle('menu--open');
  };
  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener('click', toggleMenu);
})();
