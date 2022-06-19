var headerSearchInput = document.querySelector(".header__search-inputs input");
var headerSearchResult = document.querySelector(".header__search-result");
var sliderList = document.querySelectorAll(
  ".slider__content-list .slider__content-item"
);
var sliderDots = document.querySelectorAll(
  ".slider__content-select .slider__content-select-dot"
);

// Go to top
var btnGoToTop = document.querySelector(".btn-go-to-top");

function showBtnGoToTop() {
  if (window.scrollY != 0) {
    btnGoToTop.style =
      "display: block; animation: animateActive 0.5s ease-out;";
  } else {
    btnGoToTop.style = "display: none;";
  }
}

btnGoToTop.onclick = () => {
  window.scrollTo(0, 0);
};

window.addEventListener("scroll", showBtnGoToTop);

// Toggle search result
headerSearchInput.onfocus = function () {
  headerSearchResult.style = "opacity: 1; visibility: visible;";
};

headerSearchInput.onblur = function () {
  headerSearchResult.style = "opacity: 0; visibility: hidden;";
};

// Slider
var i = 0;
function changeSlider() {
  sliderDots[i].classList.toggle("slider__content-select-dot--active");
  sliderList[i].classList.toggle("slider__content-item--active");
  if (i == sliderDots.length - 1) {
    i = -1;
  }
  sliderDots[i + 1].classList.toggle("slider__content-select-dot--active");
  sliderList[i + 1].classList.toggle("slider__content-item--active");
  i++;

  sliderDots.forEach((item, index) => {
    if (item.classList.contains("slider__content-select-dot--active")) {
    }
  });
}

setInterval(changeSlider, 3000);

// Location
var locationBtnNext = document.querySelector(".location__slider-btnNext");
var locationBtnPrev = document.querySelector(".location__slider-btnPrev");

$(".owl-location").owlCarousel({
  loop: true,
  margin: 15,
  dots: false,
  nav: true,
  navText: [locationBtnPrev, locationBtnNext],
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 2,
    },
    740: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  },
});

// Voucher
$(".owl-voucher").owlCarousel({
  loop: true,
  margin: 15,
  dots: false,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    740: {
      items: 1,
    },
    1024: {
      items: 3,
    },
  },
});

// Suggestion
var suggestionBtnNext = document.querySelector(".suggestion__slider-btnNext");
var suggestionBtnPrev = document.querySelector(".suggestion__slider-btnPrev");

$(".owl-suggestion").owlCarousel({
  loop: true,
  margin: 15,
  dots: false,
  nav: true,
  navText: [suggestionBtnPrev, suggestionBtnNext],
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    740: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
});

// Discovery
var discoveryBtnNext = document.querySelector(".discovery__slider-btnNext");
var discoveryBtnPrev = document.querySelector(".discovery__slider-btnPrev");

$(".owl-discovery").owlCarousel({
  loop: true,
  margin: 15,
  dots: false,
  nav: true,
  navText: [discoveryBtnPrev, discoveryBtnNext],
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    740: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});

// Guide
var guideBtnNext = document.querySelector(".guide__slider-btnNext");
var guideBtnPrev = document.querySelector(".guide__slider-btnPrev");

$(".owl-guide").owlCarousel({
  loop: true,
  margin: 15,
  dots: false,
  nav: true,
  navText: [guideBtnPrev, guideBtnNext],
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    740: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});
