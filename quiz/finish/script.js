var date = document.getElementById('date').value;
console.log(date);
var date_old;


  if(date < 2010){
    date_old = true;
}else{
  date_old = false;
}


function go() {
  alert(date);
}
