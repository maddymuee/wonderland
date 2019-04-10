$(document).ready(function(){
/*
 $("#block1").mousemove(function(e) {
  parallaxIt(e, "#flower1", -90);
  parallaxIt(e, "#flower2", -80);
  parallaxIt(e, "#alice", -50);
  parallaxIt(e, "#flower4", -30);
  parallaxIt(e, "#flower3", -20);
  parallaxIt(e, "#bg", -10);
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

let clicked = false;


$("#lefthand").hover(function(){
  if (clicked === false) {
    $(this).toggleClass("shake");
    $(this).toggleClass("bigger");
  }
});

$("#lefthand").click(function(){  
    $("#lefthand").attr("src", "images/cronch3.png");
    $("#lefthand").removeClass("pointer");
    $("#righthand").addClass("pointer");
    $("#righthand").addClass("shake");
    clicked = true;
});

let clickedAgain = false;

$("#righthand").hover(function(){
  if ((clicked === true) && (clickedAgain === false)) {
    $(this).toggleClass("shake");
    $(this).toggleClass("bigger");
  }
});

$("#righthand").click(function() {
    if (clicked === true) {
      clickedAgain = true;
    $(this).addClass("bigger");
    $(this).attr("src", "images/cronch2.png");
    setTimeout(function() {
      window.location = "../chapter_3/index.html";
      }, 500);
    } else {
      $(this).attr("src", "images/cronch.png");
    }
});



});

