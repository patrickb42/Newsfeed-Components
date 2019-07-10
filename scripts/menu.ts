(() => {
  const menuItems: string[] = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out',
  ];

  (() => {
    const menuButton = document.querySelector('.menu-button');
    menuButton.parentElement.insertBefore(
      createMenu({ menuItemArray: menuItems }),
      menuButton.nextElementSibling,
    );
  })();

  interface CreateMenuArgs {
    menuItemArray: string[];
  }
  function createMenu({ menuItemArray }: CreateMenuArgs): HTMLDivElement {
    const menuButton = document.querySelector('.menu-button');
    const menuElement = document.createElement('div');
    const ul = document.createElement('ul');

    menuElement.appendChild(ul);
    menuElement.classList.add('menu');
    menuButton.addEventListener('click', () => menuElement.classList.toggle('menu--open'));
    menuItemArray.forEach((itemText) => {
      const li = document.createElement('li');
      li.textContent = itemText;
      ul.appendChild(li);
    });

    return menuElement;
  }
})();
