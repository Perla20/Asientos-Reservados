//declarar un array que seran los asientos de nuestro avioncon false indicando que estos enten vacios
//es decir ocupado = true
var airlineSeat = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];
//contador que nos ayudara a rastrear el numero de asientos ocupados
var busySeat = 0;
var paintSeats = function(array){

var containers=document.getElementById('seat');
for(var i = 0,i< array.length;i++){
  var seat = document.createElement('div');
  seat.className = 'seat'

};
