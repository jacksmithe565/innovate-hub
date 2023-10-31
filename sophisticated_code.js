/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a complex and sophisticated example that showcases various JavaScript concepts and techniques.
 * 
 * Note: Running this code may result in different outputs each time due to the use of random numbers.
 */

// Import external library
const moment = require('moment');

// Define a class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  birthday() {
    this.age++;
    console.log(`Today is my birthday! I am now ${this.age} years old!`);
  }
}

// Generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Create an array of people
const people = [
  new Person('John', 25),
  new Person('Emma', 30),
  new Person('Mike', 40),
  new Person('Sarah', 35),
  new Person('David', 22)
];

// Generate random ages for the people
for (let i = 0; i < people.length; i++) {
  people[i].age = getRandomNumber(18, 50);
}

// Sort the people array based on their age in descending order
people.sort((person1, person2) => person2.age - person1.age);

// Print the sorted people array
console.log('Sorted People (Descending Order):');
for (let i = 0; i < people.length; i++) {
  console.log(`${i + 1}. ${people[i].name} - ${people[i].age} years old`);
}

// Find the average age of the people
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
const averageAge = totalAge / people.length;

console.log(`Average Age: ${averageAge.toFixed(2)} years`);

// Create a function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Generate a random number and check if it is prime
const randomNumber = getRandomNumber(1, 100);
console.log(`Random Number: ${randomNumber}`);
console.log(`Is Prime Number? ${isPrime(randomNumber)}`);

// Display the current date and time using moment.js library
console.log(`Current Date and Time: ${moment().format('YYYY-MM-DD HH:mm:ss')}`);

// Perform a recursive Fibonacci series calculation
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciNumber = getRandomNumber(1, 20);
console.log(`Fibonacci(${fibonacciNumber}) = ${fibonacci(fibonacciNumber)}`);

// Create a promise that resolves after a random amount of time
function waitRandomTime() {
  return new Promise((resolve) => {
    const delay = getRandomNumber(1000, 5000);
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

// Execute asynchronous tasks using async/await
async function executeAsyncTasks() {
  console.log('Executing async tasks...');

  await waitRandomTime();
  console.log('Task 1 completed!');

  await waitRandomTime();
  console.log('Task 2 completed!');

  await waitRandomTime();
  console.log('Task 3 completed!');

  console.log('All tasks completed!');
}

executeAsyncTasks().catch((error) => {
  console.error('Error occurred while executing async tasks:', error);
});

// End of sophisticated_code.js