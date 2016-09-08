$(document).ready(function(){

var form = $('form');
var name = $('#nameInput');
var email = $('#emailInput');
var message = $('#messageInput');
var submit = form.find('input').last();
var error = $('.error');
    //pierwszy sposob

    // form.on('submit', function(){
    //     event.preventDefault();
    //     error.text('');
    //     var nameVal = name.val();
    //     var emailVal = email.val();
    //     var messageVal = message.val();
    //     if(nameVal.length <= 5) {
    //
    //         error.text('Imię powinno zawierać minimum 6 znakow');
    //     }
    //     else if (messageVal.length <= 10) {
    //         error.text('Wiadomośc powinna być dłuzsza niz 10 znakow');
    //
    //     }
    //     else if (emailVal.indexOf('@') < 0) {
    //         error.text('Pole formularza email powinno zawierać adres email');
    //
    //     }
    //     else if (emailVal.indexOf('.') < 0) {
    //         error.text('Pole formularza email powinno zawierać adres email');
    //
    //     }
    //     else if(error.text() == '') {
    //         form[0].submit();
    //     }
    // });

    //moj sposob

    form.on('submit', function(){

        error.text('');
        var nameVal = name.val();
        var emailVal = email.val();
        var messageVal = message.val();
        if(nameVal.length <= 5) {
            event.preventDefault();
            error.text('Imię powinno zawierać minimum 6 znakow');
        }
        else if (messageVal.length <= 10) {
            error.text('Wiadomośc powinna być dłuzsza niz 10 znakow');
            event.preventDefault();
        }
        else if (emailVal.indexOf('@') < 0) {
            error.text('Pole formularza email powinno zawierać adres email');
            event.preventDefault();
        }
        else if (emailVal.indexOf('.') < 0) {
            error.text('Pole formularza email powinno zawierać adres email');
            event.preventDefault();
        }
    });
});
