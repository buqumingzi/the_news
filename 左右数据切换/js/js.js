$(function(){
	/*$('#u1').find('li').each(function(){*/
		
		$('#u1').find('li').click(function(){
			/*$(this).css('background','red');*/
			$(this).addClass('checked');
		})
		
		$('#u2').find('li').click(function(){
			/*$(this).css('background','red');*/
			$(this).addClass('checked');
		})
		
		
		
		
		$('#btn1').click(function(){
			$('#u1').find('li[class=checked]').appendTo( $('#u2') ).attr('class','');	
		});
		$('#btn2').click(function(){
			$('#u2').find('li[class=checked]').appendTo( $('#u1') ).attr('class','');	
		});
		$('#btn3').click(function(){
			$('#u1').find('li[class=checked]').appendTo( $('#u2') ).attr('class','');	
			$('#u2').find('li[class=checked]').appendTo( $('#u1') ).attr('class','');	
		})
/*	})*/
	
	
	
	
	



	

})
