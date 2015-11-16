// Timer ===========================================================

function timeUp() {
  setTimeout(function(){
    alert("Time's Up! Your score is " + score);
  }, 20000);
}

document.getElementById("startGame").addEventListener('click', timeUp);


// Point system ======================================================

// I know this works with inline onclick and when pointing to an ID. 
// Not sure how to apply to a whole class!

var score = 0;
// var face = document.getElementsByClassName('oneUp')

function points() {
  // if (className = "done") {
  //   return;
  // }
  if (score <= 19) {
    score++;
    document.getElementById('pointCounter').value = score;
  }
     else if (score = 20) {
      alert("You win! Your score is " + score);
     }
}

document.getElementsByClassName("oneUp").addEventListener('click', points);


// Disable clicked images ==============================================

function changeClass() {
  document.getElementsByClassName("oneUp").className = "done";
  }

window.onload = function()
  {
    document.getElementsByClassName("oneUp").addEventListener( 'click' , changeClass );
  }