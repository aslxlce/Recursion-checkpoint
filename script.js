// Palindrome recursion

function isPalindrome(word) {
    if (word.length <= 1) return true;
    if (word[0].toLowerCase() !== word[word.length - 1].toLowerCase()) return false;
    return isPalindrome(word.slice(1, -1));
}

console.log(isPalindrome("RacecAr"));

//Fibonacci Sequence

function fibonacci(n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive call
}
