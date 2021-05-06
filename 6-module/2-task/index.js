import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
  }
  render() {
    const card = document.createElement("div");
    const cardTop = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardPrice = document.createElement("span");
    const cardTitle = document.createElement("div");
    const cardBut = document.createElement("button");
    const butImg = document.createElement("img");

    card.classList.add("card");
    cardTop.classList.add("card__top");
    cardBody.classList.add("card__body");
    cardPrice.classList.add("card__price");
    cardTitle.classList.add("card__title");
    cardBut.classList.add("card__button");
    cardImg.classList.add("card__image");
    cardTitle.textContent = this.product.name;
    cardPrice.textContent = `€${this.product.price.toFixed(2)}`;
    cardImg.src = `/assets/images/products/${this.product.image}`;
    butImg.src = `/assets/images/icons/plus-icon.svg`;
    cardImg.alt = "product";
    butImg.alt = "icon";
    cardBut.type = "button";
    cardBut.onclick = () => {
      const event = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,
      });
      card.dispatchEvent(event);
    };

    cardBut.append(butImg);
    cardTitle.append(cardBut);
    cardBody.append(cardTitle, cardBut);
    cardTop.append(cardImg, cardPrice);
    card.append(cardTop, cardBody);

    return card;
  }
}
