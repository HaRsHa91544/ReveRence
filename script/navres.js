const homebtn = document.getElementById('home-label');
const solbtn = document.getElementById('sol-label');
const drop1 = document.getElementById('dd1');
const drop2 = document.getElementById('dd');
const hdown = document.getElementById('hdown2');
const sdown = document.getElementById('sdown2');
const menu = document.getElementById('menu-btn');
var h=0,s=0,m=0;
menu.onclick=function(){
    if(m==0){
        m=1;
    }
    else{
        m=0;
        homebtn.style.top='38%';
        drop1.style.display='none';
        hdown.style.transform='rotate(0deg)';
        drop2.style.display='none';
        solbtn.style.top='38%';
        sdown.style.transform='rotate(0deg)';
    }
}
homebtn.onclick=function hf(){
    if(h==0&&s==0){
        h=1;
        drop1.style.display='flex';
        homebtn.style.top='7%';
        hdown.style.transform='rotate(180deg)';
    }
    else if(h==0&&s==1){
        h=1;
        s=0;
        solbtn.style.top='38%';
        drop2.style.display='none';
        drop1.style.display='flex';
        homebtn.style.top='7%';
        hdown.style.transform='rotate(180deg)';
        sdown.style.transform='rotate(0deg)';
    }
    else{
        h=0;
        homebtn.style.top='38%';
        drop1.style.display='none';
        hdown.style.transform='rotate(0deg)';
    }
}

solbtn.onclick=function(){
    if(h==0&&s==0){
        s=1;
        solbtn.style.top='8%';
        drop2.style.display='flex';
        sdown.style.transform='rotate(180deg)';
    }
    else if(h==1&&s==0){
        h=0;
        s=1;
        solbtn.style.top='8%';
        homebtn.style.top='38%';
        drop2.style.display='flex';
        drop1.style.display='none';
        sdown.style.transform='rotate(180deg)';
        hdown.style.transform='rotate(0deg)';
    }
    else{
        s=0;
        drop2.style.display='none';
        solbtn.style.top='38%';
        sdown.style.transform='rotate(0deg)';
    }
}