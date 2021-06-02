import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }
  render() {
    const ribbon = document.createElement("div");
    const arrowLeft = document.createElement("button");
    const arrowRight = document.createElement("button");
    const arrowLeftImg = document.createElement("img");
    const arrowRightImg = document.createElement("img");
    const ribbonInner = document.createElement("nav");
    const ribbonItem = this.categories.map((item) => {
      const ribbonLink = document.createElement("a");
      const id = item.id;
      ribbonLink.textContent = item.name;
      ribbonLink.className = "ribbon__item";
      ribbonLink.dataset.id = id;
      return ribbonLink;
    });
    ribbon.className = "ribbon";
    ribbonInner.className = "ribbon__inner";
    arrowRight.classList.add(
      "ribbon__arrow",
      "ribbon__arrow_right",
      "ribbon__arrow_visible"
    );
    arrowLeft.classList.add("ribbon__arrow", "ribbon__arrow_left");
    arrowLeftImg.src = "/assets/images/icons/angle-icon.svg";
    arrowRightImg.src = "/assets/images/icons/angle-icon.svg";
    arrowLeft.alt = "icon";
    arrowRight.alt = "icon";
    arrowLeft.append(arrowLeftImg);
    arrowRight.append(arrowRightImg);
    ribbonInner.append(...ribbonItem);
    ribbon.append(arrowLeft, ribbonInner, arrowRight);

    /* ---------------------------INNER CLICK---------------------------------*/
    ribbon.addEventListener("click", function (event) {
      if (event.target.classList.contains("ribbon__item")) {
        const ribbonLinksAll = document.querySelectorAll(".ribbon__item");
        console.log(ribbonLinksAll);
        ribbonLinksAll.forEach((el) => {
          el.classList.remove("ribbon__item_active");
          if (el.dataset.id === event.target.dataset.id) {
            el.classList.add("ribbon__item_active");
            ribbon.dispatchEvent(
              new CustomEvent("ribbon-select", {
                detail: el.dataset.id,
                bubbles: true,
              })
            );
          }
        });
      } else if (event.target.classList.contains("ribbon__arrow_right")) {
        ribbonInner.scrollBy(350, 0);
      } else if (event.target.classList.contains("ribbon__arrow_left")) {
        ribbonInner.scrollBy(-350, 0);
      } else {
        return;
      }
    });

    /* --------------------------- INNER SCROLL ---------------------------------*/
    ribbonInner.addEventListener("scroll", function (event) {
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollLeft === 0) {
        arrowLeft.classList.remove("ribbon__arrow_visible");
      } else if (scrollRight < 1) {
        arrowRight.classList.remove("ribbon__arrow_visible");
      } else {
        arrowLeft.classList.add("ribbon__arrow_visible");
        arrowRight.classList.add("ribbon__arrow_visible");
      }
    });

    return ribbon;
  }
}
