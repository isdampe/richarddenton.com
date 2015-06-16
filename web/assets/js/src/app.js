$(document).ready( function() {

	$("[data-email=true]").attr("href", "mailto:isdampe+richarddenton@gmail.com");

	$("[data-validate=true]").on("submit", function(e){
		e.preventDefault();
		
		var pass = true, serialData;
		
		$("[data-required=true]", this).each(function(){
			if (! $(this).val() ) {
				pass = false;
			}
		});
		
		if ( pass === false ) {
			swal("Whoops", "Please fill in all the required fields to send your message.", "error");
			return false;
		}
		
		serialData = $(this).serialize();
		
		$("#loading").fadeIn(150);
		$.ajax({
			method: "POST",
			url: "nospam.php",
			data: serialData
		}).done(function(data){
			if ( data !== "1" ) {
				swal("Something broke", "My potato server couldn't send your message.\nSorry.\nPlease email isdampe [at] gmail [dot] com manually.", "error");
				$("#loading").fadeOut(150);
				return false;
			} else {
				swal("Success", "Your message was sent.", "success");
				$("#loading").fadeOut(150);
				return true;
			}
		}).fail(function(err, msg){
			swal("Something broke", "For some reason, I couldn't send your message.\nSorry.\nPlease email isdampe [at] gmail [dot] com manually.", "error");
			$("#loading").fadeOut(150);
			return false;
		});
		
		
	});
	
	var rocketActive = 0;

	$("#rocket").on("click", function(e){
		e.preventDefault();
		if ( rocketActive === 0 ) {
			rocketActive = 1;
			$("#rocket").addClass("shake-active");
			window.setTimeout(function(){
				rocketActive = 0;
				$("#rocket").removeClass("shake-active");
			}, 9125 );
		}

	});

	//Images.
	$("[data-images=true] img").on("click", function(e){
		e.preventDefault();
		var parent = $(this).parent();
		var att = $(parent).attr("data-active");
		if ( ! att || att === "inactive" ) {
			$(parent).children("img").addClass("full");
			$(parent).attr("data-active", "active");
		} else {
			$(parent).children("img").removeClass("full");
			$(parent).attr("data-active", "inactive");
		}
	});

});