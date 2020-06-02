$(document).ready(function() {
    /*For the sticky navigation*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    } , {
        offset: '60px;'
        }
    );
    
    //* Scroll on buttons
    
    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    }); 
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    // Nav scroll
     $('.js--scroll-to-section-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
     });
    
         $('.js--scroll-to-hiw').click(function() {
        $('html, body').animate({scrollTop: $('.js--hiw').offset().top}, 1000);
    });
    
    $('.js--scroll-to-cities').click(function() {
        $('html, body').animate({scrollTop: $('.js--cities').offset().top}, 1000);
    });
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    
    //Animations
   
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animate__fadeIn'); 
    }, {
        offset: '60%'
    });
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animate__fadeInUp'); 
    }, {
        offset: '60%'
    });
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animate__fadeIn'); 
    }, {
        offset: '60%'
    });
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animate__pulse'); 
    }, {
        offset: '50%'
    });
    
    //Mobile Nav
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon li');
        
        nav.slideToggle(200);
       /* if (icon.hasClass('menu-icon')) {
            //icon.addClass('close-icon ion-icon');
            icon.removeClass('menu-icon');
        } else {
            icon.addClass('menu-icon ion-icon');
            icon.removeClass('close-icon ion-icon');
        }*/
    });
});