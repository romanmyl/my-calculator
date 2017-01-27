function math(i) {
    var screen = document.getElementById("screen");
    if (screen.value == 0 || screen.value == "Error") {
        screen.value = i;
        document.getElementById("memtab").value += i;
    } else {
     screen.value += i;
     document.getElementById("memtab").value += i;
}; 
}

function c(z) {
    return document.getElementById ("screen").value = z;
}

function equal () {
    
    try {
    
    document.getElementById ("screen").value = eval(document.getElementById ("screen").value);
} catch (error) {
    document.getElementById ("screen").value = "Error";
};
}
