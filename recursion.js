// Objectives
// * Define what recursion is and how it can be used
// * Understand the two essential components of a recursive function
// * Visualize the call stack to better debug and understand recusive functions
// * Use helper method recursion to solve more difficult problems
// Recusion is a process ( a function in our case ) that calls itself
// Some recursion functions that we have used already are like JSON.parse / JSON.stringify
// Document.getElementById and DOM traversal algos
//recursive functions calls functions into the call stack
// base case the condition where the recursion ends / stops
// Two important essential parts of a recursive function - Base case and Different inputs

function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return sum + sumRange(num - 1);
}

// sumRange(3)
//     return 3 + sumRange(2)
//                     return 2 + sumRange(1)
//                                     return 1;

// Factorial - iterally
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= 1;
  }
  return total;
}

function factorial_recursive(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial_recursive(num - 1);
}

//Where things can go wrong
// 1. No base case
// 2. returning the wrong or forgettign to return
// 3. stack over flow from not returning

//helper method recursion

function collectionOdds(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(nums);

  return result;
}

//pure recrusion
//Tips: For arrays, use methods like slice, the spread op, and concat that make copies of arrays so that you dont mutate them
//For Objects use Object.assign, or the spread operator

function collectionOdds_pure(nums) {
  let result = [];

  if (helperInput.length === 0) {
    return;
  }

  if (helperInput[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = result.concat(collectionOdds_pure(result.slice(1)));
  return result;
}

// collectionOdds_pure([1,2,3,4,5]) //[1,3,5]
// [1].concat(collectionOdds_pure[2,3,4,5]) //[3,5]
//     [].concat(collectionOdds_pure[3,4,5]) //[3,5]
//         [3].concat(collectionOdds_pure[4,5]) //[5]
//             [].concat(collectionOdds_pure[5]) //[5]
//                 [5].concat(collectionOdds_pure[])

//cool
// "ool".collectionOdds_pure([c,o,o,l]) //ool
// "ol".concat(collectionOdds_pure([o,o,l]) // ol
//     "l".concat(collectionOdds_pure([o,l]) // l
//         "".concat(collectionOdds_pure([l])

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  if (exponent < 1) return 1;
  if (exponent === 1) return base;
  return 2 * power(base, exponent - 1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
  function findFibNum(numInput) {
    if (numInput <= 1) return numInput;
    return findFibNum(numInput - 1) + findFibNum(numInput - 2);
  }

  let number = findFibNum(num);
  return number;
}


function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    let newStr = []
    if(str.length === 1) return str;
    newStr = newStr.concat(reverse(str.slice(1)))
    return newStr.join("");
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'
