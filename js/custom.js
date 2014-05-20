var startTime, endTime, startPress,
	myButton = document.getElementById('myButton'),
	display = $("#display"),
	pressDuration = 1000;

myButton.addEventListener('touchstart',function(event) { 
	display.show();
	startTime = new Date().getTime(); 

	// Visual feedback... 
    display.text("Hold...");

    // Start a timer for how long the button has been pressed
    startPress = window.setTimeout(pressHold, pressDuration);
},false);

myButton.addEventListener('touchmove',function(event) {

	// clear The timer if the user moves their finger
  	window.clearTimeout(startPress);  
  	display.text("");	
},false);

myButton.addEventListener('touchend',function(event) {
	endTime = new Date().getTime();
	if (endTime < startTime + 800) {
    	window.clearTimeout(startPress);  
    	display.text("");		
    } else {
    	display.fadeOut();
    }
},false);

function pressHold() {
	display.text("Press hold event!");	
}