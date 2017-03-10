
function product_image_gallery(json){
		var winW = document.documentElement.clientWidth;
		var winH = document.documentElement.clientHeight;
		
		var countW = Math.floor(winW*json.scale);//math.floor()向下取整

		var scale = countW/json.w;

		var oH = scale*json.h;//比例

		var oZoom=document.querySelector(json.obj);//querySelector()方法接受一个CSS查询并返回匹配模式的第一个子孙元素，如果没有匹配的元素则返回null
		var aXiaoli = oZoom.querySelector('.xiaoyuandian').children[0].children;
		try{
			oZoom.style.width = countW +"px"
			oZoom.style.height = oH +"px"
		}catch(e){
			return false;
		}
		var oUl = oZoom.children[0];
		oUl.style.position = 'absolute';
		oUl.style.left = 0;
		oUl.style.top = 0;
		var oZoomW = oZoom.offsetWidth;
		var oZoomMW = winW*json.m;
		oZoom.style.marginLeft = oZoomMW + 'px';
		var aImg = oUl.children;
		
		for(var i=0;i<aImg.length;i++){
			aImg[i].style.float = 'left';
			aImg[i].style.width= countW+'px'; 
			aImg[i].children[0].style.width= '100%'; 
			aImg[i].style.height= oH + 'px';
			aImg[i].children[0].style.height= '100%'; 
		}
		
		
		oUl.innerHTML+=oUl.children[0].outerHTML;
		oUl.style.width= aImg.length*aImg[0].offsetWidth+'px';

		var W=oUl.offsetWidth-aImg[0].offsetWidth;
		var tX=0;
		var tY = 0;
		var iNow=0;
		oUl.addEventListener('touchstart',function(ev){
			var downX=ev.targetTouches[0].pageX;
			var downY = ev.targetTouches[0].pageY;
			var disX=downX-tX;
			var disY =downY-tY;
			clearInterval(oUl.timer);

			function fnMove(ev){
				tX=ev.targetTouches[0].pageX-disX;
				tY=ev.targetTouches[0].pageY - disY;
				if(tX<0){
					oUl.style.WebkitTransform='translateX('+tX%W+'px)';
					ev.preventDefault();
				}else{
					oUl.style.WebkitTransform='translateX('+(tX%W-W)%W+'px)';
					ev.preventDefault();
				}
			}
			function fnEnd(ev){
				var upX=ev.changedTouches[0].pageX;
				var upY =ev.changedTouches[0].pageY;
				var scrollT=document.documentElement.scrollTop || document.body.scrollTop; // 获取顶部滚动距离；							
				
				if(Math.abs(downX-upX)<50){
					startMove(oUl,-iNow*aImg[0].offsetWidth);
				}else{
					if(downX>upX){ //++
						iNow++;
						startMove(oUl,-iNow*aImg[0].offsetWidth);
						tab();
					}else{
						iNow--;
						startMove(oUl,-iNow*aImg[0].offsetWidth);
						tab();
					}
				}
				//���
				oUl.removeEventListener('touchmove',fnMove,false);
				oUl.removeEventListener('touchend',fnEnd,false);
			}
			oUl.addEventListener('touchmove',fnMove,false);
			oUl.addEventListener('touchend',fnEnd,false);
		},false);
		//��ť�л�
		function tab(){
			for(var i=0;i<aXiaoli.length;i++){
				aXiaoli[i].className = '';
			}
			if(iNow>0){
				aXiaoli[iNow%aXiaoli.length].className = 'cur';
				
			}else{
				aXiaoli[(iNow%aXiaoli.length+aXiaoli.length)%aXiaoli.length].className = 'cur';
			}
		}
		
		function startMove(obj,iTarget){
			clearInterval(obj.timer);
			var count=Math.floor(500/30);
			var start=tX;
			var dis=iTarget-start;
			var n=0;
			obj.timer=setInterval(function(){
				n++;
				var a=1-n/count;
				tX=start+dis*(1-a*a*a);

				if(tX<0){
					oUl.style.WebkitTransform='translateX('+tX%W+'px)';
				}else{
					oUl.style.WebkitTransform='translateX('+(tX%W-W)%W+'px)';
				}

				if(n==count){
					clearInterval(obj.timer);
				}
			},30);
		}
	};

	document.getElementById('huadonglunbo') && product_image_gallery({obj:'#huadonglunbo',scale:0.934,w:340,h:340,m:0});//调用