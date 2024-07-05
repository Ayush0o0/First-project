// navbar function    
var lastScrollTop = 0;
$(window).scroll(function () {
    var st = $(this).scrollTop();
    var banner = $('.nav');
    setTimeout(function () {
        if (st > lastScrollTop) {
            banner.addClass('hide');
        } else {
            banner.removeClass('hide');
        }
        lastScrollTop = st;
    }, 100);
});

// rotating circle
window.onscroll = function () {
    var theta = document.documentElement.scrollTop / 50 % Math.PI;

    document.getElementById('SCROLLER').style.transform = 'rotate(' + theta + 'rad)';
}
// ques ans function
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}