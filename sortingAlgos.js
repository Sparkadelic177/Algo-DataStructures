//sorting is an incredibly common task, so its good to know
//There are many different ways to sort things, and different techniques have their
//own advantages and disadvantages
//sorting algorithmns animations -  https://www.toptal.com/developers/sorting-algorithms
//Its a good challenge and common in interviews

//the built in sort method accpets an optional comparator function
//You can use this comparator function to tell javascript how you want to sort
//the comparator looks at pairs of elements (a and b), determines their sort order based on the return value
// * If it returns a negative number,a ahould come befoer b
// * IF it returns a positive number, a should come after b
// * if it returns 0, a and b are the same as far as the sort is concerned

//bubble sort  - a ssoring alog where the largest bubbles to the top
// visualgo - sorting website

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//ES6
const swapp = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function bubbleSort(arr) {
  for (let i = 0; index < arr.length; i++) {
    for (let j = 0; index < i - 1; j++) {
      if (arr[j] > ar[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

//bubble sort optimizations - by sort circuit with flag
//Time complexity is n^2, but with optimazation it can be linear best case if its nearly sorted
function bubbleSort(arr) {
  let noSwaps = true;
  for (let i = 0; index < arr.length; i++) {
    for (let j = 0; index < i - 1; j++) {
      if (arr[j] > ar[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
}

//Selection sort. Similar to bubble sort, but instead of first placing large values into sorted positions, it places small values
//into sorted positions
//Finds the minimum and places it in the front
//Pseudocode -
// * Store the first element as the smallest value you've seen do far
//Compare this item to the next item in the array until you find a smaller number
//If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
//If the "mimimum" is not the value (index) you initially began with, swap the two values
