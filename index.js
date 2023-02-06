const easy = [
  [null, 9, 7, null, null, null, null, 6, null],
  [3, null, 2, 6, 8, 7, 5, null, null],
  [5, 6, null, null, 1, null, 7, null, null],
  [null, null, 5, null, 7, null, null, 1, 3],
  [null, null, 4, 1, 6, 2, null, null, 9],
  [null, null, 9, null, null, null, 4, 7, 6],
  [null, 2, null, 3, null, 5, null, null, 7],
  [8, null, 1, 7, null, 6, 9, null, 4],
  [null, null, null, null, 9, null, null, null, 5],
];

const hard = [
  [null, null, 7, 4, null, null, null, 3, null],
  [9, 3, 6, 2, null, null, 7, null, null],
  [8, null, 4, null, null, 3, null, 9, 6],
  [null, null, null, 5, null, null, null, 8, null],
  [null, 5, null, null, 2, null, null, null, 3],
  [null, null, null, 6, null, 9, null, null, 7],
  [null, null, 5, null, null, null, null, null, null],
  [null, null, null, null, 7, 4, 5, 6, null],
  [6, null, null, null, null, null, null, null, 9],
];

const expert = [
  [null, null, 6, null, 4, null, null, 3, null],
  [null, 3, null, null, null, null, 6, null, 9],
  [null, null, null, 1, 3, null, 8, null, null],
  [null, 2, null, null, null, null, null, 7, null],
  [null, null, null, 2, 9, 4, null, null, 5],
  [null, 1, null, null, null, null, 9, null, null],
  [null, null, null, 3, 2, 8, null, null, null],
  [6, null, null, null, null, null, null, null, null],
  [4, null, null, null, null, null, null, 5, null]
];

const expert2 = [
  [4, null, null, null, null, null, null, 7, 8],
  [7, null, null, 1, null, null, 4, null, 9],
  [null, null, 2, 3, 7, null, null, null, null],
  [1, null, null, 4, null, 6, null, null, null],
  [null, 6, null, null, null, null, null, null, null],
  [null, 4, null, null, 5, 3, 1, null, null],
  [null, null, null, 5, null, null, null, null, null],
  [8, 1, 3, null, null, null, null, null, 7],
  [null, null, null, null, 2, null, null, null, null]
];

const expert3 = [
  [null, null, 5, null, 7, null, 2, null, 6],
  [null, null, 3, null, 2, null, 5, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, 6, null, 4, 5, null, null, null],
  [null, null, null, null, null, null, null, null, 9],
  [null, null, null, 1, null, null, 3, 7, null],
  [7, null, null, 9, null, null, null, null, null],
  [null, 8, null, 2, null, null, null, 6, null],
  [4, null, null, null, null, 3, null, 8, null]
]

const evil = [
  [4, null, 7, 6, null, null, null, 1, 8],
  [null, null, null, null, 5, null, null, null, 6],
  [null, null, 3, null, null, null, null, null, null],
  [null, 8, null, null, null, null, null, null, null],
  [null, null, null, null, null, 2, 9, null, null],
  [1, null, 6, 5, null, null, null, 7, null],
  [null, 5, null, null, null, null, null, 8, null],
  [null, 3, null, 4, null, null, null, null, null],
  [8, null, 4, null, 9, null, 7, null, null]
];

