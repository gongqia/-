//轮播
window.onload = function(){
	var oLunbo = document.getElementById('lunbo');
	var oBtn = document.getElementsByClassName('Btn');
	var oBigPic = document.getElementsByClassName('bigPic');
	var oBefore = document.getElementById('before');
	var oAfter = document.getElementById('next');
	
	var oLunbos = document.getElementById('brandBodyLunbo');
	var oBtns = document.getElementsByClassName('sBtn');
	var oBigPics = document.getElementsByClassName('sbigPic');
	var oBefores = document.getElementById('sbefore');
	var oAfters = document.getElementById('snext');
//	console.log(oBtn);
	slider()
	function slider(){
		inter()
		var iNow = 0;
		var timer;
		
		for(var i=0;i<oBtn.length;i++){
			console.log(i);
			bind(i);
		}
		
		function bind(index){
			oBigPic[index].style.opacity = 0;
			oBigPic[0].style.opacity = 1;
			oBtn[index].onclick = function(){
				clearInterval(timer);
				iNow = index;
				console.log('点击'+index);
				changePic(index)
				inter()
			}
		}
		function changePic(){
			for(var j=0;j<oBigPic.length;j++){
				oBigPic[j].style.opacity = 0;
				oBtn[j].style.borderTop = '3px solid hsla(0,0%,100%,.4)';
				if(j==iNow){
					oBigPic[j].style.opacity = 1;
					oBtn[j].style.borderTop = '3px solid hsla(0,0%,100%,1)';
				}
				if(j==0){
					oLunbo.style.background = 'rgb(168,15,18)'
				}
			}
		}
		//定时器
		function inter(){
			timer = setInterval(function(){
				iNow++;
				if(iNow>oBigPic.length-1){
					iNow = 0;
				}
				console.log('自动'+iNow);
				changePic(iNow)
			},3000)
		}
		//向前
		oBefore.onclick = function(){
			clearInterval(timer);
			iNow --;
			if(iNow<0){
				iNow = oBigPic.length-1;
			}
			console.log('前'+iNow);
			changePic(iNow);
			inter();
		}
		//向后
		oAfter.onclick = function(){
			clearInterval(timer);
			iNow ++;
			if(iNow>oBigPic.length-1){
				iNow = 0;
			}
			console.log('后'+iNow);
			changePic(iNow);
			inter();
		}
	}
	
	//小轮播
	sliders()
	function sliders(){
		inter()
		var iNow = 0;
		var timer;
		
		for(var i=0;i<oBtns.length;i++){
			console.log(i);
			bind(i);
			oBigPics[i].style.opacity = 0;
			oBigPics[0].style.opacity = 1;
		}
		
		function bind(index){
			oBtns[index].onclick = function(){
				clearInterval(timer);
				iNow = index;
				console.log('点击'+index);
				changePic(index)
				inter()
			}
		}
		function changePic(index){
			for(var j=0;j<oBigPics.length;j++){
				oBigPics[j].style.opacity = 0;
				oBtns[j].style.borderTop = '3px solid hsla(0,0%,100%,.4)';
				if(j==index){
					oBigPics[index].style.opacity = 1;
					oBtns[index].style.borderTop = '3px solid hsla(0,0%,100%,1)';
				}
				if(j==0){
						oLunbo.style.background = 'rgb(168,15,18)';
				}
			}
		}
		//定时器
		function inter(){
			timer = setInterval(function(){
				iNow++;
				if(iNow>oBigPics.length-1){
					iNow = 0;
				}
				console.log('自动'+iNow);
				changePic(iNow)
			},2000)
		}
		oBefores.onclick = function(){
			clearInterval(timer);
			iNow --;
			if(iNow<0){
				iNow = oBigPics.length-1;
			}
			console.log('前'+iNow);
			changePic(iNow);
			inter();
		}
		oAfters.onclick = function(){
			clearInterval(timer);
			iNow ++;
			if(iNow>oBigPics.length-1){
				iNow = 0;
			}
			console.log('后'+iNow);
			changePic(iNow);
			inter();
		}
	}
	
	//吸顶效果
		var list = document.getElementById('FixedTop');
		var right = document.getElementById('FixedRight');
		var left = document.getElementById('FixedLeft');
		var color = document.getElementById('color');
		var l1 = document.getElementById('fixedLeftInfo1');
		var l2 = document.getElementById('fixedLeftInfo2');
		var l3 = document.getElementById('fixedLeftInfo3');
		var l4 = document.getElementById('fixedLeftInfo4');
		var l5 = document.getElementById('fixedLeftInfo5');
		var l6 = document.getElementById('fixedLeftInfo6');
		document.onscroll = function(){
			console.log(document.documentElement.scrollTop)
			if(document.documentElement.scrollTop>690){
				right.style.display = 'block';
				list.style.top = 0;
			}else{
				right.style.display = 'none';
				list.style.top = '-70px';
			}
			
			if(document.documentElement.scrollTop>1460){
				left.style.display = 'block';
			}else{
				left.style.display = 'none';
			}
			
			if(document.documentElement.scrollTop>1400 && document.documentElement.scrollTop<2300){
				l1.style.color = '#e00';
				l2.style.color = '#9d9d9d';
				l3.style.color = '#9d9d9d';
				l4.style.color = '#9d9d9d';
				l5.style.color = '#9d9d9d';
				l6.style.color = '#9d9d9d';
			}
			if(document.documentElement.scrollTop>2400 && document.documentElement.scrollTop<3000){
				l1.style.color = '#9d9d9d';
				l2.style.color = '#e00';
				l3.style.color = '#9d9d9d';
				l4.style.color = '#9d9d9d';
				l5.style.color = '#9d9d9d';
				l6.style.color = '#9d9d9d';
			}
			if(document.documentElement.scrollTop>3100 && document.documentElement.scrollTop<3600){
				l1.style.color = '#9d9d9d';
				l2.style.color = '#9d9d9d';
				l3.style.color = '#e00';
				l4.style.color = '#9d9d9d';
				l5.style.color = '#9d9d9d';
			}
			if(document.documentElement.scrollTop>3700 && document.documentElement.scrollTop<4200){
				l1.style.color = '#9d9d9d';
				l2.style.color = '#9d9d9d';
				l3.style.color = '#9d9d9d';
				l4.style.color = '#e00';
				l5.style.color = '#9d9d9d';
				l6.style.color = '#9d9d9d';
			}
			if(document.documentElement.scrollTop>4300 && document.documentElement.scrollTop<4800){
				l1.style.color = '#9d9d9d';
				l2.style.color = '#9d9d9d';
				l3.style.color = '#9d9d9d';
				l4.style.color = '#9d9d9d';
				l5.style.color = '#e00';
				l6.style.color = '#9d9d9d';
			}
			if(document.documentElement.scrollTop>4900 && document.documentElement.scrollTop<5400){
				l1.style.color = '#9d9d9d';
				l2.style.color = '#9d9d9d';
				l3.style.color = '#9d9d9d';
				l4.style.color = '#9d9d9d';
				l5.style.color = '#9d9d9d';
				l6.style.color = '#e00';
			}
			if(document.documentElement.scrollTop>5900){
				l1.style.color = '#9d9d9d';
				l2.style.color = '#9d9d9d';
				l3.style.color = '#9d9d9d';
				l4.style.color = '#9d9d9d';
				l5.style.color = '#9d9d9d';
				l6.style.color = '#9d9d9d';
			}
		}
}

