/**
 * Converts a given string to kebab-case.
 * Kebab-case means all lowercase words separated by hyphens.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case version of the input string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toKebabCase('Hello World!') // 'hello-world'
 * toKebabCase('camelCaseString') // 'camel-case-string'
 * toKebabCase('This_is_a_test') // 'this-is-a-test'
 * toKebabCase('Already-kebab-case') // 'already-kebab-case'
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to camel-Case
        .replace(/[_\s]+/g, '-')             // spaces/underscores to -
        .replace(/[^a-zA-Z0-9-]/g, '')       // remove non-alphanumeric except -
        .replace(/--+/g, '-')                // collapse multiple -
        .replace(/^-+|-+$/g, '')             // trim leading/trailing -
        .toLowerCase();
}

// Example outputs:
console.log(toKebabCase('Hello World!'));         // 'hello-world'
console.log(toKebabCase('camelCaseString'));      // 'camel-case-string'
console.log(toKebabCase('This_is_a_test'));       // 'this-is-a-test'
console.log(toKebabCase('Already-kebab-case'));   // 'already-kebab-case'
console.log(toKebabCase('  Spaces   and___underscores ')); // 'spaces-and-underscores'

// Error handling example:
// console.log(toKebabCase(123)); // Throws TypeError: Input must be a string