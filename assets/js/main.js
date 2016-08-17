// reloj analogico
var $secondHand = $(document).find('.seconds');
var $minuteHand = $(document).find('.mins');
var $hourHand = $(document).find('.hours');

setInterval(function() {
   var d = new Date();
  
  rotate($secondHand, 6*d.getSeconds());
  rotate($minuteHand, 6*d.getMinutes());
  rotate($hourHand, 30*(d.getHours()%12) + d.getMinutes()/2);

}, 1000);

function rotate($el, deg) {
  $el.css({'transform' : 'rotate('+ deg +'deg)'});
}

// --------------SCROLL----------------------
$(document).ready(initPage);

function initPage()
{
	$("#menu a").click(navigatePage);
}

function navigatePage(evt)
{
	evt.preventDefault();
	$("#menu a").removeClass('active');
	$(this).addClass('active');

	var section = $(this).attr('href');
	var objSection = $(section);

	TweenMax.to('body', 1.5, {
		scrollTo:{y:objSection.position().top},
		ease:Quart.easeOut
	});
	console.log(objSection.position().top);
}