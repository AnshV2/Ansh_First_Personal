function help() {
    var img = document.getElementById("dmoj").style.visibility = "hidden"
    var img = document.getElementById("cpDescription").style.visibility = "hidden"
    var img = document.getElementById("cpTitle").style.visibility = "hidden"
    var img = document.getElementById("webTitle").style.visibility = "hidden"
    var img = document.getElementById("webDescription").style.visibility = "hidden"
    var img = document.getElementById("econDescription").style.visibility = "hidden"
    var img = document.getElementById("econTitle").style.visibility = "hidden"
    
;}

function econ() {
    help();
    var img = document.getElementById("econDescription").style.visibility = "visible"
    var img = document.getElementById("econTitle").style.visibility = "visible"
}

function cp() {
    help();
    var img = document.getElementById("dmoj").style.visibility = "visible"
    var img = document.getElementById("cpDescription").style.visibility = "visible"
    var img = document.getElementById("cpTitle").style.visibility = "visible"
}

function web() {
    help();
    var img = document.getElementById("webTitle").style.visibility = "visible"
    var img = document.getElementById("webDescription").style.visibility = "visible"
}

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');


function Circle(x, y, r, dx, dy)
{
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, canvas.width / 40, 0, Math.PI * 2, false); 
        c.strokeStyle = 'rgb(252, 109, 109)';
        c.fillStyle = 'rgb(252, 109, 109)';
        c.fill();
        c.stroke();
    }

    this.update = function() {
        if (this.x > canvas.width - canvas.width / 40 || this.x - canvas.width / 40 < 0) {
            this.dx = -this.dx;
        }
        if (this.y > canvas.height - canvas.width / 40 || this.y - canvas.width / 40 < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
    this.draw();
}




function play() {
    var circle = new Circle(Math.random() * (canvas.width / 2) + canvas.width/40, Math.random() * (canvas.height / 2) + canvas.width/40, canvas.width/40, 2, 2);
    function animate() {
        circle.draw();
            requestAnimationFrame(animate);
            c.fillStyle = 'rgba(26, 26, 29, 0.45)'
            c.fillRect(0, 0, canvas.width, canvas.height);
            circle.update();
    }

    animate();
}

play();

var lastScrollTop = 0;
navbar = document.getElementById("container");
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-10vh";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

var lastScrollTopz = 0;
navbarz = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTopz) {
        navbarz.style.top = "-11vh";
    } else {
        navbarz.style.top = "0";
    }
    lastScrollTopz = scrollTop;
})


function NewTab() {
    window.open(
      "https://www.instagram.com/aneeshyboneechyelectric/", "_blank");
}

function Open() {
    window.open("https://open.spotify.com/user/w7bnwefwlpher29usyhbgy408?si=8f397a6c83064298", "_blank");
}