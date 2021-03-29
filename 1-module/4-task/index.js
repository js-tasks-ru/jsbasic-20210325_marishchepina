function checkSpam(str) {
  const spamString1 = "1xBet".toLowerCase();
  const spamString2 = "XXX".toLowerCase();

  const spam =
    str.toLowerCase().includes(spamString1) ||
    str.toLowerCase().includes(spamString2)
      ? true
      : false;

  return spam;
}
