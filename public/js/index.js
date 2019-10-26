//在public/js/下建立index。js
$(function(){
    $.ajax({
        url:"http://localhost:5050/index",
        type:"get",
        dataType:"json",
        success:function(result){
            var p1=result[0];
            console.log(p1);
            var {title,details,price,href,pic}
            =p1
            var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h5 class="d-inline-block mb-2">${title}</h5>
              <h6 class="mb-5">
                <a class="text-dark" href="javascript:;">${details}</a>
              </h6>
              <span class="text-primary">${price.toFixed(2)}</span>
              <a class="btn btn-primary" href="${href}">查看详情</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">
          </div>`;
          $(html).appendTo("#p1")
        }
    })
})