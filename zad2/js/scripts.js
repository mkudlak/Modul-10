let arrowLeft = $('#arrow-left'),
arrowRight = $('#arrow-right'),
carouselList = $("#carousel ul"),
current = 0;



//Funkcja, która zaczeka na załadowanie drzewa DOM
$(function(){

    var carouselList = $("#carousel ul");

    function changeSlides() {
        carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
    }

    setInterval(changeSlides, 2000); //every 2 seconds, it performs a function to change the slide

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
});

