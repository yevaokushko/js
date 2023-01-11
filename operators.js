const isUserLoggedIn = true;
if (isUserLoggedIn) {
  alert("You are logged in!");
} else {
  alert("You are not logged in!");
}

isUserLoggedIn ? alert("You are logged in!") : alert("You are not logged in!");

const age = 25;
switch (age) {
  case 10:
    alert("Access is denied!");
    break;
  case 16:
    alert("Access is still denied!");
    break;
  case 18:
    alert("Hello my user!");
    break;
  default:
    alert("Access is permitted only to persons over 18 years old!");
}

const num1 = 10;
const num2 = 15;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
