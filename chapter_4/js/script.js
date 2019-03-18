$(document).ready(function(){

	$('#a1').on('click', function(){
        $('#text').html('<p>This was not an encouraging opening for a conversation. Alice replied, rather shyly, I — I hardly know, sir, just at present — at least I know who I WAS when I got up this morning, but I think I must have been changed several times since then.</p><p><center><a href="#" id="a2">→</a></center></p>');
    }
    );

    $('#a2').on('click', function(){
        $('#text').html('blarg');
    }
    );

    $('#alice').on('click', function(){
        $(this).addClass('grow');
    }
    );

});