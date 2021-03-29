function truncate(str, maxlength) {
  const newStr =
    str.length > maxlength
      ? str.substr(0, maxlength - 1).padEnd(maxlength, "…")
      : str;
  return newStr;
}
