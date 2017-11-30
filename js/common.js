$(function() {
    // 头部头像滑过效果
    var timer;
    $('.user-operate,.user-operate>ul').hover(function() {
            clearInterval(timer)
            $('.user-operate>ul').fadeIn(150)
        }, function() {
            timer = setTimeout(function() {
                $('.user-operate>ul').fadeOut(150)
            }, 300)
        })
        // 左侧菜单点击效果
    $('.class-a').on('click', 'a', function() {
        $('.class-a a').removeClass('active');
        $(this).children('.menu-arrow').addClass('on');
        $(this).addClass('active');
        if ($(this).siblings('ul').is(':hidden')) {
            $(this).siblings('ul').slideDown(150).parent().siblings().children('ul').slideUp(150);
            $(this).children('.menu-arrow').addClass('on');
            $(this).parent().siblings().find('.menu-arrow').removeClass('on')
        } else {
            $(this).parent().find('ul').slideUp(150);
            $(this).parent().find('.menu-arrow').removeClass('on');
        }
    })

    // 搜索框点击弹出提示
    $('.right-top-search input').focus(function() {
        $(this).siblings('ul').slideDown(300);
    })
    $('.right-top-search input').blur(function() {
        $(this).siblings('ul').slideUp(300);
    })
    $('.right-top-search li').click(function() {
            $(this).parent('ul').slideUp(300).siblings('input').val($(this).text());
        })
        //显示隐藏左侧菜单
    $('.left-arrow').click(function() {
        if ($(this).hasClass('show')) {
            $('.left').animate({ width: '320px', borderWidth: '1px' }, 300)
            $(this).parent('.right').animate({ left: '335' }, 300)
            $(this).removeClass('show');
        } else {
            $('.left').animate({ width: '0px', borderWidth: '0px' }, 300)
            $(this).parent('.right').animate({ left: '0' }, 300)
            $(this).addClass('show');
        }
    })

})

//修改信息、修改密码弹框
function reviseInfo() {
    $('#reviseInfo').dialog('open');
}
$("#reviseInfo").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 500,
    modal: true,
    buttons: {
        "保存": function() {
            $(this).dialog("close");
            successInfo();
        },
        "取消": function() {
            $(this).dialog("close");
        }
    },
    close: function() {
        $("#reviseInfo").find(":input").val("");
    }

});

function revisePassWord() {
    $('#revisePassWord').dialog('open');
}
$("#revisePassWord").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 500,
    modal: true,
    buttons: {
        "保存": function() {
            $(this).dialog("close");
            successInfo();
        },
        "取消": function() {
            $(this).dialog("close");
        }
    },
    close: function() {
        $("#reviseInfo").find(":input").val("");
    }

});

// 新增模块
function addModule() {
    $('#addModule').dialog('open');
}

$("#addModule").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 400,
    modal: true,
    buttons: {
        "保存": function() {
            $(this).dialog("close");
            successInfo();
        },
        "取消": function() {
            $(this).dialog("close");
        }
    },
    close: function() {
        // $("#reviseInfo").find(":input").val("");
    }

});

// 修改模块
function editModule() {
    $('#editModule').dialog('open');
}

$("#editModule").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 400,
    modal: true,
    buttons: {
        "保存": function() {
            $(this).dialog("close");
            successInfo();
        },
        "取消": function() {
            $(this).dialog("close");
        }
    },
    close: function() {
        // $("#reviseInfo").find(":input").val("");
    }

});

// 移交给
function transferTo() {
    $('#transferTo').dialog('open');
}

$("#transferTo").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 400,
    modal: true,
    buttons: {
        "保存": function() {
            $(this).dialog("close");
            successInfo();
        },
        "取消": function() {
            $(this).dialog("close");
        }
    },
    close: function() {
        // $("#reviseInfo").find(":input").val("");
    }

});

// 是否删除模块
function isDelete() {
    $("#isDelete").dialog('open');
}

$("#isDelete").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 400,
    modal: true,
    buttons: {
        "确定": function() {
            $(this).dialog("close");
        },
        "取消": function() {
            $(this).dialog("close");
        }
    },
    close: function() {
        // $("#reviseInfo").find(":input").val("");
    }

});

// 新增执行计划
function addExecute() {
    $('#addExecute').dialog('open');
}

$("#addExecute").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 400,
    modal: true,
    buttons: {
        "保存": function() {
            $(this).dialog("close");
            successInfo();
        },
        "取消": function() {
            $(this).dialog("close");
        }
    },
    close: function() {
        // $("#reviseInfo").find(":input").val("");
    }

});

// 修改执行计划
function editExecute() {
    $('#editExecute').dialog('open');
}

$("#editExecute").dialog({
    autoOpen: false,
    resizable: false,
    height: 'auto',
    width: 400,
    modal: true,
    buttons: {
        "保存": function() {
            $(this).dialog("close");
            successInfo();
        },
        "取消": function() {
            $(this).dialog("close");
        }
    },
    close: function() {
        // $("#reviseInfo").find(":input").val("");
    }

});

// 操作成功提示框
function successInfo(){
    $(".success-info").fadeIn();
    var num = 3;
    var timer = setInterval(function(){
        num --;
        if(num === 1){
            $(".success-info").fadeOut();
            clearInterval(timer);
        }
    },1000)
}

// 操作失败提示框
function failInfo(){
    $(".fail-info").fadeIn();
    var num = 3;
    var timer = setInterval(function(){
        num --;
        if(num === 1){
            $(".fail-info").fadeOut();
            clearInterval(timer);
        }
    },1000)
}

// 权限提示框
function rightsInfo(){
    $(".rights-info").fadeIn();
    var num = 3;
    var timer = setInterval(function(){
        num --;
        if(num === 1){
            $(".rights-info").fadeOut();
            clearInterval(timer);
        }
    },1000)
}

