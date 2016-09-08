$(document).ready(function(){

    var stickyMenuTop = $('nav').offset().top;

    var stickyMenu = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyMenuTop) {
       $('.menu').addClass('sticky');
    } else {
       $('.menu').removeClass('sticky');
     }
    };

    stickyMenu();

    $(window).scroll(function() {
       stickyMenu();
    });

    $(window).resize(function() {
        // trzeba okreslic na nowo pozycje sticky naw
        stickyMenuTop = $('nav').offset().top;

        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyMenuTop) {
           $('.menu').addClass('sticky');
        }

        else {
           $('.menu').removeClass('sticky');
         }

    });



});
