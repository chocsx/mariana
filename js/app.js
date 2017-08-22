$(document).ready(function(){
    $('.hamburger').click(function() {
            $('nav ul.menu').toggleClass('open');
            $('.hamburger').toggleClass('is-active');
    });
    $('.slider').slick({
        infinite: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        speed: 1000,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        mobileFirst: true
    });
});
