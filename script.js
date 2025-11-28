var mydice;
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;
var t;


function change() {

    var random = Math.floor(Math.random() * 6);
    mydice.innerHTML = dices[random];
}


function stopstart() {

    if (stopped) {
        stopped = false;

        t = setInterval(change,1000);

    } else {
        clearInterval(t);
        stopped = true;
    }

};



window.onload = function () {
        mydice = document.getElementById("dice");
        stopstart();
    }