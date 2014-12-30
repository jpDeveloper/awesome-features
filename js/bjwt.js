'use strict';

$(document).ready(function(){

	console.log('Document Ready');

	function blink(){
	    $('#arrow-up').delay(100).fadeTo(1000,0).delay(100).fadeTo(1000,1, blink);
	}
	

	function displayTigers(){

		arrowUp.remove();

		tiger1.fadeTo(1000, 1, function(){
			$(this).fadeTo(500,0, function(){
				tiger2.fadeTo(1000, 1, function(){
					$(this).fadeOut(500, 0, function(){
						tiger3.fadeTo(500, 1, function(){
							$(this).hide('pulsate', finalAmination);
						});
					});
				});
			});
		});

	}

	function finalAmination(){
		$('body').addClass('tiger-bg');
		
	}

	var logoBox = $('.logo-box');
	var animationBox = $('#animation-box');
	var tiger1 = $('#tiger-1');
	var tiger2 = $('#tiger-2');
	var tiger3 = $('#tiger-3');
	var arrowUp = $('#arrow-up');
	var tigerParagraph = $('.t-paragraph');

	$('.logo-top').fadeIn(3000, function(){
		$('.logo-bottom').fadeIn('fast');
		arrowUp.fadeIn('fast', blink);
	});

	$('.logo-bottom').on('click', function(){
		logoBox.fadeOut('slow');
		animationBox.delay(1000).show('slide', displayTigers);
		

	});
	
});