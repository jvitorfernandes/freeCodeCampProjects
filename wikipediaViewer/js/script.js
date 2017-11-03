$( document ).ready(function() {

	$(window).on('load', function() {
		$('#box').show();
		$('.pageloading').fadeOut('slow');
		search();	
	});

	$(".button-primary").on('click', function(){
		$("#start").hide();
        search($('#pesquisaInput').val());
	});

	function search(term){
        
		 var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + term;

		 $.ajax({
             url: url,
             dataType: 'jsonp',
             type: 'get',
             headers: { 'Api-User-Agent': 'Example/1.0' },
             success: function(data) {
               console.log(data);
            }
             
         })

		
	}

});