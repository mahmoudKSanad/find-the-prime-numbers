function primeNumbers(n, m) {
  let list = [];
  for (num = n; num <= m; num++) {
    let isPrime = true;
    for (i = 2; i <= num - 1; i++) {
      if (Number.isInteger(num / i)) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && num >= 2) {
      list.push(num);
    }
  }
  return list.join(" ");
}

