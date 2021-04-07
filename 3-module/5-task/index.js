function getMinMax(str) {
  let result = { min: undefined, max: undefined };
  let arr = str
    .split(" ")
    .join()
    .split(",")
    .filter((el) => Number(el) && el);
  console.log(arr);
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  return result;
}
