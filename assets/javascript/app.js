  
$("#start").on('click', function() {
   
    var time = 5;

var quizTimer = setInterval(function(){
  document.getElementById("timer").innerHTML = time + " seconds remaining";
  time -= 1;
  if(time <= 0){
    clearInterval(quizTimer)
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
