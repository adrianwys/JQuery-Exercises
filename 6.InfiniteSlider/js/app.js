$(document).ready(function(){

var btnPrev = $('#prevPicture');
var btnNext = $('#nextPicture');
var images = $('li');
var index = 0;
var width = $('img').width();
    $('div').width(width);
    $('ul').width(width * images.length);
    $('ul').css('left', -width);
    var clone1 = images.first().clone().appendTo("ul");
    var clone2 = images.last().clone().prependTo("ul");
    images=$('li');
    btnNext.on("click", function(){


        $('ul').animate({
            left: '-='+width,
        },function(){
            index++;
            if(index >= images.length-2){
                $('ul').css('left', -width)
                index = 0;
            }
        });

});
    btnPrev.on("click", function(){


        $('ul').animate({
            left: '+='+width
        },function(){
            index--;
            if(index < 0){
                $('ul').css('left', -width*(images.length-2));
                index = images.length-3;

            }
        });

});



});
