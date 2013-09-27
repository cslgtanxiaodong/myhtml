//----------dajiakan
function mover1 (f) {
 var tags=document.getElementsByName("t1");//获取标签
        var tagArr=[];//用于返回类名为className的元素
        for(var i=0;i < tags.length; i++)
        {
            if(tags[i].className == "djkdlsel")
            {
                tagArr[tagArr.length] = tags[i];//保存满足条件的元素
            }
        };
        
        for(x in tagArr){
        	tagArr[x].className="djkdl";
        };
      switch(f){
        case 1:
            document.getElementById("d11").className="djkdlsel";
            break;
        case 2:
            document.getElementById("d12").className="djkdlsel";
            break;
        case 3:
            document.getElementById("d13").className="djkdlsel";
            break;
        case 4:
            document.getElementById("d14").className="djkdlsel";
            break;
        case 5:
            document.getElementById("d15").className="djkdlsel";
            break;
        default:
            document.getElementById("d11").className="djkdlsel";

      };
  }

function mover2 (f) {
 var tags=document.getElementsByName("t2");//获取标签
        var tagArr=[];//用于返回类名为className的元素
        for(var i=0;i < tags.length; i++)
        {
            if(tags[i].className == "djkdlsel")
            {
                tagArr[tagArr.length] = tags[i];//保存满足条件的元素
            }
        };
        
        for(x in tagArr){
            tagArr[x].className="djkdl";
        };
      switch(f){
        case 1:
            document.getElementById("d21").className="djkdlsel";
            break;
        case 2:
            document.getElementById("d22").className="djkdlsel";
            break;
        case 3:
            document.getElementById("d23").className="djkdlsel";
            break;
        case 4:
            document.getElementById("d24").className="djkdlsel";
            break;
        case 5:
            document.getElementById("d25").className="djkdlsel";
            break;
        default:
            document.getElementById("d21").className="djkdlsel";

      };
  }

function mover3 (f) {
    var tags=document.getElementsByName("t3");//获取标签
    var tagArr=[];//用于返回类名为className的元素
    for(var i=0;i < tags.length; i++)
    {
        if(tags[i].className == "djkdlsel")
        {
            tagArr[tagArr.length] = tags[i];//保存满足条件的元素
        }
    };

    for(x in tagArr){
        tagArr[x].className="djkdl";
    };
    switch(f){
        case 1:
        document.getElementById("d31").className="djkdlsel";
        break;
        case 2:
        document.getElementById("d32").className="djkdlsel";
        break;
        case 3:
        document.getElementById("d33").className="djkdlsel";
        break;
        case 4:
        document.getElementById("d34").className="djkdlsel";
        break;
        case 5:
        document.getElementById("d35").className="djkdlsel";
        break;
        default:
        document.getElementById("d31").className="djkdlsel";

    };
}



//--------------jsnews
function jsnews (f) 
{
    if (f==1) 
    {
        document.getElementById("jsnews").style.display="block";
        document.getElementById("jsxinwen").className="hdbqsel";
        document.getElementById("yaowen").className="hdbq";
    }
    else{
        document.getElementById("jsnews").style.display="none";
        document.getElementById("yaowen").className="hdbqsel";
        document.getElementById("jsxinwen").className="hdbq";
    }


      
}


// function sosoin () { 
//     document.getElementById("sosoxlcd").style.display="block";
//     document.getElementById("sosocaidan").style.backgroundPosition="-552px -200px";
// }

// function sosoout () {
//     document.getElementById("sosoxlcd").style.display="none";
//     document.getElementById("sosocaidan").style.backgroundPosition="-877px -201px";
// }
$(function() {
    initEleEvents();
});
function initEleEvents () {
  $("#help").mouseover(function() {
    $(this).find("dd").show("fast");
  });


 
  $("#help").mouseout(function() {
    $(this).find("dd").hide("fast");
  });
}








// function helpin () {
//     var ele;
//     document.getElementById("helpmenu").style.display="block";
//     ele=document.getElementById("help");
//     ele.style.backgroundPosition="-150px -138px";
//     ele.style.borderLeft="1px solid #ccc";
//     ele.style.borderRight="1px solid #ccc";
// }

// function helpout () {
//     var ele;
//     document.getElementById("helpmenu").style.display="none";
//     ele=document.getElementById("help");
//     ele.style.backgroundPosition="-150px -108px";
//     ele.style.borderLeft="1px solid #fff";
//     ele.style.borderRight="1px solid #fff";
// }