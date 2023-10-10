const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let names = []; // Initialize an empty array

// Prompt the user to enter names until they enter "done"
function promptName() {
  rl.question("Enter a name (or 'done' to finish): ", (name) => {
    if (name.toLowerCase() === "done") {
      rl.close(); // Close the readline interface if the user enters "done"
    } else {
      names.push(name); // Add the entered name to the array
      promptName(); // Prompt for the next name
    }
  });
}

promptName(); // Start prompting for names

// Event handler for when the readline interface is closed
rl.on('close', () => {
  console.log(names); // Output the array of names
});