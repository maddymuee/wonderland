$(document).ready(function(){


$("#drinkme").click(function(){  
    $("#alice2").addClass("smaller")
});

$("#door").mouseover(function() {
    if ( $("#alice2").hasClass("smaller") ) {
    $("#door").addClass("pointer");
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