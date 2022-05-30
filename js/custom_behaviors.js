//_____________________ FMASLIDESHOW _______________________________________
	$(document).ready(function() {
		
		// VARIABLES
		var slideshowArray = $("#slideshowHolder").find(".slide");
		var currentSlide = 0;
		
		// INITIALIZATION		
		$('#slideshowHolder .slide:gt(0)').hide();
		
		setInterval(function(){
			$(slideshowArray[currentSlide]).fadeOut(2000);
			if(currentSlide<slideshowArray.length-1){
				currentSlide++;
			} else {
				currentSlide=0;
			}
			$(slideshowArray[currentSlide]).fadeIn(2000);
		}, 5000);
	});
	


//_____________________ ART SLIDER _______________________________________
	$(document).ready(function() {
		
		// VARIABLES
		var slideshowArray = $("#artslideshowHolder").find(".slide");
		var currentSlide = 0;
		
		// INITIALIZATION		
		$('#artslideshowHolder .slide:gt(0)').hide();
		
		setInterval(function(){
			$(slideshowArray[currentSlide]).fadeOut(2000);
			if(currentSlide<slideshowArray.length-1){
				currentSlide++;
			} else {
				currentSlide=0;
			}
			$(slideshowArray[currentSlide]).fadeIn(2000);
		}, 5000);
	});
	
		
        
//_____________________ HIDENAV _______________________________________
		
		$(document).ready(function() {
		
			// VARIABLES
			var state = "up";
			
			// EVENT HANDLERS
			$(document).scroll(function() {
				var offset = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
				if(offset >= 632 && state=="up"){
					animateIn();
				};
				
				if(offset < 632 && state=="down"){
					animateOut();
				};
			});
			
			// FUNCTIONS
			function animateIn(){
				state = "down";
				$("#nav").stop(true);
				$("#nav").animate({top: '50'}, 500, 'easeOutExpo');
			};
			
			function animateOut(){
				state = "up";
				$("#nav").stop(true);
				$("#nav").animate({top: '0'}, 500, 'easeOutExpo');
			};	
		});
		
        
//_____________________ EASING _______________________________________
		
		$(document).ready(function() {
			
			// EVENT HANDLERS
			$('#nav a').click(function(event){
				event.preventDefault();
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-15
				}, 1500,'easeInOutExpo');
			});
	
		});


        
//_____________________ HIDECHILD _______________________________________
	
		$(document).ready(function() {
				
			// INITIALIZATION
			$(".object").children('.extra').animate({top: '306'}, 0);		   
	
			// EVENT HANDLERS
			$(".object").hover(
				function () {
					$(this).children('.extra').stop(true);
					$(this).children('.extra').animate({top: '0'}, 1000, 'easeOutExpo');
				},
				function () {
					$(this).children('.extra').stop(true);
					$(this).children('.extra').animate({top: '306'}, 750, 'easeOutExpo');
				}
			 );
        });
	
        
//_____________________ GALLERY SLIDERS _______________________________________
    
//_____________________ WEDDING _______________________________________
		
		$(document).ready(function() {
				
			// VARIABLES
			var slideArray = $("#sliderGW").find("div");
			var currentSliderObject = 0;
			var previousSliderButtonVisible = false;
			var nextSliderButtonVisible = true;
			
			// INITIALIZATION				
			$("#sliderPrevButtonGW").hide();
			
			// EVENT HANDLERS
			$("#sliderNextButtonGW").click(function (event) { 
				event.preventDefault();
				if(currentSliderObject<slideArray.length-1){
					var destination = '#'+$(slideArray[currentSliderObject+1]).attr("id");
					slideToDestination(destination);
					setCurrentSliderObject(1);
				};
			});		
			
			$("#sliderPrevButtonGW").click(function (event) { 
				event.preventDefault();
				if(currentSliderObject>0){
					var destination = '#'+$(slideArray[currentSliderObject-1]).attr("id");
					slideToDestination(destination);
					setCurrentSliderObject(-1);
				};
			});		
			
			// FUNCTIONS
			function slideToDestination(destination){
				$('#imageSliderGW').stop(true);		
				$('#imageSliderGW').animate({
					scrollLeft: $(destination).position().left
				}, 1000, 'easeInOutExpo');
			};
			
			function setCurrentSliderObject(indicator){
				if(indicator == 1){
					currentSliderObject++;
				} else if(indicator == -1){
					currentSliderObject--;
				};
				checkSliderButtons();
			};
			
			function checkSliderButtons(){
				if(currentSliderObject==0){
					if(previousSliderButtonVisible==true){
						previousSliderButtonVisible = false;
						$("#sliderPrevButtonGW").fadeOut(500); 
					};
				}else {
					if(previousSliderButtonVisible==false){
						previousSliderButtonVisible = true;
						$("#sliderPrevButtonGW").fadeIn(500); 
					};
				};
				if(currentSliderObject==slideArray.length-3){
					if(nextSliderButtonVisible==true){
						nextSliderButtonVisible = false;
						$("#sliderNextButtonGW").fadeOut(500); 
					};
				}else {
					if(nextSliderButtonVisible==false){
						nextSliderButtonVisible = true;
						$("#sliderNextButtonGW").fadeIn(500); 
					};
				};
			};
        });
		
        
