$(document).ready(function(){
  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times') ;
    $('.navbar').toggleClass('nav-toggle') ;
  });

  $(window).on('scroll load',function(){
      $('.fa-bars').removeClass('fa-times') ;
      $('.navbar').removeClass('nav-toggle') ;

      if($(window).scrollTop() >30){
          $('header').addClass('header-active');
      }else
      {
          $('header').removeClass('header-active');
      }

      $('section').each(function(){
          
          var id=$(this).attr('id');
          var height=$(this).height();
          var offset =$(this).offset().top - 200;
          var top=$(window).scrollTop();
         
          
          if(top >=offset && top <height+offset){
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find('[href="#' + id +'"]').addClass('active');
          }
      })



  })
});


$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});


$(".slider-two")
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});
