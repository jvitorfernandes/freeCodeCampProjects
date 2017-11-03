$( document ).ready(function() {

	$(window).on('load', function() {
		$('#box').show();
		$('.pageloading').fadeOut('slow');
	});

	$("#pesquisaBotao").on('click', function(){
        callSearch($('#pesquisaInput').val());
	});
    
    $("#pesquisaBotao2").on('click', function(){
        callSearch($('#pesquisaInput2').val());
	});

    
    function callSearch(term){
        $("#start").hide();
        $('.pageloading').show();
        search(term);
        console.log('hi');
    }

	function search(term){
        
		 var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + term;

		 $.ajax({
             url: url,
             dataType: 'jsonp',
             type: 'get',
             headers: { 'Api-User-Agent': 'Example/1.0' },
             success: function(data) {
                 
                 var resultados  = data.query.search;
                 
                 $(".resultados").empty();
                 $(".resultados").append('<hr>')
                 for(i=0; i<resultados.length; i++){
                     $(".resultados").append('<div class=resultado>');
                     $('.resultado:last-child').html('<a class="link"><h6><strong>' 
                                                     + resultados[i].title + '</strong></h6></a><p>' + resultados[i].snippet + '</p>');
                     $('a:last').attr('href', 'https://en.wikipedia.org/wiki/' + resultados[i].title);
                     $('a:last').attr('target', '_blank');
                     $(".resultados").append('<hr>');
                 }
                 $('.pageloading').hide();
                 $('#search').fadeIn();
                 
            }
             
         })

		
	}

});