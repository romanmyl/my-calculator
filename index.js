
var resultMyCalcJs = 0;
var memtabBeforOperation = "";
var squarxy = "";
var argXpoq = "";
var argXsqr = "";

addEventListener("keydown", function(event) {
    if ((event.keyCode === 56 && event.shiftKey) || event.keyCode === 38) {
        operator("&#215;");
    } else if ((event.keyCode === 187 && event.shiftKey) || event.keyCode === 39) {
        operator("+");
    } else if (event.keyCode === 40 && event.shiftKey) {
        operBefor("&#8730;(");
    } else if (event.keyCode === 57 && event.shiftKey) {
        operBefor("(");
    }else if (event.keyCode === 48 && event.shiftKey) {
        operBrClose(")");
    } else if (event.keyCode === 46 && event.shiftKey) {
        ch();
    } else if (event.keyCode === 191 || event.keyCode === 40) {
        operator("&#247;");
    } else if (event.keyCode === 189 || event.keyCode === 37) {
        operMinus("-");
    } else if (event.keyCode === 191 || event.keyCode === 190) {
        dot(".");
    } else if (event.keyCode > 47 && event.keyCode < 58) {
        var i = event.keyCode - 48;
        math(i);
    } else if (event.keyCode === 13) {
        evl();
    } else if (event.keyCode === 46) {
        c();
    } else if (event.keyCode === 8) {
        del();
    };
})

function pi() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var pi = "<span>π</span>";
    var num = Number(screen.innerText);
    if (screen.innerHTML.endsWith(num)) {
         if (screen.innerHTML === "0") {
        screen.innerHTML = pi;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
            screen.scroollTop = 9999;
            memtab.scrollTop = 9999;
    } else {
        screen.innerHTML += "";
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
            screen.scroollTop = 9999;
            memtab.scrollTop = 9999;
    };
    } else if (screen.innerHTML.endsWith(pi)) {
        screen.innerHTML += "";
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
            screen.scroollTop = 9999;
            memtab.scrollTop = 9999;
} else if (screen.innerHTML === "0" || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
        screen.innerHTML = pi;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
            screen.scroollTop = 9999;
            memtab.scrollTop = 9999;
    } else {
        screen.innerHTML += pi;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
            screen.scrollTop = 9999;
            memtab.scrollTop = 9999;
};
}

    function devx() {
        var screen = document.getElementById("screen");
        var memtab = document.getElementById("memtab");
        var op1 = "<span>&#185;/(</span>";
        var op2 = "<span>)</span>";
        if (screen.innerHTML === "0" || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
            if ( screen.innerHTML.includes("=")) {
            screen.innerHTML = op1 + resultMyCalcJs +op2;
            memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
            } else {
             screen.innerHTML = op1;
             memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
         }; } else {
            screen.innerHTML = op1 + screen.innerHTML + op2;
            memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        };
    }

    function pow2() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var op1 = "<span>(</span>";
        var op2 = "<span>)&#178;</span>";
    if (screen.innerText.endsWith("²") == false && screen.innerText.endsWith("ˆ(") == false && screen.innerHTML != "0" && screen.innerHTML != "Error") {
        if (screen.innerHTML.includes("=")) {
            screen.innerHTML = op1 + resultMyCalcJs + op2;
            memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        } else {
            screen.innerHTML = op1 + screen.innerHTML + op2;
            memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
            } };
    }

    function powy() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var op1 = "<span>(</span>";
    var op2 = "<span>)&#710;(</span>";
    if (screen.innerText.endsWith("ˆ(") == false && screen.innerText.endsWith("²") == false && screen.innerHTML != "0" && screen.innerHTML != "Error") {
        if (screen.innerHTML.includes("=")) {
            argXpow = evl();
            screen.innerHTML = op1 + resultMyCalcJs + op2;
            memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        } else {
            argXpow = evl();
            screen.innerHTML = op1 + screen.innerHTML + op2;
            memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
            } };
    }

    function squary() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var op1 = "<span>[</span>";
    var op2 = "<span>]&#8730;(</span>";
    var op3 = "<span>)</span>";
    if (screen.innerText.endsWith("ˆ(") == false && screen.innerHTML != "0" && screen.innerHTML != "Error") {
        if (screen.innerHTML.includes("=")) {
            argXsqr = evl();
            screen.innerHTML = op1;
            squarxy = op2 + resultMyCalcJs + op3;
            memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        } else {
            argXsqr = evl();
            squarxy = op2 + screen.innerHTML + op3;
            screen.innerHTML = op1;
            memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
            } };
    }

