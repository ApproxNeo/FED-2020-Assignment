// JavaScript source code

function fadeImage(I) {
    var Image = '#' + I; //the id of each image
    $(Image).fadeIn();
    $(Image).fadeOut(3000, function() { fadeImage((I == 1) ? 4 : I - 1); });
} 



