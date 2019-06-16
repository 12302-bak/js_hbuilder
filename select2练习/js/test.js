//下拉框数据
var initdata1 = [{"id":"","text":"请选择"},{"id":"989339487920312321","text":"其他应急预案"},{"id":"989339459617148930","text":"国家级应急预案"},{"id":"989339461496197122","text":"省级应急预案"},{"id":"989339465044578306","text":"市级应急预案"},{"id":"989339469398265857","text":"县级应急预案"},{"id":"989339471986151425","text":"基层应急预案"},{"id":"989339472401387521","text":"企业级应急预案"},{"id":"989339474368516097","text":"军队应急预案"}];

var index = 1;
//下拉框数据
var initdata = ["Java", "JavaScript", "C++", "C#", "Python", "PHP"];

//初始化页面加载
$(document).ready(function() {
	$("#sel_menu").val("hello_world");
	
	//$("#sel_menu").val($("#sel_menu").val()+","+"world");

	$("#sel_menu").select2({
		allowClear: true,
		data:initdata1,
		minimumResultsForSearch:Infinity,
		separator:'_',
	});
	
	//$("#sel_menu").select2('val','989339459617148930');
	//$("#sel_menu").prop('disabled',true);
	//console.log($("#sel_menu").get(0).val());
	
	//$("#sel_menu").select2('data',{"id":"989339469398265857","text":"县级应急预案"});
	
	
	
	//监听单选框
	$("input[id^=sel]").on("change",function(e){
		console.log(e);
		console.log(e.removed);
	});
});

function addOption(){
	$("#sel_menu").val($("#sel_menu").val()+","+"world"+index);
	$("#sel_menu").select2({
		tags:null,
		allowClear: true
	});
	index++;
}
