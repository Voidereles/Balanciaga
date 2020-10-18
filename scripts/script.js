$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");

    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    // $('.nav-link__burger').attr('src', '../icons/header-burger.svg');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
        // $('.nav-link__burger').attr('src', '../icons/header-close.svg');
    });


    return false;
});


$(document).ready(function () {
    $('.submenu-title').each(function () {
        $(this).html($(this).closest('.dropdown-submenu').children('.dropdown-toggle').text());
    });
});
// $('body').on('click', function (e) {
//     if (!$('dropdown-menu').is(e.target) &&
//         $('dropdown-menu').has(e.target).length === 0 &&
//         $('show').has(e.target).length === 0
//     ) {
//         // $('dropdown-menu').removeClass('show');
//         $('.nav-link__burger').attr('src', '../icons/header-burger.svg');
//     } else {
//         e.stopPropagation();
//     }
// });

$(document).on('click', '.header .dropdown-menu', function (e) {
    e.stopPropagation();
});

$('.go-back').on('click', function (e) {
    // console.log($(this).closest('show'));
    // $(this).parent('show').css('background', 'red');
    if ($(this).parent().parent().hasClass('show')) {
        console.log(e.target);
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