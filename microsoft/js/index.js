var i=1;
var j=1;
$(function(){
	
	 initEleEvents();
	 change();
});

function initEleEvents(){
	$("#li1").css("color","rgb(21, 112, 166)");
	$("#pageselect li").click(function(){
		$("#imgb"+i).fadeOut(1000);
		$("#pageselect li").css("color","#fff");
		$(this).css("color","rgb(21, 112, 166)");
		i=$(this).attr("index");
		$("#imgb"+i).fadeIn(1000);
	});
	$("#products").click(function(){
		if ($("#menucon1").css("display")=="none") {
			$(".menucon").hide();
			$("#menu dl").removeClass("menusel");
		};
		$(this).toggleClass("menusel");
		$("#menucon1").toggle();


	});
	$("#downloads").click(function(){
		if ($("#menucon2").css("display")=="none") {
			$(".menucon").hide();
			$("#menu dl").removeClass("menusel");
		};
		$(this).toggleClass("menusel");
		$("#menucon2").toggle();
	});
	$("#support").click(function(){
		if ($("#menucon3").css("display")=="none") {
			$(".menucon").hide();
			$("#menu dl").removeClass("menusel");
		};
		$(this).toggleClass("menusel");
		$("#menucon3").toggle();
	});
	$("#shops").click(function(){
		if ($("#menucon4").css("display")=="none") {
			$(".menucon").hide();
			$("#menu dl").removeClass("menusel");
		};
		$(this).toggleClass("menusel");
		$("#menucon4").toggle();
	});
	$(".cl").click(function(){
		$(".menucon").hide();
	});



}


function change(){
	setInterval("changeimg()",10000);
	setInterval("changeflusli()",10000);
}

function changeimg(){
	$("#imgb"+i).fadeOut(1000);
	$("#li"+i).css("color","#fff");
	i++;
	if (i==5) {
		i=1;
	};
	$("#imgb"+i).fadeIn(1000);
	$("#li"+i).css("color","rgb(21, 112, 166)");

 }
function changeflusli(){
	$("#folusrli"+j).fadeOut(1000);
	j++;
	if (j==4) {
		j=1;
	};
	$("#folusrli"+j).fadeIn(1000);


}