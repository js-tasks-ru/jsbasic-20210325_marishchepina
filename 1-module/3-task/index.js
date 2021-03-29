function ucFirst(str) {
  if (str) {
    str = str[0].toUpperCase() + str.slice(1);
    console.log(str);
    return str;
  } else {
    console.log("");
    return "";
  }
}
