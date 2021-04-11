function highlight(table) {
  let gender;
  let age;
  ///    Gender cell number
  for (let cell of table.rows[0].cells) {
    if (cell.textContent === "Gender") {
      gender = cell.cellIndex;
    }
  }
  ///    Age cell number
  for (let cell of table.rows[0].cells) {
    if (cell.textContent === "Age") {
      age = cell.cellIndex;
    }
  }
  ///////////////////////////////////////////
  for (let row of table.rows) {
    for (let cell of row.cells) {
      ///        Data  available
      if (cell.getAttribute("data-available") === "true") {
        cell.parentElement.classList.add("available");
      } else if (cell.getAttribute("data-available") === "false") {
        cell.parentElement.classList.add("unavailable");
      } else if (cell.getAttribute("data-available") == null) {
        cell.parentElement.setAttribute("hidden", "true");
      }
      ///    Gender
      if (cell.cellIndex === gender && cell.textContent === "m") {
        cell.parentElement.classList.add("male");
      } else if (cell.cellIndex === gender && cell.textContent === "f") {
        cell.parentElement.classList.add("female");
      }
      ///    Age
      if (cell.cellIndex === age && parseInt(cell.textContent) < 18) {
        cell.parentElement.style.textDecoration = "line-through";
      }
    }
  }
}
