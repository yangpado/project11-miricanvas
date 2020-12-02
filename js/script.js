$(function(){
	/* 모바일 버튼 토글 */
	$('.appBtn').on({click:function(){
		$('.bar').toggleClass('addAppbar');
		$('.mobile_nav').slideToggle(1000);	
	}})
	
	/* 카드뉴스 롤링 */
	var newsBanner=$('.news_wrap .news_wrap1');
	var current=0;
	var newsInterval;
	
	newsslide();
	
	function newsslide(){
		newsInterval=setInterval(function(){
			var prev=newsBanner.eq(current);
			newsMove(prev,0,'-100%');
			current++;
			if(current==newsBanner.size()){current=0}
			var next=newsBanner.eq(current);
			newsMove(next,'100%',0);
		},2000)
	}
	function newsMove(tg,start,end){
		tg.css('top',start).stop().animate({top:end},500)
	}	
	
	$('.news_wrap').hover(
		function(){
			clearInterval(newsInterval)
		},function(){
			newsslide();
		}
	)
	
	/* 스와이퍼 */
	 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
       autoplay: {
		delay: 5000,
	  },
	   breakpoints: {
		// when window width is >= 320px
		600: {
		  slidesPerView: 1.4,
		  spaceBetween: 24
		},
		// when window width is >= 480px
		768: {
		  slidesPerView: 2,
		  spaceBetween: 24
		},
		// when window width is >= 640px
		960: {
		  slidesPerView: 3,
		  spaceBetween: 24
		}
	  }
    });
	
	/* bxslider */
	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		speed:500
	});
	
	/* 배너슬라이드 */
	var slide=$('.bannerArea .area');
	var slideList=$('.bannerArea .area li');
	var slideListWidth=slideList.width();
	var setIntervalId;
	
	function left01(){
		$('.bannerArea ul>li:last').insertBefore('.bannerArea ul>li:first');
		slide.css({left:-slideListWidth}).stop().animate({left:0},500)
	}
	function right01(){
		slide.stop().animate({left:-slideListWidth},500,function(){
			$('.bannerArea ul>li:first').insertAfter('.bannerArea ul>li:last');
			slide.css({left:0})
		})
	}
	$('.container1 .bannerRightBtn').click(function(){right01();})
	$('.container1 .bannerLeftBtn').click(function(){left01();})
	
	bannerslide();
	function bannerslide(){
		setIntervalId=setInterval(function(){
			slide.stop().animate({left:-slideListWidth},500,function(){
			$('.bannerArea ul>li:first').insertAfter('.bannerArea ul>li:last');
			slide.css({left:0})
		})
		},2000);
	}
	$('.container1 .bannerLeftBtn, .container1 .bannerRightBtn, .container1 .bannerArea').hover(function(){
		clearInterval(setIntervalId)
	}, function(){
		bannerslide();
	})
	
	/* 버튼 클릭시 on */
	var buttonradius=$('.btn li')
	var line=$('.templat_line ul.cf li')
	buttonradius.click(function(){
		buttonradius.removeClass('on');
		$(this).addClass('on');
		var lines=$(this).index();
		line.removeClass('on')
		line.eq(lines).addClass('on');
		
	})
	
});