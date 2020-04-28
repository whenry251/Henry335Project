$(document).ready(function (){
    $('#fade').css('display', 'none').fadeIn(1000);
    
    var myDate = new Date();
    var hour = myDate.getHours();
    var greeting;
    
    if (hour < 12){greeting = "GOOD MORNING";}
    else if (hour >= 12 && hour <= 16){greeting = "GOOD AFTERNOON";}
    else if (hour >= 16 && hour <= 24){greeting = "GOOD EVENING";}
    
    document.getElementById("visitGreeting").innerHTML = greeting + "!";
    
    
    /*I literally tried for hours to write a script-based slideshow for the design page but it was not working at ALL, so I decided to learn how to make a bootstrap one off of W3 instead.
    var imageList = ["slideshow/ashlyn.png", "slideshow/meredith.png", "slideshow/frostystickers.JPG", "slideshow/bearcatfoodpantry.png", "slideshow/asbsticker.png", "slideshow/asbinfosess.png", "slideshow/asbcorona1.jpg", "slideshow/asbcorona.gif", "slideshow/asbexecannounce.png"];
    var x = 0;*/
    
    
    
    });




