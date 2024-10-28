function change(){
    var scrollValue=window.scrollY;
    var nav = document.querySelector('header');
    if(scrollValue>200){
        
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
    console.log(scrollValue);
}
window.addEventListener('scroll',change);


window.onload = function() {
    const rev = document.getElementById('rev');
    const lab = document.getElementById('lab');
    const pro = document.getElementById('pro');
    const del = document.getElementById('del');
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    const interval = setInterval(function() {
        if (i <= 1.2) {
            rev.innerHTML = i.toFixed(1);
            i += 0.1;
        } 
        else if(j<=500){
            lab.innerHTML = `+${j}`;
            j += 20;
        }
        else if(k<=31000){
            pro.innerHTML = `+${k}`;
            k += 1000;
        }
        else if(l<=11000){
            del.innerHTML = `+${l}`;
            l += 500;
        }
        else {
            clearInterval(interval);
        }
    }, 30);
};

