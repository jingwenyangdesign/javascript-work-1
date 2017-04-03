// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

// For the 1st box (index = 0), change the background color to "blue".
boxes[0].style.backgroundColor = "green";
boxes[1].style.backgroundColor = "purple";
boxes[2].style.backgroundColor = "#191919";
boxes[3].style.backgroundColor = "blanchedalmond";


// Variable to hold the current left margin.
var box1leftMargin = 0;
var box2leftMargin = 0;
var box3leftMargin = 0;
var box4leftMargin = 0;
var box5topMargin = 0;

// Variable used to add to the left margin.
var moveAmountbox1 = 5;
var moveAmountbox2 = 10;
var moveAmountbox3 = 15;
var moveAmountbox4 = 20;
var moveAmountbox5 = 25;

function box1Clicked() {
    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box1 clicked!");
    box1leftMargin += moveAmountbox1;
    boxes[0].style.marginLeft = box1leftMargin + "px";
}

function box2Clicked() {
    console.log("Hey, box2 clicked!");
    box2leftMargin += moveAmountbox2;
    boxes[1].style.marginLeft = box2leftMargin + "px";
}

function box3Clicked() {
    console.log("Hey, box3 clicked!");
    box3leftMargin += moveAmountbox3;
    boxes[2].style.marginLeft = box3leftMargin + "px";
}

function box4dblClicked() {
    console.log("Hey, box4 doubleclicked!");
    box4leftMargin += moveAmountbox4;
    boxes[3].style.marginLeft = box4leftMargin + "px";
}

function box5Clicked() {
    console.log("Hey, box5 clicked!");
    box5topMargin += moveAmountbox5;
    boxes[4].style.marginTop = box5topMargin + "px";
}

// When anyone clicks on the first box, call the function "boxClicked".
boxes[0].addEventListener("click", box1Clicked);
boxes[1].addEventListener("click", box2Clicked);
boxes[2].addEventListener("click", box3Clicked);
boxes[3].addEventListener("dblclick", box4dblClicked);
boxes[4].addEventListener("click", box5Clicked);