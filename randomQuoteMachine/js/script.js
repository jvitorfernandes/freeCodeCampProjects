$( document ).ready(function() {

	$(window).on('load', function() {
		getQuote();	
	});

	function getQuote(){

		$('#quotediv').hide();
		$('#loadingDiv').show();

		var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

		$.getJSON(url, 
			function(data) {
	  			$("#quote").text(data.quoteText);

	  			if(data.quoteAuthor.trim() === ""){
	  				data.quoteAuthor = "Author Unknown";
	  			}

	  			$("#author").text(" — " + data.quoteAuthor);
	  			console.log(data);

	  			$('.button-primary').attr('href', "https://twitter.com/intent/tweet?text=" + data.quoteText + " — " + data.quoteAuthor);
				$('#loadingDiv').hide();
				$('.pageloading').fadeOut('slow');
				$('#quotediv').show();

			});
	}

	$("#new").on('click', function(){
		getQuote();
	});

});