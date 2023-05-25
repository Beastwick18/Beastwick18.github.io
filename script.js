// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// This is incredibly stupid, but it works
var current = 0;
var max_elem = document.querySelectorAll('.background').length;
var direction = 0;
var animations = [ 'animate-left', 'animate-right', 'animate-up', 'animate-down' ];
setInterval(() => {
    var items = document.querySelectorAll('.background.ready');
    console.log(current);
    items.forEach((elem) => {
        if($(elem).data('index') == current) {
            // Reset all z index
            if(current == 0) {
                items.forEach((elem) => {
                    $(elem).removeClass('behind');
                });
            }
            $(elem).removeClass('ready');
            $(elem).addClass(animations[direction]);
            direction = (direction + 1) % 4;
            setTimeout(() => {
                $(elem).addClass('behind');
                animations.forEach((m) => {
                    $(elem).removeClass(m);
                });
                $(elem).addClass('ready');
                current = (current + 1) % max_elem;
            }, 1000);
        }
    });
}, 5000);

var totop = $('#totop');
var more = $('#scroll-for-more');

$(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
        totop.addClass('show');
        more.addClass('hide');
    } else {
        totop.removeClass('show');
        more.removeClass('hide');
    }
});

// totop.click((e) => {
//     e.preventDefault();
// });

window.addEventListener('resize', () => {
    // We execute the same script as before
    vh = Math.max(window.innerHeight * 0.01, vh);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
