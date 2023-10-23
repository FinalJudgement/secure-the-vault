// Create Pseudocode
//  Create a variable input1
//  Create a variable called input2
//  Create a variable called input3
//  Create a string that says "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
//  set input1 to equal 5 + 5
//  set input2 to equal input1 * 4
//  set input3 to equal input2 -1
//  create an alert that displays the vault code

let input1;
let input2;
let input3;

const selectedIndividual = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:`;

input1 = 5 + 5;
input2 = input1 * 4;
input3 = input2 - 1;

const body = document.querySelector("body");
const para = document.createElement("p");
const node = document.createTextNode(selectedIndividual);
const button = document.createElement("button");
const btnNode = document.createTextNode("Reveal");
button.addEventListener("click", () => {
  alert(`${input1}-${input2}-${input3}`);
});

para.appendChild(node);
body.appendChild(para);
button.appendChild(btnNode);
body.appendChild(button);
