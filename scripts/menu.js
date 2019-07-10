(function () {
    var menuItems = [
        'Students',
        'Faculty',
        "What's New",
        'Tech Trends',
        'Music',
        'Log Out',
    ];
    (function () {
        var menuButton = document.querySelector('.menu-button');
        menuButton.parentElement.insertBefore(createMenu({ menuItemArray: menuItems }), menuButton.nextElementSibling);
    })();
    function createMenu(_a) {
        var menuItemArray = _a.menuItemArray;
        var menuButton = document.querySelector('.menu-button');
        var menuElement = document.createElement('div');
        var ul = document.createElement('ul');
        menuElement.appendChild(ul);
        menuElement.classList.add('menu');
        menuButton.addEventListener('click', function () { return menuElement.classList.toggle('menu--open'); });
        menuItemArray.forEach(function (itemText) {
            var li = document.createElement('li');
            li.textContent = itemText;
            ul.appendChild(li);
        });
        return menuElement;
    }
})();
