window.onload = function(){
	var right = document.getElementById('FixedRight');
	var moveNav = document.getElementById('moveNav');
	document.onscroll = function(){
		console.log(document.documentElement.scrollTop)
		if(document.documentElement.scrollTop>800){
			right.style.display = 'block';
		}else{
			right.style.display = 'none';
		}
		if(document.documentElement.scrollTop>600){
			moveNav.style.display = 'block';
		}else{
			moveNav.style.display = 'none';
		}
		
//		1024  1258  1492  1736
		var l1 = document.getElementsByClassName('List0')[0]
		var l2 = document.getElementsByClassName('List0')[1]
		var l3 = document.getElementsByClassName('List0')[2]
		var l4 = document.getElementsByClassName('List0')[3]
		var l5 = document.getElementsByClassName('List0')[4]
//		console.log(l1)
		if(document.documentElement.scrollTop<980){
			l1.style.borderBottom = "3px solid #000000";
			l2.style.borderBottom = "0";
			l3.style.borderBottom = "0";
			l4.style.borderBottom = "0";
			l5.style.borderBottom = "0";
		}
		if(document.documentElement.scrollTop>1000&&document.documentElement.scrollTop<1200){
			l2.style.borderBottom = "3px solid #000000";
			l1.style.borderBottom = "0";
			l3.style.borderBottom = "0";
			l4.style.borderBottom = "0";
			l5.style.borderBottom = "0";
		}
		if(document.documentElement.scrollTop>1258&&document.documentElement.scrollTop<1475){
			l3.style.borderBottom = "3px solid #000000";
			l2.style.borderBottom = "0";
			l1.style.borderBottom = "0";
			l4.style.borderBottom = "0";
			l5.style.borderBottom = "0";
		}
		if(document.documentElement.scrollTop>1490&&document.documentElement.scrollTop<1730){
			l4.style.borderBottom = "3px solid #000000";
			l2.style.borderBottom = "0";
			l3.style.borderBottom = "0";
			l1.style.borderBottom = "0";
			l5.style.borderBottom = "0";
		}
		if(document.documentElement.scrollTop>1745){
			l5.style.borderBottom = "3px solid #000000";
			l2.style.borderBottom = "0";
			l3.style.borderBottom = "0";
			l4.style.borderBottom = "0";
			l1.style.borderBottom = "0";
		}
	}
}

$(function(){
	for (var k=0;k<11;k++) {
		$.each(like,function(details,data){
		var detail = `<div class="l proDetail">
							<a href="#">
								<img src="img/detail/detail_product1.jpg" />
								<p class="header l">SEPHORACOLLECTION</p>
								<div class="blackLine l"></div>
								<div class="mainText l">丝芙兰快乐小萌猪玩趣小猪蹄十色眼影盘</div>
								<div class="price l"><span>￥</span><span style="font-size: 16px;">259</span></div>
							</a>
						</div>`
		$('.product').append(detail)
		})
	}
	
	console.log($('.toTop'))
	$('.toTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 800);
	})

	$( '.salemain' ).on( 'click', function() {
	    $( '.popupInfoContent' ).toggle();
	    
	    if($(".popupInfoContent").is(":hidden")){
	        $(".popup").css('backgroundPosition','-40px -18px');
	    }else{
	        $(".popup").css('backgroundPosition','-50px -18px');
	    }
	})
	
	$('.imgVideo').mousemove(function(event){
		console.log(event.pageX,event.pageY)
		console.log($('.imgVideo').offset().left,$('.imgVideo').offset().top);
		
		var nowleft = Math.floor(event.pageX-$('.imgVideo').offset().left)-62.5;
		var nowtop = event.pageY-$('.imgVideo').offset().top-62.5;
//		console.log(nowleft,nowtop)
		
		if(nowleft<0){
			nowleft = 0;
		}
		if(nowleft>195){
			nowleft = 195;
		}
		if(nowtop<0){
			nowtop = 0;
		}
		if(nowtop>195){
			nowtop = 195;
		}
		
		$('.square').css({
			'top':nowtop,
			'left':nowleft,
		})
		$('.bpicture').css({
			'top':-nowtop*3.84,
			'left':-nowleft*3.84,
		})
	})
	$('.imgVideo').mouseover(function(event){
		$('.square').css(
			'display','block',
		)
		$('.bigImgVideo').css(
			'display','block',
		)
	})	
	$('.imgVideo').mouseout(function(event){
		$('.square').css(
			'display','none',
		)
		$('.bigImgVideo').css(
			'display','none',
		)
	})	
	
	var val = $('.numOne').val();
	console.log(val)
	
	$('.topArrow').click(function(){
		console.log($('.numOne').val())
		val++;
		$('.icon2').css('backgroundPosition','-40px -18px');
		$('.numOne').val(val);
	})
	$('.bottomArrow').click(function(){
		console.log($('.numOne').val())
		val--;
		if(val<=1){
			val = 1;
			$('.icon2').css('backgroundPosition','-40px -42px');
		}
		$('.numOne').val(val);
	})

})