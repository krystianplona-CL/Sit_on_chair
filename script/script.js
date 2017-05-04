document.addEventListener("DOMContentLoaded", function(){

//////////////////slider//////////////////////

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
////////////////////calc///////////////////////

var list_arr = document.querySelectorAll(".list_arrow");
var list_list = document.querySelectorAll(".list_panel");
var sum_panel_left = document.querySelector(".summary_panel .panel_left");
var sum_panel_right = document.querySelector(".summary_panel .panel_right");
var transport = document.getElementById("transport");
var sum = document.querySelector(".sum");
var total_price = 0;

for (var i = 0; i < list_arr.length; i++) {
  list_arr[i].addEventListener("click", function(event){
    var x = this.parentNode.childNodes[5];
    if(x.style.display === "block"){
      x.style.display = "none";
    }
    else{
      x.style.display = "block";
    }
  })
};//for

var firstul = list_list[0].children;
var secondul = list_list[1].children;
var thirdul = list_list[2].children;

for (var i = 0; i < firstul.length; i++) {
  firstul[i].addEventListener("click", function(event){
    this.parentNode.style.display = "none";
    sum_panel_right.children[0].innerText = this.innerText;
    total_price =+ Number(this.dataset.price);
    sum.innerText = Number(sum.innerText)+total_price;
  });
};
for (var i = 0; i < secondul.length; i++) {
  secondul[i].addEventListener("click", function(event){
    this.parentNode.style.display = "none";
    sum_panel_left.children[1].innerText = this.innerText;
    sum_panel_right.children[1].innerText = this.dataset.price;
    total_price =+ Number(this.dataset.price);
    sum.innerText = Number(sum.innerText)+total_price;
  });
};
for (var i = 0; i < thirdul.length; i++) {
  thirdul[i].addEventListener("click", function(event){
    this.parentNode.style.display = "none";
    sum_panel_left.children[2].innerText = this.innerText;
    sum_panel_right.children[2].innerText = this.dataset.price;
    total_price =+ Number(this.dataset.price);
    sum.innerText = Number(sum.innerText)+total_price;

  });
};

transport.addEventListener("click", function(event){
  if(transport.checked === true){
    sum_panel_right.children[3].innerText = this.dataset.price;
    sum_panel_left.children[3].innerText = "Transport";
    total_price =+ Number(this.dataset.price);
    sum.innerText = Number(sum.innerText)+total_price;
  }
});



});
