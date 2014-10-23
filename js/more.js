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
        q: q
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
