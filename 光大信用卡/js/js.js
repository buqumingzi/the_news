$(function(){
	var oZY=$('#zhaoyun_cad');
	var oM3=$('#meng3guo_cad');
	
	
	var oAC=$('#apply_cad');
	
	var oACa=oAC.find('a');
	oZY.hide();
	oM3.hide();
	
	oAC.hover(function(){
		oZY.show();
		oM3.show();
				},function(){
		oZY.hide();
		oM3.hide();
	});
	
	
	oZY.mousemove(function(){
		oZY.show();
		oM3.show();
	});
	oM3.mousemove(function(){
		oZY.show();
		oM3.show();
	});
	oZY.mouseout(function(){
		oZY.hide();
		oM3.hide();
	});
	oM3.mouseout(function(){
		oZY.hide();
		oM3.hide();
	});
	
	
	var arrImg=['img/header_dianji_1.png','img/header_dianji_2.png']
	
	$('#click_for img').hover(function(){
		$(this).attr('src',arrImg[1]);
	},function(){
		$(this).attr('src',arrImg[0]);
	})

	
	
	
	
	
	$('#chice').hide();
	
	
	$('#Quite').hover(function(){
		/*$('#zhaoyun_2').show();*/
		$('#chice').show();
				},function(){
		/*$('#zhaoyun_2').hide();*/
		$('#chice').hide();
	});
	
	
	$('#chice').mousemove(function(){
		$('#chice').show();
		/*oM3.show();*/
	});
	/*oM3.mousemove(function(){
		oZY.show();
		oM3.show();
	});*/
	$('#chice').mouseout(function(){
		$('#chice').hide();
		/*oM3.hide();*/
	});
	/*oM3.mouseout(function(){
		oZY.hide();
		oM3.hide();
	});
	*/
	
	var oZY2=$('#zhaoyun_2 img');
	var oM32=$('#m3_2 img');
	
	
	
	var arrImg2=['img/meng3_2.png','img/meng2_blue.png']
	var arrImg3=['img/zhaoyun_withe.png','img/zhaoyun_blue.png']
	
	
	oZY2.hover(function(){
		oZY2.attr('src',arrImg3[1]);
	},function(){
		oZY2.attr('src',arrImg3[0]);
	});
	oM32.hover(function(){
		oM32.attr('src',arrImg2[1]);
	},function(){
		oM32.attr('src',arrImg2[0]);
	})
	
	
	
	
	
	
	
	
	
})
