
$(function(){
	
	 initEleEvents();
	
});
var i=0;
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



}

