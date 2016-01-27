$(document).ready(
	function() {	
		$('.logo_active').hover(
			function() {
				$(this).hide();
				$(this).next().show();
			},
			function() {
			}
		);
		$('.logo_hidden').hover(
			function() {
			},
			function() {
				$(this).hide();
				$(this).prev().show();
			}
		);
	}
)