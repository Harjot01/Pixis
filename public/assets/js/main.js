if (typeof window != "undefined") {
  window.onload=function(){
    (function () {
      "use strict";
      // ======= Sticky
      window.onscroll = function () {
        const ud_header = document.querySelector(".ud-header");
        const sticky = ud_header.offsetTop;
        const logo = document.querySelector(".header-logo");

        if (window.pageYOffset > sticky) {
          ud_header.classList.add("sticky");
        } else {
          ud_header.classList.remove("sticky");
        }

        // === logo change
        if (ud_header.classList.contains("sticky")) {
          logo.src = "assets/images/logo/logo.svg";
        } else {
          logo.src = "assets/images/logo/logo-white.svg";
        }

        // show or hide the back-top-top button
        const backToTop = document.querySelector(".back-to-top");
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      };

      // ===== responsive navbar
      let navbarToggler = document.querySelector("#navbarToggler");
      const navbarCollapse = document.querySelector("#navbarCollapse");

      navbarToggler.addEventListener("click", () => {
        navbarToggler.classList.toggle("navbarTogglerActive");
        navbarCollapse.classList.toggle("hidden");
      });

      //===== close navbar-collapse when a  clicked
      document
        .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
        .forEach((e) =>
          e.addEventListener("click", () => {
            navbarToggler.classList.remove("navbarTogglerActive");
            navbarCollapse.classList.add("hidden");
          })
        );

      // ===== Sub-menu
      const submenuItems = document.querySelectorAll(".submenu-item");
      submenuItems.forEach((el) => {
        el.querySelector("a").addEventListener("click", () => {
          el.querySelector(".submenu").classList.toggle("hidden");
        });
      });

      // ===== Faq accordion
      const faqs = document.querySelectorAll(".single-faq");
      faqs.forEach((el) => {
        el.querySelector(".faq-btn").addEventListener("click", () => {
          el.querySelector(".icon").cladffalassList.toggle("hidden");
        });df
      });
      // ===== wow js
      // new WOW().init();

      // ====== scroll top js
      function scrollTo(element, to = 0, duration = 500) {
        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
          currentTime += increment;

          const val = Math.easeInOutQuad(currentTime, start, change, duration);

          element.scrollTop = val;

          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };

        animateScroll();
      }

      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      document.querySelector(".back-to-top").onclick = () => {
        scrollTo(document.documentElement);
      };
    })();

    // Testimonial carousel
    jQuery(document).ready(function ($) {
      "use strict";
      //  TESTIMONIALS CAROUSEL HOOK
      $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
      });
    });

    // Client Section
    $('.client').slick({
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $('.js-add-slide').on('click', function () {
      slideIndex++;
      $('.add-remove').slick('slickAdd', '<div><h3>' + slideIndex + '</h3></div>');
    });

    $('.js-remove-slide').on('click', function () {
      $('.add-remove').slick('slickRemove', slideIndex - 1);
      if (slideIndex !== 0) {
        slideIndex--;
      }
    });


    // Thumbail Section
    $('.thumbnail').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      autoplay: true,
      autoplayTimeout: 2000,
      infinite: true,
      loop: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });



    // // dots: true,
    // // infinite: false,
    // // speed: 300,
    // // slidesToShow: 3,
    // // autoplay: true,
    // // autoplayTimeout: 2000,
    // // infinite: true,
    // mobileFirst: true,
    //   loop: true,

    //   responsive: [
    //     {
    //       breakpoint: 2000,
    //       settings: "unslick"
    //     },
    //     {
    //       breakpoint: 1600,
    //       settings: "unslick"
    //     },
    //     {
    //       breakpoint: 1024,
    //       settings: "unslick"
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: "unslick"
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // });

    const init = {
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplayTimeout: 1000,
      infinite: true,
      mobileFirst: true,
    };

    $(() => {
      const win = $(window);
      const slider = $(".top-clients");

      win.on("load resize", () => {
        if (win.width() < 960) {
          slider.not(".slick-initialized").slick(init);
        } else if (slider.hasClass("slick-initialized")) {
          slider.slick("unslick");
        }
      });
    });





    // Video Section
    $('.video').slick({
      centerMode: true,
      centerPadding: '60px',
      autoplay: true,
      autoplayTimeout: 2000,
      infinite: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    // Instagram Slider
    let defaultTransform = 0;
    function goNext() {
      defaultTransform = defaultTransform - 398;
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
    }
    next.addEventListener("click", goNext);
    function goPrev() {
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
      else defaultTransform = defaultTransform + 398;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
    }
    prev.addEventListener("click", goPrev);

    // ==== for menu scroll
    const pageLink = document.querySelectorAll(".ud-menu-scroll");

    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          offsetTop: 1 - 60,
        });
      });
    });

    // section menu active
    function onScroll(event) {
      const sections = document.querySelectorAll(".ud-menu-scroll");
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute("href");
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document
            .querySelector(".ud-menu-scroll")
            .classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    }

    window.document.addEventListener("scroll", onScroll);
  }
}