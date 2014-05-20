var startTime, endTime, startPress, currentText,
	myButton = document.getElementById('myButton'),
	$myButton = $(myButton),
	display = $("#display"),
	pressDuration = 1000;

	var editFields = $(".editField");

myButton.addEventListener('touchstart',function(event) { 	

	// a reference for our timer
	startTime = new Date().getTime(); 

    // Start a timer for how long the button has been pressed
    startPress = window.setTimeout(pressHold, pressDuration);

    // Visual feedback... 
    display.show();
    display.text("Hold...");

},false);

myButton.addEventListener('mousedown',function(event) {

    // a reference for our timer
    startTime = new Date().getTime();

    // Start a timer for how long the button has been pressed
    startPress = window.setTimeout(pressHold, pressDuration);

    // Visual feedback...
    display.show();
    display.text("Hold...");

},false);



myButton.addEventListener('touchmove',function(event) {

	// clear The timer if the user moves their finger
  	window.clearTimeout(startPress);  
  	display.text("");	

},false);

myButton.addEventListener('touchend',function(event) {

	endTime = new Date().getTime();
	
	// If the button hasn't been pressed long enough, we clear the timer
	if (endTime < startTime + 800) {
    	window.clearTimeout(startPress);  
    	// $myButton.text(parseInt($myButton.text()) + 1);
    	display.text("");		
    } else {
    	// Fancy fadeout...
    	display.fadeOut();
    }
},false);

myButton.addEventListener('mouseup',function(event) {

    endTime = new Date().getTime();

    // If the button hasn't been pressed long enough, we clear the timer
    if (endTime < startTime + 800) {
        window.clearTimeout(startPress);
        // $myButton.text(parseInt($myButton.text()) + 1);
        display.text("");
    } else {
        // Fancy fadeout...
        display.fadeOut();
    }
},false);

function pressHold() {

	currentText = $myButton.text();
	$myButton.html('<input id="someField" class="editField" type="number" autofocus="true" value="' + currentText + '">');

	// myButton.unbind("touchstart");
	display.text("Press hold event!");

	$(".editField").blur(function () {
		currentText = $(this).val();
		$(this).parent().html(currentText);
	});
	$(".editField").keyup(function (e) {
		if (e.keyCode == 13) {		
			currentText = $(this).val();
			$(this).parent().html(currentText);
		}
	});
}




