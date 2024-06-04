//background sound
let bgmSound = new Audio("./assets/Bg.mp3");
bgmSound.loop = true;
bgmSound.play();
bgmSound.volume = 0.4;


let playagain = document.getElementById("playagain");
let exitgame = document.getElementById("exitgame");
let zeroscore = document.getElementById("congratulations")


playagain.addEventListener("click",function(){
    window.location.href="./index.html"
})

exitgame.addEventListener("click",function(){
    window.location.href=("https://github.com/Dico19")
})

// creating random messages for winner
let randomWinningMessages = [
   "Hoki lu tai, next game pasti lebih kecil scorenya awowkwowkwk 😝",
   "Cuma dapet sampah segini doang? wkwkwk ga percintaan, ga main game NT mulu dah lu 🥱",
   "Boleh juga lu anjing, ngecheat lu yakk? 😏",
   "Kocak wkwkw, kecil amat score lu kaya titit Ritaju 😛",
   "Anjay Kelas juga lu jamet, Main lagi dong kalo berani Gantengg 😎"
]


// creating random number for random winning and losing messages
let randnumForWinOrLose = Math.floor(Math.random()*5)

let scorespan = document.getElementById("scorespan");
let score = localStorage.getItem("score");

if (score>0) {
    zeroscore.innerHTML = randomWinningMessages[randnumForWinOrLose]
}

let playernameFromStorage = localStorage.getItem("playername")
scorespan.innerText =" Kamu Berhasil Mengumpulakan " + score + " Sahabat Aji ";

//creating chocolate shower only when socre is greater than zero
if (score>0){
    createChocolateShower();
    setInterval(createChocolateShower, 300);
}

function createChocolateShower() {
    const chocolate = document.createElement('div');
    chocolate.classList.add('chocolate');
    
    chocolate.style.left = Math.random() * 100 + "vw";
    chocolate.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    chocolate.innerText = '🔥😎🙌';
    
    document.body.appendChild(chocolate);
    
    setTimeout(() => {
                chocolate.remove();
                }, 5000);
  }
  