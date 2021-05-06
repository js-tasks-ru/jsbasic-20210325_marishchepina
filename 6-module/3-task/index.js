/*-------------------------------  TEACHER DECISION   --------------------------*/
/*import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.currentSlideNumber = 0;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
        <div class="carousel">
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
          </div>
          <div class="carousel__inner"></div>
        </div>
        `);

    let slides = this.slides.map((item) =>
      createElement(`
      <div class="carousel__slide" data-id="${item.id}">
        <img
          src="/assets/images/carousel/${item.image}"
          class="carousel__img"
          alt="slide"
        />
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
          </button>
        </div>
      </div>`)
    );

    this.sub("inner").append(...slides);

    this.update();
  }

  addEventListeners() {
    this.elem.onclick = ({ target }) => {
      let button = target.closest(".carousel__button");
      if (button) {
        let id = target.closest("[data-id]").dataset.id;

        this.elem.dispatchEvent(
          new CustomEvent("product-add", {
            detail: id,
            bubbles: true,
          })
        );
      }

      if (target.closest(".carousel__arrow_right")) {
        this.next();
      }

      if (target.closest(".carousel__arrow_left")) {
        this.prev();
      }
    };
  }

  sub(ref) {
    return this.elem.querySelector(`.carousel__${ref}`);
  }

  next() {
    this.currentSlideNumber++;
    this.update();
  }

  prev() {
    this.currentSlideNumber--;
    this.update();
  }

  update() {
    let offset = -this.elem.offsetWidth * this.currentSlideNumber;
    this.sub("inner").style.transform = `translateX(${offset}px)`;

    if (this.currentSlideNumber == this.slides.length - 1) {
      this.sub("arrow_right").style.display = "none";
    } else {
      this.sub("arrow_right").style.display = "";
    }

    if (this.currentSlideNumber == 0) {
      this.sub("arrow_left").style.display = "none";
    } else {
      this.sub("arrow_left").style.display = "";
    }
  }
}
*/
/*------------------   MY CODE   -----------------------*/
import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }
  render() {
    const carousel = document.createElement("div");
    const prevBtn = document.createElement("div");
    const nextBtn = document.createElement("div");
    const prevBtnImg = document.createElement("img");
    const nextBtnImg = document.createElement("img");
    const slidesWrap = document.createElement("div");
    let counter = 0;
    const slidesCount = this.slides.length;

    /*------------------  NEXT/PREV BUTTONS attributes, slidesWrap  ----------------------*/
    carousel.className = "carousel";
    slidesWrap.className = "carousel__inner";
    prevBtn.classList.add("carousel__arrow", "carousel__arrow_left");
    nextBtn.classList.add("carousel__arrow", "carousel__arrow_right");
    prevBtnImg.src = "/assets/images/icons/angle-left-icon.svg";
    nextBtnImg.src = "/assets/images/icons/angle-icon.svg";
    prevBtnImg.alt = "icon";
    nextBtnImg.alt = "icon";

    /*--------------------------------- RENDER SLIDERS  ------------------------------------*/
    for (const { name, price, image, id } of this.slides) {
      const slide = document.createElement("div");
      const slideImg = document.createElement("img");
      const slideDescr = document.createElement("div");
      const slidePrice = document.createElement("span");
      const slideTitle = document.createElement("div");
      const slideBut = document.createElement("button");
      const slideButImg = document.createElement("img");

      slide.className = "carousel__slide";
      slideImg.className = "carousel__img";
      slideDescr.className = "carousel__caption";
      slidePrice.className = "carousel__price";
      slideTitle.className = "carousel__title";
      slideBut.className = "carousel__button";
      slideBut.type = "button";
      slide.dataset.id = id;
      slideTitle.textContent = name;
      slidePrice.textContent = `€${price.toFixed(2)}`;
      slideButImg.src = `/assets/images/icons/plus-icon.svg`;
      slideImg.src = `/assets/images/carousel/${image}`;
      slideButImg.alt = "icon";
      slideImg.alt = "slide";

      slideBut.append(slideButImg);
      slideDescr.append(slidePrice, slideTitle, slideBut);
      slide.append(slideImg, slideDescr);
      slidesWrap.append(slide);
    }

    prevBtn.append(prevBtnImg);
    nextBtn.append(nextBtnImg);
    carousel.append(prevBtn, nextBtn, slidesWrap);

    /*------------------   EVENT  ----------------------*/
    if (counter === 0) {
      prevBtn.style.display = "none";
    }

    carousel.addEventListener("click", function (event) {
      const carouselArrow = event.target.closest(".carousel__arrow");
      const carousel = document.querySelector(".carousel");
      if (event.target.closest(".carousel__button")) {
        let id = event.target.closest(".carousel__slide").dataset.id;
        carousel.dispatchEvent(
          new CustomEvent("product-add", {
            detail: id,
            bubbles: true,
          })
        );
      } else if (carouselArrow) {
        prevBtn.style.display = ""; // display: flex caused an error
        nextBtn.style.display = "";
        if (carouselArrow === nextBtn) {
          counter++;
          if (slidesCount === counter + 1) {
            carouselArrow.style.display = "none";
          }
        }
        if (carouselArrow === prevBtn) {
          counter--;
          if (counter === 0) {
            carouselArrow.style.display = "none";
          }
        }
        let offset = -slidesWrap.offsetWidth * counter;
        slidesWrap.style.transform = `translateX(${offset}px)`;
      } else {
        return;
      }
    });

    return carousel;
  }
}
