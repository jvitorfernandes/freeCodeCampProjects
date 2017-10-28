var temp;

function getWeatherInfo(latitude, longitude){

	var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + '&lon=' + longitude;

	$.getJSON(url, function(data){
		console.log(data);

		temp = data.main.temp;

		$("#location").append(data.name + ", " + data.sys.country);
		$("#description").text(data.weather[0].description);
		$('#icon').attr("src", data.weather[0].icon);
		$('#temp').text(data.main.temp + " ºC");
	});
}

function getLocation(){
    console.log('hi');
	if(navigator.geolocation){
        console.log('hi');
		navigator.geolocation.getCurrentPosition(function(position){
            
			var latitude = parseFloat(position.coords.latitude);
			var longitude = parseFloat(position.coords.longitude);
            
            console.log(latitude, longitude);

			getWeatherInfo(latitude, longitude);

		});
	}
}

$('#temp').on('click', function(){
	if($('#temp').html().endsWith('C')){
		temp = temp * 1.8 + 32;
		$('#temp').text(temp.toFixed(2) + " ºF");
	}else{
		temp = (temp - 32) / 1.8;
		$('#temp').text(temp.toFixed(2) + " ºC");
	}
});

getLocation();