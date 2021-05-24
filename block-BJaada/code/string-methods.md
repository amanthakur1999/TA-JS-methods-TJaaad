Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
3. `toLowerCase`
-Parameter:The toLowerCase() method returns the calling string value converted to lower case.
-Return:A new string representing the calling string converted to lower case.
Example:
```js
let name ="Aman";
name.toLowerCase()// "aman"
 name="AMAN"
 name.toLower.Case()//"aman"
 ```
 -`toLowerCase` The toLowerCase() method returns the value of the string converted to lower case.


4. `trim`
-Parameter:The trim() method removes whitespace from both ends of a string.
-Return:A new string representing str stripped of whitespace from both its beginning and end.
Example:
```js
let name =" Aman "
name.trim();// "Aman"
 name = " Aman Thakur "
 name.trim ();// "Aman Thkur"
```
5. `trimEnd`
6. `trimStart`
-Parameter:The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
-Return:A new string representing str stripped of whitespace from its beginning (left side).
```js
let message =" Hello Aman ";
message.trimStart();// "Hello Aman "
let message =" Hello World ";
message.trimStart();// "Hello World "

let message ="Hello World ";
message.trimStart();// "Hello World "

```
7. `concat`
-Parameter One or more strings to concatenate to str.
-Return A new string containing the combined text of the strings provided.
```js
let message = "Hello"
message.concat(" Aman")//"Hello Aman"
let message = "Hello"
message.concat(" World")//"Hello World"
let message = "Hello"
message.concat(" 23")//"Hello 23"
```
The concat() method concatenates the string arguments to the calling string and returns a new string.
8. `endsWith`
9. `includes`
10. `indexOf`
-Parameter The string value to search for.
-Repeat The index of the first occurrence of searchValue, or -1 if not found.
```js
let message = "Hello World"
message.indexOf("World" ,2)//6
let message = "Hello World"
message.indexOf("Hello")//0
```
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
12. `padEnd`
-Parameter The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
-Return A String of the specified targetLength with the padString applied at the end of the current str.
```js
let message = "Hello World"
message.padEnd(24,"Hello")//"Hello WorldHelloHelloHel"
let message = "Hello World"
message.padEnd(24,".")//"Hello World............."
let message = "Hello World"
message.padEnd(30,"4")//"Hello World4444444444444444444"
```
The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
13. `padStart`
14. `repeat`
-Parameter An integer between 0 and +Infinity, indicating the number of times to repeat the string.
Return A new string containing the specified number of copies of the given string.
```js 
let name= "Aman Thakur"
name.repeat(23);//"Aman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman ThakurAman Thakur"
let  message =" Hello Aman ! How are you ?"
message.repeat(4);//" Hello Aman ! How are you ? Hello Aman ! How are you ? Hello Aman ! How are you ? Hello Aman ! How are you ?"
```
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`
-Parameter A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.
-Return A new string, with some or all matches of a pattern replaced by a replacement.
```js
let name =" John "
name.replace("John", "Aman")
//" Aman "
let message ="Hello John"
message.replace("John", "Aman")
//"Hello Aman"
```
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
16. `slice`
-Parameter The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0.
-Return A new string containing the extracted section of the string.
```js
let message =" hye Aman ! how are you ?"
message.slice(2,22)
//"ye Aman ! how are yo"
let message =" hye Aman ! how are you ?"
message.slice(4,8)
//" Ama"
let message =" hye Aman ! how are you ?"
message.slice(5,12)
//"Aman ! "
let message =" hye Aman ! how are you ?"
message.slice(-4,-2)

//"ou"
```
slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`
-parameters The pattern describing where each split should occur.
-Return An Array of strings, split at each point where the separator occurs in the given string.
```js
let message ="Hello John"
message.split( " ")
// ["Hello", "John"]
```
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array

18. `substring`
-Parameter The index of the first character to include in the returned substring.
-Return A new string containing the specified part of the given string.
```js
let name = "Aman thakur"
name.substring(3);
//"n thakur"
let name = "Aman thakur"
name.substring(6);
//"hakur"
let name = "Aman thakur"
name.substring(8);
//"kur"
```
 substring() method returns the part of the string between the start and end indexes, or to the end of the string.


