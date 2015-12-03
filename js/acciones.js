// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnlista').on('tap', function(){
		$.ajax({
			type: "POST",
			url: "http://192.168.1.177/Practica03/buscarjuegos.php",
			error: function(){
				alert ("no me puedo conenctar a l  serv de jegos");
			},
			success: function(respuesta){
				alert (respuesta);
			}
			
			
			
		});
	});
});
});
