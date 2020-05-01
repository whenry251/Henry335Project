$(document).ready(function (){
    $('#fade').css('display', 'none').fadeIn(1000);
    
    var myDate = new Date();
    var hour = myDate.getHours();
    var greeting;
    
    if (hour < 12){greeting = "GOOD MORNING";}
    else if (hour >= 12 && hour <= 16){greeting = "GOOD AFTERNOON";}
    else if (hour >= 16 && hour <= 24){greeting = "GOOD EVENING";}
    
    document.getElementById("visitGreeting").innerHTML = greeting + "!";
    });

$(".regButton").mouseover(function(){
        $(this).css("background-color", "#e0e0e0");
    });
    
    $(".regButton").mouseout(function(){
        $(this).css("background-color", "silver");
    });
    
    $("#submitBtn").click(function(){
        alert("A new window/tab will now open to submit your form via email. Click OK to continue.");
    });

document.getElementById("moreSoon").onclick = function noSeriously (){
       document.getElementById("moreSoon").innerHTML = "NO, SERIOUSLY. THAT'S IT.";
   };



