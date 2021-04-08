// My solution
function camelize(str) {
  let camelCaseArr = [];
  str
    .toLowerCase()
    .trim()
    .split("-")
    .map((el) => {
      if (el) {
        el = el[0].toUpperCase() + el.slice(1);
        camelCaseArr.push(el);
      } else camelCaseArr.push("fake_word");
    });
  camelCaseArr[0] === "fake_word"
    ? camelCaseArr.shift("fake_word")
    : (camelCaseArr[0] = camelCaseArr[0].toLowerCase());

  return camelCaseArr.join("");
}

// Solving from here https://plnkr.co/edit/v0Mq0LktDKg5fQbi?p=preview&preview
// function camelize(str) {
//   return str
//     .split("-")
//     .map(
//       (word, index) =>
//         index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }
