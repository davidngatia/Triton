var a = parseInt(prompt("Enter a"));
var b = parseInt(prompt("Enter b"));
var c = parseInt(prompt("Enter c"));
  if (a === b && b === c && c === a) {
    alert("Equilateral triangle");
}
  else if (a === b || a === c || b === c) {
    alert("Isosceles Triangle");
}
  else if (a !== b && b !== c) {
    alert("Scalene Triangle");
}
  else if ((a+b)<=c || (a+c)<=b || (b+c)<=a) {
    alert("Not a Triangle");
}
