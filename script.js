//Price switch

function getTicketPriceSwitch(age) {
    switch (true) {
        case age <= 12:
            return 10;
        case age >= 13 && age <= 17:
            return 15;
        default:
            return 20;
    }
}

const userAge = parseInt(prompt("Entrez votre âge :"), 10);
console.log(`Le prix de votre billet est de ${getTicketPriceSwitch(userAge)} $.`);

//LeapYear

function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }
    return false;
}
const year = parseInt(prompt("Entrez une année :"), 10);
if (isLeapYear(year)) {
    console.log(`${year} est une année bissextile.`);
} else {
    console.log(`${year} n'est pas une année bissextile.`);
}

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
