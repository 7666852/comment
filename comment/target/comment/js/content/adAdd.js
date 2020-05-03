$(function() {
	common.showMessage($("#message").val());
});

function add() {
	if(check()) {
		$("#mainForm").submit();
	}
}

function check() {
	// 添加完成
	return true;
}

function goback() {
	location.href = $('#basePath').val() + '/ad';
}