$(function(){
    //DOMContentLoaded
    //向服务端发送请求，
    $.ajax({
        url:"http://localhost:5050/header.html",
        type:"get",
        success:function(result){
            //用获得的
            console.log(result);
            //不允许live server打开
            //只能在浏览器中手动输入
            $(result).replaceAll("header"),
            //替使用者自动添加link标签,引入header
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo(header);
        }
    })
})//不要加（），这不是自调，这是事件绑定