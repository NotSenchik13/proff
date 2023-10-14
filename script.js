
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

