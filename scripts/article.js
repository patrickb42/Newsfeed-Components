(() => {
  function newArticle({ domElement }) {
    const _expandButton = domElement.getElementsByClassName('expandButton')[0];
    _expandButton.textContent = 'expand';

    const expandArticle = () => {
      domElement.classList.toggle('article-open');
      if (Array.from(domElement.classList).includes('article-open')) {
        _expandButton.textContent = 'close';
      } else {
        _expandButton.textContent = 'expand';
      }
    };

    _expandButton.addEventListener('click', expandArticle);
  }

  const articles = document.querySelectorAll('.article');
  articles.forEach((article) => {
    newArticle({ domElement: article });
  });
})();
