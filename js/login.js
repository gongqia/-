window.onload = function(){
	
}



$(function(){
//	var aaa bbb;
	$('.in1').click(function(){
		$('.in1').css('borderBottom','1px solid #000')
		$('.cl1').css('opacity','1')
	})
	$('.in2').click(function(){
		$('.in2').css('borderBottom','1px solid #000')
		$('.cl2').css('opacity','1')
//		$('.clear:not(.cl2)').css('display','none')
	})
	$('.cl1').click(function(){
		$('.in1').val('');
	})
	$('.cl2').click(function(){
		$('.in2').val('');
	})
	
	$('input').blur(function(){
		$('input').css('borderBottom','1px solid #ccc');
		$('.clear').css('opacity','0');
	})
//	$('.in1').blur(function(){
//		$('.in1').css('borderBottom','1px solid #ccc');
//		$('.cl1').css('opacity','0');
//	})
//	$('.in2').blur(function(){
//		$('.in2').css('borderBottom','1px solid #ccc');
//		$('.cl2').css('opacity','0');
//	})
	$('.in1').focus(function(){
		$('.cl1').css('opacity','1');
	})
	$('.in2').focus(function(){
		$('.cl2').css('opacity','1');
	})
})
