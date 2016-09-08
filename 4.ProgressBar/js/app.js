$(document).ready(function(){

    var btns = $('.changeBar');
    var progres = $('.progress-bar');
    var span = $('span');


        btns.on('click', function(){
            var color = $(this).attr('data-color');
            var width = $(this).attr('data-width');
            var index = $(this).attr('data-id');
            span.eq(index).removeClass().addClass(color);
            span.eq(index).animate({

                width: width


            },500);


        });







});
