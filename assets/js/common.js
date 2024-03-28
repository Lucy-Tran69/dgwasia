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
