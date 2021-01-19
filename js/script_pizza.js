// JavaScript source code

//Tell that you have submitted your form!
$("form").submit(function (event) {
    $("span").text("Submitted Successfully.We will get back to you within 24 hours.").show().fadeOut(6000);
    event.preventDefault();
});




//Animation on scroll for map
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: '.map-container-6 '
})
    .setClassToggle('.map-container-6', 'show')
    .addTo(controller)



//The aside animation

var controller2 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: 'aside'
})
    .setClassToggle('aside', 'fadeIn')
    .addTo(controller2)

//
var controller3 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: '.form'
})
    .setClassToggle('.form', 'show')
    .addTo(controller3);

//
var controller4 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: 'main'
})
    .setClassToggle('main', 'fadeIn')
    .addTo(controller4)


if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() >300 ) {
            $('#navbar_top').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.fa-angle-right').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
} // end if


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}

