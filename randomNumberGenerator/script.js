var max = document.getElementById("number").value;

function generate(max){

document.getElementById("space").innerHTML = Math.floor(Math.random() * max) + 1;

}
