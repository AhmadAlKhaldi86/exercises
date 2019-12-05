// Create an array of 3 characters. Each character is an object with two properties--name and health
// Create an object outside the array in a variable called opponent.
//  The opponent also has  name and health properties.

// The Task:
// Create a loop that:
// Prints out the name and health of all three characters plus the opponent.
// Prompts the user to pick a character by number (1, 2, or 3).
// “Battles” the selected character against the opponent. Remove five health from both
// the character and the opponent. (Or you can remove a random number from each.)
// Exit the loop when the user response is null, which means that the cancel button was clicked.
// https://repl.it/@AishaBlake2/Extended-Objects-and-Arrays-Game

let players = [
  { name: "player1", health: 10 },
  { name: "player2", health: 20 },
  { name: "player3", health: 30 }
];
let opponent = { name: "opponent", health: 40 };

let Player;

function Battel(Player) {
  players[Player].health = players[Player].health - 5;
  opponent.health = opponent.health - 5;
  console.log(
    `${players[Player].name} has ${players[Player].health} points left`
  );
  console.log(`${opponent.name} has ${opponent.health} points left`);
}

while (Player !== null) {
  let Player = prompt("Pick a character between 1 and 3");
  if (Player.length == 0) {
    console.log("please enter something");
    break;
  } else {
    Player = Player - 1;
    Battel(Player);
  }
}

//// Extended Session later ////
/* 
Extended Challenges: 1) Do not allow a character with zero or less health to engage in battle.
2) Check for invalid input (must be number between 1 and 3). 3) Automatically end the
program when the opponent health hits zero or all of the characters’ health has hit zero.
Display a “win” or “lose” message.
*/
