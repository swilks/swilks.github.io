var widthIsLessThanPhoneSize = false;
var phoneSize = 480;

$(document).ready(
	function() {
		// tabSync()
		// resizeTabs();
	
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

// $(window).on("resize", function() {
// 	resizeTabs();
// });

// function resizeTabs() {
// 	if ($(window).width() <= phoneSize && !widthIsLessThanPhoneSize) {
// 		removeTabs();
// 		widthIsLessThanPhoneSize = true;
// 	} else if (widthIsLessThanPhoneSize && $(window).width() > phoneSize) {
// 		revertTabs();
// 		widthIsLessThanPhoneSize = false;
// 	}
// }

// function removeActiveLinks() {
//     $('.responsive-tabs li').each(function(){
//     	$(this).removeClass('active');
//     }); 
// }

// function tabSync(url) {
// 	var tabName = getTabName(url)
//     $('.responsive-tabs a[href=#'+ tabName +']').tab('show');
//     if ($(window).width() <= phoneSize) {
//     	if (typeof tabName == 'undefined' || tabName == "") {
// 			tabName = 'internships';
// 		}
// 	 	setupTabDropdown(tabName);
// 	}
// 	window.scrollTo(0, 0);

// 	$('.responsive-tabs a').on('shown', function (e) {
// 	    window.location.hash = e.target.hash;
// 	    window.scrollTo(0, 0);
// 	})
// }

// function setupTabDropdown (tabName) {
// 	var nameParts = tabName.split('-');
// 	var tabDisplayName = "";
// 	for (i in nameParts) {
// 		tabDisplayName += capitaliseFirstLetter(nameParts[i] + " ");
// 	}
// 	tabDisplayName = tabDisplayName.substring(0, tabDisplayName.length - 1); //remove the last letter
// 	$('#tab-dropdown a:first span').text(tabDisplayName);
// 	$('#tab-dropdown a[href=#' + tabName + ']').parent().hide();
// 	if (tabName != 'internships') {
// 		$('.responsive-tabs').children('li:first').removeClass('active')
// 	}
// }

// function capitaliseFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }


// function getTabName(url) {
// 	if (typeof url == 'undefined') {
// 		url = document.location.toString();
// 	}
// 	var tabName = url.split('#')[1];
// 	if (typeof tabName == 'undefined' || tabName == "") {
// 		tabName = 'internships';
// 	}
// 	return tabName;
// }

// function removeTabs(){
// 	var dropdownLink = '<a class="btn dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" style="color:black;" data-target="#" href="/resume.html"> <span> Internships </span> <b class="caret"></b></a>';
// 	$('.responsive-tabs').removeClass('nav-tabs');
// 	$('.responsive-tabs').wrap('<div class="dropdown" id="tab-dropdown" />').before(dropdownLink);
// 	$('.responsive-tabs').addClass('dropdown-menu').attr('role', 'menu').attr('aria-labelledby', 'dLabel');
// 	$('#dropdown-tab-seperator').show();
// 	tabName = getTabName();
// 	setupTabDropdown(tabName);
// 	$('#tab-dropdown ul').children().click(function (){
// 		removeActiveLinks();		
// 		$('.responsive-tabs li').show();
// 		$(this).hide();	
// 		$('#tab-dropdown a:first span').text($(this).text());
// 	});
// }

// function revertTabs(){
// 	$('#tab-dropdown ul').children().off('click');
// 	var tabName = getTabName();
// 	if (tabName == 'internships') {
// 		$('.responsive-tabs').children('li:first').addClass('active')
// 	}
// 	$('#tab-dropdown a:first').remove();
// 	$('#dropdown-tab-seperator').hide();
// 	$('#tab-dropdown ul li').show();
// 	$('.responsive-tabs').removeClass('dropdown-menu').removeAttr('role').removeAttr('aria-labelledby').addClass('nav-tabs');
// 	$('.responsive-tabs').unwrap();
// }