function math(i) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var pi = "π";
   
    if (screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
        screen.innerHTML = i;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } else if ( screen.innerHTML === "0" && i == 0) {
        screen.innerHTML = i;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } else if (screen .innerHTML === "0" && i !== 0 ) {
        screen.innerHTML = i;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } else if (screen.innerText.endsWith(pi)) {
        screen.innerHTML += "";
        memtab.innerHTML += "";
    } else if (screen.innerText.includes("[")) {
        screen.innerHTML += i;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } else {
       screen.innerHTML += i;
       memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
   }; 
}

function dot(d) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (screen.innerHTML.endsWith(d) || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
        screen.innerHTML += "";
        memtab.innerHTML += "";
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } else if (screen.innerText.includes("[")) {
        screen.innerHTML += d;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } else {
        screen.innerHTML += d;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    };
}

function operator(opr) {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var op = "<span>" + opr + "</span>";
    if (screen.innerText.endsWith(opr) == false && screen.innerHTML != "0" && screen.innerHTML != "Error") {
        if (screen.innerHTML.includes("=")) {
        screen.innerHTML = resultMyCalcJs + op;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        } else if (screen.innerText.includes("[")) {
        screen.innerHTML += op;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } else {
        screen.innerHTML += op;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        } };
    }

    function operBefor(opr) {
        var screen = document.getElementById("screen");
        var memtab = document.getElementById("memtab");
        var op = "<span>" + opr + "</span>";
        if (screen.innerHTML === "0" || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
            if ( screen.innerHTML.includes("=")) {
        screen.innerHTML = op + resultMyCalcJs;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
            } else {
        screen.innerHTML = op;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
         }; } else if (screen.innerText.includes("[")) {
        screen.innerHTML += op;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } else {
        screen.innerHTML += op;
        memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        };
    }

    function operMinus(opr) {
        var screen = document.getElementById("screen");
        var memtab = document.getElementById("memtab");
        var op = "<span>" + opr + "</span>";
        if ( screen.innerHTML === "0" || screen.innerHTML == "Error" || screen.innerHTML.includes("=")) {
            if ( screen.innerHTML.includes("=")) {
                screen.innerHTML = resultMyCalcJs + op;
                memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
            }   else {
                screen.innerHTML = op;
                memtab.innerHTML = memtabBeforOperation + screen.innerHTML;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
           } } else if (screen.innerText.includes("[")) {
                screen.innerHTML += op;
                memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                    screen.scrollTop = 9999;
                    memtab.scrollTop = 9999;
    } else {
             screen.innerHTML += op;
             memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        };
    }

    function operBrClose(opr) {
        var screen = document.getElementById("screen");
        var memtab = document.getElementById("memtab");
        var op = "<span>" + opr + "</span>";
        var countBrickets = screen.innerText.split("(").length - screen.innerText.split(")").length;
        if ( screen.innerHTML !== "0" && screen.innerHTML !== "Error" && countBrickets > 0 && screen.innerHTML.includes("=") == false) {
         screen.innerHTML += op;
         memtab.innerHTML = memtabBeforOperation + screen.innerHTML + squarxy;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
     };
 }

 function c() {    
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    screen.innerHTML = "0";
    memtab.innerHTML = memtabBeforOperation;
    squarxy = "";
    argXpow = "";
    argXsqr = "";
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
}

