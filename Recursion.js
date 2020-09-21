// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countSheep(num) {
  let message = `Another sheep jumps over the fence`;
  let finalMessage = 'All sheep jumped over the fence';
  if (num > 0) {
    console.log(`${num}: ${message}`)
    return countSheep(num - 1)
  }
  else { return console.log(finalMessage) }
}
// countSheep(5)


// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(base, exp) {
  if (exp === 0) return 1
  if (exp < 0) return (`exponent should be >= 0`)
  return base * powerCalculator(base, (exp - 1));
}
// console.log(powerCalculator(2, 4))

// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseStr(str) {
  if (str === '') { return '' }
  return reverseStr(str.slice(1)) + str.charAt(0)
}
// console.log(reverseStr('yoggers poggers'));

// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//                           *
//             *           *    *
// *     |   *   *  |   *    *    *  |

//  1st       2nd           3rd             nth?
//if n=3rd then  n=base+mid+top

function nthTriNum(n) {
  if (n === 1) { return 1 }
  return n + nthTriNum(n - 1)
}
// console.log(nthTriNum(510))




// 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

//Needed help with this as i did not know about substr andd indexof
//help i received did not allow for infput of character at which to
//split so it was adapted for these purposes
function strSplit(str, char, array) {
  let
    string = str.trim(),
    words = array || [],
    i = string.indexOf(char);
  if (i !== -1) {
    words.push(string.substr(0, i));
    return strSplit(string.slice(i + 1), char, words);
  } else {
    words.push(string);
    return words;
  }
}
// console.log(strSplit(`02/20/2020`, `/`))

// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

//i could get this to print the last value and all the values
// inbetween , but they were not in order, and would not assign
// correctly into the console or array, without using an array
//method to sort them. i had get help to figure out how to get
//an array to funciton as part of this

function fibN(n) {
  console.log(n);
  if (n === 1) return [0, 1];
  let arr = fibN(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
// console.log(fibN(7))


// 7. Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(num) {
  if (num === 1) { return 1 }
  let sum = num * factorial(num - 1)
  return sum
}
// console.log(factorial(5));


// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

// You can use the following mazes to test your program.

function getOut(maze, location = 0, y = 0, x = 0, directions = [], facing = 's') {

  if (x < 0 || x > (maze[0].length - 1) || y < 0 || y > (maze.length - 1)) return; //check illegal move
  directions[location] = facing;
  location++;
  if (maze[y][x] === 'e') { console.log(`Arrived at ${x},${y}`, directions); return; }
  if (maze[y][x] === ' ') {
    maze[y][x] = 'H';
    getOut(maze, location, y, x + 1, directions, 'R');
    getOut(maze, location, y + 1, x, directions, 'D');
    getOut(maze, location, y - 1, x, directions, 'U')
    getOut(maze, location, y, x - 1, directions, 'L')
    maze[y][x] = ' ';
  }
  location--;
}
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// getOut(maze)


//
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR




// 9. Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD




// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.




// 11. Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes




// 12. Binary Representation
// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.
