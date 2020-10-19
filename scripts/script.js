$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");

    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});

$(document).ready(function () {
    $('.submenu-title').each(function () {
        $(this).html($(this).closest('.dropdown-submenu').children('.dropdown-toggle').text());
    });
});

$(document).on('click', '.basket__remove-item', function (e) {
    $(this).closest('.basket__item').remove();
});

$('body').on('click', function (e) {
    if (!$('.nav-link__collapse').is(e.target) &&
        $('.nav-link__collapse').has(e.target).length === 0
    ) {
        $('.nav-link__collapse').collapse('hide');
    }
});

$(document).on('click', '.header .dropdown-menu', function (e) {
    e.stopPropagation();
});

$('.go-back').on('click', function (e) {
    if ($(this).parent().parent().hasClass('show')) {
        $(this).parent().parent().removeClass('show');
    }
});

$('.nav-item > .dropdown-toggle').on('click', function () {
    if ($(this).parent().hasClass('show') == false) {
        $('.nav-link__burger').attr('src', '../icons/header-close.svg');
    } else {
        $('.nav-link__burger').attr('src', '../icons/header-burger.svg');
    }
});