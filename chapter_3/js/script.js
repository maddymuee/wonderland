$(document).ready(function(){


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


    var image = new Image();
    let hovered = false;
       image.src='images/disappearingcat2.gif';
     $('#kitty').mouseover(function(){
       if (hovered === false) {
        $(this).attr('src',image.src);
        $(this).addClass('pointer');
       hovered = true;
   } else {
    $(this).removeClass('pointer');
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