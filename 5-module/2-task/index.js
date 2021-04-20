function toggleText() {
  const toggleButton = document.querySelector(`.toggle-text-button`);
  const text = document.getElementById("text");

  toggleButton.onclick = (e) => {
    text.toggleAttribute("hidden");
  };
}
