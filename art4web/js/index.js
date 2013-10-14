var i=3;var j=0;
$(function(){
	initPosition();
	initEleEvents();
	setInterval("change()",10000);
});

function initPosition(){
	$("#silderul li").each(function () {
		$(this).attr("id",j);
		j++;
	});
	picmove();
}
function picmove () {
	$("#"+(i-2)%10).css({"display":"none","left":"-220px"})
	$("#"+(i-1)%10).css("display","block").animate({"left":"-220px"},200)
	$("#"+i%10).animate({"left":"0"},200)
	$("#"+(i+1)%10).css("display","block").animate({"left":"220px"},200)
	$("#"+(i+2)%10).css("display","block").animate({"left":"440px"},200)
	$("#"+(i+3)%10).css("display","block").animate({"left":"660px"},200)
	$("#"+(i+4)%10).css({"display":"none","left":"660px"})
}
function change () {
	i++;
	$("#silde"+(i%3+1)).fadeIn(500);
	$("#silde"+((i-1)%3+1)).fadeOut(500);
	$("#silde"+((i+1)%3+1)).fadeOut(500);
}

function initEleEvents(){
	$("#left").click(function () {
		if ($("#"+i%10).is(":animated")) {
			return;
		};
		i+=10;
		i--;
		picmove();
	});
	$("#right").click(function () {
		if ($("#"+i%10).is(":animated")) {
			return;
		};
		i++;
		picmove();
	});
	

	$("##silderul li").hover(function(){
		$(this).find("span").css("opacity","1")
	},function(){
		$(this).find("span").css("opacity","0")
	});
	$("##serviceul li").hover(function(){
		$(this).find("span").css("opacity","1")
	},function(){
		$(this).find("span").css("opacity","0")
	});
}

