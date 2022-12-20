document.body.addEventListener("keydown", bodyKeyDown)

function bodyKeyDown(e)
{
    if (e.code=="KeyA"){
        document.getElementById('user1').style.transform = "scale(1.5)";
        document.getElementById('user1').style.transitionDuration = "50ms";
       }
       if (e.code=="KeyL"){
           document.getElementById('user2').style.transform = "scale(1.5)";
           document.getElementById('user2').style.transitionDuration = "50ms";
          }
}

document.body.addEventListener("keyup", bodyKeyUp)

function bodyKeyUp(e){
    if (e.code=="KeyA"){
        document.getElementById('user1').style.transform = "scale(1)";
        document.getElementById('user1').style.transitionDuration = "50ms";
        counterA();
       }
       if (e.code=="KeyL"){
           document.getElementById('user2').style.transform = "scale(1)";
           document.getElementById('user2').style.transitionDuration = "50ms";
           counterL();
          }
}

    

function myFunction(){
    if (document.body.classList.contains('darkmode'))
    {
        document.body.classList.remove('darkmode');
    }
    else
    {
        document.body.classList.add('darkmode')
    }
}

let countA = 0;
let countL = 0;
function counterA(){
    countA++
    document.getElementById("outputA").innerHTML = countA;
    winState(countA, "speler 1");
}
function counterL(){
    countL++
    document.getElementById("outputL").innerHTML = countL;
    winState(countL, "speler 2");
}

function winState(count, speler){
if(count == 30){
    document.getElementById("userWon").innerHTML = speler + " has won!";
    document.getElementById("winner").style.display = "block";
    document.body.removeEventListener("keyup",bodyKeyUp);
    document.body.removeEventListener("keydown",bodyKeyDown);
}
}