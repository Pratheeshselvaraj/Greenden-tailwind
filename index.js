// selecting side navbar, Menuicon 

var sideNav = document.querySelector("#sidenav");
var menuIcon = document.querySelector("#menuicon");
var closeNav = document.querySelector("#close-nav");

menuIcon.addEventListener("click", function () 
{
    sideNav.style.right = "0";
});

closeNav.addEventListener("click", function (){
    sideNav.style.right = "-50%";
})
