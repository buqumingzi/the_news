$(function(){
	var oPer=$('#prev');
	var oNext=$('#next');
	var oImg=$('img');
	
	var num=0;
	
	var arrImg=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'];
	
	var timer=null;
	
	oPer.hide();
	oNext.hide();
	

	/*var CImg=$('<img src="img/2.jpg" alt="图2" />')
	
	$('#Carousel_figure').append(CImg);
*/	
	
/*	oNext.click(function(){
		num++;
		if(num > arrImg.length){
			num=0;
		}
		oImg.attr('src',arrImg[num]);
	});
	
	oPer.click(function(){
		num--;
		if(num < 0){
			num=arrImg.length;
		}
		oImg.attr('src',arrImg[num]);
	})
	*/

	

	/*function next(){
		num++;
		if(num>oImg.length){
			num=0;
		}
		
		$('#Carousel_figure').find('img').eq(num).show().siblings().hide();
	}
	
	oNext.click('next()');*/
	

	
	oPer.click(function(){
		num--;
		if(num<0){
			num=oImg.length;
		}
		$('#Carousel_figure').find('img').eq(num).show().siblings().hide();
		
	})
	
	
	
	function auto(){
		timer=setInterval(function(){
		num++;
		if(num>oImg.length){
			num=0;
		}
		$('#Carousel_figure').find('img').eq(num).show().siblings().hide();
		
	
	},2000)
	}
	
	auto();

	
	
	oNext.click(function(){
		num++;
		if(num>oImg.length){
			num=0;
		}
		
		$('#Carousel_figure').find('img').eq(num).show().siblings().hide();
		
	})
	
	
	/*移入移出*/
	oImg.hover(function(){
		oPer.show();
		oNext.show();
		
		clearInterval(timer);
	
	},function(){
		oPer.hide();
		oNext.hide();
		auto();
		
	})
	
	
	
	
	oPer.mousemove(function(){
		oPer.show();
		oNext.show();
	})
	oNext.mousemove(function(){
		oPer.show();
		oNext.show();
	})
	oPer.mouseout(function(){
		oPer.hide();
		oNext.hide();
	})
	oNext.mouseout(function(){
		oPer.hide();
		oNext.hide();
	})
	
	
	/*定时器*/
	/*function autoPlay(){
		timer=setInterval(function(){
			num++;
			
	}),1000}
	
	autoPlay();*/
	
	
})
