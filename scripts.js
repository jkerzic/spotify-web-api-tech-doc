//Toggles the hamburger menu
function toggleMenu(){

    //Elements
    var hamburger = document.getElementById("hamburger-icon");
    var hamburgerX = document.getElementById("hamburger-close");
    var navbar = document.getElementById("navbar");
    
    //Open menu
    if (hamburgerX.style.display === "none"){
        hamburgerX.style.display = "block";
        hamburger.style.display = "none";
        navbar.style.display = "flex";
    }

    //Close menu
    else {
        hamburgerX.style.display = "none";
        hamburger.style.display = "block";
        navbar.style.display = "none";
    }
}