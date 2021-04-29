// TO STORE THE VALUE RETURN IN HISTORY FIELD

function getHistory() {
    return document.getElementById('history-value').innerText;
}


function printHistory(num) {
    document.getElementById('history-value').innerText = num;
}

// TO STORE THE VALUE RETURN IN OUTPUT FIELD

function getOutput() {
    return document.getElementById('output-value').innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById('output-value').innerText = num;
    }
    else {
        document.getElementById('output-value').innerText = getFormated(num);
    }
    return "my name is deepak yadav"
}

function getFormated(num) {
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value
}

function undoFormated(num) {
    return Number(num.replace(/,/g, ''));

}

var operator = document.getElementsByClassName("operator");


// later try to understand

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        //for clear btn
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        //for backspace
        else if (this.id == "backspace") {
            var output = undoFormated(getOutput()).toString();
            if (output) { //for some value
                output = output.substr(0, output.length - 1);
                // var deep = "deepak"
                // alert(deep.substr(0,5))
                printOutput(output)
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();

            if(output!=""){
                output = undoFormated(output);
                history = history + output;
                if(this.id == "="){
                    var result = eval(history)
                    printOutput(result)
                    printHistory("")
                }
            else{
                history = history + this.id;
                printHistory(history)
                printOutput("")
            }
            }
        }
    })
}


var number = document.getElementsByClassName("number");


// later try to understand

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = undoFormated(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output)
        }
    })
}




