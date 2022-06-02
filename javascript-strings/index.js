//Javascript Strings

"a message in quote"
'a message in quote'
""// String with 0 characters

// let myString = ' 1 ';

//String length

// console.log(myString.length);


//Escape character


//It's my birthday.
//I hope y'all join me at the party. He said, "I am so excited!".

// let announcement = 'It's my birthday. I hope y'all join me at the party. He said, "I am so excited!".';

//Alternate quote
// let solutionOne = "It's my birthday. I hope y'all join me at the party. He said, "I am so excited!".";

//Escape Character \
let solutionTwo = "It's my birthday. I hope y'all join me at the party." +
"He said, \"I am so excited!\".";
// console.log(solutionTwo);

//Third Solution
let anotherSolution = `It's my birthday. I hope y'all join me at the party. He said, "I am so excited!".`

// console.log(solutionTwo);


//Breaking Long Code Lines

// +
// &&
// ||
// > <

//Javascript Strings as Objects.
// ------------------------0123456789|54321
let myString = new String("Hello String Day");//

let message = "Hello, Str-ing, Day"; //String Literal

//== ====

// console.log(myString);

//Javascript String Methods
//1. Length
// console.log("Number of Characters :", message.length)

//2. Extracting part of a string (slice, substring, substr)

    //2(a) Slice() method
let slicedString = message.slice(1, 4);
// console.log("Sliced String : ", slicedString);

let negativeSlice = message.slice(-5, -1);
// console.log("Negative Slice :", negativeSlice);

let sliceAll = message.slice(6);
// console.log("Slice All : ", sliceAll);

    //2(b) substring() method | any number less than zero will be treated as zero
let subMessage = message.substring(1, 4);
// console.log("Sub Message : ", subMessage);
//Pass in a negative value
let negativeSubMessage = message.substring(-5, -1);
// console.log("Negative Sub Message : ", negativeSubMessage);

    //2(c) substr() method
  let str = message.substr(1, 7);
//   console.log("sub :", str);

//3. Replace Method
let replacedString = message.replace("Day", "Month");
// console.log("Replaced : ", replacedString);

//4. Split() method
let arrayString = message.split("-");
// console.log("Array", arrayString);

//Palindrome eg. refer, madam

//Exercise (30 minutes)
/**
 * Write a program to check if
 * a string is palindrome or not.
 */

//Idea 1
/**
 * 1. Check for the length of the word
 * 2. Split the word from the back to the front character
 * 3. Compare the new split to the remaining string
 */

//Idea 2
/**
 * 1. Get the length of the word
 * 2. Loop from the back and save the the words in
 * reverse form
 */

//Idea 3
/**
 * 1. Get 2 variables each pointing to each 
 * direction(right & Left) { initialize left to zero }
 * { and right to the length - 1 }
 * 2. Loop through the string and
 */


function isPalindrome(word) {
    let arr = word.split('');
    let rev = arr.reverse();
    let revString = rev.join('');
    word === revString ? console.log(word + " is a palindrome") :
    console.log(word + " is not a palindrome");
}

// isPalindrome("rotavdfvcbkjkjbdcator");

function checkIfPanlindrome (word) {
    const len = word.length;
    for (let index = 0; index < len / 2; index++) {
        word[index] !== word[len - 1 - index ] ?
        console.log(word + " is not a palindrome") : "";
    }
}

checkIfPanlindrome("Ghana");

