//Toggles the hamburger menu
function toggleMenu(){

    //Elements
    var hamburger = document.getElementById("icon-hamburger");
    var hamburgerX = document.getElementById("close-hamburger");
    var navbar = document.getElementById("navbar");
    var mainContent = document.getElementById("main-doc")
    
    //Open menu
    if (hamburgerX.style.display === "none"){
        hamburgerX.style.display = "block";
        hamburger.style.display = "none";
        navbar.style.display = "flex";
        mainContent.style.display = "none";
    }

    //Close menu
    else {
        hamburgerX.style.display = "none";
        hamburger.style.display = "block";
        navbar.style.display = "none";
        mainContent.style.display = "flex";
    }
}