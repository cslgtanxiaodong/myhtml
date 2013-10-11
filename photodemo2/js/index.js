var i=0;
$(function(){
	initPosition();
	initEleEvents();
	
});

function initPosition(){
	var a=0;var b=0;
	$(".imgbox").each(function(){
		$(this).attr("id",a);
		a++;
	})
	$("#btnul li").each(function(){
		$(this).attr("ref",b);
		b++;
	});
	$("#0").css({"left":"275px","width":"640px","height":"270px","z-index":"3","top":"0","opacity":"1"});
	$("#0").children("div").css("display","none");
	$("#1").css({"left":"660px","height":"224px","top":"23px","z-index":"2","opacity":"0.4"});
	$("#2").css({"left":"1190px","width":"530px", "height":"100px","top":"105px","opacity":"0","z-index":"0"});
	$("#11").css({"left":"-530px","width":"530px", "height":"100px","top":"105px","opacity":"0","z-index":"0"});
	$("#12").css({"left":"0px","height":"224px","top":"23px","z-index":"2","opacity":"0.4"});

	// $(".imgbox:eq("+i+")").css({"left":"275px","width":"640px","height":"270px","z-index":"3","top":"0"});
	// $(".imgbox:eq("+i+")").children("div").css("display","none");
	// i++;
	// $(".imgbox:eq("+i+")").css("left","660px");
	// i=1;
	// i--;
	// $(".imgbox:eq("+i+")").css("z-index","2");
	// i=1;
	// alert($(".imgbox:eq(0)").attr("index"))
}

function imgmove(){
	
	$("#"+(i+0)%13).animate({"left":"275px","width":"640px","height":"270px","top":"0",},500).css({"z-index":"3","opacity":"1"});
	$(".imgbox").find("div").css("opacity","0.4");
	$("#"+(i+0)%13).find("div").css("opacity","0");
	$("#"+(i+1)%13).animate({"left":"660px","width":"530px", "height":"224px","top":"23px","opacity":"0.5"},500).css("z-index","2");
	$("#"+(i+2)%13).animate({"left":"1190","width":"530px", "height":"100px","top":"105px","opacity":"0"},500).css("z-index","0");
	$("#"+(i+11)%13).animate({"left":"-530px","width":"530px", "height":"100px","top":"105px","opacity":"0"},500).css("z-index","0");
	$("#"+(i+12)%13).animate({"left":"0px","width":"530px", "height":"224px","top":"23px","opacity":"0.5"},500).css("z-index","2");

}

function initEleEvents(){
	$("#left").click(function(){
		if($("#"+(i+0)%13).is(":animated")){
			return;
		}
		i+=13;
		i--;
		i%=13;
		imgmove();
		$("#btnul li").removeClass("btnon");
		$("#btnul li:eq("+i+")").addClass("btnon");
		// var j=i;
		// $(".imgbox:eq("+i+")").animate({"left":"660px","width":"530px","height":"224px","top":"23px"},200);
		// j--;
		// $(".imgbox:eq("+i+")").animate({"left":"275px","width":"640px","height":"270px","top":"0px"},200);
		// j=i;




	});
	$("#right").click(function(){
		if($("#"+(i+0)%13).is(":animated")){
			return;
		}
		i++;
		$("#btnul li").removeClass("btnon");
		$("#btnul li:eq("+i%13+")").addClass("btnon");
		//alert(i);
		imgmove();
	});
	$("#btnul li").click(function(){
		if (i==parseInt($(this).attr("ref"))) {
			return;
		};
		i=parseInt($(this).attr("ref"));
		if($("#"+(i+0)%13).is(":animated")){
			return;
		}
		$("#btnul li").removeClass("btnon");
		$(this).addClass("btnon");
		$(".imgbox").css({"opacity":"0","z-index":"0"});
		//alert("#"+(i+0)%13);
		imgmove();
	});


}

