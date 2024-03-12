
/*=============== SEARCH ===============*/
let searchBtn = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content');

/*=============== menu show ===============*/
if (searchBtn) {
    searchBtn.addEventListener('click',  () =>{
        searchContent.classList.add('show-search');
    })
}
/*=============== menu hidden ===============*/
if (searchClose) {
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== Login ===============*/
let loginBtn = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content');

/*=============== login show ===============*/
if (loginBtn) {
    loginBtn.addEventListener('click',  () =>{
        loginContent.classList.add('show-login');
    })
}
/*=============== login hidden ===============*/
if (loginClose) {
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== home swiper ===============*/
new Swiper('#home__swiper', {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
/*=============== featured swiper ===============*/
new Swiper('#featured__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== new arrival swiper ===============*/
new Swiper('#new__swiper', {
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
});

/*=============== testimonial swiper Autoplay===============*/
new Swiper("#testimonial__swiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


/*=============== menu show ===============*/
const shadowHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
