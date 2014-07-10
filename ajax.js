$(function(){
	$.get('logos_footer.html', function(html){
		$('footer').append(html);
	});
	$.get('usuario.json', function(info){
		var avatar = new image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;

		$('#avatar')append(avatar);
		
	});
});