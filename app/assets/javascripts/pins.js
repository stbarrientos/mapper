function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
	$.ajax({
	  url: "/pins/",
	  type: "GET",
	  dataType: "json",
	  success: function(data){
			pins = '';
	    for (var i = 0; i < data.length; i++){
	    	var location = new google.maps.LatLng(data[i].lat, data[i].long);
				
				var newMarker = new google.maps.Marker({
  				position: location,
  				map: map
				});
	    }
	  }
	});
	google.maps.event.addListener(map, 'click', function(event) {
		$.ajax({
			url: '/pins',
			type: 'POST',
			dataType: 'json',
			data: {pin: {lat: event.latLng.lat(), long: event.latLng.lng() }},
			success: function(data){
			},
			failure: function(response){
			}
		})
		$.ajax({
	  	url: "/pins/",
	  	type: "GET",
	  	dataType: "json",
	  	success: function(data){
				pins = '';
	  	  for (var i = 0; i < data.length; i++){
	  	  	var location = new google.maps.LatLng(data[i].lat, data[i].long);
		
					var newMarker = new google.maps.Marker({
  					position: location,
  					map: map
					});
	    	}
	  	}
		});
	});
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;