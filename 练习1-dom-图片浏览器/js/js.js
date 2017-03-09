window.onload=function(){
	var oPer=document.getElementById("perv");
	var oNext=document.getElementById("next");
	var oTop=document.getElementById("top_top");
	var oDown=document.getElementById("down_down");
	var oImg=document.getElementById("img");
	
	var arrUrl=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'];
	var arrText=['炫酷马','炫酷头','刺客信条','lol','不知名','我也不知道'];
	var num=0;
	
	/*先进行初始化*/
	oTop.innerHTML=num+1+"/"+arrUrl.length;/*或者使用arrext.length*/
	oImg.src=arrUrl[num];
	oDown.innerHTML=arrText[num];
	oNext.onclick=function(){
		num++;
		if(num==arrUrl.length){
			num=0;
		}
		oTop.innerHTML=num+1+"/"+arrUrl.length;/*或者使用arrext.length*/
		oImg.src=arrUrl[num];
		oDown.innerHTML=arrText[num];
	
		
	};
	oPer.onclick=function(){
		num--;
		if(num==-1){
			num=arrUrl.length-1;
		}
		oTop.innerHTML=num+1+"/"+arrUrl.length;/*或者使用arrext.length*/
		oImg.src=arrUrl[num];
		oDown.innerHTML=arrText[num];
	}
	
	
	
	
	
	
	
}
