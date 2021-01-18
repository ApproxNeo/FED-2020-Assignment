// JavaScript source code



function setoutputs() {
    var name = document.getElementById("name").value

    var ratings = document.getElementsByClassName('rating');
    var rating;

    var feedback;

    for (var i = 0; i < ratings.length; i++) {
        if (ratings[i].checked) {
            rating = ratings[i].value;
            break;
        }
    }

    if (rating == 1 || rating == 2 || rating == 3) {
        feedback = " ,  thank you for your " + rating + " star rating, " + "we'll try our best to improve! :)"
    }

    else {
        feedback = " ,  thank you for your " + rating + " star rating, " + "please try our other recipes as well!"
    }
    document.getElementById("output").innerHTML = name + feedback;
}







