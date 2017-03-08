$(function(){
	$('input').click(function(){
		if($(this).val()=='管理员'){
			$('p').wrap('<a href="#"></a>');
		}
		else{
			$('p').unwrap();
		}
	})

		
		
		
	
	
	

})
