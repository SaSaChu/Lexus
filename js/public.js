$(function () {

  // 這段不知道要幹嘛，會出現錯誤，導致後面的 js 無法運行，先隱藏
  // $('.modus-img').imgLiquid ();

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 0507 swiper Tag;
  var swiperTag = new Swiper('.swiper-tag', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-tag',
      prevEl: '.swiper-button-prev-tag',
    },
    breakpoints: {
      1024: {
        slidesPerView: 7,
      }, 
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  });

  

});




