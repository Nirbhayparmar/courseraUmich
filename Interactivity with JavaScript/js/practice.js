var items = ["fridge", "tv", "mobile", "wifi"];
function colorchange() {
  var id = prompt("enter");
  var x = document.getElementById(id);
  //console.log(x);
  x.className = "color";
}

function colorchange1() {
  var id = prompt("enter");
  var x = document.getElementById(id);
  //console.log(x);
  x.className = "color1";
}
function hiden() {
  var id = prompt("enter");
  var x = document.getElementById(id);
  //console.log(x);
  x.className = "hide";
}
function visibled() {
  var id = prompt("enter");
  var x = document.getElementById(id);
  //console.log(x);
  x.className = "visible";
}
function showarray() {
  document.getElementById("itemarray").innerHTML = items;
}
function additem() {
  var itementerd = prompt("enter item");
  items.push(itementerd);
  showarray();
  console.log(items);
}
