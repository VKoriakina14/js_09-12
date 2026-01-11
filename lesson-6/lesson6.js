function isPalindrome(str){
str1 = str.toLowerCase();
console.log(str1)
let result = ""
for(let i=str1.length-1; i>=0; i--){
    result += str1[i];
}

return str1 ===result;

}

console.log(isPalindrome("Civic"))
console.log(isPalindrome("KayAk"))
console.log(isPalindrome("kayaky"))


/* ------ Exercise 2 - Fibonacci
Create a function that returns a specific member of the Fibonacci sequence:

A series of numbers in which each number ( Fibonacci number ) 
is the sum of the two preceding numbers. In this exercise, 
the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc. 
To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence */



const fibonacci = function(n) {
    if (n ===1 || n ===2){ // обробили перщі 2 випадки 
        return 1
    }

    let prev1 = 1
    let prev2 = 1

    for (let i = 3; i <= n; i++){
        let current = prev1 + prev2

        prev2 = prev1;
        prev1 = current;
    }

    return prev1

};

console.log(fibonacci(4)) // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log(fibonacci(6)); // returns 8


