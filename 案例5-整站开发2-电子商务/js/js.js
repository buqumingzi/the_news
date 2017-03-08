$(document).ready(function(){
	
	$('#24').mouseover(function(){
		$(".today_info").show();
	});
	$('#24').mouseout(function(){
		$(".today_info").hide();
	});
	
	/*$(".pic_m").find("li").click(function(){
		alert($(this).index());	
	})*/
	/*由于不兼容index（）*/
	$("#1").click(function(){
		$("#pic_1").show().siblings().hide();
	});
	$("#2").click(function(){
		$("#pic_2").show().siblings().hide();
	});
	$("#3").click(function(){
		$("#pic_3").show().siblings().hide();
	});
	
	
	
	
	/*bbs 由于index无法使用*/
	/*$('.bbs #b_1').hover(function(){
		$(this).hide();
		$("#i_1").show();
	},function(){
		$(this).show();
		$("#i_1").hide();
	})*/
	
		
		$('#b_1').mouseover(function(){
		$(this).hide();
		$("#i_1").show();
		
		$("#i_1").mousemove(function(){
			$(this).hide();
			$("#i_1").show();
		});
		
		$('#i_1').mouseout(function(){	
			$("#i_1").hide();
			$('#b_1').show();
		})
	
	});
	$('#b_2').mouseover(function(){
		$(this).hide();
		$("#i_2").show();
		
		$("#i_2").mousemove(function(){
			$(this).hide();
			$("#i_2").show();
		});
		
		$('#i_2').mouseout(function(){	
			$("#i_2").hide();
			$('#b_2').show();
		})
	
	});$('#b_3').mouseover(function(){
		$(this).hide();
		$("#i_3").show();
		
		$("#i_3").mousemove(function(){
			$(this).hide();
			$("#i_3").show();
		});
		
		$('#i_3').mouseout(function(){	
			$("#i_3").hide();
			$('#b_3').show();
		})
	
	});	
	$('#b_4').mouseover(function(){
		$(this).hide();
		$("#i_4").show();
		
		$("#i_4").mousemove(function(){
			$(this).hide();
			$("#i_4").show();
		});
		
		$('#i_4').mouseout(function(){	
			$("#i_4").hide();
			$('#b_4').show();
		})
	
	});
	$('#b_5').mouseover(function(){
		$(this).hide();
		$("#i_5").show();
		
		$("#i_5").mousemove(function(){
			$(this).hide();
			$("#i_5").show();
		});
		
		$('#i_5').mouseout(function(){	
			$("#i_5").hide();
			$('#b_5').show();
		})
	
	});
	$('#b_6').mouseover(function(){
		$(this).hide();
		$("#i_6").show();
		
		$("#i_6").mousemove(function(){
			$(this).hide();
			$("#i_6").show();
		});
		
		$('#i_6').mouseout(function(){	
			$("#i_6").hide();
			$('#b_6').show();
		})
	
	});
		
	
	
	
	
	
	
	
	//搜索切换
	
	(function(){
		 var aLi=$('#menu li');
		 var oText=$('.form .text');
		 
		 
	
		 
		 var arrText=[
		 '例如：荷棠鱼坊烤鱼 或 樱花日本料理',
		 '例如：地址',
		 '例如：情侣卷',
		 '例如：东莞',
		 '例如：降温',
		 ]
		 
		 
		 	var iNow=0;
		 
/*初始化*/
			oText.val(arrText[iNow]);

		 
		 
		 
		 
		 aLi.each(function(index){
		 	$(this).click(function(){
		 		/* $(this).siblings().removeClass('active');
		 		 $(this).addClass('active');*/
		 		
		 		aLi.attr('class','gradient');
		 		$(this).attr('class','active');
		 		
		 		iNow=index;
		 		
		 		oText.val(arrText[iNow]);
		 		
			
		 	})
		 	
			
		 })
		
		
		oText.focus(function(){
			if($(this).val() == arrText[iNow]){
				$(this).val('');
			}
		});
		oText.blur(function(){
			if($(this).val()==''){
				$(this).val(arrText[iNow]);
			}
			
		});
		
			
			})();	
			
			
			
			
		
				/*oText.focus(function(){
					if($(this).val()==''){
						
					}
					
				})
			*/
			
		
		/*update*/
		(function(){
			var arrData = [
			{'name':'萱萱','time':5,'title':'那些灿烂华美的瞬间。。','url':'htt//:www...'},
			{'name':'畅畅','time':7,'title':'那查收下局is地方。。','url':'htt//:www...'},
			{'name':'轩轩','time':2,'title':'三等分酒叟IP道具费。。','url':'htt//:www...'},
			{'name':'嘘嘘','time':4,'title':'都参加司法的难处。。','url':'htt//:www...'}
			];
			
			
			var oUl=$('.update ul');
			var iH=oUl.find('li').height();
			
			
			
			var oUp=$('#updateUpBtn');
			var oDown=$('#updateDownBtn');
			
			var iNow=0;
			
			
			var oDiv=$('.update');
			
			/*定时器管理的声明*/
			var timer=null;
			
			
			//赋值
			var str='';
			for(var i=0;i<arrData.length;i++){
				str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>写了一篇文章：'+arrData[i].title+'</a>	</li>'
				
			}
			oUl.html(str);
			
			
			
			/*动作*/
			
			
			
			
			/*	oUl.animate({'top':iH*-1},1000,"bounceIn");*/
			
			
			//点击模块
			oUp.click(function(){
				
				doMove(-1);
			});
			oDown.click(function(){
				doMove(1);
			});
			
			//点击的函数
			function doMove(num){/*取绝对值的方法Math.abs()*/
				
				iNow+=num;
				if(Math.abs(iNow)>arrData.length-1){
					iNow=0;
				}
				if(iNow>0){
					iNow=-(arrData.length-1);
				}
				oUl.stop().animate({'top':iH*iNow},1000,"elasticOut");
				
			}
			
			
			/*定时器的使用*/
			
			function autoPlay(){
				timer=setInterval(function(){
					doMove(-1);
				},2000)
				
			}
			autoPlay();
			
			
			
			
			
			/*使定时器停止，继续运行*/
			oDiv.hover(function(){
				clearInterval(timer);
			},function(){
				autoPlay();
			});	
		})();
		
		
		
		
		
		/*options选项卡*/
		(function(){
			/*$('#hot_list1').show();
			$('#hot_list2').hide();
			
			$('.gradient').click(function(){
				
				$('#hot_list1').hide();
				$('#hot_list2').show();

			});
			$('.options .nav').find('.active').click(function(){
				$('#hot_list2').hide();
				$('#hot_list1').show();*/
				
				fnTab($('.tabNav1'),$('.tabCon1'));
				
				fnTab($('.tabNav2'),$('.tabCon2'));
				
				function fnTab(oNav,aCon){
					var aElem=oNav.children();
					aCon.hide().eq(0).show();
					
					
					
					aElem.each(function(index){
						$(this).click(function(){
							aElem.removeClass('active').addClass('gradient').find('div').attr('class','triangle_down_gray');
							$(this).removeClass('gradient').addClass('active').find('div').attr('class','triangle_down_red');
							
							/*aElem.removeClass('active').addClass('gradient');
							$(this).removeClass('gradient').addClass('active');
							aElem.find('div').attr('class','triangle_down_gray');
							$(this).find('div').attr('class','triangle_down_red');*/
							
							aCon.hide().eq(index).show();
						})
						
					})
				
					
				}
	
		})();
		
		
		/*自动播放*/
		
		
		
		
		
		
		
		
		
		
		
		

	
	
	
	
	
	
	
})
