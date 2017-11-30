
$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes); 
});

// 获取选择内容部分

// 声明变量
var targetDiv;
var example;
var treeObj;
var allNames = [];
var names = [];

function addPerson(obj){
    $("#addPerson").dialog("open");
    // 获取当前要操作的目标div
    targetDiv = obj.parentNode.getElementsByTagName("div")[0];
    example = targetDiv.getElementsByClassName("example-text")[0];
    
    // 清空上一次选中的人员
    if(names.length != 0){
        names.length = 0;
    }

}

// 获取树状菜单中所有的选中名单
function confirmNames(treeId){
    treeObj = $.fn.zTree.getZTreeObj(treeId);
    var nodes = treeObj.getCheckedNodes(true);
    for(let i=0;i<nodes.length;i++){
        allNames.push(nodes[i].name);
        names.push(nodes[i].name);
    }

    // 去除父级标题，得到全部选中人员
    for(let i=0;i<departments.length;i++){
        for(let j=0;j<names.length;j++){
            if(names[j] === departments[i]){
                names.splice(j,1);
            }
        }
    }

    // 清除第一个默认的span
    targetDiv.innerHTML = "";
    targetDiv.appendChild(example);
    example.style.display = "none";

    if(names.length != 0){
        var newSpan;
        // targetDiv.innerHTML = "";
        for(let i=0;i<names.length;i++){
            newSpan = document.createElement("span");
            newSpan.setAttribute("class","add-span")
            newSpan.innerHTML = names[i] + '<a class="del-icon"></a>';
            targetDiv.appendChild(newSpan)
        }
    }else{
        example.style.display = "block";
    }
    
    // 删除人员
    $(".del-icon").click(function(){
        if($(this).parent().siblings().length == 1){
            example.style.display = "block";
        }
        $(this).parent().remove();
    })

}

// 清除所有选择的节点并折叠
function clearChecked(treeId) {
    treeObj = $.fn.zTree.getZTreeObj(treeId);
    if(treeObj){
        treeObj.expandAll(false);
        treeObj.checkAllNodes(false);
    }
}

$("#addPerson").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 452,
    modal: true,
    buttons: {
        "确定": function () {                 
            $(this).dialog("close");
            confirmNames("treeDemo");
        },
        "取消":function(){
            $(this).dialog( "close" );
            clearChecked("treeDemo");
        }
    },close:function(){
        
    }
        
});


