//banner
{	var arr2=["#E8E8E8","#E8E8E8","#FDFDFD","#C52932","#E8E8E8"];
	$(".pagebox .item").each(function (index,ele) {
		$(this).mouseenter(function () {
			var color2=arr2[index];
			console.log(color2);
			$(".pagebox .item").removeClass("active").eq(index).addClass("active");
			$(".banner_img .img").removeClass("active").eq(index).addClass("active");
			$("#banner").css("backgroundColor",color2);
		})

        // {
        //     const imgs=document.querySelectorAll(".bannertu li img");
        //     const pagers=document.querySelectorAll(".pagerbox li");
        //     const banner=document.querySelector("#banner");
        //     console.dir(imgs);
        //     pagers.forEach(function(ele,index){
        //         ele.mouseenter=function(){
        //             for(let i=0;i<pagers.length;i++){
        //                 imgs[i].classList.remove("active");
        //                 pagers[i].classList.remove("active");
        //             }
        //             this.classList.add("active");
        //             imgs[index].classList.add("active");
        //             n=index;
        //         }
        //     });
        //     let n=0;
        //     let t=setInterval(move,3000);
        //     function move(){
        //         n++;
        //         if(n===imgs.length){
        //             n=0;
        //         }
        //         if(n<0){
        //             n=imgs.length-1;
        //         }
        //         for(let i=0;i<pagers.length;i++){
        //             imgs[i].classList.remove("active");
        //             pagers[i].classList.remove("active");
        //         }
        //         imgs[n].classList.add("active");
        //         pagers[n].classList.add("active");
        //     }
        //     banner.onmouseenter=function(){
        //         clearInterval(t)
        //     }
        //     banner.onmouseleave=function(){
        //         t=setInterval(move,3000);
        //     }
        //
        // }


    })
}
//nav
{
	var arr1=["red","yellow","blue","green","#fe6700","#FEC2D4","#98FEED","plum","#36FE33","#331DFE","#47FE59","pink","orange","red","#fe6700","plum"];
	$(".banner_nav .li").each(function (index,ele) {
		$(this).mouseenter(function () {
			var colors=arr1[index];
			console.log(colors);
			$(".cdn").eq(index).show();
			$(".banner_nav .li").eq(index).css({"color":colors});
		})
		$(this).mouseleave(function () {
			$(".cdn").eq(index).hide();
            $(".banner_nav .li").eq(index).css({"color":"#fff"});
		})


	})
}
//悬浮窗
{
	$(".top1").click(function(){
		$("html,body").animate({scrollTop:0});
	});
	$(window).scroll(function () {
		var st=$(window).scrollTop();
		// console.log(st);
		if(st>700) {
			$(".topbar").show();
		} else {
			$(".topbar").hide();
		}
		if (st>900){
			$(".leftbar").show();
		}
		else {
			$(".leftbar").hide();
		}
	});



}
// 左悬浮窗
{
	// let tips = document.querySelectorAll(".tip");
	// let containers = document.querySelectorAll(".container");
    var arr=["red","yellow","blue","green", "plum","pink","#FF19BA","skyblue"];
	let flag = true;
	// console.log(containers);
	$(".tip").click(function () {
		flag = false;
		let index=$(this).index();//默认index是兄弟索引  写参数加类名
		console.log(index);
		let ot=$(".container").eq(index-1).offset().top - 50;
		// console.log(ot);
		$("html,body").animate({scrollTop:ot},200);


	})
    $(".tip").each(function (index){
        $(this).mouseenter(function (){
            let color1=arr[index];
            console.log(color1);
            $(".tip").eq(index).css({"backgroundColor":color1});
        })
    	$(this).mouseleave(function (){
            $(".tip").eq(index).css({"backgroundColor":"#666"});
		})
	} );
	window.addEventListener("scroll", function () {
		if (flag) {
			let st=$(window).scrollTop();
			$(".container").each(function (index, ele) {
				if (st >= $(".container").eq(index).offsetTop - 51) {
					$(".tip").removeClass("active3").eq(index).addClass("active3");

				}
			})
		}

	})
}
//选项卡
{
	$(".boxitem").each(function (index,ele) {
		$(this).mouseenter(function () {
			$(".goods").removeClass("active1").eq(index).addClass("active1")
			$(".boxneirong p").removeClass("active2").eq(index).addClass("active2")
		})

	})
}
//右导航
{	console.log($(".cdn_tip"));
	$(".cdn_tip").each(function(index,ele){
		$(this).mouseenter(function(){
			$(".cdn_tip").removeClass("active3").eq(index).addClass("active3");
            $(".cnd_nav").eq(index).css("display","block");
			$(".cnd_nav").eq(index).animate({"left":"-100px"},300);

		})
		$(this).mouseleave(function(){
			$(".cdn_tip").eq(index).removeClass("active3");
			$(".cnd_nav").eq(index).css("display","none");
			$(".cnd_nav").eq(index).css("left","-200px");
		})
	})
}
// 下拉
{

	$(".item3").each(function(index,val){
		console.log($(this));
		$(this).mouseenter(function(){
			$(".item_xiala").eq(index).fadeIn();
		});
		$(this).mouseleave(function(){
			$(".item_xiala").eq(index).fadeOut();
		});
	})

}