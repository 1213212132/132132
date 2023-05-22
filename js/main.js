$(function () {
    $('.main_slide').slick({
        //dots: true,
        infinite: true,
        autoplay: true,      //자동시작 (boolean) -default:false
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('#prevArrow'),
        nextArrow: $('#nextArrow'),

    });
})