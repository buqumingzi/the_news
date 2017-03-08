$(function(){
	var color='';
	$('span').click(function(){
		color=$(this).html();
		
	});
	
	$('div').click(function(){
		$(this).css('background',color);
		
		
	})
	
	
	
	
	$('input').click(function(){
		
		$('div[style*=red]').css('background','');
		
		
	})
	
	
	
	
	
})
