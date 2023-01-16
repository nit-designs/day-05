//1.a.Find odd number using an Anonymous Function
/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using an anonymous function
let oddNum = array.filter(function(element) {
    return element % 2 != 0;
  });
console.log(oddNum);
//Output:[1, 3, 5, 7, 9]
//using IIFE
let oddNumbers = (function(array) {
    return array.filter((element) => element % 2 != 0);
  })(array);
  console.log(oddNumbers);*/

//  b.Convert all the strings to title caps in a string array
/*let arr = ["welcome", "you", "all"];
let res = arr.map(function(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
});
console.log(res)
//output :["Welcome", "You", "All"]
//using IIFE
let res1 =(function(arr){
    return arr.map(function(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
    });
})(arr);
console.log(res1);*/

//c.Sum of all numbers in an array
/*var array = [1, 2, 3];
let sumArrayElements = function() {
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum;
}
console.log(sumArrayElements());
//output:6
//using IIFE
(function() {
    let arr = [1, 2, 3];
    let sum = arr.reduce((acc, num) => acc + num);
    console.log(sum);
  })();*/
 
  //d. Return all the prime numbers in an array

 /*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = arr.filter(function(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});
console.log(primeNumbers); 
//output;[2, 3, 5, 7]

//IIFE
 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumber = (function() {
  return array.filter(num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
})();
console.log(primeNumber); */

//e.Return all the Palindromes
//Anonymous Function
/*let arr= ["madam","wow","hello"];
let palindromes = arr.filter(function(word) {
    return word.split('').reverse().join('') === word;
  });
  console.log(palindromes);
  //output:["madam", "wow"]
//IIFE

let Palindrome =(function(arr) {
  return arr.filter(function(element) {
        return element.split('').reverse().join('') === element;
  });
})(arr);
console.log(Palindrome)*/

//f.Return median of two sorted arrays of the same size.

/*let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

// Using an anonymous function
let median = function(arr1, arr2) {
  let merged = arr1.concat(arr2).sort();
  
  let middle = Math.floor(merged.length / 2);
  return merged.length % 2 !== 0 ? merged[middle] : (merged[middle - 1] + merged[middle]) / 2;
};
console.log(median(arr1, arr2));
//output:4.5
//IIFE
let medianArr = (function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort();
    let middle = Math.floor(merged.length / 2);
    return merged.length % 2 !== 0 ? merged[middle] : (merged[middle - 1] + merged[middle]) / 2;
  })(arr1, arr2);
  console.log(medianArr);*/
  
  //g.Remove duplicates from an array

    /*let array = [1,3,4,5,5];
    let removeDuplicate = function(array){
        return[...new Set(array)];
    }
    console.log(removeDuplicate(array));
   //output :[1, 3, 4, 5]
    let removeDuplicates = function(array){
        return[...new Set(array)];
    }(array);
    console.log(removeDuplicates);*/


    //h.Rotate an array by k times
   /* let rotateArray = function(arr, k) {
        for (let i = 0; i < k; i++) {
            let last = arr.pop();
            arr.unshift(last);
        }
        return arr;
    };
    
    console.log(rotateArray([1, 2, 3, 4, 5], 3));

    //output :[3, 4, 5, 1, 2]
     //IIFE
     let rotateArray = function(arr, k) {
        for (let i = 0; i < k; i++) {
            let last = arr.pop();
            arr.unshift(last);
        }
        console.log( arr);
    }(arr,k);
    
    console.log(rotateArray([1, 2, 3, 4, 5], 3));  */






