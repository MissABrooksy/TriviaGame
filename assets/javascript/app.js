$("#start").on('click', function() {
  $("#quiz").css('display', 'inline-block')
  console.log("start")
   var time = 5;

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


function check() {
 let score=0;
 const form = $("#quiz");
 const answer1 = form.find("input[name=answerOne]:checked").val()
 const answer2 = form.find("input[name=answerTwo]:checked").val()
 const answer3 = form.find("input[name=answerThree]:checked").val()
 const answer4 = form.find("input[name=answerFour]:checked").val()
 const answer5 = form.find("input[name=answerFive]:checked").val()
 
 console.log(answer1)

 if(answer1 === "Gotham City") {
   score++;
 }
 if(answer2 === "The Hulk") {
   score++;
 }
 if(answer3 === "28") {
   score++;
 }
 if(answer4 === "Lois Lane") {
   score++;
 }
 if(answer5 === "Black and Yellow") {
   score++;
 }

document.getElementById("results").style.visibility = "visible";
document.getElementById("correct").innerHTML = "You got " + score + "/5 correct!";

};