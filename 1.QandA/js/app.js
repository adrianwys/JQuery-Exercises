$(document).ready(function(){

    $('p').css('display', 'none');

    $('h1').on('click', function(){
        $('p').hide();
        $(this).next().show();
    });
});
