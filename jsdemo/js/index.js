$(function(){
	initEleEvents();

});

function initEleEvents(){
	$(window).scroll(function(){
		$("#left").css("top",($(this).scrollTop()+150)+"px");
	});

	$(".dropmenu").mouseover(function(){
		$(this).find("dt").addClass("dmmouseover");
		$(this).find("dd").show();
	});

	$(".dropmenu").mouseout(function(){
		$(this).find("dt").removeClass("dmmouseover");
		$(this).find("dd").hide();
	});
	$("#lefticon").click(function(){
		var flag=$(this).attr("openflag");
		
		if (flag=="no") {

			$(this).parents("#left").animate({left:0},500,function(){
				$("#lefticon").css("background-position","-2px -59px");

			});
			$(this).attr("openflag","yes");
		}else{
			$(this).parents("#left").animate({left:-208},500,function(){
				$("#lefticon").css("background-position","-36px 0");
			});
			$(this).attr("openflag","no");
		}

	});

	$(".menudt").click(function(){
		var flag=$(this).attr("menuopen");
		if (flag=="no"){
			$(".menudd").css("display","none");
			$(".menudt").attr("menuopen","no");
			$(this).next(".menudd").css("display","block");
			$(this).attr("menuopen","yes");

		}else{
			$(this).next(".menudd").css("display","none");
			$(this).attr("menuopen","no");

		}
		
	});




	$(".tabtitle").click(function(){
		var ulid=$(this).attr("tabul");
		$(".tabtitle").removeClass("tabsel");
		$(".tabul").css("display","none");
		$(this).addClass("tabsel");
		$("#"+ulid).css("display","block");

	});



	$(".tooltip").hover(function(){
		var tiptxt=$(this).attr("tiptxt");
		$(this).append("<div class='tip'>" + tiptxt+"</div>");
		$(".tip").css({"left":"0","top":"24px"})
	},function(){
		$(this).find(".tip").remove();
	});



	$(".smallphoto").click(function(){
		var src=$(this).attr("src");
		var index=$(this).attr("index");
		$(".smallphoto").removeClass("smallphotosel");
		$(this).addClass("smallphotosel");
		$("#mainphoto").attr("src",src);
		$("#mainphoto").attr("pindex",index);
	});
	$("#leftp").click(function(){
		var pindex=$("#mainphoto").attr("pindex");
		var arry=$("#photoul").find("img");
		$("#mainphoto").attr("src",arry[pindex-1].src);
		$(".smallphoto")[pindex-1].addClass("smallphotosel");
		$("#mainphoto").attr("pindex",pindex-1);
	});

	$("#rightp").click(function(){
		var pindex=$("#mainphoto").attr("pindex");
		var arry=$("#photoul").find("img");
		$("#mainphoto").attr("src",arry[pindex-(-1)].src);
		$("#mainphoto").attr("pindex",pindex-(-1));
	});


}