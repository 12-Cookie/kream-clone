let counter = 0;
function spread() {
    ++counter;
    console.log('s');
    var btn1 = document.getElementById('hidden-button-1');
    var none1 = document.getElementById('none1');
    var none2 = document.getElementById('none2');
    if (counter === 1) {
        none1.style.display = 'flex';
    } else if (counter > 1) {
        none2.style.display = 'flex';
        btn1.style.display = 'none';
    }
}
