/*Add the "big" class to the "grow-me" paragraph.
● Remove the "big" class to the "shrink-me" paragraph.
● Find all the <li>s and log their text content to the console.
● Set the href of the link to "https://www.example.com" and update the text to say
"somewhere" instead of "nowhere".
● Set the "display" CSS property of the "hide-me" paragraph to "none".
● Set the "display" CSS property of the "show-me" paragraph to "block".
● Get the text that the user enters into the "name" input box and use it to set a welcome
message in the <h1>, e.g., "Hello Grant!".
*/

// function main() {
//   console.log("This is the main function!");
//   document.getElementById("grow-me").classList.add("big");
//   document.getElementById("shrink-me").classList.remove("big");
//   let list = document.getElementsByTagName("li");
//   for (const element of list) {
//     console.log(element.innerText);
//   }

//   let myGit = document.querySelector(".link");
//   myGit.setAttribute("href", "https://github.com/AhmadAlKhaldi86/lab5");
//   myGit.innerText = "ahmadGit";

//   document.getElementById("hide-me").style.display = "none";
//   document.getElementById("show-me").style.display = "block";

//   var welcomeElm = document.getElementById("name").value;
//   // console.log(welcomeElm);
//   document.querySelector("h1").innerText = `Welcome ${welcomeElm}`;
// }

function main() {
  var getGrow = document.getElementById("grow-me");
  getGrow.classList.add("big");
  var getShrink = document.getElementById("shrink-me");
  getShrink.classList.remove("big");
  var getLi = document.getElementsByTagName("li");
  for (let li of getLi) {
    console.log(li.textContent);
  }
}
