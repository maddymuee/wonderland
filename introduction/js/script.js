$(document).ready(function(){


$(window).load(function() {
     $('#loading').fadeOut();
     $('.poem').addClass('fadein');
     $('.heart').fadeOut(0).delay(2500).fadeIn(2000);
     $('.ch6header h3').addClass('fadedown2');
  });


$('.title').fadeOut(0);




let clicked = false;

	$(document).click(function(){
        if (clicked === false) {

           setTimeout(function(){
            clicked = true;
          }, 3700);
             $('#poem').removeClass('fadein');
             $('.heart').removeClass('pulse');
        $('#textbox1').fadeOut(1500);
        $('.title').delay(2000).fadeIn(1500);
        /*setTimeout(function() {
          $('.title').addClass('pulsetwo');
        }, 6000);*/
        $('.title').hover(function(){
          $(this).toggleClass('biggo');
        });

    } else {
       window.location.href = "../chapter_1/index.html";
     }
    });



});

