let heroSlide = document.querySelector("#hero-slide")
let heroSlideItems = heroSlide.querySelectorAll('.slide')

let heroSlideIndex = 0;

let heroSlidePlay = true;

let heroSlideControlItems = heroSlide.querySelectorAll('.slide-control-item');

let slideNext = heroSlide.querySelector('.slide-next')
let slidePrev = heroSlide.querySelector('.slide-prev')

let showSlide = (index) => {
    heroSlide.querySelector('.slide.active').classList.remove('active');
    heroSlide.querySelector('.slide-control-item.active').classList.remove('active')
    heroSlideItems[index].classList.add('active');
    heroSlideControlItems[index].classList.add('active')
}

let nextSlide = () => {
    heroSlideIndex = heroSlideIndex + 1 === heroSlideItems.length ? 0 : heroSlideIndex + 1;
    showSlide(heroSlideIndex);
}

let prevSlide = () => {
    let currentPage = heroSlideIndex - 1;
    heroSlideIndex =  currentPage < 0 ? heroSlideItems.length - 1 : currentPage;
    showSlide(heroSlideIndex);
}

setTimeout(() => {
    heroSlideItems[0].classList.add('active');
}, 200)

// Auto slide
setInterval(() => {
    if (!heroSlidePlay)
        return;

    nextSlide()
}, 2000)

//Pause slide when mouse com in slider
heroSlide.addEventListener('mouseover', () => heroSlidePlay = false)

//Resume slide when mouse leave out slide
heroSlide.addEventListener('mouseleave', () => heroSlidePlay = true)

slideNext.addEventListener('click', () => {
    nextSlide()
})

slidePrev.addEventListener('click', () => {
    prevSlide()
})

//Add event to slide select
heroSlideControlItems.forEach((item, index) => {
    item.addEventListener('click', () => showSlide(index))
})


