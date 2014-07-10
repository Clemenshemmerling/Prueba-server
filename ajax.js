$(function(){
	$.get('logos_footer.html', function(html){
		$('footer').append(html);
	});
});