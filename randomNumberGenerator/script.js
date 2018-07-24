function generate() {
        var max = document.getElementById("myNumber").value;
        console.log(max);
   
        if(myNumber = 1) {
                alert('just telling you, if the max is "1", the random number will always be "1"');
                alert("Maybe Moore's law doesn't apply to your brain");
                alert("if you push 'ok' one more time, you will get you random number-- witch WILL be: 1");
                document.getElementById("space").innerHTML = ('1');


}else{
        document.getElementById("space").innerHTML = Math.floor(Math.random() * max) + 1;
    }}
