function maxOfThree(a, b, c) {
  max = a;

  if (b >= a && b >= c) {
    max = b;
  }
  if (c >= a && c >= b) {
    max = c;
  }

  console.log(`the max is ${max}`);
}

maxOfThree(9, 4, 1);
maxOfThree(4, 9, 1);
maxOfThree(1, 9, 4);
maxOfThree(10, 20, 30);
maxOfThree(10, 50, 20);
