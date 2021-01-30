// JavaScript source code

//roast info
function lightInfo() {
    document.getElementById('roast-info').innerHTML = 'Light, or Blonde roast coffee, is a mellow-tasting coffee that may have tasting notes of fruit, or nuts. Light roast coffees have a high acidity, and their light colour is due to being roasted for a shorter period of time. This is also the reason why light roast coffee has the highest caffeine content among the roast profiles.';
}

function medInfo() {
    document.getElementById('roast-info').innerHTML = 'Medium roast coffees are less acidic than light roast coffees, as they have been roasted for longer. The flavours of a medium roast coffee may resemble caramel, and these roasts tend to be more popular among coffee drinkers.';
}

function darkInfo() {
    document.getElementById('roast-info').innerHTML = 'Dark roast coffee contains the least amount of caffeine in the roast profile spectrum, and are the least acidic. The flavour of the dark roast can be best described as the flavour most people associate with coffee.';
}

//recipe
function showRecipe() {
    document.getElementById('recipe').style.display = "block";
}

function hideRecipe() {
    document.getElementById('recipe').style.display = "none";
}

//form
function output() {
    var submit = 0;

    var origins = document.getElementById("origin");
    var origin = origins.value;
    console.log(origin);

    var type;
    var checked = false;
    var types = document.getElementsByClassName('type');
    for (var i = 0; types[i]; ++i) {
        if (types[i].checked) {
            type = types[i].value;
            console.log(type);
            checked = true;
            submit += 1;
            break;
        }
    }
    if (checked == false) {
        document.getElementById("type-error").innerHTML = "Choose a bean type.";
    } else {
        document.getElementById("type-error").innerHTML = "";
    }

    var amount = document.getElementById("amount");
    var amount = amount.value;
    if (amount == "") {
        document.getElementById("amt-error").innerHTML = "Indicate the amount of beans required.";
    } else {
        submit += 1;
        console.log(amount);
        document.getElementById("amt-error").innerHTML = "";
    }

    var phone = document.getElementById("phone");
    var phone = phone.value;
    if (phone == "") {
        document.getElementById("phone-error").innerHTML = "Indicate phone number.";
    } else {
        submit += 1;
        console.log(phone);
        document.getElementById("phone-error").innerHTML = "";
    }

    var addr = document.getElementById("addr");
    var addr = addr.value;
    if (addr == "") {
        document.getElementById("addr-error").innerHTML = "Indicate address.";
    } else {
        submit += 1;
        console.log(addr);
        document.getElementById("addr-error").innerHTML = "";
    }

    var code = document.getElementById("code");
    var code = code.value;
    if (code == "") {
        document.getElementById("code-error").innerHTML = "Indicate postal code.";
    } else {
        submit += 1;
        console.log(code);
        document.getElementById("code-error").innerHTML = "";
    }

    //submission
    if (submit == 5) {
        document.getElementById("output-message").innerHTML = "Thank you for your order! We will contact you at " + phone + " to update you on your order.";
        document.getElementById("order").reset();
    }
}