//User Input of numbers
//===============================================================================================
//1. Prompt the user to enter a maximum number because this will create the range of numbers for the users to guess from.
//2. Convert user input into an interger using ParseInt and Prompt --> Console.log maximum to check function = Works!
let maximum = parseInt(prompt("Please Enter the maximum number!"));

//Verify if user Input number is a valid number using a WHILE loop. IF LOOPs only checks validity ONCE, but WHILE loop will check the validity of number continously.
while (!maximum) {
    maximum = parseInt(prompt("Enter a VALID number please!"));
};

//Generate Random Number using the prompted maximum input:
//===============================================================================================
let targetNum = Math.floor((Math.random() * maximum) + 1);
console.log(targetNum); //used to test if game works
let attempts = 1;


//4. Create Game Logic:
let guess = parseInt(prompt("Enter your first guess!"));

while (parseInt(guess) !== targetNum) {
    if (guess === "quit") break;

    //5. number of attempts 
    attempts += 1;

    if (guess > targetNum) {
        guess = prompt("Guess Too High! Enter a new guess");
    } else {
        guess = prompt("Guess Too Low! Enter a new guess");
    }

}

//6. End game: Quit or Victory!
//===============================================================================================
if (guess === "quit") {
    console.log("User Quit the Game!");
} else {
    console.log(`Congratulations You Win! It took you ${attempts} guesses!`);
}


//5. Optional: add number of guessing Attempts using attempts and increment the number of attempts after every failed guess.
//6. How to quit the game early!
//check to see if the parsed to integer guess is NOT the target number. If it matchs "quit" = then quit the game. if it is the incorrect guessed number then apply game logic while tabulating number of attempts.
//2 ways game ends => user quits or user guess correct number!