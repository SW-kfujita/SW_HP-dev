(function($) {
    function setimage2() {
        var $height2 = $(window).height();
        var $width2 = $(window).width();
        var win_ratio2 = $width2 / $height2;
        // $(".Opening2").css({
        //     "height": $height2
        // });
        // $(".Opening2 ul li").css({
        //     "height": $height2
        // });
        if (win_ratio2 > 1.5) {
            $(".Opening2 ul li img.Opening__img").css({
                "width": "100%",
                "height": "auto",
                "margin-left": 0
            });
            var winwidth2 = $(".Opening2").width();
            var imgheight2 = winwidth2 * 0.66;
            var winheight2 = $(".Opening2").height();
            var imgtopmargin2 = (imgheight2 - winheight2) / 2;
            $(".Opening2 ul li img.Opening2__img").css({
                "margin-top": -imgtopmargin2
            });
        } else if (win_ratio2 < 1.5) {
            var imgwidth2 = (($height2 / 800)) * 1200;
            var winwidth2 = $(".Opening2").width();
            var imgmargin2 = (winwidth2 - imgwidth2) / 2;
            $(".Opening2 ul li img.Opening2__img").css({
                "width": imgwidth2,
                "height": $height2,
                "margin-left": imgmargin2,
                "margin-top": 0
            });
        }
    }
    $(function() {
        setimage2();
        var $interval2 = 99999999999999;
        var $fade_speed2 = 2000;
        $(".Opening2 ul li").hide().css({
            "position": "absolute",
            "top": 0,
            "left": 0
        });
        $(".Opening2 ul li:first").addClass("active").show();
        $(".Opening2 ul li:first img.Opening__img").animate({
            paddingRight: 0.1
        }, {
            duration: 5000,
            step: function(now, fx) {
                $(this).css({
                    transform: 'scale(' + (1 + now + 0.32 ) + ')'
                });
            },
            complete: function() {
                $(".Opening2 ul li img.Opening2__img").css("paddingRight", 0);
            }
        })
        setInterval(function() {
            var $active2 = $(".Opening2 ul li.active");
            var $active2after = $(".Opening2 ul li.active:after");
            var $next2 = $active2.next("li").length ? $active2.next("li") : $(".Opening2 ul li:first");
            $active2.fadeOut($fade_speed2);
            $active2.removeClass("active");
            $next2.fadeIn($fade_speed2).addClass("active");
            $(".Opening2 ul li.active img.Opening__img").animate({
                paddingRight: 0.1
            }, {
                duration: 5000,
                step: function(now, fx) {
                    $(this).css({
                        transform: 'scale(' + (1 + now) + ')'
                    });
                },
                complete: function() {
                    $(".Opening2 ul li img.Opening__img").css("paddingRight", 0);
                }
            })
        }, $interval2);
    });
    var timer2 = false;
    $(window).resize(function() {
        if (timer2 !== false) {
            clearTimeout(timer2);
        }
        timer2 = setTimeout(function() {
            // console.log('resized');
            setimage2();
        }, 200);
    });
})(jQuery);