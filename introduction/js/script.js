$(document).ready(function(){

$('#title').fadeOut(0);

let clicked = false;

	$(document).click(function(){
        if (clicked === false) {
             $('#textbox1').removeClass('fadein');
        $('#textbox1').fadeOut(2000);
        $('#title').delay(2500).fadeIn(2000);
           clicked = true;
    } else {
       window.location.href = "../chapter_1/index.html";
     }
    });

});