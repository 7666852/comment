function modify() {
	$("#mainForm").attr("action",$("basePath").val()+"/businesses"+id);
	$("#mainForm").submit();
}
