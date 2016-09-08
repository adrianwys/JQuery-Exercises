$(document).ready(function(){

var btnPrev = $('#prevPicture');
var btnNext = $('#nextPicture');
var images = $('li');
var index = 0;
var width = $('img').width();
    $('div').width(width);
    $('ul').width(width * images.length);
//     btnNext.on("click", function(){
//
//         if(index < images.length -1) {
//         index++;
//         $('ul').animate({
//             left: '-='+width
//         });
//     }
// });
//     btnPrev.on("click", function(){
//         if(index > 0) {
//         index--;
//         $('ul').animate({
//             left: '+='+width
//         });
//     }
// });

/// funckcja

    var buttons = $('button');

    buttons.on('click', function(){
        if($(this).attr('id')== 'nextPicture') {
            if(index < images.length -1) {
            index++;
            $('ul').animate({
                left: '-='+width
            });
          }
        }
        else {
            if(index > 0) {
            index--;
            $('ul').animate({
                left: '+='+width
            });
          }
        }
    });


});
