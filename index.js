
var resultMyCalcJs = 0;
var memtabBeforOperation = "";

addEventListener("keydown", function(event) {
    if ((event.keyCode == 56 && event.shiftKey) || event.keyCode == 38) {
        operator("&#215;");
    } else if ((event.keyCode == 187 && event.shiftKey) || event.keyCode == 39) {
        operator("+");
    } else if (event.keyCode == 40 && event.shiftKey) {
        operBefor("&#8730;(");
    } else if (event.keyCode == 57 && event.shiftKey) {
        operBefor("(");
    }else if (event.keyCode == 48 && event.shiftKey) {
        operBrClose(")");
    } else if (event.keyCode == 46 && event.shiftKey) {
        ch();
    } else if (event.keyCode == 191 || event.keyCode == 40) {
        operator("&#247;");
    } else if (event.keyCode == 189 || event.keyCode == 37) {
        operMinus("-");
    } else if (event.keyCode == 191 || event.keyCode == 190) {
        dot(".");
    } else if (event.keyCode > 47 && event.keyCode < 58) {
        var i = event.keyCode - 48;
        math(i);
    } else if (event.keyCode == 13) {
        evl();
    } else if (event.keyCode == 46) {
        c();
    } else if (event.keyCode == 8) {
        del();
    };
})

function math(i) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
        screen.innerHTML = i;
        memtab.innerHTML += i;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
    } else if ( screen.innerHTML == 0 && i == 0) {
        screen.innerHTML = i;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
    } else if (screen .innerHTML == 0 && i !== 0 ) {
        screen.innerHTML = i;
        memtab.innerHTML += i;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
    } else {
       screen.innerHTML += i;
       memtab.innerHTML += i;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
   }; 
}

function dot(d) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (screen.innerHTML.endsWith(d) || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
        screen.innerHTML += "";
        memtab.innerHTML += "";
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
    } else {
        screen.innerHTML += d;
        memtab.innerHTML += d;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
    };
}

function operator(opr) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var op = "<span>" + opr + "</span>";
    if (screen.innerHTML != "0" && screen.innerHTML != "Error") {
        if (screen.innerHTML.includes("=")) {
            screen.innerHTML = resultMyCalcJs + op;
            memtab.innerHTML = memtabBeforOperation + resultMyCalcJs + op;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
        }
        else {
            screen.innerHTML += op;
            memtab.innerHTML += op;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
        } } ;
    }

    function operBefor(opr) {
        var screen = document.getElementById("screen");
        var memtab = document.getElementById("memtab");
        var op = "<span>" + opr + "</span>";
        if ( screen.innerHTML == "0" || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
            if ( screen.innerHTML.includes("=")) {
                screen.innerHTML = op + resultMyCalcJs;
                memtab.innerHTML = memtabBeforOperation + op + resultMyCalcJs;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
            } else {
             screen.innerHTML = op;
             memtab.innerHTML += op;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
         }; } else {
            screen.innerHTML += op;
            memtab.innerHTML += op;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
        }
    }

    function operMinus(opr) {
        var screen = document.getElementById("screen");
        var memtab = document.getElementById("memtab");
        var op = "<span>" + opr + "</span>";
        if ( screen.innerHTML == "0" || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
            if ( screen.innerHTML.includes("=")) {
                screen.innerHTML = resultMyCalcJs + op;
                memtab.innerHTML = memtabBeforOperation + resultMyCalcJs + op;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
            }   else {
               screen.innerHTML = op;
               memtab.innerHTML += op;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
           } } else {
            screen.innerHTML += op;
            memtab.innerHTML += op;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
        } 
    }

    function operBrClose(opr) {
        var screen = document.getElementById("screen");
        var memtab = document.getElementById("memtab");
        var op = "<span>" + opr + "</span>";
        var countBrickets = screen.innerText.split("(").length - screen.innerText.split(")").length;
        if ( screen.innerHTML !== "0" && screen.innerHTML !== "Error" && countBrickets > 0 && screen.innerHTML.includes("=") == false) {
         screen.innerHTML += op;
         memtab.innerHTML += op;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
     };
 }

 function c() {    
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    screen.innerHTML = "0";
    memtab.innerHTML = memtabBeforOperation;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
}

function evl() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var getText = screen.innerText; 
          getText = getText.replace( /×/g, "*");
          getText = getText.replace( /÷/g, "/");
          getText = getText.replace( /√/g, "Math.sqrt");
    
    var br = "<br>";
    var brso = "<br><span class='result'>";
    var sc = "</span>";
    try {
        if (screen.innerHTML.includes("=") || screen.innerHTML.includes("Error") || screen.innerHTML == 0) {
            screen.innerHTML += "";
            memtab.innerHTML += "";
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
        } else 
         var result = eval (getText);
        if (result.toString().length >=10) {
                result = result.toExponential(5);
                screen.innerHTML += (brso + "=" + result + sc);
                memtab.innerHTML += (brso + "=" + result + sc + br + br);
                memtabBeforOperation = memtab.innerHTML;
                resultMyCalcJs = result;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
            } else {
                    screen.innerHTML += "<br><span class='result'>=" + result + "</span>";
                    memtab.innerHTML += "<br><span class='result'>=" + result + "</span><br><br>";
                    memtabBeforOperation = memtab.innerHTML;
                    resultMyCalcJs = result;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
            } ;
    } catch (error) {
        screen.innerHTML = "Error";
        memtab.innerHTML = (memtab.lastChild.nodeName == "BR") ? memtab.innerHTML + "" : memtab.innerHTML + "<br><br>";
        memtabBeforOperation = memtab.innerHTML;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
    }; 
} 

function ch() {
    var memtab = document.getElementById("memtab");
    memtab.innerHTML = "";
}

function  del() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (screen.innerHTML == "Error" || screen.innerHTML == 0 || screen.innerText.length == 1 || screen.innerHTML == "√"  || screen.innerHTML == "-"  || screen.innerHTML == "("  || screen.innerHTML == ")" || screen.innerHTML.includes("=")) {
        screen.innerHTML = "0";
        memtab.innerHTML = memtabBeforOperation;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
    } else {
        var text = screen.innerText.substr(0, screen.innerText.length-1);
        var so = "<span>";
        var sc = "</span>";
        text = text.replace (/\+/g, so + "+" + sc);
        text = text.replace (/\-/g, so + "-" + sc);
        text = text.replace (/\×/g, so + "×" + sc);
        text = text.replace (/\÷/g, so + "÷" + sc);
        text = text.replace (/\√/g, so + "√" + sc);
        text = text.replace (/\(/g, so + "(" + sc);
        text = text.replace (/\)/g, so + ")" + sc);
        screen.innerHTML = text;
        memtab.innerHTML = memtabBeforOperation + text;
                document.getElementById("screen").scrollTop = 9999;
                document.getElementById("memtab").scrollTop = 9999;
    };
}

