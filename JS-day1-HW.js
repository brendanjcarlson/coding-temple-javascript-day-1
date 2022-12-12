//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!';
let dog_names = ['Max', 'HAS', 'PuRple', 'dog'];

const findWords = (str, arr) => {
    let output = [];
    const wooRegexIsFun = /[A-Za-z]+/g;
    words = str.match(wooRegexIsFun);
    console.log(words);
    arr.forEach(word => {
        if (words.includes(word)) output.push(word);
    });
    return output ? `Matched names: ${output.join(', ')}` : `No Matches`;
};
console.log(findWords(dog_string, dog_names));
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const arr = ['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger'];

const replaceEvens = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, 'even index');
        }
    }
    return arr;
};

console.log(replaceEvens(arr));
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//============Exercise #3 ============//
/* Maximum subarray sum
Python:
def max_sequence(arr):
    mx = 0
    end = 0
    for i in range(len(arr)):
        end = end + arr[i]
        if (mx < end):
            mx = end
        if end < 0:
            end = 0
    return mx
*/
const maxSequence = arr => {
    let max = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i++) {
        end = end + arr[i];
        if (max < end) {
            max = end;
        }
        if (end < 0) {
            end = 0;
        }
    }
    return max;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//============Exercise #4 ============//
/* Directions Reduction
Python:
def dirReduc(arr):
    directions = {"NORTH": "SOUTH",
                  "SOUTH": "NORTH",
                  "WEST": "EAST",
                  "EAST": "WEST"}
    stack = []

    for i in range(len(arr)):
        if not stack:
            stack.append(arr[i])
        elif directions[stack[-1]] == arr[i]:
            stack.pop()
        else:
            stack.append(arr[i])
    return stack */
const dirReduc = arr => {
    const directions = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST',
    };
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (!stack) {
            stack.push(arr[i]);
        } else if (directions[stack[stack.length - 1]] === arr[i]) {
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }
    return stack;
};

console.log(
    dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
);
