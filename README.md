# FizzBuzz.. again!

Inspired by [Why Can't Programmers.. Program?](https://blog.codinghorror.com/why-cant-programmers-program/), I've re-created one of the very first programming activity I was tasked with 2 years ago ― at the beginning of my coding 'career'. 

1. The first solution ["fizzbuzz-1.js"](./fizzbuzz-1.js) is my 'Clean Code' solution with the standard `if-else` statement flow, descriptive variable names - well written, easy to read code.

2. In my second solution ["fizzbuzz-2.js"](./fizzbuzz-2.js) I've replaced the `if-else` statement with *the only Javascript conditional that takes three operands*, namely the [Coditional AKA Ternary operator](https://danmarius.dev/conditional-aka-ternary-operator) and daisy-chaining them. This makes it possible for REALLY compact code: only one line - effectively inside `console.log()` parens, but at the same time REALLY hurting readability. Two years ago this would have been a series of WTFs :)

3. This third solution is not my own, it's from this [youtube video](https://www.youtube.com/watch?v=RBBiri3CD6w). Apart from being typed on a steganography keyboard, I was already familiar with the concept of generator functions and the `yield` keyword from a `Python` course I had taken in 2021, what I found really elegant was the way the conditional operator (`x ? y : z`) had been applied both in the `output` variable declaration and yielding. Great use of Javascript dreaded `truthy`/`falsy` values!

That's it, this was my journey from not knowing what kind of VooDoo magic lurks behind the modulo `%` operator and the night terrors of not remembering how to EXACTLY spell `System.out.println()` in Java to now, two years later when these solutions read (and write) like stories, not cryptic code. Onto the next two years! 

Stay learning, stay sharp!

--dan m.
[Made with StackBlitz ⚡️](https://stackblitz.com/edit/node-u7g68z)
