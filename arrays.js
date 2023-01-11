const arr = [];

const arrayLength = prompt("Set the array length:");

do {
  arr.push(prompt("Add value to array:"));
} while (arr.length <= arrayLength);

alert(`Values of array: ${arr.map((i) => i)}`);
