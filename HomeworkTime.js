window.onload = function() {
    
    var countNum = 0;

    var showNum = document.getElementById("seconds");

    var startBtn = document.getElementById('Button-start');
    var stopBtn = document.getElementById('Button-stop');
    var resetBtn = document.getElementById('Button-reset');

    var loop;

    startBtn.onclick = function () {
        clearInterval(loop);
        loop = setInterval(runCount, 1000);
    }

    stopBtn.onclick = function () {
        clearInterval(loop);
    }

    resetBtn.onclick = function () {
        clearInterval(loop)
        countNum = 0;
        showNum.innerHTML = "0";
    }

    function runCount() {
        countNum++;
        showNum.innerHTML = countNum;
    }
}
