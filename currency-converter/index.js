const request = new XMLHttpRequest();
var from = document.getElementById('from');
var to = document.getElementById('to');
var result = document.getElementById('result');
var loader = document.getElementById('loader');


request.addEventListener("load", onLoad);
request.addEventListener("loadstart", onLoadStart);
request.addEventListener("loadend", onLoadEnd);

request.open("GET", "https://neto-api.herokuapp.com/currency");
request.send();

function onLoad() {
  var data = JSON.parse(request.responseText);
  var str = '';
  //понятно что data проитерировать,
  //но как достать нужные свойства(инересуют названия?)
  // и можно ли их сразу отправлять в нужныю функцию для конвертации
  // т.е. мы еще объявим события и будем вызывать функция которая,
  // вытащит нужные значения и посчитает. Что-то логику не пойму как реализовать?
}

function onLoadStart() {
  loader.classList.remove('hidden');
}

function onLoadEnd() {
  loader.classList.add('hidden');
  content.classList.remove('hidden');
}
