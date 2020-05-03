function modify() {
	$("#mainForm").attr("method","PUT");
	$("#mainForm").attr("action",$("basePath").val()+"/businesses"+id);
	$("#mainForm").submit();
}
