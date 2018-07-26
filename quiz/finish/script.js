var dateOfPic = document.getElementById("picDate");
console.log(dateOfPic);
var date_old;


  if(dateOfPic < 2010){
    date_old = true;
}else{
  date_old = false;
}


function go() {
  alert(`${dateOfPic} is way to old for a aerial photo`);
}
