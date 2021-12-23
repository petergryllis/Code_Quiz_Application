//Set DOM elements
var timerElement = document.querySelector(".");




//set variables with questions and answers (as arrays)
var Quesiton1 = "Which command console logs the first element of the variable game in an array?";
var Answer1 = ["console.log(game)", "console.log(game[1])", "console.log(game[0])", "console.log(game[2])"];
var Question2 = "How do you console log the multiplication of two numbers?";
var Answer2 = ["console.log(a .. b)", "console.log(a . b)", "console.log(a * b)", "console.log(a % b)"];
var Question3 = "Which expression evaluates if two or more expresions are both true otherwise false";
var Answer3 = ["console.log(expression1 >> expression2)", "console.log(expression1 && expression2", "console.log(expression1 ** expression2)", "console.log(expression1 %% expression2"];
var Question4 = "which variable is available to any other function in the global scope?";
var Answer4 = ["var dog;", "function pet () { var dog...}", "function airplane () { var flightprofile...}"];


//set variables for correct answer, timer and timer count
var isFinishedQuiz = true;
var time;
var timerCount;
var winCounter = 0;
var loseCounter = 0;

//set function to call previous score and initials
function init() {
    getPrevious();
}

//Set function to set timer and reduce timeCount if answer is wrong until clock  is zero
var x = 60;
var y = 15;
rightAnswer1 = Answer1[2];
rightAnswer2 = Answer2[2];
rightAnswer3 = Answer3[1];
rightAnswer4 = Answer4[0];

Answer2 = false;
Answer3 = false;
Answer4 = false;

function setTimer () {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 15) {

        }
            if (Answer1 === false) {
            timerCount = x - y;
            timerCount.push(timerCount);
        }
            if (Answer1 === true){
            timerElement.textContent = timerCount;
        }
            if (Answer1 === false && Answer2 === )
    }
        
     {

     })


}



//finished game function called when all questions are answered and timer finished
function finishedGame () {
    wordblank.textContent = "You have answered all the questions and your score is " + Score();
    winCounter++
    startbutton.disabled = false;

}
