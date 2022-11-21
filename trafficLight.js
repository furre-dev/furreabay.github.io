var redBox = document.getElementById("red-light");
var yellowBox = document.getElementById("yellow-light");
var greenBox = document.getElementById("green-light");


redBox.style.visibility = "visible";
yellowBox.style.visibility = "hidden";
greenBox.style.visibility = "hidden";



function redLightBox() {

    if (redBox.style.visibility == "hidden") {
        redBox.style.visibility = "visible";
        yellowBox.style.visibility = "hidden";
        greenBox.style.visibility = "hidden";
    } else {
        alert("It's already red! Click the green button!");
    }
}

function yellowLightBox() {

    redBox.style.visibility = "hidden";
    yellowBox.style.visibility = "hidden";
    greenBox.style.visibility = "visible";
}

function greenLightBox() {

    if (greenBox.style.visibility == "hidden") {



        setTimeout(yellowLightBox, 1700);

        redBox.style.visibility = "visible";
        yellowBox.style.visibility = "visible";
        greenBox.style.visibility = "hidden";
    } else {
        alert("It's already green! Click the red button!");
    }

}