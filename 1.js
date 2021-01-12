function palindromeChecker(str) {
  var temp = ""
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i]
  }

  if (temp == str) {
    return `${str}  is palindrome`
  }

  return `${str} is not palindrome`
}

console.log(palindromeChecker("apa"))
console.log(palindromeChecker("kayak"))
console.log(palindromeChecker("papa"))
console.log(palindromeChecker("mama"))
