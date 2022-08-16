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

while (guess !== targetNum) {
    attempts += 1;
    if (guess > targetNum) {
        guess = parseInt(prompt("Guess Too High! Enter a new guess"));
    } else {
        guess = parseInt(prompt("Guess Too Low! Enter a new guess"));
    }
}

console.log(`You win! It took you ${attempts} guesses!`);

//5. Optional: add number of guessing Attempts using attempts and increment the number of attempts after every failed guess.