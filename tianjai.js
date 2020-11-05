//添加角色2
function initPersonPicPosition(){
	
	j=0;//控制第j张图片

	px2 = 800;//开始剪切位置
	py2 = 450;//开始剪切位置
	 pw2 = 63;//图片矩形宽
	 ph2 = 91;//图片矩形宽高
	 p_dw2 = 63;
	 p_dh2 = 91;
	p_dy2 = 0;
}

function drawPerson2(){//这里写控制图片的代码角色2
//例如
if(px2 <= 0){
    //px = 950;
    ctx.drawImage(personPic,63*(j--),p_dy2,p_dw2,p_dh2,px2,py2,pw2,ph2);
    
    
}else{
    ctx.drawImage(personPic,63*(j--),p_dy2,p_dw2,p_dh2,px2-=10,py2,pw2,ph2);
    if((px2-px)>63)//图片交错时镜像图片使图片保持面对面
{

huitu2();//此函数镜像角色2
}
    
}

if(j < 0){j = 2;}//循环剪切
//控制向左移动，下同

}


(function keyControl(){//键盘事件控制角色

	$(document).keydown(function(e){
		key = e.which;
		
		//控制角色2
		if(key ==65){
			dir2 = 'left';
			p_dy2 = 91;

		}
		
	});
	$(document).keyup(function(e){
		dir = 'stop';
		dir2 = 'stop';//停止状态
		
	});
})
();