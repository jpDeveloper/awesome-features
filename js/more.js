'use strict';

// JP API KEY: AIzaSyDGhmpW50cnZdzPdMNKD3SFzLIKojDGR6w

// Helper function to display JavaScript value on HTML page.
function showResponseJSON(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function googleApiClientReady() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded 
function onYouTubeApiLoad() {
  
    gapi.client.setApiKey('AIzaSyDGhmpW50cnZdzPdMNKD3SFzLIKojDGR6w');

    // search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        part: 'snippet', 
        q: q,
        maxResults: 10
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

function showResponse(response){
	console.log(response.items);
	var str = JSON.stringify(response.result);
	$('#search-container').html('<pre>' + str + '</pre>');

	var output ='';

	for(var i = 0; i < response.items.length; i++){
		console.log(i);
		var title = response.items[i].snippet.title;
		var itemId;
		if(response.items[i].id.videoId){
			var itemId = response.items[i].id.videoId;
			output += '<iframe width="560" height="315" src="//www.youtube.com/embed/' + itemId + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
		}else{
			var itemId = response.items[i].id.channelId;
			output += '<div class="channel-image"><img class="img-responsive" src="' + response.items[i].snippet.thumbnails.high.url + '"></div>';
		}
		
	}

	$('#video-titles').html(output);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}


// SVG Animations
(function(){
	var animatingSvg = Snap('#fanfair-svg');
	var	blackCircle = animatingSvg.select('#black-circle');
	var f = animatingSvg.select('#eff');

	// circleAnimation();

	function circleAnimation(){
		blackCircle.stop().animate({transform: 'r90,256,256'}, 1000, function(){
			blackCircle.attr({
				transform: 'rotate(0 256 256)'
			});

			circleAnimation();

		});

	}
	

	var clickOnCircle = function(){
		// blackCircle.animate({transform: 't210 0'}, 1000, mina.easeinout);
		// f.animate({transform: 't210 0'}, 1000, mina.easeinout);

		setTimeout(function(){
			blackCircle.animate({'cx': '1000'}, 3000, mina.easeinout, function(){
				blackCircle.animate({'cx': '106.3'}, 1000, mina.easeinout);
			});
		}, 1000);
		

	
		f.animate({transform: 't100 0'}, 1000, mina.elastic, function(){
			f.animate({transform: 't0 0'},1000, mina.elastic);

		});
	}

	animatingSvg.click(clickOnCircle);


	// FF Red Logo

	var redLogo = Snap('#red-logo');
	var whiteF = redLogo.select('#white-f');
	var redBox = redLogo.select('#red-box');
	var ffText = redLogo.select('#ff-text');

	var button = $('#fireworks');


	function disarmLogo(){
		whiteF.animate({transform: 't-150 -100'}, 2000, mina.elastic, function(){
			whiteF.animate({transform: 't0 0'},1000, mina.easeinout);
		});

		redBox.animate({transform: 'r360 0 0'}, 3000, mina.easeinout, function(){
			redBox.animate({transform: 'r0 0 0'}, 10, mina.easeinout);
		});

		ffText.animate({transform: 't0 100'}, 1500, mina.linear, function(){
			ffText.animate({transform: 't0 0'}, 3000, mina.bounce);
		});
	}

	disarmLogo();

	button.on('click', function(){
		redLogo.click(disarmLogo());
		console.log('disarm logo');
	});


	// Sun Rays
	var sun = Snap.select('#sun'); 
	var sunRays = sun.select('#rays');
	
	// Sun events
	raysAnimation();

	// Infinite animation for the sun rays
	function raysAnimation(){
		sunRays.stop().animate(
			{ transform: 'r90,256,256'}, // Basic rotation around a point. No frills.
			10000, // Nice slow turning rays
			function(){ 
				sunRays.attr({ transform: 'rotate(0 256 256)'}); // Reset the position of the rays.
				raysAnimation(); // Repeat this animation so it appears infinite.
			}
		);
	
	}

	// Line
	var rect = Snap().rect(0, 0, 10, 5);

	rect.attr({
		fill: '#6bdd6d'
	});	
	
	rect.animate({'width': '1500'}, 2000, function(){
		console.log('animation completed');
	});

	// Rotating FF Circles
	var balls = Snap('#rotating-cirlces');
	var center = balls.select('#black-c');
	var singleBalls = balls.select('#all-c');

	// ballsAnimation();

	// function ballsAnimation(){
	// 	center.stop().animate(
	// 		{ transform: 'r90,256,256'}, // Basic rotation around a point. No frills.
	// 		10000, // Nice slow turning balls
	// 		function(){ 
	// 			center.attr({ transform: 'rotate(0 256 256)'}); // Reset the position of the balls.
	// 			ballsAnimation(); // Repeat this animation so it appears infinite.
	// 		}
	// 	);
	
	// }

})();


