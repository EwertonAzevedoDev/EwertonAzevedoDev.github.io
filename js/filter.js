// init Isotope
var elem = document.querySelector('.grid');
var $grid = new Isotope( elem, {
  // options
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// bind filter button click
$('.filters-button-group').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');    
    $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});