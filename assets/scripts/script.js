const user1 = document.getElementById("user1")
const user2 = document.getElementById("user2")


function countDown() {
  clearTimeout(countDown);
  document.body.addEventListener("keyup", bodyKeyUp);
  document.body.addEventListener("keydown", bodyKeyDown);
  user1.addEventListener("click", counterA);
  user2.addEventListener("click", counterL);
}

function bodyKeyDown(e) {
  if (e.code == "KeyA") {
    user1.style.transform = "scale(1.5)";
    user1.style.transitionDuration = "50ms";
  }
  if (e.code == "KeyL") {
    user2.style.transform = "scale(1.5)";
    user2.style.transitionDuration = "50ms";
  }
}

function bodyKeyUp(e) {
  if (e.code == "KeyA") {
    user1.style.transform = "scale(1)";
    user1.style.transitionDuration = "50ms";
    counterA();
  }
  if (e.code == "KeyL") {
    user2.style.transform = "scale(1)";
    user2.style.transitionDuration = "50ms";
    counterL();
  }
}

function myFunction() {
  if (document.body.classList.contains("darkmode")) {
    document.body.classList.remove("darkmode");
  } else {
    document.body.classList.add("darkmode");
  }
}

function counterA() {
  countA++;
  document.getElementById("outputA").innerHTML = countA;
  winState(countA, "speler 1");
}
function counterL() {
  countL++;
  document.getElementById("outputL").innerHTML = countL;
  winState(countL, "speler 2");
}
let countA = 0;
let countL = 0;
function winState(count, speler) {
  if (count == 50) {
    document.getElementById("userWon").innerHTML = speler + " has won!";
    document.getElementById("winner").style.display = "block";
    document.getElementById("restart").style.display = "block";
    document.body.removeEventListener("keyup", bodyKeyUp);
    document.body.removeEventListener("keydown", bodyKeyDown);
    user2.removeEventListener("click", counterL);
    user1.removeEventListener("click", counterA);
    InGame = false;
  }
}

function restart() {
  document.getElementById("game1").style.display = "none";
  document.getElementById("beginScreen").style.display = "block";
}

let myInterval = setInterval(myTimer, 1000);
let countDownTimer = 3;
let InGame = false;

function myTimer() {
  if (InGame == true) {
    if (countDownTimer != 1) {
      countDownTimer--;
      document.getElementById("countDownText").innerHTML = countDownTimer;
    } else {
      InGame = false;
      document.getElementById("countDownText").innerHTML = "";
    }
  }
}

function gameMode1() {
  InGame = true;
  countDownTimer = 3;
  document.getElementById("countDownText").innerHTML = countDownTimer;
  setTimeout(countDown, 3000);
  countA = 0;
  countL = 0;
  document.getElementById("outputA").innerHTML = countA;
  document.getElementById("outputL").innerHTML = countL;
  document.getElementById("game1").style.display = "block";
  document.getElementById("beginScreen").style.display = "none";
  document.getElementById("winner").style.display = "none";
  document.getElementById("restart").style.display = "none";
}

function gameMode2(){
   window.location = ""
}