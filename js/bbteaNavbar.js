
var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
console.log('yes');
var toggledMenu = menuToggle.addEventListener("click", function () {
    // forEach is not supported in IE11
    // activeElements.forEach(function(e){
    //     e.classList.toggle("active");
    // });
    console.log("clicked");
    for (var activated = 0; activated < activeElements.length; activated++) {
        activeElements[activated].classList.toggle("active");
    }
})