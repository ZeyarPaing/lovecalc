function testAgain(){
    
var ran = (Math.random() * 100) + 1;
var ran2 = (Math.random() * 100) + 1;
var average = (ran + ran2) / 2;
var ava = Math.round(average);
}
function hello(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("dialog").style.display = "block";
    var firstPerson = document.getElementById("fp").value;
    var secondPerson = document.getElementById("sp").value;

    if ( ava > 80 ) {
        document.getElementById("out").innerHTML = "Love score of " + firstPerson + " and " + secondPerson + " is " + ava + "%."; 
        document.getElementById("add").innerHTML = "The happiest couples never have the same character. They have the best understanding of their differences. ";
    }else if ( ava > 50 ) {
        document.getElementById("out").innerHTML = "Love score of " + firstPerson + " and " + secondPerson + " is " + ava + "%."; 
        document.getElementById("add").innerHTML = "The best relationship is when you can act like lovers and best friends at the same time.";
    }else {
        document.getElementById("out").innerHTML = "Love score of " + firstPerson + " and " + secondPerson + " is " + ava + "%.";
        document.getElementById("add").innerHTML = "Sometimes good things fall apart so better things can fall together.";
    }
}


function hideDialog() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog").style.display = "none";

}
