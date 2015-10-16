$(document).ready(function() {
	
	/* jQuery Flipster */
	$(".flipster").flipster({ style: 'carousel', start: 0, enableMousewheel: false});
	
	/* Alert heading click function */
	$('#alert').click(function() {
		alert('Hello, World!');
	});
	
	/* Scroll function */
	$(document).scroll(function() {
		
		/* Get height of elements */
		var headerHeight = $("header").outerHeight(true);
		var aboutmeHeight = $(".about_me").outerHeight(true);
		var skillsHeight = $(".skills").outerHeight(true);
		
		if ($(this).scrollTop() > (headerHeight + aboutmeHeight + skillsHeight - 2)) {
			stickyNavbar('fixed');
			setActive(3);
		} else if ($(this).scrollTop() > (headerHeight + aboutmeHeight - 2)) {
			stickyNavbar('fixed');
			setActive(4);
		} else if ($(this).scrollTop() > headerHeight - 2) {
			stickyNavbar('fixed');
			setActive(5);
		} else {
			stickyNavbar('static');
			setActive(1);
		}
	});
	
	/* Contact window */
	
	$('#contact').click(function(){
		$('.contact_div_bg').show();
	});
	
	$('.cross').click(function(){
		$('.contact_div_bg').hide();
	});
	
	function setActive(/* number of nav ul li:nth-child to be active */ n){
		$("nav ul li").removeClass('active');
		var string = "nav ul li:nth-child(" + n + ")";
		$(string).addClass('active');
	}
	
	function stickyNavbar(/* 'fixed or static' */ position){
		if(position == 'fixed'){
			$(".navigation").css('position', 'fixed');
			$(".navigation").css('top','0');
		} else {
			$(".navigation").css('position', 'static');
		}
	}
});
