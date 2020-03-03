(function($) {
    function setimage() {
        var $height = $(window).height();
        var $width = $(window).width();
        var win_ratio = $width / $height;
        // $(".Opening").css({
        //     "height": $height
        // });
        // $(".Opening ul li").css({
        //     "height": $height
        // });
        if (win_ratio > 1.5) {
            $(".Opening ul li img.Opening__img").css({
                "width": "100%",
                "height": "auto",
                "margin-left": 0
            });
            var winwidth = $(".Opening").width();
            var imgheight = winwidth * 0.66;
            var winheight = $(".Opening").height();
            var imgtopmargin = (imgheight - winheight) / 2;
            $(".Opening ul li img.Opening__img").css({
                // "margin-top": -imgtopmargin
            });
        } else if (win_ratio < 1.5) {
            var imgwidth = (($height / 800)) * 1200;
            var winwidth = $(".Opening").width();
            var imgmargin = (winwidth - imgwidth) / 2;
            $(".Opening ul li img.Opening__img").css({
                // "width": imgwidth,
                // "height": $height,
                //"margin-left": imgmargin,
                //"margin-top": 0
            });
        }
    }
    $(function() {
        setimage();
        var $interval = 99999999999999;
        var $fade_speed = 2000;
        $(".Opening ul li").hide().css({
            "position": "absolute",
            "top": 0,
            "left": 0
        });
        $(".Opening ul li:first").addClass("active").show();
        $(".Opening ul li:first img.Opening__img").animate({
            paddingRight: 0.1
        }, {
            duration: 5000,
            step: function(now, fx) {
                $(this).css({
                    transform: 'scale(' + (1 + now + 0.2 ) + ')'
                });
            },
            complete: function() {
                //$(".Opening ul li img.Opening__img").css("paddingRight", 0);
            }
        })
        setInterval(function() {
            var $active = $(".Opening ul li.active");
            var $activeafter = $(".Opening ul li.active:after");
            var $next = $active.next("li").length ? $active.next("li") : $(".Opening ul li:first");
            $active.fadeOut($fade_speed);
            $active.removeClass("active");
            $next.fadeIn($fade_speed).addClass("active");
            $(".Opening ul li.active img.Opening__img").animate({
                paddingRight: 0.1
            }, {
                duration: 5000,
                step: function(now, fx) {
                    $(this).css({
                        transform: 'scale(' + (1 + now) + ')'
                    });
                },
                complete: function() {
                    $(".Opening ul li img.Opening__img").css("paddingRight", 0);
                }
            })
        }, $interval);
    });
    var timer = false;
    $(window).resize(function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            // console.log('resized');
            setimage();
        }, 200);
    });
})(jQuery);