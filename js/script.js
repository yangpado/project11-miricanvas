$(function(){
	/*swiper*/
	var swiper = new Swiper('.swiper-container',{
		sliderPerView:4, //화면에 표시되는 슬라이드 갯수
		spaceBetween:30, //슬라이드 간격
		autoplay:{ //자동재생
			delay:5000, //정지시간 
		},
		breakpoints:{ //반응형중단점
		600:{
			slidesPerView:1.4,
			spaceBetween:24,
		}
		768:{
			slidesPerView:2,
			spaceBetween:24,
		}
		960:{
			slidesPerView:3,
			spaceBetween:24,
		}
		
		}
		
	})
	/*bx slider*/
	$('.bxslider').bxSlider({
		mode:'horizontal', //슬라이드 이동 방향 설정
		auto:'true', //자동재생
		speed:500
		//https://bxslider.com
	})
	
	
	
});