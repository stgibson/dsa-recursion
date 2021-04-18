/** findProduct: calculate the product of an array of numbers starting at index
 * i. */

function findProduct(nums, i) {
  // base case: at end of nums
  if (i >= nums.length) {
    return 1;
  }
  // normal case
  return nums[i] * findProduct(nums, i + 1);
}

/** product: calculate the product of an array of numbers. */

function product(nums) {
  return findProduct(nums, 0);
}

/** findLongest: return the length of the longest word in an array of words
 * starting at index i */

function findLongest(words, i) {
  // base case: at end of words
  if (i >= words.length) {
    return "";
  }
  // normal case
  return Math.max(words[i].length, findLongest(words, i + 1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  return findLongest(words, 0);
}

/** getEveryOther: return a string with every other letter starting at index
 * i. */

function getEveryOther(str, i) {
  // base case 1: at end of str
  if (i >= str.length) {
    return "";
  }
  // base case 2: only 1 char left
  if (i === str.length - 1) {
    return str[i];
  }
  // normal case
  return str[i] + getEveryOther(str, i + 2);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  return getEveryOther(str, 0);
}

/** checkIfIsPalindrome: checks whether a string from start index to end
 * index is a palindrome or not. */

function checkIfIsPalindrome(str, start, end) {
  // base case 1: no chars left
  if (start > end) {
    return true;
  }
  // base case 2: 1 char left
  if (start === end) {
    return true;
  }
  // normal case
  return str[start] === str[end] &&
    checkIfIsPalindrome(str, start + 1, end - 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  return checkIfIsPalindrome(str, 0, str.length - 1);
}

/** findIndexRecursive: return the index of val in arr starting at index i. */

function findIndexRecursive(arr, val, i) {
  // base case: at end of arr
  if (i >= arr.length) {
    return -1;
  }
  // normal case
  if (val === arr[i]) {
    return i;
  }
  return findIndexRecursive(arr, val, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  return findIndexRecursive(arr, val, 0);
}

/** reverseString: return a copy of a string starting at index i, but in
 * reverse. */

function reverseString(str, i) {
  // base case: at end of str
  if (i >= str.length) {
    return "";
  }
  // normal case
  return reverseString(str, i + 1) + str[i];
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return reverseString(str, 0);
}

/** gatherStringsRecursive: given an object and an array, adds all of the
 * string values in the object to the array. */

function gatherStringsRecursive(obj, out) {
  // base case: obj is empty
  if (obj === {}) {
    return;
  }
  // normal case
  for (let key in obj) {
    // Learned how to check if var is string at https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
    if (typeof obj[key] === "string") {
      out.push(obj[key]);
    }
    // Learned how to check if var is object at https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
    else if (typeof obj[key] === "object" && obj[key] !== null) {
      gatherStringsRecursive(obj[key], out);
    }
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const out = [];
  gatherStringsRecursive(obj, out);
  return out;
}

/** binarySearchRecursive: given a sorted array of numbers, a value, and a
 * starting and ending point, return the index of that value between the two
 * given points (or -1 if val is not present). */

function binarySearchRecursive(arr, val, start, end) {
  // base case: no items left to search
  if (start > end) {
    return -1;
  }
  // normal case
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearchRecursive(arr, val, start, middle - 1);
  }
  return binarySearchRecursive(arr, val, start + 1, end);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  return binarySearchRecursive(arr, val, 0, arr.length - 1);
}

/** isOpeningBracket: determines if char is opening bracket */

function isOpeningBracket(char) {
  return char === "(" || char === "[" || char === "{";
}

/** isClosingBracket: determines if char is closing bracket */

function isClosingBracket(char) {
  return char === ")" || char === "]" || char === "}";
}

/** bracketsMatch: determines if 2 brackets match */

function bracketsMatch(openingBracket, closingBracket) {
  if (openingBracket === "(" && closingBracket === ")") {
    return true;
  }
  if (openingBracket === "[" && closingBracket === "]") {
    return true;
  }
  if (openingBracket === "{" && closingBracket === "}") {
    return true;
  }
  return false;
}

/** balancedBracketsRecursive: given a string and a starting and ending point,
 * determines if the brackets in the string between the two points are
 * balanced */

function balancedBracketsRecursive(str, start, end) {
  // base case 1: no more chars to check
  if (start > end) {
    return true;
  }
  // base case 2: one char to check
  if (start === end) {
    return !isOpeningBracket(str[start]) && !isClosingBracket(str[start]);
  }
  const startIsOpeningBracket = isOpeningBracket(str[start]);
  const endIsOpeningBracket = isOpeningBracket(str[end]);
  const startIsClosingBracket = isClosingBracket(str[start]);
  const endIsClosingBracket = isClosingBracket(str[end]);
  // normal case 1: start and end are both not brackets
  if (!startIsOpeningBracket && !startIsClosingBracket && !endIsOpeningBracket
    && !endIsClosingBracket) {
    return balancedBracketsRecursive(str, start + 1, end - 1);
  }
  // normal case 2: start is a closing bracket
  if (startIsClosingBracket) {
    return false;
  }
  // normal case 3: end is an opening bracket
  if (endIsOpeningBracket) {
    return false;
  }
  // normal case 4: start is an opening bracket
  if (startIsOpeningBracket) {
    for (let i = start + 1; i <= end; i++) {
      if (isClosingBracket(str[i]) && bracketsMatch(str[start], str[i])) {
        if (balancedBracketsRecursive(str, start + 1, i - 1) &&
          balancedBracketsRecursive(str, i + 1, end)) {
          return true;
        }
      }
    }
    // if couldn't find valid closing bracket, return false
    return false;
  }
  // normal case 5: end is a closing bracket
  if (endIsClosingBracket) {
    for (let i = end - 1; i >= start; i--) {
      if (isOpeningBracket(str[i]) && bracketsMatch(str[i], str[end])) {
        if (balancedBracketsRecursive(str, start, i - 1) &&
          balancedBracketsRecursive(str, i + 1, end - 1)) {
          return true;
        }
      }
    }
    // if couldn't find valid opening bracket, return false
    return false;
  }
  // normal case 6: start and end are both not brackets
  return balancedBracketsRecursive(str, start + 1, end - 1);
}

/** balancedBrackets: given a string, determines if the brackets in the string
 * are balanced */

function balancedBrackets(str) {
  return balancedBracketsRecursive(str, 0, str.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  balancedBrackets
};
