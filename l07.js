var array = [80, 77, 88, 95, 68];
var mark = 0;
for (var i = 0; i < array.length; i++) {
   mark += array[i];
}
mark /= array.length;

if (mark < 60) {
   mark = 'F'; 
}
if (mark < 70) {
   mark = 'D'; 
}
if (mark < 80) {
   mark = 'C'; 
}
if (mark < 90) {
   mark = 'B'; 
}
if (mark < 100) {
   mark = 'A'; 
}

console.log(mark);
