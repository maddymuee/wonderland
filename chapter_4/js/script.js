$(document).ready(function(){


$(window).load(function() {
     $('#loading').fadeOut();
     $('.headerimg').addClass('fadedown');
     $('.ch4header h3').addClass('fadedown2');
  });


	$(window).load(function(){
     setTimeout(function() {
          $('#knife').addClass('rotate1');
    }, 1500);

     setTimeout(function() {
          $('#spoon').addClass('rotate2');
    }, 1300);

     setTimeout(function() {
          $('#fork').addClass('rotate3');
    }, 1400);
 });


$(".gate").hover(function(){
     $(this).toggleClass("gatehover");


});
       
       });