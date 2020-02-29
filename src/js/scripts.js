var app = app || {};

app.init = function() {

    app.smooth_scroll();
    app.ScrollReveal();
    app.matchheight();
    app.animation_menu();
    app.scroll_to_top();
    app.animation();
    app.accordion();
    app.btn_show_sub_menu();

};

app.smooth_scroll = function(){
    $('a.scroll').click(function() {
   var speed = 500;
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;
   $('body,html').animate({scrollTop:position}, speed, 'swing');

   return false;
   });
}




app.matchheight = function() {
    $('.item-matchheight').matchHeight();
    width = $(window).width();
    if (width < 641) {
        $('.item-matchheight-sm').matchHeight();
    }
}

app.animation_menu = function() {

    $(window).on('load scroll', function() {
        var scrollT = $(window).scrollTop();
        if (scrollT >= 200) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    $(window).on('load scroll', function() {
        var scrollT = $(window).scrollTop();
        if (scrollT >= 250) {
            $('body').on('mousewheel', function(e) {
                if (e.originalEvent.wheelDelta > 0) {
                    $('header').removeClass('header_up');
                } else {
                    $('header').addClass('header_up');
                }
            });
        } else {
            $('header').removeClass('header_up');
        }
    });

};

app.scroll_to_top = function() {


    var footer_h = $('footer').height(),
        pagetop = $('#btn-go-top'),
        footer = $('footer').position().top;

    $(window).on('load scroll', function() {
      var scrollT = $(window).scrollTop();
      if(scrollT < 200) {
        pagetop.fadeOut();
      } else {
        pagetop.fadeIn();
      }
      if($(window).scrollTop() + $(window).height() > $(document).height() - footer_h) {
        pagetop.addClass('fixed-button');
      } else{
        pagetop.removeClass('fixed-button');

      }
    });
    $('#btn-go-top').click(function() {
      $('html, body').animate({scrollTop:0},500);
      return false;
    });

}


app.animation = function() {
    $('#button-menu').click(function() {

        offsetY = window.pageYOffset;
        console.log(offsetY);
        if(offsetY>200){
            $('header').addClass('fixed-second');
        }
        $('body').css({
            position: 'fixed',
            'top': -offsetY + 'px'
        });

        $('body').append('<div class="overlay2"></div>');
        $('.overlay2').fadeIn('slow');
        $('#btn-close').show();
        var modal = '.right-header';
        $(modal).fadeIn('slow');
        $('.main-nav > li').css({
            opacity: 0
        });
        var delaySpeed = 130;
        var fadeSpeed = 300;
        $('.main-nav > li').each(function(i) {
            $(this).delay(i * (delaySpeed)).css({
                display: 'block',
                opacity: '0',
                position: 'relative',
                top: '20px'
            }).animate({
                opacity: '1',
                top: '0'
            }, fadeSpeed);
        });
        setTimeout(function() {
            $('#phone-header').stop().animate({
                opacity: 1
            }, 800);
        }, 600);
        setTimeout(function() {
            $('#contact-header').stop().animate({
                opacity: 1
            }, 1000);
        }, 600);

        $('.overlay2, #btn-close').off().click(function() {


            $('body').css('position', 'static');
            $(window).scrollTop(offsetY);

            $('#btn-close').hide();

            $('header').removeClass('fixed-second');

            $(modal).fadeOut('slow');
            $('#phone-header').stop().animate({
                opacity: 0
            });
            $('#contact-header').stop().animate({
                opacity: 0
            });
            $('.overlay2').fadeOut('slow', function() {
                $('.overlay2').remove();
            });
        });

        $(window).on('resize', function() {
            modalResize();
        });

    });
}

app.accordion = function() {

    $(".row-faq .ttl-faq").click(function() {
        $(this).stop().toggleClass("active");
        $(this).next(".content-faq").slideToggle();
    });
}


app.ScrollReveal = function() {
    window.sr = ScrollReveal();
    var block = {
        reset: false,
        mobile: true,
        duration: 500,
        delay: 1
    }
    sr.reveal('.has-animation-fi', block)
};

app.btn_show_sub_menu = function(){
    $('.btn-show-sub').click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
}

$(function() {

    app.init();

});