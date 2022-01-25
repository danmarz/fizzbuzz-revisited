const fizz = `Fizz`;
const buzz = `Buzz`;

for (let number = 1; number <= 100; number++) {
  const isFizz = number % 3 == 0;
  const isBuzz = number % 5 == 0;

  console.log(
    isFizz && isBuzz ? fizz + buzz : isFizz ? fizz : isBuzz ? buzz : number // fizzbuzz WTF
  );
}
