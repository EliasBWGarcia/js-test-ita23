/**
 * This function returns an array of numbers from the specified start to finish counting up
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} finish - The ending number of the range (inclusive).
 * @returns {Array<number>} - An array containing numbers from start to finish.
 *
 * Usage:
 * const numbers = returnNumbers(2, 7);
 * console.log(numbers); // [2, 3, 4, 5, 6, 7]
 * const numbers = returnNumbers(10, 11);
 * console.log(numbers); // [10, 11]
 * const numbers = returnNumbers(5, 5);
 * console.log(numbers); // [5]
 */
function returnNumbers(start, finish) {
    let arrayOfNumbers = []
    Number(start)
    Number(finish)
    for (let i = start; i <= finish; i++) {
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers
}

returnNumbers(5,10)

/**
 * This function sums up all the values in an array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number} - The sum of all numbers in the array.
 *
 * Usage:
 * const total = sumArray([1, 2, 3]); // total will be 6
 * const anotherTotal = sumArray([-1, -2, 3]); // anotherTotal will be 0
 */

function sumArray(array) {
    let sumOfArray = 0
    for (let i = 0; i < array.length; i ++) {
            sumOfArray += array[i];
        }
    return sumOfArray;
    }



/**
 * This function adds a new element to the end of an array.
 *
 * @param {Array} arr - The array to which the element will be added.
 * @param {any} elem - The element to be added to the array.
 * @returns {number} - The updated array with the new element.
 *
 * Usage:
 * const myArray = [1, 2, 3];
 * const updatedArray = pushElement(myArray, 4); // updatedArray will be [1, 2, 3, 4]
 */
function pushElement(arr, elem) {
    let array = arr
    array.push(elem)
    return array
}



/**
 * This function removes all instances of a specific value from an array.
 *
 * @param {number[]} array - An array of numbers.
 * @param {number} valueToRemove - The value to remove from the array.
 * @returns {number[]} - A new array with all instances of the value removed.
 *
 * Usage:
 * const numbers = [1, 2, 3, 2, 4, 2, 5];
 * const filtered = removeValue(numbers, 2); // filtered will be [1, 3, 4, 5]
 */
function removeValue(array, valueToRemove) {
    const arrayOfNumbers = [array];
        if (valueToRemove === 2) {
            arrayOfNumbers.splice()
        }
}

removeValue([1,2,3,4], 2)