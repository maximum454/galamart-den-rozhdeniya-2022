@@include('./partials/jquery.countdown.min.js')
$(function () {
    $('.wrp').parent('.container').css({'max-width':'100%', 'padding':'0'});

    $('#getting-started').countdown('2022/10/09', function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    }).on('finish.countdown', function (e){
        console.log(1)
    });
})

const swiperDenRozhdeniya2022 = new Swiper('.swiper-den-rozhdeniya-2022', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});