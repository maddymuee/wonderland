$(document).ready(function(){
/*

$("#block1").mousemove(function(e) {
  parallaxIt(e, "#cat", -30);
  parallaxIt(e, "#tree", -50);
  parallaxIt(e, "#alice", -10);
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

*/

$(window).load(function() {
     $('#loading').fadeOut();
  });
  
    var image = new Image();
    let clicked = false;
     $('#kitty').click(function(){
       if (clicked === false) {
        $(this).attr('src','images/disappearingcat2.gif');
        $(this).addClass('pointer');
       clicked = true;
   } else {
    $(this).attr('src','images/disappearingcat.png');
    clicked = false;
   }
 });


$(".hatter").mouseover(function(){  
    $(this).toggleClass("hatterhover");
    $(".hare").toggleClass("harehover");
});

$(".hare").mouseover(function(){  
    $(this).toggleClass("harehover");
    $(".hatter").toggleClass("hatterhover");
});

});