$(document).ready(function(){

$(window).load(function() {
     $('#loading').fadeOut();
  });

let clicked = false;
	$('#aliceflamingo').click(function(){
        if (clicked === false) {
        $(this).attr('src', 'images/flamingo2.png');
        clicked = true;
    } else {
        $(this).attr('src', 'images/alice_flamingo.png');
        clicked = false;
    };
});

    $('.rabbit').hover(function(){
        $(this).toggleClass('rabbit2');
});

});