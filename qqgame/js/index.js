var i=0;
$(function(){
	
	initEleEvents();
	setInterval("changeimg()",10000);
	
});



function imagemove(){
	$("#bgimg"+((i-1)%3+1)).fadeOut(300);
	$("#bgimg"+((i+1)%3+1)).fadeOut(300);
	$("#bgimg"+(i%3+1)).fadeIn(300);
	$("#phoneli"+((i-1)%3+1)).animate({"left":"-215px"},300)
	$("#phoneli"+(i%3+1)).css({"display":"block","z-index":"3"}).animate({"left":"0px"},300)
	$("#phoneli"+((i+1)%3+1)).animate({"left":"215px"},300)
}
function changeimg () {
	i++;
	imagemove();
}
function initEleEvents(){
	$("#left").click(function(){
		if ($("#bgimg"+(i%3+1)).is(":animated")) {
			return;
		};
		i=i+3;
		i--;
		$("#phoneli"+((i-1)%3+1)).css({"display":"block","z-index":"1"});
		imagemove();

	});
	$("#right").click(function(){
		if ($("#bgimg"+(i%3+1)).is(":animated")) {
			return;
		};
		i++;
		//$("#phoneli"+((i-1)%3+1)).css({"display":"none","z-index":"1"});
		$("#phoneli"+((i+1)%3+1)).css({"display":"block","z-index":"1"});
		imagemove();

	});

	$("#txtsearch").focus(function(){
		$("#search span").hide();
	});
	$("#txtsearch").blur(function(){
		if ($(this).val()=="") {
			$("#search span").show();
		};
		
	});

}

