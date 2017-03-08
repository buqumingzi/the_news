window.onload=function(){
	mv.app.toTip();
	mv.app.toBanner();
	mv.app.toSel();
	mv.app.toRun();
}

var mv={};//命名空间
mv.tools={};



mv.ui={};
mv.app={};

mv.ui.textChange=function(obj,str){//实现功能
	obj.onfocus=function(){
		if(this.value == str){
			this.value='';
		}
	};
	obj.onblur=function(){
		if(this.value == ''){
			this.value=str;
		}
	};
};


mv.ui.fadeIn=function(obj){
	var value =0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var ispeed=5;
		if(value == 100){
			clearInterval(obj.timer);
		}else{
			value+=ispeed;
			obj.style.opacity=value/100;
			obj.style.filter='alpha(opacity='+value+')';
		}
	},30)
};
mv.ui.fadeOut=function(obj){
	var value =100;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var ispeed=-5;
		if(value == 0){
			clearInterval(obj.timer);
		}else{
			value+=ispeed;
			obj.style.opacity=value/100;
			obj.style.filter='alpha(opacity='+value+')';
		}
	},30)
};






mv.app.toTip=function(){
	var oText1=document.getElementById("text1");
	var oText2=document.getElementById("text2");
	
	
	mv.ui.textChange(oText1,"Search Website");
	mv.ui.textChange(oText2,"Search Website");
};

mv.app.toBanner=function(){
	var oAd=document.getElementById("ad");
	var aLi=oAd.getElementsByTagName("li");
	
	
	var iNow=0;
	
	var timer=setInterval(out,3000);
	
	
	function out(){
		if(iNow == aLi.length-1)
		{
			iNow=0;
		}else{
			iNow++;
		}
		for(var i=0;i<aLi.length;i++){
			mv.ui.fadeOut(aLi[i]);
		};
		mv.ui.fadeIn(aLi[iNow]);
		
	};
	

};




mv.app.toSel=function(){
	var oSel=document.getElementById("sel1");
	var aDd=oSel.getElementsByTagName('dd');
	var aUl=oSel.getElementsByTagName('ul');
	var aH2=oSel.getElementsByTagName('h2');
	
	for(var i=0;i<aDd.length;i++){
		
		aDd[i].index=i;//添加索引
		aDd[i].onclick=function(ev){
			var ev = ev || window.event;//用于阻止冒泡
			var This = this;
			
			for(var i=0;i<aUl.length;i++){
				aUl[i].style.display='none';
			}
			
			aUl[this.index].style.display='block';
			
			document.onclick=function(){
				aUl[This.index].style.display='none';
			};
			
			ev.cancelBubble=true;
		};
		
	}
	
	/*使用闭包的形式*/
	for(var i=0;i<aUl.length;i++){
		aUl[i].index=i;
		
		(function(ul){
			var aLi=ul.getElementsByTagName('li');
			
			for(var i=0;i<aLi.length;i++){
				aLi[i].onmouseover=function(){
					this.className='active';
				}
				aLi[i].onmouseout=function(){
					this.className='';
				};
				aLi[i].onclick=function(ev){
					var ev = ev || window.event;
					aH2[this.parentNode.index].innerHTML=this.innerHTML;
					
					ev.cancelBubble=true;
					this.parentNode.style.display='none';
					
				}
			}
		})(aUl[i]);
	}	
};

/*点击无缝切换*/

mv.app.toRun=function(){
	var oRun=document.getElementById('run1');
	var oUl=oRun.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	
	var oPrev=mv.tools.getByClass(oRun.'prev')[0];
	var oNext=mv.tools.getByClass(oRun,'next')[0];
	
	var iNow=0;
	
	oUl.innerHTML+=oUl.innerHTML;

	oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
	
	oPerv.onclick=function(){
		
	};
	oNext.onclick=function(){
		alert(1);
	};
}






