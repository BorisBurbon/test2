//параллах эффект
$(window).scroll(function() {
    var st = $(this).scrollTop() /70;

    $(".wrap").css({
        "transform" : "translate3d(0px, " + st  + "%, .01px)",
        "-webkit-transform" : "translate3d(0px, " + st  + "%, 01px)"
    });

});

// адоптация меню
$('.handle').on('click', function(){
    $('nav ul').toggleClass('showing');
});

// фиксирование меню при скроле, в него же вставил анимацию при скруле
$(function () {
    // высота "шапки", px
    var h_hght = $('.header').outerHeight();
    // высота блока с меню, px
    var h_nav = $('.menu-shadow').outerHeight();
    var top;
    $(window).scroll(function () {
        // отступ сверху
        top = $(this).scrollTop();
        if ((h_hght - top) <= h_nav) {
            $('.menu-shadow').css('top', '0');
        }
        else if (top < h_hght && top > 0) {
            $('.menu-shadow').css({
                'bottom': top,
                'top': '',
                'transition': '0s'
            });
        }
        else if (top < h_nav) {
            $('.menu-shadow').css({
                'top': '',
                'bottom': '-72px',
                'transition': '1.3s'
            });
        }


        /*    Запуск анимации при скруле вставил в общую функцию scroll чтобы меню не прыгало
         $(window).scroll(function(){

         });*/

        $('.scroollAnimated').each(function(){
            var animatedBlock = $(this).offset().top;
            var topWindow = $(window).scrollTop()+$(window).height();
            if (animatedBlock < topWindow-100){
                $(this).addClass('fadeInLeft');
            }
        });
        $('.scroollAnimated2').each(function(){
            var animatedBlock = $(this).offset().top;
            var topWindow = $(window).scrollTop()+$(window).height();
            if (animatedBlock < topWindow-100){
                $(this).addClass('fadeInRight');
            }
        });
        $('.scroollAnimated3').each(function(){
            var animatedBlock = $(this).offset().top;
            var topWindow = $(window).scrollTop()+$(window).height();
            if (animatedBlock < topWindow-200){
                $(this).addClass('bounceInUp');
            }
        });
        $('.scroollAnimated4').each(function(){
            var animatedBlock = $(this).offset().top;
            var topWindow = $(window).scrollTop()+$(window).height();
            if (animatedBlock < topWindow-100){
                $(this).addClass('rollIn');
            }
        });
        // Для скилбара включаем display block только при скруле в 200 пиксилей от bottom
        $('.skillBar').each(function(){
            var animatedBlock = $(this).offset().top;
            var topWindow = $(window).scrollTop()+$(window).height();// к топу прибавили высоту экрана и получили ботом
            if (animatedBlock < topWindow-200) {
                $(this).css({'display': 'block'});
            }
        });
        //Конец анимации при скруле

    });
});

//Стрелка плавное прокрутки по якорю, до меню
$(document).ready(function(){
    $('.scroll').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1200);
        e.preventDefault();
    });
    return false;
});

//Всплывающее окно

$(document).ready(function() {
    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#mask').fadeIn(500);
        $('#mask').fadeTo("slow",0.3);
        $(id).fadeIn(1000);
    });
    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
    });
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });
});


