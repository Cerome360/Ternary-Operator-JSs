// Conditionals: Ternary Operator

//Syntax
//condition ? ifTrue : ifFalse;

let testScore = 80;
let myGrade = testScore > 89 ? "A"
    : testScore > 79 ? "B"
        : testScore > 69 ? "C"
            : testScore > 59 ? "D"
                : "F";
console.log(`My test grade is a ${myGrade}.`);

let playerOne = "paper";
let computer = "scissors";
let result =
    playerOne === computer
        ? "Tie game!"
        : playerOne === "rock" && computer === "paper"
            ? "Computer wins!"
            : playerOne === "paper" && computer === "scissors"
                ? "Computer wins!"
                : playerOne === "scissors" && computer === "rock"
                    ? "Computer wins!"
                    : "playerOne wins!";
console.log(result);