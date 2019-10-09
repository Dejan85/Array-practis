// 1. Write a JavaScript function to check whether an `input` is an array or not.
function is_array(input) {
  return Array.isArray(input);
}

// console.log(is_array("w3resource"));
// console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.
function array_Clone(arr) {
  return Array.from(arr);
}

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function first(arr, num) {
  if (!num) {
    return arr[0];
  }

  if (num > 0) {
    return arr.slice(0, num);
  }

  if (num < 0) {
    return [];
  }
}

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
function last(arr, num) {
  if (!num) return arr[arr.length - 1];
  return arr.slice(-num);
}

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
const myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.join(","));
// console.log(myColor.join(" "));
// console.log(myColor.join("+"));

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function phoneNuber(num) {
  const arr = [];

  num.split("").sort((a, b) => {
    if (a === "0" || b === "0") {
      arr.push("0");
    }
    if (a % 2 === 0 && b % 2 === 0) {
      arr.push("-");
    }
    arr.push(a);
  });

  return arr.join("");
}

// console.log(phoneNuber("02546854234"));

// 7. Write a JavaScript program to sort the items of an array.
function sortItem() {
  const arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];

  const x = arr1.sort((a, b) => {
    return a - b;
  });

  return x;
}

// console.log(sortItem());

// 8. Write a JavaScript program to find the most frequent item of an array.

function mostFrequent() {
  const arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3].sort();
  const obj = {};
  let counter = 1;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === arr2[i + 1]) {
      obj[arr2[i]] = ++counter;
    } else {
      counter = 1;
    }
  }

  const objValue = Object.values(obj);
  const max = Math.max(...objValue);

  for (prop in obj) {
    if (obj[prop] === max) {
      mostFrequentValue = prop;
    }
  }

  return console.log(`Most frequent ${mostFrequentValue}, in total ${max}`);
}

// mostFrequent();

// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function textTransform(x) {
  const text = x
    .split("")
    .map(item =>
      item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");

  console.log(text);
}

// textTransform("The Quick Brown Fox");

// 10. Write a JavaScript program which prints the elements of the following array.

function table() {
  const a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
  ];

  const x = a.map((item, index) => {
    item.unshift(`\n row: ${index}`);
    return item.join("\n");
  });

  console.log(x.join("\n"));
}

// table();

// 11. Write a JavaScript program to find the sum of squares of a numeric vector.
function sum_sq(array) {
  var sum = 0,
    i = array.length;
  while (i--) sum += Math.pow(array[i], 2);
  return sum;
}

// console.log(sum_sq([0, 1, 2, 3, 4]));

// 12. Write a JavaScript program to compute the sum and product of an array of integers.
function sumAndProduct() {
  const arr = [1, 2, 3, 4, 5, 6];
  const sum = arr.reduce((accu, item) => accu + item);
  const product = arr.reduce((accu, item) => accu * item);

  console.log(`Sum is: ${sum}, \nProduct is: ${product}`);
}

// sumAndProduct();

// 13. Write a JavaScript program to add items in an blank array and display the items.

(function() {
  const input = document.querySelector(".input");
  const btnAdd = document.querySelector(".add");
  const btnDisplay = document.querySelector(".display");
  const show = document.querySelector(".show");
  const arr = [];
  let index = 0;

  btnAdd.onclick = () => {
    arr.push(`Element ${index} = ${input.value}</br>`);
    index++;
    alert(`Element ${input.value} added at index ${index}`);
    input.value = "";
  };

  btnDisplay.onclick = () => {
    show.innerHTML += arr.join(" ");
    arr.length = 0;
  };
})();
