let menubtn = document.getElementById("menubtn")
let sidenav = document.getElementById("sidenav")
let menu = document.getElementById("menu")

sidenav.style.right = "-250px";

menubtn.onclick = function() {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0"
    }
    else
    {
        sidenav.style.right = "-250px";
    }
}

// let scroll = new smoothscroll('a[href*="#"]',{
//     speed: 1000,
//     speedAsDuration: true
// });