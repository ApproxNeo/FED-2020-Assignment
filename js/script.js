// JavaScript source code
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

//Tell that you have submitted your work!
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
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
} // end if


