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
  if (!num) {
    return arr[arr.length - 1];
  }

  return arr
    .reverse()
    .slice(0, num)
    .reverse();
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
const arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];

const x = arr1.sort((a, b) => {
  return a - b;
});

// console.log(x);

// 8. Write a JavaScript program to find the most frequent item of an array.
const arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const xad = new String(2);

console.log(!!"xad");