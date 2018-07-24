function generate() {
        var max = document.getElementById("myNumber").value;
        // console.log(max);
        document.getElementById("space").innerHTML = Math.floor(Math.random() * max) + 1;
    }
