//set variables with questions and answers (as arrays)
var Quesiton1 = "Which command console logs the first element of the variable game in an array?";
var Answer1 = ["console.log(game)", "console.log(game[1])", "console.log(game[0])", "console.log(game[2])"];
var Question2 = "How do you console log the multiplication of two numbers?";
var Answer2 = ["console.log(a x b)", "console.log(a . b)", "console.log(a * b)", "console.log(a % b)"];
var Question3 = "Which expression evaluates if two or more expresions are both true otherwise fale";
var Answer3 = ["console.log(expression1 >> expression2)", "console.log(expression1 && expression2", "console.log(expression1 ** expression2)", "console.log(expression1 %% expression2"];
var Question4 = "which variable is available to any other function in the global scope?";
var Answer4 = ["var dog;", "function pet () { var dog...}", "function airplane () { var flightprofile...}"];

//set variables for correct answer, timer and timer count
var isCorrect = false;
var time;
var timerCount;
var winCounter = 0;
var loseCounter = 0;

//set function to call previous score and initials
function init() {
    getPrevious();
}

