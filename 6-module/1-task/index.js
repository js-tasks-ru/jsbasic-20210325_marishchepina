/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.data = rows;
  }

  get elem() {
    if (!this.table) {
      this.table = document.createElement("table");
      let tbody = document.createElement("tbody");
      const thead = document.createElement("thead");
      const theadRow = document.createElement("tr");
      const name = document.createElement("th");
      const age = document.createElement("th");
      const salary = document.createElement("th");
      const city = document.createElement("th");
      const but = document.createElement("th");
      name.textContent = "Имя";
      age.textContent = "Возраст";
      salary.textContent = "Зарплата";
      city.textContent = "Город";
      theadRow.append(name, age, salary, city, but);
      thead.append(theadRow);
      this.table.append(thead);
      this.table.append(tbody);
      for (const { name, age, salary, city } of this.data) {
        const row = document.createElement("tr");
        const tbodyName = document.createElement("td");
        const tbodyAge = document.createElement("td");
        const tbodySalary = document.createElement("td");
        const tbodyCity = document.createElement("td");
        const closeButWrap = document.createElement("td");
        const closeBut = document.createElement("button");
        closeBut.classList.add("close");
        tbodyName.textContent = name;
        tbodyAge.textContent = age;
        tbodySalary.textContent = salary;
        tbodyCity.textContent = city;
        closeBut.textContent = "X";
        closeBut.addEventListener("click", (event) => {
          event.target.closest("tr").remove();
        });
        closeButWrap.append(closeBut);
        row.append(tbodyName, tbodyAge, tbodySalary, tbodyCity, closeButWrap);
        tbody.append(row);
      }
    }
    return this.table;
  }
}
