document.getElementById("inner").onclick = function() {
    if (this.className == "inner-on") {
        this.style.left = -51 + "px";
        this.childNodes[1].checked = false;
        this.className = "inner-off";
    } else {
        this.style.left = 0;
        this.childNodes[1].checked = true;
        this.className = "inner-on";
    }
}