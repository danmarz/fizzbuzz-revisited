const fizz = `Fizz`;
const buzz = `Buzz`;

for (let number = 1; number <= 100; number++) {
  const isFizz = number % 3 == 0;
  const isBuzz = number % 5 == 0;

  if (isFizz && isBuzz) {
    console.log(fizz + buzz);
    continue;
  } else if (isFizz) {
    console.log(fizz);
    continue;
  } else if (isBuzz) {
    console.log(buzz);
    continue;
  }

  console.log(number);
}
