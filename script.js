//Accepting User Input of numbers
//========================================================
//1. Prompt user to enter a maximum number
//2. Convert user input into an interger --> Console.log maximum to check function = Works!
let maximum = parseInt(prompt("Please Enter the maximum number!"));

//Verify if userInput number is a valid number using a WHILE loop. IF LOOP only checks validity ONCE. WHILE loop will check the validity of number continously.
while (!maximum) {
    maximum = parseInt(prompt("Enter a VALID number please!"));
};

//3. Generate Random Number using the prompted number:
let targetNum = Math.floor((Math.random() * maximum) + 1);
console.log(targetNum);