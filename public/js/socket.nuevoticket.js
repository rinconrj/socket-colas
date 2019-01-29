
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function () {

  console.log('Conectado al servidor');
  
});
// Escuchar
socket.on('disconnect', function () {

  console.log('Perdimos conexion con el servidor');

});

socket.on('estadoActual', function(actual) {
  label.text(actual.actual)

});

$('button').on('click', function(){

  socket.emit('siguienteTicket', null, function (siguientTicket) {
    label.text(siguientTicket)

  });

});



// Enviar informacion
// socket.emit('enviarMensaje', {
//   usuario: 'ricardo',
//   mensaje: 'hola mundo'
// }, function(resp){
//   console.log(resp);
// })
// socket.on('enviarMensaje', function (mensaje){
//  console.log('servidor: ', mensaje);
// })
