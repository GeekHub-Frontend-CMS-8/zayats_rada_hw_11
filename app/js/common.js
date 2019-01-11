$('.mobile-tab').hide();

$('#burg').on('click', function(){
    $('.mobile-tab').slideToggle();
});


$(document).ready(function() {
    $("#owl-demo").owlCarousel({

        navigation : false,
        pagination : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true
    });
});

$(document).ready(function() {
    $("#owl-header").owlCarousel({

        navigation : true,
        pagination : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true
    });
});

$(document).ready(function(){
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});




