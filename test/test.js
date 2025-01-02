const IsEven = require("../index.js");

// Test case 1
try {
  if (IsEven(2) === true) {
    console.log("Test case 1 passed!");
  } else {
    throw new Error("Test case 1 failed!");
  }
} catch (e) {
  console.error(e);
}

// Test case 2
try {
  if (IsEven(3) === false) {
    console.log("Test case 2 passed!");
  } else {
    throw new Error("Test case 2 failed!");
  }
} catch (e) {
  console.error(e);
}
