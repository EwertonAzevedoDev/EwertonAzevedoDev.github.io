// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'    
});

// bind filter button click
$('.filters-button-group .switch').click(function() {    
    
    $('.filters-button-group .switch').removeClass('is-checked');
    $(this).addClass('is-checked');

    var selector = $(this).attr('data-filter');
    console.log("filtering by: " + selector)
    $grid.isotope({
        filter: selector
    });
    return false;
});

