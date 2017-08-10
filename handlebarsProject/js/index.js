(function($){
	var classPath = 'http://imoocnote.calfnote.com/inter/getClasses.php';
	var contentPath = 'http://imoocnote.calfnote.com/inter/getClassChapter.php';
	var notePath = 'http://imoocnote.calfnote.com/inter/getClassNote.php';

	$.getJSON(classPath, {curPage: 1}, function(jsonData, textStatus) {
		console.log(jsonData);                                                                                                                                                                                                                                                                                               
		var template = $("#class-template").html();
		var functionTemplate = Handlebars.compile(template); //Handlebars H is captile
		var compileContent = functionTemplate(jsonData.data);
		$("#classesDiv").html(compileContent);
	});

	Handlebars.registerHelper('equal', function(v1, v2, option){
		if (v1 === v2) {
			return option.fn(this);
		} else {
			return option.inverse(this);
		}
	});
})(jQuery);