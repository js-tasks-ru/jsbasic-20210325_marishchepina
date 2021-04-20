function hideSelf() {
  document.addEventListener("click", (e) => {
    const clicked = e.target;
    if (clicked.classList.contains("hide-self-button")) {
      clicked.setAttribute("hidden", "true");
    }
  });
}
