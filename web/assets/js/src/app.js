$(document).ready( function() {

	$("[data-email=true]").attr("href", "mailto:isdampe+richarddenton@gmail.com");

	var rocketActive = 0;

	$("#rocket").on("click", function(e){
		e.preventDefault();
		if ( rocketActive === 0 ) {
			rocketActive = 1;
			doSpaceOddity();
			$("#rocket").addClass("shake-active");
			window.setTimeout(function(){
				rocketActive = 0;
				$("#rocket").removeClass("shake-active");
			}, 9125 );
		}

	});

	$("#help").on("click", function(e){
		e.preventDefault();
		var text = $(this).attr("data-val");
		$("#title").fadeTo(50,0);
		window.setTimeout(function(){
			$("#title").html(text);
			$("#title").fadeTo(50,1);
		},50);
	});

});

function doSpaceOddity(){

	//Show the initial box.
	$("#space-oddity").show();

	i = 0;
	$("#space-oddity [data-lyric=true]").each(function(){
		var ty = this;
		var time = i * 1750;

		window.setTimeout(function(){
			$(ty).addClass("lyric-animation");
		}, time );

		window.setTimeout(function(){
			$(ty).removeClass("lyric-animation");
		}, time + 1750 );

		i++;
	});


};
