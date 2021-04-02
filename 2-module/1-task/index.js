function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    sum += isFinite(salaries[key]) ? salaries[key] : 0;
  }
  return sum;
}