function canBoxHaveValue(box, lineIndex, itemIndex, value, withPossibilities) {
  // row has number
  if (withPossibilities[lineIndex].some((item) => {
    return item.number === value
  })) {
    return false;
  }

  // column has number
  if (withPossibilities.some((line) => {
    return line[itemIndex].number === value
  })) {
    return false;
  }

  // 3x3 has number
  if (box === 1 &&[withPossibilities[0][0].number, withPossibilities[0][1].number, withPossibilities[0][2].number, withPossibilities[1][0].number, withPossibilities[1][1].number, withPossibilities[1][2].number, withPossibilities[2][0].number, withPossibilities[2][1].number, withPossibilities[2][2].number].includes(value)) {
    return false;
  }

  if (box === 2 && [withPossibilities[0][3].number, withPossibilities[1][3].number, withPossibilities[2][3].number, withPossibilities[0][4].number, withPossibilities[1][4].number, withPossibilities[2][4].number, withPossibilities[0][5].number, withPossibilities[1][5].number, withPossibilities[2][5].number].includes(value)) {
    return false;
  }

  if (box === 3 && [withPossibilities[0][6].number, withPossibilities[1][6].number, withPossibilities[2][6].number, withPossibilities[0][7].number, withPossibilities[1][7].number, withPossibilities[2][7].number, withPossibilities[0][8].number, withPossibilities[1][8].number, withPossibilities[2][8].number].includes(value)) {
    return false;
  }

  if (box === 4 && [withPossibilities[3][0].number, withPossibilities[4][0].number, withPossibilities[5][0].number, withPossibilities[3][1].number, withPossibilities[4][1].number, withPossibilities[5][1].number, withPossibilities[3][2].number, withPossibilities[4][2].number, withPossibilities[5][2].number].includes(value)) {
    return false;
  }
  if (box === 5 && [withPossibilities[3][3].number, withPossibilities[4][3].number, withPossibilities[5][3].number, withPossibilities[3][4].number, withPossibilities[4][4].number, withPossibilities[5][4].number, withPossibilities[3][5].number, withPossibilities[4][5].number, withPossibilities[5][5].number].includes(value)) {
    return false;
  }
  if (box === 6 && [withPossibilities[3][6].number, withPossibilities[4][6].number, withPossibilities[5][6].number, withPossibilities[3][7].number, withPossibilities[4][7].number, withPossibilities[5][7].number, withPossibilities[3][8].number, withPossibilities[4][8].number, withPossibilities[5][8].number].includes(value)) {
    return false;
  }

  if (box === 7 && [withPossibilities[6][0].number, withPossibilities[7][0].number, withPossibilities[8][0].number, withPossibilities[6][1].number, withPossibilities[7][1].number, withPossibilities[8][1].number, withPossibilities[6][2].number, withPossibilities[7][2].number, withPossibilities[8][2].number].includes(value)) {
    return false;
  }
  if (box === 8 && [withPossibilities[6][3].number, withPossibilities[7][3].number, withPossibilities[8][3].number, withPossibilities[6][4].number, withPossibilities[7][4].number, withPossibilities[8][4].number, withPossibilities[6][5].number, withPossibilities[7][5].number, withPossibilities[8][5].number].includes(value)) {
    return false;
  }
  if (box === 9 && [withPossibilities[6][6].number, withPossibilities[7][6].number, withPossibilities[8][6].number, withPossibilities[6][7].number, withPossibilities[7][7].number, withPossibilities[8][7].number, withPossibilities[6][8].number, withPossibilities[7][8].number, withPossibilities[8][8].number].includes(value)) {
    return false;
  }

  return true;
}

function getBoxFromLineAndRow(lineIndex, rowIndex) {
  if (lineIndex <= 2) {
    if (rowIndex <= 2) {
      return 1;
    }
    if (rowIndex > 2 && rowIndex <= 5) {
      return 2
    }
    if (rowIndex > 5 && rowIndex <= 8) {
      return 3
    }
  }
  if (lineIndex > 2 && lineIndex <= 5) {
    if (rowIndex <= 2) {
      return 4;
    }
    if (rowIndex > 2 && rowIndex <= 5) {
      return 5;
    }
    if (rowIndex > 5 && rowIndex <= 8) {
      return 6;
    }
  }
  if (lineIndex > 5 && lineIndex <= 8) {
    if (rowIndex <= 2) {
      return 7;
    }
    if (rowIndex > 2 && rowIndex <= 5) {
      return 8;
    }
    if (rowIndex > 5 && rowIndex <= 8) {
      return 9;
    }
  }
}

function mikify(puzzle) {
  return puzzle.map((line, lineIndex) => {
    return line.map((item, itemIndex) => {
      if (item === null) {
        return {
          number: null,
          box: getBoxFromLineAndRow(lineIndex, itemIndex),
          possibilities: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        };
      }

      return {number: item, box: getBoxFromLineAndRow(lineIndex, itemIndex), possibilities: null};
    });
  });
}

