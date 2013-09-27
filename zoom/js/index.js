
$(function(){
	
	initEleEvents();
	
});

function initEleEvents(){
	$("#photo").hover(function(){
		$("#photo img").css("display","none");
		$(this).css("backgrond-image","url('images/1.jpg')");	
	},function(){
		$("#photo img").css("display","block");
		
	});
	$("#photo").mousemove(function(e){
		
		
		var x=e.clientX-($(window).width()-300)/2;
		var y=e.clientY-100;
		x=x/3;
		y=y/2;
		$(this).css("background-position",x+"% "+y+"%");	
	});

}