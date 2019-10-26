//在public/js/下新建index.js
//专门支持首页中所有功能
//在public/index.html中<body>
$(function(){
    if(location.search!==""){
        var lid=location.search.split("=")[1]
        $.ajax({
            url:"http://localhost:5050/details",
            type:"get",
            data:{lid},
            dataType:"json",
            success:function(result){
                console.log(result);
                var product=result.product;
                var {title,subtitle,price,promise}
                =product;
                $("#ptitle").html(title);
                $("#p_sub_title").html(subtitle);
                $("#pprice").html(`￥${price.toFixed(2)}`);
                $("#ppromise").html(promise);
            }
           })
}else{
    alert("商品编号lid不能为空")
}
})