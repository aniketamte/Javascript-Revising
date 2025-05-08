let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let started = false;
let level = 0;

let h2 =  document.querySelector("h2");

document.addEventListener("keypress", function() {
      if(started == false){
            console.log("Game Started");
            started = true;

            levelUp();
      } 
});

function gameFlash(btn) {
      btn.classList.add("flash");
      setTimeout(() => {
            btn.classList.remove("flash");
      }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
      userSeq = [];
      level++;
      h2.innerText = `Level ${level}`;

      let randIdx = Math.floor(Math.random() * 3);
      let randColor = btns[randIdx];
      let randBtn = document.querySelector(`.${randColor}`);

      // console.log(randIdx);
      // console.log(randColor);
      // console.log(randBtn);

      gameSeq.push(randColor);
      console.log(gameSeq);
      gameFlash(randBtn);
}

//Add event listner on button 

function checkAns(idx){
      //console.log("Current Level : ", level);
      // let idx = level-1;

      if(userSeq[idx] === gameSeq[idx]){
            if(userSeq.length == gameSeq.length){
                  setTimeout(levelUp, 1000);
            }
      } else{
            h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press any key to start.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function () {
                  document.querySelector("body").style.backgroundColor =
                    "white";
            }, 150);
            reset();
      }
}


function btnPress(){
      let btn = this;
      userflash(btn);

      userColor = btn.getAttribute("id");
      userSeq.push(userColor);
      checkAns(userSeq.length-1);
}

let  allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
      btn.addEventListener("click", btnPress);
}


function reset () {
      started = false;
      gameSeq = [];
      userSeq = [];
      level = 0;
}