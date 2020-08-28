$(document).ready(function(){
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow: $('.btn-prev'),
        nextArrow: $('.btn-next'),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '160px',
                }
            }
        ]
    });

    $(window).scroll(function(e){
        var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(windowScroll != 0){
            $('#nav').css({
                background: '#c0301c',
                padding: '15px 0',
            });
        }else{
            $('#nav').css({
                background: '',
                padding: '',
            });
        }
    });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href');
        var bl_top = $(target).offset().top - 0;

        $('body, html').animate({scrollTop: bl_top}, 1500);
    });

    $('.section-title_list_item').click(function(e){
        e.preventDefault();
        
        var data = $(this).attr('data-filter');

        if(data != 'all'){
            $.each($('.works_item'), function(key, value){
                if($(value).attr('data-filter') != data){
                    $(value).hide();
                }else{
                    $(value).show();
                }
            });
        }else{
            $('.works_item').show();
        }
    });
});