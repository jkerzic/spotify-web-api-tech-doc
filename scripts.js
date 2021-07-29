//Toggles the hamburger menu
function toggleMenu(){

    //Elements
    var hamburger = document.getElementById("hamburger-icon");
    var hamburgerX = document.getElementById("hamburger-close");
    
    //Toggle menu
    if (hamburgerX.style.display === "none"){
        hamburgerX.style.display = "block";
        hamburger.style.display = "none";
    }
    else {
        hamburgerX.style.display = "none";
        hamburger.style.display = "block";
    }
}