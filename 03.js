// Comparison of numeric values
console.log(2 > 1); // true because 2 is greater than 1

// Comparison of string and number
console.log("2" > 1); // true because "2" is implicitly converted to the number 2, which is greater than 1

console.log('Null Comparison');

// Comparisons involving null
console.log(null > 0);  // false because null is converted to 0 in numeric comparisons
console.log(null < 0);  // false because null is converted to 0 in numeric comparisons
console.log(null == 0); // false because null is only equal to undefined in non-strict equality
console.log(null != 0); // true because null is not equal to 0 in non-strict inequality

console.log('Undefined Comparison');

// Comparisons involving undefined
console.log(undefined > 0);  // false because undefined is not converted to a number and comparisons involving undefined return false
console.log(undefined < 0);  // false because undefined is not converted to a number and comparisons involving undefined return false
console.log(undefined == 0); // false because undefined is only equal to null in non-strict equality
console.log(undefined != 0); // true because undefined is not equal to 0 in non-strict inequality

// Strict equality check
console.log("2" === 2); // false because strict equality checks for both value and type, and "2" (string) is not equal to 2 (number)