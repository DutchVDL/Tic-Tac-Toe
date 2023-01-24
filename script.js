const cells = document.querySelectorAll(".cell");
let quantityX = 0;
let quantityY = 0;
let empty = "";
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
const section = document.querySelector("section");
const winnerOne = document.createElement("h2");
const winnerTwo = document.createElement("h2");
const body = document.querySelector("body");
const restart = document.querySelector(".restart");
const toWin = function () {
  if (
    (one.innerText == two.innerText &&
      one.innerText == three.innerText &&
      one.innerText != empty) ||
    (one.innerText == four.innerText &&
      one.innerText == seven.innerText &&
      one.innerText != empty) ||
    (one.innerText == five.innerText &&
      one.innerText == nine.innerText &&
      one.innerText != empty) ||
    (two.innerText == five.innerText &&
      two.innerText == eight.innerText &&
      two.innerText != empty) ||
    (three.innerText == five.innerText &&
      three.innerText == seven.innerText &&
      three.innerText != empty) ||
    (three.innerText == six.innerText &&
      three.innerText == nine.innerText &&
      three.innerText != empty) ||
    (four.innerText == five.innerText &&
      four.innerText == six.innerText &&
      four.innerText != empty) ||
    (seven.innerText == eight.innerText &&
      seven.innerText == nine.innerText &&
      seven.innerText != empty)
  )
    return true;
  else {
    return false;
  }
};

winnerOne.style.color = "sienna";
winnerTwo.style.color = "sienna";

cells.forEach((cell) =>
  cell.addEventListener("click", function () {
    if (quantityX == quantityY && cell.innerText == empty && !toWin()) {
      cell.innerText = "X";
      quantityX += 1;
      cell.style.cursor = "not-allowed";
      if (toWin()) {
        console.log("winner");
        cells.forEach((cell) => {
          cell.style.cursor = "not-allowed";
        });
        winnerOne.append("Player 1 Wins");
        section.insertAdjacentElement("afterend", winnerOne);
      }
    } else if (quantityX !== quantityY && cell.innerText == empty && !toWin()) {
      cell.innerText = "O";
      quantityY += 1;
      cell.style.cursor = "not-allowed";
      if (toWin()) {
        console.log("winner");
        cells.forEach((cell) => {
          cell.style.cursor = "not-allowed";
        });
        winnerTwo.append("Player 2 Wins");
        section.insertAdjacentElement("afterend", winnerTwo);
      }
    }
  })
);

restart.addEventListener("click", function () {
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.style.cursor = "pointer";
  });
  quantityX = 0;
  quantityY = 0;
  if (winnerOne.innerText != "" || winnerTwo.innerText != "") {
    winnerOne.innerText = "";
    winnerTwo.innerText = "";
  }
});
