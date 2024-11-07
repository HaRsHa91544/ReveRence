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

// Get all radio buttons and add event listeners
const radios = document.querySelectorAll('input[name="slider"]');
radios.forEach(radio => {
    radio.addEventListener('change', function() {
        changeText(this);
    });
});