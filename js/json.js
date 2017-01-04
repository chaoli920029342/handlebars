$(function(){

var nav={
		"nav_list":[{      //导航列表
			"nav_list_url":"#nogo",
			"nav_list_name":"数据基础环境"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"应用开发"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"数据基础应用"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"性能监控"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"运行环境"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"数据可视"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"管理与监控"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"服务器软件"
		},{

			"nav_list_url":"#nogo",
			"nav_list_name":"数据库"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"数据备份"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"建站系统"
		},{
			"nav_list_url":"#nogo",
			"nav_list_name":"日志管理"
		}]
};

/*$.ajax=({
	type:'post',
	url:"http://schemas.datacontract.org/2004/07/EMoney.MonitorPlat.Model.Contract",
	dataType:'json',
	success:function (data){
		var nav={
			"nav_list":[{      //导航列表
			"nav_list_url":DemoInfo.username,
			"nav_list_name":DemoInfo.Mobile
		}]
		}
	}
})
 */
/* 导航栏数据  */
var nav_template=Handlebars.compile($("#nav_template").html());
$(".nav-data-listin").html(nav_template(nav));





})














