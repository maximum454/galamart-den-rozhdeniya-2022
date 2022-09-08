$(function () {
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top-130;

        $('html, body').animate({scrollTop: dn}, 1000);
    });

    $('.js-all-more').on('click', function (){
        $('.all-block__item').removeClass('hidden');
        $(this).addClass('d-none');
    })

    $('.js-slider-add').on('click', function (){
        $('.slider-block').removeClass('hidden');
        $(this).addClass('d-none');
    })

    $('.wrp').parent('.container').css({'max-width':'100%', 'padding':'0'});

    $('.js-category-more').on('click', function (){
        $('.supersubbota2022-category__body').removeClass('d-none')
    })
})

const swiperBlock = new Swiper('.swiper-block', {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 5,
        }
    }
});