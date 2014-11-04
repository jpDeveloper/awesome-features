console.log('icons on!');

var emailIcon = $('#email-jp');

emailIcon.tooltip({
	'show': true,
	'placement': 'top',
	'title': 'Tools available'
});



emailIcon.click(function(){

	var alertBox = $(this).after();
	console.log(alertBox);
	
		$(this).after(
		'<div class="alert alert-success alert-dismissable">'+
            '<button type="button" class="close" ' + 
                    'data-dismiss="alert" aria-hidden="true">' + 
                '&times;' + 
            '</button>' + 
            'Alert Box Example' + 
         '</div>'
		);
	

	
	

});
