$(document).ready(function (){
    $('#fade').css('display', 'none').fadeIn(1000);
    
    var myDate = new Date();
    var hour = myDate.getHours();
    var greeting;
    
    if (hour < 12){
        greeting = "GOOD MORNING";}
    else if (hour >= 12 && hour <= 16){
        greeting = "GOOD AFTERNOON";}
    else if (hour >= 16 && hour <= 24){
        greeting = "GOOD EVENING";}
    
    document.getElementById("visitGreeting").innerHTML = greeting + "!";
    });

$(".infoClick").click(function(){
        document.getElementById("hidden").style.display = "block";
    });

$(".regButton").mouseover(function(){
        $(this).css("background-color", "#e0e0e0");2
    });
    
$(".regButton").mouseout(function(){
        $(this).css("background-color", "silver");
    });

$("#submitBtn").mouseover(function(){
    $(this).css("background-color", "#1b5f9e");
});

$("#submitBtn").mouseout(function(){
    $(this).css("background-color", "#124b81");
});
    
$("#submitBtn").click(function(){
        alert("A new window/tab will now open to submit your form via email. Click OK to continue.");
    });

document.getElementById("moreSoon").onclick = function noSeriously (){
       document.getElementById("moreSoon").innerHTML = "NO, SERIOUSLY. THAT'S IT.";
   };

$("summary").mouseover(function(){
    $(this).css("color", "grey");
});

$("summary").mouseout(function(){
    $(this).css("color", "black");
});

function colorIn(x) {
  x.style.background = "#d9ecff";};

function colorOut(x) {
  x.style.background = "white";};

/*A parting note - very sorry that this website is not as complete as it could be i.e accessibility and validation. I planned to finish that up tonight but my pet has gone missing and I'm going out to look for her for however long it takes, so I want to turn this in in case I'm not back in time to finish up.*/