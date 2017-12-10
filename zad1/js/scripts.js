
//Zmiana CSS elementów poprzez jQuery
/*
var span = $("span");
span.each(function(index, element) {
});

span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});
*/

//Prosty sposob
$("span:even").css('color', 'red');



//Dodanie nowego elementu za pomocą jQuery
var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = ' <button class="btn" data-tmp="' + index + '"> Click me </button>'
    $(element).append(button)

});


//Dodanie event handlerów
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});