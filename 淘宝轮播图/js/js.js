$(function(){
	
	
	var num=0;
	
	var timer=null;
	
	$('#btn').find('span').each(function(index){
		$(this).click(function(){
			num=$(this).index();
			
		/*	$('#box ul').find('li').css('top',-300*num);*/
			
			$('#box ul').find('li').stop().animate({top:-300*num},1000)

		})
		
	
	})
	
	
	

	
	
	
	timer=setInterval(function(){
		num++;
		if(num>=$('ul li').length){
			num=0;
		}

		$('#box ul').find('li').stop().animate({top:-300*num},1000)
		
	},2000)
	
	/*function to(){
		setInterval(function(){
			
			
			$('#box ul').find('li').animate({top:"-=300"},1000)	
		},2000)
	};
	to();*/
	
	

})
