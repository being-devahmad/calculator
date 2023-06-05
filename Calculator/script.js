let output = document.getElementById("outputBox").value;
let scrvalue;
function appendCharacter(ch) {
  output = output + ch;
  document.getElementById("outputBox").value = output;
}
function clearOutput() {
  output = "";
  document.getElementById("outputBox").value = output;
}
function deleteInput() {
  output = output.slice(0, -1);
  document.getElementById("outputBox").value = output;
}

function calculate() {
  var p = document.getElementById("outputBox").value;
  var q = eval(p);
  document.getElementById("outputBox").value = q;
}
