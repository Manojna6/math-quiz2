Player1 = localStorage.getItem("player1_name");
Player2 = localStorage.getItem("player2_name");
var P1score = 0;
var P2score = 0; 
var score1 = 0;
var score2 = 0;
var turn = 0;

document.getElementById("questiontrn").innerHTML = "Question Turn - " + Player1; 
document.getElementById("answertrn").innerHTML = "Answer Turn - " + Player2; 
document.getElementById("player1_score").innerHTML = Player1 + " = 0";
document.getElementById("player2_score").innerHTML = Player2 + " = 0";

function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    document.getElementById("problem").innerHTML = number1 + " X " + number2;
    document.getElementById("output").style.display = "block";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
};
function check(){
    answer_input = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    if(answer_input == actual_answer){
        console.log(answer_input);
        document.getElementById("doubt").innerHTML = "Correct! The answer is: " + actual_answer;
        if(turn == 1){
            document.getElementById("questiontrn").innerHTML = "Question Turn -" + Player1;
            document.getElementById("answertrn").innerHTML = "Answer Turn -" + Player2;
            turn = 0;
            score1 = score1 + 1;
            document.getElementById("player1_score").innerHTML = Player1 + " = " + score1;
        } else if (turn == 0){
            document.getElementById("questiontrn").innerHTML = "Question Turn -" + Player2;
            document.getElementById("answertrn").innerHTML = "Answer Turn -" + Player1;
            turn = 1;
            score2 = score2 + 1;
            document.getElementById("player2_score").innerHTML = Player2 + " = " + score2;
        };
    } else {
        console.log(answer_input);
        document.getElementById("doubt").innerHTML = "Wrong, the answer is " + actual_answer;
        if(turn == 1){
            document.getElementById("questiontrn").innerHTML = "Question Turn -" + Player1;
            document.getElementById("answertrn").innerHTML = "Answer Turn -" + Player2;
            turn = 0;
            score2 = score2 + 1;
            document.getElementById("player1_score").innerHTML = Player1 + " = " + score1;
        } else if (turn == 0){
            document.getElementById("questiontrn").innerHTML = "Question Turn -" + Player2;
            document.getElementById("answertrn").innerHTML = "Answer Turn -" + Player1;
            turn = 1;
            score1 = score1 + 1;
            document.getElementById("player2_score").innerHTML = Player2 + " = " + score2;
        };
    };
};
