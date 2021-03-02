// rat, car - false 
// "", "" - false
// aaz, zaa - true
// good questions to ask: spaces , uppercase and lowercase, type of strings,
const anagrams = (word1, word2) => {
    if(!word1 || !word2 || word1.length < 1) return false;
    if(word1.length !== word2.length) return false;

    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for(let char of word1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }

    for(let char of word2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }

    console.log(frequencyCounter1, frequencyCounter2)

    return true;
}

console.log(anagrams("azz", "zza"))
console.log(anagrams("racecar", "carrace"))
console.log(anagrams("", ""))
console.log(anagrams("texttwisttime", "timetwisttext"))