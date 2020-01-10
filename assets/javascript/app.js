  
$("#start").on('click', function() {
   console.log("start")
    var time = 5;

var quizTimer = setInterval(function(){
  document.getElementById("time").innerHTML = time + " seconds remaining";
  time --;
  if(time <= -1){
    clearInterval(quizTimer)
     alert("Time is UP");
     document.getElementById("time").innerHTML = " no time remaining"

      return;

        }
}, 1000);
  
  });

//setTimeout(thirtySeconds, 30000);

//$(document).ready(function(){
   // var count=30;
  //  var counter=setInterval(timer, 30000);
    
   // function timer(){
    //    count--;
     //   if(count <= 0){
     //       clearInterval(counter);
      //      return;
      //  }
      //  document.getElementById("TimeRemaining").innerHTML=count + " secs";
   // }
   // });

$(document).on("click", "radioButton", function (err) {

    $('input:radio').prop('checked', false);

    if (!$(this).find('input:radio').prop('checked')) {

        $(this).find('input:radio').prop('checked', true);
    } else {
        $(this).find('input:radio').prop('checked', false);
    }
});
