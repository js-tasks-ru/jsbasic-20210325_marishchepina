function initCarousel() {
  const wrapper = document.querySelector(".carousel");
  const slider = document.querySelector(".carousel__inner");
  const slides = document.querySelectorAll(".carousel__slide");
  const prevBtn = document.querySelector(".carousel__arrow_left");
  const nextBtn = document.querySelector(".carousel__arrow_right");
  let step = slider.offsetWidth;
  let counter = 1;
  let shift = 0;

  counter === 1 && (prevBtn.style.display = "none");

  wrapper.addEventListener("click", function (event) {
    const carouselArrow = event.target.closest(".carousel__arrow");

    if (carouselArrow) {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "flex";
      if (carouselArrow === nextBtn) {
        counter++;
        shift -= step;
        if (slides.length === counter) {
          carouselArrow.style.display = "none";
        }
      }
      if (carouselArrow === prevBtn) {
        counter--;
        shift += step;
        if (counter === 1) {
          carouselArrow.style.display = "none";
        }
      }
      slider.style.transform = "translateX(" + shift + "px)";
    } else {
      return;
    }
  });
}
