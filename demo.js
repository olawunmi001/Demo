// document.getElementById("count-el").innerText = 5;

// let count = 5 + 7
// console.log(count)
// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
// function increment(){
//     console.log("This button was clicked")
// }
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function totalLap(){
//     console.log(lap1+lap2+lap3)
// }
// totalLap()
// let lapsCompleted = 0;
// function increment() {
//   lapsCompleted = lapsCompleted + 1;
// }
// increment();
// increment();
// increment();

// console.log(lapsCompleted);
let countEl = document.getElementById("count-el");
let count = 0;
function increaseButton() {
  count = count + 1;
  countEl.innerText = count;
}

// let lossEl = document.getElementById("count-el");
// function decreaseButton() {
//   count = count - 1;
//   lossEl.innerText = count;
// }

function save() {
  alert(count);
}
