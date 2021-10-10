function increaseText() {
    document.getElementById('Text').style.fontSize = "24px";
}

function addStyles() {
    if (document.getElementById('fs').checked) {
        document.getElementById('Text').style.color = "blue";
        document.getElementById('Text').style.textDecoration = "underline";
    }
}

function removeStyles() {
    if (document.getElementById('bb').checked) {
        document.getElementById('Text').style.fontSize = "12px";
        document.getElementById('Text').style.color = "black";
        document.getElementById('Text').style.textDecoration = "none";
    }
}

function mooText() {
    var str = document.getElementById('Text').value;
    str = str.toUpperCase();
    var parts = str.split(".")
    str = parts.join(" -Moo.")
    document.getElementById('Text').value = str;
}