$(function() {

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });

  $('#floor-nav a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position 
    }, 500);
  });

  $(".single-item").slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: true,
    fade: true
  });

  var rwdMenu = $('#nav-menu'),
	switchPoint = 768,
	slideSpeed = 400;

	var menuSouce = rwdMenu.html();

	$(window).load(function(){

		function menuSet(){
			if(window.innerWidth < switchPoint){
				if(!($('#rwdMenuWrap').length)){
					$('body').prepend('<div id="menuOverlay"></div><div id="switchBtnArea"><a href="javascript:void(0);" id="switchBtn"></a></div><div id="rwdMenuWrap"></div>');
					$('#rwdMenuWrap').append(menuSouce);

					var switchBtn = $('#switchBtn'),
					btnLeft = parseInt(switchBtn.css('left')),
					menuWrap = $('#rwdMenuWrap'),
					menuWidth = menuWrap.outerWidth();

					switchBtn.on('click', function(){
						if($(this).hasClass('btnClose')){
							$(this).removeClass('btnClose').removeAttr('style');
							menuWrap.stop().animate({left:'-' + menuWidth + 'px'},slideSpeed);
							$('body').removeAttr('style');
						} else {
							$(this).addClass('btnClose').css({position:'fixed'}).stop().animate({left:menuWidth + btnLeft},slideSpeed);
							menuWrap.stop().animate({left:'0'},slideSpeed);
							$('body').css({position:'fixed'});
						}
					});
				}
			} else {
				$('#switchBtnArea,#rwdMenuWrap').remove();
				$('body').removeAttr('style');
			}
		}

		$(window).on('resize', function(){
			menuSet();
		});

		menuSet();
  });
  
});
