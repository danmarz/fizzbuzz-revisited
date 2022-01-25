// fizzbuzz generator* f
function* fizzbuzz(start, end) {
  let current = start;

  while (current <= end) {
    let output = (current % 3 ? '' : 'Fizz') + (current % 5 ? '' : 'Buzz');
    yield output ? output : current;
    current += 1;
  }
}

console.log(...fizzbuzz(1, 100));
