//write a functino called linearSearch which accepts an array and a value and returns the
//index at which the value exists. If the value does not exists in the array return -1
function linearSearch(arr, value){
    // add whatever parameters you deem necessary - good luck!
    for(let i in arr){
        if (arr[i] === value){
            return Number(i)
        }
    }
    return -1
}

//Binary search only works on sorted arrays, Divide and conquer
//this function accepts a sorted array and a value
//create a left pointer at the start and the end of the arrary
//While the left pointer comes before the right pointer
    //create a pointer in the middle 
    //if you find the value you want return the index
    //if the value is too small, move the left pointer up to the middle
    //if the value is too large, move the right pointer down to the middle
    //if you dont find the value return -1
const binarySearch = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    let mid =  Math.floor((start + end) / 2 )

    // while(start < end){
    //     const num = arr[mid]
    //     if(num === value) return mid;
    //     else if (value > num){
    //         start = mid 
    //         mid = Math.floor((start + end) / 2 ) + 1
    //     }else if(value < num){
    //         end = mid
    //         mid =  Math.floor((start + end) / 2 ) - 1
    //     }
    // console.log(start,end)
    // }
    // return -1;


    while(arr[mid] !== value && start <= end){
        const num = arr[mid]
        if(value > num){
            start = mid + 1
        }else{
            end = mid - 1
        }
        mid = Math.floor((start + end) / 2)
    }
    if(arr[mid] === value) return mid;
    return -1;
}
// value = 5 num = 3
// value > num
//start = mid
//mid = (end - start) (4 - 2) + 1 = 3


// value = 2, num = 3, start 0, end = 2, mid = 1
// value < num
//end = mid, end = 2
// mid = (end / 2) (2/2) = 1
console.log(binarySearch([1,2,3,4,5,6], 6))


//Navie String Search
//Loop over the longer string
//loop oveer the shorter string
//if the characters dont match break out of the inner loop
//if the characters do match, keep going 
//if you complete the ineer loop and find a match increment the count of matches 
///return the count
// "lorie loled", "lol"
const nativeSearch = (long, short) => {
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] === long[j + i]){
                if(j === short.length - 1){
                    count++;
                }
            }else{
                break;
            }
        }
    }
    return count
}
console.log(nativeSearch("lorie loled and loled hard, lol", "lol"))


