$(function(){

	
/*(function(){
		
		var aImg=$('.box img');
		
		aImg.each(function(index){
			$(this).click(function(){
				alert(1);
			})	
		})
		
		
	})*/
	
		
		/*
			$('.box').each(function(index){
				
				$('.box').mousedown(function(ev){
				disx=ev.pageX-$(this).offset().left;
				disy=ev.pageY-$(this).offset().top;
				
				$(document).mousemove(function(ev){
					$('.box').css('left',ev.pageX-disx).css('top',ev.pageY-disy);
				})
				$(document).mouseup(function(){
					$(document).off();
				})
				return false;
			})
			
				
			})
			*/
			
			
			/*$('body').delegate("div",'mousedown',function(ev){
				disx=ev.pageX-$(this).offset().left;
				disy=ev.pageY-$(this).offset().top;
			
			
			
			$(document).each(function(index){
				
				$(document).mousemove(function(ev){
					$('.box').css('left',ev.pageX-disx).css('top',ev.pageY-disy);
				})
				
			})
				$(document).mouseup(function(){
					$(document).off();})
	
				
				
			})
			*/
			
			//使用自定义方法
			
			$.fn.extend({
				drag : function(){
					var disX=0;
					var disY=0;
					
					var This=this;
					
					this.mousedown(function(ev){
						disX=ev.pageX-$(this).offset().left;
						disY=ev.pageY-$(this).offset().top;
						
						$(document).mousemove(function(ev){
							This.css('left',ev.pageX-disX);
							This.css('top',ev.pageY-disY);
							
							
						});
						$(document).mouseup(function(){
							$(document).off();
							
						});
						return false;	
					});	
				}
			});
			
			
			$('#box1').drag();
			$('#box2').drag();
		
		
		
		
		
})
	
	
	








