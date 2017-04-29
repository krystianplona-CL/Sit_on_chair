document.addEventListener("DOMContentLoaded", function(){

//slider
var slider = document.getElementById("slider");
var leftbutton = slider.querySelector(".left");
var rightbutton = slider.querySelector(".right");
var photo = document.getElementById("sliderphoto");
var counter = 1;

rightbutton.addEventListener("click", function(event){
  if (counter < 3) {
    counter++;
    photo.src = "images/"+counter+".png";
  }
  else {
    counter = 1;
    photo.src = "images/"+counter+".png";
  }
});
leftbutton.addEventListener("click", function(event){
  if (counter <= 1) {
    counter = 3;
    photo.src = "images/"+counter+".png";
  }
  else {
    counter--;
    photo.src = "images/"+counter+".png";
  }
});


});
