//Toggles the hamburger menu
function toggleHamburger(){

    //Don't function unless mobile device
    const mediaQuery = window.matchMedia('(min-width: 992px)')
    if (mediaQuery.matches){
        return
    }

    //Elements
    var hamburger = document.getElementById("icon-hamburger");
    var hamburgerX = document.getElementById("close-hamburger");
    var navbar = document.getElementById("navbar");
    var mainContent = document.getElementById("main-doc")
    var html = document.querySelector("html");
    var body = document.querySelector("body");
    
    //Open menu
    if (hamburgerX.style.display === "none"){
        hamburgerX.style.display = "block";
        hamburger.style.display = "none";
        navbar.style.display = "flex";
        mainContent.style.opacity = 0;

        //Lock scroll bar
        html.classList.add('stop-scrolling');
        body.classList.add('stop-scrolling');
    }

    //Close menu
    else {
        hamburgerX.style.display = "none";
        hamburger.style.display = "block";
        navbar.style.display = "none";
        mainContent.style.opacity = 100;

        //Unlock scrollbar
        html.classList.remove('stop-scrolling');
        body.classList.remove('stop-scrolling');
    }
}