function evl() {
    var scr = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    var degrad = (document.getElementById("deg").checked) ? "Math.PI/180" : 1;
    if ( scr.innerText.includes("[") && scr.innerText.includes("]") != true)  { 
        scr.innerHTML = memtab.innerHTML.substr(memtabBeforOperation.length);
        setTimeout(evl, 1000);
    } else {
    var screen = document.getElementById("screen");
    var getText = screen.innerText; 
          getText = getText.replace( /×/g, "*");
          getText = getText.replace( /÷/g, "/");
          getText = getText.replace( /¹/g, "1");
          getText = getText.replace( /π/g, "Math.PI");
          getText = getText.replace( /sin\(/g, "Math.sin\(" + degrad + "*");
          getText = getText.replace( /cos\(/g, "Math.cos\(" + degrad + "*");
          getText = getText.replace( /tan\(/g, "Math.tan\(" + degrad + "*");
          getText = getText.replace( /ctn\(/g, "1/Math.tan\(" + degrad + "*");

    var powx = getText.indexOf("ˆ");
    var squary = getText.slice(getText.indexOf("[")+1, getText.indexOf("]√"));
    var squarx = getText.slice(getText.indexOf("]√")+2);

          getText = (getText.includes("²")) ? "Math.pow(" + getText.replace( /²/g, "") + ", 2)" :  getText;
          getText = (getText.includes("ˆ")) ? "Math.pow(" + argXpow + ", " + getText.slice(powx+2, -1) + ")" : getText;
          getText = (getText.includes("]√")) ? "Math.pow(" + squarx + ", 1/(" + argXsqr + "))" : getText;    
          getText = getText.replace( /√/g, "Math.sqrt");

    var br = "<br>";
    var brso = "<br><span class='result'>";
    var sc = "</span>";
    try {
        if (screen.innerHTML.includes("=") || screen.innerHTML.includes("Error") || screen.innerHTML == 0) {
            screen.innerHTML += "";
            memtab.innerHTML += "";
            squarxy = "";
            argXpow = "";
            argXsqr = "";
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
        } else 
         var result = eval (getText);
        if (result.toString().length >=10) {
                result = (result >= 1) ? result.toPrecision(10) : result = (result < 1 && result >= 0.00001) ? result.toFixed(9) : result.toExponential(5);
                screen.innerHTML += (brso + "=" + result + sc);
                memtab.innerHTML += (brso + "=" + result + sc + br + br);
                memtabBeforOperation = memtab.innerHTML;
                resultMyCalcJs = result;
                squarxy = "";
                argXpow = "";
                argXsqr = "";
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
            } else {
                    screen.innerHTML += "<br><span class='result'>=" + result + "</span>";
                    memtab.innerHTML += "<br><span class='result'>=" + result + "</span><br><br>";
                    memtabBeforOperation = memtab.innerHTML;
                    resultMyCalcJs = result;
                    squarxy = "";
                    argXpow = "";
                    argXsqr = "";
               screen.scrollTop = 9999;
               memtab.scrollTop = 9999;
         } ;
    } catch (error) {
        screen.innerHTML = "Error";
        memtab.innerHTML = (memtab.lastChild.nodeName == "BR") ? memtab.innerHTML + "" : memtab.innerHTML + "<br><br>";
        memtabBeforOperation = memtab.innerHTML;
        squarxy = "";
        argXpow = "";
        argXsqr = "";
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    } }; 
} 

function ch() {
    var memtab = document.getElementById("memtab");
    squarxy = "";
    argXpow = "";
    argXsqr = "";
    memtab.innerHTML = "";
    memtabBeforOperation = "";
}

function  del() {
    var screen = document.getElementById("screen");
    var memtab = document.getElementById("memtab");
    if (screen.innerHTML == "Error" || screen.innerHTML == 0 || screen.innerText.length == 1 || screen.innerHTML == "√"  || screen.innerHTML == "-"  || screen.innerHTML == "("  || screen.innerHTML == ")" || screen.innerHTML.includes("=")) {
        screen.innerHTML = "0";
        memtab.innerHTML = memtabBeforOperation;
        squarxy = "";
        argXpow = "";
        argXsqr = "";
               screen.scrollTop = 9999;
               memtab.scrollTop = 9999;
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
        text = text.replace (/\[/g, so + "[" + sc);
        text = text.replace (/\]/g, so + "]" + sc);
        text = text.replace (/sin/g, so + "sin" + sc);
        text = text.replace (/cos/g, so + "cos" + sc);
        text = text.replace (/tan/g, so + "tan" + sc);
        text = text.replace (/ctn/g, so + "ctn" + sc);
        text = text.replace (/\π/g, so + "π" + sc);
        text = text.replace (/\¹\//g, so + "¹/" + sc);
        text = text.replace (/\²/g, so + "²" + sc);
        text = text.replace (/\ˆ/g, so + "ˆ" + sc);
        screen.innerHTML = text;
        memtab.innerHTML = memtabBeforOperation + text;
                screen.scrollTop = 9999;
                memtab.scrollTop = 9999;
    };
}

function aside() {
    var ap = document.getElementById("adpanel").style;
    var w = document.getElementById("wrap").style;
    var l = document.getElementById("sidebtnlabel").style;
    var b = document.getElementById("btns").style;
    var ul = document.getElementById("underline").style;
    if (ap.width === "") {
    ap.width = "89.7px"; 
    w.marginLeft = "100.3px";
    w.width = "808px";
    l.color = "rgb(0, 121, 140)";
    l.textShadow = "-2px 2px 6px #005959, 2px -2px 6px #005959";
    l.transform = "rotate(180deg)";
    b.boxShadow = "inset 0px 0 2px -2px rgba(5,5,5,.47)";
    ul.width = "102px";
} else if (ap.width === "89.7px") {
    ap.width = "";
    w.marginLeft = "190px";
    w.width = "718px";
    l.color = "rgb(25,25,25)";
    l.textShadow = "0 0 0 #005959";
    l.transform = "rotate(0deg)";
    b.boxShadow = "inset 0 2px rgba(72,72,72,1)";
    ul.width = "190px";
};
}