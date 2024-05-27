$(document).ready(function() {
    $('#one').click(function() {
        document.calculator.display.value += 1;
    });

    $('#two').click(function() {
        document.calculator.display.value += 2;
    });

    $('#three').click(function() {
        document.calculator.display.value += 3;
    });

    $('#four').click(function() {
        document.calculator.display.value += 4;
    });

    $('#five').click(function() {
        document.calculator.display.value += 5;
    });

    $('#six').click(function() {
        document.calculator.display.value += 6;
    });

    $('#seven').click(function() {
        document.calculator.display.value += 7;
    });

    $('#eight').click(function() {
        document.calculator.display.value += 8;
    });

    $('#nine').click(function() {
        document.calculator.display.value += 9;
    });

    $('#zero').click(function() {
        document.calculator.display.value += 0;
    });

    $('#add').click(function() {
        document.calculator.display.value += '+';
    });

    $('#sub').click(function() {
        document.calculator.display.value += '-';
    });

    $('#mul').click(function() {
        document.calculator.display.value += '*';
    });

    $('#div').click(function() {
        document.calculator.display.value += '/';
    });

    $('#decimal').click(function() {
        document.calculator.display.value += '.';
    });

    $('#equal').click(function() {
        if (display.value == "") {
            alert("Please enter any numbers to calculate");
        } else {
            document.calculator.display.value = eval(document.calculator.display.value);
        }
    });

    $('#clear').click(function() {
        document.calculator.display.value = "";
    });
});