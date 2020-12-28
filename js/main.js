const responsive = {         //tends to show specific number of items at specific size
    0:{
        items:1
    },
    
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
  

    // click event for toggle menu
    $toggleCollapse.click(function(){

        $nav.toggleClass('collapse');
    })

   //owl-carousel for blog
      $('.owl-carousel').owlCarousel({
          loop: true,                   //you dont use semi colon to specify different object we use comma(,)
          autoplay: false,
          autoplayTimeout: 3000,
          dots: false,
          nav:true,       //because of this we have access to 'owl-nav' class
          navText:[$('.owl-navigation,.owl-nav-prev'),$('.owl-navigation,.owl-nav-next')],   //allows you to add the font awesome's icons
          responsive: responsive                       //used to show a specific amount of card at specific size
      });

      //click to scrool up

      $('.move-up span').click(function(){
          $('html,body').animate({
              scrollTop:0
          },1000);
      })

      //aos instance
      AOS.init();
});