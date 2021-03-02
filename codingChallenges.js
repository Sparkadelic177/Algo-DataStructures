// Write a function called sameFrequency. Given two positive integers, find out if the two number ave the same
//frequency of digits must have O(n) time complexity

const sameFrequency = (num1, num2) => {
  if (!num1 || !num2) return false;
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of num1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }

  for (let num of num2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
};

// console.log(sameFrequency(34325, 53142))

//Implement a function called, areThereDuplicates which accepts a vaiable of numbers of agruments,
// and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency Counter
// or mmultiple pointer pattern way

//assume strings are lowercase , numbers are from 0 - 9 and always integers / whole numbers

const areThereDuplicates_frequency = (...arr) => {
  if (arr.length <= 1) {
    return false;
  }

  for (let i in arr) {
    if (typeof arr[i] === "number") {
      arr[i] = arr[i].toString();
    }
  }

  let map = {};
  console.log(arr);
  for (let val of arr) {
    if (map[val] === 1) {
      return true;
    } else {
      map[val] = 1;
    }
  }

  return false;
};

// console.log(areThereDuplicates_frequency("a", "b", "c"))

//Write a function called averagepair. Given a sorted arrt of integers and a target average,
//Determine if there is pair of values in the array where the average of the pair equals the target
//There may be more than one pair that matches the average target
// [1,3,4,5,6], 5
const averagePair = (arr, avg) => {
  if (!arr || arr.length <= 1) return false;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;
    console.log(average, avg);
    if (average < avg) {
      start++;
    } else if (average > avg) {
      end--;
    } else {
      return true;
    }
  }

  return false;
};

// console.log(averagePair([1,2,3,4,5,6], 3.5))

//write a function called isSubsequence which takes in two strings and checks whether the characters int he first string
//form a subsequence of the characters in the second string. IN the other words te function should check whether
//the chatacters in the first string appear somwhere in the second string, without their order changing
const isSubsequence = (str1, str2) => {
  if (!str1 || !str2) return false;
  if (str2.length < str1.length) return false;

  let pointer1 = 0;

  for (let i = 0; i < str2.length; i++) {
    if (pointer1 === str1.length - 1) return true;
    if (str2[i] === str1[pointer1]) {
      pointer1++;
    }
  }

  return false;
};

// console.log(isSubsequence("sing", "string"))

//given an array of integers and a number. write a function called maxSubarraySum, which finds teh
//maximum sum of a sub array with the length of the bumber passed to the function
const maxSubarraySum = (arr, n) => {
  if (!arr || arr.length < n) return null;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }

  let tempMax = max;

  for (let i = n; i < arr.length; i++) {
    tempMax = tempMax - arr[i - n] + arr[i];
    max = Math.max(tempMax, max);
  }

  return max;
};

// console.log(maxSubarraySum([4,6,2,5,10,4,22,1,0], 3))

// Write a fuction called minSubArrayLen which accepts two parameters - an array of positive integers and positive integers
//This function should return the minimal length of a contingious subarray of which the sum is greater than of equal to
//the integer passed to the function. If there is none, return 0 instead
// [2,3,1,2,4,3] , 7
// [0,0,0,0,0,0,0], 10
//end = 5 start = 4 length = 2 max = 3
const minSubArrayLen = (arr, n) => {
  if (!arr || arr.length < 1) return 0;
  if (arr.length === 1 && arr[0] >= n) return 1;
  else if (arr.length === 1 && arr[0] < n) return 0;

  let start = 0;
  let end = 0;
  let max = arr[0];
  let length = Infinity;
  while (end <= arr.length && start < arr.length) {
    if (max >= n) {
      let tempMin = end - start + 1;
      length = Math.min(length, tempMin);
      ++start;
      max = arr[start];
      end = start;
      continue;
    }
    ++end;
    max += arr[end];
  }

  return length === Infinity ? 0 : length;
};

// console.log(minSubArrayLen([2,3,1,2,4,3] , 7))
// console.log(minSubArrayLen([0,0,0,0,0,0,0], 10))
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))

//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest
//substring with all distict characters

function findLongestSubstring(str) {
  if (!str || str.length < 1) return 0;
  let start = 0;
  let end = 0;
  let unique = {};
  let max = 1;
  while (end < str.length) {
    let char = str[end];
    if (unique[char] === start) {
        end = start;
        start++;
    } else {
        unique[char] = start;
    }
    max = Math.max(max, end - start + 1);
    end++;
  }

  return max;
}

// console.log(findLongestSubstring("b"));
// console.log(findLongestSubstring("thecatinthehat"));
// console.log(findLongestSubstring("rithmschool"));
// console.log(findLongestSubstring("geeksforgeeks"));


var longestCommonPrefix = function(strs) {

	if(!strs || strs.length < 1) return "";
    
	for(let i = 0; i  < strs[0].length; i++){
        let char = strs[0].charAt(i);
        for(let j = 1; j < strs.length; j++){ 
	        if(i === strs[j].length || char !== strs[j].charAt(i)){
                return strs[0].substring(0, i)
            }
        }
    }
    return strs[0];
};

//Input: strs = ["flower","flow","flower]
