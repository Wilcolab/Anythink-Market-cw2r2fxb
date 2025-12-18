/**
 * Converts a given string to dot.case (lowercase words separated by dots).
 *
 * The function handles various input formats:
 * - Converts camelCase and PascalCase to dot.case.
 * - Replaces spaces, underscores, and hyphens with dots.
 * - Collapses multiple consecutive dots into a single dot.
 * - Trims leading and trailing dots.
 * - Converts the entire string to lowercase.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in dot.case format.
 *
 * @example
 * toDotCase('helloWorld'); // returns 'hello.world'
 * toDotCase('Hello World_test-case'); // returns 'hello.world.test.case'
 */
function addNumbers(a, b) {
    // Check if both inputs are of type 'number' and are finite
    if (typeof a !== 'number' || !Number.isFinite(a)) {
        throw new Error(`Invalid input: first argument (${a}) is not a valid number.`);
    }
    if (typeof b !== 'number' || !Number.isFinite(b)) {
        throw new Error(`Invalid input: second argument (${b}) is not a valid number.`);
    }
    return a + b;
}

// Example usage:
// console.log(addNumbers(2, 5)); // 7
// addNumbers(2, '5s'); // Throws error
function toDotCase(str) {
    return String(str)
        .replace(/([a-z])([A-Z])/g, '$1.$2')      // camelCase to camel.Case
        .replace(/[\s_-]+/g, '.')                 // spaces, underscores, hyphens to dots
        .replace(/\.+/g, '.')                     // multiple dots to single dot
        .replace(/(^\.|\.$)/g, '')                // trim leading/trailing dots
        .toLowerCase();
}

// Example usage:
// console.log(toDotCase('helloWorld')); // 'hello.world'
// console.log(toDotCase('Hello World_test-case')); // 'hello.world.test.case'



