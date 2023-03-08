const WORD_NOT_FOUND = [null, null];
const INVALID_SOLUTION = [WORD_NOT_FOUND, WORD_NOT_FOUND];

const directions = [[0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1]];

const indices = [
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
]
const puzzleMatrix = [
    ['T', 'G', 'R', 'E', 'E', 'D', 'M', 'N', 'O', 'S'],
    ['E', 'O', 'S', 'H', 'K', 'P', 'B', 'C', 'D', 'E'],
    ['N', 'N', 'B', 'M', 'U', 'A', 'F', 'G', 'H', 'I'],
    ['S', 'E', 'L', 'P', 'T', 'O', 'L', 'L', 'L', 'M'],
    ['D', 'N', 'I', 'A', 'R', 'L', 'N', 'O', 'P', 'Q'],
    ['K', 'P', 'E', 'O', 'U', 'S', 'S', 'F', 'T', 'U'],
    ['A', 'B', 'C', 'D', 'M', 'T', 'G', 'H', 'I', 'E'],
    ['V', 'W', 'X', 'Y', 'P', 'A', 'B', 'C', 'D', 'N'],
    ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
    ['Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
];
const wordsToFind = ["GREED", "TRUMP", "LOST", "SIP", "ZONE", "FIN", "TOLL", "GONE", "SON"];

const getLetterPosition = (letter, i, j) => {
    const position = [];
    for (; i < puzzleMatrix.length; i++) {
        for (; j < puzzleMatrix[i].length; j++) {
            if (puzzleMatrix[i][j] === letter) {
                return {
                    position: [i, j],
                    row: i,
                    column: j,
                };
            }
        }
        j = 0;
    }
    return {
        position: WORD_NOT_FOUND,
        row: puzzleMatrix.length,
        column: puzzleMatrix[0].length,
    };
}

const isValidIndex = ([x, y]) => x > -1 && x < puzzleMatrix.length && y > -1 && y < puzzleMatrix[0].length;

const getDirectionOfWord = (word, startingPos, index) => {
    const letter = word[1];
    const [x, y] = startingPos;
    for (; index < directions.length; index++) {
        const [xDir, yDir] = directions[index];
        let x1 = x + xDir, y1 = y + yDir;
        if (!isValidIndex([x1, y1])) {
            // If co-ordinates are out of bounds of the puzzle, skip the direction
            continue;
        } else if (puzzleMatrix[x1][y1] === letter) {
            // When the second letter is matched, direction to follow is found
            // Passing current index so that if the word is not found following this direction, new direction can be looked for
            return [[xDir, yDir], index];
        }

    }
    return [WORD_NOT_FOUND, directions.length];
};

const findWordInDirection = (word, startingPos, direction) => {
    const [x, y] = startingPos;
    const [xDir, yDir] = direction;
    let x1 = x + xDir, y1 = y + yDir; // Going one place towards the direction
    for (let index = 2; index < word.length; index++) {
        const letter = word[index];
        x1 += xDir;
        y1 += yDir;
        if (!isValidIndex([x, y]) || puzzleMatrix[x1][y1] !== letter) {
            // If co-ordinates are out of bounds of the puzzle or 
            // the value is not matching the letter, break the loop
            // This means word is not present in this direction
            return INVALID_SOLUTION; //
        }
    }
    // When all letters are matched in this direction, solution is found.
    return [[x, y], [x1, y1]];
};

const findWordInPuzzle = (word) => {
    if (!word.length) return INVALID_SOLUTION;

    // Start from 0,0 to find the letter
    // If letter is found, but the word is not found in that occurrence,
    // repeat finding another occurrence of letter from the next index
    let row = 0, column = 0;
    while (isValidIndex([row, column])) {
        // Find the first letter in the puzzle
        const positionObject = getLetterPosition(word[0], row, column);
        const startingPos = positionObject.position;
        row = positionObject.row;
        column = positionObject.column;
        // If letter is not found, return word not found error
        if (startingPos === WORD_NOT_FOUND) return INVALID_SOLUTION;
        if (word.length === 1) return [startingPos, startingPos]

        // Start from directions[0] to find the direction
        // If direction is found, but the word is not found in that direction,
        // repeat finding another direction from the next directionIndex
        let directionIndex = 0;
        while (directionIndex < directions.length) {
            // Find the direction to follow for the rest of the letters
            const directionTuple = getDirectionOfWord(word, startingPos, directionIndex);
            const direction = directionTuple[0];
            directionIndex = directionTuple[1];
            // If direction not found (second letter is not to be found in any direction), skip the loop
            if (direction === WORD_NOT_FOUND) break;
            if (word.length === 2) return [startingPos, [startingPos[0] + direction[0], startingPos[1] + direction[1]]];

            const solution = findWordInDirection(word, startingPos, direction);
            // If word is found in the current direction
            // return it as the solution
            if (solution[0] !== WORD_NOT_FOUND) return solution;

            // else continue with the loop and find another direction with the same startingPos and next directionIndex
            directionIndex++;
        }
        // If word is not found in the current startingPos, look for the next occurrence of the letter from nextRow and nextColumn
        column += 1;
        if (!isValidIndex([row, column])) {
            row += 1;
            column = 0;
        }
    }
}

const findWordsInPuzzle = () => {
    const solutions = wordsToFind.map(findWordInPuzzle);
    for (let index = 0; index < solutions.length; index++) {
        const word = wordsToFind[index];
        const solution = solutions[index];
        console.log(word, solution);
    }
}

findWordsInPuzzle();