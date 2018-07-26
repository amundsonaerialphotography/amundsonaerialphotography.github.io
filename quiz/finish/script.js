

function go() {
  alert(`${dateOfPic} is way to old for a aerial photo`);
  
  var dateOfPic = document.getElementById("picDate").value;
console.log(dateOfPic);
var date_old;


  if(document.getElementById("picDate").value < 2010){
    date_old = true;
}else{
  date_old = false;
}

}
