


$(function(){
	initEleEvents();
});

function initEleEvents(){
	$(".linput").val("");
	$(".linput").css("background-color","transparent");
	var flag=$("input")[2].checked;
	if (flag) {
		$("#safetip1").css("display","block");
	}else{
		$("#safetip1").css("display","none");
	};
	var flag=$("input")[6].checked;
	if (flag) {
		$("#safetip2").css("display","block");
	}else{
		$("#safetip2").css("display","none");
	};
	


	$("#free").click(function(){
		$(".loginboxli").removeClass("lisel");
		$(this).addClass("lisel");
		$("#viploginform").css("display","none");
	});	
	$("#vip").click(function(){
		$(".loginboxli").removeClass("lisel");
		$(this).addClass("lisel");
		$("#viploginform").css("display","block");
	});
	

	$(".linput").focus(function(){
		$(this).next(".bgspan").css("color","#ccc")
		
		$(this).css({"box-shadow":"0px 0px 3px rgb(107, 155, 220) inset"});
	});

	$(".linput").blur(function(){
		$(this).next(".bgspan").css("color","#999")
		var txt=$(this).val();
		if (txt=="") {
			$(this).css({"background-color":"transparent","box-shadow":""});
		};
	});
	$(".linput").keyup(function(e){
		var txt=$(this).val();
		if (e.keyCode==8&&txt=="") {
			$(this).css("background-color","transparent");
		}else{
			$(this).css("background-color","#fff");

		};
	});

	$("#store1").click(function(){
		
		$("#safetip1").toggle();

	});
	$("#store2").click(function(){
		$("#safetip2").toggle();
	});
	$(".checkboxspan").click(function(){
		var ele= $(this).prev("input")[0];
		var flag=ele.checked;
		if (flag==true) {
		 	ele.checked=false;
		 	
		}else{
		 	ele.checked=true;
		 	
		};
	});
	$(".checkboxspan1").click(function(){
		var ele= $(this).prev("input")[0];
		var flag=ele.checked;
		if (flag==true) {
		 	ele.checked=false;
		 	$("#safetip1").toggle();
		}else{
		 	ele.checked=true;
		 	$("#safetip1").toggle(); 
		};
	});
	$(".checkboxspan2").click(function(){
		var ele= $(this).prev("input")[0];
		var flag=ele.checked;
		if (flag==true) {
		 	ele.checked=false;
		 	$("#safetip2").toggle();
		}else{
		 	ele.checked=true;
		 	$("#safetip2").toggle(); 
		};
	});


}


