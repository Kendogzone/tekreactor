var main = function() {

};

$(document).ready(main);


//------------This was for the navbar hover action-------
/*  $(".about").on("mouseover", function() {
    $(".aboutbar").fadeTo(200,1);
  });
  $(".about").on("mouseleave", function() {
    $(".aboutbar").fadeTo(200,0);
  });



  $(".work").hover(function() {
    $(".workbar").fadeTo(200,1);
  },function(){
    $(".workbar").fadeTo(200,0);
  });

  $(".contact").hover(function() {
    $(".contactbar").fadeTo(200,1);
  },function(){
    $(".contactbar").fadeTo(200,0);
  }); */




//REMEMBER this shit is all written in coffeescript so you will need to rewrite in normal js

/*changePage: (event, data) -> //this will change the URL slug when they click
  console.log event
  Pages.transition data, true
  history.pushState(null, document.title, $(@).attr('id')) if Pages.popping == false


transition: (data, popping) -> //this is the animation shit
	newWidth = $(window).width() * 0.75
	newHeight = $(window).height() * 0.75
	if !Pages.animating
		$('.corner-pic').removeClass().addClass('corner-pic').attr('style', '')
		$('#green-corner').css 'z-index', '5'
		$('#red-corner').css 'z-index', '6'
		$('#yellow-corner').css 'z-index', '4'
		$('.corner-pic').addClass('animated expand')
		$('.corner-pic').last().one 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', ->
			Pages.animating = false
			$('.main-content').html(data).removeClass('animated')
			console.log data
			console.log "data"
			$('.main-content').children().addClass('animated fadeIn')
			$('.corner-pic').css('height', "150%").css('width', "150%")
			$('.corner-pic').removeClass('animated expand')
			$('#green-corner').addClass('animated greenUnexpand')
			$('#red-corner').addClass('animated redUnexpand')
			$('#yellow-corner').addClass('animated yellowUnexpand')
			$('.corner-pic').hide().hide().show()
			$('.corner-pic').last().one 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', ->
				$('.corner-pic').attr('style', '')
				$('.corner-pic').css 'z-index', '2'
	Pages.animating = true*/
