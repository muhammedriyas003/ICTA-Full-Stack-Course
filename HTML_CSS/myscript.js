function w() {

    var n = parseInt(document.getElementById("num1").value);
    var m = parseInt(document.getElementById("num2").value);
    var k = document.getElementById("sel").value;


    if (k == "add") {
        x = n + m;

    }


    if (k == "sub") {
        x = n - m;


    }

    if (k == "mul") {
        x = n * m;


    }

    if (k == "divi") {
        x = n / m;


    }


    document.getElementById("result").innerHTML = x;
    console.log(x);

}