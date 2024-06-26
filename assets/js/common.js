$(function () {
  let items = $(".kv-list .kv-item");

  items.removeClass("active").addClass("off");

  let randomIndex = Math.floor(Math.random() * items.length);

  items.eq(randomIndex).addClass("active").removeClass("off");
  if (randomIndex > 0 && $(".bpo-page").length > 0) {
    $(".solution").addClass("cs_style02");
  } else {
    $(".solution").removeClass("cs_style02");
  }

  $(".sp-menu").click(function () {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
    $(".pagetop").toggleClass("active");
    $(".contact").toggleClass("active");
  });

  $(".nav li a").click(function () {
    $(".sp-menu").removeClass("active");
    $(".nav").removeClass("active");
    $(".pagetop").removeClass("active");
    $(".contact").removeClass("active");
  });

  $('a[href^="#"]').click(function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - 100;
    $("html,body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  if ($(".case-page").length > 0) {
    $(".nav a").on("click", function () {
      $(".nav a").removeClass("current");

      $(this).addClass("current");
    });

    setTimeout(() => {
      getHeight(".js-height_list", "js-height_item", 2);
      getHeight(".js-height_list", "js-height_item_child01", 2);
      // getHeight(".js-height_list", "js-height_item_child02", 2);
      if ($(window).width() < 768) {
        $(".js-height_item").css("height", "auto");
        $(".js-height_item_child01").css("height", "auto");
        // $(".js-height_item_child02").css("height", "auto");
      }
    }, 150);
    function adjustZoom() {
      var windowWidth = $(window).width();
      if (windowWidth < 599) {
        var zoomLevel = windowWidth / 599;
        $(".case-page").css("zoom", zoomLevel);
      } else {
        $(".case-page").css("zoom", "");
      }
    }

    // adjustZoom();

    $(window).on("resize", function () {
      getHeight(".js-height_list", "js-height_item", 2);
      if ($(window).width() < 768) {
        $(".js-height_item").css("height", "auto");
      }
      if ($(window).width() < 991) {
        $(".js-height_item_child01").css("height", "auto");
        // $(".js-height_item_child02").css("height", "auto");
      } else {
        getHeight(".js-height_list", "js-height_item_child01", 2);
        // getHeight(".js-height_list", "js-height_item_child02", 2);
      }
      // adjustZoom();
    });
  }
  if ($(".case-page").length > 0 || $(".design3d-page").length > 0) {
    $(window).scroll(function () {
      var top = $(window).scrollTop();
      $(".conversion,.contact,.pagetop").toggleClass("show", top > 90);
    });
  }

  $('.slider').slick({
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: true,
    dots: true,
  }).slickAnimation();

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
  });

  function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
  }
  
  //menu click
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("click", navHighlighter);

  function navHighlighter() {
    
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      // sectionId = current.getAttribute("id");
      
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item").classList.add("active");
      } else {
        document.querySelector(".side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item.active").classList.remove("active");
      }
    });
  }

  //menu scroll
  $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop() + 250;
		$('.component-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item.active').removeClass('active');
						$('.side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item').eq(i).addClass('active');
				}
		});
}).scroll();

//quantity
const client = document.querySelectorAll('.value-clients');
const project = document.querySelectorAll('.value-projects');
const hour = document.querySelectorAll('.value-hours');
const worker = document.querySelectorAll('.value-workers');
const speed = 200;

client.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('clients');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
project.forEach( counter => {
  const animate = () => {
     const value = +counter.getAttribute('projects');
     const data = +counter.innerText;
    
     const time = value / speed;
    if(data < value) {
         counter.innerText = Math.ceil(data + time);
         setTimeout(animate, 1);
       }else{
         counter.innerText = value;
       }
    
  }
  
  animate();
})
hour.forEach( counter => {
  const animate = () => {
     const value = +counter.getAttribute('hours');
     const data = +counter.innerText;
    
     const time = value / speed;
    if(data < value) {
         counter.innerText = Math.ceil(data + time);
         setTimeout(animate, 1);
       }else{
         counter.innerText = value;
       }
    
  }
  
  animate();
})
worker.forEach( counter => {
  const animate = () => {
     const value = +counter.getAttribute('workers');
     const data = +counter.innerText;
    
     const time = value / speed;
    if(data < value) {
         counter.innerText = Math.ceil(data + time);
         setTimeout(animate, 1);
       }else{
         counter.innerText = value;
       }
    
  }
  
  animate();
})

