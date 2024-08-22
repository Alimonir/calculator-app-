"use strict";
let display = document.getElementById("display");
let buttons = document.querySelectorAll(".buttons button");

//append to display
function appendToDisplay(value) {
  display.innerText += value;
}
//delete last element from the value
function deleteLastEle() {
  display.innerText = display.innerText.slice(0, -1);
}
//delete all
function deleteAll() {
  display.innerText = "";
}
//round
function twoNumber() {
  display.innerText = Math.round(display.innerText);
}

//calc numbers with eval()
function calc() {
  try {
    let expretion = display.innerText;
    expretion = expretion
      .replace(/÷/gi, "/")
      .replace(/x/gi, "*")
      .replace(/\^/gi, "**")
      .replace(/√(\d+)/, "Math.sqrt($1)");

    let result = eval(expretion);
    deleteAll();
    appendToDisplay(result);
  } catch (error) {
    deleteAll();
    console.error("something wrong");
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let value = button.innerText;
    if (
      !isNaN(value) ||
      value === "+" ||
      value === "-" ||
      value === "x" ||
      value === "÷" ||
      value === "/" ||
      value === "." ||
      value === "^" ||
      value === "√"
    ) {
      appendToDisplay(value);
    } else if (value === "⌫") {
      deleteLastEle();
    } else if (value === "C") {
      deleteAll();
    } else if (value === "=") {
      calc();
    } else if (value === "≈") {
      twoNumber();
    }
  });
});
