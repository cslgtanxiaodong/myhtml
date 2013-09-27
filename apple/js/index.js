var index=1;


$(function(){
	
	 initEleEvents();
	
});

function initEleEvents(){
	pageselect();
	$("#left").click(function(){
		$(".mainpage").removeClass("mainpageleft");
		$(".mainpage").addClass("mainpageright");
		if (index==1) {

			$(".mainpage").removeClass("mainpageright");
			$(".mainpage").addClass("mainpageleft");
			$("#main2").hide();
			$("#main3").hide();
			$("#mainbox").css("left","-300%")
			$("#mainbox").animate({left:"-200%"},200,function(){
				$("#main2").show();
				$("#main3").show();
				$(".mainpage").removeClass("mainpageleft");
				$(".mainpage").addClass("mainpageright");
				$("#mainbox").css("left","-300%")
				index=4;
				pageselect();
			});
			
			return;
		};
		
		
		var left=(index*-1)*100+200;
		$("#mainbox").animate({left:left+"%"},200);
		$("#mian"+index).removeClass("mainpagesel");
		index--;
		


		pageselect();


	});
	$("#right").click(function(){
		$(".mainpage").removeClass("mainpageleft");
		$(".mainpage").addClass("mainpageright");
		if (index==4) {
			$("#main1").removeClass("mainpageright");
			$("#main1").addClass("mainpageleft");
			$("#mainbox").css("left","-200%")
			$("#mainbox").animate({left:"-300%"},200,function(){
				$("#main1").removeClass("mainpageleft");
				$(".mainpage").addClass("mainpageright");
				$("#mainbox").css("left","0%")
				index=1;
				pageselect();
			});
			
			return;
		};
		
		
		var left=(index*-1)*100;
		$("#mainbox").animate({left:left+"%"},200);
		$("#mian"+index).removeClass("mainpagesel");
		index++;
		


		pageselect();
	});

	$(".besides").hover(function(){
		$(this).children().css("display","block")
	},function(){
		$(this).children().css("display","none")
	});

	$("#pageselect li").click(function(){
		index=$(this).attr("index");
		var left=(index*-1)*100+100;
		$("#mainbox").css("left",left+"%");
		
		
		pageselect();
	});

	$("#searchinput").focus(function(){
		$(this).animate({"width":"146px"},200);
		$(this).css("background-color","#fff");
		$("#iconsearch").css("color","#000");
		$("#topnavul").animate({"width":"800px"},200);
	});

	$("#searchinput").blur(function(){
		$(this).animate({"width":"106px"},200);
		$(this).css("background-color","transparent");
		$("#iconsearch").css("color","#000");
		$("#topnavul").animate({"width":"840px"},200);
	});







}

function pageselect(){
	
	$("#pageselect li").html("<i class='icon-circle'></i>");

	$("#li"+index).html("<i class='icon-circle-blank'></i>").children().css({"font-size":"12px","line-height":"26px"});
	if (index==4) {
		$("#pageselect li i").css("color","#fff");
	};
}



