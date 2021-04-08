function play() {
  var pic = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
  var randomNum1 = Math.floor(Math.random()*pic.length);
  var randomNum2 = Math.floor(Math.random()*pic.length);
  document.querySelector(".p1").src = pic[randomNum1];
  document.querySelector(".p2").src = pic[randomNum2];
  if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Win The Match";
  }
  else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Win The Match";
  }
  else {
    document.querySelector("h1").innerHTML = "Match Draw";
  }
}
