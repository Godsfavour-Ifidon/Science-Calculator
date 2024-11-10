const inputextBox = document.querySelector(".inputextBox");

function calculate(value) {
  inputextBox.value = inputextBox.value + value;
}

function clr() {
  inputextBox.value = "";
}
function deleteByOne() {
  inputextBox.value = inputextBox.value.slice(0, -1);
}
function Result() {
  inputextBox.value = eval(inputextBox.value);
}

function sin() {
  inputextBox.value = Math.sin(inputextBox.value);
}

function cos() {
  inputextBox.value = Math.cos(inputextBox.value);
}

function tan() {
  inputextBox.value = Math.tan(inputextBox.value);
}

function pi() {
  inputextBox.value = Math.floor(Math.PI * inputextBox.value);
  // inputextBox.value = inputextBox.value * Math.PI;
}

function sqrt() {
  inputextBox.value = Math.sqrt(inputextBox.value);
}

function log() {
  inputextBox.value = Math.log(inputextBox.value);
}

function pow() {
  inputextBox.value = Math.pow(inputextBox.value, 2);
}

function Exp() {
  inputextBox.value = Math.exp(inputextBox.value);
}
