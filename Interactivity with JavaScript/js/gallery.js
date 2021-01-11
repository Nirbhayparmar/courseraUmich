/*Name this external file gallery.js*/

function upDate(previewPic) {
  var Url = previewPic.src;
  document.getElementById("image").style.backgroundImage = "url(" + Url + ")";
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
  document.getElementById("image").style.backgroundImage = "url(" + ")";
}
