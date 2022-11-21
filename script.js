const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");

});

/* Barcode Generator */

function barcodeGen() {
    var text = "Test me!";
    JsBarcode("#barcode", text, {
        background: "none",
        lineColor: "#ffffff",
    });
};

barcodeGen();


document.getElementById("generateBtn").addEventListener("click", function () {
    var text = "Test me!"
    text = document.getElementById("textInput").value;
    JsBarcode("#barcode", text, {
        background: "none",
        lineColor: "#ffffff",
    });
});


/* Roulette rotate */
var rouletteTable = document.getElementById("roulette-icon");
var rouletteBtn = document.getElementById("roulette-btn");


/* Removes the "spin" class from "roulette-icon" to make it spinnable again. */
function removeSpinTag() {
    rouletteTable.classList.remove("spin");
    rouletteBtn.disabled = false;
    rouletteBtn.style.pointerEvents = "all";
};

/* Adds the "spin" class to "roulette-icon" to make it spin */
function spinRoulette() {
    if (!rouletteTable.classList.contains("spin")) {
        rouletteTable.classList.add("spin");
        rouletteBtn.disabled = true;
        rouletteBtn.style.pointerEvents = "none";
        /* Waits 1 second then executes removeSpinTag */
        setTimeout(removeSpinTag, 1000);
    }
};

/* DARKMODE LIGHTMODE TOGGLE */

const container = document.getElementById("fourht-article");
const darkModeButton = document.getElementById("darkmode-toggle");
const sunAndMoon = document.getElementById("sun-and-moon-image");


function lightDarkToggle() {
    if (container.classList.contains("light-mode")) {
        container.classList.remove("light-mode");
        container.classList.add("dark-mode")
        sunAndMoon.src = "img/sun-and-moon-icons/sun-icon.png";
    } else if (container.classList.contains("dark-mode")) {
        container.classList.remove("dark-mode");
        container.classList.add("light-mode");
        sunAndMoon.src = "img/sun-and-moon-icons/moon-icon.png";
    }
}
