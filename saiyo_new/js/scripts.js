var app = app || {};

var spBreak = 768;

app.init = function() {

  app.viewport();
  app.fixedHeader();
  app.btnTop();
  app.mainVisual();
  app.scrollReveal();
  app.mobileMenu();
  app.interviewSlider();
  app.infoTabs();
  app.olderIE();
  app.menuFooter();
  app.matchHeight();

};


app.isMobile = function() {

  return $(window).width() < spBreak;

};


app.isOldIE = function() {

  return $('html.ie9').length || $('html.ie10').length;

};


app.viewport = function() {

  var metaViewport = document.getElementById('viewport');
  var tabletWidth = 768;
  var pcWidth = 1050;

  var viewports = {
    default: metaViewport.getAttribute('content'),
    tablet: 'width=1100'
  };

  var viewportSet = function() {
    if (screen.width >= tabletWidth && screen.width < pcWidth) {
      metaViewport.setAttribute('content', viewports.tablet);
    } else {
      metaViewport.setAttribute('content', viewports.default);
    }
  }

  viewportSet();

  window.onload = function() {
    viewportSet();
  }

  window.onresize = function() {
    viewportSet();
  }
}


app.fixedHeader = function() {

  var element, distance;

  if (!app.isMobile() && $('body.page-top').length) {

    $('#header').clone().removeAttr('id').addClass('header-fixed').appendTo('body');

    element = $('.header-fixed');
    distance = 400;

    toogleHeaderActive();
    toogleHeaderLeft();

    $(window).on('load scroll resize', function() {
      toogleHeaderActive();
      toogleHeaderLeft();
    });

  } else {

    element = $('.header-default');
    distance = 0;

    toogleHeaderShadow();
    toogleHeaderLeft();

    $(window).on('load scroll resize', function() {
      toogleHeaderShadow();
      toogleHeaderLeft();
    });

  }

  function toogleHeaderActive() {
    if ($(window).scrollTop() > distance) {
      element.addClass('active');
    } else {
      element.removeClass('active');
    }
  }

  function toogleHeaderShadow() {
    if ($(window).scrollTop() > distance) {
      element.addClass('shadow');
    } else {
      element.removeClass('shadow');
    }
  }

  function toogleHeaderLeft() {
    var winLeft = $(window).scrollLeft();
    if (winLeft > 0) {
      element.css('left', -winLeft + 'px');
    } else {
      element.css('left', 0);
    }
  }

};


app.btnTop = function() {

  var btnTop = $('#btn-top');

  btnTop.click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  btnTopFade();
  btnTopFixed();

  $(window).on('load scroll resize', function() {
    btnTopFade();
    btnTopFixed();
  });

  function btnTopFade() {
    if ($(window).scrollTop() > $(window).height() * 0.2) {
      if (!btnTop.is(':visible')) {
        btnTop.css('opacity', 0).show();
        btnTop.animate({
          opacity: 1
        }, 400);
      }
    } else {
      if (btnTop.is(':visible') && !btnTop.is(':animated')) {
        btnTop.animate({
          opacity: 0
        }, 400, function() {
          btnTop.css('opacity', 1).hide();
        });
      }
    }
  }

  function btnTopFixed() {
    if (!app.isMobile()) {
      var gutter = 20;
      var footer = $('footer');
      var footerLine = $('html').height() - footer.outerHeight() - gutter;
      var winBottomLine = $(window).scrollTop() + $(window).height();
      var distance = winBottomLine - footerLine;
      if (distance > gutter) {
        btnTop.css('bottom', distance + 'px');
      } else {
        btnTop.css('bottom', gutter + 'px');
      }
    }
  }
};


app.scrollReveal = function() {
  window.sr = ScrollReveal();
  var config = {
    reset: true,
    mobile: true,
    origin: 'bottom',
    scale: 1,
    duration: 800,
    delay: 400
  };

  if (app.isOldIE()) {
    return false;
  }

  sr.reveal('.animated', config);
  config.viewFactor = 0.1;
  sr.reveal('.animated-first', config);

  if (!app.isMobile()) {
    sr.reveal('.animated-pc', config);
  }
  if (app.isMobile()) {
    sr.reveal('.animated-sp', config);
  }
};


