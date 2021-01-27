function myFunction(idchose) {
  if(idchose == 1){
    var x = document.getElementById("myDIV");
  }else if (idchose == 2) {
    var x = document.getElementById("myDIV1");
  }else if (idchose == 3) {
    var x = document.getElementById("myDIV2");
  }else if (idchose == 4) {
    var x = document.getElementById("myDIV3");
  }else if (idchose == 5) {
    var x = document.getElementById("myDIV4");
  }else if (idchose == 6) {
    var x = document.getElementById("myDIV5");
  }else if (idchose == 7) {
    var x = document.getElementById("myDIV6");
  }else if (idchose == 8) {
    var x = document.getElementById("myDIV7");
  }else if (idchose == 9) {
    var x = document.getElementById("myDIV8");
  }


  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*function myFunction1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/
