// Creating pointers or values that correspond to an index of position
//and move towards the beginning, end or middle based on a certain condition

//Very efficient for solving problems with minimal space complexity as well

//Linear strcuture like array of string, and good for looking for a pair

// Write a function called sumZero which accepts a sorted array of integers
// the function should find the first pair where the sum is 0. Return an array that
// includes both values that sum to zerp or indefined if a pair does not exsist
// Bonus: what if the array was not sorted

// [-10,-4,-3,0,1,3,4,7] - true
// [1,2,3,4,5] - false

const sumZero = (arr) => {
  if (!arr || arr.length < 2) return false;
  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    const sum = arr[start] + arr[end];
    if (sum === 0) return true;
    else if (sum > 0) {
      end -= 1;
    } else if (sum < 0) {
      start += 1;
    }
  }

  return false;
};

console.log(sumZero([-10, -4, -3, 0, 1, 3, 4, 7]));
console.log(sumZero([1, 2, 3, 4, 5]));

//how about if the array was not ordered - save complement in a hashmap
const sumZeroBonus = (nums, sum) => {
  if (!nums || nums.length < 2) return false;
  const complement = {};
  for (let num of nums) {
    if (complement[num]) {
      return true;
    } else {
      let comp = sum - num;
      complement[comp] = 1;
    }
  }
  return false;
};

// console.log(sumZeroBonus([-10, -4, -3, 0, 1, 3, 4, 7], 0));

// Implement a function called countUniqueValues
// which accepts a sorted Array, and counts the unique
// values in the Array. There can be negative numbers in the Array,
// but it will always be sorted
const countUniqueValues = (arr) => {

    // Using Frequency Count
    if (!arr || arr.length < 1) return 0;
    if(arr.length === 1) return 1;

    // let arrCount = {}
    // for(let num of arr){
    //     arrCount[num] = (arrCount[num] || 0) + 1 
    // }
    // return Object.keys(arrCount).length;


    //Using Pointers
    let start = 0;
    let scout = 1;
    while(scout < arr.length){
        if(arr[start] !== arr[scout]){
            start++
            arr[start] = arr[scout]
        }
        scout++
    }
    return start + 1;
}

console.log(countUniqueValues([1,1,1,1,1,1,1,3,4,5,5,5]))
