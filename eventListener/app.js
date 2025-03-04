const button = document.querySelector(".button-click");
const numberCount = document.querySelector(".number-count");

// this is loop so it exicute continusly after one click
// function numberIncrement() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       numberCount.textContent = i;
//     }, i * 500);
//   }
// }
// if (button) {
//   button.addEventListener("click", numberIncrement);
// }

// so here we use a counter instead.

let count = 0;

function numberIncrement() {
  if (count < 10) {
    count++;
    numberCount.textContent = count;
  }
}

if (button) {
  button.addEventListener("click", numberIncrement);
}
