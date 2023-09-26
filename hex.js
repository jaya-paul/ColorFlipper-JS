const code=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const btn=document.querySelector(".btn");
const colorname=document.querySelector(".Color");
btn.addEventListener("click",function(){
    let cd="#";
    for(let i=0;i<6;i++)
    {
        cd+=code[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor=cd;
    colorname.innerHTML=cd;
})