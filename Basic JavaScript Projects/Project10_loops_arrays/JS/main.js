function Call_Loop() {
    var i = 1;
    var text = "";
    while (i < 11) {
        text += i + "<br>";
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}