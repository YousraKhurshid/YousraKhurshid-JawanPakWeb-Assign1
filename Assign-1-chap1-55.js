// Chapter 1 (Alerts)
// 1. Alert these following (individually):
// I. First Name

var firstName = "yousra"

alert ("My First Name is " + firstName)

// II. Last Name

var lastName = "khurshid"

alert ("My LastName is " + lastName)

// III. Email

var myEmail = "yousrakhurshid1@gmail.com"

alert ("My Email Address is " + myEmail)

// IV. Phone Number

var phoneNum = "123456789"

alert ("My Phone number is " + phoneNum)

// V. Password

var password = "123456789"

alert ("My Password is " + password)


// 2. Correct this statement: alert"You're learning JavaScript!";

alert ("You're learning JavaScript!")

// 3. Code an alert statement displaying any message you like.

var message = "Welcome to JS land... \n";
message += "Happy Coding! \n";
alert(message); 


// Chapter 2 (Variables for string)
// 1. Declare any variable in the camelCase format.
var userName;

// 2. Declare a variable of your choice without defining it. Then, in a
// second statement, assign it a string of your choice.

var ofmyChoice;
ofmyChoice = "this is the string of my choice"

// 3. Declare the variable teamName and Alert your Team name.

var teamName = "unknownteam";
alert (teamName);


// 4. This statement has already been coded. var bestMan = "Charlie";
// Assign the variable a new string.

var bestMan = "Charlie"; 

bestMan = "John"; 


// Chapter 3 (Variables for numbers)
// 1. Declare a variable “caseQty”
var caseQty;
// 2. Assign to the variable caseQty, which has already been declared,
// the value 144.
caseQty = 144;

// 3. Rewrite this statement so the variable can be used in a math
// operation. var num = "9";
var num = 9;

// 4. In one statement declare a variable. In a second statement assign
// it the sum of 2 numbers.
var sumResult;
sumResult = 5 + 7; 

// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// orderTotal = 110;

// Try it yourself.
// 6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.
var firstNumber = 8;
firstNumber = firstNumber + 5;

// Chapter 4 (Variable names Legal and
// Illegal)
// 1. Correct this statement.
// var product cost = 3.45;
var productCost = 3.45;

// 2. Rewrite this using camelCase.
// var Nameofband;
var nameOfBand;

// 3. In a single statement declare a legally-named variable and assign a
// number to it.
var myNum = 3;

// 4. Declare a variable that is a combination of your first and last
// names. Use camelCase.

var yousraKhurshid;

// 5. List the legal and Illegal Variables.
//illegal

// var 1hu;
// var class;
// var let;
// var vhagbdh-jcjj;

// llegal

//var camelCase;
//var numBadMe23;
//var numatend123;
//var $specialcharacter;

// Chapter 5 (Math Expression I)
// 1. What is the name and symbol of the arithmetic operator that
// gives you the remainder when one number is divided by another?

myVariable = 5;
var remainder = myVariable % 3;

document.write("The remainder is: " + remainder);

// 2. What is the value of num?
// var num = 20 % 6;
//num = 2;
// 3. In a single statement, declare the variable largeNum and assign it
// the result of 1,000 multiplied by 2,000.

var largeNum;
largeNum = 1000 * 2000;

// 4. Assign to a variable the value represented by one variable
// subtracted from the value represented by another variable

var remainderValue;
var dividend = 20;
var divisor = 3;
remainderValue = dividend % divisor; // The variable 'remainderValue' now holds the remainder, which is 2 in this case.

// 5. Assign to a variable the remainder when one number is divided by
// another. The variable hasn't been declared beforehand. Make up
// the variable name.
var remainderValue;
var dividend = 20;
var divisor = 3;
remainderValue = dividend % divisor; // The variable 'remainderValue' now holds the remainder, which is 2 in this case.

// 6. Code an alert that displays the result of a multiplication on 2
// numbers.
var number1 = 7;
var number2 = 3;
var multiplicationResult = number1 * number2;
alert("The result of the multiplication is: " + multiplicationResult);


// Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.
x++;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?
x--;

// 3. var x = 50;
// var y = x++;
// What is the value of y?
var x = 50;
var y = x++;

// 4. var y = 50;
// var z = --y;
// What is the value of z?
var y = 50;
var z = --y;

// 5. In a single statement, decrement num and assign its original value
// to newNum.
var newNum = num--;

// 6. In a single statement add 1 to a variable and assign its original
// value to another variable.
var originalValue = someVariable++;

// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert

var myNumber = 5; // Assign a number value to the variable.
myNumber++; // Increment the variable.
alert("The new value is: " + myNumber); // Display the new value in an alert.

// Chapter 7 (Math Expression III)
// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?
// 2. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?
// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?
// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?
// Note: Try all the above equations yourself.
// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.
// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.
// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
// clarified with parentheses, producing 5.



// 


// Chapter 9 (Prompts)
// 1. Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
// 2. Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.
// 3. Correct this statement
// var yourName = prompt(Enter Your Name");
// 4. Code a prompt that specifies a string as the message Include a
// default input.
// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.
// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.


// Chapter 10 (if statments)
// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself
// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.
// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")
// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;


