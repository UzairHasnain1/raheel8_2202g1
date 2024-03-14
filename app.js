

function checkNumber(){
    var number = document.getElementById("number").value;
    document.getElementById("number").value = "";

    if(number % 2 == 0)
    {
        document.getElementById("message").innerText = "Number is Even";
    }
    else
    {
        document.getElementById("message").innerText = "Number is Odd";
    }
}


function convert()
{
    var tnumber = document.getElementById("tnumber").value;
    document.getElementById("tnumber").value = "";
    var result = ((5/9) * (tnumber - 32));
    document.getElementById("tmessage").innerText = result + "°C";
}