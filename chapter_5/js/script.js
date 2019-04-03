$(document).ready(function(){


let clicked = false;
	$('#aliceflamingo').click(function(){
        if (clicked === false) {
        $(this).attr('src', 'images/flamingo2.png');
        clicked = true;
    } else {
        $(this).attr('src', 'images/alice_flamingo.png');
        clicked = false;
    };
});

    $('#a2').on('click', function(){
        $('#text').html('blarg');
    }
    );

    $('#alice').on('click', function(){
        $(this).addClass('grow');
    }
    );

});