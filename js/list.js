window.onload = function(){
	var sort = document.getElementsByClassName('fixedsort')[0];
	var right = document.getElementById('FixedRight');
	document.onscroll = function(){
		console.log(document.documentElement.scrollTop)
		if(document.documentElement.scrollTop>700){
			sort.style.top =0;
			right.style.display = 'block';
		}else{
			sort.style.top = '-70px';
			right.style.display = 'none';
		}
	}
}

$(function(){
	$.each(listBrand,function(index,data){
			var listBrand = `<li>
							<div class="pCont">
								<div class="pImg">
									<a href="./detail.html" target="_blank"><img src="${data.src}" style="width: 180px;height: 180px;"/></a>
									<div class="pBuy"><a style="color: #fff;" href="./detail.html">立即购买</a></div>
								</div>
								<div class="pTags">
									<span>新品</span>
								</div>
								<div class="brandEn">SEPHORACOLLECTION</div>
								<div class="productCn"><a href="#">${data.name}</a></div>
								<div class="productPrice">${data.price}</div>
							</div>
						</li>`
			$('.cateProd').append(listBrand)	
			
	})
	
	$('.foldMenu').bind({
		click:function(){
			var oc = $('.foldMenu').attr('oc');
			console.log(oc)
			if(oc==0){
				$('.foldMenu').attr('oc','1');
				$('.change').removeClass("last").addClass("lastChange");
				$('.changeA').text('精简选项');
				$('.changeEm').removeClass("changeEm1").addClass("changeEm2");
			}
			if(oc==1){
				$('.foldMenu').attr('oc','0');
				$('.change').removeClass("lastChange").addClass("last");
				$('.changeA').text('更多选项');
				$('.changeEm').removeClass("changeEm2").addClass("changeEm1");
			}
			
			
//			$('.change').toggleClass('lastChange last');
			
//			console.log($('.changeA').text());
		},
		mouseover:function(){
			$('.change').css('borderBottom','1px solid #e00');
		},
		mouseout:function(){
			$('.change').css('borderBottom','1px solid #aaa');
		}
	})
	
	$('.sBtn').click(function(){
		var s = $('.sBtn').index(this);
		console.log(s)
		$('.brandBtnCont').eq(s).css('display','block')
		$('.sBtn').eq(s).css('display','none')
		
	})
	$('.cancel').click(function(){
		var c = $('.cancel').index(this);
		console.log(c)
		$('.brandBtnCont').eq(c).css('display','none')
		$('.sBtn').eq(c).css('display','block')
	})

	
	console.log($('.toTop'))
	$('.toTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 800);
	})
	
})
