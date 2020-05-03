function modify() {
	$("#mainForm").attr("method","PUT");
	$("#mainForm").attr("action",$("basePath").val()+"/businesses"+id);
	$("#mainForm").submit();
}
function goto() {
	$(location).prop('href',$("basePath").valueOf()+"/businesses");
}
