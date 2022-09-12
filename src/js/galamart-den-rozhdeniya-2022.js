@@include('./partials/jquery.countdown.min.js')
$(function () {
    $('.wrp').parent('.container').css({'max-width':'100%', 'padding':'0'});

    $('#getting-started').countdown('2022/10/09', function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    }).on('finish.countdown', function (e){
        console.log(1)
    });


    function detectDevice() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            initSliderCalendar();

        }else{


        }
    }
})


const swiperDenRozhdeniya2022 = new Swiper('.swiper-den-rozhdeniya-2022', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiperCalendar= swiperCalendar;
var swiperCalendarInit = false;


function swiperCalendarMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let desktop = window.matchMedia('(min-width: 768px)');
    if (desktop.matches) {
        if(swiperCalendar){
            swiperCalendar.destroy();
            swiperCalendarInit = false;
        }
    } else if (mobile.matches) {
        if (!swiperCalendarInit) {
            swiperCalendarInit = true;
            document.querySelectorAll('.den-rozhdeniya-2022-calendar').forEach(n => {
                swiperCalendar = new Swiper(n.querySelector('.swipercalendar'), {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    observer: true,
                    observeParents: true,
                });
            });
        }
    }
    swiperCalendar.update();
}

window.addEventListener('load', function() {
    if($('.swipercalendar').length){
        swiperCalendarMode();
    }
});

window.addEventListener('resize', function() {
    if($('.swipercalendar').length){
        swiperCalendarMode();
    }
});
