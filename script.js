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
