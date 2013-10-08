
$(function(){
	initPosition();
	initEleEvents();
	
});
var i=0;
function initPosition(){
	var left=$(window).width();
	$("#rightimg").css("left",left-69+"px");
	$("#topbar").css("left",left-256+"px");
	var top=$(window).scrollTop()+400;
		$("#topbar").stop().animate({"top":top+"px"},1000);

}



function initEleEvents(){
	$("#leftarrow").click(function(){
		$("#rightarrow").show();
		i--;
		var left=i*-216;
		$("#workforul").animate({"left":left+"px"},200,function(){
			if (i==0) {
				$("#leftarrow").hide();
			};
		});
		//alert("2");

	});
	$("#rightarrow").click(function(){
		$("#leftarrow").show();
		i++;
		var left=i*-216;
		$("#workforul").animate({"left":left+"px"},200,function(){
			if (i==9) {
				$("#rightarrow").hide();
			};
		});


	});


	$(window).scroll(function(){
		var top=$(window).scrollTop()+400;
		$("#topbar").stop().animate({"top":top+"px"},1000);
		$("#showimage").css("top",$(window).scrollTop()+"px");
		$("#imageb").css("top",$(window).scrollTop()+40+"px");
	});



	$(".imageli").click(function(){
		$("#showimage").show();
		$("#showimage").css("top",$(window).scrollTop()+"px");
		$("#imageb").show();
		$("#imageb").css("top",$(window).scrollTop()+40+"px");
		var	src=$(this).find("img").attr("link");
		var text=$(this).find("img").attr("text");
		// alert(src);
		$("#showimg").attr("src",src);
		//alert(text);
		$("#imgtext").text(text);
	});

	$("#showimage").click(function(){
		$(this).hide();
		$("#imageb").hide();

	});

}

