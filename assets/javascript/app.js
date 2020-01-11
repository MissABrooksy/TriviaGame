  
$("#start").on('click', function() {
   console.log("start")
    var time = 30;

var quizTimer = setInterval(function(){
  document.getElementById("time").innerHTML = time + " seconds remaining";
  time --;
  if(time <= -1){
    clearInterval(quizTimer)
     
     document.getElementById("time").innerHTML = " no time remaining"
check();
      return;

        }
}, 1000);
  
  });


var answer1 = $("#a1").val(); //"Gotham City";
var answer2 = $("#a2").val(); //"The Hulk";
var answer3 = $("#a3").val(); //28;
var answer4 = $("#a4").val(); //"Lois Lane";
var answer5 = $("#a5").val(); //"Black and Yellow";
var score= 0;

function check() {
  score=0;

  if(answer1 == "Gotham City") {
    score++;
  }
  if(answer2 == "The Hulk") {
    score++;
  }
  if(answer3 == 28) {
    score++;
  }
  if(answer4 == "Lois Lane") {
    score++;
  }
  if(answer5 == "Black and Yellow") {
    score++;
  }

document.getElementById("results").style.visibility = "visible";
document.getElementById("correct").innerHTML = "You got " + score + "/5 correct!";

};

