/***********************  Exercise 1  ************************/
function greet(name) {
  let names = `Hello, ${name}!`;
  console.log("Hello, " + name + "!");
}

let user1 = "Grace";
let user2 = "Joel";
let user3 = "Marcus";

greet(user1);
greet(user2);
greet(user3);

// Call the function multiple times, so you see the following outputs in the console.
// Output: Hello, Grace!
// Output: Hello, Jael!
// Output: Hello, Marcus!

/***********************  Exercise 2  ************************/

function greetMessage(name) {
console.log("Hello, " + name + "!");

}

// Create a variable called userName and assigned it any string value. Pass in that variable as the argument when calling the function.
let userName = "Ann";
// What do you see in the console?
greetMessage(userName);

/***********************  Exercise 3  ************************/

function goToTheCoffeeShop(drink) {
  alert(`A ${drink} is on the way!`);
  console.log(`A ${drink} is on the way!`);
}
let coffeeDrink = "Coffee";
goToTheCoffeeShop(coffeeDrink);


function goToTheCoffeeShop1(pastry) {
  alert(`A ${pastry} is on the way!`);
  console.log(`A ${pastry}1 is on the way!`);
}
pastry = "Bun"
goToTheCoffeeShop1(pastry);


// Call this function so that the alert reads "A latte is on the way!"
//goToTheCoffeeShop("drink");

// Modify the function so that the function takes in two parameters, a drink and a pastry. Call the function with two arguments.
function cava(drink,pastry) {
  alert(`A ${drink} and a ${pastry} is on the way!`);
  console.log(`A ${drink} and a ${pastry} is on the way!`);
}

drink = "Coffee";
pastry = "Muffin";
cava(drink, pastry);


/***********************  Exercise 4  ************************/

// Let’s create a function to calculate the area of a circle.

// Here is the code for calculating the area of a circle:
//++ let area = Math.PI * radius * radius;
//let area = Math.PI * radius * radius;

// put the above code into your function (don't leave it outside the function!)

// How many variables will we need, if any, to write our function?

// How many parameters, if any?

//++let area = Math.PI * radius * radius;

// Now write the function.

function circle(radius) {
  let area = Math.PI * radius * radius;
  console.log("The circle area is " + area + "!");
}


// Call the function for a circle with the radius of 15. You should get a value of 706 and a lot of digits after the decimal point.
let radius = 15;
circle(radius);

/***********************  Exercise 5  ************************/

// function addNumbers[num1, num2] {
//     let result = num1 + num2;
//     console.log(result);
//   }


function addNumbers(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

num1 = 10;
num2 = 5;
addNumbers(num1, num2);

//addNumbers(17, 17);
//addNumbers(17, 17);
//addNumbers(10, 10);
//addNumbers(3, 1);

// Remove the comments from the function above. Call the above function.

// What errors do you see in the console?
//++[]

// Fix the funciton so that you can call it without errors.

// Call the above function for the following outputs:
// Output: 15
// Output: 34
// Output: 20
// Output: 4

/***************************  BONUS PRACTICE  *********************************/

/***********************  Exercise 6  ************************/

function showMessage(from, text) {
  // Add the code to the code block that will create the following outputs.
}

showMessage("Ann", "Hello!"); // Ann: Hello!
showMessage("Ann", "What's up?"); // Ann: What's up?

/***********************  Exercise 7  ************************/

// Declare a function called multiplyFive which accepts a number and returns that number multiplied by 5.
function multiplyFive (num1){
let result = num1 * 5;
  return result;
}

multiplyFive(result);

// Call the function 3 times with different inputs.
num1 = 2;
num1 = 3;
num1 = 5;

/***********************  Exercise 8  ************************/
// Declare a function that will take in an array as an argument and log the third item in the array to the console.
function sandwich(a, b, c) {
  console.log(c); 
}

const food = ['cheese', 'spinach', 'carrot'];

sandwich.apply(null, food);

sandwich(...food);

/***********************  Exercise 9  ************************/
// Declare a function that will take in the following object and alert the following, "Welcome, [FULLNAME]. Your email address is [EMAILADDRESS]"

let userObject = {
  name: {
    first: "Ann",
    last: "J",
  },
  age: 39
  adult: true,
  favoriteShows: ["Big Bang", "Arrested Development", "Black Mirror"],
  emailAddress: "ann@gmail.com",
}

alert (`Welcome, ${userObject.name}. Your registered email is ${userObject.emailAddress}.`);
/***********************  Exercise 10  ************************/

function sortArray(string) {
  let alpha = string.sort();
  console.log(alpha);
}

const stringArray = ["shirt", "dress", "pants", "overalls", "hat"];
const alphaArray = sortArray(stringArray);


// Describe what the above code is doing?
The sort() method sorts an array alphabetically. 
log statement is trying to log the returned value of alpha,'string.sort()' function, 



