/*detail.html */

$(function(){
	var detail={
		"banner_info":[{
			"title":"基于用户视角的网站质量访问监测平台",
			"name":"李秋水",
			"subtitle":"基于用户视角的网站质量访问监测平台真司网站速度变慢时可及时发现并处理、为公司不断提高和优化网站访问质量提供参考依据。",
			"time":"2016-11-15",
			"place":"B3-1-3F硅谷会议室",
			"num":"20",
			"url":"#nogo",
			"download":"2000",
			"zan":"100000",
			"left":"25"
		}],
		"comment":[{
			"name":"张永亮",
			"content":"分享很有用！下次分享什么内容哇？！",
			"agree":"1234",
			"disagree":"12",
			"like":"1234568"
		},{
			"name":"潘鑫明",
			"content":"分享很有用！期待下次分享！",
			"agree":"45464564",
			"disagree":"0",
			"like":"1234568435"
		},{
			"name":"苏龙峰",
			"content":"分享内容非常有用，对目前的项目有帮助，希望关于服务端数据处理的问题可以和博主继续讨论一下！",
			"agree":"0",
			"disagree":"123",
			"like":"1"
		},{
			"name":"杨飞",
			"content":"讲的很到位，很容易get到重点",
			"agree":"54875",
			"disagree":"25",
			"like":"15"
		}]
};



var banner_template=Handlebars.compile($("#banner_template").html());
$(".index-map-list").html(banner_template(detail));


var banner_num_template=Handlebars.compile($("#banner_num_template").html());
$(".detail-cont-navnum").prepend(banner_num_template(detail));

var comment_template=Handlebars.compile($("#comment_template").html());
$(".detail-cont-list").append(comment_template(detail));

});


