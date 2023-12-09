let h1=document.querySelector('h1');
var img1=document.querySelector('.img1');
var img2=document.querySelector('.img2');

let a=(Math.floor(Math.random()*6))+1;
let b=(Math.floor(Math.random()*6))+1;
function generate(a,b)
{
   changeDice(a,img1);
   changeDice(b,img2);
   changeh1(a,b);
}
function changeDice(c,img)
{
  if(c==1)
  {
    img.setAttribute('src',"images/dice1.png");
  }else if(c==2){
    img.setAttribute('src',"images/dice2.png");
  }
  else if(c==3){
    img.setAttribute('src',"images/dice3.png");
  }
  else if(c==4){
    img.setAttribute('src',"images/dice4.png");
  }
  else if(c==5){
    img.setAttribute('src',"images/dice5.png");
  }else{
    img.setAttribute('src',"images/dice6.png");
  }
}
function changeh1(a,b)
{
    if(a>b)
    {
        h1.innerHTML="&#128681; player 1 wins! ";
    }else if(b>a){
        h1.innerHTML="player 2 wins! &#x1F6A9";
    }else{
        h1.innerHTML="Draw!";
    }
}
generate(a,b);