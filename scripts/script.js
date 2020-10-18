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

$('body').on('click', function (e) {
    if (!$('dropdown-menu').is(e.target) &&
        $('dropdown-menu').has(e.target).length === 0 &&
        $('show').has(e.target).length === 0
    ) {
        $('dropdown-menu').removeClass('show');
        $('.nav-link__burger').attr('src', '../icons/header-burger.svg');
    } else {
        // e.stopPropagation();
    }
});

$('.nav-item > .dropdown-toggle').on('click', function () {
    if ($(this).parent().hasClass('show') == false) {
        $('.nav-link__burger').attr('src', '../icons/header-close.svg');
    } else {
        $('.nav-link__burger').attr('src', '../icons/header-burger.svg');
    }
});