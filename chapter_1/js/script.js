$(document).ready(function(){


let blink = false;
$("#lazy").click(function(){  
    if (blink === false) {
        $(this).attr("src", "images/lazyalice2.gif");
    }
    
});

let clicked = false;
$("#drinkme").click(function(){  
	if (clicked === false) {
		$("#alice2").addClass("smaller")
		$(this).removeClass("pulse")
		$("#door").attr("src", "images/opendoor.png");
		clicked = true;
	}
    
});

$("#door").hover(function() {
    if ( $("#alice2").hasClass("smaller") ) {
    $("#door").addClass("pointer");
    $("#door").toggleClass("bigger");
    $("#door").click(function() {
        window.location = "../chapter_2/index.html";
    });
    };

});

});
/*
$(".nav li ul li").mouseover(function() {
    $(this).toggleClass("hovered");
    });

});*/