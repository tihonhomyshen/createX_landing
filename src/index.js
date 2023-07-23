const pages = document.querySelectorAll('.page')
const page = document.querySelector('.page')

const background = document.querySelector('.main-page')
const currentBackground = "src/images/main-page/bg-images/bg-image"

const currentPathBackground = window.getComputedStyle(background).getPropertyValue('background-image');

const lastSlashIndex = currentPathBackground.lastIndexOf('/');
const trimmedPath = currentPathBackground.substring(0, lastSlashIndex) + '/';

console.log(currentPathBackground, trimmedPath);

const leftArrowMP = document.querySelector('.arrow-left')
const rightArrowMP = document.querySelector('.arrow-right')

rightArrowMP.addEventListener('click', () => {
    let activePageIndex = Array.from(pages).findIndex(page => page.classList.contains('active'));
    if (activePageIndex >= 0){
        pages[activePageIndex].classList.remove('active');
        let nextPageIndex = (activePageIndex + 1) % pages.length;
        pages[nextPageIndex].classList.add('active');
        background.style.backgroundImage = `(${currentBackground}${activePageIndex})`;
    }
})

leftArrowMP.addEventListener('click', () =>{
    let activePageIndex = Array.from(pages).findIndex(page => page.classList.contains('active'));
    if (activePageIndex >= 0){
        pages[activePageIndex].classList.remove('active');
        let nextPageIndex = activePageIndex - 1;
        if (nextPageIndex < 0 ) {
            nextPageIndex = pages.length - 1;
        }
        pages[nextPageIndex].classList.add('active');
        console.log(activePageIndex, nextPageIndex);
    }
})

new Swiper('.background-slider', {
    navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
    },
})