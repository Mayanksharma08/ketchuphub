$(document).ready(function() {

    
    /*diamond grid*/
    $('.diamond-grid').diamonds({

    size : 220, // Size of diamonds in pixels. Both width and height.

    gap : 5, // Pixels between each square.

    hideIncompleteRow : false, // Hide last row if there are not enough items to fill it completely.

    autoRedraw : true, // Auto redraw diamonds when it detects resizing.

    itemSelector : '.meals-item' // the css selector to use to select 

});
    
    /*slick nav*/
    $(".main-nav").slicknav({
    label:'',
    duration:300
    });
    
    
    /*for sticky nav */
    $('nav').removeClass('sticky');
    $('.js-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });
    
    /*scroll button*/
    $('.js-scrollfull').click(function(){
       $('html,body').animate({scrollTop:$('.js-plans').offset().top},1000); 
    });
    $('.js-scrollghost').click(function(){
       $('html,body').animate({scrollTop:$('.js-features').offset().top},1000); 
    });
    
    /*navigation scroll*/
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        }); 
      }
    }
  });
    
    /*animation scroll*/
    $('.js-wp1').waypoint(function(direction){
        $('.js-wp1').addClass('animated fadeIn');
    },{
        offset:'50%'
    });
    
        $('.js-wp2').waypoint(function(direction){
        $('.js-wp2').addClass('animated jello');
    },{
        offset:'50%'
    });
    
        $('.js-wp3').waypoint(function(direction){
        $('.js-wp3').addClass('animated flip');
    },{
        offset:'50%'
    });
    
        $('.js-wp4').waypoint(function(direction){
        $('.js-wp4').addClass('animated pulse');
    },{
        offset:'50%'
    });
        
       $('#h2one').waypoint(function(direction){
        $('#h2one').addClass('animated jackInTheBox');
    },{
        offset:'90%'
    }); 
    
    $('#h2two').waypoint(function(direction){
        $('#h2two').addClass('animated jackInTheBox');
    },{
        offset:'90%'
    });
    
    $('#h2three').waypoint(function(direction){
        $('#h2three').addClass('animated jackInTheBox');
    },{
        offset:'90%'
    });
    
    $('#h2four').waypoint(function(direction){
        $('#h2four').addClass('animated jackInTheBox');
    },{
        offset:'90%'
    });
    
    $('#h2five').waypoint(function(direction){
        $('#h2five').addClass('animated jackInTheBox');
    },{
        offset:'90%'
    });
    
    $('#h2six').waypoint(function(direction){
        $('#h2six').addClass('animated jackInTheBox');
    },{
        offset:'90%'
    });
    
    /*Mob nav*/
    $('.js-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    
});
