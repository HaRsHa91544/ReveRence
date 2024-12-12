function changeText(selectedRadio) {
    const hs4 = document.getElementById('hs4');
    const hs2 = document.getElementById('hs2');
    // Update the text based on which radio button is selected
    switch (selectedRadio.id) {
        case 'sol1':
            hs2.textContent = 'R & D';
            hs4.textContent = 'PHCC';
            break;
        case 'sol2':
            hs2.textContent = 'Research & Development';
            hs4.textContent = 'PHCC';
            break;
        case 'sol3':
            hs2.textContent = 'R & D';
            hs4.textContent = 'PHCC';
            break;
        case 'sol4':
            hs2.textContent = 'R & D';
            hs4.textContent = 'Primary Health Care Centres';
            break;
    }
}

const radios = document.querySelectorAll('input[name="slider"]');
radios.forEach(radio => {
    radio.addEventListener('change', function () {
        changeText(this);
    });
});

const solbox1 = document.getElementById('sol-box1');
const solbox2 = document.getElementById('sol-box2');
const solbox3 = document.getElementById('sol-box3');
const solbox4 = document.getElementById('sol-box4');
const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');
const content4 = document.getElementById('content-4');
solbox1.onclick=function(){
    content1.style.display = "block";
    content2.style.display="none";
    content3.style.display="none";
    content4.style.display="none";
}
solbox2.onclick=function(){
    content1.style.display = "none";
    content2.style.display="block";
    content3.style.display="none";
    content4.style.display="none";
}
solbox3.onclick=function(){
    content1.style.display = "none";
    content2.style.display="none";
    content3.style.display="block";
    content4.style.display="none";
}
solbox4.onclick=function(){
    content1.style.display = "none";
    content2.style.display="none";
    content3.style.display="none";
    content4.style.display="block";
}
