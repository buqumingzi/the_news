window.onload=function(){
	var oTop=document.getElementById("top_title");
	var oBom=document.getElementById("bottom_title");
	var oPrev=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var oimg=document.getElementById("img");
	
	
	/*初始化*/
	var arrUrl=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']
	var arrText=['白汽车','黄汽车','蜘蛛人','滑雪','枪']	
	var num=0;
	oTop.innerHTML=num+1+"/"+arrUrl.length;
	oBom.innerHTML=arrText[num];
	oimg.src=arrUrl[num];
	
	oPrev.onclick=function(){
		if(num==0){
			num=arrUrl.length;
		}
		num--;
		oTop.innerHTML=num+1+"/"+arrUrl.length;
		oBom.innerHTML=arrText[num];
		oimg.src=arrUrl[num];
		
	}
	oNext.onclick=function(){
		if(num==arrUrl.length-1){
			num=0;
		}
		num++;
		oTop.innerHTML=num+1+"/"+arrUrl.length;
		oBom.innerHTML=arrText[num];
		oimg.src=arrUrl[num];
	}
	
	
	
	
	
	
	
	
	
}

