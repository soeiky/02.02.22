/*// Variables
var emptyVariable;
var message = "hello world";
var firstName,
lastName = "Imashov"
var
// Number
// Javascript- математические операции не ведут к ошибке
var exampleNumber = 123;
var exampleNumber = 123.45;
var exampleNumber = Infinity; // -Infinity
var exampleNumber = Nan;
// Not a Number

// String
var exampleString = "Hello world";
var exampleString2 = 'hello world';
var exampleString3 = 'hello world';
var exampleString4 = "4";

// Boolean
var exampleBoolean1 = true;
var exampleBoolean2 = false;

//
var exampleNull = null;
var exampleUndefined = undefined;

// Output
// alert("Hello world");
// var reult =prompt("Hello world");string
// var result =confirm("hello world");boolean
// document.write("Hello world");

var exampleTypeConvertation1 = 5 + "5";
var exampleTypeConvertation2 = 5 + 5 + "5";
var exampleTypeConvertation3 = false + 2;
var exampleTypeConvertation4 = new String(5);
var exampleTypeConvertation5 = new Number("10");
var exampleTypeConvertation6 = new Boolean("");

// Math
// Operand x=5+6;
// Operands:5,6;
// Operator: +

// Unary operator
var x = 5;
x = - x;

// Brinery operator
var x = 1,
y = 3;
y = x + y;

var exampleMath1 = 5 + 6;
var exampleMath2 = 5 - 6;
var exampleMath3 = 5 / 6;
var exampleMath4 = 5 * 6;

// Remainder
var exampleMath5 = 5 % 2; // 1
var exampleMath6 = 6 % 2;
// 0

// Exponent
var exampleMath7 = 2 ** 4;
document.write (5*(2-3)-5);s

//Fast modify
var exampleMath8 =4;
exampleMath8+=5;
exampleMath8-=3; //exampleMath8 -3;

//Incerement/decrement
var exampleMath9=0;
exampleMath++;
exampleMath9--;
++exampleMath9;
--exampleMath9;*/

var vasya ={
  lastName: "petrovskiy",
  age: 25,
  greet: function() { // method 
    document.write('Hello, my name is ${this.name}!I am ${this.age}');
}
}
vasya.greet();

//1.Call 'greet' method multiple times.
//2.Include age in the greeting.
//3.Try changing name and age.
//4.Create method 'bye'.

//document.body.style.background="red";
//document.body.textContent="hello world";

let helloWorlDiv=document.getElementById("hello world")

helloWorlDiv.textContent="nice to meet you";
helloWorlDiv.style.background="green";
helloWorlDiv.style.color="white";
helloWorlDiv.textDeoration="underline";
helloWorlDiv.style.textDecoration="20px";
