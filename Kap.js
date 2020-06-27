function getInputValue() {
    // Selecting the input element and get its value 
    var x = document.getElementById("num").value;

    var t = x; var k=1;
    while (t != 6174) {
       

        console.log(t);
        var str = t.toString();
        var count = new Uint8Array(10);
        // Updating the count array 
        for (var i = 0; i < str.length; i++)
            count[str[i] - '0']++;
        // result is to store the final number 

        //To calculate the maximum number from the given digits
        var result = 0, multiplier = 1;
        // Traversing the count array 
        // to calculate the maximum number
        for (var i = 0; i <= 9; i++) {
            while (count[i] > 0) {
                result = result + (i * multiplier);
                count[i]--;
                multiplier = multiplier * 10;
            }
        }


        //To calculate the minimum number from the given digits
        for (var i = 0; i < str.length; i++)
            count[str[i] - '0']++;
        result1 = 0; multiplier1 = 1;
        for (var i = 9; i >= 0; i--) {
            while (count[i] > 0) {
                result1 = result1 + (i * multiplier1);
                count[i]--;
                multiplier1 = multiplier1 * 10;
            }
        }
        //result  :)
        var y = result; var z = result1;
        var w = y - z;

        console.log(y);
        console.log(z);
        console.log(w);
        var a = document.createElement("P");
        a.innerText = `Step-${k}:${y} - ${z}= ${w}`;
        document.body.appendChild(a);

        t = w;
            k=k+1;
    }

}

