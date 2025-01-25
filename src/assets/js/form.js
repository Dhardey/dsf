var tel = document.getElementById("#phone");
tel.addEventListener("input", function() {
    if ( (tel.value.length === 3) || (tel.value.length === 7)) {
        tel.value += "-";
    }
});