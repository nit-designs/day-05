//3.a.Print odd numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNum = array.filter(element => element % 2 != 0);
console.log(oddNum);
output :[1, 3, 5, 7, 9]

//b.Convert all the strings to title caps in a string array
let arr = ["welcome", "you", "all"];
let res = arr.map(element =>element.charAt(0).toUpperCase() + element.slice(1));
console.log(res)
output:["Welcome","You","All"]

//c.Sum of all numbers in an array
var array1 = [1, 2, 3];
let sumArrayElements = () =>{
     let sum = 0;
    for (const element of array1) {
        sum += element;
    }
    return sum;
}
console.log(sumArrayElements());

//d.Return all the prime numbers in an array
let arrValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let primeNumbers = arrValue.filter(num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log(primeNumbers)
  //output:[2,3,5,7]

  //e..Return all the palindromes in an array
  let arr1= ["madam","wow","hello"];
  let palindromes = arr1.filter(word => word.split('').reverse().join('') === word);
    
    console.log(palindromes);
    //output;["madam,"wow]