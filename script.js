$('.about-me-button').click(() => {
    var element = document.getElementById('about-me');
    element.scrollIntoView();
});
$('.projects-button').click(() => {
    var element = document.getElementById('projects');
    element.scrollIntoView();
});

// This is incredibly stupid, but it works
var current = 0;
var max_elem = document.querySelectorAll('.background').length;
var mode = 0;
setInterval(() => {
    var items = document.querySelectorAll('.background.ready');
    console.log(current);
    items.forEach((elem) => {
        if($(elem).data('index') == current) {
            // Reset all z index
            if(current == 0) {
                items.forEach((elem) => {
                    $(elem).css('z-index', '');
                });
            }
            $(elem).css('transition', '');
            $(elem).removeClass('ready');
            if(mode == 0)
                $(elem).addClass('animate-left');
            else if(mode == 1)
                $(elem).addClass('animate-right');
            else if(mode == 2)
                $(elem).addClass('animate-up');
            else if(mode == 3)
                $(elem).addClass('animate-down');
            mode = (mode + 1) % 4;
            setTimeout(() => {
                $(elem).css('transition', 'all 0s');
                $(elem).css('z-index', '-1');
                $(elem).removeClass('animate-left');
                $(elem).removeClass('animate-right');
                $(elem).removeClass('animate-up');
                $(elem).removeClass('animate-down');
                $(elem).addClass('ready');
                current = (current + 1) % max_elem;
            }, 1000);
        }
    });
}, 5000);

var totop = $('#totop');
var more = $('#scroll-for-more');

$(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
        totop.addClass('show');
    } else {
        totop.removeClass('show');
    }
    if ($(window).scrollTop() > 0) {
        more.addClass('hide');
    } else {
        more.removeClass('hide');
    }
});

totop.click((e) => {
    e.preventDefault();
    $('html, body').stop(true, true).animate({scrollTop:0}, 100);
});
