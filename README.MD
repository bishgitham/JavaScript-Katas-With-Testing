You are expected to use full TDD in every kata in order to demonstrate your understanding of the questions and of good TDD practices.
#Kata 1
Using the appropriate array method, write a function that creates a tally object for arrays. E.g

createTally(["cake", "biscuit", "biscuit"]); // returns {cake: 1, biscuit: 2}
createTally(["dog", "dog", "dog"]); // returns {dog: 3}

#Kata 2

Write a higher-order function called `invert'

It should do the following:

- It should return a new function.
- It should take a function as its only argument.
- The inner function should take any number of arguments and inverts a call to the passed function

#Kata 3

Using the appropriate array method, write a function that creates a tally object for all the vowels in a given string

Examples

```js
vowelCount("hello world"); // returns {a: 0, e: 1, i: 0 o: 2, u: 0}
vowelCount("Coding at northcoders is rad"); // returns {a: 2, e:1, i:2, o:3, u: 0}
```

#Kata 4

Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G and T pairs with A.

Examples

```javascript
dnaPair("G"); // -> [ ["G", "C"] ]
```

```javascript
dnaPair("AG"); // -> [ ["A", "T"], ["G", "C"] ]
```

```javascript
dnaPair("ATAG"); // -> [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
```

# Kata 5

Add FizzBuzz multiples below a certain number

Implement a function which adds all the multiples of three and five **below** a certain number

    calculateDivisors(1)   => 0
    calculateDivisors(5)    =>  3
    calculateDivisors(6)    =>  8
    calculateDivisors(10) =>  23
