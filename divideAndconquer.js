//This pattern involves dividing a data set
//into samller chunks and then repeating a process with a subset of data
//This pattern can tremendosuly decrease time complexity

//Given a sorted array if integers write a function called search 
//that accepts a value and returns the index where the value passed to the function 
//is located if the value is not found, return -1

const search = (arr, n) => {
    if(!arr || arr.length < 1) return null;
    let min = 0
    let max = arr.length - 1 
    let tempArr = arr
    while(min <= max){
        let half = Math.floor((min + max) / 2);
        if(tempArr[half] > n){
            max = half - 1
        }else if(tempArr[half] < n){
            min = half + 1
        }else {
            return half;
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6,7,8,9,10], 2))