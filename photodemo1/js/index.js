var i=0;
var arr=new Array();
$(function(){
	
	initEleEvents();
	
});

function initEleEvents(){

	autoheight();

	readphotos();
	$(".menuli img").click(function(){
		var	index=$(this).attr("index");
		var src=$(this).attr("src");
		$("#mainphoto img").attr("src",src);
		$("#mainphoto img").attr("index",index);
		$("#menu").hide();
		
		autoheight();
		
	});
	$("#middle").click(function(){
		$("#menu").show();
	});
	$(".menuli img").mouseup(function(){
		
		$("#menu").hide();
	});
	$("#menu").click(function(){
		$("#menu").hide();
	});





	$(".menuli").hover(function(){
		$(this).siblings().addClass("menuliimg");
	},function(){
		$(this).siblings().removeClass("menuliimg");
	});
	$("#left").hover(function(){
		$("#leftarrow").show();
	},function(){
		$("#leftarrow").hide();
	});
	$("#right").hover(function(){
		$("#rightarrow").show();
	},function(){
		$("#rightarrow").hide();
	});
	$("#left").click(function(){
		var index=parseInt($("#mainphoto img").attr("index"));
		if (index==0) {
			alert("第一张！");
			return;
		};
		index--;
		$("#mainphoto img").attr("src","css/images/photo/"+index+".jpg");
		$("#mainphoto img").attr("index",index);
		autoheight();
	});
	$("#right").click(function(){
		var index=parseInt($("#mainphoto img").attr("index"));
		if (index==arr.length-1) {
			alert("最后一张！");
			return;
		};
		index++;
		$("#mainphoto img").attr("src","css/images/photo/"+index+".jpg");
		$("#mainphoto img").attr("index",index);
		autoheight();
	});

	
}

function readphotos(){
	
	
	$(".menuli").each(function(){
		$(this).find("img").attr("src","css/images/photo/"+i+".jpg");
		 arr[i]="css/images/photo/"+i+".jpg";
		 $(this).find("img").attr("index",i);
		i++;
	});
	

}

function autoheight(){
	var height=$("#mainphoto img").height();
	var	ah=(600-height)/2;
	if (ah<0) {
		ah=0;
	};
		$("#mainphoto img").css("margin",(600-height)/2+" 0 0 0")


}