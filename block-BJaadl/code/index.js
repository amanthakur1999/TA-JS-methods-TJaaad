let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words){
  
}
// - Convert the above array "words" into an array of length of word instead of word.
for(let word of words){
 console.log( word.length);
}
// - Create a new array that only contains word with atleast one vowel.

// - Find the index of the word "rhythm"
console.log( words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(number)
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplied =numbers.map(num=>num*3);
console.log(multiplied); 
// - Create a new array that contains only even numbers
let evenNumber= numbers.filter(num=> num%2===0)
console.log(evenNumber);
// - Create  a new array that contains only odd numbers.
let oddNumber= numbers.filter(num=> num%2 !==0)
console.log(oddNumber);
// - Create a new array that should have true for even number and false for odd numbers.

// - Sort the above number in assending order.
console.log([...numbers].sort((a,b)=>a-b)) ;
// - Does sort mutate the original array?
[...numbers].sort()
// - Find the sum of the numbers in the array.
 let sum = (acc ,currentValue)=> acc+currentValue ;
    console.log(numbers.reduce(sum));
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
