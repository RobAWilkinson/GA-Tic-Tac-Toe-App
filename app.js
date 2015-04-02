/*jshint browser: true, devel: true, esnext: true */
"use strict";
window.onload = function() {
  var boxes = document.getElementsByClassName('box');
  for( var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", setBackgroundColor);
    boxes[i].addEventListener("mouseover", function() {
      this.style.borderRadius = "50px";
      this.style.opacity = 1;

    });
    boxes[i].addEventListener("mouseout", function() {
      if(this.style.transform == "rotate(360deg)") {
        this.style.transform = "rotate(-360deg)";
      }else {
        this.style.transform = "rotate(360deg)";
      }
      this.style.opacity = 0.8;
      this.style.borderRadius = "0px";
    });
  }
  function setBackgroundColor() {
    /*jshint validthis:true */
    this.style.backgroundColor = getRandomColor();
  }
  function getRandomColor() {
    var red = getRandom();
    var blue = getRandom();
    var green = getRandom();
    return `rgb(${red}, ${green}, ${blue})`;
  }
  function getRandom() {
    return Math.floor(Math.random()*255);
  }
};
