

function go() {
  
  var dateOfPic = document.getElementById("picDate").value;
console.log(dateOfPic);
var date_old;


  if(document.getElementById("picDate").value < 2010){
    date_old = true;
    alert(`${dateOfPic} is way to old for a aerial photo`);
}else{
  date_old = false;
}
  
//——————————————————————————————————————————————————
if (document.getElementById("Plane").checked) {
  var AV = "plane";
}else{
  if (document.getElementById("Drone").checked) {
  AV = "drone";
}}

//——————————————————————————————————————————————————
  if (document.getElementById("baw").checked) {
  var colorValue = "black and white";
}else{
  if (document.getElementById("color").checked) {
  colorValue = color;
}}

  
  
}
