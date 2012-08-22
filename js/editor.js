$(document).ready(function() {
	var domain = null,
		link = null;

	// Wizard
	$('#domainNameModal').reveal();	

	// Event Listening
	$('#setDomainName').click(function() {
		domain = $('#domainname').val();
		$('.domain').text(domain);
		$('#domainNameModal .close-reveal-modal').trigger('click');

		$('#domainLinkModal').reveal();
	});

	$('#setDomainLink').click(function() {
		link = $('#domainlink').val();

		if((link.match('http://') || link.match('https://')) == null) {
			link = 'http://' + link;
		}

		$('.domainLink').attr('href', link);

		$('#domainLinkModal .close-reveal-modal').trigger('click');
	});

	$('#export').click(function() {
		var html = exportData();

		html = '<pre>' + htmlEntities(html) + '</pre>';

		$('body').fadeOut(function() {
			$('body').css('background', 'transparent').css('textAlign', 'left').html(html).fadeIn();
		});
	});

	/* ================================ Inline Editing ===============
	var isEditing = false;
	
	$('.editable').css('cursor', 'pointer').hover(function() {
		if(!$(this).hasClass('editing') && !isEditing) {
			$(this).css('backgroundColor', '#fffbb3');
		}
	}, function() {
		$(this).css('backgroundColor', 'transparent');
	}).click(function() {
		if(!$(this).hasClass('editing') && !isEditing) {
			isEditing = true;
			$(this).addClass('editing');
			$(this).attr('id', 'editing');
			var content = $.trim($(this).html());

			$(this).html('<textarea id="editor" cols="20" rows="10">' + content + '</textarea><input type="submit" value="Speichern" id="save">');
		}
	});

	$('body').on('click', '#save', function() {
		var html = $('#editor').val();
		
		$('#editing').html(html);
		$('#editing').removeClass('editing').attr('id', '');
		isEditing = false;

		return false;
	}); */

	
	function exportData() {
		$('#wizard').remove();
		return document.documentElement.outerHTML;
	}

	// From PHP.js
	function htmlEntities(str) {
 	   return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}

});