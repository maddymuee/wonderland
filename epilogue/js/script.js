$(document).ready(function(){


$("#block1").mousemove(function(e) {
  parallaxIt(e, "#card1", -20);
  parallaxIt(e, "#card2", -20);
  parallaxIt(e, "#card3", -20);
});

function parallaxIt(e, target, movement) {
  var $this = $("#block1");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


$('.startover').hover(function(){
          $(this).toggleClass('good');
        });


});