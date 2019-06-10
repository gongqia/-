$(function(){
	$('.in1').click(function(){
		$('.cl1').css('display','block')
		$('.in1').css('borderBottom','1px solid #000')
	})
	$('.in2').click(function(){
		$('.cl2').css('display','block')
		$('.in2').css('borderBottom','1px solid #000')
	})
	$('.in3').click(function(){
		$('.cl3').css('display','block')
		$('.in3').css('borderBottom','1px solid #000')
	})
	$('.in4').click(function(){
		$('.cl4').css('display','block')
		$('.in4').css('borderBottom','1px solid #000')
	})
	$('.in5').click(function(){
		$('.cl5').css('display','block')
		$('.in5').css('borderBottom','1px solid #000')
	})
	$('input').blur(function(){
		$('input').css('borderBottom','1px solid #ccc')
		var index = $('input').index(this);
		var value = $('input').eq(index).val();
		var text = $('input').eq(0).val();
		var reg;
		switch(index){
			case 0:
			  reg=/^\w{4}$/;
			  break;
			case 1:
			  reg=/^1\d{10}$/;
			  break;
			case 2:
			  reg=/^\d{6}$/;
			  break;	
			case 3:
			  reg=/^[\x21-\x7E]{6,20}$/;
			  break;
			case 4:
			  reg=/^[\x21-\x7E]{6,20}$/;
			  break;	
		}
		checked( reg,value,index )
		if(reg.test( text )==true){
			$('button').css('backgroundColor','black')
			$('button').css('cursor','pointer')
		}else{
			$('button').css('backgroundColor','#ccc')
			$('button').css('cursor','default')
		}
	})
	function checked( reg,value,index ){
		var resulet = reg.test( value );
		console.log(value,resulet,reg);
		if(resulet==false){
			$('.huanhang').eq(index).css('opacity','1');
//			$('.confirmButton').css('backgroundColor','#ccc');
		}else{
			$('.huanhang').eq(index).css('opacity','0');
//			$('.confirmButton').css('backgroundColor','black');
		}
	}
//	
	$('.check').click(function(){
		if($(this).prop("checked")){
			$('.confirmButton').removeAttr("disabled");
			$('.confirmButton').css('background','black');
			$('.confirmButton').css('cursor','pointer')
			
		}else{
			$('.confirmButton').attr("disabled","disabled");
			$('.confirmButton').css('background','#ccc');
			$('.confirmButton').css('cursor','default')
		}
	})
	
	
	
	$('.cl1').click(function(){
		$('.in1').val('');
		$(this).css('display','none');
	})
	$('.cl2').click(function(){
		$('.in2').val('');
		$(this).css('display','none')
	})
	$('.cl3').click(function(){
		$('.in3').val('');
		$(this).css('display','none')
	})
	$('.cl4').click(function(){
		$('.in4').val('');
		$(this).css('display','none')
	})
	$('.cl5').click(function(){
		$('.in5').val('');
		$(this).css('display','none')
	})
})