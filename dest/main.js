// slider
window.addEventListener("load", function () {
  let slider = document.querySelector(".slider__item-wrap");
  if (slider) {
    let flktySlider = new Flickity(slider, {
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
    });
    let btnLeft = document.querySelector(".slider__item-btn .btnLeft");
    let btnRight = document.querySelector(".slider__item-btn .btnRight");
    btnLeft?.addEventListener("click", function () {
      flktySlider.previous(true);
    });
    btnRight?.addEventListener("click", function () {
      flktySlider.next(true);
    });
  }

  //  language
  function selectLang() {
    let lang = document.querySelector(".header__right-lang");
    let langs = document.querySelectorAll(
      ".header__right .header__right-lang li a"
    );
    let langCurrent = document.querySelector(
      ".header__right .header__right-lang span"
    );
    lang.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      this.classList.toggle("active");
    });
    langs.forEach(function (item) {
      item.addEventListener("click", function () {
        let langText = this.textContent;
        // gan tam
        let langSave = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        this.innerHTML = langSave;
      });
    });
    document.addEventListener("click", function () {
      lang.classList.remove("active");
    });
  }

  // nav menu mobile
  function menuMobile() {
    let btnmenu = document.querySelector(".hamburger");
    let nav = document.querySelector(".nav");

    btnmenu.addEventListener("click", function () {
      this.classList.toggle("active");
      nav.classList.toggle("active");
    });

    function hideNav() {
      btnmenu.classList.remove("active");
      nav.classList.remove("active");
    }
    window.addEventListener("resize", function () {
      let widthWin = window.innerWidth;
      if (widthWin > 1200) {
        hideNav();
      }
    });
  }

  // video
  function popupvid() {
    let videos = document.querySelectorAll(" .video__box");
    let popup = document.querySelector(".popupvideo");
    let iframe = document.querySelector(
      ".popupvideo .popupvideo__item .popupvideo__item-url iframe"
    );
    let btnclose = document.querySelector(
      ".popupvideo .popupvideo__item .popupvideo__item-btnclose"
    );

    videos.forEach(function (item) {
      item.addEventListener("click", function () {
        popup.classList.add("active");

        let datayt = item.getAttribute("data-video");
        iframe.setAttribute(
          "src",
          "https://www.youtube.com/embed/" + datayt + "?autoplay=1"
        );
      });
      btnclose.addEventListener("click", function () {
        popup.classList.remove("active");
        iframe.setAttribute("src", "");
      });
      popup.addEventListener("click", function () {
        popup.classList.remove("active");
        iframe.setAttribute("src", "");
      });
    });
  }

  // thong diep
  let news = document.querySelector(".textbox__item-wrap");
  if (news) {
    let flktyNews = new Flickity(news, {
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
    });
    let newsLeft = document.querySelector(".news__bottom-btn .btn__left");
    let newsRight = document.querySelector(".news__bottom-btn .btn__right");
    newsLeft?.addEventListener("click", function () {
      flktyNews.previous(true);
    });
    newsRight?.addEventListener("click", function () {
      flktyNews.next(true);
    });
  }

  // scroll logo
  let logo = document.querySelector(".event__logo");
  if (logo) {
    let flktyLogo = new Flickity(logo, {
      freeScroll: true,
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      // wrapAround: true,
    });
  }

  // back to top
  let backtotop = document.querySelector(".toTop");
  let hero = document.querySelector(".hero");
  if (hero && backtotop) {
    let heightHero = hero.offsetHeight;
    function backTop() {
      window.addEventListener("scroll", function () {
        if (window.pageYOffset > heightHero) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      });
      backtotop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
    backTop();
  }

  // scroll service product

  let serviceProduct = document.querySelector(".services__list");
  if (serviceProduct) {
    let flktyService = new Flickity(serviceProduct, {
      freeScroll: true,
      contain: true,
      prevNextButtons: false,
    });
  }

  // album gallery

  Fancybox.bind('[data-fancybox="gallery"]', {
    infinite: true,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },
  });
  Fancybox.bind('[data-fancybox="gallery1"]', {
    infinite: true,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },
  });
  Fancybox.bind('[data-fancybox="gallery2"]', {
    infinite: true,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },
  });
  Fancybox.bind('[data-fancybox="gallery3"]', {
    infinite: true,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },
  });
  Fancybox.bind('[data-fancybox="gallery4"]', {
    infinite: true,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },
  });
  Fancybox.bind('[data-fancybox="gallery5"]', {
    infinite: true,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },
  });

  // tab library

  let tabs = document.querySelectorAll(".title__all");
  let newsList = document.querySelectorAll(".library__wrap-item");

  if (tabs && newsList) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        // remove active in textboxga
        tabs.forEach(function (tab) {
          tab.classList.remove("active");
        });

        this.classList.add("active");
        // remove active in news__list
        newsList.forEach(function (list) {
          list.classList.remove("active");
        });
        let id = this.dataset.tab;
        document.querySelector(".library__list-" + id).classList.add("active");
      });
    });
  }

  selectLang();
  popupvid();
  menuMobile();
});

let clickItem = document.querySelector(".this");

function changeCt() {
  clickItem.addEventListener("click", function () {
    clickItem.innerHTML = "done done done";
    console.log(1);
  });
}
setTimeout(changeCt, 3000);
