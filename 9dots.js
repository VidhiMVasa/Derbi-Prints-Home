
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.idName === "navbar") {
    x.idName += " responsive";
  } else {
    x.idName = "navbar";
  }
}