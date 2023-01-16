const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");

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
    socket.emit("a", (countA) => {
      countA++
    });
  }
  if (e.code == "KeyL") {
    user2.style.transform = "scale(1)";
    user2.style.transitionDuration = "50ms";
    counterL();
    socket.emit("l", (countL) => {
      countL++
    });
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
  document.getElementById("outputA").innerHTML = countA;
  winState(countA, "user 1");
}
function counterL() {
  document.getElementById("outputL").innerHTML = countL;
  winState(countL, "user 2");
}

let countA = 0;
let countL = 0;

function winState(count, user) {
    document.getElementById("userWon").innerHTML = user + " has won!";
    document.getElementById("winner").style.display = "block";
    document.getElementById("restart").style.display = "block";
    document.body.removeEventListener("keyup", bodyKeyUp);
    document.body.removeEventListener("keydown", bodyKeyDown);
    user2.removeEventListener("click", counterL);
    user1.removeEventListener("click", counterA);
    InGame = false;
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

function gameMode2() {
  document.getElementById("game2").style.display = "block";
  document.getElementById("beginScreen").style.display = "none";
  document.getElementById("winner").style.display = "none";
  document.getElementById("restart").style.display = "none";
  var obj = document.body;
  obj.style.cursor = "crosshair";
  moveBalls();
}

function moveBalls() {
  let balls = document.getElementsByClassName("ball");
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.top = randomIntFromInterval(0, 100) + "vh";
    balls[i].style.left = randomIntFromInterval(0, 100) + "vw";
    balls[i].style.width = sizes[i] + "px";
    balls[i].style.height = sizes[i] + "px";
  }

  setTimeout(moveBalls, 500);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function redGone() {
  document.getElementById("redBall").style.display = "none";
}
function greenGone() {
  document.getElementById("greenBall").style.display = "none";
}
function yellowGone() {
  document.getElementById("yellowBall").style.display = "none";
}
function blueGone() {
  document.getElementById("blueBall").style.display = "none";
}
function purpleGone() {
  document.getElementById("purpleBall").style.display = "none";
}
function pinkGone() {
  document.getElementById("pinkBall").style.display = "none";
}

let sizes = [];
sizes[0] = randomIntFromInterval(5, 200);
sizes[1] = randomIntFromInterval(5, 100);
sizes[2] = randomIntFromInterval(5, 200);
sizes[3] = randomIntFromInterval(5, 100);
sizes[4] = randomIntFromInterval(5, 50);
sizes[5] = randomIntFromInterval(5, 100);

socket = io.connect();

// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

// receive a message from the server
socket.on("hello from server", (...args) => {
  console.log("hello from server");
});

socket.on("l", (data) => {
  countL++
  document.getElementById("outputL").innerHTML = countL;
});
socket.on("a", (data) => {
  countA++;
  document.getElementById("outputA").innerHTML = countA;
});

socket.on("winner", (data) => {
  alert("winaar");
  // winState();
});