//_____________________ SENIORS _______________________________________
		
		$(document).ready(function() {
				
			// VARIABLES
			var slideArray = $("#sliderGS").find("div");
			var currentSliderObject = 0;
			var previousSliderButtonVisible = false;
			var nextSliderButtonVisible = true;
			
			// INITIALIZATION				
			$("#sliderPrevButtonGS").hide();
			
			// EVENT HANDLERS
			$("#sliderNextButtonGS").click(function (event) { 
				event.preventDefault();
				if(currentSliderObject<slideArray.length-1){
					var destination = '#'+$(slideArray[currentSliderObject+1]).attr("id");
					slideToDestination(destination);
					setCurrentSliderObject(1);
				};
			});		
			
			$("#sliderPrevButtonGS").click(function (event) { 
				event.preventDefault();
				if(currentSliderObject>0){
					var destination = '#'+$(slideArray[currentSliderObject-1]).attr("id");
					slideToDestination(destination);
					setCurrentSliderObject(-1);
				};
			});		
			
			// FUNCTIONS
			function slideToDestination(destination){
				$('#imageSliderGS').stop(true);		
				$('#imageSliderGS').animate({
					scrollLeft: $(destination).position().left
				}, 1000, 'easeInOutExpo');
			};
			
			function setCurrentSliderObject(indicator){
				if(indicator == 1){
					currentSliderObject++;
				} else if(indicator == -1){
					currentSliderObject--;
				};
				checkSliderButtons();
			};
			
			function checkSliderButtons(){
				if(currentSliderObject==0){
					if(previousSliderButtonVisible==true){
						previousSliderButtonVisible = false;
						$("#sliderPrevButtonGS").fadeOut(500); 
					};
				}else {
					if(previousSliderButtonVisible==false){
						previousSliderButtonVisible = true;
						$("#sliderPrevButtonGS").fadeIn(500); 
					};
				};
				if(currentSliderObject==slideArray.length-3){
					if(nextSliderButtonVisible==true){
						nextSliderButtonVisible = false;
						$("#sliderNextButtonGS").fadeOut(500); 
					};
				}else {
					if(nextSliderButtonVisible==false){
						nextSliderButtonVisible = true;
						$("#sliderNextButtonGS").fadeIn(500); 
					};
				};
			};
        });
		

//_____________________ PORTRAIT _______________________________________
		
		$(document).ready(function() {
				
			// VARIABLES
			var slideArray = $("#sliderGP").find("div");
			var currentSliderObject = 0;
			var previousSliderButtonVisible = false;
			var nextSliderButtonVisible = true;
			
			// INITIALIZATION				
			$("#sliderPrevButtonGP").hide();
			
			// EVENT HANDLERS
			$("#sliderNextButtonGP").click(function (event) { 
				event.preventDefault();
				if(currentSliderObject<slideArray.length-1){
					var destination = '#'+$(slideArray[currentSliderObject+1]).attr("id");
					slideToDestination(destination);
					setCurrentSliderObject(1);
				};
			});		
			
			$("#sliderPrevButtonGP").click(function (event) { 
				event.preventDefault();
				if(currentSliderObject>0){
					var destination = '#'+$(slideArray[currentSliderObject-1]).attr("id");
					slideToDestination(destination);
					setCurrentSliderObject(-1);
				};
			});		
			
			// FUNCTIONS
			function slideToDestination(destination){
				$('#imageSliderGP').stop(true);		
				$('#imageSliderGP').animate({
					scrollLeft: $(destination).position().left
				}, 1000, 'easeInOutExpo');
			};
			
			function setCurrentSliderObject(indicator){
				if(indicator == 1){
					currentSliderObject++;
				} else if(indicator == -1){
					currentSliderObject--;
				};
				checkSliderButtons();
			};
			
			function checkSliderButtons(){
				if(currentSliderObject==0){
					if(previousSliderButtonVisible==true){
						previousSliderButtonVisible = false;
						$("#sliderPrevButtonGP").fadeOut(500); 
					};
				}else {
					if(previousSliderButtonVisible==false){
						previousSliderButtonVisible = true;
						$("#sliderPrevButtonGP").fadeIn(500); 
					};
				};
				if(currentSliderObject==slideArray.length-3){
					if(nextSliderButtonVisible==true){
						nextSliderButtonVisible = false;
						$("#sliderNextButtonGP").fadeOut(500); 
					};
				}else {
					if(nextSliderButtonVisible==false){
						nextSliderButtonVisible = true;
						$("#sliderNextButtonGP").fadeIn(500); 
					};
				};
			};
        });
		
        
//_____________________ COLORBOX _______________________________________
		
			$(document).ready(function() {

				$(".group1").colorbox({rel:'group1'});	
				$(".group2").colorbox({rel:'group2'});	
				$(".group3").colorbox({rel:'group3'});	
				$(".group4").colorbox({rel:'group4'});	
				$(".group5").colorbox({rel:'group5'});	
				$(".group6").colorbox({rel:'group6'});	
				$(".group7").colorbox({rel:'group7'});	
				$(".group8").colorbox({rel:'group8'});	
				$(".group9").colorbox({rel:'group9'});	
				$(".group10").colorbox({rel:'group10'});	
				$(".group11").colorbox({rel:'group11'});	
				$(".group12").colorbox({rel:'group12'});	
			
			});
			
