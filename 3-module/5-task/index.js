function getMinMax(str) {
  let result = { min: undefined, max: undefined };
  str = str
    .split(" ")
    .join()
    .split(",")
    .filter((el) => Number(el) && el);
  result.min = Math.min(...str);
  result.max = Math.max(...str);
  return result;
}
