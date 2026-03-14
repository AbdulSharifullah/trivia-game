var count = 0;

/* Question Multi-dimensional array */
var questions = [
   ["What planet is known as the Red Planet?", 1, "Earth", "Mars", "Venus"],
   ["How many days are in a leap year?", 2, "364", "365", "366"],
   ["Which ocean is the largest?", 0, "Pacific Ocean", "Atlantic Ocean", "Indian Ocean"]
];

window.onload = function () {
   document.getElementById("prompt").innerHTML =
      "<button onclick='playGame()'>Play Game</button>";
};

function playGame() {

   var questionArray = questions.shift();

   var question = questionArray[0];
   var correctIndex = questionArray[1];

   questionArray.shift();
   questionArray.shift();

   document.getElementById("question").innerHTML = question;

   var answerHTML = "";

   for (var i = 0; i < questionArray.length; i++) {
      answerHTML += "<li><a href='#' onclick='checkAnswer(" + i + "," + correctIndex + ")'>" + questionArray[i] + "</a></li>";
   }

   document.getElementById("answers").innerHTML = answerHTML;

   document.getElementById("prompt").innerHTML =
      "<p>Select the best answer.</p>";

   count++;
}

function checkAnswer(choice, correct) {

   if (choice == correct) {
      document.getElementById("prompt").innerHTML =
         "<p>Correct!</p>";
   } else {
      document.getElementById("prompt").innerHTML =
         "<p>Incorrect.</p>";
   }

   if (count >= 3) {
      document.getElementById("prompt").innerHTML +=
         "<br><button onclick='location.reload()'>Restart Game</button>";
   } else {
      document.getElementById("prompt").innerHTML +=
         "<br><button onclick='playGame()'>Next Question</button>";
   }
}