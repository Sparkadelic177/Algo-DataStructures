//This pattern involves creating a window which can either be an array of number 
// one position to anothoer, Depending on a certain condition, the window increase 
// or closes (and a new window is created).
// Very useful for keep track of subset of data in an array/string etc.

//Find a subset of unqiue characters in string
// hellothere

const findLongestUniqueSubSet= (str) => {
    if(!str || str.length < 1) return "";
    let longest = {
        start: 0,
        end: 0,
        range: function(){ return str.substring(this.start, this.end)}
    }
    let unique = {}
    let tempStart = 0;
    let tempEnd = 0;

    while(tempStart < str.length && tempEnd < str.length){
        const char = str[tempEnd];
        if(unique[char] !== tempStart){
            unique[char] = tempStart
        }else{
            if(longest.range().length < (tempEnd - tempStart)){
                longest.end = tempEnd;
                longest.start = tempStart;
            }
            tempEnd = tempStart;
            tempStart++
        }
        tempEnd++;
    }
    return longest.range();
}


console.log(findLongestUniqueSubSet("thereisahorseinthebarn"));

//Write a function called maxSubarraySum which accepts an array of integers
//and a number called n. The function should calculate the maximum sum of n consecutive
//elements in the array
//([1,2,10,4,20], 2)˜˜
// sliding window that opens and closes
const maxSubarraySum1 = (arr, n) => {
    if(!arr || arr.length < n) return null;
    let max = -Infinity;
    let start = 0;
    let scout = 1;
    let counter = 1
    let sum = arr[start];
    while(scout < arr.length){
        sum += arr[scout];
        if(scout % (counter - 1) === 0){
            max = max < sum ? sum : max;
            ++start;
            sum = arr[start]
            scout = start;
            counter = 0;
        }
        scout++;
        counter++;
    }
    return max;
}
// [17,]
//n = 3
//sum = 15
//start = 1
//scout = 2
//max = 17

// console.log(maxSubarraySum1([2,6,9,2,1,8,5,6,3], 3))

//sliding window
const maxSubarraySum2 = (arr, n) => {
    if(!arr || arr.length < n) return null;
    let max = 0;
    let tempMax = 0;
    for(let i = 0; i < n; i++){
        max += arr[i];
    }
    tempMax = max;
    for(let i = n; i < arr.length; i++){
        tempMax = tempMax - arr[i - n] + arr[i];
        max = Math.max(tempMax, max)
    }
    
    return max;
}
// console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3], 3))