(function ($) {
  "use strict";

  const get_current_theme = localStorage.getItem("theme");

  if (get_current_theme == "dark") {
    $("body").addClass("dark");
  } else {
    $("body").removeClass("dark");
  }

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Draggable);
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper", // should wrap the whole page
    content: "#smooth-content", // should contain all content
    smooth: 2,
    smoothTouch: 0.1,
    effects: true, // must be true to use data-lag
  });

  $(".sidebar-button").on("click", function () {
    $(this).toggleClass("active");
  });

  const sidebarButton = document.querySelector(".sidebar-button");

  if (sidebarButton) {
    sidebarButton.addEventListener("click", () => {
      document.querySelector(".main-menu").classList.toggle("show-menu");
    });
  }

  $(".menu-close-btn").on("click", function () {
    $(".main-menu").removeClass("show-menu");
  });

  // sidebar
  $(".right-sidebar-button").on("click", function () {
    $(".right-sidebar-menu").addClass("show-right-menu");
  });
  $(".right-sidebar-close-btn").on("click", function () {
    $(".right-sidebar-menu").removeClass("show-right-menu");
  });

  jQuery(".dropdown-icon").on("click", function () {
    jQuery(this)
      .toggleClass("active")
      .next("ul, .mega-menu, .mega-menu2")
      .slideToggle();
    jQuery(this)
      .parent()
      .siblings()
      .children("ul, .mega-menu, .mega-menu2")
      .slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
  jQuery(".dropdown-icon2").on("click", function () {
    jQuery(this).toggleClass("active").next(".submenu-list").slideToggle();
    jQuery(this).parent().siblings().children(".submenu-list").slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
  jQuery(function ($) {
    $(document).on("click", ".portfolio-drop-down", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      let submenu = $(this).siblings(".sub-menu"); // Get submenu

      if (submenu.length) {
        // Close other submenus at the same level
        $(this).parent().siblings().find(".sub-menu").slideUp();

        // Toggle clicked submenu
        submenu.stop(true, true).slideToggle();
      }
    });
  });

  // sticky header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header.header-area");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 0);
    }
  });

  // FancyBox Js
  $('[data-fancybox="gallery-01"]').fancybox({
    buttons: ["close"],
    loop: false,
    protect: true,
  });
  $('[data-fancybox="video-player"]').fancybox({
    buttons: ["close"],
    loop: false,
    protect: true,
  });

  //Counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  function equalizeTestimonials() {
    let cards = document.querySelectorAll(
      ".home1-testimonial-section .testimonial-card, .home6-testimonial-section .testimonial-card3, .home7-testimonial-section .testimonial-card, .home9-testimonial-section .testimonial-card"
    );
    let maxHeight = 0;

    // Reset heights first
    cards.forEach((card) => {
      card.style.height = "auto";
    });

    // Find tallest card
    cards.forEach((card) => {
      let h = card.offsetHeight;
      if (h > maxHeight) maxHeight = h;
    });

    // Apply tallest height to all
    cards.forEach((card) => {
      card.style.height = maxHeight + "px";
    });
  }
  // Home1 Testimonial Slider
  var swiper = new Swiper(".home1-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
    on: {
      init: function () {
        equalizeTestimonials();
      },
      resize: function () {
        equalizeTestimonials();
      },
    },
  });
  // Home2 Testimonial Slider
  var swiper = new Swiper(".home2-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    autoHeight: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });
  // Home5 Banner Bottom Slider
  var swiper = new Swiper(".home5-banner-bottom-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 30,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 5,
      },
    },
  });
  // Home5 Portfolio Slider
  const home5SliderEl = document.querySelector(".home5-portfolio-slider");
  if (home5SliderEl) {
    var home5Swiper = new Swiper(".home5-portfolio-slider", {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      loop: false,
      effect: "fade",
      fadeEffect: { crossFade: true },

      mousewheel: {
        invert: false,
        releaseOnEdges: true,
      },
      autoplay: false, // initially off

      navigation: {
        nextEl: ".next-6",
        prevEl: ".prev-6",
      },
      pagination: {
        el: ".work-fractional-pagi",
        type: "fraction",
      },
    });

    // Update settings for desktop/mobile
    function updateHome5Swiper() {
      if (window.innerWidth <= 991) {
        // Mobile
        home5Swiper.params.autoplay = {
          delay: 2500,
          disableOnInteraction: false,
        };
        home5Swiper.autoplay.start();

        home5Swiper.params.mousewheel = {
          invert: true,
          releaseOnEdges: false,
        };
        home5Swiper.mousewheel.enable();
      } else {
        // Desktop
        home5Swiper.autoplay.stop();
        home5Swiper.params.autoplay = false;

        home5Swiper.params.mousewheel = {
          invert: false,
          releaseOnEdges: true,
        };
        home5Swiper.mousewheel.enable(); // enable mousewheel explicitly
      }
      home5Swiper.update();
    }

    // Initial call
    updateHome5Swiper();

    // Update on window resize
    window.addEventListener("resize", () => {
      updateHome5Swiper();
    });
  }

  // Home6 Testimonial Slider
  var swiper = new Swiper(".home6-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 2,
      },
    },
    on: {
      init: function () {
        equalizeTestimonials();
      },
      resize: function () {
        equalizeTestimonials();
      },
    },
  });
  // Home7 Porfolio Slider
  var swiper = new Swiper(".home7-portfolio-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 30,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".portfolio-slider-next",
      prevEl: ".portfolio-slider-prev",
    },
    pagination: {
      el: ".progress-pagination",
      type: "progressbar",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  // Home7 Testimonial Slider
  var swiper = new Swiper(".home7-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 28,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1600: {
        slidesPerView: 4,
      },
    },
    on: {
      init: function () {
        equalizeTestimonials();
      },
      resize: function () {
        equalizeTestimonials();
      },
    },
  });
  // Home7 Team Slider
  var swiper = new Swiper(".home7-team-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 30,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
  // Recent Product Slider
  var swiper = new Swiper(".related-product-slider", {
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2000, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".related-product-slider-next",
      prevEl: ".related-product-slider-prev",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  // Inner Team Slider
  var swiper = new Swiper(".inner-team-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 30,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  // Inner Gallery Slider
  var swiper = new Swiper(".inner-gallery-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 50,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  // Portfolio Horizontal Slider
  if (document.querySelector(".pf-horizontal-slider")) {
    var swiper = new Swiper(".pf-horizontal-slider", {
      loop: false,
      modules: [SwiperGL],
      speed: 1200,
      effect: "gl",
      mousewheel: true,
      navigation: {
        nextEl: '.pf-slider-next',
        prevEl: '.pf-slider-prev',
      },
      pagination: {
        el: '.pf-slider-pagination',
        clickable: true,
      },
    });
  }

  //Portfolio Parallax Slider
  var swiper = new Swiper(".pf-parallax-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		loop: false,
		direction: "vertical",
    parallax: true,
		// mousewheel: true,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
    },
		navigation: {
      nextEl: '.pf-slider-next',
      prevEl: '.pf-slider-prev',
    },
    pagination: {
      el: '.pf-slider-pagination',
      clickable: true,
    },
	});
  //Portfolio Creative Text Slider
  var swiper = new Swiper(".pf-creative-text-slider", {
    slidesPerView: 1,
    speed: 1500,
    loop: false,
    autoplay: {
      delay: 2500, // Adjust autoplay delay as needed
      disableOnInteraction: false
    },
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -1000]
      },
      next: {
        translate: ["100%", 0, 0]
      }
    },
    on: {
      init: function () {
        updatePagination(this);
      },
      slideChange: function () {
        updatePagination(this);
      },
    },
  });
  /* pagination logic */
  function updatePagination(swiper) {
    const total = swiper.slides.length;
    const current = swiper.activeIndex + 1;

    document.querySelector(".pf-current").textContent = current;
    document.querySelector(".pf-total").textContent = total;

    const progress = (current / total) * 100;
    document.querySelector(".pf-progress-bar").style.height = progress + "%";
  }
  //Portfolio Carousel Slider
  var contentSwiper = new Swiper(".portfolio-carousel-content-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		loop: true,
    effect: 'fade',
    allowTouchMove: false,
	});
  var imageSwiper = new Swiper(".portfolio-carousel-img-slider", {
		loop: true,
    speed:800,
    slidesPerView: 4,
    spaceBetween: 70,
    centeredSlides : true,
    mousewheel: true,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
    },
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: -8, // Slide rotate in degrees
      // stretch: 120, // Stretch space between slides (in px)
      depth: 200, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows : false, // Enables slides shadows
    },
    thumbs: {
      swiper: contentSwiper,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 55,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 55,
      },
      1400: {
        slidesPerView: 4,
      },
    },
	});
  //Portfolio Coverflow Slider
  var swiper = new Swiper(".portfolio-coverflow-slider", {
		loop: true,
    speed:800,
    slidesPerView: 4,
    // spaceBetween: 70,
    centeredSlides : true,
    mousewheel: true,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 20, // Slide rotate in degrees
      // stretch: 120, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows : false, // Enables slides shadows
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
	});

  //Portfolio Thumb Bg Slider
  var pfSmThumbswiper = new Swiper(".pf-thumb-sm-img-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 30,
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });
  var swiper2 = new Swiper(".pf-thumb-bg-img-slider", {
		direction: "horizontal",
		effect: "slide",
		parallax: true,
		speed: 1600,
    allowTouchMove: false,
    mousewheel: false, 
		navigation: {
			nextEl: ".pf-thumb-bg-img-slider-next",
			prevEl: ".pf-thumb-bg-img-slider-prev",
		},
    thumbs: {
      swiper: pfSmThumbswiper,
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
      },
      992: {
        allowTouchMove: false,
        mousewheel: false,
      }
    }
	});

  //Portfolio Scroll Split Slider
  (function () {
    const imgEl = document.querySelector(".pf-scroll-split-img-slider");
    const contentEl = document.querySelector(".pf-scroll-split-content-slider");

    // ✅ If this page doesn't have these sliders, don't run
    if (!imgEl || !contentEl) return;

    function toggleMousewheel(swiper) {
      if (!swiper || !swiper.mousewheel) return;

      if (window.innerWidth >= 992) {
        swiper.mousewheel.enable();
      } else {
        swiper.mousewheel.disable();
      }
    }

    var pfScrollSplitImgSwiper = new Swiper(".pf-scroll-split-img-slider", {
      slidesPerView: 1,
      speed: 1200,
      loop: false,
      effect: "creative",
      grabCursor: false,

      // keep mousewheel config, but enable/disable via API
      mousewheel: {
        sensitivity: 1,
        releaseOnEdges: true,
      },

      creativeEffect: {
        perspective: true,
        limitProgress: 2,
        prev: {
          translate: [0, 0, -400],
          rotate: [0, 65, 0],
          origin: "0% 50%",
          shadow: true,
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, -85, 0],
          origin: "0% 50%",
          shadow: true,
        },
      },

      watchSlidesProgress: true,

      on: {
        init: function () {
          toggleMousewheel(this);
        },

        progress: function () {
          this.slides.forEach((slide) => {
            const p = slide.progress;
            const r = Math.max(-1, Math.min(1, p));

            slide.style.transformOrigin = "0% 50%";

            const rotY = r * -90;
            const z = -Math.abs(r) * 120;

            slide.style.transform = `translate3d(0,0,${z}px) rotateY(${rotY}deg)`;
            slide.style.filter = `brightness(${1 - Math.abs(r) * 0.25})`;
          });
        },

        setTransition: function (speed) {
          this.slides.forEach((slide) => {
            slide.style.transitionDuration = `${speed}ms`;
          });
        },
      },
    });

    var pfScrollSplitContentSwiper = new Swiper(".pf-scroll-split-content-slider", {
      slidesPerView: 1,
      speed: 1500,
      loop: false,

      mousewheel: {
        sensitivity: 1,
        releaseOnEdges: true,
      },

      parallax: true,
      effect: "fade",
      fadeEffect: { crossFade: true },

      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: (n) => String(n).padStart(2, "0"),
        formatFractionTotal: (n) => String(n).padStart(2, "0"),
        renderFraction: (currentClass, totalClass) => `
          <span class="${currentClass}"></span>
          <span class="pf-split-pagi-line"></span>
          <span class="${totalClass}"></span>
        `,
      },

      on: {
        init: function () {
          toggleMousewheel(this);
        },
      },
    });

    // sync
    pfScrollSplitImgSwiper.controller.control = pfScrollSplitContentSwiper;
    pfScrollSplitContentSwiper.controller.control = pfScrollSplitImgSwiper;

    // resize update
    window.addEventListener("resize", () => {
      toggleMousewheel(pfScrollSplitImgSwiper);
      toggleMousewheel(pfScrollSplitContentSwiper);
    });
  })();

  //wow js
  jQuery(window).on("load", function () {
    new WOW().init();
    window.wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
      offset: 80,
    });
    window.wow.init();
  });

  // niceSelect
  if ($("select").length) {
    $("select").niceSelect();
  }

  //Quantity Increment
  $(".quantity__minus").on("click", function (e) {
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val(), 10);
    if (value > 1) {
      value--;
    }
    input.val(value.toString().padStart(2, "0"));
  });
  $(".quantity__plus").on("click", function (e) {
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val(), 10);
    value++;
    input.val(value.toString().padStart(2, "0"));
  });

  //Cart Menu Quantity button toggle
  $(".qty-btn").on("click", function (e) {
    e.stopPropagation();
    // Toggle "active" class for the current quantity button and its related elements
    $(this).next(".quantity-area").toggleClass("active");

    // Remove "active" class from other quantity buttons and related elements
    $(".quantity-area")
      .not($(this).next(".quantity-area"))
      .removeClass("active");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".quantity-area").length) {
      // Remove "active" class from all quantity buttons and related elements
      $(".quantity-area").removeClass("active");
    }
  });

  // Payment Method
  $(function () {
    $(".choose-payment-method ul li").on("click", function () {
      $(".choose-payment-method ul li").removeClass("active"); // Remove active class from all list items
      if ($(this).hasClass("stripe")) {
        $("#StripePayment").show();
        $("#OfflinePayment").hide();
        $(this).addClass("active"); // Add active class to the clicked list item
      } else if ($(this).hasClass("paypal")) {
        $("#OfflinePayment").hide();
        $("#StripePayment").hide();
        $(this).addClass("active"); // Add active class to the clicked list item
      } else if ($(this).hasClass("offline")) {
        $("#OfflinePayment").show();
        $("#StripePayment").hide();
        $(this).addClass("active"); // Add active class to the clicked list item
      } else {
        $("#StripePayment").hide();
        $("#OfflinePayment").hide();
      }
    });
  });

  // Serch Btn
  $(".search-btn").on("click", function (e) {
    let parent = $(this).parent();

    parent.find(".search-input").toggleClass("active");

    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".search-input, .search-btn").length) {
      $(".search-input").removeClass("active");
    }
  });
  $(".search-close").on("click", function (e) {
    $(".search-input").removeClass("active");
  });

  // Scroll Down all elements with data-target attribute
  const scrollTriggers = document.querySelectorAll("[data-target]");

  // Define top offset (gap)
  const scrollOffset = 120;

  scrollTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();

      const targetSelector = trigger.getAttribute("data-target");
      const scrollTarget = document.querySelector(targetSelector);

      if (scrollTarget) {
        // If GSAP ScrollSmoother is active
        if (typeof smoother !== "undefined") {
          // Scroll with offset
          const targetPosition =
            scrollTarget.getBoundingClientRect().top +
            window.scrollY -
            scrollOffset;
          smoother.scrollTo(targetPosition, true);
        } else {
          // Fallback: native smooth scroll with offset
          const targetPosition =
            scrollTarget.getBoundingClientRect().top +
            window.scrollY -
            scrollOffset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  //For data cursor change based on section
  const portfolioSection = document.querySelector(".home2-portfolio-section");

  if (portfolioSection) {
    portfolioSection.addEventListener("mouseenter", () => {
      document.body.classList.add("portfolio-cursor");
    });

    portfolioSection.addEventListener("mouseleave", () => {
      document.body.classList.remove("portfolio-cursor");
    });
  }
  const bannerSection = document.querySelector(
    ".home4-banner-section .banner-title-area"
  );

  if (bannerSection) {
    bannerSection.addEventListener("mouseenter", () => {
      document.body.classList.add("banner-cursor");
    });

    bannerSection.addEventListener("mouseleave", () => {
      document.body.classList.remove("banner-cursor");
    });
  }

  if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
    if ($(window).width() > 1024) {
      gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
      });
      $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');

      if ($("a.magnetic-item").length) {
        $("a.magnetic-item").addClass("not-hide-cursor");
      }

      var $mouse = { x: 0, y: 0 }; // Cursor position
      var $pos = { x: 0, y: 0 }; // Cursor position
      var $ratio = 0.15; // delay follow cursor
      var $active = false;
      var $ball = $("#ball");

      var $ballWidth = 20; // Ball default width
      var $ballHeight = 20; // Ball default height
      var $ballOpacity = 0.5; // Ball default opacity
      var $ballBorderWidth = 2; // Ball default border width

      gsap.set($ball, {
        // scale from middle and style ball
        xPercent: -50,
        yPercent: -50,
        width: $ballWidth,
        height: $ballHeight,
        borderWidth: $ballBorderWidth,
        opacity: $ballOpacity,
      });

      document.addEventListener("mousemove", mouseMove);

      function mouseMove(e) {
        $mouse.x = e.clientX;
        $mouse.y = e.clientY;
      }

      gsap.ticker.add(updatePosition);

      function updatePosition() {
        if (!$active) {
          $pos.x += ($mouse.x - $pos.x) * $ratio;
          $pos.y += ($mouse.y - $pos.y) * $ratio;

          gsap.set($ball, { x: $pos.x, y: $pos.y });
        }
      }

      $(".magnetic-wrap").mousemove(function (e) {
        parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
        callParallax(e, this);
      });

      function callParallax(e, parent) {
        parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25); // magnetic area = higher number is more attractive
      }

      function parallaxIt(e, parent, target, movement) {
        var boundingRect = parent.getBoundingClientRect();
        var relX = e.clientX - boundingRect.left;
        var relY = e.clientY - boundingRect.top;

        gsap.to(target, {
          duration: 0.3,
          x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
          y:
            ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
          ease: Power2.easeOut,
        });
      }

      function parallaxCursor(e, parent, movement) {
        var rect = parent.getBoundingClientRect();
        var relX = e.clientX - rect.left;
        var relY = e.clientY - rect.top;
        $pos.x =
          rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
        $pos.y =
          rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
        gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
      }

      // Magic cursor behavior
      // ======================

      // Magnetic item hover.
      $(".magnetic-wrap")
        .on("mouseenter mouseover", function (e) {
          $ball.addClass("magnetic-active");
          gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
          $active = true;
        })
        .on("mouseleave", function (e) {
          $ball.removeClass("magnetic-active");
          gsap.to($ball, {
            duration: 0.3,
            width: $ballWidth,
            height: $ballHeight,
            opacity: $ballOpacity,
          });
          gsap.to(this.querySelector(".magnetic-item"), {
            duration: 0.3,
            x: 0,
            y: 0,
            clearProps: "all",
          });
          $active = false;
        });

      // Alternative cursor style on hover.
      $(
        ".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a"
      )
        .not(".magnetic-item") // omit from selection.
        .on("mouseenter", function () {
          gsap.to($ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.2,
            backgroundColor: "#CCC",
            width: "90px",
            height: "90px",
          });
        })
        .on("mouseleave", function () {
          gsap.to($ball, {
            duration: 0.3,
            borderWidth: $ballBorderWidth,
            opacity: $ballOpacity,
            backgroundColor: "transparent",
            width: $ballWidth,
            height: $ballHeight,
            clearProps: "backgroundColor",
          });
        });

      // Cursor view on hover (data attribute "data-cursor="...").
      $("[data-cursor]").each(function () {
        $(this)
          .on("mouseenter", function () {
            $ball
              .addClass("ball-view")
              .append('<div class="ball-view-inner"></div>');
            $(".ball-view-inner").append($(this).attr("data-cursor"));

            gsap.to($ball, {
              duration: 0.3,
              yPercent: -75,
              padding: "8px 20px", // ✅ instead of fixed width/height
              opacity: 1,
              borderWidth: 0,
              height: "auto", // ✅ allow auto height
            });

            gsap.to(".ball-view-inner", {
              duration: 0.3,
              scale: 1,
              autoAlpha: 1,
            });
          })
          .on("mouseleave", function () {
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -50,
              width: $ballWidth, // back to default circle
              height: $ballHeight,
              opacity: $ballOpacity,
              borderWidth: $ballBorderWidth,
              padding: 0, // ✅ reset padding
            });
            $ball.removeClass("ball-view").find(".ball-view-inner").remove();
          });
        $(this).addClass("not-hide-cursor");
      });

      // Cursor drag on hover (class "cursor-drag"). For Swiper sliders.
      $(".swiper").each(function () {
        if ($(this).parent().attr("data-simulate-touch") === "true") {
          if ($(this).parent().hasClass("cursor-drag")) {
            $(this)
              .on("mouseenter", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                  duration: 0.3,
                  width: 60,
                  height: 60,
                  opacity: 1,
                });
              })
              .on("mouseleave", function () {
                $ball.find(".ball-drag").remove();
                gsap.to($ball, {
                  duration: 0.3,
                  width: $ballWidth,
                  height: $ballHeight,
                  opacity: $ballOpacity,
                });
              });
            $(this).addClass("not-hide-cursor");

            // Ignore "data-cursor" on hover.
            $(this)
              .find("[data-cursor]")
              .on("mouseenter mouseover", function () {
                $ball.find(".ball-drag").remove();
                return false;
              })
              .on("mouseleave", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                  duration: 0.3,
                  width: 60,
                  height: 60,
                  opacity: 1,
                });
              });
          }
        }
      });

      // Cursor drag on mouse down / click and hold effect (class "cursor-drag-mouse-down"). For Swiper sliders.
      $(".swiper").each(function () {
        if ($(this).parent().attr("data-simulate-touch") === "true") {
          if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
            $(this)
              .on("mousedown pointerdown", function (e) {
                if (e.which === 1) {
                  // Affects the left mouse button only!
                  gsap.to($ball, {
                    duration: 0.2,
                    width: 60,
                    height: 60,
                    opacity: 1,
                  });
                  $ball.append('<div class="ball-drag"></div>');
                }
              })
              .on("mouseup pointerup", function () {
                $ball.find(".ball-drag").remove();
                if ($(this).find("[data-cursor]:hover").length) {
                } else {
                  gsap.to($ball, {
                    duration: 0.2,
                    width: $ballWidth,
                    height: $ballHeight,
                    opacity: $ballOpacity,
                  });
                }
              })
              .on("mouseleave", function () {
                $ball.find(".ball-drag").remove();
                gsap.to($ball, {
                  duration: 0.2,
                  width: $ballWidth,
                  height: $ballHeight,
                  opacity: $ballOpacity,
                });
              });

            // Ignore "data-cursor" on mousedown.
            $(this)
              .find("[data-cursor]")
              .on("mousedown pointerdown", function () {
                return false;
              });

            // Ignore "data-cursor" on hover.
            $(this)
              .find("[data-cursor]")
              .on("mouseenter mouseover", function () {
                $ball.find(".ball-drag").remove();
                return false;
              });
          }
        }
      });

      // Cursor close on hover.
      $(".cursor-close").each(function () {
        $(this).addClass("ball-close-enabled");
        $(this)
          .on("mouseenter", function () {
            $ball.addClass("ball-close-enabled");
            $ball.append('<div class="ball-close">Close</div>');
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -75,
              width: 80,
              height: 80,
              opacity: 1,
            });
            gsap.from(".ball-close", { duration: 0.3, scale: 0, autoAlpha: 0 });
          })
          .on("mouseleave click", function () {
            $ball.removeClass("ball-close-enabled");
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -50,
              width: $ballWidth,
              height: $ballHeight,
              opacity: $ballOpacity,
            });
            $ball.find(".ball-close").remove();
          });

        // Hover on "cursor-close" inner elements.
        $(
          ".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor"
        )
          .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
          .on("mouseenter", function () {
            $ball.removeClass("ball-close-enabled");
          })
          .on("mouseleave", function () {
            $ball.addClass("ball-close-enabled");
          });
      });

      // ================================================================
      // Scroll between anchors
      // ================================================================

      $('a[href^="#"]')
        .not('[href$="#"]') // omit from selection
        .not('[href$="#0"]') // omit from selection
        .on("click", function () {
          var target = this.hash;

          // If fixed header position enabled.
          if ($("#tt-header").hasClass("tt-header-fixed")) {
            var $offset = $("#tt-header").height();
          } else {
            var $offset = 0;
          }

          // You can use data attribute (for example: data-offset="100") to set top offset in HTML markup if needed.
          if ($(this).data("offset") != undefined)
            $offset = $(this).data("offset");

          return false;
        });

      // Show/hide magic cursor
      // =======================

      // Hide on hover.
      $(
        "a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor"
      ) // class "hide-cursor" is for global use.
        .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
        .not(".cursor-alter") // omit from selection
        .not(".tt-main-menu-list > li > a") // omit from selection
        .not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
        .on("mouseenter", function () {
          gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
        })
        .on("mouseleave", function () {
          gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
        });

      // Hide on click.
      $("a")
        .not('[target="_blank"]') // omit from selection.
        .not('[href^="#"]') // omit from selection.
        .not('[href^="mailto"]') // omit from selection.
        .not('[href^="tel"]') // omit from selection.
        .not(".lg-trigger") // omit from selection.
        .not(".video-player") // omit from selection.
        .not(".tt-btn-disabled") // omit from selection.
        .on("click", function () {
          gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
        });

      // Show/hide on document leave/enter.
      $(document)
        .on("mouseleave", function () {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
        })
        .on("mouseenter", function () {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
        });

      // Show as the mouse moves.
      $(document).mousemove(function () {
        gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
      });
    }
  }

  // Back To Top
  jQuery(function ($) {
    var progressPath = document.querySelector(".progress-wrap .progress-circle path");

    // ✅ if element doesn't exist on this page, stop
    if (!progressPath) return;

    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();

      // ✅ avoid division by zero (short pages)
      if (height <= 0) {
        progressPath.style.strokeDashoffset = pathLength;
        return;
      }

      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).on("scroll", updateProgress);

    var offset = 50;

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });

    $(".progress-wrap").on("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });


  smoother.effects(".parallax-img img", {
    speed: 1.3,
    lag: 0,
  });
  //Counter Js
  document.querySelectorAll(".counter_number").forEach((el) => {
    const finalValue = parseInt(el.textContent.replace(/\D/g, ""), 10) || 0;
    const counter = { value: 0 };

    gsap.to(counter, {
      value: finalValue,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        let v = Math.floor(counter.value);
        // leading zero logic
        el.textContent = v < 10 ? "0" + v : v;
      },
    });
  });

  //Portfolio Scale Animation
  document.addEventListener("DOMContentLoaded", () => {
    gsap.utils
      .toArray(
        ".home1-portfolio-section .portfolio-card, .home9-portfolio-section .portfolio-card"
      )
      .forEach((card) => {
        const container = card.querySelector(
          ".portfolio-img, .portfolio-video"
        );
        const media = container.querySelector("img, video");

        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          end: "bottom top",
          onEnter: () => {
            gsap.to(container, { scale: 1, duration: 1.5, ease: "power2.out" });
            if (media)
              gsap.to(media, { scale: 1, duration: 1.5, ease: "power2.out" });
          },
          onEnterBack: () => {
            gsap.to(container, { scale: 1, duration: 1.5, ease: "power2.out" });
            if (media)
              gsap.to(media, { scale: 1, duration: 1.5, ease: "power2.out" });
          },
          onLeave: () => {
            gsap.to(container, {
              scale: 0.9,
              duration: 1.5,
              ease: "power2.inOut",
            });
            if (media)
              gsap.to(media, {
                scale: 1.3,
                duration: 1.5,
                ease: "power2.inOut",
              });
          },
          onLeaveBack: () => {
            gsap.to(container, {
              scale: 0.9,
              duration: 1.5,
              ease: "power2.inOut",
            });
            if (media)
              gsap.to(media, {
                scale: 1.3,
                duration: 1.5,
                ease: "power2.inOut",
              });
          },
        });
      });
  });

  //Home2 Portfolio Section
  let panels = gsap.utils.toArray(".pf-panel");

  panels.forEach((panel, i) => {
    if (i !== panels.length - 1) {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      });
    }
  });

  // Text Invert With Scroll
  function text_color_invert() {
    const split = new SplitText(".text_color_invert", { type: "lines" });
    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top 95%",
          end: "bottom center",
        },
      });
    });
  }
  $(function () {
    text_color_invert();
  });

  // webgl images hover animation
  $(document).ready(function () {
    function initHoverEffect(container) {
      container.find(".shape-hover-img").each(function () {
        let $el = $(this);
        let $img = $el.find("img");

        function createEffect() {
          let effect = new hoverEffect({
            parent: $el.get(0),
            intensity: $el.data("intensity") || 0.6,
            speedIn: $el.data("speedin") || 1,
            speedOut: $el.data("speedout") || 1,
            displacementImage: $el.data("displacement"),
            image1: $img.attr("src"),
            image2: $img.attr("src"),
            imagesRatio: $img[0].height / $img[0].width,
            hover: false
          });

          $el.closest(".shape-hover-item")
            .on("mouseenter", () => effect.next())
            .on("mouseleave", () => effect.previous());
        }

        if ($img[0].complete) {
          createEffect();
        } else {
          $img.on("load", createEffect);
        }
      });
    }

    // Initialize hoverEffect on pages without tabs
    if ($(".shape-hover-item").length && $(".portfolio-tab-wrap").length === 0) {
      initHoverEffect($(document));
    }

    // Initialize hoverEffect for the default visible tab
    initHoverEffect($(".single-tab.show"));

    // Tab click handler
    $(".portfolio-tag-list .single-item").on("click", function () {
      var $clickedItem = $(this);
      var index = $clickedItem.index();

      // Switch active tab
      $(".portfolio-tag-list .single-item").removeClass("active");
      $clickedItem.addClass("active");

      var $tabs = $(".portfolio-tab-wrap .single-tab");
      $tabs.removeClass("show");
      var $newTab = $tabs.eq(index).addClass("show");

      // Re-init hoverEffect for newly visible tab
      requestAnimationFrame(() => {
        initHoverEffect($newTab);
      });
    });
  });

  
  // BTN Hover
  $(".btn-hover")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: 0, left: 0 });
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: 0, left: 0 });
      $(this).find("span").css({ top: relY, left: relX });
    });

  let arr1 = gsap.utils.toArray("#bounce_up");
  let arr2 = gsap.utils.toArray(".bounce_up");
  const all_buttons2 = arr1.concat(arr2);

  all_buttons2.forEach((btn) => {
    if (!btn.classList.contains("banner-btn")) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top 80%",
          markers: false,
        },
        opacity: 0,
        y: 50,
        ease: "bounce",
        duration: 1.5,
      });
    }
  });
  // fade Animation
  if ($(".fade_anim").length > 0) {
    gsap.utils.toArray(".fade_anim").forEach((item) => {
      let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
        tp_duration_value = item.getAttribute("data-duration") || 0.75,
        tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
        tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
        tp_delay_value = item.getAttribute("data-delay") || 0.15,
        tp_ease_value = item.getAttribute("data-ease") || "power2.out",
        tp_anim_setting = {
          opacity: 0,
          ease: tp_ease_value,
          duration: tp_duration_value,
          delay: tp_delay_value,
          x:
            tp_fade_direction == "left"
              ? -tp_fade_offset
              : tp_fade_direction == "right"
              ? tp_fade_offset
              : 0,
          y:
            tp_fade_direction == "top"
              ? -tp_fade_offset
              : tp_fade_direction == "bottom"
              ? tp_fade_offset
              : 0,
        };
      if (tp_onscroll_value == 1) {
        tp_anim_setting.scrollTrigger = {
          trigger: item,
          start: "top 85%",
        };
      }
      gsap.from(item, tp_anim_setting);
    });
  }

  // Home3 Service Panel
  let servicePanels = gsap.utils.toArray(".servicePanel");
  let baseOffset = 130;
  let offsetIncrement = 130;
  let mm = gsap.matchMedia();
  // Responsive update
  mm.add("(max-width: 1599px)", () => {
    baseOffset = 90;
    offsetIncrement = 90;
  });
  mm.add("(max-width: 1399px)", () => {
    baseOffset = 90;
    offsetIncrement = 90;
  });
  mm.add("(min-width: 768px)", () => {
    servicePanels.forEach((panel, i) => {
      let topOffset = baseOffset + i * offsetIncrement;

      ScrollTrigger.create({
        trigger: panel,
        start: `top ${topOffset}px`,
        end: "bottom bottom",
        endTrigger: ".home3-service-section .service-wrapper",
        scrub: true,
        pin: true,
        pinSpacing: false,
      });
    });
  });

  ScrollTrigger.create({
    trigger: ".service-wrapper",
    start: `top ${baseOffset}px`,
    end: "bottom bottom",
    pin: ".home3-service-section .video-area",
    pinSpacing: false,
  });

  // Text Effect Animation
  if ($(".text-anim").length) {
    let staggerAmount = 0.03,
      translateXValue = 20,
      defaultDelay = 0.25,
      easeType = "power2.out",
      animatedTextElements = document.querySelectorAll(".text-anim");

    animatedTextElements.forEach((element) => {
      let delayValue = element.getAttribute("data-delay")
        ? parseFloat(element.getAttribute("data-delay"))
        : defaultDelay;

      let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });
  }

  // text-revel-anim
  const anim_reveal = document.querySelectorAll(".text-revel-anim");
  anim_reveal.forEach((areveal) => {
    const getAttributeValue = (attr, defaultValue) =>
      areveal.getAttribute(attr) || defaultValue;
    const duration_value = Number(getAttributeValue("data-duration", 1));
    const onscroll_value = Number(getAttributeValue("data-on-scroll", 1));
    const stagger_value = Number(getAttributeValue("data-stagger", 0.02));
    const data_delay = Number(getAttributeValue("data-delay", 0.08));
    const ease_value = getAttributeValue("data-ease", "circ.out");

    areveal.split = new SplitText(areveal, {
      type: "lines,words,chars",
      linesClass: "tp-revel-line",
    });
    const animationProps = {
      duration: duration_value,
      delay: data_delay,
      ease: ease_value,
      y: 40,
      stagger: stagger_value,
      opacity: 0,
    };

    if (onscroll_value === 1) {
      areveal.anim = gsap.from(areveal.split.chars, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 85%",
        },
        ...animationProps,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.chars, animationProps);
    }
  });

  //Text Animation 2
  gsap.utils.toArray(".text-anim2").forEach((splitTextLine) => {
    const delay_value = parseFloat(
      splitTextLine.getAttribute("data-delay") || 0.5
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 85%",
        duration: 1.5,
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });

    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: delay_value,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  // horizontalLoop function define for Scrolling text Anim
  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;

    gsap.set(items, {
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });

    gsap.set(items, { x: 0 });

    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);

      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;

    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    return tl;
  }

  gsap.registerPlugin(Observer);

  // Collect timelines
  const timelinesNormal = [];
  const timelinesReverse = [];

  // Normal sections
  document.querySelectorAll(".scroll-text-section").forEach((section) => {
    const groups = section.querySelectorAll(".scrolling-text .marquee__group");
    if (groups.length) {
      const tl = horizontalLoop(groups, {
        repeat: -1,
        paddingRight: 30,
      });
      timelinesNormal.push(tl);
    }
  });

  // Reverse sections
  document.querySelectorAll(".scroll-text-section2").forEach((section) => {
    const groups = section.querySelectorAll(".scrolling-text .marquee__group");
    if (groups.length) {
      const tl = horizontalLoop(groups, {
        repeat: -1,
        paddingRight: 30,
        reversed: true, // Start reversed
      });
      timelinesReverse.push(tl);
    }
  });

  // Scroll reaction
  Observer.create({
    onChangeY(self) {
      let factor = 2.5;
      if (self.deltaY < 0) factor *= -1;

      // Normal direction
      timelinesNormal.forEach((tl) => {
        gsap
          .timeline({ defaults: { ease: "none" } })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      });

      // Reverse direction ALWAYS opposite
      timelinesReverse.forEach((tl) => {
        gsap
          .timeline({ defaults: { ease: "none" } })
          .to(tl, { timeScale: -factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: -factor / 2.5, duration: 1 }, "+=0.3");
      });
    },
  });

  // Portfolio Video and img height Adjust
  function setEqualHeight() {
    const img = document.querySelector(".portfolio-card .portfolio-img img");
    const videoWrapper = document.querySelector(
      ".portfolio-card .portfolio-video"
    );

    if (img && videoWrapper) {
      videoWrapper.style.height = img.offsetHeight + "px";
    }
  }
  window.addEventListener("load", setEqualHeight);
  window.addEventListener("resize", setEqualHeight);

  //Portfolio multi-img-effect
  document.querySelectorAll(".multi-img-effect").forEach((card) => {
    const images = card.querySelectorAll(".portfolio-img img");
    let currentIndex = 0;
    let interval;

    function showRandomImage() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * images.length);
      } while (randomIndex === currentIndex);

      // fade out current
      images[currentIndex].style.opacity = 0;

      // fade in new
      images[randomIndex].style.opacity = 1;

      currentIndex = randomIndex;
    }

    card.addEventListener("mouseenter", () => {
      interval = setInterval(showRandomImage, 400);
    });

    card.addEventListener("mouseleave", () => {
      clearInterval(interval);

      images.forEach((img, i) => {
        img.style.opacity = i === 0 ? 1 : 0;
      });
      currentIndex = 0;
    });
  });

  // Home4 Banner Title Data text
  const infoflow1TextItem = document.querySelectorAll(
    ".banner-title-area h1, .home8-banner-section .banner-title-area"
  );

  infoflow1TextItem.forEach((item) => {
    const span = item.querySelector(".data-text");
    if (!span) return;

    function moveSpan(event) {
      const rect = item.getBoundingClientRect();

      // Mouse position relative to <h1>
      let dx = event.clientX - rect.left - span.offsetWidth / 2;
      let dy = event.clientY - rect.top - span.offsetHeight / 2;

      // Remove initial CSS offset from transform
      const initialX = span.offsetLeft;
      const initialY = span.offsetTop;

      gsap.to(span, {
        x: dx - initialX,
        y: dy - initialY,
        duration: 0.3,
        ease: "power3.out",
      });
    }

    // Follow the mouse
    item.addEventListener("mousemove", moveSpan);

    // On mouse enter, also center immediately
    item.addEventListener("mouseenter", moveSpan);
  });

  // Home4 Counter Spread Animation
  if (window.innerWidth >= 992) {
    const counters = gsap.utils.toArray(
      ".home4-counter-section .counter-list .single-counter"
    );
    const total = counters.length;
    const middleIndex = Math.floor(total / 2);

    // spread value (vw gap)
    const step = 20; // 20vw distance

    counters.forEach((counter, i) => {
      let offsetX = 0;

      if (i < middleIndex) {
        // left side → positive vw
        offsetX = (middleIndex - i) * step;
      } else if (i > middleIndex) {
        // right side → negative vw
        offsetX = -(i - middleIndex) * step;
      }

      gsap.set(counter, {
        x: offsetX + "vw",
        opacity: 1,
      });

      // scroll grid position
      gsap.to(counter, {
        x: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home4-counter-section .counter-list",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }

  //Img Slice Effect
  const triggerSlices = document.querySelectorAll(".slice-img-triger");

  triggerSlices.forEach((section) => {
    const slices = section.querySelectorAll(".slice-wrap .slice-item");

    // Set transformOrigin alternately
    slices.forEach((slice, i) => {
      gsap.set(slice, {
        transformOrigin: i % 2 === 0 ? "top center" : "bottom center",
        scaleY: 1,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "50% bottom",
        markers: false,
      },
    });

    tl.to(
      slices,
      {
        scaleY: 0, // use scale instead of height
        ease: "power6.inOut",
        duration: 0.6,
        stagger: { each: 0.3 },
      },
      "start"
    );
  });

  //Scamble text
  document.addEventListener("DOMContentLoaded", () => {
    // Plugin exists check
    if (typeof ScrambleTextPlugin !== "undefined") {
      gsap.registerPlugin(ScrambleTextPlugin);
    } else {
      // Plugin missing → Stop running this script safely
      return;
    }

    document.querySelectorAll(".scramble-item").forEach((btn) => {
      const textEl = btn.querySelector(".scramble-text");

      const originalWidth = textEl.offsetWidth;
      textEl.style.width = originalWidth + "px";
      textEl.style.display = "inline-block";

      let t = gsap.timeline({ paused: true });
      t.to(textEl, {
        scrambleText: {
          chars: "ANIOAGENCYEGENSLAB",
          text: "{original}",
          speed: 0.5,
          delimiter: "",
        },
        duration: 0.8,
      });

      btn.addEventListener("mouseenter", () => t.timeScale(1).play());
      btn.addEventListener("mouseleave", () => t.timeScale(1.5).reverse());
    });
  });

  // Home6 Service Hover
  $(".service-list ul li").on({
    mouseenter: function () {
      // Remove the 'active' class from all content list items
      $(".service-list ul li").removeClass("active");
      // Add the 'active' class to the hovered content list item
      $(this).addClass("active");

      // Get the index of the hovered content list item
      var index = $(this).index();

      // Remove the 'active' class from all image list items in both service-img containers
      $(".service-img ul li").removeClass("active");

      // Add the 'active' class to the corresponding image list items in both service-img containers
      $(".service-img").each(function () {
        $(this)
          .find("ul li:eq(" + index + ")")
          .addClass("active");
      });
    },
  });

  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: "power3",
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew),
        });
      }
    },
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

  // Home8 Service Section Cursor Follow
  class VideoAreaCursor {
    constructor({ el, isSticky = false, parent }) {
      this.$el = el; // The .video-area element
      this.$parent = parent; // The section containing the video
      this.isSticky = isSticky;
      this.isScrolling = false;
      this.isShow = false;

      this.bindMethods();
      this.getElems();
      this.events();

      // Initial mouse position (center of video)
      const o = window.innerWidth / 2 - this.$el.offsetWidth / 2;
      const s = window.innerHeight / 2 - this.$el.offsetHeight / 2;
      const r = this.$parent?.getBoundingClientRect();

      this.mouse = {
        x: o,
        y: s,
        rect: this.$el.getBoundingClientRect(),
        moving: false,
        parentOffset: r ? r.top + window.scrollY : 0,
        canMove: !!this.$parent && r.top < window.innerHeight,
      };

      // Start hidden and scaled down
      gsap.set(this.$el, { scale: 0, opacity: 0 });
    }

    bindMethods() {
      this.move = this.move.bind(this);
      this.onEnter = this.onEnter.bind(this);
      this.onLeave = this.onLeave.bind(this);
      this.scroll = this.scroll.bind(this);
      this.onMoveEnd = this.onMoveEnd.bind(this);
      this.onScrollEnd = this.onScrollEnd.bind(this);

      this.moveDebounced = this.debounce(this.onMoveEnd, 400);
      this.scrollDebounced = this.debounce(this.onScrollEnd, 400);
    }

    getElems() {
      this.$els = [this.$el];
    }

    events() {
      if (
        !/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)
      ) {
        window.addEventListener("mousemove", this.move);
        window.addEventListener("mousemove", this.moveDebounced);
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener("scroll", this.scrollDebounced);
      }

      if (this.$parent) {
        this.$parent.addEventListener("mouseenter", this.onEnter);
        this.$parent.addEventListener("mouseleave", this.onLeave);
      }
    }

    // Smooth scale & fade in on enter
    onEnter(e) {
      this.mouse.canMove = true;
      this.mouse.moving = true;

      // Smooth fade-in & scale
      gsap.to(this.$els, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "expo.out",
      });

      this.mouse.x =
        e.clientX - this.mouse.rect.width / 2 - this.mouse.rect.left;
      this.mouse.y = e.clientY - this.mouse.rect.height / 2;

      gsap.set(this.$els, { x: this.mouse.x, y: this.mouse.y });
    }

    // Smooth fade-out & scale down on leave
    onLeave() {
      this.mouse.canMove = false;
      this.mouse.moving = false;

      gsap.to(this.$els, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "power1.out",
      });
    }

    move(e) {
      if (this.mouse.canMove) {
        this.mouse.moving = true;
        this.mouse.x =
          e.clientX - this.mouse.rect.width / 2 - this.mouse.rect.left;
        this.mouse.y = e.clientY - this.mouse.rect.height / 2;
      }
    }

    onMoveEnd() {
      if (this.mouse.canMove) this.mouse.moving = false;
    }

    onScrollEnd() {
      if (this.mouse.canMove) this.mouse.moving = false;
    }

    scroll() {
      this.mouse.moving = true;
    }

    resize() {
      this.mouse.rect = this.$el.getBoundingClientRect();
      if (this.$parent) {
        const e = this.$parent.getBoundingClientRect();
        this.mouse.parentOffset = e.top + window.scrollY;
        this.mouse.canMove = e.top < window.innerHeight;
      } else {
        this.mouse.canMove = false;
      }
    }

    update() {
      const { x, y, parentOffset } = this.mouse;
      if ((this.mouse.canMove && this.mouse.moving) || this.isScrolling) {
        gsap.to(this.$els, {
          x: x,
          y: this.isSticky ? y : y + window.scrollY - parentOffset,
          ease: "power2.out",
          duration: 0.65,
        });
        this.isScrolling = false;
      }
    }

    debounce(func, wait) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
  }

  // Initialize
  const parentEl = document.querySelector(".home8-service-section");
  const videoArea = parentEl?.querySelector(".video-area");

  if (parentEl && videoArea) {
    const videoCursor = new VideoAreaCursor({
      el: videoArea,
      parent: parentEl,
    });

    gsap.ticker.add(() => videoCursor.update());
  }

  // Sticky sidebar
  if (window.innerWidth > 991) {
    // only for desktop
    ScrollTrigger.create({
      trigger: ".career-details-sidebar, .blog-details-sidebar",
      start: "top 100px", // when sidebar top reaches 150px from viewport top
      endTrigger: ".career-details-page, .blog-details-content-wrap", // stick until this section ends
      end: "bottom bottom-=100", // unstick when main section ends
      pin: true, // make it sticky
      pinSpacing: false, // remove extra spacing below
      markers: false, // turn on for debugging if needed
    });
  }

  window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Use matchMedia for responsive ScrollTrigger
    gsap.matchMedia().add("(min-width: 1200px)", () => {
      const textStart = document.querySelector(".anim-start");
      const destination = document.querySelector(".destination");

      if (!textStart || !destination) return;

      // Get positions
      const startRect = textStart.getBoundingClientRect();
      const destRect = destination.getBoundingClientRect();

      // Center-to-center distance
      const deltaX =
        destRect.left +
        destRect.width / 2 -
        (startRect.left + startRect.width / 2);
      const deltaY =
        destRect.top +
        destRect.height / 2 -
        (startRect.top + startRect.height / 2);

      // Scale from 245px → 35px
      const initialFontSize = 245;
      const finalFontSize = 35;
      const scaleFactor = finalFontSize / initialFontSize;

      gsap.set(textStart, { transformOrigin: "center center" });

      return gsap.to(textStart, {
        x: deltaX,
        y: deltaY,
        scale: scaleFactor,
        ease: "none",
        scrollTrigger: {
          trigger: ".home6-portfolio-section",
          start: "top 20%",
          end: "bottom bottom",
          scrub: 1.5,
          markers: false, // set true for debugging
        },
      });
    });
  });

  //On Scroll Image Reveal Anim
  let revealContainers = document.querySelectorAll(".reveal");

  revealContainers.forEach((container) => {
    let image = container.querySelector("img");

    gsap.set(container, { autoAlpha: 1 }); // ensure visible

    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%", // animation triggers when container comes near viewport
          toggleActions: "play none none none",
          // markers: true
        },
      })
      .from(container, { xPercent: -100, duration: 1.5, ease: "power2.out" })
      .from(
        image,
        { xPercent: 100, scale: 1.3, duration: 1.5, ease: "power2.out" },
        0
      ); // 0 = start at same time
  });

  //Home9 Banner Particle Anim
  const sketch = (p) => {
    let stars = [];

    p.setup = () => {
      const banner = document.querySelector(".home9-banner-section");
      const canvas = p.createCanvas(banner.offsetWidth, banner.offsetHeight);
      canvas.parent("particle-ball");
    };

    p.draw = () => {
      p.clear();
      for (let star of stars) {
        star.update();
        star.display();
      }
    };

    p.mouseMoved = () => {
      if (
        p.mouseX >= 0 &&
        p.mouseY >= 0 &&
        p.mouseX <= p.width &&
        p.mouseY <= p.height
      ) {
        for (let i = 0; i < 5; i++) {
          // 5 stars per move
          stars.push(new Star(p.mouseX, p.mouseY));
        }
      }
    };

    p.windowResized = () => {
      const banner = document.querySelector(".home9-banner-section");
      p.resizeCanvas(banner.offsetWidth, banner.offsetHeight);
    };

    class Star {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = p.random(0.5, 2);
        this.color = getBallColor();
        this.alpha = 255;
        this.angle = p.random(p.TWO_PI);
        this.speed = p.random(0.5, 1.5);
      }

      update() {
        this.x += p.cos(this.angle) * this.speed;
        this.y += p.sin(this.angle) * this.speed;
        this.alpha -= 5;
        if (this.alpha <= 0) stars.splice(stars.indexOf(this), 1);
      }

      display() {
        p.noStroke();
        p.fill(this.color);
        p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
      }
    }

    function getBallColor() {
      const card = document.getElementById("particle-ball");
      return getComputedStyle(card).getPropertyValue("--ball-color");
    }
  };
  if (document.querySelector(".home9-banner-section")) {
    new p5(sketch);
  }

  // On click email copy to clipboard
  document.addEventListener("DOMContentLoaded", function () {
    const copyBtn = document.querySelector(".copy-email-btn");
    const copyAlert = document.querySelector(".copy-alert");

    // If element not found, stop here
    if (!copyBtn || !copyAlert) return;

    copyBtn.addEventListener("click", function () {
      const emailText = this.innerText.trim();

      navigator.clipboard.writeText(emailText).then(() => {
        copyAlert.classList.add("show");

        setTimeout(() => {
          copyAlert.classList.remove("show");
        }, 2000);
      });
    });
  });
  // Home9 Service Btn Click
  document.addEventListener("DOMContentLoaded", () => {
    const serviceButtons = document.querySelectorAll(
      ".home9-service-section .service-btn"
    );
    const allServices = document.querySelectorAll(
      ".home9-service-section .single-service"
    );

    serviceButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const singleService = btn.closest(
          ".home9-service-section .single-service"
        );

        // If already active → remove active and exit
        if (singleService.classList.contains("active")) {
          singleService.classList.remove("active");
          return;
        }

        // Remove active from all
        allServices.forEach((s) => s.classList.remove("active"));

        // Add active to clicked one
        singleService.classList.add("active");
      });
    });
  });

  // Home9 Celebrate Btn
  const celebrateBtn = document.getElementById("celebrateBtn");

  if (celebrateBtn) {
    celebrateBtn.addEventListener("mouseenter", () => {
      // trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // button animation
      celebrateBtn.style.transform = "scale(0.95)";
    });

    celebrateBtn.addEventListener("mouseleave", () => {
      celebrateBtn.style.transform = "scale(1)";
    });
  }

  // Blog Sidebar Copy Link Btn (MULTIPLE SUPPORT)
  document.addEventListener("DOMContentLoaded", function () {
    const copyBtns = document.querySelectorAll(".copy-link-btn");

    if (!copyBtns.length) return;

    copyBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        const copyAlert = btn.querySelector(".copy-alert"); // scoped to this button
        if (!copyAlert) return;

        navigator.clipboard.writeText(window.location.href).then(() => {
          // restart animation if clicked quickly
          copyAlert.classList.remove("show");
          void copyAlert.offsetWidth; // force reflow
          copyAlert.classList.add("show");

          clearTimeout(copyAlert._timer);
          copyAlert._timer = setTimeout(() => {
            copyAlert.classList.remove("show");
          }, 2000);
        });
      });
    });
  });

  //Horizontal Scroll
  const service = gsap.matchMedia();

  service.add("(min-width: 992px)", () => {
    const section = document.querySelector(".service-page-process-section");
    const wrapper = document.querySelector(".service-page-process-wrapper");

    if (!section || !wrapper) return;

    const getScrollAmount = () => {
      return -(wrapper.scrollWidth - window.innerWidth);
    };

    gsap.to(wrapper, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 85px",
        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  });

  
  // Service Page3 Why Choose Section Animation
  function initHowWeDeliverAnimation() {
    const service2 = gsap.matchMedia();
  
    service2.add("(min-width: 992px)", () => {
  
      const wrapper = document.querySelector(".why-choose-wrapper");
      const imgWrap = document.querySelector(".why-choose-img-wrap");
      const smImg = document.querySelector(".why-choose-sm-img");
      const Service2videoArea = document.querySelector(".why-choose-img-wrap .video-area");
      const whyChooseContent = document.querySelector(".why-choose-content");
  
      if (!wrapper || !imgWrap || !smImg || !whyChooseContent) return;
  
      // ===============================
      // SHIFT CALCULATION (RESPONSIVE)
      // ===============================
      const imgWrapWidth = imgWrap.offsetWidth;
      const smImgFinalWidth = 185;
  
      // Base calculation (your original logic)
      let shiftPercent = -50 - ((imgWrapWidth - smImgFinalWidth) / imgWrapWidth) * 100;
  
      // Breakpoint fixes
      const vw = window.innerWidth;
  
      if (vw >= 1600) {
        shiftPercent += 0;   // main device (no change)
      } else if (vw >= 1400) {
        shiftPercent += -4;   // 1400–1599px
      } else if (vw >= 1200) {
        shiftPercent += 4;   // 1200–1399px
      }else if (vw >= 992) {
        shiftPercent += 4;   // 1200–1399px
      }
  
      // ===============================
      // INITIAL STATES
      // ===============================
      gsap.set(whyChooseContent, { opacity: 0, y: 50 });
      gsap.set(smImg, { y: -70, width: "auto" });
      gsap.set(imgWrap, { xPercent: -50 });
      gsap.set(Service2videoArea, { opacity: 0 });
  
      // ===============================
      // TIMELINE
      // ===============================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".service2-why-choose-section",
          start: "top top",
          end: () => "+=" + (whyChooseContent.offsetHeight - 300),
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true, // IMPORTANT
          markers: false
        }
      });
  
      // 1. Drop the small image
      tl.to(smImg, {
        y: 0,
        duration: 1,
        ease: "none"
      });
  
      // 2. Move images left & shrink small image
      tl.to(imgWrap, {
        xPercent: shiftPercent,
        duration: 1.5,
        ease: "none"
      });
  
      tl.to(smImg, {
        width: smImgFinalWidth,
        duration: 1.5,
        ease: "none"
      }, "<");
  
      // 3. Show video button
      tl.to(Service2videoArea, {
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut"
      });
  
      // 4. Fade in content
      tl.to(whyChooseContent, {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=0.3");
  
      // 5. Scroll-through text effect
      tl.to(whyChooseContent, {
        y: () => -(whyChooseContent.offsetHeight - 600),
        duration: 3,
        ease: "none"
      });
  
      // ===============================
      // CLEANUP
      // ===============================
      return () => {
        tl.scrollTrigger.kill();
        tl.kill();
      };
  
      
    });
  }
  
  // Initialize on DOM ready and window load
  $(document).ready(function () {
      initHowWeDeliverAnimation();
  });

  $(window).on('load', function () {
      // Refresh ScrollTrigger after all images are loaded
      if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
      }
  });

  // Team Page Video
  if ($('.team-video-banner-section').length > 0 && window.innerWidth > 991) {

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-video-banner-section",
        start: "top top",
        end: "bottom -=100%",
        scrub: 1,
        pin: true,
      }
    });

    // Scale video-wrapper + reduce border-radius gradually
    tl.to(".video-wrapper", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",   // 🔥 border-radius will animate to 0
      ease: "power4.inOut"
    });
  }
  
  //Portfolio Interactive Hover
  $(".interactive-link").each(function () {
		$(this)
			.on("mouseover", function () {
				$(".interactive-item").removeClass("active");
				$(this).parent().addClass("active");
			})
	});
  document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".interactive-list");
    const progress = document.querySelector(".page-scroll-bar .scroll-progress");

    if (!list || !progress) return;

    const updateProgress = () => {
      const scrollTop = list.scrollTop;
      const scrollHeight = list.scrollHeight - list.clientHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      progress.style.width = `${percent}%`;
    };

    list.addEventListener("scroll", updateProgress);

    // init on load
    updateProgress();
  });

  // Info Flow
  const pfinfoflow1Text = document.querySelectorAll(".single-pf-metro, .pf-caption-cursor-card");
  function followImageCursor(event, pfinfoflow1Text) {
    const contentBox = pfinfoflow1Text.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    pfinfoflow1Text.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
  }
  pfinfoflow1Text.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(followImageCursor(event, item), 100);
    });
  });

 // Service Dt Why Choose Section Animation
  const serviceDtMedia = gsap.matchMedia();

  serviceDtMedia.add("(min-width: 767px)", () => {
    const section = document.querySelector(".service-dt-why-choose-section");
    const cardsWrap = document.querySelector(".service-dt-why-choose-card-area");

    if (!section || !cardsWrap) return;

    const cardsInner = cardsWrap.querySelector(".container");
    if (!cardsInner) return;

    function getScrollDistance() {
      const paddingTop = parseFloat(
        getComputedStyle(cardsWrap).paddingTop
      ) || 0;

      return cardsInner.scrollHeight + paddingTop - section.offsetHeight;
    }

    return gsap.to(cardsInner, {
      y: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });
  });

  // Service Dt Process Section Animation
  serviceDtMedia.add("(min-width: 992px)", () => {
    let cards = gsap.utils.toArray(".service-dt-process-section .process-card");
  
    let stickDistance = 0;
  
    let lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: "top 150px"
    });
  
    cards.forEach((card, index) => {
      var scale = 1 - (cards.length - index) * 0.025;
      let scaleDown = gsap.to(card, { scale: scale, 'transform-origin': '"50% ' + (lastCardST.start + stickDistance) + '"' });
  
      ScrollTrigger.create({
        trigger: card,
        start: "top 150px",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse"
      });
    });
  });

  // Portfolio Caption Cursor Page mask effect on hover
  if ($("body").hasClass("portfolio-caption-cursor")) {
    let $pfCaptionPageAppear = $(".pf-caption-banner-title");
    if ($pfCaptionPageAppear.length) {
      $pfCaptionPageAppear.each(function() {
        let $this = $(this);
        $this.contents().each(function() {
          if (this.nodeType === 3) {
            let $text = $(this).text();
            let $wrappedText = $text.replace(/([^\s]+)/g, '<span class="tt-cap-word-wrap"><span class="tt-cap-word">$1</span></span>');
            $(this).replaceWith($wrappedText);
          } else if (this.nodeType === 1) { 
            let $thisElement = $(this);

            if ($thisElement.is('br') || $thisElement.is('hr')) {
              return;
            }

            let $wrappedElement = $('<span class="tt-cap-word-wrap"><span class="tt-cap-word"></span></span>');
          
            $wrappedElement.find('span.tt-cap-word').append($thisElement.clone(true));

            $thisElement.replaceWith($wrappedElement);
          }
        });
      });
      $(".tt-cap-word-wrap").css({ "display": "inline-flex", "overflow": "hidden" });
      $(".tt-cap-word").css({ "display": "inline-block", "will-change": "transform" });
    }
  }

  const $pfCaptionTitle = $(".pf-caption-cursor-page-title-area");
  const $pfCaptionPageBanner = $(".pf-caption-banner-wrap");
  if ($pfCaptionPageBanner.length && $pfCaptionTitle.hasClass("pf-caption-cursor-page-title-area")) {
    gsap.to(".pf-caption-banner-wrap-inner", { 
      ease: "none",
      scrollTrigger: {
        trigger: $pfCaptionTitle, 
        start: 'top top', 
        end: 'bottom top', 
        scrub: true,
        markers: false,
      }
    });
  }

  const pfCaptionBanner = gsap.matchMedia();

  pfCaptionBanner.add("(min-width: 992px)", () => {

    const $captionArea  = $(".pf-caption-cursor-page-title-area");
    const $pfCaptionMask = $captionArea.find(".pf-caption-mask");
    const $titles = $captionArea.find(".pf-caption-banner-title");

    if (!$captionArea.length || !$pfCaptionMask.length) return;

    let cursorX = 0;
    let cursorY = 0;
    let isActive = false; // 🔑 controls freeze

    const updateMaskPosition = () => {
      if (!isActive) return; // ❄️ freeze here

      const rect = $captionArea[0].getBoundingClientRect();

      const xPercent = ((cursorX - rect.left) / rect.width) * 100;
      const yPercent = ((cursorY - rect.top) / rect.height) * 100;

      gsap.to($pfCaptionMask, {
        "--x": `${xPercent}%`,
        "--y": `${yPercent}%`,
        duration: 0.3,
        ease: "sine.out"
      });
    };

    const mouseMoveHandler = (e) => {
      if (!isActive) return; // ❄️ hard stop

      cursorX = e.clientX;
      cursorY = e.clientY;
      updateMaskPosition();
    };

    /* -------------------------------
      VISIBILITY (EXACT OLD BEHAVIOR)
    --------------------------------*/
    $titles
      .on("mouseenter", () => {
        isActive = true;
        $("body").addClass("pf-caption-mask-active");
      })
      .on("mouseleave", () => {
        isActive = false; // ❄️ freeze immediately
        $("body").removeClass("pf-caption-mask-active");
      });

    /* -------------------------------
      POSITION (AREA ONLY)
    --------------------------------*/
    $captionArea.on("mousemove", mouseMoveHandler);

    window.addEventListener("scroll", updateMaskPosition);
    window.addEventListener("resize", updateMaskPosition);

    return () => {
      $captionArea.off("mousemove");
      $titles.off("mouseenter mouseleave");

      window.removeEventListener("scroll", updateMaskPosition);
      window.removeEventListener("resize", updateMaskPosition);

      $("body").removeClass("pf-caption-mask-on pf-caption-mask-active");
    };
  });


  // Portfolio Thumb Slider Page
  serviceDtMedia.add("(min-width: 991px)", () =>{
    if (document.querySelector(".pf-thumb-slider-page")) {
      const track = document.querySelector("#image-track");
      const images = track.querySelectorAll(".image");
    
      let maxMove;      // maximum horizontal movement
      let currentX = 0; // current x position of track
    
      // -------------------------------
      // CALCULATE MAX DRAG DISTANCE
      // -------------------------------
      function setBounds() {
        const trackWidth = track.scrollWidth;      // total width of all slides
        const viewportWidth = window.innerWidth;   // viewport width
    
        maxMove = trackWidth - viewportWidth;
        if (maxMove < 0) maxMove = 0; // prevent negative bounds
      }
      setBounds();
      window.addEventListener("resize", setBounds);
    
      // -------------------------------
      // PARALLAX UPDATE FUNCTION
      // -------------------------------
      function updateParallax(x) {
        const percent = gsap.utils.mapRange(0, -maxMove, 0, -100, x);
    
        images.forEach(img => {
          gsap.to(img, {
            objectPosition: `${100 + percent}% center`,
            duration: 0.3,
            ease: "power3.out"
          });
        });
      }
    
      // -------------------------------
      // DRAGGABLE
      // -------------------------------
      Draggable.create(track, {
        type: "x",
        inertia: true,
        bounds: { minX: -maxMove, maxX: 0 },
        edgeResistance: 0.9,      // reduce over-drag elasticity
        overshootTolerance: 0,     // prevent visual shrinking on edges
        onDrag() {
          currentX = this.x;
          updateParallax(this.x);
        },
        onThrowUpdate() {
          currentX = this.x;
          updateParallax(this.x);
        }
      });
    
      // -------------------------------
      // MOUSEWHEEL → HORIZONTAL SLIDE
      // -------------------------------
      window.addEventListener("wheel", (e) => {
        e.preventDefault(); // prevent vertical scroll
    
        currentX -= e.deltaY; // scroll moves horizontally
        if (currentX > 0) currentX = 0;
        if (currentX < -maxMove) currentX = -maxMove;
    
        gsap.to(track, { x: currentX, duration: 0.3, ease: "power3.out" });
        updateParallax(currentX);
      }, { passive: false });
    
      // -------------------------------
      // TOUCH SUPPORT FOR MOBILE
      // -------------------------------
      let touchStartX = 0;
      let trackStartX = 0;
    
      track.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        trackStartX = currentX;
      });
    
      track.addEventListener("touchmove", (e) => {
        const deltaX = e.touches[0].clientX - touchStartX;
        currentX = trackStartX + deltaX;
    
        if (currentX > 0) currentX = 0;
        if (currentX < -maxMove) currentX = -maxMove;
    
        gsap.to(track, { x: currentX, duration: 0.2, ease: "power3.out" });
        updateParallax(currentX);
      });
    }
    
    const pfThumbPage = document.querySelector(".pf-thumb-slider-page");
  
    if (pfThumbPage) {
      // ================================
      // ELEMENTS (scoped to this page)
      // ================================
      const thumbWrap = pfThumbPage.querySelector(".pf-thumb-slider-wrap");
      const paralaxArea = pfThumbPage.querySelector(".pf-paralax-img-slider-area");
      const parallaxCards = pfThumbPage.querySelectorAll(".pf-paralax-img-slider-wrap .single-paralax-img-slide");
      const expandBtns = pfThumbPage.querySelectorAll(".expand-slide-btn");
      const navArea = pfThumbPage.querySelector(".navigation-and-sm-img-slider-area");
      const titleItems = pfThumbPage.querySelectorAll(".pf-paralax-img-slider-title-list .single-pf-paralax-title");
  
      let isOpen = thumbWrap?.classList.contains("show") || false;
      let startX = null;
      let startY = null;
      const DRAG_THRESHOLD = 12;
  
      // ================================
      // SWIPER HELPERS (supports swiper2 or window.swiper2)
      // ================================
      function getSwiper() {
        if (typeof swiper2 !== "undefined" && swiper2) return swiper2;
        if (window.swiper2) return window.swiper2;
        return null;
      }
  
      function whenSwiperReady(cb) {
        let tries = 0;
        const tick = () => {
          const sw = getSwiper();
          if (sw && sw.el && typeof sw.el.addEventListener === "function") return cb(sw);
          if (tries++ < 180) requestAnimationFrame(tick); // ~3s max
        };
        tick();
      }
  
      // ================================
      // NAV AREA ANIMATION (always slide up when shown)
      // ================================
      function showNav() {
        if (!navArea) return;
        gsap.killTweensOf(navArea);
        gsap.set(navArea, { display: "block" });
        gsap.fromTo(
          navArea,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: "power3.out", overwrite: true }
        );
      }
  
      function hideNav() {
        if (!navArea) return;
        gsap.killTweensOf(navArea);
        gsap.to(navArea, {
          opacity: 0,
          y: 40,
          duration: 0.45,
          ease: "power2.inOut",
          overwrite: true,
          onComplete: () => gsap.set(navArea, { display: "none" })
        });
      }
  
      // ================================
      // OPEN / CLOSE
      // ================================
      function openThumb(index = 0, animate = true) {
        if (!thumbWrap || !paralaxArea) return;
  
        thumbWrap.classList.add("show");
        paralaxArea.classList.add("hide");
        thumbWrap.style.zIndex = 20;
        if (navArea) navArea.style.zIndex = 21;
        isOpen = true;
  
        const sw = getSwiper();
        if (sw && typeof sw.slideTo === "function") sw.slideTo(index, 0);
  
        if (!animate) return;
  
        gsap.killTweensOf(thumbWrap);
        gsap.fromTo(
          thumbWrap,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.25, ease: "power3.out", overwrite: true }
        );
  
        showNav();
      }
  
      function closeThumb() {
        if (!thumbWrap || !paralaxArea) return;
  
        thumbWrap.classList.remove("show");
        paralaxArea.classList.remove("hide");
        isOpen = false;
  
        thumbWrap.style.zIndex = "";
        if (navArea) navArea.style.zIndex = "";
  
        gsap.killTweensOf(thumbWrap);
        gsap.to(thumbWrap, {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
          ease: "power2.inOut",
          overwrite: true
        });
  
        hideNav();
  
        // Parallax cards stagger in when closing
        if (parallaxCards.length) {
          gsap.fromTo(
            parallaxCards,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power3.out", overwrite: true }
          );
        }
      }
  
      // ================================
      // CLICK: expand -> open + same index
      // ================================
      expandBtns.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          openThumb(index, true);
        });
      });
  
      // ================================
      // INITIAL STATE (supports reverse initial HTML)
      // ================================
      if (thumbWrap && thumbWrap.classList.contains("show")) {
        // Thumb is already open on load -> animate nav in
        isOpen = true;
        if (paralaxArea) paralaxArea.classList.add("hide");
        showNav();
  
        // keep slide index correct once swiper is ready
        whenSwiperReady((sw) => {
          openThumb(sw.activeIndex || 0, false); // no re-animation, just ensure state/index
        });
      } else {
        // Thumb closed on load -> keep nav hidden
        gsap.set(navArea, { display: "none", opacity: 0, y: 40 });
      }
  
      // ================================
      // CLOSE ON SCROLL
      // ================================
      window.addEventListener(
        "wheel",
        () => {
          if (!isOpen) return;
          closeThumb();
        },
        { passive: true }
      );
  
      // ================================
      // CLOSE ON DRAG (only if swiper exists)
      // ================================
      whenSwiperReady((sw) => {
        const swiperEl = sw.el;
  
        swiperEl.addEventListener("mousedown", (e) => {
          if (!isOpen) return;
          startX = e.clientX;
          startY = e.clientY;
        });
  
        swiperEl.addEventListener("mousemove", (e) => {
          if (!isOpen || startX === null) return;
          const dx = Math.abs(e.clientX - startX);
          const dy = Math.abs(e.clientY - startY);
          if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) closeThumb();
        });
  
        swiperEl.addEventListener(
          "touchstart",
          (e) => {
            if (!isOpen) return;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
          },
          { passive: true }
        );
  
        swiperEl.addEventListener(
          "touchmove",
          (e) => {
            if (!isOpen) return;
            const dx = Math.abs(e.touches[0].clientX - startX);
            const dy = Math.abs(e.touches[0].clientY - startY);
            if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) closeThumb();
          },
          { passive: true }
        );
      });
  
      window.addEventListener("mouseup", () => {
        startX = null;
        startY = null;
      });
  
      // ================================
      // HOVER TITLE SYNC (card index -> title index)
      // ================================
      let activeTitleIndex = -1;
  
      function setActiveTitle(index) {
        if (index === activeTitleIndex) return;
        activeTitleIndex = index;
  
        titleItems.forEach((li) => li.classList.remove("active"));
        const target = titleItems[index];
        if (!target) return;
  
        target.classList.add("active");
  
        gsap.fromTo(
          target,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", overwrite: true }
        );
      }
  
      parallaxCards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
          if (paralaxArea && paralaxArea.classList.contains("hide")) return;
          setActiveTitle(index);
        });
      });
  
      // default title on load
      const defaultIndex = [...titleItems].findIndex((t) => t.classList.contains("active"));
      if (defaultIndex >= 0) setActiveTitle(defaultIndex);
      else if (titleItems.length) setActiveTitle(0);
    }
  });

  /* =====================================================
  GLOBAL SAFETY SHIMS (PREVENT ALL REF ERRORS)
  ===================================================== */

  /* Loader State Store */
  window.N = window.N || {
    flags: {
      loaded: false
    }
  };

  /* Event Bus (safe noop) */
  window.a = window.a || {
    emit: function () {}
  };

  /* Video Preload Manager (safe noop) */
  window.V = window.V || {
    default: {
      startPreloading: async function () {},
      getStats: function () {
        return { isPreloading: false };
      }
    }
  };

  /* SplitText Fallback (I.A) */
  window.I = window.I || {};
  I.A = function (el) {
    if (!el) return { chars: [] };

    const text = el.textContent;
    el.innerHTML = "";

    const chars = text.split("").map(char => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      el.appendChild(span);
      return span;
    });

    return { chars };
  };

  /* =====================================================
    LOADER MODULE
  ===================================================== */

  const Loader = (function () {

    const state = {
      minDuration: 2000,
      startTime: Date.now(),
      videoStarted: false
    };

    function minTimePassed() {
      return Date.now() - state.startTime >= state.minDuration;
    }

    async function startVideoPreload() {
      if (state.videoStarted) return;
      state.videoStarted = true;

      try {
        await V.default.startPreloading(30);
      } catch (e) {
        console.warn("Video preload skipped");
      }
    }

    async function complete() {
      if (N.flags.loaded) return;
      N.flags.loaded = true;

      const timeout = 10000;
      const start = Date.now();

      while (V.default.getStats().isPreloading) {
        if (Date.now() - start > timeout) break;
        await new Promise(r => setTimeout(r, 100));
      }

      if (window.location.pathname === "/") {
        a.emit("animate:homepage-title:in");
      }
    }

    function checkComplete() {
      if (minTimePassed() && !N.flags.loaded) {
        complete();
      }
    }

    function animateText(tl, texts) {
      if (!texts || texts.length < 2) return;

      const run = () => {
        const t1 = new I.A(texts[0]);
        const t2 = new I.A(texts[1]);

        gsap.set([t1.chars, t2.chars], {
          autoAlpha: 0,
          yPercent: 125
        });

        gsap.set(texts, { autoAlpha: 1 });

        tl.to(t1.chars, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.6,
          stagger: 0.02
        }, 0)
          .to(t1.chars, {
            autoAlpha: 0,
            yPercent: -125,
            duration: 0.4,
            stagger: 0.02
          }, ">+=0.4")
          .to(t2.chars, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.6,
            stagger: 0.02
          }, "<")
          .to(t2.chars, {
            autoAlpha: 0,
            yPercent: -125,
            duration: 0.4,
            stagger: 0.02
          }, "hideContent-=0.5");
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(run);
      } else {
        setTimeout(run, 100);
      }
    }

    function init(root = document.querySelector("[data-load-wrap]")) {
      if (!root || !window.gsap) return;

      const el = {
        container: root.querySelector("[data-load-container]"),
        bg: root.querySelector("[data-load-bg]"),
        progress: root.querySelector("[data-load-progress]"),
        logo: root.querySelector("[data-load-logo]"),
        logoItems: root.querySelectorAll(".loader__logo-item"),
        logoLast: root.querySelector(".loader__logo-last"),
        text: [...root.querySelectorAll("[data-load-text]")],
        reset: [...root.querySelectorAll("[data-load-reset]:not([data-load-text])")]
      };

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 3 },
        onComplete: checkComplete
      });

      tl.set(root, { display: "block" })
        .call(startVideoPreload, null, 0)
        .to(el.progress, { scaleX: 1 })
        .to(el.logo, { clipPath: "inset(0% 0% 0% 0%)" }, "<")
        .to(el.logoItems, {
          opacity: 0,
          duration: 0.5
        }, ">+=0.3")
        .to(el.logoLast, {
          opacity: 1,
          duration: 0.6
        }, ">+=0.3")
        .to({}, { duration: 1 })
        .to(el.container, {
          autoAlpha: 0,
          duration: 0.5
        }, ">+=0.5")
        .to(el.progress, {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.5
        }, "<")
        .addLabel("hideContent")
        .to(el.bg, {
          opacity: 0,
          duration: 1
        }, "hideContent")
        .add(() => a.emit("preloader:complete"), "hideContent")
        .set(root, { display: "none" })
        .call(() => root.remove());

      if (el.reset.length) {
        tl.set(el.reset, { autoAlpha: 1 }, 0);
      }

      animateText(tl, el.text);

      return { timeline: tl };
    }

    return { init };

  })();

  /* =====================================================
    INIT
  ===================================================== */

  document.addEventListener("DOMContentLoaded", function () {
    Loader.init();
  });



  // Animate the Video scaling to fullscreen, keeping center position
  const videoWrapper = document.querySelector(".video-wrapper");
  const header = document.querySelector(".header7");

  if (!header) return;
  let stickyAdded = false; // track sticky state

  if (videoWrapper && window.innerWidth > 991) {
    // Desktop: Video animation + sticky at 95vw
    gsap.set(videoWrapper, {
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "center center",
      position: "absolute",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home7-banner-section",
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        onEnter: () => {
          header.classList.remove("sticky");
          stickyAdded = false;
        },
        onEnterBack: () => {
          header.classList.remove("sticky");
          stickyAdded = false;
        },
        onUpdate: (self) => {
          const currentWidth = videoWrapper.getBoundingClientRect().width;
          const threshold = window.innerWidth * 0.95;

          // Scroll down and width reached threshold → add sticky
          if (
            self.direction === 1 &&
            currentWidth >= threshold &&
            !stickyAdded
          ) {
            header.classList.add("sticky");
            stickyAdded = true;
          }

          // Scroll back up above threshold → remove sticky
          if (
            self.direction === -1 &&
            stickyAdded &&
            currentWidth < threshold
          ) {
            header.classList.remove("sticky");
            stickyAdded = false;
          }
        },
      },
    });

    // Animate video expansion
    tl.fromTo(
      videoWrapper,
      { width: "424px", height: "450px" },
      { width: "100vw", height: "100vh", ease: "power2.inOut" }
    );
  } else {
    // Mobile/tablet: sticky based on scroll only
    ScrollTrigger.create({
      trigger: ".home7-banner-section",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.progress > 0.1) {
          // adjust threshold for sticky appearance
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      },
    });
  }

  // Optional: handle resize
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 991 && header.classList.contains("sticky")) {
      stickyAdded = false;
      header.classList.remove("sticky");
    }
  });


})(jQuery);
