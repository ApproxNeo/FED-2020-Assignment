// JavaScript source code


function submission() {
    var cansubmit
    if (!(document.getElementById("t1").checked || document.getElementById("t2").checked || document.getElementById("t3").checked)) {
        document.getElementById("alert1").innerHTML = "Please choose one of the options :D";
        cansubmit = false;
    } else {
        document.getElementById("alert1").innerHTML = "";
        cansubmit = true;
    }
    if (!(document.getElementById("t4").checked || document.getElementById("t5").checked || document.getElementById("t6").checked)) {
        document.getElementById("alert2").innerHTML = "Please choose one of the options :D";
        cansubmit = false;
    } else {
        document.getElementById("alert2").innerHTML = "";
        cansubmit = true;
    }
    console.log(typeof(document.getElementById("nameinput").value));
    if (document.getElementById("nameinput").value.length == 0) {
        document.getElementById("alert3").innerHTML = "Please enter your name";
        cansubmit = false;
    } else {
        document.getElementById("alert3").innerHTML = "";
        cansubmit = true;
    }
    if (document.getElementById("emailinput").value.length == 0) {
        document.getElementById("alert4").innerHTML = "Please enter a email";
        cansubmit = false;
    } else {
        document.getElementById("alert4").innerHTML = "";
        cansubmit = true;
    }

    if (cansubmit) {
        document.getElementById("thanksyou").innerHTML = "Thank you for filling in this survey!";
    } else {
        document.getElementById("thanksyou").innerHTML = "";
    }
}

function expandContent() {
    document.getElementById("content").style.setProperty("height", "auto");
    document.getElementById("content").style.setProperty("opacity", "1");
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
}