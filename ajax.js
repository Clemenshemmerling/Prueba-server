$(function(){
	$('footer .logos').load('logos_footer.html');

	$.get('usuario.json', function(info){
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;

		$('#avatar').append(avatar);	
	});
});

function obtenerGeoInformacion(lat, lon) {
	console.log(lat, lon);
}