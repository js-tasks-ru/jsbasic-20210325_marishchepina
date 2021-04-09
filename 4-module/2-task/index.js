function makeDiagonalRed(table) {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      row.rowIndex === cell.cellIndex && (cell.style.backgroundColor = "red");
    }
  }
}
