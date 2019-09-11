setTimeout(thirtySeconds, 30000);

$(document).ready(function(){
    var count=30;
    var counter=setInterval(timer, 30000);
    
    function timer(){
        count--;
        if(count <= 0){
            clearInterval(counter);
            return;
        }
        document.getElementById("TimeRemaining").innerHTML=count + " secs";
    }
    });