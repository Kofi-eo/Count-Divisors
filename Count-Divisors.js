function countDivisors(number) {
  let sum = 0;
  for (i = 1; i <= number; i++) {
    for (x = 1; x <= i; x++) {
      if (i % x == 0) {
        sum++;
      }
    }
  }

  return sum;
}

//EXAMPLE
console.log(countDivisors(10)); //---> Result 27
