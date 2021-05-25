Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
  -Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (",").
  -A string with all array elements joined. If arr.length is 0, the empty string is returned.
  -Example:
  ```js
  let  colors =['red','black', 'yellow' ,'white']
  colors.join();//"red,black,yellow,white"
  let  colors =['red','black', 'yellow' ,'white']
  colors.join('-');//"red-black-yellow-white"
  ```
  -`join` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
3. `flat`
-parameter: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
-Return: A new array with the sub-array elements concatenated into it.
-Example
```js
let arr= [1,4,9,6,89]
arr.flat();//(5) [1, 4, 9, 6, 89]
let arr= [1,4,9,[6,89]]
arr.flat()//(5) [1, 4, 9, 6, 89]
let arr= [1,4,[9,[6,89]]]
arr.flat()//(4) [1, 4, 9, Array(2)]
let arr= [1,4,[9,[6,89]]]
arr.flat(2)//(5) [1, 4, 9, 6, 89]
```
`flat`-The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
4. `push`
-parameter The element(s) to add to the end of the array.
- Return -The new length property of the object upon which the method was called.
-Example 
```js
let arr= [1,4,3,6,8,9]
arr.push(2)
//7
console.log(arr)// (7) [1, 4, 3, 6, 8, 9, 2]
let colors=["red", "white","black"]
colors.push("yellow")
console.log(colors)//(4) ["red", "white", "black", "yellow"]
```
`push`-The push() method adds one or more elements to the end of an array and returns the new length of the array.
5. `indexOf`
-Parameter:Element to locate in the array.
-Return:The first index of the element in the array; -1 if not found.
-Example:
```js
let colors=["red", "white","black"]
colors.indexOf("white")//1
let colors=["red", "white","black"]
colors.indexOf("white",2)//-1;
let colors=["red", "white","black"]
colors.indexOf("black")//2
```
`indexOf`The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
6. `lastIndexOf`
7. `includes`
-Parameter The value to search for.
-Return A Boolean which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).
-Example
```js
let colors=["red", "white","black"]
colors.includes("black")//true
let colors=["red", "white","black"]
colors.includes("white")//true
let colors=["red", "white","black"]
colors.includes("2")//false
```
`includes`-The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
8. `reverse`
-Return The reversed array.
-Example
```js
let colors=["red", "white","black"]
colors.reverse()//(3) ["black", "white", "red"]

let numbers=[1,2,3,4,5,6,7]
numbers.reverse(1)//7) [7, 6, 5, 4, 3, 2, 1]
```
`reverse`-The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
9. `every`
-Parameter A function to test for each element, taking three arguments:
The current element being processed in the array.
-Return true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
-Example 
```js
let numberIsGreter = (num) => num >5; 
 let arr =[1,2,3,4,5,6,7]
arr.every(numberIsGreter)//false
let numberIsGreter = (num) => num >0; 
 let arr =[1,2,3,4,5,6,7]
arr.every(numberIsGreter)//true
let numberIsGreter = (num) => num <9; 
 let arr =[1,2,3,4,5,6,7]
arr.every(numberIsGreter)//true
```
`every`-The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
10. `shift`
-Return The removed element from the array; undefined if the array is empty.
-Example 
```js
let let arr =[1,2,3,4,5,6,7]
arr.shift()//1
let colors= ["red" ,"black", "yellow","white"]
colors.shift();
"red"
colors//(3) ["black", "yellow", "white"]
```
`shift`-The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
11. `splice`
-Parameter The index at which to start changing the array.
An integer indicating the number of elements in the array to remove from start.
-Return An array containing the deleted elements.
If only one element is removed, an array of one element is returned.
If no elements are removed, an empty array is returned.
-Example 
```js
let colors= ["red" ,"black", "yellow","white"]
colors.splice(2,0,"greeN")//[]
colors//(5) ["red", "black", "greeN", "yellow", "white"]
let colors= ["red" ,"black", "yellow","white"]
colors.splice(3,1,"greeN")//["white"]
colors//(4) ["red", "black", "yellow", "greeN"]
colors.splice(2,2,"greeN")//(2) ["yellow", "white"]
```
`splice`-The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
12. `find`
-Parameter callbackFn
Function to execute on each value in the array, taking 3 arguments:
element
The current element in the array.
index Optional
The index (position) of the current element in the array.
array Optional
The array that find was called on.
-Return The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
-Exmaple 
```js
let colors= ["red" ,"black", "yellow","white"]
function colorFind(color){
return color== "red"}
 let found = colors.find(colorFind)
found//"red"
let colors= ["red" ,"black", "yellow","white"]
function colorFind(color){
return color== "re"}
 let found = colors.find(colorFind)
found//undefined
let number =[1,2,3,4,5,6,7]
function numberIsGreter(num){
return num >3;}
let findNumber = number.find(numberIsGreter);
findNumber//4
```
`find`-The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

