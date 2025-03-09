var che = false;
const apara = document.getElementById('apara');
const con2 = document.querySelector('.con2');
const certih=document.getElementById('certih');
const certip=document.getElementById('certip');
const award=document.querySelectorAll('.award');
const vpara=document.querySelector('.vision h2');
const visp = document.querySelector('.vision p');
const vimg=document.querySelector('.vimg');
const vbtn=document.querySelector('.vision a');
const lpara=document.querySelector('.loc h2');
const lisp = document.querySelector('.loc h3');
const limg=document.querySelector('.loc p');
const lbtn=document.querySelector('.loc div img');
const btn1=document.getElementById('btn1');
const blh1=document.querySelector('.blog h1');
const blin=document.querySelector('.blog .inner');
const navbar = document.getElementById('navbar');


window.onscroll = function() {
    var scrollValue = window.scrollY;
    if(scrollValue>80){
        navbar.style.backgroundColor='var(--blue)';
        navbar.style.position='fixed';
    }
    if(scrollValue<=60){
        navbar.style.backgroundColor='transparent';
        navbar.style.position='absolute';
    }
    if(scrollValue>150 && !che){
        che=true;
        valchange();
    }
    if(scrollValue>900){
        apara.style.animation='slideRight 1.2s both';
        apara.style.opacity='1';
        con2.style.animation='servani 1.2s both';
        con2.style.opacity='1';
    }
    if(scrollValue>1450){
        certip.style.animation='slideRight 1.2s both';
        certih.style.animation='opadiv 1.2s both';
        certih.style.opacity='1';
        award.forEach(card => {
            card.style.animation = 'servani 1.2s both';
            card.style.opacity = '1';
        });
    }
    if(scrollValue>1800){
        vbtn.style.opacity='1';
        vbtn.style.animation='opadiv 1.2s both';
        visp.style.opacity='1';
        visp.style.animation='slideRight 1.2s both';
        vpara.style.opacity='1';
        vpara.style.animation='opadiv 1.2s both';
        vimg.style.opacity='1';
        vimg.style.animation='servani 1.2s both';
    }
    if(scrollValue>2300){
        lbtn.style.opacity='1';
        lbtn.style.animation='slideRight 1.2s both';
        lisp.style.opacity='1';
        lisp.style.animation='opadiv 1.2s both';
        lpara.style.opacity='1';
        lpara.style.animation='opadiv 1.2s both';
        limg.style.opacity='1';
        limg.style.animation='opadiv 1.2s both';
        btn1.style.opacity='1';
        btn1.style.animation='opadiv 1.2s both';
    }
    if(scrollValue>2800){
        blh1.style.opacity='1';
        blh1.style.animation='opadiv 1.2s both';
        blin.style.opacity='1';
        blin.style.animation='servani 1.2s both';
    }
}

function valchange() {
    const rev = document.getElementById('rev');
    const lab = document.getElementById('lab');
    const pro = document.getElementById('pro');
    const del = document.getElementById('del');
    const phcc = document.getElementById('phcc');
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    const interval = setInterval(function () {
        if (i <= 18) {
            rev.innerHTML = `₹${i}M`;
            i += 1;
        }
        else if (j <= 540) {
            lab.innerHTML = `+${j}`;
            j += 20;
        }
        else if (k <= 36000) {
            pro.innerHTML = `+${k}`;
            k += 1000;
        }
        else if (l <= 18000) {
            del.innerHTML = `+${l}`;
            l += 1000;
        }
        else if (m <= 144) {
            phcc.innerHTML = `+${m}`;
            m += 4;
        }
        else {
            clearInterval(interval);
        }
    }, 30);
};

document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector(".Expert-commitee-list");
    const duplicate = list.cloneNode(true); // Clone list
    list.parentNode.appendChild(duplicate); // Append it
});
