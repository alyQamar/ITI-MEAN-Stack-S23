// #1 Welcome message
alert("Q1.Welcome message");

alert("Welcome to my site!");
const userName = prompt("Please enter your name");

alert(`Welcome ${userName} !`);

// #2 Summation Calculator
alert("Q2.Summation Calculator");

const n1 = prompt("Please first number");
const n2 = prompt("Please second number");

const sum = (n1, n2) => {
  return Number(n1) + Number(n2);
};
// console.log(sum(n1, n2));
alert(`${n1} + ${n2} = ${sum(n1, n2)}`);

// #3 less than or equal to zero
alert("Q3.Is number less than or equal to zero?");

const n = prompt("Please Enter your number");
function lessThanOrEqualToZero(n) {
  return Number(n) <= 0 ? true : false;
}

// console.log(lessThanOrEqualToZero(5));

alert(`Is ${n} less than or equal to zero? ${lessThanOrEqualToZero(n)}`);

// #4 Choose eligible track for your faculty
alert("Q4.Choose eligible track for your faculty");

const facultyName = prompt("Please Enter your faculty name:");
let trackName;
function findTrack(facultyName) {
  switch (facultyName) {
    case "FCI":
      trackName = "Programing";
      // console.log("You’re eligible to Programing tracks");
      break;
    case "Engineering":
      trackName = "Network and Embedded";
      // console.log("You’re eligible to Network and Embedded tracks");
      break;
    case "Commerce":
      trackName = "ERP and Social media";
      // console.log("You’re eligible to ERP and Social media tracks");
      break;
    default:
      trackName = "SW fundamentals";
    // console.log("You’re eligible to SW fundamentals track");
  }
  return trackName;
}
alert(`You’re eligible to ${findTrack(facultyName)} tracks`);

// #5 Triangle area Calculator
alert("Q5.Triangle Area Calculator");
const b = prompt("Please enter base value");
const h = prompt("Please enter heigh value");
function triArea(base, height) {
  return 0.5 * Number(base) * Number(height);
}
console.log(triArea(5, 6));
alert(`Area When {b = ${b}, h = ${h}} = ${triArea(b, h)}`);