//language
$('.language-content').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
});

var $slickElement = $('.slick-carousel');
  var $status = $('.pagingInfo');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

    if(!slick.$dots){
      return;
    }

    var i = (currentSlide ? currentSlide : 0) + 1;

    $status.text(i + '/' + (slick.$dots[0].children.length));

  });

  $slickElement.slick({
    infinite: true,
    centerMode: false,
    slidesToShow: 4,
    arrows: true, 
    dots: true,
    autoplaySpeed: 1000,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
  });

//represent
var t = ".card-container .card-item"
, e = ".progress-bar"
, r = 5e3
, n = []
, o = document.querySelectorAll(t);
if (o.length) {
  for (var i = 0; i < o.length; i++)
      n.push({
          card: o[i],
          progressBar: o[i].querySelector(e)
      });
  var s = performance.now()
    , a = 0;
  n[a].card.classList.add("active"),
  n[a].progressBar.classList.add("active"),
  window.requestAnimationFrame((function o(i) {
      var c, l;
      i - s > r && (null === (c = document.querySelector("".concat(t, ".active"))) || void 0 === c || c.classList.remove("active"),
      null === (l = document.querySelector("".concat(t, " ").concat(e, ".active"))) || void 0 === l || l.classList.remove("active"),
      s = performance.now(),
      ++a === n.length && (a = 0),
      n[a].card.classList.add("active"),
      n[a].progressBar.classList.add("active")),
      window.requestAnimationFrame(o)
  }
  )),
  window.addEventListener("load", (function() {
      jQuery(window).width() < 769 ? jQuery(".card-container").slick({
          dots: !0,
          infinite: !0,
          fade: !0,
          cssEase: "linear",
          speed: 1e3,
          arrows: !1,
          autoplay: !0
      }) : jQuery(".card-container.slick-slider").slick("unslick")
  }
  ))
}

// var i = document.querySelectorAll(".component-section"),
// t = document.querySelector(".side-bar-menu");
// if(t) {
// for(var e = new IntersectionObserver(function(n) {
//   n.forEach(function(n) {
//     var i, r;
//     !n.isIntersecting  n.intersectionRatio <= .5  (r = t.querySelector(".side-bar-menu-item.active"), r && r.classList.remove("active"), null === (i = t.querySelector(".side-bar-menu-item[data-title='".concat(n.target.dataset.title, "']")))  void 0 === i  i.classList.add("active"), n.target.dataset.whiteSection ? t.classList.add("white-mode") : t.classList.remove("white-mode"))
//   })
// }, {
//   root: null,
//   rootMargin: "0px",
//   threshold: [.5, .75]
// }), f = "", n = 0; n < i.length; n++) e.observe(i[n]), f += '\n        <li \n            class="side-bar-menu-item '.concat(!n && "active", '"\n            data-section="').concat(i[n].id, '"\n            data-title="').concat(i[n].dataset.title, '">\n            <a href="#').concat(i[n].id, '">').concat(String(n + 1).padStart(2, "0"), "<\/a>\n        <\/li>");
// t.insertAdjacentHTML("afterbegin", f);
// for(var r = t.querySelectorAll(".side-bar-menu-item"), o = function(n) {
//   var t;
//   null === (t = r[n].querySelector("a"))  void 0 === t  t.addEventListener("click", function(t) {
//     t.preventDefault();
//     var i = document.querySelector("#" + r[n].dataset.section);
//     i && window.scrollTo({
//       top: i.offsetTop,
//       behavior: "smooth"
//     })
//   })
// }, u = 0; u < r.length; u++) o(u)
// }

});

