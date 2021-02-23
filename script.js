const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
const inner = document.querySelector('.inner');
const rightSide = document.querySelector('.right-side');

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');

    })

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');

    })
})

rightSide.addEventListener('click', () => {
    inner.classList.toggle('menu');
    rightSide.classList.toggle('right-inner');
})

let $window = $(window);
let $windowHeight = $window.height();
let $zoneHeight = $('div.zone').offset().top;
let $btn = $('a div.scroll-btn');
let zone = $zoneHeight - $windowHeight;

$(function () {
    $window.on('scroll', function () {
        if (zone < $window.scrollTop()) {
            $btn.fadeIn(1000);
        } else {
            $btn.fadeOut(100);
        }
    })
});
