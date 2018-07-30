function facebook() {
  open('https://www.facebook.com/Amundson-Aerial-Photography-AAP-881108668736951/');
}

var alert = true;
alert(`alert = ${alert}`);

// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

if(alert = true){
modal.style.display = "block";
alert = false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