function itemIsOnlyOneInThreeByThreeThatCanHaveValue(value, box, answer, lI, iI) {
  let possibleCount = 0;

  for (const [lineIndex, line] of answer.entries()) {
    for (const [itemIndex, item] of line.entries()) {
      if (item.box === box && item.possibilities !== null /*&& !(lI === lineIndex && iI === itemIndex)*/) {
        if (item.possibilities.includes(value)) {
          // if (canBoxHaveValue(item.box, lineIndex, itemIndex, value, answer)) {
          if (possibleCount === 1) {
            return false;
          }
          possibleCount++;
        }
      }
    }
  }

  return true;
}

function itemIsOnlyOneInRowThatCanHaveValue(value, box, answer, lI, iI) {
  let possibleCount = 0;

  for (const [lineIndex, line] of answer.entries()) {
    for (const [itemIndex, item] of line.entries()) {
      if (lineIndex === lI && item.possibilities !== null /*&& !(lI === lineIndex && iI === itemIndex)*/) {
        if (item.possibilities.includes(value)) {
          // if (canBoxHaveValue(item.box, lineIndex, itemIndex, value, answer)) {
            if (possibleCount === 1) {
              return false;
            }
            possibleCount++;
        }
      }
    }
  }

  return true;
}

function itemIsOnlyOneInColumnThatCanHaveValue(value, box, answer, lI, iI) {
  let possibleCount = 0;

  for (const [lineIndex, line] of answer.entries()) {
    for (const [itemIndex, item] of line.entries()) {
      if (itemIndex === iI && item.possibilities !== null /*&& !(lI === lineIndex && iI === itemIndex)*/) {
        if (item.possibilities.includes(value)) {
          // if (canBoxHaveValue(item.box, lineIndex, itemIndex, value, answer)) {
          if (possibleCount === 1) {
            return false;
          }
          possibleCount++;
        }
      }
    }
  }

  return true;
}

function getNewestPossibilitiesForItem(item, lineIndex, itemIndex, answer) {
  return item.possibilities.filter((value) => {
    return canBoxHaveValue(item.box, lineIndex, itemIndex, value, answer);
  });
}

function solve(puzzle) {
  let answer = mikify(puzzle);

  let i = 0;
  while (i < 20) {
    i++;
    // while (answer.some((line) => {
    //   return line.some(item => item.number === null);
    // })) {
    answer = answer.map((line, lineIndex/*, array*/) => {
      return line.map((item, itemIndex) => {
        if (item.number) {
          return item; // Item already has number
        }

        const possibilities = getNewestPossibilitiesForItem(item, lineIndex, itemIndex, answer);

        if (possibilities.length === 1) {
          console.log(`${lineIndex}:${itemIndex} can only be ${possibilities[0]}`);
          return {number: possibilities[0], possibilities: null, box: item.box};
        }

        for (const value of possibilities) {
          if (itemIsOnlyOneInThreeByThreeThatCanHaveValue(value, item.box, answer, lineIndex, itemIndex)) {
            // is this actually breaking/returning? Maybe use .find(), .some() or .every() instead?
            console.log(`${lineIndex}:${itemIndex} is only one in box ${item.box} that can be ${value}`);
            return {number: value, possibilities: null, box: item.box};
          }

          if (itemIsOnlyOneInRowThatCanHaveValue(value, item.box, answer, lineIndex, itemIndex)) {
            // is this actually breaking/returning? Maybe use .find(), .some() or .every() instead?
            console.log(`${lineIndex}:${itemIndex} is only one in row ${lineIndex} that can be ${value}`);
            return {number: value, possibilities: null, box: item.box};
          }

          if (itemIsOnlyOneInColumnThatCanHaveValue(value, item.box, answer, lineIndex, itemIndex)) {
            // is this actually breaking/returning? Maybe use .find(), .some() or .every() instead?
            console.log(`${lineIndex}:${itemIndex} is only one in column ${itemIndex} that can be ${value}`);
            return {number: value, possibilities: null, box: item.box};
          }

          // if cell a can be 245 and cell b can be 458 and no other cells can be 4 or 5. I need remove 2 and 8 as possibilities for those cells.
        };

        return {number: null, possibilities, box: item.box};
      });
    });
  }

  return answer;
}

const solved = solve(expert2);
solved.forEach((line) => {
  const pretty = line.map(item => {
    return item.number
  });
  console.log(...pretty);
})