function getHeight(parent, classname, column) {
  var $target = $("." + classname);
  var i = 0;
  var j = 0;
  var k;
  $(parent)
    .find($target)
    .each(function () {
      if ($(this).length > 0) {
        if (i < column) {
          $(this).addClass(classname + j);
          i++;
        } else {
          i = 1;
          j++;
          $(this).addClass(classname + j);
        }
      }
    });
  $(parent).find($target).css("height", "auto");
  for (k = 0; k <= j; k++) {
    var maxHeight = 0;
    $("." + classname + k).each(function () {
      var h_text = $(this).outerHeight();
      if (h_text > maxHeight) {
        maxHeight = h_text;
      }
    });
    $("." + classname + k).css("height", maxHeight);
  }
  var i = 0;
  var j = 0;
  $(parent)
    .find($target)
    .each(function () {
      if ($(this).length > 0) {
        if (i < column) {
          $(this).removeClass(classname + j);
          i++;
        } else {
          i = 1;
          j++;
          $(this).removeClass(classname + j);
        }
      }
    });
}

function loadingPageDesign() {
  let $video = $("#video");
  let $poster = $("#videoPoster");

  $video.on("canplaythrough", function () {
    $video.get(0).play();
  });

  $video.on("play", function () {
    $poster.fadeOut();
  });
}
function tabs() {
  $(".tabs .tabs_button").click(function () {
    $(".tabs .tabs_button").removeClass("active");
    $(this).addClass("active");
    $(".tabs .tabs_content").hide();
    let url = $(this).attr("data-tab");
    $("#" + url).show();
  });
}
function checkvalidate() {
  function setupValidation(formSelector) {
    $(formSelector).validate({
      // rules: {
      //   firstname: { required: true },
      //   貴社名: { required: true },
      //   お電話番号: { required: true },
      //   メールアドレス: { required: true, email: true },
      //   お問い合わせ内容: { required: true },
      //   y_agree: { required: true },
      // },
      messages: {
        "法人・組織名": { required: "入力されていません" },
        担当者様名: { required: "入力されていません" },
        メールアドレス: {
          required: "入力されていません",
          email: "メールアドレスの形式に合わせて入力してください",
        },
        お電話番号: { required: "入力されていません" },
        お問い合わせ内容: { required: "入力されていません" },
        y_agree: { required: "入力されていません" },
      },
      errorPlacement: function (error, element) {
        error.insertAfter(element);
      },
    });
  }

  $(".wrap_btnSubmit button").click(function (event) {
    event.preventDefault();

    var form = $(this).closest("form");
    setupValidation(form);

    if (form.valid()) {
      form.submit();
    }
  });
}
$(function () {
  loadingPageDesign();
  tabs();
  if (
    $(".bpo-page").length > 0 ||
    $(".case-page").length > 0 ||
    $(".hp-page").length > 0 ||
    $(".design3d-page").length > 0
  ) {
    checkvalidate();
  }
});
if ($(".design3d-page")) {
  $(".js-modal").click(function (e) {
    e.preventDefault();
    let buttonId = $(this).attr("data-modal");
    $("#" + buttonId).addClass("show");
  });
  $(".button_close").click(function (e) {
    $(this).parents(".modal").removeClass("show");
  });
  $(document).click(function (e) {
    if (!$(e.target).closest(".modal-content, .js-modal").length) {
      $("body").find(".modal").removeClass("show");
    }
  });
}

if ($(".design3d-page")) {
  let allGalleryTops = document.querySelectorAll(".gallery-top");

  allGalleryTops.forEach(function (galleryTopElement, index) {
    let galleryThumbs = new Swiper(".gallery-thumbs-" + index, {
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    new Swiper(galleryTopElement, {
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      loopedSlides: 5,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  });
}
