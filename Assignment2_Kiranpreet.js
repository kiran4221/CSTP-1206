// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

function containY(str) {
    const checkY = str => str.includes('y') ? "Yes" : "No";
    console.log(checkY(str))
}

console.log(containY('crazyy'));

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

function getFactorial(num) {
let factorial = 1;
for(let i = 1; i<=num; i++) {
    factorial *= i;
}
return factorial;
}

console.log(getFactorial(5));

//3. You have an array of students
let studentList = [
{ name: "Mike", marks: [80, 50, 60, 100] },
{ name: "Daniel", marks: [40, 50, 100, 100] },
{name: "Stacy", marks: [20, 100, 50, 70],},
];

function getHighestAverageStudent(students) {
    const getTheAverage = marks => marks.reduce((acc, val) => acc + val, 0) / marks.length; 

    const highestAverage = students.reduce((highest, student) => {
        const average = getTheAverage(student.marks);
        return average > highest.average ? {name : student.name, average : average} : highest;}, {name: "", average: -Infinity});

    return highestAverage.name;
}

console.log(getHighestAverageStudent(studentList));

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4

function mostOccuredElement(arr) {
    const occurrences = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;

        return acc;
    }, {});

    const mostlyOccured = Object.keys(occurrences).reduce((a, b) => occurrences[a] > occurrences[b] ? a : b);

    return parseInt(mostlyOccured);
}

console.log(mostOccuredElement([20, 4, -10, 4, 11, 20, 4, 2]));


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function findUniqueNum(arr) {
    const occurrences = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    const uniqueElement = Object.keys(occurrences).find(key => occurrences[key] === 1);

    return parseInt(uniqueElement);
}

console.log(findUniqueNum([20, 20, 11, 4, 11, 20, 2, 4]));

//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

function findOutPalindromes(arr) {
    const isItPalindrome = str => str === str.split('').reverse().join('');

    return arr.filter(word => isItPalindrome(word));
}

console.log(findOutPalindromes(['abc', 'aba', 'ccc', 'dca', 'a']));