// Chapter 11 (Comparison
// Operators)
// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)
// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.
// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.
// 4. Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.
// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match"


// Chapter 12 (if…else and else if
// statements)
// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.
// 2. Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)
// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself
// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.


// Chapter 13 (Testing sets of
// conditions)
// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.
// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the
// same value as d.
// 3. Code the first line of an if statement that tests whether
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60.
// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.
// 5. Declare 2 variables. Assign one of them your first name and the
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.



// Chapter 14 (If statements nested)
// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater
// than 5 then Alert "OK".
// 2. Try this statement by yourself
// if (a === 1) {
// if (c === "Max") {
// alert("OK");
// }
// }
// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) {
// if (c === "Max") {
// alert("OK");
// }
// }
// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.


// Chapter 15 (Array I)
// 1. Declare an empty array.
// 2. Code an array with 1 string element
// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert
// using array index
// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total
// length of array.
// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
// Chapter 16 (Array II)
// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.
// 2. var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.
// 3. var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.

// Chapter 16 (Array III)
// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.
// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.
// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.
// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".
// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.
// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".
// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.


// Chapter 17 - 20 (for Loops)
// 1. Write a statement in which loop is to run 10 times.
// 2. Code the first line of a for loop with the usual counter name, usual
// starting value, and usual increment. Run it 12 times using <= to
// specify how many loops.
// 3. What are the 5 characters missing from this code, excluding any
// spaces that are missing? Type them in order, with no spaces or
// commas between them.
// for var i = 0 i <= 4 i++
// Note: Complete this statement by yourself
// 4. Code the first line of a for loop with a counter name that's not i.
// Code the usual starting value and usual increment. Run it 100
// times using < to specify how many loops.
// 5. Code the first line of a for loop with the usual counter and the
// usual starting value. Run it 3 times using > to specify how many
// loops. Decrement it with each iteration.
// 6. The statement assigns the number of elements in the array to the
// variable.
// 7. Set a variable named “flag” with an initial Boolean value of your
// choice.
// 8. Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array pets.
// 9. Coding Exercise:
// Set a for loop to run 10 iterations.
// On the second iteration, display the counter in an alert. (It should
// be 1.)
// Break out of the loop.
// 10. Create an array which contains user names
// Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array user names.
// Code an if statement that tests the presense of (user name) in an
// array.
// If user name match Alert that "Enter". if not then alert ("Please
// write correct user name").
// 11. Complete this code to display an alert if a match isn't found.
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
// if (userInput === list[i]) {
// alert("Match found");
// matchFound = true;
// break;
// }
// };
// 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
// var secondArr = [1, 2, 3, 4, 5, 6];
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array firstArr.
// In the scope of main loop Code the nested loop. Limit the number
// of nested loops by the number of elements in the array
// secondArr.
// After that concatenate the both loops.
// Expected Output:
// a1
// a2
// a3
// a4
// …
// f6

// Chapter 21 (Changing Case)
// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.
// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.
// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.
// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.
// 6. Display in an alert the upper-case version of the string
// represented by a variable.
// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.


// Chapter 22 - 25 (Strings)
// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
// 2. The number of characters in the string will be assigned to the
// variable.
// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.
// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.
// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.
// 10. In this string "abcde", what character is at index 2? (Use
// charAt)
// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.
// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.
// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.
// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.
// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.
// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.
// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");


// Chapter 26 (Rounding Numbers)
// 1. Form a statement that rounds a number to the nearest integer.
// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.
// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.
// Chapter 27 (Random Numbers)
// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50
// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
// 3. You have to create a dice in JavaScript with the use of pseudorandom number.
// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number



// Chapter 28, 29 (Converting Strings)
// 1. How do you convert a string to an integer in JavaScript?
// 2. Write a JavaScript function to convert the string "123" to an
// integer.
// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
// 5. How can you convert a number to a string in JavaScript?
// 6. Write a JavaScript function to convert the number 42 to a string.
// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?

// Chapter 30 (Controlling the length of
// decimals)
// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.
// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.
// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.
// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.



// Chapter 31 - 34 (Date & Time)
// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.
// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.
// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.
// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.
// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.
// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.
// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.
// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.
// 9. How do you change the year of a date in JavaScript?
// 10. Write a JavaScript function to change the month of a given
// date to January.
// 11. What is the method to change the day of the week for a
// specific date in JavaScript?
// 12. Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)
// 13. Write a JavaScript function to add a specific number of
// hours to a given time.
// 14. You have to create a age calculator in JavaScript.


// Chapter 35 - 37 (Functions)
// 1. Code the first line of a function displayAlert.
// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.
// 3. Code a function that calls 2 other functions.
// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.
// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.
// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.
// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.
// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
// 9. Write a JavaScript function that takes two parameters and returns
// their sum.
// 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
// 11. You have to capture the returned value from a function and
// store it in a variable?
// 12. Write a function which tells letter counts of (word).
// 13. Write a function to set (year) in date object.
// 14. Write a function which tells the age of a person who Born on
// (dateOfBirth)
// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false
// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()


// Chapter 38 (Local vs. Global
// Variables)
// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.
// 2. How can you access a global variable inside a function in
// JavaScript?
// Chapter 39, 40 (Switch Statements)
// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.
// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.