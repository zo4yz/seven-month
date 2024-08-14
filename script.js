$(document).ready(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        e.stopPropagation();
    });

    $('html').click(function() {
        $('.nav-dropdown').hide();
    })
    $('#nav-toggle').click(function(e) {
        $('nav ul').slideToggle();
        e.preventDefault();
        e.stopPropagation();
    })
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    })
    $(document).click(function(e) {
        if (!$(e.target).closest('nav').length) {
            $('.nav-list').slideUp();
            $('#nav-toggle').removeClass('active');
        }
    })
    $('nav-ul class:S#about').click(function(e) {
        $('.about').toggle('active');
    });
});