13. `unshift`
-Parameter The elements to add to the front of the arr.
-REturn The new length property of the object upon which the method was called.
-Example  
```js
let number =[1,2,3,4,5,6,7]
number.unshift(5);//8
number//(8) [5, 1, 2, 3, 4, 5, 6, 7]
let colors= ["red" ,"black", "yellow","white"]
colors.unshift("greeN")//5
colors//(5) ["greeN", "red", "black", "yellow", "white"]
```
`unshift`-The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
14. `findIndex`
-Parameter A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.

It takes three arguments:

element
The current element being processed in the array.
index Optional
The index of the current element being processed in the array.
array Optional
The array findIndex() was called upon.
-Return  The index of the first element in the array that passes the test. Otherwise, -1.
```js
let number =[1,2,3,4,5,6,7]
function numberIsGreter(num){
return num >3;}
let findNumber = number.findIndex(numberIsGreter);
findNumber//3
et number =[1,2,3,4,5,6,7]
function numberIsGreter(num){
return num >6;}
let findNumber = number.findIndex(numberIsGreter);
findNumber//7
let number =[1,2,3,4,5,6,7]
function numberIsGreter(num){
return num >8;}
let findNumber = number.findIndex(numberIsGreter);
findNumber//-1
```
`findIndex`-The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.


15. `filter`
-Parameter callbackFn
Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

It accepts three arguments:

element
The current element being processed in the array.
indexOptional
The index of the current element being processed in the array.
arrayOptional
The array filter was called upon.
-
-Return A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
-Example
```js
 let colors= ["red" ,"black", "yellow","white"]
function colorFind(color){
return color.length >3}
 let found = colors.filter(colorFind)
found//(3) ["black", "yellow", "white"]
let number =[1,2,3,4,5,6,7]
function numberIsGreter(num){
return num >3;}
let findNumber = number.filter(numberIsGreter);
findNumber//(4) [4, 5, 6, 7]
```
`filter`The filter() method creates a new array with all elements that pass the test implemented by the provided function.

17. `forEach`
-Parameter callbackFn
Function to execute on each element. It accepts between one and three arguments:

element
The current element being processed in the array.
index Optional
The index of element in the array.
array Optional
The array forEach() was called upon.
-Return undefined.

-Example
```js number =[1,2,3,4,5,6,7]
number.forEach(function numberIsGreter(num){
console.log(num) })
// 1
// 2
// 3
// 4
// 5
// 6
// 7
let colors= ["red" ,"black", "yellow","white"]
colors.forEach(function colorFind(color){
 console.log(color)})// red
// black
// yellow
// white
undefind
```
The forEach() method executes a provided function once for each array element.

18. `map`
-Parameter Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

The callbackFn function accepts the following arguments:

element
The current element being processed in the array.
indexOptional
The index of the current element being processed in the array.
arrayOptional
The array map was called upon.
-Return A new array with each element being the result of the callback function.
-Example 
```js
let number =[1,2,3,4,5,6,7]
function numberIsGreter(num){
return num *3;}
let findNumber = number.map(numberIsGreter);
console.log(findNumber)// (7) [3, 6, 9, 12, 15, 18, 21]
let number =[1,2,3,4,5,6,7]
function numberIsGreter(num){
return num >5;}
let findNumber = number.map(numberIsGreter);
console.log(findNumber)// [false, false, false, false, false, true, true]
```
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

19. `pop`
20. `reduce`
21. `slice`
22. `some`
