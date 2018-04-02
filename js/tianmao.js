//banner
{
	$(".pagebox .item").each(function (index,ele) {
		$(this).mouseenter(function () {
			console.log(ele)
			$(".pagebox .item").removeClass("active").eq(index).addClass("active");
			$(".banner_img .img").removeClass("active").eq(index).addClass("active")
		})


	})
}
//nav
{
	$(".banner_nav .li").each(function (index,ele) {
		$(this).mouseenter(function () {
			$(".cdn").eq(index).show();
		})
		$(this).mouseleave(function () {
			$(".cdn").eq(index).hide();
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
		console.log(st);
		if(st>700) {
			$(".topbar").show();
		} else {
			$(".topbar").hide();
		}
		if (st>60) {
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
	let flag = true;
	// console.log(containers);
	$(".tip").click(function () {
		flag = false;
		let index=$(this).index();//默认index是兄弟索引  写参数加类名
		console.log(index);
		let ot=$(".container").eq(index-1).offset().top - 50;
		console.log(ot);
		$("html,body").animate({scrollTop:ot},200)
	})
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
			$(".cnd_nav").eq(index).animate({"left":"-100px"},function(){
				$(".cnd_nav").eq(index).fadeIn(1000);
			});


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