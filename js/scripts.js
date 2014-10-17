'use strict';
jQuery(document).ready(function(){
	console.log('On!');

	jQuery('ul.nav li.dropdown').hover(function(){
		jQuery('.dropdown-menu', this).fadeIn();
	}, function(){
		jQuery('.dropdown-menu', this).fadeOut('fast');
	});


	// Ajax and jQuery

	$('#items').find('a').on('click', function(e){
		e.preventDefault();

		var $desc = $('.description');

		switch($(this).attr('href')){
			case 'one.html':
				$desc.load('partials/one.html');
				break;

			case 'two.html':
				$desc.load('partials/two.html');
				break;

			case 'three.html':
				$desc.load('partials/three.html');
				break;
		}
	});



	$('#zipCode').keyup(function(e){
		var zipCode = $(this).val();

		if(zipCode.length === 5 && $.isNumeric(zipCode)){
			var requestURL = 'http://ZiptasticAPI.com/' + zipCode + '?callback=?';
			$.getJSON(requestURL, null, function(data){
				console.log(data);

				if(data.city)
					$('#city').val(data.city);
				 
				if(data.state)
					$('#state').val(data.state);
			});
		};
	
	});


	$("#example-vertical").steps({
	    headerTag: "h3",
	    bodyTag: "section",
	    transitionEffect: "slideLeft",
	    stepsOrientation: "vertical"
	});


	// Google Map
	
	function initialize() {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 7
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
	}
	initialize();

	function secondMap() {
        var mapOptions = {
          center: { lat: 45.400, lng: 45.666 },
          zoom: 7
        };
        var map = new google.maps.Map(document.getElementById('map-canvas-two'),
            mapOptions);
	}
	secondMap();


});
