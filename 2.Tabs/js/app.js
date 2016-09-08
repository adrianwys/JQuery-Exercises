$(document).ready(function(){


    $('ul').addClass('tabs');
    var tabs = $('li');
    var divs = $('div div');
    divs.hide();


    tabs.on('click', function(){
        var index = $(this).index();
        $(divs).eq(index).toggle();

    });

});
