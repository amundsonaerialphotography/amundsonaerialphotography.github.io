function go() {

  
  var dateOfPic = document.getElementById("picDate").value;
console.log(dateOfPic);
var date_old;


  if(document.getElementById("picDate").value < 2010){
    date_old = true;
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
  colorValue = "color";
}}
//——————————————————————————————————————————————————
  if (document.getElementById("no").checked) {
  var change = "no";
}else{
  if (document.getElementById("bit").checked) {
  change = "bit";
}else{
  if (document.getElementById("lot").checked) {
  change = "lot";
}}}
//——————————————————————————————————————————————————
  
  if(((((date_old == false) && AV == "drone") && colorValue == "color") && change == "no") || ((((date_old == true) && (AV == "drone" || (AV == "plane"))) && colorValue == "color") && change == "no")){
    open(`http://amundsonaerialphotography.com/quiz/false/?date_old=${date_old}&AV=${AV}&colorValue=${colorValue}&change=${change}`);
    console.debug('false');
  }else{
    if(((((date_old == undefined) || AV == undefined) || colorValue == undefined) || change == undefined)){
    alert('Please fill out all inputs');
  }else{
    open(`http://amundsonaerialphotography.com/quiz/true/?date_old=${date_old}&AV=${AV}&colorValue=${colorValue}&change=${change}`);
    console.debug('true');
  }}



}
  



  /*
   
    alert(`${date_old},${AV},${colorValue},${change},--------${needPhoto}.`);
    
  if(needPhoto == true){
    open('http://amundsonaerialphotography.com/quiz/false/');
  }else{
    open('http://amundsonaerialphotography.com/quiz/true/');
  }
}
  /*
  if(needPhoto == true){
    open('http://amundsonaerialphotography.com/quiz/false/');
  }else{
    open('http://amundsonaerialphotography.com/quiz/true/');
  }
  */
  

