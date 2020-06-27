function CustomAlert() {
    this.render = function () {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = String(winH) + "px";
        dialogbox.style.left = String((winW / 2) - (550 * .5)) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxfoot').innerHTML += '<button class="button" onclick="Alert.ok()">Yes!</button>';
    };
    this.ok = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    };
}
var Alert = new CustomAlert();

var cont=document.createElement("div");
cont.setAttribute("class","container");
cont.innerHTML="\n <div id=\"dialogbox\"> <div> <div id=\"dialogboxhead\">Shall we learn About Kaprekar's Number!</div> <div id=\"dialogboxbody\">The number 6174 is called the Kaprekar number.<br> The Indian mathematician D.R.Kaprekar made the following discovery in 1949.<br> (1) Take a four-digit number with different digits(abcd)<br> (2) Form the largest and the smallest number from these four digits (dcba and abcd).<br>  (3) Find the difference between these digits. Maybe this is 6174 (dcba - abcd = 6174?).<br> </div> <div id=\"dialogboxfoot\" class=\"text-white\">Are You Ready to Play with it?</div></div></div>"; 
document.body.appendChild(cont);


window.onload = () => {
    localStorage.clear();
var container=document.createElement("div");
container.setAttribute("class","container");
container.innerHTML="\n <h1>Generate Kaprekar's Number</h1> <br> <br>  <label for=\"fname\">Enter the Number</label><br> <input type=\"number\" id=\"num\" name=\"num\"placeholder=\"6174\"> <br><br> <button type=\"button\" onclick=\"getInputValue();\">Check</button> ";
document.body.appendChild(container);


Alert.render();


};


function getInputValue() {
    // Selecting the input element and get its value 
    var x = document.getElementById("num").value;

    var source = "bensound-ukulele.mp3"
    var audio = document.createElement("audio");
    //
    audio.autoplay = true;
    //
    audio.load()
    audio.addEventListener("load", function() { 
        audio.play(); 
    }, true);
    audio.src = source;

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
