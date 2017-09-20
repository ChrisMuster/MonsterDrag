$(document).ready(function(){
//code to drag eyes around the screen, for fun
	$("#eye1").draggable();
	$("#eye5").draggable();
	$("#scaryeyes").draggable();

	$("#grin").draggable();

	function grinny() {
		$("#grin").fadeIn(2000).fadeOut(2000).fadeIn(2000);
	}

	$("#grin").click(function() {
		grinny();
	});
	

});//end doc.onready function