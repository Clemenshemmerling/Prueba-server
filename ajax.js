$(function(){
	$.get('logos_footer.html', function(html){
		$('footer').append(html);
	});
	$.get('usuario.json', function(info){
		console.log(info);

	});
});