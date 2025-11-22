function showTime() {
    var date = new Date();

    // Pakistan time offset (UTC+5)
    var pakistanTime = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));

    var year = pakistanTime.getFullYear();
    var month = pakistanTime.toLocaleString("en-US", { month: "long" });
    var day = pakistanTime.getDate();

    var h = pakistanTime.getHours();
    var m = pakistanTime.getMinutes();
    var s = pakistanTime.getSeconds();

    var session = "PM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "AM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // everything on new lines
    var output =
        "Year: " + year + "\n" +
        "Month: " + month + "\n" +
        "Day: " + day + "\n" +
        "Time: " + h + ":" + m + ":" + s + " " + session;

    document.getElementById("WorldTimes").innerText = output;

    setTimeout(showTime, 1000);
}

showTime();