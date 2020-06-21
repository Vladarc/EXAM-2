let swiper_1 = new Swiper('.slider-container', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.header-swiper-pagination',
      clickable: true,
      bulletClass:'header-swiper-pagination-bullet',
      bulletActiveClass:'header-swiper-pagination-bullet-active',
      modifierClass:'header-swiper-pagination'
      
    },
});       
    
 let swiper_2 = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
  });  
    
    
 
  