app.mainVisual = function() {

  var header = $('#header');
  var mv = $('#mainvisual');

  if (mv.length) {
    // Top page
    setTimeout(function() {
      mv.find('.triangle').addClass('showed');
    }, 1000);

    setTimeout(function() {
      mv.find('.text').animate({
        'opacity': 1
      }, 2000);
    }, 2000);

    setTimeout(function() {
      header.css('top', 0);
    }, 3000);
  } else {
    // Inner pages
    setTimeout(function() {
      header.css('top', 0);
    }, 400);
  }

};


app.mobileMenu = function() {

  var btnMenu = $('header .menu-btn');
  var ctnMenu = $('header .menu');
  var overlay = $('.overlay-menu');
  var dropdown_arrow = $('header .arrow');
  var dropdown_content = $('header .dropdown');

  toogleNavHeight();

  $(window).on('load resize', function() {
    toogleNavHeight();
  });

  btnMenu.click(function() {
    if (!btnMenu.hasClass('active')) {
      $(this).stop().addClass('active');
      overlay.show();
      toogleNavHeight();
      ctnMenu.stop().slideDown(400, function() {
        disableScroll(true);
      });
    } else {
      $(this).stop().removeClass('active');
      overlay.hide();
      ctnMenu.stop().slideUp(400, function() {
        dropdown_arrow.removeClass('active');
        dropdown_content.slideUp(0);
        toogleNavHeightAuto();
        disableScroll(false);
      });
    }
    return false;
  });

  overlay.click(function() {
    btnMenu.stop().removeClass('active');
    overlay.hide();
    ctnMenu.stop().slideUp(400, function() {
      toogleNavHeightAuto();
      disableScroll(false);
    });
    return false;
  });

  function toogleNavHeight() {
    if (app.isMobile()) {
      var screenHeight = window.innerHeight - $('header').outerHeight();
      var navHeight = ctnMenu.outerHeight();
      if (navHeight >= screenHeight) {
        ctnMenu.css({
          'height': screenHeight + 'px',
          'overflow': 'auto'
        });
      } else {
        toogleNavHeightAuto();
      }
    }
  }

  function toogleNavHeightAuto() {
    ctnMenu.css({
      'height': 'auto',
      'overflow': 'auto'
    });
  }

  ctnMenu.find('.arrow').click(function() {
    $(this).stop().toggleClass('active');
    $(this).parent().next('.dropdown').stop().slideToggle(function() {
      toogleNavHeightAuto();
      toogleNavHeight();
    });
    return false;
  });

};


app.interviewSlider = function() {

  var element = $('#list-interview');

  element.slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: spBreak,
      settings: 'unslick'
    }]
  });
  $(window).on('resize', function() {
    element.slick('resize');
  });

};


app.infoTabs = function() {

  var tabMenu = $('#menu-info');
  var tabContent = $('#content-info');

  tabContent.find('#tab01').addClass('active');

  tabMenu.find('.btn').click(function() {
    var href = $(this).attr('href');
    tabMenu.find('.btn').removeClass('active');
    $(this).addClass('active');

    tabContent.find('.tab-content').removeClass('active');
    tabContent.find('.tab-content' + href).addClass('active');

    return false;
  });

};


app.menuFooter = function() {
  var parent = $(".footer-link");
  parent.find($("li:has(ul)")).append('<a href="#" class="toggle">&nbsp;</a>');

  $(".footer-link .toggle").on("click", function() {
    var $this = $(this);
    $this.parent().find("ul").stop().slideToggle(300);
    $this.toggleClass("open");
    return false;
  });
};


app.matchHeight = function() {
  $(".match-height").matchHeight();
};


app.olderIE = function() {

  if (app.isOldIE()) {
    flexibility(document.documentElement);
  }

};


$(function() {

  app.init();

});
