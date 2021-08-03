 

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});




// start smooth
var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]',
    header: null,

    // Speed & Easing
    speed: 1000,
    offset: 40,
    easing: 'easeInOutCubic',
    customEasing: function (time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

    },
    before: function (anchor, toggle) {}, // Callback to run before scroll
    after: function (anchor, toggle) {} // Callback to run after scroll
});
// end smooth

var bar = document.getElementById("bar");
window.onscroll = function () {
    "use strict";
    if (window.pageYOffset > 200) {
        bar.style.display = "block";
 
    } else {
   bar.style.display = "none";
    }
};

// $(document).on('click', '.navbar-collapse.in', function (e) {
//     if ($(e.target).is('a:not(".dropdown-toggle")')) {
//         $(this).collapse('hide');
//     }
// });
