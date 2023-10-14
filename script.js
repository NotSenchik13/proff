let burger = document.querySelector('.header__burger');

let news = document.querySelector('.header__news');

let login = document.querySelector('.header__login');



burger.addEventListener('click', function() {
    if(news.style.display == 'block') {
        news.style.display = 'none';
        login.style.display = 'none';
    } else {
        news.style.display = 'block';
        login.style.display = 'block';
    }
})


function checkWindowSize() {
  
    if (window.innerWidth >= 768) {
      // Если ширина окна больше или равна 768px (размер десктопа), показываем шапку
      news.style.display = 'block';
      login.style.display = 'block';
    } else {
      // Если ширина окна меньше 768px (размер мобильного устройства), скрываем шапку, если меню свернуто
      if (!menu.classList.contains('visible')) {
        news.style.display = 'none';
        login.style.display = 'none';
      }
    }
  }
  
  // Проверяем размер окна при загрузке страницы и при изменении размера окна
  window.addEventListener('load', checkWindowSize);
  window.addEventListener('resize', checkWindowSize);
