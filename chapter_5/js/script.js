$(document).ready(function(){

$(window).load(function() {
     $('#loading').fadeOut();
     $('.headerimg').addClass('fadedown');
     $('.ch5header h3').addClass('fadedown2');
     $('.footsteps').addClass('footsteps2');
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