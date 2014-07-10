$(function(){
	$.get('logos_footer.html', function(html){
		$('footer').append(html);
	});
	$.get('usario.json', function(info){
		console.log(info);

	});
});