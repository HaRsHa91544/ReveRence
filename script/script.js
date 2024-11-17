var che = false;
window.onscroll = function() {
    var scrollValue = window.scrollY;
    if(scrollValue>150 && !che){
        che=true;
        valchange();
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
        if (i <= 20) {
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
        else if (m <= 145) {
            phcc.innerHTML = `+${m}`;
            m += 5;
        }
        else {
            clearInterval(interval);
        }
    }, 30);
};

