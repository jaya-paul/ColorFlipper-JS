const colors=["green","red","black","pink"];
const btn=document.querySelector(".btn");
const colorname=document.querySelector(".Color");
var ran;
btn.addEventListener("click",function(){
     ran=Math.floor(Math.random()*4);
     document.body.style.backgroundColor=colors[ran];
     colorname.innerHTML=colors[ran];

})