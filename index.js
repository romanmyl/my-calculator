
function math(i) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (screen.innerHTML == "0" || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
        screen.innerHTML = i;
        memtab.innerHTML += i;
    } else {
     screen.innerHTML += i;
     memtab.innerHTML += i;
}; 
}

function dot(d) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (screen.innerHTML.endsWith(d) || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
        screen.innerHTML = "";
        memtab.innerHTML = "";
    } else {
        screen.innerHTML += d;
        memtab.innerHTML += d;
    };
}

function operator(opr) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var op = "<span>" + opr + "</span>";
    if (screen.innerHTML != 0 && screen.innerHTML != "Error" && screen.innerHTML.includes("=") == false) {
        screen.innerHTML += op;
        memtab.innerHTML += op;
    } ;
}

function operMore(opr) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var op = "<span>" + opr + "</span>";
    if ( screen.innerHTML == "0" || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
       screen.innerHTML = op;
       memtab.innerHTML += op;
   } else {
        screen.innerHTML += op;
        memtab.innerHTML += op;
    } ;
}

function c(z) {    
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (memtab.lastChild.nodeName == "BR") {
    screen.innerHTML = z;
    memtab.innerHTML += "";
   } else {
    screen.innerHTML = z;
    memtab.innerHTML +="<br><br>";
};
}

function evl() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    try {
        if (screen.innerHTML.includes("=") || screen.innerHTML.includes("Error") || screen.innerHTML == 0) {
            screen.innerHTML += "";
            memtab.innerHTML += "";
        } else {
        var getText = screen.textContent; 
        getText = getText.replace( /×/g, "*");
        getText = getText.replace( /÷/g, "/");
        getText = getText.replace( /√/g, "Math.sqrt");

        var result = eval(getText);
        if (result.toString().length >=10) {
            result = result.toExponential(5);
    screen.innerHTML += "<br>" + "<span class='result'>=" + result + "</span>";
    memtab.innerHTML += "<br>" +  "<span class='result'>=" + result + "</span>" + "<br><br>";
        } else {
    screen.innerHTML += "<br>" + "<span class='result'>=" + result + "</span>";
    memtab.innerHTML += "<br>" +  "<span class='result'>=" + result + "</span>" + "<br><br>";
}; 
            
        };
} catch(error) {
    screen.innerHTML = "Error";
   memtab.innerHTML += "<br><br>";
}; 
}

function ch() {
    var memtab = document.getElementById("memtab");
    memtab.innerHTML = "";
}

function  del() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (screen.innerHTML == "Error" || screen.innerHTML == 0) {
        screen.innerHTML = 0;
    } else {
    screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length-1);
    memtab.innerHTML = memtab.innerHTML.substr(0, memtab.innerHTML.length-1);
};
}