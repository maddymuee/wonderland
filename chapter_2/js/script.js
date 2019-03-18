$(document).ready(function(){


$("#block2").mousemove(function(e) {
  parallaxIt(e, "#flower1", -100);
  parallaxIt(e, "#flower2", -80);
  parallaxIt(e, "#alice", -50);
  parallaxIt(e, "#flower4", -30);
  parallaxIt(e, "#flower3", -20);
  parallaxIt(e, "#bg", -10);
});

function parallaxIt(e, target, movement) {
  var $this = $("#block2");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


/*

var mushroom = ['images/cronch2.png','images/cronch3.png'];
            var numLeft = 0
            var numRight = 0


$("#lefthand").click(function() {
                document.getElementById('lefthand').src = mushroom[numLeft];
                numLeft = numLeft + 1;
                if (numLeft > 1) {
                  numLeft = 1;
                };
            });

$('#righthand').click(function() {
                if (numLeft > 0) {
                  document.getElementById('righthand').src = mushroom[numRight];
                  numRight = numRight + 1;
                } else {
                  numRight = 0;
                }
                if (numRight > 0) {
                  numRight = 0;
                };
                if (numLeft === 2 && numRight === 0) {
                window.location = "../chapter_3/index.html";
                };
            });

$('#righthand').mouseover(function() {
    if ((numLeft === 2 && numRight === 1) || (numLeft === 3 && numRight === 2)) {
      $(this).addClass('hover');
      } else {
        $(this).removeClass('hover');
      };
});

*/

let clicked = false;

$("#lefthand").click(function(){  
    $("#lefthand").attr("src", "images/cronch3.png");
    $("#lefthand").removeClass("pointer");
    $("#righthand").addClass("pointer");
    clicked = true;
});

$("#righthand").click(function() {
    if (clicked) {
    $("#righthand").attr("src", "images/cronch2.png");
    setTimeout(function() {
      window.location = "../chapter_3/index.html";
      }, 1000);
    } else {
      $("#righthand").attr("src", "images/cronch.png");
    }
});



});

