// let txt = document.getElementById("txt");
// let content = txt.value;

/**one.addEventListener("click", function () {
  txt.value = "1";
});
let two = document.getElementById("two");
two.addEventListener("click", function () {
  txt.value = "2";
});
let three = document.getElementById("three");
three.addEventListener("click", function () {
  txt.value = "3";
});
let four = document.getElementById("four");
four.addEventListener("click", function () {
  txt.value = "4";
});
let five = document.getElementById("five");
five.addEventListener("click", function () {
  txt.value = "5";
});
let six = document.getElementById("six");
six.addEventListener("click", function () {
  txt.value = "6";
});
let sev = document.getElementById("sev");
sev.addEventListener("click", function () {
  txt.value = "7";
});
let eight = document.getElementById("eight");
eight.addEventListener("click", function () {
  txt.value = "8";
});
let nine = document.getElementById("nine");
nine.addEventListener("click", function () {
  txt.value = "9";
});
let plus = document.getElementById("plus");
plus.addEventListener("click", function () {
  txt.value = "+";
});
let minus = document.getElementById("minus");
minus.addEventListener("click", function () {
  txt.value = "-";
});
let zero = document.getElementById("zero");
zero.addEventListener("click", function () {
  txt.value = "0";
});
let equal = document.getElementById("equal");
equal.addEventListener("click", function () {
  txt.value = "=";
});
let star = document.getElementById("star");
star.addEventListener("click", function () {
  txt.value = "*";
});
let module = document.getElementById("module");
module.addEventListener("click", function () {
  txt.value = "%";
});
let slash = document.getElementById("slash");
slash.addEventListener("click", function () {
  txt.value = "/";
});
let dot = document.getElementById("dot");
dot.addEventListener("click", function () {
  txt.value = ".";
});
let c = document.getElementById("c");
c.addEventListener("click", function () {
  txt.value = " ";
});
let btn = document.getElementsByClassName("btn");
btn.addEventListener("mouseover", function () {
  btn.style.color = "#1abc9c";
});**/
function clr() {
  document.getElementById("fun").value = " ";
}
function fun(ch) {
  let d = document.getElementById("fun").value;
  d += ch;
  document.getElementById("fun").value = d;
}

function result() {
  let d = document.getElementById("fun").value;
  let equal = eval(d);
  document.getElementById("fun").value = equal;
}
function back() {
  let d = document.getElementById("fun").value;
  let t = d.substring(0, d.length - 1);
  console.log(t);
  document.getElementById("fun").value = t;
}
