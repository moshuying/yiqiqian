 function feuxue() {
        alert("calculator by 齐飞雪！")
    }
 function calCulate(val) {
    var num = document.getElementById("t");
    switch (val) {
        case "=":
            num.value = eval(num.value);
            break;
        case "C":
            num.value = "";
            break;
        default:
            num.value = num.value + val;
            break;
    }
}