//brand动态创建
$(function(){
	$.each(brand,function(index,data){
		var str = `<li class="brandBodyIcon">
					<a class="brandImg" href="./list.html"><img src="${data.src}"/></a>
					<div class="brandBodyIconHover">
						<div class="hoverBanner">${data.name}</div>
							<a class="check" href="./list.html" target="_blank">点击查看</a>
					</div>
				</li>`
//			console.log(str)
			$('.brandBodyIcons').append(str)	
			
	})
	//brand02动态创建
	for(var i = 0;i<8;i++){
		$.each(brand02,function(index,data){
			var str = `<li class="brand02BodyProduct">
						<a href="#">
							<div class="brand02BodyProductImg">
								<img src="${data.src}"/>
							</div>
							<div class="brand02Name1">${data.name1}</div>
							<div class="brand02Name2">${data.name2}</div>
							<div class="brand02Price">${data.price}</div>
						</a>
					</li>`
//			console.log(str)
			$('.brand02BodyContentR').append(str)
		})
		$.each(brand03,function(index,data){
			var str = `<li class="brand02BodyProduct">
						<a href="#">
							<div class="brand02BodyProductImg">
								<img src="${data.src}"/>
							</div>
							<div class="brand02Name1">${data.name1}</div>
							<div class="brand02Name2">${data.name2}</div>
							<div class="brand02Price">${data.price}</div>
						</a>
					</li>`
//			console.log(str)
			$('.brand03BodyContentR').append(str)
		})
		$.each(brand04,function(index,data){
			var str = `<li class="brand02BodyProduct">
						<a href="#">
							<div class="brand02BodyProductImg">
								<img src="${data.src}"/>
							</div>
							<div class="brand02Name1">${data.name1}</div>
							<div class="brand02Name2">${data.name2}</div>
							<div class="brand02Price">${data.price}</div>
						</a>
					</li>`
//			console.log(str)
			$('.brand04BodyContentR').append(str)
		})
		$.each(brand05,function(index,data){
			var str = `<li class="brand02BodyProduct">
						<a href="#">
							<div class="brand02BodyProductImg">
								<img src="${data.src}"/>
							</div>
							<div class="brand02Name1">${data.name1}</div>
							<div class="brand02Name2">${data.name2}</div>
							<div class="brand02Price">${data.price}</div>
						</a>
					</li>`
//			console.log(str)
			$('.brand05BodyContentR').append(str)
		})
		$.each(brand06,function(index,data){
			var str = `<li class="brand02BodyProduct">
						<a href="#">
							<div class="brand02BodyProductImg">
								<img src="${data.src}"/>
							</div>
							<div class="brand02Name1">${data.name1}</div>
							<div class="brand02Name2">${data.name2}</div>
							<div class="brand02Price">${data.price}</div>
						</a>
					</li>`
//			console.log(str)
			$('.brand06BodyContentR').append(str)
		})
		$.each(brand07,function(index,data){
			var str = `<li class="brand02BodyProduct">
						<a href="#">
							<div class="brand02BodyProductImg">
								<img src="${data.src}"/>
							</div>
							<div class="brand02Name1">${data.name1}</div>
							<div class="brand02Name2">${data.name2}</div>
							<div class="brand02Price">${data.price}</div>
						</a>
					</li>`
//			console.log(str)
			$('.brand07BodyContentR').append(str)
		})
		var str = `<li><a class="l" href="">
						<img src="img/index/brand_icon2.png"/>
					</a><em class="l"></em></li>`
//			console.log(str)
			
		if(i==7){
			var str = `<li><a class="r" href="">
						<img src="img/index/brand_icon2.png"/>
					</a></li>`
		}
		$('.brand02FooterContentBand').append(str)
	}
	
	for (var j=0;j<20;j++) {
		$.each(like,function(index,data){
		var str = `<div class="guesyoulikeInfoList">
						<div class="guesyoulikeInfoListBrand">
							<a href="#"><img src="${data.src}"/></a>
						</div>
						<div class="guesyoulikename1">${data.name1}</div>
						<a class="guesyoulikename2" href="#">${data.name2}</a>
						<div class="guesyoulikePrice">${data.price}</div>
					</div>`
		$('.guesyoulikeInfoContent').append(str)
		})
	}
	
	//回到顶部
	console.log($('.toTop'))
	$('.toTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 800);
	})
	$('#fixedLeftInfo1').click(function(){
        $('html,body').animate({
            scrollTop: 1860
        }, 800);
	})
	$('#fixedLeftInfo2').click(function(){
        $('html,body').animate({
            scrollTop: 2550
        }, 800);
	})
	$('#fixedLeftInfo3').click(function(){
        $('html,body').animate({
            scrollTop: 3240
        }, 800);
	})
	$('#fixedLeftInfo4').click(function(){
        $('html,body').animate({
            scrollTop: 3920
        }, 800);
	})
	$('#fixedLeftInfo5').click(function(){
        $('html,body').animate({
            scrollTop: 4610
        }, 800);
	})
	$('#fixedLeftInfo6').click(function(){
        $('html,body').animate({
            scrollTop: 5280
        }, 800);
	})

})   
