'use strict';

console.log('APIS page');

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);


// YouTube 

function listVideos(data){
	console.log(data);
	var output = '';
	for(var i = 0; i < data.feed.entry.length; i++){
		var title = data.feed.entry[i].title.$t;
		var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
		var description = data.feed.entry[i].media$group.media$description.$t;
		var id = data.feed.entry[i].id.$t.substring(38);
		
		output += '<div class="box">';
		output += '<h3>' + title + '</h3>';
		output += '<a href="#videoplayer" onclick="playVideo(\'' + id + '\', \'' + title + '\', \'' + description + '\')">';
		output += '<img class="img-responsive" src="' + thumbnail + '" alt="' + title + '">"';
		output += '</a>';
		output += '</div>';

	} //entries loop
	
	$('#videos').html(output);
} // listVideos

function playVideo(id, title, description){
	var output = '<iframe src="http://www.youtube.com/embed/' + id + '?wmode=transparent&amp;HD=0&amp;rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
	output += '<h3>' + title + '</h3>';
	output += '<p>' + description + '</p>';
	$('#myplayer').html(output);

}




