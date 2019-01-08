var i = 0;
console.time();
var duration;

while(i++ < 100) {
  var map = {};
  map['key'] = 'value';
}
console.timeEnd();



var k = 0;
console.time();

while(k++ < 100) {
  var map = new Map();
  map.set('key', 'value');
}
console.timeEnd();



