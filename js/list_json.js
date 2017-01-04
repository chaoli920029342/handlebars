/*list.html 分享列表 */
$(function(){
	var list={	
		"share_list":[{      //文章列表
			"img_url":"images/pic1.jpg",
			"url":"detail.html",
			"title":"关于数据库的性能管理和监控方法介绍",
			"subtitle":"这从技术上看，大数据与云计算的关系就像一枚硬币的正反面一样密不可分。大数据必然无法用单台的计算机进行处理，必须采用分布式架构。它的特色在于对海量数据进行分布式数据挖掘。但它必须依托云计算的分布式处理、分布式数据库和云存储、虚拟化技术",
			"name":"李云国",
			"time":"2016-10-1",
			"download":"12502",
			"zan":"125"
		},{
			"img_url":"images/pic1.jpg",
			"url":"detail.html",
			"title":"基于用户视角的网站质量访问监测平台问监测平台问监测平",
			"subtitle":"基于用户视角的网站质量访问监测平台真司网站速度变慢时可及时发现并处理、为公司不断提高和优化网站访问质量提供参考依据。",
			"name":"张岩",
			"time":"2016-10-8",
			"download":"12502",
			"zan":"123425"
		},{
			"img_url":"images/pic1.jpg",
			"url":"detail.html",
			"title":"如何有效利用时间",
			"subtitle":"更有效的时间管理，更有节奏的时间利用,45分钟的分享让你了解时间管理的秘密",
			"name":"潘鑫明",
			"time":"2016-10-13",
			"download":"15502",
			"zan":"123425"
		},{
			"img_url":"images/pic1.jpg",
			"url":"detail.html",
			"title":"如何有效利用时间",
			"subtitle":"更有效的时间管理，更有节奏的时间利用,45分钟的分享让你了解时间管理的秘密",
			"name":"潘鑫明",
			"time":"2016-10-18",
			"download":"15502",
			"zan":"123425"
		},{
			"img_url":"images/pic1.jpg",
			"url":"detail.html",
			"title":"swift的介绍和入门",
			"subtitle":"编程语言教程中的第一个程序应该在屏幕上打印'Hello, world'。",
			"name":"尤荣荣",
			"time":"2016-10-19",
			"download":"12",
			"zan":"1234"
		},{
			"img_url":"images/pic1.jpg",
			"url":"detail.html",
			"title":"应用系统介绍及应用",
			"subtitle":"更有效的时间管理，更有节奏的时间利用,45分钟的分享让你了解时间管理的秘密",
			"name":"苏龙峰",
			"time":"2016-10-22",
			"download":"12",
			"zan":"1234"
		}]
	
};



var share_list_template=Handlebars.compile($("#share_list_template").html());
$(".list-cont-ul").html(share_list_template(list));
$(".list-cont-inner").mouseover(function(){
	$(this).addClass("on");
}).mouseout(function(){
	$(this).removeClass("on");
});



});