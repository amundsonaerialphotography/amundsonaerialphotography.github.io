var date = document.getElementById("picDate");
console.log(date);
var date_old;


  if(date < 2010){
    date_old = true;
}else{
  date_old = false;
}


function go() {
  alert(`${date} is way to old for a aerial photo`);
}
