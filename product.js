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

//product search functionality
var productContainer = document.getElementById("product-container");
var search = document.getElementById('search');
var productlist = productContainer.querySelectorAll("div");

    search.addEventListener("keyup", function(){
        var enteredvalue = event.target.value.toUpperCase();

        for(count = 0; count<productlist.length; count=count+1)
    {

         var productname = productlist[count].querySelector('h1').textContent;

       if(productname.toUpperCase().indexOf(enteredvalue)<0)
       {
           productlist[count].style.display = "none";
       }
       else
       {
           productlist[count].style.display = "block";
       }
    }
    })  