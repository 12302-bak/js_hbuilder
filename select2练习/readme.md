```xml
1,属性
tags: true,                             // 根据搜索框创建option，默认false
maximumSelectionLength: 6,              // 最多能够选择的个数
multiple: true,                         // 多选，默认false
data: initdata,                         // 下拉框绑定的数据
allowClear: true,                       // 清空，默认false
placeholder: '请添加或选择语言'            // 占位提示符
maximumInputLength: 20,                 // 允许搜索长度  
minimumResultsForSearch: 20,            // 至少20个结果的时候显示搜索  
minimumResultsForSearch: Infinity,      // 永久隐藏搜索框  
selectOnClose: true,                    // 结果显示高亮  
closeOnSelect: false,                   // select选中关闭下拉框  
separator: ",",                         // 分隔符  


2.方法
/置空  
$eventSelect.val(null).trigger("change");  
//选中  
$eventSelect.on("selected", function (e) { })  
//移除  
$eventSelect.on("removed", function () { })  
//多个事件  
$eventSelect.on("close removed", function () { })  


3.获取value和text

$("#xa").val();  
$("#xa").select2("val");  
$("#xa").select2('data').text ;

4.回调
$('#select').on("select2:select", function(e) { 
    //Do stuff
});




```