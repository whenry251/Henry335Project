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