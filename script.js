let bar = document.querySelector('.bar')

bar.addEventListener('click', ()=>{
    bar.classList.toggle('fa-times')
    document.querySelector('.navbar').classList.toggle('active')
})

var swiper = new Swiper(".home-container", {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        }
    },
    loop: true,
    grabCursor: true,
});


var swiper = new Swiper(".arrival-container", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      }
  },
  loop: true,
  grabCursor: true,
});