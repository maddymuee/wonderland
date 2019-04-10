$(document).ready(function(){
/*
	$("#block3").mousemove(function(e) {
   parallaxIt(e, "#cards", -70);
   parallaxIt(e, "#cards2", -60);
   parallaxIt(e, "#cards3", -50);
   parallaxIt(e, "#yarg", -40);
   parallaxIt(e, "#cards4", -30);
   parallaxIt(e, "#cards5", -20);
 });

function parallaxIt(e, target, movement) {
  var $this = $("#block3");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

*/



$(window).load(function() {
     $('#loading').fadeOut();
     $('.headerimg').addClass('fadedown');
     $('.ch6header h3').addClass('fadedown2');
  });

  $('#decree').click(function(){
        $(this).attr('src', 'images/decreegif.gif');
    });

let clicked = false;
  $('#alice').click(function(){
        if (clicked === false) {
        $(this).attr('src', 'images/awake.gif');
        setTimeout(function() {
      window.location = "../epilogue/index.html";
      }, 3000);
        clicked = true;
    };
});

});