const frequencyCounter = (arr1, arr2) => { 
    if(!arr1 || !arr2 || arr1.length < 1) return false;
    if(arr1.length !== arr2.length ) return false;
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let num of arr1){
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
    }
    for(let num of arr2){
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
    }    

    // {1:1, 2:1, 3:1, 4:1}
    // {1:1. 4:1, 9:1, 16:1}

    console.log(frequencyCounter1, frequencyCounter2)

    for(let key in frequencyCounter1){
        if(!(Math.pow(key, 2) in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[Math.pow(key, 2)] !== frequencyCounter1[key]){
            return false;
        }
    }

    return true;
}

console.log(frequencyCounter([1,2,3,4, 4], [1,4,9,16,19]))