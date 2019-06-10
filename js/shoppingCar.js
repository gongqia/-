$(function(){
	$.each(car,function(index,data){
		var carProduct = `<div class="longBoxContentLi l">
						<div class="longBoxContentLiImg">
							<img src="${data.src1}"/>
						</div>
						<div class="longBoxContentLiInfo">
							<div class="infoTag">${data.name1}</div>
							<div class="infoName">${data.name2}</div>
							<div class="infoPrice">${data.price}</div>
						</div>
					</div>`
//			console.log(str)
			$('.longBoxContent').append(carProduct)	
			
	})
	//商品件数加减
	$('.itemInfoUnion2ModuleI2').click(function(){
		var add = $('.itemInfoUnion2ModuleI2').index(this);
		console.log(add)
		var val = $('.itemInfoUnion2ModuleNum').eq(add).val();
		console.log('+++++++'+val)
		val++
		var SumPrice = $('.sumNum').eq(add).text();
		var UnitPrice = $('.itemInfoUnionPice').eq(add).text();
		console.log(SumPrice,UnitPrice)
		var price = val*UnitPrice+'.00';
		console.log(price)
		$('.sumNum').eq(add).text(price);
		$('.itemInfoUnion2ModuleI1').eq(add).css('color','#474747');
		$('.itemInfoUnion2ModuleNum').eq(add).val(val);
	})
	
	$('.itemInfoUnion2ModuleI1').click(function(){
		var min = $('.itemInfoUnion2ModuleI1').index(this);
		console.log(min)
		var val = $('.itemInfoUnion2ModuleNum').eq(min).val();
		val--;
		console.log('------'+val)
		if(val<2){
			val = 1;
			$('.itemInfoUnion2ModuleI1').eq(min).css('color','#bdbdbd');
		}
		var SumPrice = $('.sumNum').eq(min).text();
		var UnitPrice = $('.itemInfoUnionPice').eq(min).text();
		console.log(SumPrice,UnitPrice)
		var price = val*UnitPrice+'.00';
		console.log('------'+price);
		$('.itemInfoUnion2ModuleNum').eq(min).val(val);
		$('.sumNum').eq(min).text(price);
	})
	
	//删除
	$('.delete').click(function(){
		var a = confirm('确定删除这件商品吗？')
		if(a==true){
			var index = $('.delete').index(this);
			console.log(index)
			$('.productBodyItemContent').eq(index).remove() 
		}else{
			console.log(111);
		}
	})
	//批量删除
	$('.checkBox').click(function(){
		var index = $('.checkBox').index(this);
		console.log(index)
		if(index==0||index==4){
			$('.checkBox').toggleClass('checkIcon checktoggle')
		}else{
			$('.checkBox').eq(index).toggleClass('checktoggle checkIcon')
		}
		$('.allDelete').click(function(){
			if(index==0||index==4){
				var b = confirm('确定删除全部商品吗？')
				if(b==true){
					console.log(index)
						$('.productBodyItemContent').remove() 
				}else{console.log(11111)} 
			}else{
				var a = confirm('确定删除这件商品吗？')
				var alldelete = index-1;
				if(a==true){
					console.log(alldelete)
					$('.productBodyItemContent').eq(alldelete).remove() 
				}else{
					console.log(222);
				}
			}	
		})
		
	})
	
	//水平轮播
	var i = 0;
	$('.controlLeft').click(function(){
		i--;
		if(i==0){
			$('.controlLeft').css('background-position','0 0');
		}
		if(i<0){
			i=0;
		}
		$('.controlRight').css('background-position','-50px -60px');
		console.log('前'+i)
		changePic(i);
	})
	$('.controlRight').click(function(){
		i++;
		$('.controlLeft').css('background-position','0 -60px');
		if(i==2){
			$('.controlRight').css('background-position','-50px 0');
		}
		if(i>2){
			i=2;
		}
		
		console.log('后'+i);
		changePic(i);
	})
	function changePic(){
		var nowLeft = -i*1190;
		console.log(nowLeft)
		$('.longBoxContent').css('left',nowLeft);
		
	}
	
	
})	
//吸底
window.onload = function(){	
	var gocar = document.getElementsByClassName('checkSubmitInfoBooking')[0];
	document.onscroll = function(){
		console.log(document.documentElement.scrollTop)
		if(document.documentElement.scrollTop<411){
			gocar.style.position = 'fixed';
			gocar.style.bottom = '0';
			gocar.style.boxShadow = '0 0 8px 0 rgba(0,0,0,.1)';
		}else{
			gocar.style.position = 'relative';
			gocar.style.boxShadow = '0 #fff';
		}
	}
	
}	

